/**
 * Client-side CMS admin operations.
 * Uses the Supabase browser client — no server runtime required.
 * Works identically on GitHub Pages (static export) and Vercel/Node.
 */
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import { buildPostPayload, buildProjectPayload } from '@/lib/cms/payloads'
import { normalizeTagNames, slugify } from '@/lib/cms/utils'
import type { CmsPost, CmsProject, CmsPostInput, CmsProjectInput } from '@/lib/cms/types'

// ── Row types (mirrors queries.ts) ────────────────────────────────────────────

type TagJoinRow = {
  cms_tags:
    | { id: string; name: string; slug: string }
    | { id: string; name: string; slug: string }[]
    | null
}
type TagRecord  = { id: string; name: string; slug: string }

type PostRow = {
  id: string; title: string; slug: string; excerpt: string | null
  content: string | null; cover_image_url: string | null; read_time: string | null
  status: 'draft' | 'published'; seo_title: string | null; seo_description: string | null
  published_at: string | null; created_at: string | null; updated_at: string | null
  cms_post_tags?: TagJoinRow[] | null
}

type ProjectRow = {
  id: string; title: string; slug: string; summary: string | null
  content: string | null; sector: string | null; location: string | null
  scope: string | null; hero_image_url: string | null; gallery_urls: string[] | null
  status: 'draft' | 'published'; featured: boolean | null
  seo_title: string | null; seo_description: string | null
  published_at: string | null; created_at: string | null; updated_at: string | null
  cms_project_tags?: TagJoinRow[] | null
}

export type BrowserResult = { ok: true; id: string } | { ok: false; error: string }
type SupabaseClient = NonNullable<ReturnType<typeof createSupabaseBrowserClient>>

// ── Helpers ───────────────────────────────────────────────────────────────────

function normalizeTagRecord(value: TagJoinRow['cms_tags']): TagRecord[] {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

function mapTags(rows?: TagJoinRow[] | null) {
  return (rows ?? [])
    .flatMap(item => normalizeTagRecord(item.cms_tags))
    .filter((t): t is TagRecord => Boolean(t))
}

function mapPost(row: PostRow): CmsPost {
  return {
    id: row.id, title: row.title, slug: row.slug,
    excerpt: row.excerpt ?? '', content: row.content ?? '',
    coverImageUrl: row.cover_image_url, readTime: row.read_time,
    status: row.status, seoTitle: row.seo_title, seoDescription: row.seo_description,
    publishedAt: row.published_at, createdAt: row.created_at, updatedAt: row.updated_at,
    tags: mapTags(row.cms_post_tags),
  }
}

function mapProject(row: ProjectRow): CmsProject {
  return {
    id: row.id, title: row.title, slug: row.slug,
    summary: row.summary ?? '', content: row.content ?? '',
    sector: row.sector ?? '', location: row.location ?? '', scope: row.scope ?? '',
    heroImageUrl: row.hero_image_url, galleryUrls: row.gallery_urls ?? [],
    status: row.status, featured: Boolean(row.featured),
    seoTitle: row.seo_title, seoDescription: row.seo_description,
    publishedAt: row.published_at, createdAt: row.created_at, updatedAt: row.updated_at,
    tags: mapTags(row.cms_project_tags),
  }
}

const POST_SELECT =
  'id,title,slug,excerpt,content,cover_image_url,read_time,status,seo_title,seo_description,published_at,created_at,updated_at,cms_post_tags(cms_tags(id,name,slug))'
const PROJECT_SELECT =
  'id,title,slug,summary,content,sector,location,scope,hero_image_url,gallery_urls,status,featured,seo_title,seo_description,published_at,created_at,updated_at,cms_project_tags(cms_tags(id,name,slug))'

// ── Tag management ────────────────────────────────────────────────────────────

async function ensureTags(supabase: SupabaseClient, tagNames: string[]): Promise<TagRecord[]> {
  const normalized = normalizeTagNames(tagNames)
  if (!normalized.length) return []

  const payload = normalized.map(name => ({ name, slug: slugify(name) }))
  const { data, error } = await supabase
    .from('cms_tags')
    .upsert(payload, { onConflict: 'slug' })
    .select('id,name,slug')

  if (error) throw new Error(error.message)
  return (data ?? []) as TagRecord[]
}

async function syncJoinTable(
  supabase: SupabaseClient,
  tableName: 'cms_post_tags' | 'cms_project_tags',
  ownerColumn: 'post_id' | 'project_id',
  ownerId: string,
  tagNames: string[],
) {
  const tags = await ensureTags(supabase, tagNames)
  await supabase.from(tableName).delete().eq(ownerColumn, ownerId)
  if (!tags.length) return
  await supabase
    .from(tableName)
    .insert(tags.map(tag => ({ [ownerColumn]: ownerId, tag_id: tag.id })))
}

// ── Data fetching ─────────────────────────────────────────────────────────────

export async function fetchAdminPosts(): Promise<CmsPost[]> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return []

  const { data, error } = await supabase
    .from('cms_posts')
    .select(POST_SELECT)
    .order('updated_at', { ascending: false })

  if (error || !data) return []
  return (data as PostRow[]).map(mapPost)
}

export async function fetchAdminProjects(): Promise<CmsProject[]> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return []

  const { data, error } = await supabase
    .from('cms_projects')
    .select(PROJECT_SELECT)
    .order('updated_at', { ascending: false })

  if (error || !data) return []
  return (data as ProjectRow[]).map(mapProject)
}

export async function fetchAdminPostById(id: string): Promise<CmsPost | null> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return null

  const { data, error } = await supabase
    .from('cms_posts')
    .select(POST_SELECT)
    .eq('id', id)
    .maybeSingle()

  if (error || !data) return null
  return mapPost(data as PostRow)
}

export async function fetchAdminProjectById(id: string): Promise<CmsProject | null> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return null

  const { data, error } = await supabase
    .from('cms_projects')
    .select(PROJECT_SELECT)
    .eq('id', id)
    .maybeSingle()

  if (error || !data) return null
  return mapProject(data as ProjectRow)
}

export async function fetchAdminProjectFilterOptions() {
  const projects = await fetchAdminProjects()
  const classifications = [...new Set(projects.map(p => p.sector).filter(Boolean))] as string[]
  const tags = [...new Set(projects.flatMap(p => p.tags.map(t => t.name)).filter(Boolean))] as string[]
  return { classifications, tags }
}

// ── Mutations ─────────────────────────────────────────────────────────────────

export async function browserCreatePost(input: CmsPostInput): Promise<BrowserResult> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return { ok: false, error: 'Supabase not configured.' }

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not authenticated.' }

  const payload = { ...buildPostPayload(input), created_by: user.id }
  const { data, error } = await supabase.from('cms_posts').insert(payload).select('id').single()

  if (error || !data) return { ok: false, error: error?.message ?? 'Failed to create post.' }

  try { await syncJoinTable(supabase, 'cms_post_tags', 'post_id', data.id, input.tags) } catch { /* non-fatal */ }
  return { ok: true, id: data.id }
}

export async function browserUpdatePost(id: string, input: CmsPostInput): Promise<BrowserResult> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return { ok: false, error: 'Supabase not configured.' }

  const { error } = await supabase.from('cms_posts').update(buildPostPayload(input)).eq('id', id)
  if (error) return { ok: false, error: error.message }

  try { await syncJoinTable(supabase, 'cms_post_tags', 'post_id', id, input.tags) } catch { /* non-fatal */ }
  return { ok: true, id }
}

export async function browserDeletePost(id: string): Promise<BrowserResult> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return { ok: false, error: 'Supabase not configured.' }

  const { error } = await supabase.from('cms_posts').delete().eq('id', id)
  if (error) return { ok: false, error: error.message }
  return { ok: true, id }
}

export async function browserCreateProject(input: CmsProjectInput): Promise<BrowserResult> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return { ok: false, error: 'Supabase not configured.' }

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not authenticated.' }

  const payload = { ...buildProjectPayload(input), created_by: user.id }
  const { data, error } = await supabase.from('cms_projects').insert(payload).select('id').single()

  if (error || !data) return { ok: false, error: error?.message ?? 'Failed to create project.' }

  try { await syncJoinTable(supabase, 'cms_project_tags', 'project_id', data.id, input.tags) } catch { /* non-fatal */ }
  return { ok: true, id: data.id }
}

export async function browserUpdateProject(id: string, input: CmsProjectInput): Promise<BrowserResult> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return { ok: false, error: 'Supabase not configured.' }

  const { error } = await supabase.from('cms_projects').update(buildProjectPayload(input)).eq('id', id)
  if (error) return { ok: false, error: error.message }

  try { await syncJoinTable(supabase, 'cms_project_tags', 'project_id', id, input.tags) } catch { /* non-fatal */ }
  return { ok: true, id }
}

export async function browserDeleteProject(id: string): Promise<BrowserResult> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return { ok: false, error: 'Supabase not configured.' }

  const { error } = await supabase.from('cms_projects').delete().eq('id', id)
  if (error) return { ok: false, error: error.message }
  return { ok: true, id }
}
