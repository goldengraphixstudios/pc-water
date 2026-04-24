'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchAdminPosts, fetchAdminProjects } from '@/lib/cms/browser-admin'
import type { CmsPost, CmsProject } from '@/lib/cms/types'
import { formatDate } from '@/lib/cms/utils'

function StatusPill({ status }: { status: string }) {
  const published = status === 'published'
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
      published
        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
        : 'bg-amber-50  dark:bg-amber-950/50  text-amber-600  dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${published ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {published ? 'Published' : 'Draft'}
    </span>
  )
}

export default function CmsDashboardPage() {
  const [posts, setPosts]       = useState<CmsPost[]>([])
  const [projects, setProjects] = useState<CmsProject[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    Promise.all([fetchAdminPosts(), fetchAdminProjects()]).then(([p, proj]) => {
      setPosts(p)
      setProjects(proj)
      setLoading(false)
    })
  }, [])

  const publishedPosts    = posts.filter(p => p.status === 'published').length
  const publishedProjects = projects.filter(p => p.status === 'published').length
  const featuredProjects  = projects.filter(p => p.featured).length

  const metrics = [
    { label: 'Total Articles',     value: posts.length,      sub: `${publishedPosts} published`,    accent: 'bg-[#3e91ce]',   text: 'text-[#3e91ce] dark:text-[#60AFDF]',    subtle: 'bg-[#EAF4FF] dark:bg-[#162338]' },
    { label: 'Published Articles', value: publishedPosts,    sub: 'live on website',                accent: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', subtle: 'bg-emerald-50 dark:bg-emerald-950/40' },
    { label: 'Total Projects',     value: projects.length,   sub: `${publishedProjects} published`, accent: 'bg-violet-500',  text: 'text-violet-600 dark:text-violet-400',  subtle: 'bg-violet-50 dark:bg-violet-950/40' },
    { label: 'Featured Projects',  value: featuredProjects,  sub: 'shown on homepage',              accent: 'bg-orange-400',  text: 'text-orange-600 dark:text-orange-400',  subtle: 'bg-orange-50 dark:bg-orange-950/40' },
  ]

  return (
    <div className="space-y-6">

      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Dashboard</h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">Overview of your content.</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/cms/posts/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-[#1E2235] bg-white dark:bg-[#13161F] text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:border-[#3e91ce] hover:text-[#3e91ce] dark:hover:border-[#3e91ce] dark:hover:text-[#60AFDF] transition-colors shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Article
          </Link>
          <Link
            href="/cms/projects/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#3e91ce] text-white text-[13px] font-medium hover:bg-[#2d7ab8] transition-colors shadow-sm shadow-[#3e91ce]/20"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Project
          </Link>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] overflow-hidden shadow-sm">
            <div className={`h-[3px] ${m.accent}`} />
            <div className="p-4 pt-4">
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-3 ${m.subtle}`}>
                {loading ? (
                  <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
                ) : (
                  <span className={`text-base font-black ${m.text}`}>{m.value}</span>
                )}
              </div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{m.label}</p>
              <p className="text-xs text-slate-400 dark:text-slate-600 mt-0.5">{m.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent content */}
      <div className="grid gap-4 xl:grid-cols-2">

        {/* Recent articles */}
        <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-[#1A1D2C]">
            <h2 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">Recent Articles</h2>
            <Link href="/cms/posts" className="text-xs text-[#3e91ce] dark:text-[#60AFDF] hover:underline">
              Manage all →
            </Link>
          </div>
          {loading ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm text-slate-400 dark:text-slate-600">Loading…</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm text-slate-400 dark:text-slate-600">No articles yet.</p>
              <Link href="/cms/posts/new" className="text-xs text-[#3e91ce] dark:text-[#60AFDF] hover:underline mt-2 inline-block">Create one →</Link>
            </div>
          ) : (
            <div>
              {posts.slice(0, 5).map((post) => (
                <Link
                  key={post.id}
                  href={`/cms/posts/edit?id=${post.id}`}
                  className="flex items-center gap-3 px-5 py-3 border-b border-slate-50 dark:border-[#161926] last:border-0 hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors">{post.title}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">{formatDate(post.updatedAt)}</p>
                  </div>
                  <StatusPill status={post.status} />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent projects */}
        <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-[#1A1D2C]">
            <h2 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">Recent Projects</h2>
            <Link href="/cms/projects" className="text-xs text-[#3e91ce] dark:text-[#60AFDF] hover:underline">
              Manage all →
            </Link>
          </div>
          {loading ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm text-slate-400 dark:text-slate-600">Loading…</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm text-slate-400 dark:text-slate-600">No projects yet.</p>
              <Link href="/cms/projects/new" className="text-xs text-[#3e91ce] dark:text-[#60AFDF] hover:underline mt-2 inline-block">Create one →</Link>
            </div>
          ) : (
            <div>
              {projects.slice(0, 5).map((project) => (
                <Link
                  key={project.id}
                  href={`/cms/projects/edit?id=${project.id}`}
                  className="flex items-center gap-3 px-5 py-3 border-b border-slate-50 dark:border-[#161926] last:border-0 hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors">{project.title}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">{project.location}</p>
                  </div>
                  <StatusPill status={project.status} />
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
