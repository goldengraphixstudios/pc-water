'use client'

import { useEffect, useState } from 'react'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'

type AdminEmail = {
  id?: string
  email: string
  created_at?: string | null
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-[#1A1D2C]">
        <h2 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">{title}</h2>
        {subtitle && <p className="text-[12px] text-slate-400 dark:text-slate-600 mt-0.5">{subtitle}</p>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

export default function CmsSettingsPage() {
  const [admins, setAdmins]       = useState<AdminEmail[]>([])
  const [loading, setLoading]     = useState(true)
  const [newEmail, setNewEmail]   = useState('')
  const [adding, setAdding]       = useState(false)
  const [addError, setAddError]   = useState<string | null>(null)
  const [removing, setRemoving]   = useState<string | null>(null)
  const [currentEmail, setCurrent] = useState('')

  useEffect(() => {
    async function load() {
      const supabase = createSupabaseBrowserClient()
      if (!supabase) { setLoading(false); return }

      const { data: { user } } = await supabase.auth.getUser()
      setCurrent(user?.email ?? '')

      const { data } = await supabase
        .from('cms_admin_emails')
        .select('email, created_at')
        .order('created_at', { ascending: true })

      setAdmins((data ?? []) as AdminEmail[])
      setLoading(false)
    }
    load()
  }, [])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = newEmail.trim().toLowerCase()
    if (!trimmed) return

    setAdding(true)
    setAddError(null)

    const supabase = createSupabaseBrowserClient()
    if (!supabase) { setAdding(false); return }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setAddError('Invalid email address.')
      setAdding(false)
      return
    }

    if (admins.some((a) => a.email === trimmed)) {
      setAddError('This email is already an admin.')
      setAdding(false)
      return
    }

    const { error } = await supabase
      .from('cms_admin_emails')
      .insert({ email: trimmed })

    if (error) {
      setAddError(error.message)
    } else {
      setAdmins((prev) => [...prev, { email: trimmed }])
      setNewEmail('')
    }

    setAdding(false)
  }

  async function handleRemove(email: string) {
    if (email === currentEmail) return // can't remove yourself
    setRemoving(email)

    const supabase = createSupabaseBrowserClient()
    if (!supabase) { setRemoving(null); return }

    const { error } = await supabase
      .from('cms_admin_emails')
      .delete()
      .eq('email', email)

    if (!error) {
      setAdmins((prev) => prev.filter((a) => a.email !== email))
    }

    setRemoving(null)
  }

  return (
    <div className="space-y-6 max-w-2xl">

      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
          Manage CMS access and site configuration.
        </p>
      </div>

      {/* Admin access */}
      <Section
        title="CMS Admin Access"
        subtitle="Only these email addresses can log into the CMS. Changes take effect immediately."
      >
        {loading ? (
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-600 py-4">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading…
          </div>
        ) : (
          <div className="space-y-4">
            {/* Admin list */}
            <div className="space-y-2">
              {admins.map((admin) => (
                <div
                  key={admin.email}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0C0E16] border border-slate-100 dark:border-[#1E2235]"
                >
                  <div className="w-7 h-7 rounded-full bg-[#3e91ce]/15 dark:bg-[#3e91ce]/20 text-[#3e91ce] dark:text-[#60AFDF] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {admin.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-slate-700 dark:text-slate-300 font-medium truncate">{admin.email}</p>
                    {admin.email === currentEmail && (
                      <p className="text-[10px] text-[#3e91ce] dark:text-[#60AFDF] font-medium">You (current session)</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(admin.email)}
                    disabled={admin.email === currentEmail || removing === admin.email}
                    title={admin.email === currentEmail ? 'Cannot remove your own account' : 'Remove admin'}
                    className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-300 dark:text-slate-700 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-slate-300 dark:disabled:hover:text-slate-700 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
                  >
                    {removing === admin.email ? (
                      <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              ))}

              {admins.length === 0 && (
                <p className="text-sm text-slate-400 dark:text-slate-600 italic">No admins configured.</p>
              )}
            </div>

            {/* Add new admin */}
            <form onSubmit={handleAdd} className="flex gap-2">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => { setNewEmail(e.target.value); setAddError(null) }}
                placeholder="name@example.com"
                className="flex-1 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-[#1E2235] bg-white dark:bg-[#13161F] text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#3e91ce] transition-colors"
              />
              <button
                type="submit"
                disabled={adding || !newEmail.trim()}
                className="px-4 py-2 rounded-lg bg-[#3e91ce] text-white text-[13px] font-medium hover:bg-[#2d7ab8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
              >
                {adding ? (
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                )}
                Add Admin
              </button>
            </form>

            {addError && (
              <p className="text-xs text-red-500 dark:text-red-400">{addError}</p>
            )}
          </div>
        )}
      </Section>

      {/* Site info */}
      <Section
        title="Site Information"
        subtitle="Read-only configuration overview."
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: 'Supabase URL',      value: 'mhggidgfivmdgkjerejn.supabase.co' },
            { label: 'Storage Bucket',    value: 'cms-media (public)' },
            { label: 'Content Tables',    value: 'cms_posts, cms_projects, cms_tags' },
            { label: 'Lead Capture',      value: 'resource_leads' },
          ].map((item) => (
            <div key={item.label} className="bg-slate-50 dark:bg-[#0C0E16] rounded-lg px-4 py-3 border border-slate-100 dark:border-[#1E2235]">
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 font-mono break-all">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Email validation */}
      <Section
        title="Email Validation"
        subtitle="Configured layers for lead capture email verification."
      >
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Format check',     active: true,  note: 'Regex pattern' },
            { label: 'Disposable block', active: true,  note: '30+ known domains' },
            { label: 'Role address block', active: true, note: 'noreply, postmaster…' },
            { label: 'MX + deliverability', active: Boolean(process.env.NEXT_PUBLIC_ABSTRACT_EMAIL_API_KEY), note: 'Abstract API (optional)' },
          ].map((layer) => (
            <div key={layer.label} className={`rounded-lg p-3 border ${layer.active ? 'bg-white dark:bg-[#13161F] border-slate-200 dark:border-[#1E2235]' : 'bg-slate-50 dark:bg-[#0C0E16] border-slate-100 dark:border-[#1E2235]/50'}`}>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center mb-2 ${layer.active ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`}>
                {layer.active
                  ? <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  : <svg className="w-2.5 h-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/></svg>
                }
              </div>
              <p className={`text-[11px] font-semibold ${layer.active ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400 dark:text-slate-600'}`}>{layer.label}</p>
              <p className="text-[10px] text-slate-400 dark:text-slate-600 mt-0.5">{layer.note}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  )
}
