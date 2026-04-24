import { createClient } from '@supabase/supabase-js'

import { getSupabaseEnv, hasSupabaseEnv } from '@/lib/supabase/config'

let publicClient: ReturnType<typeof createClient> | null = null

export function createSupabasePublicClient() {
  if (!hasSupabaseEnv()) {
    return null
  }

  if (!publicClient) {
    const { url, anonKey } = getSupabaseEnv()
    publicClient = createClient(url, anonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  }

  return publicClient
}
