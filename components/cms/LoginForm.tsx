'use client'

import { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { createSupabaseBrowserClient } from '@/lib/supabase/browser'

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const configured = useMemo(() => Boolean(createSupabaseBrowserClient()), [])
  const accessError = searchParams.get('error') === 'access-denied'

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const supabase = createSupabaseBrowserClient()
    if (!supabase) {
      setError('Supabase environment variables are missing.')
      return
    }

    setLoading(true)

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError || !data.user?.email) {
      setLoading(false)
      setError(signInError?.message ?? 'Login failed.')
      return
    }

    const { data: adminRow, error: adminError } = await supabase
      .from('cms_admin_emails')
      .select('email')
      .eq('email', data.user.email)
      .maybeSingle()

    if (adminError || !adminRow) {
      await supabase.auth.signOut()
      setLoading(false)
      setError('This account is authenticated, but it is not approved for the CMS.')
      return
    }

    router.replace('/cms/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white text-[#30505b] rounded-3xl p-8 shadow-2xl shadow-black/20">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-3">PC Water CMS</p>
        <h1 className="text-3xl font-black mb-3">Sign In</h1>
        <p className="text-sm text-gray-500 mb-8">
          Use your Supabase Auth admin account to manage resources and projects.
        </p>

        {!configured && (
          <div className="rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm p-4 mb-6">
            Supabase is not configured yet. Add the `NEXT_PUBLIC_SUPABASE_URL` and
            `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables first.
          </div>
        )}

        {accessError && !error && (
          <div className="rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm p-4 mb-6">
            Your account is not approved for the CMS.
          </div>
        )}

        {error && (
          <div className="rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm p-4 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="cms-email">
              Email
            </label>
            <input
              id="cms-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#3e91ce]"
              placeholder="admin@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="cms-password">
              Password
            </label>
            <input
              id="cms-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#3e91ce]"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!configured || loading}
            className="w-full rounded-2xl bg-[#3e91ce] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2d7ab8] disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
