import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY
const PIPEDRIVE_API_TOKEN = process.env.PIPEDRIVE_API_TOKEN

if (!SUPABASE_URL || !SUPABASE_SECRET_KEY || !PIPEDRIVE_API_TOKEN) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SECRET_KEY, or PIPEDRIVE_API_TOKEN.')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

async function pipedriveFetch(path, init = {}) {
  const url = new URL(`https://api.pipedrive.com${path}`)
  url.searchParams.set('api_token', PIPEDRIVE_API_TOKEN)

  const response = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  })

  const data = await response.json().catch(() => null)
  if (!response.ok || !data?.success) {
    throw new Error(data?.error || `Pipedrive request failed (${response.status}).`)
  }

  return data.data
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function paragraph(label, value) {
  const safe = value ? escapeHtml(String(value)).replace(/\n/g, '<br />') : '—'
  return `<p><strong>${escapeHtml(label)}:</strong> ${safe}</p>`
}

function firstSearchId(items) {
  const id = items?.[0]?.item?.id
  return id ?? null
}

async function findPersonByEmail(email) {
  const data = await pipedriveFetch(`/api/v2/persons/search?term=${encodeURIComponent(email)}&fields=email&exact_match=true&limit=1`)
  const id = firstSearchId(data?.items)
  return typeof id === 'number' ? id : null
}

async function findOrganizationByName(name) {
  const data = await pipedriveFetch(`/api/v2/organizations/search?term=${encodeURIComponent(name)}&fields=name&exact_match=true&limit=1`)
  const id = firstSearchId(data?.items)
  return typeof id === 'number' ? id : null
}

async function findLeadByTitle(title, personId, organizationId) {
  const url = new URL('https://api.pipedrive.com/api/v2/leads/search')
  url.searchParams.set('term', title)
  url.searchParams.set('fields', 'title')
  url.searchParams.set('exact_match', 'true')
  url.searchParams.set('limit', '1')
  if (personId) url.searchParams.set('person_id', String(personId))
  if (organizationId) url.searchParams.set('organization_id', String(organizationId))

  const data = await pipedriveFetch(`${url.pathname}?${url.searchParams.toString()}`)
  const id = firstSearchId(data?.items)
  return typeof id === 'string' ? id : null
}

async function ensureOrganization(company) {
  const normalized = company?.trim()
  if (!normalized) return null

  const existing = await findOrganizationByName(normalized)
  if (existing) return existing

  const created = await pipedriveFetch('/v2/organizations', {
    method: 'POST',
    body: JSON.stringify({ name: normalized }),
  })

  return created.id
}

async function ensurePerson({ name, email, phone, organizationId }) {
  const existing = await findPersonByEmail(email)

  if (existing) {
    return existing
  }

  const created = await pipedriveFetch('/v2/persons', {
    method: 'POST',
    body: JSON.stringify({
      name,
      org_id: organizationId ?? undefined,
      emails: [{ value: email, primary: true, label: 'work' }],
      phones: phone ? [{ value: phone, primary: true, label: 'work' }] : undefined,
    }),
  })

  return created.id
}

async function ensureLead({ title, personId, organizationId }) {
  const existing = await findLeadByTitle(title, personId, organizationId)
  if (existing) return existing

  const created = await pipedriveFetch('/v1/leads', {
    method: 'POST',
    body: JSON.stringify({
      title,
      person_id: personId,
      organization_id: organizationId ?? undefined,
    }),
  })

  return created.id
}

async function addNote({ leadId, personId, organizationId, content }) {
  const created = await pipedriveFetch('/v1/notes', {
    method: 'POST',
    body: JSON.stringify({
      lead_id: leadId,
      person_id: personId,
      org_id: organizationId ?? undefined,
      pinned_to_lead_flag: 1,
      pinned_to_person_flag: 1,
      pinned_to_organization_flag: organizationId ? 1 : 0,
      content,
    }),
  })

  return created.id
}

async function syncProjectEnquiry(record) {
  if (record.pipedriveLeadId) {
    return { skipped: true }
  }

  const organizationId = await ensureOrganization(record.company)
  const fullName = `${record.firstName} ${record.lastName}`.trim() || record.email
  const personId = await ensurePerson({
    name: fullName,
    email: record.email,
    phone: record.phone?.trim() || undefined,
    organizationId,
  })

  const title = `Project Enquiry · ${record.service?.trim() || 'General'} · ${fullName}`
  const leadId = await ensureLead({ title, personId, organizationId })
  await addNote({
    leadId,
    personId,
    organizationId,
    content: [
      '<p><strong>PC Water Website Project Enquiry</strong></p>',
      paragraph('Source record ID', record.id),
      paragraph('Submitted at', record.submittedAt),
      paragraph('Contact name', fullName),
      paragraph('Email', record.email),
      paragraph('Phone', record.phone),
      paragraph('Company', record.company),
      paragraph('State', record.state),
      paragraph('Suburb / Town', record.suburbTown),
      paragraph('Industry', record.industry),
      paragraph('Service', record.service),
      paragraph('Project stage', record.projectStage),
      paragraph('Timeline', record.timeline),
      paragraph('Budget', record.budget),
      paragraph('Tank type / application', record.tankType),
      paragraph('Message', record.message),
    ].join(''),
  })

  const updated = {
    ...record,
    pipedrivePersonId: personId,
    pipedriveOrganizationId: organizationId,
    pipedriveLeadId: leadId,
    pipedriveSyncedAt: new Date().toISOString(),
    pipedriveSyncError: null,
  }

  const path = `entries/${record.id}.json`
  const { error } = await supabase.storage
    .from('project-enquiries')
    .upload(path, JSON.stringify(updated, null, 2), {
      contentType: 'application/json; charset=utf-8',
      upsert: true,
    })

  if (error) {
    throw new Error(`Failed updating stored enquiry ${record.id}: ${error.message}`)
  }

  return { skipped: false, leadId }
}

async function syncResourceLead(record) {
  const inferredName = record.email.split('@')[0]?.replace(/[._-]+/g, ' ').trim() || record.email
  const personId = await ensurePerson({
    name: inferredName,
    email: record.email,
  })
  const title = `Resource Download · ${record.resource_title ?? record.resource_slug}`
  const leadId = await ensureLead({ title, personId, organizationId: null })

  await addNote({
    leadId,
    personId,
    content: [
      '<p><strong>PC Water Website Resource Download</strong></p>',
      paragraph('Email', record.email),
      paragraph('Division', record.division),
      paragraph('Resource title', record.resource_title ?? record.resource_slug),
      paragraph('Resource slug', record.resource_slug),
      paragraph('Downloaded at', record.downloaded_at),
    ].join(''),
  })

  return leadId
}

async function loadProjectEnquiries() {
  const { data: files, error } = await supabase.storage
    .from('project-enquiries')
    .list('entries', { limit: 1000, offset: 0, sortBy: { column: 'name', order: 'desc' } })

  if (error) {
    throw new Error(`Failed listing project enquiries: ${error.message}`)
  }

  const rows = []
  for (const file of files ?? []) {
    if (!file.name.endsWith('.json')) continue
    const { data: blob, error: downloadError } = await supabase.storage
      .from('project-enquiries')
      .download(`entries/${file.name}`)

    if (downloadError || !blob) continue

    const text = await blob.text()
    rows.push(JSON.parse(text))
  }

  return rows
}

async function loadResourceLeads() {
  const { data, error } = await supabase
    .from('resource_leads')
    .select('*')
    .order('downloaded_at', { ascending: true })

  if (error) {
    throw new Error(`Failed loading resource leads: ${error.message}`)
  }

  return data ?? []
}

async function main() {
  const projectEnquiries = await loadProjectEnquiries()
  const resourceLeads = await loadResourceLeads()

  let syncedEnquiries = 0
  let skippedEnquiries = 0
  for (const enquiry of projectEnquiries) {
    try {
      const result = await syncProjectEnquiry(enquiry)
      if (result.skipped) {
        skippedEnquiries += 1
      } else {
        syncedEnquiries += 1
      }
    } catch (error) {
      console.error(`Project enquiry sync failed for ${enquiry.id}:`, error.message)
    }
  }

  let syncedResourceLeads = 0
  for (const lead of resourceLeads) {
    try {
      await syncResourceLead(lead)
      syncedResourceLeads += 1
    } catch (error) {
      console.error(`Resource lead sync failed for ${lead.id}:`, error.message)
    }
  }

  console.log(`Project enquiries synced: ${syncedEnquiries}`)
  console.log(`Project enquiries skipped: ${skippedEnquiries}`)
  console.log(`Resource leads synced: ${syncedResourceLeads}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
