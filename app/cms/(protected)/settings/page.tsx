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
    <div className="cms-card">
      <div className="px-5 py-4 border-b border-black/[0.06] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02]">
        <h2 className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">{title}</h2>
        {subtitle && <p className="text-[12px] text-[#99AABF] dark:text-[#4A5670] mt-0.5">{subtitle}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export default function CmsSettingsPage() {
  const [admins, setAdmins]         = useState<AdminEmail[]>([])
  const [loading, setLoading]       = useState(true)
  const [newEmail, setNewEmail]     = useState('')
  const [adding, setAdding]         = useState(false)
  const [addError, setAddError]     = useState<string | null>(null)
  const [removing, setRemoving]     = useState<string | null>(null)
  const [currentEmail, setCurrent]  = useState('')
  const [abstractConfigured, setAbstractConfigured] = useState(false)
  const [supabaseAdminConfigured, setSupabaseAdminConfigured] = useState(false)
  const [resendConfigured, setResendConfigured] = useState(false)
  const [projectEnquiryNotifyConfigured, setProjectEnquiryNotifyConfigured] = useState(false)
  const [pipedriveConfigured, setPipedriveConfigured] = useState(false)

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

  useEffect(() => {
    async function loadSystemStatus() {
      try {
        const response = await fetch('/api/system-status', { cache: 'no-store' })
        const data = await response.json().catch(() => null)
        setAbstractConfigured(Boolean(data?.abstractConfigured))
        setSupabaseAdminConfigured(Boolean(data?.supabaseAdminConfigured))
        setResendConfigured(Boolean(data?.resendConfigured))
        setProjectEnquiryNotifyConfigured(Boolean(data?.projectEnquiryNotifyConfigured))
        setPipedriveConfigured(Boolean(data?.pipedriveConfigured))
      } catch {
        setAbstractConfigured(false)
        setSupabaseAdminConfigured(false)
        setResendConfigured(false)
        setProjectEnquiryNotifyConfigured(false)
        setPipedriveConfigured(false)
      }
    }

    loadSystemStatus()
  }, [])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = newEmail.trim().toLowerCase()
    if (!trimmed) return

    setAdding(true)
    setAddError(null)

    const supabase = createSupabaseBrowserClient()
    if (!supabase) { setAdding(false); return }

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

    const { error } = await supabase.from('cms_admin_emails').insert({ email: trimmed })

    if (error) {
      setAddError(error.message)
    } else {
      setAdmins((prev) => [...prev, { email: trimmed }])
      setNewEmail('')
    }

    setAdding(false)
  }

  async function handleRemove(email: string) {
    if (email === currentEmail) return
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
    <div className="space-y-5 max-w-2xl">

      {/* Header */}
      <div>
        <p className="text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.16em] mb-1">System</p>
        <h1 className="text-[22px] font-black text-[#0E1525] dark:text-[#ECF0F9] tracking-tight leading-tight">Settings</h1>
        <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] mt-1">
          Manage CMS access and site configuration.
        </p>
      </div>

      {/* Admin access */}
      <Section
        title="CMS Admin Access"
        subtitle="Only these email addresses can log into the CMS. Changes take effect immediately."
      >
        {loading ? (
          <div className="flex items-center gap-2.5 text-[13px] text-[#99AABF] dark:text-[#4A5670] py-4">
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
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05]"
                >
                  <div className="w-7 h-7 rounded-full bg-[#EAF4FF] dark:bg-[#0C1D36] text-[#3E91CE] dark:text-[#60AFDF] flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                    {admin.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-[#0E1525] dark:text-[#ECF0F9] font-medium truncate">{admin.email}</p>
                    {admin.email === currentEmail && (
                      <p className="text-[10px] text-[#3E91CE] dark:text-[#60AFDF] font-semibold">You · current session</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(admin.email)}
                    disabled={admin.email === currentEmail || removing === admin.email}
                    title={admin.email === currentEmail ? 'Cannot remove your own account' : 'Remove admin'}
                    className="w-7 h-7 flex items-center justify-center rounded-lg text-[#C8D2E0] dark:text-[#2A3550] hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[#C8D2E0] dark:disabled:hover:text-[#2A3550] disabled:hover:bg-transparent"
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
                <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670] italic py-2">No admins configured.</p>
              )}
            </div>

            {/* Add new admin */}
            <form onSubmit={handleAdd} className="flex gap-2">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => { setNewEmail(e.target.value); setAddError(null) }}
                placeholder="name@example.com"
                className="flex-1 px-3.5 h-9 rounded-lg border border-black/[0.08] dark:border-white/[0.07] bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm text-[13px] text-[#0E1525] dark:text-[#ECF0F9] placeholder-[#99AABF] dark:placeholder-[#4A5670] focus:outline-none focus:border-[#3E91CE] transition-colors"
              />
              <button
                type="submit"
                disabled={adding || !newEmail.trim()}
                className="px-4 h-9 rounded-lg bg-[#3E91CE] text-white text-[13px] font-semibold hover:bg-[#2D7AB8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-md shadow-[#3E91CE]/20"
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
              <p className="text-[12px] text-red-500 dark:text-red-400">{addError}</p>
            )}
          </div>
        )}
      </Section>

      {/* Site info */}
      <Section
        title="Site Information"
        subtitle="Read-only configuration overview."
      >
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { label: 'Supabase URL',    value: 'mhggidgfivmdgkjerejn.supabase.co' },
            { label: 'Storage Bucket', value: 'cms-media (public)' },
            { label: 'Content Tables', value: 'cms_posts, cms_projects, cms_tags' },
            { label: 'Lead Capture',   value: 'resource_leads, project_enquiries' },
            { label: 'CRM Sync',       value: 'Pipedrive lead + note sync' },
          ].map((item) => (
            <div key={item.label} className="bg-black/[0.02] dark:bg-white/[0.02] rounded-lg px-4 py-3 border border-black/[0.05] dark:border-white/[0.04]">
              <p className="text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] mb-1">{item.label}</p>
              <p className="text-[12px] text-[#0E1525] dark:text-[#ECF0F9] font-mono break-all">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Project Enquiry Pipeline"
        subtitle="Submission storage and email handling for the public contact form."
      >
        <div className="grid sm:grid-cols-3 gap-2">
          {[
            {
              label: 'Storage table',
              active: supabaseAdminConfigured,
              note: supabaseAdminConfigured ? 'Supabase secret storage backend' : 'Add SUPABASE_SECRET_KEY',
            },
            {
              label: 'Confirmation email',
              active: resendConfigured,
              note: resendConfigured ? 'Resend API configured' : 'Add RESEND_API_KEY + RESEND_FROM_EMAIL',
            },
            {
              label: 'Internal notification',
              active: projectEnquiryNotifyConfigured,
              note: projectEnquiryNotifyConfigured ? 'PROJECT_ENQUIRY_NOTIFY_TO set' : 'Falls back to contact@pcwater.com.au',
            },
            {
              label: 'Pipedrive sync',
              active: pipedriveConfigured,
              note: pipedriveConfigured ? 'API token configured' : 'Add PIPEDRIVE_API_TOKEN',
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-lg p-3 border ${
                item.active
                  ? 'bg-white/60 dark:bg-white/[0.04] border-black/[0.07] dark:border-white/[0.07]'
                  : 'bg-black/[0.02] dark:bg-black/[0.20] border-black/[0.04] dark:border-white/[0.03]'
              }`}
            >
              <div className={`w-4 h-4 rounded-full flex items-center justify-center mb-2 ${item.active ? 'bg-emerald-500' : 'bg-black/[0.08] dark:bg-white/[0.08]'}`}>
                {item.active
                  ? <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  : <svg className="w-2.5 h-2.5 text-[#99AABF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/></svg>
                }
              </div>
              <p className={`text-[11px] font-semibold ${item.active ? 'text-[#0E1525] dark:text-[#ECF0F9]' : 'text-[#99AABF] dark:text-[#4A5670]'}`}>{item.label}</p>
              <p className="text-[10px] text-[#99AABF] dark:text-[#4A5670] mt-0.5">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-[#3E91CE]/20 bg-[#EAF4FF] dark:bg-[#0C1D36]/50 px-4 py-3">
          <p className="text-[11px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] mb-1">Supabase setup step</p>
          <p className="text-[11px] text-[#536070] dark:text-[#8B9CB8] leading-relaxed">
            Project enquiries are stored in a private Supabase storage bucket using the server-side secret key. The SQL file remains available if you want to migrate enquiries into a database table later.
          </p>
        </div>
      </Section>

      {/* Email validation */}
      <Section
        title="Email Validation"
        subtitle="Configured layers for lead capture email verification."
      >
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Format check',        active: true,                                                          note: 'Regex pattern' },
            { label: 'Disposable block',    active: true,                                                          note: '30+ known domains' },
            { label: 'Role address block',  active: true,                                                          note: 'noreply, postmaster…' },
            { label: 'MX + deliverability', active: abstractConfigured,                                             note: 'Abstract API' },
          ].map((layer) => (
            <div
              key={layer.label}
              className={`rounded-lg p-3 border ${
                layer.active
                  ? 'bg-white/60 dark:bg-white/[0.04] border-black/[0.07] dark:border-white/[0.07]'
                  : 'bg-black/[0.02] dark:bg-black/[0.20] border-black/[0.04] dark:border-white/[0.03]'
              }`}
            >
              <div className={`w-4 h-4 rounded-full flex items-center justify-center mb-2 ${layer.active ? 'bg-emerald-500' : 'bg-black/[0.08] dark:bg-white/[0.08]'}`}>
                {layer.active
                  ? <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  : <svg className="w-2.5 h-2.5 text-[#99AABF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/></svg>
                }
              </div>
              <p className={`text-[11px] font-semibold ${layer.active ? 'text-[#0E1525] dark:text-[#ECF0F9]' : 'text-[#99AABF] dark:text-[#4A5670]'}`}>{layer.label}</p>
              <p className="text-[10px] text-[#99AABF] dark:text-[#4A5670] mt-0.5">{layer.note}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  )
}
