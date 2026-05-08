'use client'

import { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import ThemeToggle from '@/components/cms/ThemeToggle'

// ── Left panel feature bullets ────────────────────────────────────────────────

const features = [
  { label: 'Manage articles and project content' },
  { label: 'Upload and organise media assets' },
  { label: 'Track resource download leads' },
  { label: 'Control admin access and settings' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function LoginForm() {
  const router       = useRouter()
  const searchParams = useSearchParams()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [showPwd,  setShowPwd]  = useState(false)
  const [error,    setError]    = useState<string | null>(null)
  const [loading,  setLoading]  = useState(false)

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
    <div className="cms-app min-h-screen flex">

      {/* ── Left brand panel ─────────────────────────────────────────────── */}
      <div className="hidden lg:flex w-[440px] xl:w-[500px] flex-shrink-0 flex-col bg-[#040812] relative overflow-hidden">

        {/* Atmospheric glow layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% -10%, rgba(62,145,206,0.18) 0%, transparent 70%)',
          }} />
          <div className="absolute bottom-0 right-0 w-96 h-96" style={{
            background: 'radial-gradient(ellipse 80% 60% at 100% 100%, rgba(20,50,100,0.12) 0%, transparent 60%)',
          }} />
        </div>

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(62,145,206,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 px-10 py-12">

          {/* Brand mark */}
          <div className="flex items-center gap-3 mb-auto">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3E91CE] to-[#1E6BAA] flex items-center justify-center shadow-lg shadow-[#3E91CE]/40 ring-1 ring-[#3E91CE]/30">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-white leading-none tracking-tight">PC Water</p>
              <p className="text-[9px] text-[#3A4560] font-bold uppercase tracking-[0.20em] mt-1">Studio</p>
            </div>
          </div>

          {/* Hero text */}
          <div className="py-12">
            <h1 className="text-[34px] font-black text-white leading-[1.1] tracking-tight mb-4">
              Content<br />Management<br />System
            </h1>
            <p className="text-[14px] text-[#6B7D99] leading-relaxed max-w-[280px]">
              A private workspace for managing PC Water Infrastructure&apos;s digital content.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-3 mb-auto">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#3E91CE]/15 border border-[#3E91CE]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-[#3E91CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[13px] text-[#6B7D99]">{f.label}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="text-[11px] text-[#2A3550] mt-8">
            PC Water Infrastructure · Restricted access
          </p>
        </div>
      </div>

      {/* ── Right form panel ─────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col cms-app-bg relative">

        {/* Theme toggle — top right */}
        <div className="absolute top-5 right-5 z-10">
          <ThemeToggle />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-[400px]">

            {/* Mobile brand */}
            <div className="lg:hidden flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3E91CE] to-[#1E6BAA] flex items-center justify-center mb-4 shadow-xl shadow-[#3E91CE]/25 ring-1 ring-[#3E91CE]/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-[20px] font-extrabold text-[#0E1525] dark:text-[#ECF0F9] tracking-tight">PC Water Studio</h1>
            </div>

            {/* Glass form card */}
            <div className="cms-card p-7">

              {/* Heading */}
              <div className="mb-6">
                <h2 className="text-[21px] font-extrabold text-[#0E1525] dark:text-[#ECF0F9] tracking-tight leading-tight">
                  Sign in
                </h2>
                <p className="text-[13px] text-[#536070] dark:text-[#8B9CB8] mt-1.5">
                  Enter your credentials to continue
                </p>
              </div>

              {/* Alert — not configured */}
              {!configured && (
                <div className="flex gap-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/30 px-4 py-3 mb-5 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-[12px] text-amber-700 dark:text-amber-400 leading-relaxed">
                    Supabase is not configured. Add the required environment variables.
                  </p>
                </div>
              )}

              {/* Alert — auth error */}
              {(accessError || error) && (
                <div className="flex gap-3 rounded-xl bg-red-50/80 dark:bg-red-950/20 border border-red-200/70 dark:border-red-900/30 px-4 py-3 mb-5 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[12px] text-red-600 dark:text-red-400 leading-relaxed">
                    {error ?? 'Your account is not approved for CMS access.'}
                  </p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="cms-email"
                    className="block text-[11px] font-bold text-[#536070] dark:text-[#6B7D99] uppercase tracking-wider mb-2"
                  >
                    Email address
                  </label>
                  <input
                    id="cms-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="field"
                    placeholder="admin@pcwater.com.au"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="cms-password"
                    className="block text-[11px] font-bold text-[#536070] dark:text-[#6B7D99] uppercase tracking-wider mb-2"
                  >
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
                      tabIndex={-1}
                      aria-label={showPwd ? 'Hide password' : 'Show password'}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99AABF] dark:text-[#4A5670] hover:text-[#536070] dark:hover:text-[#8B9CB8] transition-colors"
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
                  className="w-full mt-2 h-[42px] bg-gradient-to-r from-[#3E91CE] to-[#2D7AB8] text-white rounded-lg text-[14px] font-semibold hover:from-[#2D7AB8] hover:to-[#2268A0] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#3E91CE]/25 ring-1 ring-[#3E91CE]/20"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Signing in…
                    </>
                  ) : (
                    <>
                      Continue
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Secure note */}
              <div className="flex items-center gap-2 mt-5 pt-5 border-t border-black/[0.06] dark:border-white/[0.05]">
                <svg className="w-3 h-3 text-[#99AABF] dark:text-[#4A5670] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670]">
                  Restricted — authorised accounts only
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
