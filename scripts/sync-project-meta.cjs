const fs = require('fs')
const path = require('path')

const PROJECT_SERVICE_FALLBACKS = {
  'hobart-nyrstar': [
    'Custom Tank Design & Engineering',
    'Professional Tank Installation',
    'Foundation & Civil Integration',
  ],
  'borumba-hydro': [
    'Custom Tank Design & Engineering',
    'Remote Area Project Delivery',
    'RPVC Liner Systems',
    'Foundation & Civil Integration',
    'Professional Tank Installation',
  ],
  'doomadgee-wtp': [
    'Remote Area Project Delivery',
    'Custom Tank Design & Engineering',
    'Foundation & Civil Integration',
    'Professional Tank Installation',
  ],
  'albury-reservoir': [
    'RPVC Liner Systems',
    'Tank Inspection Technology',
    'Tank Maintenance & Upgrades',
  ],
  'clarence-road-liner': [
    'RPVC Liner Systems',
    'Tank Inspection Technology',
    'Tank Maintenance & Upgrades',
  ],
  'kybrook-nt': [
    'Professional Tank Installation',
  ],
}

const PROJECT_STATUSES = {
  'doomadgee-wtp': 'Ongoing',
}

const PROJECT_SNAPSHOT_DETAILS = {
  'hobart-nyrstar': {
    clientOrganisation: 'Nyrstar',
    contractValue: '$450,000',
  },
  'albury-reservoir': {
    clientOrganisation: 'AlburyCity Council',
    contractValue: '$96,500.00',
  },
  'doomadgee-wtp': {
    clientOrganisation: 'Australian Government, through the National Water Grid Fund, and the Queensland Government\n\nDepartment of Local Government, Water and Volunteers (DLGWV)',
    contractValue: '$3,000,000',
  },
  'borumba-hydro': {
    clientOrganisation: 'Hydra Dynamics Pty LTD',
    contractValue: '$260,000.00',
  },
  'clarence-road-liner': {
    clientOrganisation: 'SAVVE Developments & Construction',
    contractValue: '$55,000.00',
  },
  'kybrook-nt': {
    clientOrganisation: 'McMahon Services Australia (NT)',
    contractValue: '$240,000.00',
  },
}

const DOOMADGEE_OUTCOME =
  "## The Outcome\n\nThe 2ML storage tank project is currently progressing on site, with earthworks now completed and steel bar placement underway. Once completed and commissioned, the tank will provide the Doomadgee community with the additional water storage capacity needed to support the water treatment plant's operations.\n\nThis ongoing project represents an important step toward strengthening safe and reliable water access for one of Australia's most remote communities — an outcome PC Water Infrastructure is proud to be contributing to."

const META_RE = /<!--\s*cms:project-meta\s*([\s\S]*?)\s*-->\s*/i

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return

  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) continue
    const key = trimmed.slice(0, separatorIndex).trim()
    const rawValue = trimmed.slice(separatorIndex + 1).trim()
    const value = rawValue.replace(/^['"]|['"]$/g, '')
    if (!(key in process.env)) process.env[key] = value
  }
}

function getArgValue(flag) {
  const index = process.argv.indexOf(flag)
  return index === -1 ? null : process.argv[index + 1] ?? null
}

function stripProjectMeta(content) {
  return (content ?? '').replace(META_RE, '').trimStart()
}

function serializeProjectContent(content, meta) {
  return `<!-- cms:project-meta\n${JSON.stringify(meta, null, 2)}\n-->\n\n${stripProjectMeta(content).trim()}`
}

function replaceDoomadgeeOutcome(content) {
  const clean = stripProjectMeta(content)
  const outcomeIndex = clean.indexOf('## The Outcome')
  if (outcomeIndex === -1) {
    return `${clean.trim()}\n\n${DOOMADGEE_OUTCOME}`
  }

  return `${clean.slice(0, outcomeIndex).trim()}\n\n${DOOMADGEE_OUTCOME}`
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options)
  if (!response.ok) {
    const text = await response.text()
    throw new Error(`${response.status} ${response.statusText}: ${text}`)
  }
  if (response.status === 204) return null
  const text = await response.text()
  return text.trim() ? JSON.parse(text) : null
}

async function authenticate({ url, anonKey, email, password }) {
  const authData = await fetchJson(`${url}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  return authData.access_token
}

function createHeaders(anonKey, accessToken, extraHeaders = {}) {
  return {
    apikey: anonKey,
    Authorization: `Bearer ${accessToken}`,
    ...extraHeaders,
  }
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..')
  loadEnvFile(path.join(projectRoot, '.env.local'))
  loadEnvFile(path.join(projectRoot, '.env'))

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const serviceKey = process.env.SUPABASE_SECRET_KEY
  const email = getArgValue('--email')
  const password = getArgValue('--password')

  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  if (!serviceKey && (!email || !password)) {
    throw new Error('Usage: node scripts/sync-project-meta.cjs --email you@example.com --password your-password')
  }

  const accessToken = serviceKey || await authenticate({ url, anonKey, email, password })
  const apiKey = serviceKey || anonKey
  const projects = await fetchJson(
    `${url}/rest/v1/cms_projects?select=id,slug,content`,
    {
      headers: createHeaders(apiKey, accessToken),
    },
  )

  let updated = 0

  for (const project of projects ?? []) {
    const servicesDelivered = PROJECT_SERVICE_FALLBACKS[project.slug] ?? []
    const projectStatus = PROJECT_STATUSES[project.slug] ?? 'Completed'
    const snapshotDetails = PROJECT_SNAPSHOT_DETAILS[project.slug] ?? {}
    const content = project.slug === 'doomadgee-wtp'
      ? replaceDoomadgeeOutcome(project.content)
      : stripProjectMeta(project.content)

    await fetchJson(`${url}/rest/v1/cms_projects?id=eq.${project.id}`, {
      method: 'PATCH',
      headers: createHeaders(apiKey, accessToken, {
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      }),
      body: JSON.stringify({
        content: serializeProjectContent(content, {
          projectStatus,
          clientOrganisation: snapshotDetails.clientOrganisation || '',
          contractValue: snapshotDetails.contractValue || '',
          servicesDelivered,
        }),
      }),
    })

    updated += 1
  }

  console.log(`Synced project metadata for ${updated} projects.`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
