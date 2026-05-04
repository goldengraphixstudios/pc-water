import { createSupabaseBrowserClient } from '@/lib/supabase/browser'

export interface ResourceLead {
  id: string
  email: string
  resource_slug: string
  resource_title: string | null
  division: string | null
  downloaded_at: string
}

/** Insert a resource download lead into Supabase. Returns true on success. */
export async function submitResourceLead(
  email: string,
  resourceSlug: string,
  resourceTitle: string,
  division: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) {
    // Supabase not configured — allow download silently
    return { ok: true }
  }

  const { error } = await supabase.from('resource_leads').insert({
    email,
    resource_slug: resourceSlug,
    resource_title: resourceTitle,
    division,
  })

  if (error) {
    console.error('[resource_leads] insert error', error)
    // Don't block the download if insert fails
    return { ok: true }
  }

  return { ok: true }
}

/** Delete a single resource lead by ID (CMS — requires authenticated session). */
export async function deleteResourceLead(id: string): Promise<{ ok: boolean }> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return { ok: false }

  const { error } = await supabase
    .from('resource_leads')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('[resource_leads] delete error', error)
    return { ok: false }
  }

  return { ok: true }
}

/** Fetch all resource leads (CMS dashboard — requires authenticated session). */
export async function fetchResourceLeads(): Promise<ResourceLead[]> {
  const supabase = createSupabaseBrowserClient()
  if (!supabase) return []

  const { data, error } = await supabase
    .from('resource_leads')
    .select('*')
    .order('downloaded_at', { ascending: false })

  if (error) {
    console.error('[resource_leads] fetch error', error)
    return []
  }

  return data ?? []
}
