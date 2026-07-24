import type { ProjectEnquiry } from '@/lib/project-enquiries'
import { createSupabaseAdminClient } from '@/lib/supabase/admin'

const BUCKET = 'project-enquiries'
const PREFIX = 'entries'

function entryPath(id: string) {
  return `${PREFIX}/${id}.json`
}

function normalizeStoredRecord(value: unknown): ProjectEnquiry | null {
  if (!value || typeof value !== 'object') return null
  const row = value as Record<string, unknown>

  if (
    typeof row.id !== 'string' ||
    typeof row.firstName !== 'string' ||
    typeof row.lastName !== 'string' ||
    typeof row.email !== 'string' ||
    typeof row.message !== 'string' ||
    typeof row.source !== 'string' ||
    typeof row.submissionStatus !== 'string' ||
    typeof row.emailDeliveryStatus !== 'string' ||
    typeof row.submittedAt !== 'string'
  ) {
    return null
  }

  return {
    id: row.id,
    firstName: row.firstName,
    lastName: row.lastName,
    company: typeof row.company === 'string' ? row.company : '',
    email: row.email,
    phone: typeof row.phone === 'string' ? row.phone : '',
    state: typeof row.state === 'string' ? row.state : '',
    suburbTown: typeof row.suburbTown === 'string' ? row.suburbTown : '',
    industry: typeof row.industry === 'string' ? row.industry : '',
    service: typeof row.service === 'string' ? row.service : '',
    projectStage: typeof row.projectStage === 'string' ? row.projectStage : '',
    timeline: typeof row.timeline === 'string' ? row.timeline : '',
    budget: typeof row.budget === 'string' ? row.budget : '',
    tankType: typeof row.tankType === 'string' ? row.tankType : '',
    message: row.message,
    source: row.source,
    submissionStatus: row.submissionStatus as ProjectEnquiry['submissionStatus'],
    emailDeliveryStatus: row.emailDeliveryStatus as ProjectEnquiry['emailDeliveryStatus'],
    emailDeliveryError: typeof row.emailDeliveryError === 'string' ? row.emailDeliveryError : null,
    submittedAt: row.submittedAt,
    reviewedAt: typeof row.reviewedAt === 'string' ? row.reviewedAt : null,
    pipedrivePersonId: typeof row.pipedrivePersonId === 'number' ? row.pipedrivePersonId : null,
    pipedriveOrganizationId: typeof row.pipedriveOrganizationId === 'number' ? row.pipedriveOrganizationId : null,
    pipedriveLeadId: typeof row.pipedriveLeadId === 'string' ? row.pipedriveLeadId : null,
    pipedriveSyncedAt: typeof row.pipedriveSyncedAt === 'string' ? row.pipedriveSyncedAt : null,
    pipedriveSyncError: typeof row.pipedriveSyncError === 'string' ? row.pipedriveSyncError : null,
    campaignId: typeof row.campaignId === 'string' ? row.campaignId : '',
    jobRole: typeof row.jobRole === 'string' ? row.jobRole : '',
    preferredContactMethod:
      typeof row.preferredContactMethod === 'string' ? row.preferredContactMethod : '',
    attribution:
      row.attribution && typeof row.attribution === 'object'
        ? {
            landingPage: typeof (row.attribution as Record<string, unknown>).landingPage === 'string'
              ? String((row.attribution as Record<string, unknown>).landingPage)
              : '',
            referrer: typeof (row.attribution as Record<string, unknown>).referrer === 'string'
              ? String((row.attribution as Record<string, unknown>).referrer)
              : '',
            utmSource: typeof (row.attribution as Record<string, unknown>).utmSource === 'string'
              ? String((row.attribution as Record<string, unknown>).utmSource)
              : '',
            utmMedium: typeof (row.attribution as Record<string, unknown>).utmMedium === 'string'
              ? String((row.attribution as Record<string, unknown>).utmMedium)
              : '',
            utmCampaign: typeof (row.attribution as Record<string, unknown>).utmCampaign === 'string'
              ? String((row.attribution as Record<string, unknown>).utmCampaign)
              : '',
            utmContent: typeof (row.attribution as Record<string, unknown>).utmContent === 'string'
              ? String((row.attribution as Record<string, unknown>).utmContent)
              : '',
            utmTerm: typeof (row.attribution as Record<string, unknown>).utmTerm === 'string'
              ? String((row.attribution as Record<string, unknown>).utmTerm)
              : '',
            gclid: typeof (row.attribution as Record<string, unknown>).gclid === 'string'
              ? String((row.attribution as Record<string, unknown>).gclid)
              : '',
            fbclid: typeof (row.attribution as Record<string, unknown>).fbclid === 'string'
              ? String((row.attribution as Record<string, unknown>).fbclid)
              : '',
          }
        : undefined,
  }
}

export async function saveProjectEnquiryRecord(record: ProjectEnquiry) {
  const supabase = createSupabaseAdminClient()
  if (!supabase) {
    return { ok: false as const, error: 'Supabase admin storage is not configured.' }
  }

  const payload = JSON.stringify(record, null, 2)
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(entryPath(record.id), payload, {
      contentType: 'application/json; charset=utf-8',
      upsert: true,
    })

  if (error) {
    return { ok: false as const, error: error.message }
  }

  return { ok: true as const }
}

export async function listProjectEnquiryRecords() {
  const supabase = createSupabaseAdminClient()
  if (!supabase) {
    return { ok: false as const, error: 'Supabase admin storage is not configured.', data: [] as ProjectEnquiry[] }
  }

  const { data: files, error } = await supabase.storage
    .from(BUCKET)
    .list(PREFIX, {
      limit: 1000,
      offset: 0,
      sortBy: { column: 'name', order: 'desc' },
    })

  if (error) {
    return { ok: false as const, error: error.message, data: [] as ProjectEnquiry[] }
  }

  const records = await Promise.all(
    (files ?? [])
      .filter((file) => file.name.endsWith('.json'))
      .map(async (file) => {
        const { data: blob, error: downloadError } = await supabase.storage
          .from(BUCKET)
          .download(`${PREFIX}/${file.name}`)

        if (downloadError || !blob) {
          return null
        }

        try {
          const text = await blob.text()
          return normalizeStoredRecord(JSON.parse(text))
        } catch {
          return null
        }
      }),
  )

  const data = records
    .filter((item): item is ProjectEnquiry => Boolean(item))
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())

  return { ok: true as const, data }
}

export async function deleteProjectEnquiryRecord(id: string) {
  const supabase = createSupabaseAdminClient()
  if (!supabase) {
    return { ok: false as const, error: 'Supabase admin storage is not configured.' }
  }

  const { error } = await supabase.storage
    .from(BUCKET)
    .remove([entryPath(id)])

  if (error) {
    return { ok: false as const, error: error.message }
  }

  return { ok: true as const }
}
