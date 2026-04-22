import { revalidatePath } from 'next/cache'

import { getCmsAuthContext } from '@/lib/cms/queries'
import type { CmsPostInput, CmsProjectInput } from '@/lib/cms/types'
import { buildPostPayload, buildProjectPayload } from '@/lib/cms/queries'
import { normalizeTagNames, slugify } from '@/lib/cms/utils'
import { createSupabaseServerClient } from '@/lib/supabase/server'

type SupabaseLike = NonNullable<Awaited<ReturnType<typeof createSupabaseServerClient>>>

export async function requireCmsAdmin() {
  const auth = await getCmsAuthContext()

  if (!auth.configured) {
    return {
      ok: false as const,
      status: 503,
      error: 'Supabase environment variables are not configured.',
    }
  }

  if (!auth.user || !auth.isAdmin) {
    return {
      ok: false as const,
      status: 401,
      error: 'You do not have access to the CMS.',
    }
  }

  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return {
      ok: false as const,
      status: 503,
      error: 'Supabase server client is unavailable.',
    }
  }

  return {
    ok: true as const,
    supabase,
    user: auth.user,
  }
}

async function ensureTags(supabase: SupabaseLike, tagNames: string[]) {
  const normalized = normalizeTagNames(tagNames)
  if (!normalized.length) {
    return []
  }

  const payload = normalized.map((name) => ({
    name,
    slug: slugify(name),
  }))

  const { data, error } = await supabase
    .from('cms_tags')
    .upsert(payload, { onConflict: 'slug' })
    .select('id,name,slug')

  if (error) {
    throw error
  }

  return data ?? []
}

async function syncJoinTable(
  supabase: SupabaseLike,
  tableName: 'cms_post_tags' | 'cms_project_tags',
  ownerColumn: 'post_id' | 'project_id',
  ownerId: string,
  tagNames: string[],
) {
  const tags = await ensureTags(supabase, tagNames)

  const { error: deleteError } = await supabase.from(tableName).delete().eq(ownerColumn, ownerId)
  if (deleteError) {
    throw deleteError
  }

  if (!tags.length) {
    return
  }

  const joinPayload = tags.map((tag) => ({
    [ownerColumn]: ownerId,
    tag_id: tag.id,
  }))

  const { error: insertError } = await supabase.from(tableName).insert(joinPayload)
  if (insertError) {
    throw insertError
  }
}

export async function createPost(input: CmsPostInput) {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return auth
  }

  const payload = {
    ...buildPostPayload(input),
    created_by: auth.user.id,
  }

  const { data, error } = await auth.supabase
    .from('cms_posts')
    .insert(payload)
    .select('id')
    .single()

  if (error || !data) {
    return {
      ok: false as const,
      status: 400,
      error: error?.message ?? 'Failed to create post.',
    }
  }

  await syncJoinTable(auth.supabase, 'cms_post_tags', 'post_id', data.id, input.tags)
  revalidateCmsPaths('post', buildPostPayload(input).slug)

  return { ok: true as const, id: data.id }
}

export async function updatePost(id: string, input: CmsPostInput) {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return auth
  }

  const payload = buildPostPayload(input)

  const { error } = await auth.supabase
    .from('cms_posts')
    .update(payload)
    .eq('id', id)

  if (error) {
    return {
      ok: false as const,
      status: 400,
      error: error.message,
    }
  }

  await syncJoinTable(auth.supabase, 'cms_post_tags', 'post_id', id, input.tags)
  revalidateCmsPaths('post', payload.slug)

  return { ok: true as const, id }
}

export async function deletePost(id: string) {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return auth
  }

  const { error } = await auth.supabase.from('cms_posts').delete().eq('id', id)
  if (error) {
    return {
      ok: false as const,
      status: 400,
      error: error.message,
    }
  }

  revalidatePath('/resources')
  revalidatePath('/cms/posts')

  return { ok: true as const }
}

export async function createProject(input: CmsProjectInput) {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return auth
  }

  const payload = {
    ...buildProjectPayload(input),
    created_by: auth.user.id,
  }

  const { data, error } = await auth.supabase
    .from('cms_projects')
    .insert(payload)
    .select('id')
    .single()

  if (error || !data) {
    return {
      ok: false as const,
      status: 400,
      error: error?.message ?? 'Failed to create project.',
    }
  }

  await syncJoinTable(auth.supabase, 'cms_project_tags', 'project_id', data.id, input.tags)
  revalidateCmsPaths('project', buildProjectPayload(input).slug)

  return { ok: true as const, id: data.id }
}

export async function updateProject(id: string, input: CmsProjectInput) {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return auth
  }

  const payload = buildProjectPayload(input)

  const { error } = await auth.supabase
    .from('cms_projects')
    .update(payload)
    .eq('id', id)

  if (error) {
    return {
      ok: false as const,
      status: 400,
      error: error.message,
    }
  }

  await syncJoinTable(auth.supabase, 'cms_project_tags', 'project_id', id, input.tags)
  revalidateCmsPaths('project', payload.slug)

  return { ok: true as const, id }
}

export async function deleteProject(id: string) {
  const auth = await requireCmsAdmin()
  if (!auth.ok) {
    return auth
  }

  const { error } = await auth.supabase.from('cms_projects').delete().eq('id', id)
  if (error) {
    return {
      ok: false as const,
      status: 400,
      error: error.message,
    }
  }

  revalidatePath('/projects')
  revalidatePath('/cms/projects')

  return { ok: true as const }
}

function revalidateCmsPaths(type: 'post' | 'project', slug: string) {
  if (type === 'post') {
    revalidatePath('/resources')
    revalidatePath(`/resources/${slug}`)
    revalidatePath('/cms/posts')
    return
  }

  revalidatePath('/projects')
  revalidatePath(`/projects/${slug}`)
  revalidatePath('/cms/projects')
}
