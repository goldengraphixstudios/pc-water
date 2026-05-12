'use client'

import { useEffect, useState } from 'react'
import { fetchResourceLeads, deleteResourceLead } from '@/lib/supabase/resources'
import type { ResourceLead } from '@/lib/supabase/resources'

const DIVISIONS = ['All', 'PC Tanks', 'PC Water Solutions']

function formatDateTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' · ' + d.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true })
}

function formatDateShort(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' })
}

function DivisionBadge({ division }: { division: string | null }) {
  const isSolutions = division === 'PC Water Solutions'
  return (
    <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
      isSolutions
        ? 'bg-[#EAF4FF] dark:bg-[#0C1D36] text-[#3E91CE] dark:text-[#60AFDF]'
        : 'bg-black/[0.05] dark:bg-white/[0.06] text-[#536070] dark:text-[#8B9CB8]'
    }`}>
      {division ?? '—'}
    </span>
  )
}

function StatCard({ label, value, sub, accentClass }: { label: string; value: string | number; sub: string; accentClass: string }) {
  return (
    <div className="cms-stat-card">
      <div className={`h-[3px] ${accentClass}`} />
      <div className="p-4 pt-3.5">
        <p className="text-[26px] font-black text-[#0E1525] dark:text-[#ECF0F9] leading-none mb-1 tracking-tight">{value}</p>
        <p className="text-[12px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">{label}</p>
        <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] mt-0.5 truncate">{sub}</p>
      </div>
    </div>
  )
}

// ── CSV export ───────────────────────────────────────────────────────────────
function exportCSV(leads: ResourceLead[]) {
  const headers = ['Email', 'Resource', 'Division', 'Date']
  const rows = leads.map((l) => [
    l.email,
    l.resource_title ?? l.resource_slug,
    l.division ?? '',
    formatDateShort(l.downloaded_at),
  ])
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = `pc-water-resource-leads-${new Date().toISOString().slice(0, 10)}.csv`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ── Delete confirmation modal ─────────────────────────────────────────────────
function DeleteConfirmModal({
  lead,
  onConfirm,
  onCancel,
  deleting,
}: {
  lead: ResourceLead
  onConfirm: () => void
  onCancel: () => void
  deleting: boolean
}) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-sm cms-card shadow-2xl">
        <div className="p-6">
          <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center mx-auto mb-4">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 className="text-center text-[15px] font-bold text-[#0E1525] dark:text-[#ECF0F9] mb-1">Delete lead?</h3>
          <p className="text-center text-[13px] text-[#536070] dark:text-[#8B9CB8] mb-1 leading-relaxed">
            This will permanently remove the lead record for
          </p>
          <p className="text-center text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] mb-1">{lead.email}</p>
          {lead.resource_title && (
            <p className="text-center text-[11px] text-[#99AABF] dark:text-[#4A5670] mb-4">{lead.resource_title}</p>
          )}
          <p className="text-center text-[11px] text-red-500 font-semibold mb-5">This cannot be undone.</p>
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              disabled={deleting}
              className="flex-1 px-4 py-2.5 rounded-lg border border-black/[0.08] dark:border-white/[0.07] text-[13px] font-semibold text-[#536070] dark:text-[#8B9CB8] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={deleting}
              className="flex-1 px-4 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {deleting ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Deleting…
                </>
              ) : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LeadsDashboardPage() {
  const [leads, setLeads]           = useState<ResourceLead[]>([])
  const [loading, setLoading]       = useState(true)
  const [division, setDivision]     = useState('All')
  const [search, setSearch]         = useState('')
  const [showSettings, setSettings] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [toDelete, setToDelete]     = useState<ResourceLead | null>(null)
  const [deleting, setDeleting]     = useState(false)
  const [abstractConfigured, setAbstractConfigured] = useState(false)

  async function load() {
    const data = await fetchResourceLeads()
    setLeads(data)
    setLoading(false)
    setRefreshing(false)
  }

  useEffect(() => { load() }, [])

  useEffect(() => {
    async function loadSystemStatus() {
      try {
        const response = await fetch('/api/system-status', { cache: 'no-store' })
        const data = await response.json().catch(() => null)
        setAbstractConfigured(Boolean(data?.abstractConfigured))
      } catch {
        setAbstractConfigured(false)
      }
    }

    loadSystemStatus()
  }, [])

  async function handleRefresh() {
    setRefreshing(true)
    await load()
  }

  async function handleDeleteConfirm() {
    if (!toDelete) return
    setDeleting(true)
    const { ok } = await deleteResourceLead(toDelete.id)
    if (ok) {
      setLeads((prev) => prev.filter((l) => l.id !== toDelete.id))
    }
    setDeleting(false)
    setToDelete(null)
  }

  // ── Derived stats ─────────────────────────────────────────────────────────
  const uniqueEmails   = new Set(leads.map((l) => l.email.toLowerCase())).size
  const oneWeekAgo     = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const thisWeekCount  = leads.filter((l) => new Date(l.downloaded_at) >= oneWeekAgo).length

  const countsByResource = leads.reduce<Record<string, number>>((acc, l) => {
    const key = l.resource_title ?? l.resource_slug
    acc[key] = (acc[key] ?? 0) + 1
    return acc
  }, {})
  const sortedResources = Object.entries(countsByResource).sort((a, b) => b[1] - a[1])
  const topResource     = sortedResources[0]?.[0] ?? '—'
  const maxCount        = sortedResources[0]?.[1] ?? 1

  // ── Filtered table data ───────────────────────────────────────────────────
  const filtered = leads.filter((l) => {
    const matchDiv    = division === 'All' || l.division === division
    const matchSearch = !search ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.resource_title ?? '').toLowerCase().includes(search.toLowerCase())
    return matchDiv && matchSearch
  })

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.16em] mb-1">Analytics</p>
          <h1 className="text-[22px] font-black text-[#0E1525] dark:text-[#ECF0F9] tracking-tight leading-tight">Resource Leads</h1>
          <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] mt-1">
            Emails captured through the free guide download gate.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            title="Refresh"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.07] bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm text-[#99AABF] dark:text-[#4A5670] hover:text-[#3E91CE] hover:border-[#3E91CE] transition-colors disabled:opacity-50"
          >
            <svg className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button
            onClick={() => exportCSV(filtered)}
            disabled={filtered.length === 0}
            className="flex items-center gap-1.5 px-3.5 h-9 rounded-lg border border-black/[0.08] dark:border-white/[0.07] bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm text-[12px] font-semibold text-[#536070] dark:text-[#8B9CB8] hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors disabled:opacity-40 whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Export CSV
          </button>
          <button
            onClick={() => setSettings((v) => !v)}
            className={`flex items-center gap-1.5 px-3.5 h-9 rounded-lg border text-[12px] font-semibold transition-colors whitespace-nowrap ${
              showSettings
                ? 'border-[#3E91CE] bg-[#EAF4FF] dark:bg-[#0C1D36] text-[#3E91CE] dark:text-[#60AFDF]'
                : 'border-black/[0.08] dark:border-white/[0.07] bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm text-[#536070] dark:text-[#8B9CB8] hover:border-[#3E91CE] hover:text-[#3E91CE]'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        <StatCard label="Total Leads"   value={loading ? '—' : leads.length}                  sub="all time"           accentClass="bg-[#3E91CE]" />
        <StatCard label="Unique Emails" value={loading ? '—' : uniqueEmails}                  sub="distinct addresses" accentClass="bg-violet-500" />
        <StatCard label="This Week"     value={loading ? '—' : thisWeekCount}                 sub="last 7 days"        accentClass="bg-emerald-500" />
        <StatCard label="Top Resource"  value={loading ? '—' : sortedResources[0]?.[1] ?? 0} sub={topResource}        accentClass="bg-orange-400" />
      </div>

      {/* Settings panel */}
      {showSettings && (
        <div className="cms-card">
          <div className="px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.05]">
            <h2 className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">Settings</h2>
          </div>
          <div className="p-5 grid gap-4 sm:grid-cols-2">

            {/* CSV Export */}
            <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl p-4 border border-black/[0.05] dark:border-white/[0.05]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">Export Leads</p>
              </div>
              <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] mb-3 leading-relaxed">
                Download all currently visible leads as a CSV file. Filters and search are applied before export.
              </p>
              <button
                onClick={() => exportCSV(filtered)}
                disabled={filtered.length === 0}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white text-[12px] font-semibold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Export {filtered.length} lead{filtered.length !== 1 ? 's' : ''} as CSV
              </button>
            </div>

            {/* Email Verification Status */}
            <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl p-4 border border-black/[0.05] dark:border-white/[0.05]">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${abstractConfigured ? 'bg-emerald-100 dark:bg-emerald-950/40' : 'bg-amber-100 dark:bg-amber-950/40'}`}>
                  <svg className={`w-3.5 h-3.5 ${abstractConfigured ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">Email Verification</p>
                <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${abstractConfigured ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400' : 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'}`}>
                  {abstractConfigured ? 'Active' : 'Basic only'}
                </span>
              </div>
              {abstractConfigured ? (
                <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] leading-relaxed">
                  Abstract API is configured. MX record checks, disposable detection, and deliverability scoring are active.
                </p>
              ) : (
                <>
                  <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] mb-2 leading-relaxed">
                    Currently using basic validation only. Enable Abstract API for real deliverability checks.
                  </p>
                  <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] rounded px-2 py-1.5 leading-relaxed">
                    ABSTRACT_EMAIL_API_KEY=your_key
                  </p>
                  <a
                    href="https://www.abstractapi.com/api/email-verification-validation-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#3E91CE] dark:text-[#60AFDF] hover:underline mt-2"
                  >
                    Get a free API key at abstractapi.com
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </>
              )}
            </div>

            {/* Validation layers */}
            <div className="sm:col-span-2 bg-black/[0.02] dark:bg-white/[0.02] rounded-xl p-4 border border-black/[0.05] dark:border-white/[0.05]">
              <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] mb-3">Active Validation Layers</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Format check',        active: true,              note: 'Regex pattern' },
                  { label: 'Disposable block',    active: true,              note: '30+ known domains' },
                  { label: 'Role address block',  active: true,              note: 'noreply, postmaster…' },
                  { label: 'MX + deliverability', active: abstractConfigured, note: 'Abstract API' },
                ].map((layer) => (
                  <div
                    key={layer.label}
                    className={`rounded-lg p-3 border ${
                      layer.active
                        ? 'bg-white/60 dark:bg-white/[0.04] border-black/[0.07] dark:border-white/[0.07]'
                        : 'bg-black/[0.02] dark:bg-black/[0.20] border-black/[0.04] dark:border-white/[0.03]'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center mb-1.5 ${layer.active ? 'bg-emerald-500' : 'bg-black/[0.08] dark:bg-white/[0.08]'}`}>
                      {layer.active
                        ? <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                        : <svg className="w-2.5 h-2.5 text-[#99AABF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/></svg>
                      }
                    </div>
                    <p className={`text-[11px] font-semibold leading-tight ${layer.active ? 'text-[#0E1525] dark:text-[#ECF0F9]' : 'text-[#99AABF] dark:text-[#4A5670]'}`}>{layer.label}</p>
                    <p className="text-[10px] text-[#99AABF] dark:text-[#4A5670] mt-0.5">{layer.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resource breakdown */}
      {!loading && sortedResources.length > 0 && (
        <div className="cms-card">
          <div className="px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.05]">
            <h2 className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">Downloads by Resource</h2>
          </div>
          <div className="p-4 space-y-3">
            {sortedResources.map(([title, count]) => (
              <div key={title} className="flex items-center gap-3">
                <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] truncate w-52 flex-shrink-0">{title}</p>
                <div className="flex-1 h-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#3E91CE] transition-all duration-500"
                    style={{ width: `${Math.round((count / maxCount) * 100)}%` }}
                  />
                </div>
                <span className="text-[12px] font-bold text-[#0E1525] dark:text-[#ECF0F9] w-6 text-right flex-shrink-0">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99AABF] dark:text-[#4A5670] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search email or resource…"
            className="w-full pl-9 pr-4 h-9 rounded-lg border border-black/[0.08] dark:border-white/[0.07] bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm text-[13px] text-[#0E1525] dark:text-[#ECF0F9] placeholder-[#99AABF] dark:placeholder-[#4A5670] focus:outline-none focus:border-[#3E91CE] transition-colors"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {DIVISIONS.map((d) => (
            <button
              key={d}
              onClick={() => setDivision(d)}
              className={`px-3.5 h-9 rounded-lg text-[12px] font-semibold transition-all whitespace-nowrap ${
                division === d
                  ? 'bg-[#3E91CE] text-white shadow-sm'
                  : 'bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm border border-black/[0.08] dark:border-white/[0.07] text-[#536070] dark:text-[#8B9CB8] hover:border-[#3E91CE] hover:text-[#3E91CE]'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="cms-card">
        <div className="px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.05] flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
          <h2 className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">All Leads</h2>
          <span className="text-[11px] text-[#99AABF] dark:text-[#4A5670] font-mono">
            {loading ? '…' : `${filtered.length} shown`}
          </span>
        </div>

        {loading ? (
          <div className="flex flex-col items-center gap-3 py-20">
            <svg className="w-5 h-5 animate-spin text-[#3E91CE]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">Loading leads…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="px-5 py-16 text-center">
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">
              {leads.length === 0
                ? 'No leads yet — downloads will appear here as they come in.'
                : 'No results match your current filter.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.05]">
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em]">Email</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em]">Resource</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden sm:table-cell">Division</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden lg:table-cell">Downloaded</th>
                  <th className="px-2 py-3 w-10" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-black/[0.05] dark:border-white/[0.04] last:border-0 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="px-5 py-3.5 text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">{lead.email}</td>
                    <td className="px-5 py-3.5 text-[12px] text-[#536070] dark:text-[#8B9CB8]">{lead.resource_title ?? lead.resource_slug}</td>
                    <td className="px-5 py-3.5 hidden sm:table-cell"><DivisionBadge division={lead.division} /></td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-[12px] text-[#99AABF] dark:text-[#4A5670] font-mono">{formatDateTime(lead.downloaded_at)}</span>
                    </td>
                    <td className="px-2 py-3.5">
                      <button
                        onClick={() => setToDelete(lead)}
                        title="Delete lead"
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[#C8D2E0] dark:text-[#2A3550] opacity-0 group-hover:opacity-100 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {!loading && filtered.length > 0 && (
        <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] text-center">
          Showing {filtered.length} of {leads.length} lead{leads.length !== 1 ? 's' : ''}
        </p>
      )}

      {/* Delete confirmation modal */}
      {toDelete && (
        <DeleteConfirmModal
          lead={toDelete}
          onConfirm={handleDeleteConfirm}
          onCancel={() => { if (!deleting) setToDelete(null) }}
          deleting={deleting}
        />
      )}
    </div>
  )
}
