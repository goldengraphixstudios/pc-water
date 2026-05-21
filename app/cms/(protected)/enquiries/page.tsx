'use client'

import { useEffect, useState } from 'react'

import { deleteProjectEnquiry, fetchProjectEnquiries } from '@/lib/supabase/project-enquiries'
import type { ProjectEnquiry } from '@/lib/project-enquiries'

const STATUSES = ['All', 'new', 'reviewed', 'closed'] as const

function formatDateTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' · ' + d.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true })
}

function formatDateShort(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' })
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

function StatusBadge({ status }: { status: ProjectEnquiry['submissionStatus'] }) {
  const classes =
    status === 'new'
      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
      : status === 'reviewed'
      ? 'bg-[#EAF4FF] dark:bg-[#0C1D36] text-[#3E91CE] dark:text-[#60AFDF]'
      : 'bg-black/[0.05] dark:bg-white/[0.06] text-[#536070] dark:text-[#8B9CB8]'

  return <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${classes}`}>{status}</span>
}

function EmailStatusBadge({ status }: { status: ProjectEnquiry['emailDeliveryStatus'] }) {
  const classes =
    status === 'sent'
      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
      : status === 'failed'
      ? 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400'
      : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'

  return <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${classes}`}>{status}</span>
}

function exportCSV(rows: ProjectEnquiry[]) {
  const headers = ['Submitted', 'First Name', 'Last Name', 'Company', 'Email', 'Phone', 'State', 'Suburb/Town', 'Industry', 'Service', 'Project Stage', 'Timeline', 'Budget', 'Tank Type', 'Status', 'Email Status', 'Message']
  const data = rows.map((row) => [
    formatDateShort(row.submittedAt),
    row.firstName,
    row.lastName,
    row.company || '',
    row.email,
    row.phone || '',
    row.state || '',
    row.suburbTown || '',
    row.industry || '',
    row.service || '',
    row.projectStage || '',
    row.timeline || '',
    row.budget || '',
    row.tankType || '',
    row.submissionStatus,
    row.emailDeliveryStatus,
    row.message,
  ])

  const csv = [headers, ...data]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `pc-water-project-enquiries-${new Date().toISOString().slice(0, 10)}.csv`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function DeleteConfirmModal({
  enquiry,
  deleting,
  onCancel,
  onConfirm,
}: {
  enquiry: ProjectEnquiry
  deleting: boolean
  onCancel: () => void
  onConfirm: () => void
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
          <h3 className="text-center text-[15px] font-bold text-[#0E1525] dark:text-[#ECF0F9] mb-1">Delete enquiry?</h3>
          <p className="text-center text-[13px] text-[#536070] dark:text-[#8B9CB8] mb-1 leading-relaxed">
            This will permanently remove the project enquiry for
          </p>
          <p className="text-center text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] mb-4">{enquiry.firstName} {enquiry.lastName}</p>
          <p className="text-center text-[11px] text-red-500 font-semibold mb-5">This cannot be undone.</p>
          <div className="flex gap-2">
            <button onClick={onCancel} disabled={deleting} className="flex-1 px-4 py-2.5 rounded-lg border border-black/[0.08] dark:border-white/[0.07] text-[13px] font-semibold text-[#536070] dark:text-[#8B9CB8] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors disabled:opacity-50">
              Cancel
            </button>
            <button onClick={onConfirm} disabled={deleting} className="flex-1 px-4 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold transition-colors disabled:opacity-60">
              {deleting ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<ProjectEnquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<(typeof STATUSES)[number]>('All')
  const [toDelete, setToDelete] = useState<ProjectEnquiry | null>(null)
  const [deleting, setDeleting] = useState(false)

  async function load() {
    const data = await fetchProjectEnquiries()
    setEnquiries(data)
    setLoading(false)
    setRefreshing(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function handleDeleteConfirm() {
    if (!toDelete) return
    setDeleting(true)
    const { ok } = await deleteProjectEnquiry(toDelete.id)
    if (ok) {
      setEnquiries((prev) => prev.filter((item) => item.id !== toDelete.id))
    }
    setDeleting(false)
    setToDelete(null)
  }

  const uniqueEmails = new Set(enquiries.map((item) => item.email.toLowerCase())).size
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const thisWeekCount = enquiries.filter((item) => new Date(item.submittedAt) >= oneWeekAgo).length
  const sentCount = enquiries.filter((item) => item.emailDeliveryStatus === 'sent').length

  const filtered = enquiries.filter((item) => {
    const matchStatus = statusFilter === 'All' || item.submissionStatus === statusFilter
    const matchSearch =
      !search ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      `${item.firstName} ${item.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      (item.company || '').toLowerCase().includes(search.toLowerCase()) ||
      (item.service || '').toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  })

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.16em] mb-1">Sales</p>
          <h1 className="text-[22px] font-black text-[#0E1525] dark:text-[#ECF0F9] tracking-tight leading-tight">Project Enquiries</h1>
          <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] mt-1">
            Website project enquiry submissions stored for the CMS team.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => {
              setRefreshing(true)
              load()
            }}
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
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        <StatCard label="Total Enquiries" value={loading ? '—' : enquiries.length} sub="all time" accentClass="bg-[#3E91CE]" />
        <StatCard label="Unique Emails" value={loading ? '—' : uniqueEmails} sub="distinct contacts" accentClass="bg-violet-500" />
        <StatCard label="This Week" value={loading ? '—' : thisWeekCount} sub="last 7 days" accentClass="bg-emerald-500" />
        <StatCard label="Email Sent" value={loading ? '—' : sentCount} sub="confirmation delivery" accentClass="bg-orange-400" />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99AABF] dark:text-[#4A5670] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, company, or service…"
            className="w-full pl-9 pr-4 h-9 rounded-lg border border-black/[0.08] dark:border-white/[0.07] bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm text-[13px] text-[#0E1525] dark:text-[#ECF0F9] placeholder-[#99AABF] dark:placeholder-[#4A5670] focus:outline-none focus:border-[#3E91CE] transition-colors"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {STATUSES.map((item) => (
            <button
              key={item}
              onClick={() => setStatusFilter(item)}
              className={`px-3.5 h-9 rounded-lg text-[12px] font-semibold transition-all whitespace-nowrap ${
                statusFilter === item
                  ? 'bg-[#3E91CE] text-white shadow-sm'
                  : 'bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm border border-black/[0.08] dark:border-white/[0.07] text-[#536070] dark:text-[#8B9CB8] hover:border-[#3E91CE] hover:text-[#3E91CE]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="cms-card">
        <div className="px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.05] flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
          <h2 className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">All Project Enquiries</h2>
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
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">Loading enquiries…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="px-5 py-16 text-center">
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">
              {enquiries.length === 0 ? 'No project enquiries yet.' : 'No results match your current filter.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.05]">
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em]">Contact</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em]">Service</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden md:table-cell">Status</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden lg:table-cell">Email</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden xl:table-cell">Submitted</th>
                  <th className="px-2 py-3 w-10" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="border-b border-black/[0.05] dark:border-white/[0.04] last:border-0 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="px-5 py-3.5">
                      <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9]">{enquiry.firstName} {enquiry.lastName}</p>
                      <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] mt-0.5">{enquiry.company || enquiry.email}</p>
                    </td>
                    <td className="px-5 py-3.5 text-[12px] text-[#536070] dark:text-[#8B9CB8]">{enquiry.service || '—'}</td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <StatusBadge status={enquiry.submissionStatus} />
                        <EmailStatusBadge status={enquiry.emailDeliveryStatus} />
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell text-[12px] text-[#536070] dark:text-[#8B9CB8]">{enquiry.email}</td>
                    <td className="px-5 py-3.5 hidden xl:table-cell">
                      <span className="text-[12px] text-[#99AABF] dark:text-[#4A5670] font-mono">{formatDateTime(enquiry.submittedAt)}</span>
                    </td>
                    <td className="px-2 py-3.5">
                      <button
                        onClick={() => setToDelete(enquiry)}
                        title="Delete enquiry"
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
          Showing {filtered.length} of {enquiries.length} project enquir{enquiries.length !== 1 ? 'ies' : 'y'}
        </p>
      )}

      {toDelete && (
        <DeleteConfirmModal
          enquiry={toDelete}
          deleting={deleting}
          onCancel={() => {
            if (!deleting) setToDelete(null)
          }}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  )
}
