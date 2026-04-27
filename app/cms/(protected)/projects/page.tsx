'use client'

import { useEffect, useState } from 'react'
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

export default function CmsProjectsPage() {
  const router = useRouter()
  const [projects, setProjects] = useState<CmsProject[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    fetchAdminProjects().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Projects</h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
            {loading ? 'Loading…' : `${projects.length} project${projects.length !== 1 ? 's' : ''} total`}
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
                {projects.map((project) => {
                  const appearances = getProjectPageAppearances(project.sector, project.featured)
                  return (
                    <tr
                      key={project.id}
                      onClick={() => router.push(`/cms/projects/edit?id=${project.id}`)}
                      className="cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors group"
                    >
                      <td className="px-5 py-4">
                        <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors leading-snug">{project.title}</p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">{project.location}</p>
                      </td>
                      <td className="px-5 py-4">
                        <StatusPill status={project.status} />
                      </td>
                      <td className="px-5 py-4 hidden md:table-cell">
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
                      <td className="px-5 py-4 hidden lg:table-cell">
                        <span className="text-[12px] text-slate-400 dark:text-slate-600 tabular-nums">{formatDate(project.updatedAt)}</span>
                      </td>
                      <td className="px-5 py-4 text-right">
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
      {!loading && projects.length > 0 && (
        <p className="text-xs text-slate-400 dark:text-slate-600 text-center">
          {projects.filter(p => p.status === 'published').length} published · {projects.filter(p => p.featured).length} featured · Click any row to edit
        </p>
      )}
    </div>
  )
}
