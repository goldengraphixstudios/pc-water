'use client'

import { useEffect, useState } from 'react'
import { fetchResourceLeads } from '@/lib/supabase/resources'
import type { ResourceLead } from '@/lib/supabase/resources'

const DIVISIONS = ['All', 'PC Tanks', 'PC Water Solutions']

function formatDateTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' · ' + d.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true })
}

function DivisionBadge({ division }: { division: string | null }) {
  const isSolutions = division === 'PC Water Solutions'
  return (
    <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full ${
      isSolutions
        ? 'bg-[#EAF4FF] dark:bg-[#162338] text-[#3e91ce] dark:text-[#60AFDF]'
        : 'bg-slate-100 dark:bg-[#1E2235] text-slate-600 dark:text-slate-400'
    }`}>
      {division ?? '—'}
    </span>
  )
}

export default function LeadsDashboardPage() {
  const [leads, setLeads]             = useState<ResourceLead[]>([])
  const [loading, setLoading]         = useState(true)
  const [division, setDivision]       = useState('All')
  const [search, setSearch]           = useState('')

  useEffect(() => {
    fetchResourceLeads().then((data) => {
      setLeads(data)
      setLoading(false)
    })
  }, [])

  const filtered = leads.filter((l) => {
    const matchDivision = division === 'All' || l.division === division
    const matchSearch   = !search || l.email.toLowerCase().includes(search.toLowerCase()) ||
                          (l.resource_title ?? '').toLowerCase().includes(search.toLowerCase())
    return matchDivision && matchSearch
  })

  // Per-resource counts
  const countsByResource = leads.reduce<Record<string, number>>((acc, l) => {
    const key = l.resource_title ?? l.resource_slug
    acc[key] = (acc[key] ?? 0) + 1
    return acc
  }, {})
  const topResources = Object.entries(countsByResource)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Resource Leads</h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
            Emails captured through the free guide downloads.
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-[#3e91ce] dark:text-[#60AFDF]">{leads.length}</p>
          <p className="text-xs text-slate-400 dark:text-slate-600 font-medium">total leads</p>
        </div>
      </div>

      {/* Summary cards */}
      {!loading && topResources.length > 0 && (
        <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-100 dark:border-[#1A1D2C]">
            <h2 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">Downloads by Resource</h2>
          </div>
          <div className="divide-y divide-slate-50 dark:divide-[#161926]">
            {topResources.map(([title, count]) => (
              <div key={title} className="flex items-center justify-between px-5 py-2.5">
                <p className="text-[13px] text-slate-700 dark:text-slate-300 truncate">{title}</p>
                <span className="ml-4 flex-shrink-0 bg-[#EAF4FF] dark:bg-[#162338] text-[#3e91ce] dark:text-[#60AFDF] text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search email or resource…"
          className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#1E2235] bg-white dark:bg-[#13161F] text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#3e91ce] transition-colors"
        />
        <div className="flex gap-1.5">
          {DIVISIONS.map((d) => (
            <button
              key={d}
              onClick={() => setDivision(d)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                division === d
                  ? 'bg-[#3e91ce] text-white shadow-sm'
                  : 'bg-white dark:bg-[#13161F] border border-slate-200 dark:border-[#1E2235] text-slate-600 dark:text-slate-400 hover:border-[#3e91ce] hover:text-[#3e91ce]'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-slate-100 dark:border-[#1A1D2C] flex items-center justify-between">
          <h2 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">All Leads</h2>
          <span className="text-[11px] text-slate-400 dark:text-slate-600">{filtered.length} shown</span>
        </div>

        {loading ? (
          <div className="px-5 py-12 text-center">
            <svg className="w-5 h-5 animate-spin text-[#3e91ce] mx-auto mb-3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 12 5.373 12 0h4z" />
            </svg>
            <p className="text-sm text-slate-400 dark:text-slate-600">Loading leads…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <p className="text-sm text-slate-400 dark:text-slate-600">
              {leads.length === 0 ? 'No leads yet. Downloads will appear here.' : 'No results match your filter.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="text-left border-b border-slate-100 dark:border-[#1A1D2C]">
                  <th className="px-5 py-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wide">Email</th>
                  <th className="px-5 py-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wide">Resource</th>
                  <th className="px-5 py-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wide">Division</th>
                  <th className="px-5 py-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wide">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-slate-50 dark:border-[#161926] last:border-0 hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors"
                  >
                    <td className="px-5 py-3 text-slate-800 dark:text-slate-200 font-medium">{lead.email}</td>
                    <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{lead.resource_title ?? lead.resource_slug}</td>
                    <td className="px-5 py-3"><DivisionBadge division={lead.division} /></td>
                    <td className="px-5 py-3 text-slate-400 dark:text-slate-600 text-[12px]">{formatDateTime(lead.downloaded_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
