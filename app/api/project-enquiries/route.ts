import { NextResponse } from 'next/server'

import { requireCmsAdmin } from '@/lib/cms/admin'
import { verifyEmailDeliverability } from '@/lib/email-deliverability'
import { validateEmailLocally } from '@/lib/email-validation'
import { sendProjectEnquiryEmails } from '@/lib/email/project-enquiry-emails'
import { syncProjectEnquiryToPipedrive } from '@/lib/pipedrive'
import { normalizeProjectEnquiryInput, type ProjectEnquiryInput } from '@/lib/project-enquiries'
import {
  deleteProjectEnquiryRecord,
  listProjectEnquiryRecords,
  saveProjectEnquiryRecord,
} from '@/lib/project-enquiries-storage'

function getRequiredText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
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

  const input = normalizeProjectEnquiryInput({
    firstName: getRequiredText(rawBody.firstName),
    lastName: getRequiredText(rawBody.lastName),
    company: getRequiredText(rawBody.company),
    email: getRequiredText(rawBody.email),
    phone: getRequiredText(rawBody.phone),
    state: getRequiredText(rawBody.state),
    suburbTown: getRequiredText(rawBody.suburbTown),
    industry: getRequiredText(rawBody.industry),
    service: getRequiredText(rawBody.service),
    projectStage: getRequiredText(rawBody.projectStage),
    timeline: getRequiredText(rawBody.timeline),
    budget: getRequiredText(rawBody.budget),
    tankType: getRequiredText(rawBody.tankType),
    message: getRequiredText(rawBody.message),
  })

  if (!input.firstName || !input.lastName || !input.email || !input.message) {
    return NextResponse.json(
      { ok: false, reason: 'Please complete all required fields.' },
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

  const deliverability = await verifyEmailDeliverability(localValidation.email)
  if (!deliverability.ok) {
    return NextResponse.json(
      { ok: false, reason: deliverability.reason },
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
    source: 'website',
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
