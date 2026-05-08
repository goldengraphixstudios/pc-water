'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import CmsShell from '@/components/cms/CmsShell'

export default function CmsClientShell({ children }: { children: React.ReactNode }) {
  const router  = useRouter()
  const checked = useRef(false)
  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState('')

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
      <div className="cms-app min-h-screen bg-[#EFF2F8] dark:bg-[#080B12] flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          {/* Brand mark */}
          <div className="w-12 h-12 rounded-2xl bg-[#3E91CE] flex items-center justify-center shadow-xl shadow-[#3E91CE]/25 ring-1 ring-[#3E91CE]/30">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          {/* Verifying pill */}
          <div className="flex items-center gap-2.5 bg-white dark:bg-[#111622] border border-[#DDE2EE] dark:border-[#1D2235] rounded-xl px-5 py-3.5 shadow-sm">
            <svg className="w-4 h-4 animate-spin text-[#3E91CE]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-[13px] text-[#536070] dark:text-[#8B9CB8] font-medium">Verifying access…</span>
          </div>
        </div>
      </div>
    )
  }

  return <CmsShell email={email}>{children}</CmsShell>
}
