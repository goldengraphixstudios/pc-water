'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { fetchAdminProjects } from '@/lib/cms/browser-admin'
import type { CmsProject } from '@/lib/cms/types'
import { formatDate } from '@/lib/cms/utils'
import { getProjectPageAppearances } from '@/lib/cms/page-mappings'

function StatusPill({ status }: { status: string }) {
  const live = status === 'published'
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
      live
        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
        : 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${live ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {live ? 'Published' : 'Draft'}
    </span>
  )
}

function AppearsBadge({ type }: { type: 'industry' | 'service' | 'homepage' }) {
  if (type === 'homepage') return (
    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 whitespace-nowrap">Homepage</span>
  )
  if (type === 'industry') return (
    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EAF4FF] dark:bg-[#162338] text-[#3e91ce] dark:text-[#60AFDF] whitespace-nowrap">Industry</span>
  )
  return (
    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#1E2235] text-slate-500 dark:text-slate-400 whitespace-nowrap">Service</span>
  )
}

const STATUS_FILTERS = ['All', 'Published', 'Draft'] as const
type StatusFilter = typeof STATUS_FILTERS[number]

export default function CmsProjectsPage() {
  const router = useRouter()
  const [projects, setProjects]   = useState<CmsProject[]>([])
  const [loading, setLoading]     = useState(true)
  const [search, setSearch]       = useState('')
  const [statusFilter, setStatus] = useState<StatusFilter>('All')

  useEffect(() => {
    fetchAdminProjects().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchStatus =
        statusFilter === 'All' ||
        (statusFilter === 'Published' && p.status === 'published') ||
        (statusFilter === 'Draft' && p.status === 'draft')
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.sector.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q)
      return matchStatus && matchSearch
    })
  }, [projects, search, statusFilter])

  const publishedCount = projects.filter(p => p.status === 'published').length
  const draftCount     = projects.filter(p => p.status === 'draft').length
  const featuredCount  = projects.filter(p => p.featured).length

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Projects</h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
            {loading ? 'Loading…' : `${projects.length} total · ${publishedCount} published · ${featuredCount} featured`}
          </p>
        </div>
        <Link
          href="/cms/projects/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3e91ce] text-white text-[13px] font-medium hover:bg-[#2d7ab8] transition-colors shadow-sm shadow-[#3e91ce]/20"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </Link>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search title, location, or sector…"
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-[#1E2235] bg-white dark:bg-[#13161F] text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#3e91ce] transition-colors"
          />
        </div>
        <div className="flex gap-1.5">
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                statusFilter === s
                  ? 'bg-[#3e91ce] text-white shadow-sm'
                  : 'bg-white dark:bg-[#13161F] border border-slate-200 dark:border-[#1E2235] text-slate-600 dark:text-slate-400 hover:border-[#3e91ce] hover:text-[#3e91ce]'
              }`}
            >
              {s}
              {s !== 'All' && (
                <span className="ml-1 opacity-70">
                  ({s === 'Published' ? publishedCount : draftCount})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center py-20 text-center px-6">
            <svg className="w-5 h-5 animate-spin text-[#3e91ce] mb-3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-sm text-slate-400 dark:text-slate-600">Loading projects…</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center px-6">
            <div className="w-14 h-14 bg-slate-100 dark:bg-[#1A1D2C] rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">No projects yet</p>
            <p className="text-sm text-slate-400 dark:text-slate-600 mb-5">Add your first project to the portfolio.</p>
            <Link
              href="/cms/projects/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3e91ce] text-white rounded-lg text-sm font-medium hover:bg-[#2d7ab8] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Project
            </Link>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center px-6">
            <p className="text-sm text-slate-400 dark:text-slate-600">No projects match your search.</p>
            <button onClick={() => { setSearch(''); setStatus('All') }} className="text-xs text-[#3e91ce] dark:text-[#60AFDF] hover:underline mt-2">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-slate-100 dark:border-[#1A1D2C] bg-slate-50 dark:bg-[#0F1219]">
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider">Project</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider w-28">Status</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider hidden md:table-cell">Appears On</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider hidden lg:table-cell w-32">Updated</th>
                  <th className="px-5 py-3.5 w-8" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-[#161926]">
                {filtered.map((project) => {
                  const appearances = getProjectPageAppearances(project.sector, project.featured)
                  return (
                    <tr
                      key={project.id}
                      onClick={() => router.push(`/cms/projects/edit?id=${project.id}`)}
                      className="cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors group"
                    >
                      {/* Project info + hero thumbnail */}
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          {/* Hero image thumbnail */}
                          <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#1A1D2C] overflow-hidden flex-shrink-0">
                            {project.heroImageUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={project.heroImageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-slate-300 dark:text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors leading-snug truncate max-w-xs">{project.title}</p>
                            <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">{project.location}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-3.5">
                        <StatusPill status={project.status} />
                      </td>

                      <td className="px-5 py-3.5 hidden md:table-cell">
                        {appearances.length === 0 ? (
                          <span className="text-[11px] text-slate-300 dark:text-slate-700 italic">Not set</span>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {appearances.slice(0, 3).map((a) => (
                              <AppearsBadge key={a.path} type={a.type} />
                            ))}
                            {appearances.length > 3 && (
                              <span className="text-[10px] text-slate-400 dark:text-slate-600">+{appearances.length - 3}</span>
                            )}
                          </div>
                        )}
                      </td>

                      <td className="px-5 py-3.5 hidden lg:table-cell">
                        <span className="text-[12px] text-slate-400 dark:text-slate-600 tabular-nums">{formatDate(project.updatedAt)}</span>
                      </td>

                      <td className="px-5 py-3.5 text-right">
                        <svg className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer */}
      {!loading && filtered.length > 0 && (
        <p className="text-xs text-slate-400 dark:text-slate-600 text-center">
          Showing {filtered.length} of {projects.length} project{projects.length !== 1 ? 's' : ''} · Click any row to edit
        </p>
      )}
    </div>
  )
}
