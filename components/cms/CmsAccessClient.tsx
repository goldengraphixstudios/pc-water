'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import LoginForm from '@/components/cms/LoginForm'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import { withBasePath } from '@/lib/base-path'

type CmsAccessClientProps = {
  mode: 'login' | 'landing'
}

export default function CmsAccessClient({ mode }: CmsAccessClientProps) {
  const router = useRouter()
  const [status, setStatus] = useState<'checking' | 'admin' | 'not-admin' | 'signed-out'>('checking')
  const [email, setEmail] = useState<string | null>(null)

  const isGitHubPages = process.env.NEXT_PUBLIC_BASE_PATH === '/pc-water'
  const cmsHomeHref = useMemo(() => withBasePath('/cms/'), [])

  useEffect(() => {
    let active = true

    async function checkAccess() {
      const supabase = createSupabaseBrowserClient()

      if (!supabase) {
        if (active) {
          setStatus('signed-out')
        }
        return
      }

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!active) {
        return
      }

      if (!user?.email) {
        setEmail(null)
        setStatus('signed-out')
        return
      }

      setEmail(user.email)

      const { data: adminRow } = await supabase
        .from('cms_admin_emails')
        .select('email')
        .eq('email', user.email)
        .maybeSingle()

      if (!active) {
        return
      }

      if (adminRow) {
        setStatus('admin')

        if (mode === 'login' && !isGitHubPages) {
          router.replace('/cms/dashboard')
          router.refresh()
        }
        return
      }

      setStatus('not-admin')
    }

    checkAccess()

    return () => {
      active = false
    }
  }, [isGitHubPages, mode, router])

  if (mode === 'login') {
    if (status === 'checking') {
      return (
        <div className="min-h-screen bg-[#F0F3F9] dark:bg-[#0C0E16] flex items-center justify-center p-4">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm text-slate-600 shadow-sm dark:border-[#1E2235] dark:bg-[#13161F] dark:text-slate-300">
            Checking CMS access...
          </div>
        </div>
      )
    }

    if (status === 'admin' && isGitHubPages) {
      return (
        <main className="min-h-screen bg-[#F0F3F9] dark:bg-[#0C0E16] flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-[#1E2235] dark:bg-[#13161F]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#3e91ce]">CMS Access</p>
            <h1 className="mb-4 text-3xl font-black text-[#30505b] dark:text-slate-100">Signed In</h1>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              You are signed in as <span className="font-semibold text-slate-900 dark:text-slate-100">{email}</span>.
              This GitHub Pages deployment can host the CMS login entry, but the editing dashboard still needs the
              server runtime build.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={cmsHomeHref}
                className="rounded-full bg-[#3e91ce] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2d7ab8]"
              >
                Open CMS Entry
              </Link>
              <Link
                href={withBasePath('/')}
                className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[#30505b] transition-colors hover:border-[#3e91ce] hover:text-[#3e91ce] dark:border-[#1E2235] dark:text-slate-200"
              >
                Back to Website
              </Link>
            </div>
          </div>
        </main>
      )
    }

    return <LoginForm />
  }

  return (
    <main className="min-h-screen bg-[#0d1b2a] text-white">
      <section className="relative overflow-hidden px-4 py-32">
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#30505b]/40 via-transparent to-[#3e91ce]/10 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#3e91ce]">
            / CMS Access
          </p>
          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            CMS
            <br />
            <span className="gradient-text">ENTRY</span>
          </h1>

          {status === 'checking' ? (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              Checking your session...
            </p>
          ) : status === 'admin' ? (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              Signed in as <span className="font-semibold text-white">{email}</span>. GitHub Pages can host the
              login entry, but the current editing dashboard requires the server runtime deployment.
            </p>
          ) : status === 'not-admin' ? (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              This account is signed in but is not approved for CMS access.
            </p>
          ) : (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              Sign in to your CMS account.
            </p>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={withBasePath('/cms/login/')}
              className="glow-btn rounded-full bg-[#3e91ce] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#2d7ab8]"
            >
              Go to CMS Login
            </Link>
            <Link
              href={withBasePath('/')}
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              Back to Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
