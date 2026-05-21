import { createClient } from '@supabase/supabase-js'

type SupabaseAdminClient = ReturnType<typeof createClient>

let adminClient: SupabaseAdminClient | null = null

export function hasSupabaseAdminEnv() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SECRET_KEY,
  )
}

export function createSupabaseAdminClient() {
  if (!hasSupabaseAdminEnv()) {
    return null
  }

  if (!adminClient) {
    adminClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SECRET_KEY ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    )
  }

  return adminClient
}
