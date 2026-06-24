const fs = require('fs')
const path = require('path')
const vm = require('vm')

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return
  }

  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const rawValue = trimmed.slice(separatorIndex + 1).trim()
    const value = rawValue.replace(/^['"]|['"]$/g, '')
    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function parseFallbackContent(sourcePath) {
  const source = fs.readFileSync(sourcePath, 'utf8')
  const transformed = source
    .replace(/^import .*$/gm, '')
    .replace(/function staticId\(prefix: string, value: string\)/, 'function staticId(prefix, value)')
    .replace(/export const fallbackPosts: CmsPost\[\] =/, 'const fallbackPosts =')
    .replace(/export const fallbackProjects: CmsProject\[\] =/, 'const fallbackProjects =')

  const context = {
    slugify,
  }

  vm.runInNewContext(`${transformed}\nresult = { fallbackPosts, fallbackProjects }`, context)
  return context.result
}

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

const META_RE = /<!--\s*cms:project-meta\s*([\s\S]*?)\s*-->\s*/i

function serializeProjectContent(project) {
  const content = (project.content ?? '').replace(META_RE, '').trim()
  const snapshotDetails = PROJECT_SNAPSHOT_DETAILS[project.slug] || {}
  const meta = {
    projectStatus: project.projectStatus || 'Completed',
    clientOrganisation: project.clientOrganisation || snapshotDetails.clientOrganisation || '',
    contractValue: project.contractValue || snapshotDetails.contractValue || '',
    servicesDelivered: project.servicesDelivered || PROJECT_SERVICE_FALLBACKS[project.slug] || [],
  }

  return `<!-- cms:project-meta\n${JSON.stringify(meta, null, 2)}\n-->\n\n${content}`
}

function getArgValue(flag) {
  const index = process.argv.indexOf(flag)
  if (index === -1) {
    return null
  }

  return process.argv[index + 1] ?? null
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options)
  if (!response.ok) {
    const text = await response.text()
    throw new Error(`${response.status} ${response.statusText}: ${text}`)
  }

  if (response.status === 204) {
    return null
  }

  const text = await response.text()
  if (!text.trim()) {
    return null
  }

  return JSON.parse(text)
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

async function upsertTags({ url, anonKey, accessToken, tagNames }) {
  const uniqueTags = Array.from(new Set(tagNames.map((name) => name.trim()).filter(Boolean)))
  const payload = uniqueTags.map((name) => ({
    name,
    slug: slugify(name),
  }))

  if (!payload.length) {
    return new Map()
  }

  const data = await fetchJson(`${url}/rest/v1/cms_tags?on_conflict=slug`, {
    method: 'POST',
    headers: createHeaders(anonKey, accessToken, {
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=representation',
    }),
    body: JSON.stringify(payload),
  })

  return new Map(data.map((tag) => [tag.slug, tag.id]))
}

function mapPostPayload(post) {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    cover_image_url: post.coverImageUrl,
    read_time: post.readTime,
    status: post.status,
    seo_title: post.seoTitle,
    seo_description: post.seoDescription,
    published_at: post.publishedAt,
  }
}

function mapProjectPayload(project) {
  return {
    title: project.title,
    slug: project.slug,
    summary: project.summary,
    content: serializeProjectContent(project),
    sector: project.sector,
    location: project.location,
    scope: project.scope,
    hero_image_url: project.heroImageUrl,
    gallery_urls: project.galleryUrls,
    status: project.status,
    featured: project.featured,
    seo_title: project.seoTitle,
    seo_description: project.seoDescription,
    published_at: project.publishedAt,
  }
}

async function upsertPosts({ url, anonKey, accessToken, posts }) {
  const data = await fetchJson(`${url}/rest/v1/cms_posts?on_conflict=slug`, {
    method: 'POST',
    headers: createHeaders(anonKey, accessToken, {
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=representation',
    }),
    body: JSON.stringify(posts.map(mapPostPayload)),
  })

  return new Map(data.map((post) => [post.slug, post.id]))
}

async function upsertProjects({ url, anonKey, accessToken, projects }) {
  const data = await fetchJson(`${url}/rest/v1/cms_projects?on_conflict=slug`, {
    method: 'POST',
    headers: createHeaders(anonKey, accessToken, {
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=representation',
    }),
    body: JSON.stringify(projects.map(mapProjectPayload)),
  })

  return new Map(data.map((project) => [project.slug, project.id]))
}

async function replaceJoinRows({ url, anonKey, accessToken, table, ownerColumn, ownerId, tagIds }) {
  await fetchJson(`${url}/rest/v1/${table}?${ownerColumn}=eq.${ownerId}`, {
    method: 'DELETE',
    headers: createHeaders(anonKey, accessToken, {
      Prefer: 'return=minimal',
    }),
  })

  if (!tagIds.length) {
    return
  }

  const joinPayload = tagIds.map((tagId) => ({
    [ownerColumn]: ownerId,
    tag_id: tagId,
  }))

  await fetchJson(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: createHeaders(anonKey, accessToken, {
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    }),
    body: JSON.stringify(joinPayload),
  })
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..')
  loadEnvFile(path.join(projectRoot, '.env.local'))
  loadEnvFile(path.join(projectRoot, '.env'))

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const email = getArgValue('--email')
  const password = getArgValue('--password')

  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  if (!email || !password) {
    throw new Error('Usage: node scripts/import-cms-content.cjs --email you@example.com --password your-password')
  }

  const { fallbackPosts, fallbackProjects } = parseFallbackContent(
    path.join(projectRoot, 'lib', 'cms', 'static-content.ts'),
  )

  const accessToken = await authenticate({ url, anonKey, email, password })

  const tagMap = await upsertTags({
    url,
    anonKey,
    accessToken,
    tagNames: [
      ...fallbackPosts.flatMap((post) => post.tags.map((tag) => tag.name)),
      ...fallbackProjects.flatMap((project) => project.tags.map((tag) => tag.name)),
    ],
  })

  const postIdMap = await upsertPosts({ url, anonKey, accessToken, posts: fallbackPosts })
  const projectIdMap = await upsertProjects({ url, anonKey, accessToken, projects: fallbackProjects })

  for (const post of fallbackPosts) {
    const postId = postIdMap.get(post.slug)
    if (!postId) {
      throw new Error(`Missing post id for ${post.slug}`)
    }

    const tagIds = post.tags
      .map((tag) => tagMap.get(slugify(tag.name)))
      .filter(Boolean)

    await replaceJoinRows({
      url,
      anonKey,
      accessToken,
      table: 'cms_post_tags',
      ownerColumn: 'post_id',
      ownerId: postId,
      tagIds,
    })
  }

  for (const project of fallbackProjects) {
    const projectId = projectIdMap.get(project.slug)
    if (!projectId) {
      throw new Error(`Missing project id for ${project.slug}`)
    }

    const tagIds = project.tags
      .map((tag) => tagMap.get(slugify(tag.name)))
      .filter(Boolean)

    await replaceJoinRows({
      url,
      anonKey,
      accessToken,
      table: 'cms_project_tags',
      ownerColumn: 'project_id',
      ownerId: projectId,
      tagIds,
    })
  }

  console.log(`Imported ${fallbackPosts.length} posts and ${fallbackProjects.length} projects.`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
