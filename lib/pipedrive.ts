import 'server-only'

type PipedriveSearchItem = {
  item?: {
    id?: number | string
  }
}

type PipedriveLeadId = string

export type PipedriveSyncResult = {
  ok: boolean
  personId?: number
  organizationId?: number | null
  leadId?: PipedriveLeadId
  noteId?: number | null
  error?: string
}

function getPipedriveToken() {
  return process.env.PIPEDRIVE_API_TOKEN?.trim() ?? ''
}

export function hasPipedriveEnv() {
  return Boolean(getPipedriveToken())
}

async function pipedriveFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getPipedriveToken()
  if (!token) {
    throw new Error('Pipedrive token is not configured.')
  }

  const url = new URL(`https://api.pipedrive.com${path}`)
  url.searchParams.set('api_token', token)

  const response = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    cache: 'no-store',
  })

  const data = (await response.json().catch(() => null)) as {
    success?: boolean
    data?: T
    error?: string
  } | null

  if (!response.ok || !data?.success) {
    throw new Error(data?.error || `Pipedrive request failed (${response.status}).`)
  }

  return data.data as T
}

function normalizePhone(phone?: string) {
  const trimmed = phone?.trim() ?? ''
  return trimmed || null
}

function normalizeCompany(company?: string) {
  const trimmed = company?.trim() ?? ''
  return trimmed || null
}

function htmlEscape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function paragraph(label: string, value: string | null | undefined) {
  const safe = value?.trim() ? htmlEscape(value.trim()).replace(/\n/g, '<br />') : '—'
  return `<p><strong>${htmlEscape(label)}:</strong> ${safe}</p>`
}

function getSearchItemId(items: PipedriveSearchItem[] | undefined) {
  const id = items?.[0]?.item?.id
  if (typeof id === 'number') return id
  if (typeof id === 'string' && id.trim()) return id
  return null
}

async function findPersonByEmail(email: string) {
  const data = await pipedriveFetch<{ items?: PipedriveSearchItem[] }>(
    `/api/v2/persons/search?term=${encodeURIComponent(email)}&fields=email&exact_match=true&limit=1`,
  )

  const id = getSearchItemId(data.items)
  return typeof id === 'number' ? id : null
}

async function findOrganizationByName(name: string) {
  const data = await pipedriveFetch<{ items?: PipedriveSearchItem[] }>(
    `/api/v2/organizations/search?term=${encodeURIComponent(name)}&fields=name&exact_match=true&limit=1`,
  )

  const id = getSearchItemId(data.items)
  return typeof id === 'number' ? id : null
}

async function findLeadByTitle(
  title: string,
  personId?: number,
  organizationId?: number,
) {
  const url = new URL('/api/v2/leads/search', 'https://api.pipedrive.com')
  url.searchParams.set('term', title)
  url.searchParams.set('fields', 'title')
  url.searchParams.set('exact_match', 'true')
  url.searchParams.set('limit', '1')
  if (personId) url.searchParams.set('person_id', String(personId))
  if (organizationId) url.searchParams.set('organization_id', String(organizationId))

  const data = await pipedriveFetch<{ items?: PipedriveSearchItem[] }>(
    `${url.pathname}?${url.searchParams.toString()}`,
  )

  const id = getSearchItemId(data.items)
  return typeof id === 'string' ? id : null
}

async function createOrganization(name: string) {
  const data = await pipedriveFetch<{ id: number }>('/v2/organizations', {
    method: 'POST',
    body: JSON.stringify({ name }),
  })
  return data.id
}

async function createPerson(params: {
  name: string
  email: string
  phone?: string | null
  organizationId?: number | null
}) {
  const data = await pipedriveFetch<{ id: number }>('/v2/persons', {
    method: 'POST',
    body: JSON.stringify({
      name: params.name,
      org_id: params.organizationId ?? undefined,
      emails: [{ value: params.email, primary: true, label: 'work' }],
      phones: params.phone ? [{ value: params.phone, primary: true, label: 'work' }] : undefined,
    }),
  })
  return data.id
}

async function createLead(params: {
  title: string
  personId: number
  organizationId?: number | null
}) {
  const data = await pipedriveFetch<{ id: string }>('/v1/leads', {
    method: 'POST',
    body: JSON.stringify({
      title: params.title,
      person_id: params.personId,
      organization_id: params.organizationId ?? undefined,
    }),
  })
  return data.id
}

async function addLeadNote(params: {
  leadId: string
  personId: number
  organizationId?: number | null
  content: string
}) {
  const data = await pipedriveFetch<{ id: number }>('/v1/notes', {
    method: 'POST',
    body: JSON.stringify({
      lead_id: params.leadId,
      person_id: params.personId,
      org_id: params.organizationId ?? undefined,
      pinned_to_lead_flag: 1,
      pinned_to_person_flag: 1,
      pinned_to_organization_flag: params.organizationId ? 1 : 0,
      content: params.content,
    }),
  })
  return data.id
}

async function ensurePerson(params: {
  name: string
  email: string
  phone?: string | null
  organizationId?: number | null
}) {
  const existingPersonId = await findPersonByEmail(params.email)

  if (existingPersonId) {
    return existingPersonId
  }

  return createPerson(params)
}

async function ensureOrganization(company?: string) {
  const normalized = normalizeCompany(company)
  if (!normalized) {
    return null
  }

  const existingId = await findOrganizationByName(normalized)
  if (existingId) {
    return existingId
  }

  return createOrganization(normalized)
}

export async function syncProjectEnquiryToPipedrive(params: {
  sourceId: string
  firstName: string
  lastName: string
  company?: string
  email: string
  phone?: string
  state?: string
  suburbTown?: string
  industry?: string
  service?: string
  projectStage?: string
  timeline?: string
  budget?: string
  tankType?: string
  message: string
  submittedAt: string
}) : Promise<PipedriveSyncResult> {
  if (!hasPipedriveEnv()) {
    return { ok: false, error: 'Pipedrive token is not configured.' }
  }

  try {
    const organizationId = await ensureOrganization(params.company)
    const fullName = `${params.firstName} ${params.lastName}`.trim() || params.email
    const personId = await ensurePerson({
      name: fullName,
      email: params.email,
      phone: normalizePhone(params.phone) ?? undefined,
      organizationId,
    })

    const title = `Project Enquiry · ${params.service?.trim() || 'General'} · ${fullName}`
    let leadId = await findLeadByTitle(title, personId, organizationId ?? undefined)
    if (!leadId) {
      leadId = await createLead({ title, personId, organizationId })
    }

    const noteId = await addLeadNote({
      leadId,
      personId,
      organizationId,
      content: [
        '<p><strong>PC Water Website Project Enquiry</strong></p>',
        paragraph('Source record ID', params.sourceId),
        paragraph('Submitted at', params.submittedAt),
        paragraph('Contact name', fullName),
        paragraph('Email', params.email),
        paragraph('Phone', params.phone),
        paragraph('Company', params.company),
        paragraph('State', params.state),
        paragraph('Suburb / Town', params.suburbTown),
        paragraph('Industry', params.industry),
        paragraph('Service', params.service),
        paragraph('Project stage', params.projectStage),
        paragraph('Timeline', params.timeline),
        paragraph('Budget', params.budget),
        paragraph('Tank type / application', params.tankType),
        paragraph('Message', params.message),
      ].join(''),
    })

    return { ok: true, personId, organizationId, leadId, noteId }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Pipedrive sync failed.',
    }
  }
}

export async function syncResourceLeadToPipedrive(params: {
  email: string
  resourceSlug: string
  resourceTitle: string
  division: string
  downloadedAt?: string
}) : Promise<PipedriveSyncResult> {
  if (!hasPipedriveEnv()) {
    return { ok: false, error: 'Pipedrive token is not configured.' }
  }

  try {
    const inferredName = params.email.split('@')[0]?.replace(/[._-]+/g, ' ').trim() || params.email
    const personId = await ensurePerson({
      name: inferredName,
      email: params.email,
    })

    const title = `Resource Download · ${params.resourceTitle}`
    let leadId = await findLeadByTitle(title, personId)
    if (!leadId) {
      leadId = await createLead({ title, personId })
    }

    const noteId = await addLeadNote({
      leadId,
      personId,
      content: [
        '<p><strong>PC Water Website Resource Download</strong></p>',
        paragraph('Email', params.email),
        paragraph('Division', params.division),
        paragraph('Resource title', params.resourceTitle),
        paragraph('Resource slug', params.resourceSlug),
        paragraph('Downloaded at', params.downloadedAt ?? new Date().toISOString()),
      ].join(''),
    })

    return { ok: true, personId, organizationId: null, leadId, noteId }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Pipedrive sync failed.',
    }
  }
}
