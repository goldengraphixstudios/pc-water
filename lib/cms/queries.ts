import { notFound } from 'next/navigation'

import { fallbackPosts, fallbackProjects } from '@/lib/cms/static-content'
import type {
  CmsPost,
  CmsPostInput,
  CmsProject,
  CmsProjectInput,
  CmsTag,
  ProjectGridItem,
} from '@/lib/cms/types'
import { normalizeOptionalText, normalizeTagNames, slugify } from '@/lib/cms/utils'
import { hasSupabaseEnv } from '@/lib/supabase/config'
import { createSupabaseServerClient } from '@/lib/supabase/server'

type TagJoinRow = {
  cms_tags:
    | {
        id: string
        name: string
        slug: string
      }
    | {
        id: string
        name: string
        slug: string
      }[]
    | null
}

type TagRecord = {
  id: string
  name: string
  slug: string
}

function normalizeTagRecord(value: TagJoinRow['cms_tags']): TagRecord[] {
  if (!value) {
    return []
  }

  return Array.isArray(value) ? value : [value]
}

function mapTags(tagRows?: TagJoinRow[] | null): CmsTag[] {
  return (tagRows ?? [])
    .flatMap((item) => normalizeTagRecord(item.cms_tags))
    .filter((tag): tag is TagRecord => Boolean(tag))
}

type PostRow = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  cover_image_url: string | null
  read_time: string | null
  status: 'draft' | 'published'
  seo_title: string | null
  seo_description: string | null
  published_at: string | null
  created_at: string | null
  updated_at: string | null
  cms_post_tags?: TagJoinRow[] | null
}

type ProjectRow = {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string | null
  sector: string | null
  location: string | null
  scope: string | null
  hero_image_url: string | null
  gallery_urls: string[] | null
  status: 'draft' | 'published'
  featured: boolean | null
  seo_title: string | null
  seo_description: string | null
  published_at: string | null
  created_at: string | null
  updated_at: string | null
  cms_project_tags?: TagJoinRow[] | null
}

function mapPost(row: PostRow): CmsPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? '',
    content: row.content ?? '',
    coverImageUrl: row.cover_image_url,
    readTime: row.read_time,
    status: row.status,
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    tags: mapTags(row.cms_post_tags),
  }
}

function mapProject(row: ProjectRow): CmsProject {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    summary: row.summary ?? '',
    content: row.content ?? '',
    sector: row.sector ?? '',
    location: row.location ?? '',
    scope: row.scope ?? '',
    heroImageUrl: row.hero_image_url,
    galleryUrls: row.gallery_urls ?? [],
    status: row.status,
    featured: Boolean(row.featured),
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    tags: mapTags(row.cms_project_tags),
  }
}

export async function getPublicPosts() {
  if (!hasSupabaseEnv()) {
    return fallbackPosts
  }

  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallbackPosts
  }

  const { data, error } = await supabase
    .from('cms_posts')
    .select(
      'id,title,slug,excerpt,content,cover_image_url,read_time,status,seo_title,seo_description,published_at,created_at,updated_at,cms_post_tags(cms_tags(id,name,slug))',
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error || !data?.length) {
    return fallbackPosts
  }

  return (data as PostRow[]).map(mapPost)
}

export async function getPublicPostBySlug(slug: string) {
  const fallback = fallbackPosts.find((post) => post.slug === slug)

  if (!hasSupabaseEnv()) {
    return fallback ?? null
  }

  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallback ?? null
  }

  const { data, error } = await supabase
    .from('cms_posts')
    .select(
      'id,title,slug,excerpt,content,cover_image_url,read_time,status,seo_title,seo_description,published_at,created_at,updated_at,cms_post_tags(cms_tags(id,name,slug))',
    )
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error || !data) {
    return fallback ?? null
  }

  return mapPost(data as PostRow)
}

export async function getPublicProjects() {
  if (!hasSupabaseEnv()) {
    return fallbackProjects
  }

  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallbackProjects
  }

  const { data, error } = await supabase
    .from('cms_projects')
    .select(
      'id,title,slug,summary,content,sector,location,scope,hero_image_url,gallery_urls,status,featured,seo_title,seo_description,published_at,created_at,updated_at,cms_project_tags(cms_tags(id,name,slug))',
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error || !data?.length) {
    return fallbackProjects
  }

  return (data as ProjectRow[]).map(mapProject)
}

export async function getFeaturedProjects(limit = 3) {
  const projects = await getPublicProjects()
  const featured = projects.filter((project) => project.featured)
  return (featured.length ? featured : projects).slice(0, limit)
}

export async function getPublicProjectBySlug(slug: string) {
  const fallback = fallbackProjects.find((project) => project.slug === slug)

  if (!hasSupabaseEnv()) {
    return fallback ?? null
  }

  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallback ?? null
  }

  const { data, error } = await supabase
    .from('cms_projects')
    .select(
      'id,title,slug,summary,content,sector,location,scope,hero_image_url,gallery_urls,status,featured,seo_title,seo_description,published_at,created_at,updated_at,cms_project_tags(cms_tags(id,name,slug))',
    )
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error || !data) {
    return fallback ?? null
  }

  return mapProject(data as ProjectRow)
}

export function toProjectGridItems(projects: CmsProject[]): ProjectGridItem[] {
  return projects.map((project) => ({
    title: project.title,
    sector: project.sector,
    location: project.location,
    scope: project.scope || project.summary,
    imageSrc: project.heroImageUrl ?? undefined,
    imageAlt: project.title,
    href: `/projects/${project.slug}`,
    filterTags: normalizeTagNames([project.sector, ...project.tags.map((tag) => tag.name)]),
  }))
}

export function renderContentParagraphs(content: string) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

export async function getCmsAuthContext() {
  if (!hasSupabaseEnv()) {
    return { configured: false as const, user: null, isAdmin: false }
  }

  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return { configured: false as const, user: null, isAdmin: false }
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user?.email) {
    return { configured: true as const, user: null, isAdmin: false }
  }

  const { data: adminRow } = await supabase
    .from('cms_admin_emails')
    .select('email')
    .eq('email', user.email)
    .maybeSingle()

  return {
    configured: true as const,
    user,
    isAdmin: Boolean(adminRow),
  }
}

export async function getAdminPosts() {
  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallbackPosts
  }

  const { data, error } = await supabase
    .from('cms_posts')
    .select(
      'id,title,slug,excerpt,content,cover_image_url,read_time,status,seo_title,seo_description,published_at,created_at,updated_at,cms_post_tags(cms_tags(id,name,slug))',
    )
    .order('updated_at', { ascending: false })

  if (error || !data) {
    return fallbackPosts
  }

  return (data as PostRow[]).map(mapPost)
}

export async function getAdminProjects() {
  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallbackProjects
  }

  const { data, error } = await supabase
    .from('cms_projects')
    .select(
      'id,title,slug,summary,content,sector,location,scope,hero_image_url,gallery_urls,status,featured,seo_title,seo_description,published_at,created_at,updated_at,cms_project_tags(cms_tags(id,name,slug))',
    )
    .order('updated_at', { ascending: false })

  if (error || !data) {
    return fallbackProjects
  }

  return (data as ProjectRow[]).map(mapProject)
}

export async function getAdminPostById(id: string) {
  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallbackPosts.find((post) => post.id === id) ?? null
  }

  const { data, error } = await supabase
    .from('cms_posts')
    .select(
      'id,title,slug,excerpt,content,cover_image_url,read_time,status,seo_title,seo_description,published_at,created_at,updated_at,cms_post_tags(cms_tags(id,name,slug))',
    )
    .eq('id', id)
    .maybeSingle()

  if (error || !data) {
    return fallbackPosts.find((post) => post.id === id) ?? null
  }

  return mapPost(data as PostRow)
}

export async function getAdminProjectById(id: string) {
  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return fallbackProjects.find((project) => project.id === id) ?? null
  }

  const { data, error } = await supabase
    .from('cms_projects')
    .select(
      'id,title,slug,summary,content,sector,location,scope,hero_image_url,gallery_urls,status,featured,seo_title,seo_description,published_at,created_at,updated_at,cms_project_tags(cms_tags(id,name,slug))',
    )
    .eq('id', id)
    .maybeSingle()

  if (error || !data) {
    return fallbackProjects.find((project) => project.id === id) ?? null
  }

  return mapProject(data as ProjectRow)
}

export function createEmptyPost(): CmsPostInput {
  return {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImageUrl: '',
    readTime: '',
    status: 'draft',
    seoTitle: '',
    seoDescription: '',
    publishedAt: null,
    tags: [],
  }
}

export function createEmptyProject(): CmsProjectInput {
  return {
    title: '',
    slug: '',
    summary: '',
    content: '',
    sector: '',
    location: '',
    scope: '',
    heroImageUrl: '',
    galleryUrls: [],
    status: 'draft',
    featured: false,
    seoTitle: '',
    seoDescription: '',
    publishedAt: null,
    tags: [],
  }
}

export function ensureRecord<T>(record: T | null): T {
  if (!record) {
    notFound()
  }

  return record
}

export function defaultPublishedAt(status: 'draft' | 'published', publishedAt?: string | null) {
  if (status === 'published') {
    return normalizeOptionalText(publishedAt) ?? new Date().toISOString()
  }

  return null
}

export function buildPostPayload(input: CmsPostInput) {
  return {
    title: input.title.trim(),
    slug: slugify(input.slug || input.title),
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    cover_image_url: normalizeOptionalText(input.coverImageUrl),
    read_time: normalizeOptionalText(input.readTime),
    status: input.status,
    seo_title: normalizeOptionalText(input.seoTitle),
    seo_description: normalizeOptionalText(input.seoDescription),
    published_at: defaultPublishedAt(input.status, input.publishedAt),
  }
}

export function buildProjectPayload(input: CmsProjectInput) {
  return {
    title: input.title.trim(),
    slug: slugify(input.slug || input.title),
    summary: input.summary.trim(),
    content: input.content.trim(),
    sector: input.sector.trim(),
    location: input.location.trim(),
    scope: input.scope.trim(),
    hero_image_url: normalizeOptionalText(input.heroImageUrl),
    gallery_urls: input.galleryUrls,
    status: input.status,
    featured: input.featured,
    seo_title: normalizeOptionalText(input.seoTitle),
    seo_description: normalizeOptionalText(input.seoDescription),
    published_at: defaultPublishedAt(input.status, input.publishedAt),
  }
}
