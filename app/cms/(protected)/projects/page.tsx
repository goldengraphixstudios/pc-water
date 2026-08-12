'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { fetchAdminProjects } from '@/lib/cms/browser-admin'
import type { CmsProject } from '@/lib/cms/types'
import { formatDate } from '@/lib/cms/utils'
import { getProjectPageAppearances } from '@/lib/cms/page-mappings'

function StatusBadge({ status }: { status: string }) {
  const live = status === 'published'
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-[3px] rounded-full whitespace-nowrap ${
      live
        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${live ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {live ? 'Published' : 'Draft'}
    </span>
  )
}

function AppearsBadge({ type }: { type: 'industry' | 'service' | 'homepage' }) {
  const styles = {
    homepage: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400',
    industry: 'bg-[#EAF4FF] dark:bg-[#0C1D36] text-[#3E91CE] dark:text-[#60AFDF]',
    service:  'bg-black/[0.05] dark:bg-white/[0.06] text-[#536070] dark:text-[#8B9CB8]',
  }
  const labels = { homepage: 'Homepage', industry: 'Industry', service: 'Service' }
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${styles[type]}`}>
      {labels[type]}
    </span>
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
    fetchAdminProjects().then((data) => { setProjects(data); setLoading(false) })
  }, [])

  const filtered = useMemo(() => projects.filter((p) => {
    const matchStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Published' && p.status === 'published') ||
      (statusFilter === 'Draft' && p.status === 'draft')
    const q = search.toLowerCase()
    return matchStatus && (!q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.sector.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q))
  }), [projects, search, statusFilter])

  const publishedCount = projects.filter(p => p.status === 'published').length
  const draftCount     = projects.filter(p => p.status === 'draft').length
  const featuredCount  = projects.filter(p => p.featured).length

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.16em] mb-1">Content</p>
          <h1 className="text-[22px] font-black text-[#0E1525] dark:text-[#ECF0F9] tracking-tight leading-tight">Projects</h1>
          <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] mt-1">
            {loading ? 'Loading…' : `${projects.length} total · ${publishedCount} published · ${featuredCount} featured`}
          </p>
        </div>
        <Link
          href="/cms/projects/new"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#3E91CE] text-white text-[13px] font-semibold hover:bg-[#2D7AB8] transition-colors shadow-md shadow-[#3E91CE]/20 flex-shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </Link>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99AABF] dark:text-[#4A5670] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, location or sector…"
            className="w-full pl-9 pr-4 h-9 rounded-lg border border-black/[0.08] dark:border-white/[0.07] bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm text-[13px] text-[#0E1525] dark:text-[#ECF0F9] placeholder-[#99AABF] dark:placeholder-[#4A5670] focus:outline-none focus:border-[#3E91CE] transition-colors"
          />
        </div>
        <div className="flex gap-1.5">
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3.5 h-9 rounded-lg text-[12px] font-semibold transition-all whitespace-nowrap ${
                statusFilter === s
                  ? 'bg-[#3E91CE] text-white shadow-sm'
                  : 'bg-white/80 dark:bg-[#060A14]/70 backdrop-blur-sm border border-black/[0.08] dark:border-white/[0.07] text-[#536070] dark:text-[#8B9CB8] hover:border-[#3E91CE] hover:text-[#3E91CE]'
              }`}
            >
              {s}
              {s !== 'All' && <span className="ml-1.5 opacity-60 text-[11px]">{s === 'Published' ? publishedCount : draftCount}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="cms-card">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-14 sm:py-20">
            <svg className="w-5 h-5 animate-spin text-[#3E91CE]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">Loading projects…</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center py-14 sm:py-20 px-6 text-center">
            <div className="w-14 h-14 bg-black/[0.04] dark:bg-white/[0.04] rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#99AABF] dark:text-[#4A5670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <p className="text-[14px] font-bold text-[#0E1525] dark:text-[#ECF0F9] mb-1">No projects yet</p>
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670] mb-5">Add your first project to the portfolio.</p>
            <Link href="/cms/projects/new" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3E91CE] text-white rounded-lg text-[13px] font-semibold hover:bg-[#2D7AB8] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Project
            </Link>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center py-12 sm:py-16 text-center px-6">
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">No projects match your search.</p>
            <button onClick={() => { setSearch(''); setStatus('All') }} className="text-[12px] text-[#3E91CE] dark:text-[#60AFDF] hover:underline mt-2 font-medium">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02]">
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em]">Project</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] w-28">Status</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden md:table-cell">Appears On</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden lg:table-cell w-28">Updated</th>
                  <th className="px-4 py-3 w-8" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((project) => {
                  const appearances = getProjectPageAppearances(project.sector, project.featured)
                  return (
                    <tr
                      key={project.id}
                      onClick={() => router.push(`/cms/projects/edit?id=${project.id}`)}
                      className="cursor-pointer border-b border-black/[0.05] dark:border-white/[0.04] last:border-0 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors group"
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-black/[0.05] dark:bg-white/[0.05] overflow-hidden flex-shrink-0">
                            {project.heroImageUrl
                              // eslint-disable-next-line @next/next/no-img-element
                              ? <img src={project.heroImageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                              : <div className="w-full h-full flex items-center justify-center">
                                  <svg className="w-4 h-4 text-[#99AABF] dark:text-[#4A5670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                            }
                          </div>
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] group-hover:text-[#3E91CE] dark:group-hover:text-[#60AFDF] transition-colors truncate max-w-xs leading-snug">{project.title}</p>
                            <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] mt-0.5">{project.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5"><StatusBadge status={project.status} /></td>
                      <td className="px-5 py-3.5 hidden md:table-cell">
                        {appearances.length === 0 ? (
                          <span className="text-[11px] text-[#C8D2E0] dark:text-[#2A3550] italic">—</span>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {appearances.slice(0, 3).map((a) => <AppearsBadge key={a.path} type={a.type} />)}
                            {appearances.length > 3 && <span className="text-[11px] text-[#99AABF] dark:text-[#4A5670]">+{appearances.length - 3}</span>}
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-3.5 hidden lg:table-cell">
                        <span className="text-[12px] text-[#99AABF] dark:text-[#4A5670] font-mono">{formatDate(project.updatedAt)}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <svg className="w-4 h-4 text-[#C8D2E0] dark:text-[#2A3550] group-hover:text-[#3E91CE] dark:group-hover:text-[#60AFDF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {!loading && filtered.length > 0 && (
        <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] text-center">
          Showing {filtered.length} of {projects.length} project{projects.length !== 1 ? 's' : ''} · Click any row to edit
        </p>
      )}
    </div>
  )
}
