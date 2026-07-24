import { NextResponse } from 'next/server'

import { requireCmsAdmin } from '@/lib/cms/admin'
import { validateEmailLocally } from '@/lib/email-validation'
import { sendProjectEnquiryEmails } from '@/lib/email/project-enquiry-emails'
import { syncProjectEnquiryToPipedrive } from '@/lib/pipedrive'
import {
  normalizeProjectEnquiryInput,
  type ProjectEnquiryAttribution,
  type ProjectEnquiryInput,
} from '@/lib/project-enquiries'
import {
  deleteProjectEnquiryRecord,
  listProjectEnquiryRecords,
  saveProjectEnquiryRecord,
} from '@/lib/project-enquiries-storage'

function getRequiredText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

const CAMPAIGN_IDS = new Set(['tank-remediation', 'remote-water-infrastructure'])

function getLimitedText(value: unknown, maxLength = 500) {
  return getRequiredText(value).slice(0, maxLength)
}

function getAttribution(value: unknown): ProjectEnquiryAttribution | undefined {
  if (!value || typeof value !== 'object') return undefined
  const row = value as Record<string, unknown>

  const attribution = {
    landingPage: getLimitedText(row.landingPage, 2000),
    referrer: getLimitedText(row.referrer, 2000),
    utmSource: getLimitedText(row.utmSource),
    utmMedium: getLimitedText(row.utmMedium),
    utmCampaign: getLimitedText(row.utmCampaign),
    utmContent: getLimitedText(row.utmContent),
    utmTerm: getLimitedText(row.utmTerm),
    gclid: getLimitedText(row.gclid, 1000),
    fbclid: getLimitedText(row.fbclid, 1000),
  }

  return Object.values(attribution).some(Boolean) ? attribution : undefined
}

export async function GET() {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return NextResponse.json({ ok: false, reason: auth.error }, { status: auth.status })
  }

  const result = await listProjectEnquiryRecords()
  if (!result.ok) {
    return NextResponse.json({ ok: false, reason: result.error }, { status: 500 })
  }

  return NextResponse.json({ ok: true, enquiries: result.data })
}

export async function DELETE(request: Request) {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return NextResponse.json({ ok: false, reason: auth.error }, { status: auth.status })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')?.trim()

  if (!id) {
    return NextResponse.json({ ok: false, reason: 'Missing enquiry id.' }, { status: 400 })
  }

  const result = await deleteProjectEnquiryRecord(id)
  if (!result.ok) {
    return NextResponse.json({ ok: false, reason: result.error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

export async function POST(request: Request) {
  let rawBody: Record<string, unknown>

  try {
    rawBody = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, reason: 'Invalid request body.' }, { status: 400 })
  }

  if (getRequiredText(rawBody.website)) {
    return NextResponse.json({ ok: true })
  }

  const submittedSource = getLimitedText(rawBody.source, 100)
  const campaignId = getLimitedText(rawBody.campaignId, 100)
  const isCampaignEnquiry = submittedSource === 'paid-campaign'

  if (isCampaignEnquiry && !CAMPAIGN_IDS.has(campaignId)) {
    return NextResponse.json(
      { ok: false, reason: 'Invalid campaign attribution.' },
      { status: 400 },
    )
  }

  if (isCampaignEnquiry && rawBody.consent !== true) {
    return NextResponse.json(
      { ok: false, reason: 'Please confirm you agree to be contacted.' },
      { status: 400 },
    )
  }

  const input = normalizeProjectEnquiryInput({
    firstName: getLimitedText(rawBody.firstName),
    lastName: getLimitedText(rawBody.lastName),
    company: getLimitedText(rawBody.company),
    email: getLimitedText(rawBody.email),
    phone: getLimitedText(rawBody.phone),
    state: getLimitedText(rawBody.state),
    suburbTown: getLimitedText(rawBody.suburbTown),
    industry: getLimitedText(rawBody.industry),
    service: getLimitedText(rawBody.service),
    projectStage: getLimitedText(rawBody.projectStage),
    timeline: getLimitedText(rawBody.timeline),
    budget: getLimitedText(rawBody.budget),
    tankType: getLimitedText(rawBody.tankType),
    message: getLimitedText(rawBody.message, 10000),
    source: isCampaignEnquiry ? 'paid-campaign' : 'website',
    campaignId: isCampaignEnquiry ? campaignId : '',
    jobRole: isCampaignEnquiry ? getLimitedText(rawBody.jobRole) : '',
    preferredContactMethod: isCampaignEnquiry
      ? getLimitedText(rawBody.preferredContactMethod, 100)
      : '',
    attribution: isCampaignEnquiry ? getAttribution(rawBody.attribution) : undefined,
  })

  if (!input.firstName || !input.lastName || !input.email || !input.message) {
    return NextResponse.json(
      { ok: false, reason: 'Please complete all required fields.' },
      { status: 400 },
    )
  }

  if (isCampaignEnquiry && (!input.company || !input.phone)) {
    return NextResponse.json(
      { ok: false, reason: 'Please provide your company and phone number.' },
      { status: 400 },
    )
  }

  const localValidation = validateEmailLocally(input.email)
  if (!localValidation.ok) {
    return NextResponse.json(
      { ok: false, reason: localValidation.reason },
      { status: 400 },
    )
  }

  const recordId = crypto.randomUUID()
  const record = {
    id: recordId,
    first_name: input.firstName,
    last_name: input.lastName,
    company: input.company || '',
    email: localValidation.email,
    phone: input.phone || '',
    state: input.state || '',
    suburbTown: input.suburbTown || '',
    industry: input.industry || '',
    service: input.service || '',
    projectStage: input.projectStage || '',
    timeline: input.timeline || '',
    budget: input.budget || '',
    tankType: input.tankType || '',
    message: input.message,
    source: input.source || 'website',
    campaignId: input.campaignId || '',
    jobRole: input.jobRole || '',
    preferredContactMethod: input.preferredContactMethod || '',
    attribution: input.attribution,
    submissionStatus: 'new' as const,
    emailDeliveryStatus: 'skipped' as const,
    emailDeliveryError: null as string | null,
    submittedAt: new Date().toISOString(),
    reviewedAt: null as string | null,
    pipedrivePersonId: null as number | null,
    pipedriveOrganizationId: null as number | null,
    pipedriveLeadId: null as string | null,
    pipedriveSyncedAt: null as string | null,
    pipedriveSyncError: null as string | null,
  }

  const saveResult = await saveProjectEnquiryRecord({
    id: record.id,
    firstName: record.first_name,
    lastName: record.last_name,
    company: record.company,
    email: record.email,
    phone: record.phone,
    state: record.state,
    suburbTown: record.suburbTown,
    industry: record.industry,
    service: record.service,
    projectStage: record.projectStage,
    timeline: record.timeline,
    budget: record.budget,
    tankType: record.tankType,
    message: record.message,
    source: record.source,
    submissionStatus: record.submissionStatus,
    emailDeliveryStatus: record.emailDeliveryStatus,
    emailDeliveryError: record.emailDeliveryError,
    submittedAt: record.submittedAt,
    reviewedAt: record.reviewedAt,
    pipedrivePersonId: record.pipedrivePersonId,
    pipedriveOrganizationId: record.pipedriveOrganizationId,
    pipedriveLeadId: record.pipedriveLeadId,
    pipedriveSyncedAt: record.pipedriveSyncedAt,
    pipedriveSyncError: record.pipedriveSyncError,
    campaignId: record.campaignId,
    jobRole: record.jobRole,
    preferredContactMethod: record.preferredContactMethod,
    attribution: record.attribution,
  })

  if (!saveResult.ok) {
    console.error('[project_enquiries] storage error', saveResult.error)
    return NextResponse.json(
      { ok: false, reason: 'Project enquiry storage is not ready yet. Please try again shortly.' },
      { status: 500 },
    )
  }

  const emailResult = await sendProjectEnquiryEmails({
    ...input,
    email: localValidation.email,
  } satisfies ProjectEnquiryInput)

  const emailDeliveryStatus = emailResult.confirmationSent ? 'sent' : emailResult.error ? 'failed' : 'skipped'

  const pipedriveResult = await syncProjectEnquiryToPipedrive({
    sourceId: record.id,
    firstName: record.first_name,
    lastName: record.last_name,
    company: record.company,
    email: record.email,
    phone: record.phone,
    state: record.state,
    suburbTown: record.suburbTown,
    industry: record.industry,
    service: record.service,
    projectStage: record.projectStage,
    timeline: record.timeline,
    budget: record.budget,
    tankType: record.tankType,
    message: record.message,
    source: record.source,
    campaignId: record.campaignId,
    jobRole: record.jobRole,
    preferredContactMethod: record.preferredContactMethod,
    attribution: record.attribution,
    submittedAt: record.submittedAt,
  })

  await saveProjectEnquiryRecord({
    id: record.id,
    firstName: record.first_name,
    lastName: record.last_name,
    company: record.company,
    email: record.email,
    phone: record.phone,
    state: record.state,
    suburbTown: record.suburbTown,
    industry: record.industry,
    service: record.service,
    projectStage: record.projectStage,
    timeline: record.timeline,
    budget: record.budget,
    tankType: record.tankType,
    message: record.message,
    source: record.source,
    submissionStatus: record.submissionStatus,
    emailDeliveryStatus,
    emailDeliveryError: emailResult.error ?? null,
    submittedAt: record.submittedAt,
    reviewedAt: record.reviewedAt,
    pipedrivePersonId: pipedriveResult.personId ?? null,
    pipedriveOrganizationId: pipedriveResult.organizationId ?? null,
    pipedriveLeadId: pipedriveResult.leadId ?? null,
    pipedriveSyncedAt: pipedriveResult.ok ? new Date().toISOString() : null,
    pipedriveSyncError: pipedriveResult.ok ? null : pipedriveResult.error ?? 'Pipedrive sync failed.',
    campaignId: record.campaignId,
    jobRole: record.jobRole,
    preferredContactMethod: record.preferredContactMethod,
    attribution: record.attribution,
  })

  if (!pipedriveResult.ok) {
    console.error('[pipedrive] project enquiry sync error', pipedriveResult.error)
  }

  return NextResponse.json({
    ok: true,
    id: record.id,
    emailSent: emailResult.confirmationSent,
    notificationSent: emailResult.notificationSent,
    pipedriveSynced: pipedriveResult.ok,
  })
}
