'use client'

import { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import ThemeToggle from '@/components/cms/ThemeToggle'

export default function LoginForm() {
  const router       = useRouter()
  const searchParams = useSearchParams()
  const [email,       setEmail]       = useState('')
  const [password,    setPassword]    = useState('')
  const [showPwd,     setShowPwd]     = useState(false)
  const [error,       setError]       = useState<string | null>(null)
  const [loading,     setLoading]     = useState(false)

  const configured  = useMemo(() => Boolean(createSupabaseBrowserClient()), [])
  const accessError = searchParams.get('error') === 'access-denied'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const supabase = createSupabaseBrowserClient()
    if (!supabase) { setError('Supabase environment variables are missing.'); return }

    setLoading(true)
    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password })

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
      setError('This account is not approved for CMS access.')
      return
    }

    router.replace('/cms/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F0F3F9] dark:bg-[#0C0E16] flex items-center justify-center p-4 relative">

      {/* Theme toggle — top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-[380px]">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#3e91ce] flex items-center justify-center mb-4 shadow-lg shadow-[#3e91ce]/25">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">PC Water Studio</h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Sign in to manage your content</p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-[#13161F] rounded-2xl border border-slate-200 dark:border-[#1E2235] shadow-sm dark:shadow-none p-7">

          {/* Alerts */}
          {!configured && (
            <div className="flex gap-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 px-3.5 py-3 mb-5">
              <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">Supabase is not configured. Add the required environment variables.</p>
            </div>
          )}

          {(accessError || error) && (
            <div className="flex gap-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 px-3.5 py-3 mb-5">
              <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-600 dark:text-red-400 text-xs leading-relaxed">{error ?? 'Your account is not approved for CMS access.'}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5" htmlFor="cms-email">
                Email address
              </label>
              <input
                id="cms-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field"
                placeholder="admin@pcwatertanks.com.au"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5" htmlFor="cms-password">
                Password
              </label>
              <div className="relative">
                <input
                  id="cms-password"
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field pr-10"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  tabIndex={-1}
                >
                  {showPwd ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!configured || loading}
              className="w-full mt-1 bg-[#3e91ce] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#2d7ab8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-sm shadow-[#3e91ce]/20"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : 'Sign in'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-5">
          PC Water Infrastructure · Content Management System
        </p>
      </div>
    </div>
  )
}
