'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import CmsShell from '@/components/cms/CmsShell'

export default function CmsClientShell({ children }: { children: React.ReactNode }) {
  const router  = useRouter()
  const checked = useRef(false)
  const [ready, setReady]   = useState(false)
  const [email, setEmail]   = useState('')

  useEffect(() => {
    if (checked.current) return
    checked.current = true

    async function verifySession() {
      const supabase = createSupabaseBrowserClient()
      if (!supabase) {
        router.replace('/cms/login')
        return
      }

      const { data: { user } } = await supabase.auth.getUser()
      if (!user?.email) {
        router.replace('/cms/login')
        return
      }

      const { data: adminRow } = await supabase
        .from('cms_admin_emails')
        .select('email')
        .eq('email', user.email)
        .maybeSingle()

      if (!adminRow) {
        router.replace('/cms/login?error=access-denied')
        return
      }

      setEmail(user.email)
      setReady(true)
    }

    verifySession()
  }, [router])

  if (!ready) {
    return (
      <div className="min-h-screen bg-[#F0F3F9] dark:bg-[#0C0E16] flex items-center justify-center">
        <div className="flex items-center gap-3 bg-white dark:bg-[#13161F] border border-slate-200 dark:border-[#1E2235] rounded-xl px-5 py-4 shadow-sm">
          <svg className="w-4 h-4 animate-spin text-[#3e91ce]" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Verifying access…</span>
        </div>
      </div>
    )
  }

  return <CmsShell email={email}>{children}</CmsShell>
}
