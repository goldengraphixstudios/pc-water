'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchAdminPosts, fetchAdminProjects } from '@/lib/cms/browser-admin'
import { fetchResourceLeads } from '@/lib/supabase/resources'
import type { CmsPost, CmsProject } from '@/lib/cms/types'
import type { ResourceLead } from '@/lib/supabase/resources'
import { formatDate } from '@/lib/cms/utils'

// ── Utilities ─────────────────────────────────────────────────────────────────

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

function getTodayLabel() {
  return new Date().toLocaleDateString('en-AU', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

// ── Status pill ───────────────────────────────────────────────────────────────

function StatusPill({ status }: { status: string }) {
  const published = status === 'published'
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
      published
        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
        : 'bg-amber-50  dark:bg-amber-950/50  text-amber-600  dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${published ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {published ? 'Published' : 'Draft'}
    </span>
  )
}

// ── Metric card ───────────────────────────────────────────────────────────────

type MetricCard = {
  label: string
  value: number | string
  sub: string
  accent: string
  text: string
  subtle: string
  href: string
  icon: React.ReactNode
}

function MetricCardUI({ m, loading }: { m: MetricCard; loading: boolean }) {
  return (
    <Link
      href={m.href}
      className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-[#252A3D] transition-all group"
    >
      <div className={`h-[3px] ${m.accent}`} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${m.subtle}`}>
            <span className={m.text}>{m.icon}</span>
          </div>
          {loading ? (
            <div className="w-10 h-7 rounded-md bg-slate-100 dark:bg-[#1E2235] animate-pulse" />
          ) : (
            <span className={`text-2xl font-black leading-none ${m.text}`}>{m.value}</span>
          )}
        </div>
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-3 leading-snug">{m.label}</p>
        <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">{m.sub}</p>
      </div>
    </Link>
  )
}

// ── Activity item type ────────────────────────────────────────────────────────

type ActivityItem = {
  id: string
  type: 'post' | 'project' | 'lead'
  title: string
  sub: string
  href: string
  status?: string
  date: string | null
}

// ── Quick actions config ──────────────────────────────────────────────────────

const quickActions = [
  {
    href: '/cms/posts/new',
    label: 'Write new article',
    color: 'text-[#3e91ce] dark:text-[#60AFDF]',
    bg:    'bg-[#EAF4FF] dark:bg-[#162338]',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    href: '/cms/projects/new',
    label: 'Add new project',
    color: 'text-violet-500 dark:text-violet-400',
    bg:    'bg-violet-50 dark:bg-violet-950/40',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    href: '/cms/media',
    label: 'Browse media library',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg:    'bg-emerald-50 dark:bg-emerald-950/40',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/cms/leads',
    label: 'View resource leads',
    color: 'text-orange-600 dark:text-orange-400',
    bg:    'bg-orange-50 dark:bg-orange-950/40',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/cms/settings',
    label: 'Manage CMS access',
    color: 'text-slate-500 dark:text-slate-400',
    bg:    'bg-slate-100 dark:bg-[#1E2235]',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    href: '/',
    label: 'View live site',
    color: 'text-[#3e91ce] dark:text-[#60AFDF]',
    bg:    'bg-[#EAF4FF] dark:bg-[#162338]',
    external: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
]

// ── Main page ─────────────────────────────────────────────────────────────────

export default function CmsDashboardPage() {
  const [posts, setPosts]       = useState<CmsPost[]>([])
  const [projects, setProjects] = useState<CmsProject[]>([])
  const [leads, setLeads]       = useState<ResourceLead[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    Promise.all([
      fetchAdminPosts(),
      fetchAdminProjects(),
      fetchResourceLeads(),
    ]).then(([p, proj, l]) => {
      setPosts(p)
      setProjects(proj)
      setLeads(l)
      setLoading(false)
    })
  }, [])

  const publishedPosts    = posts.filter(p => p.status === 'published').length
  const publishedProjects = projects.filter(p => p.status === 'published').length
  const featuredProjects  = projects.filter(p => p.featured).length
  const thisWeek          = leads.filter(l => new Date(l.downloaded_at) >= new Date(Date.now() - 7 * 86400000)).length

  const metrics: MetricCard[] = [
    {
      label: 'Total Articles',
      value: posts.length,
      sub:   `${publishedPosts} published`,
      accent: 'bg-[#3e91ce]',
      text:   'text-[#3e91ce] dark:text-[#60AFDF]',
      subtle: 'bg-[#EAF4FF] dark:bg-[#162338]',
      href:  '/cms/posts',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      label: 'Total Projects',
      value: projects.length,
      sub:   `${publishedProjects} published · ${featuredProjects} featured`,
      accent: 'bg-violet-500',
      text:   'text-violet-600 dark:text-violet-400',
      subtle: 'bg-violet-50 dark:bg-violet-950/40',
      href:  '/cms/projects',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      label: 'Resource Leads',
      value: leads.length,
      sub:   `${thisWeek} this week`,
      accent: 'bg-emerald-500',
      text:   'text-emerald-600 dark:text-emerald-400',
      subtle: 'bg-emerald-50 dark:bg-emerald-950/40',
      href:  '/cms/leads',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Featured Projects',
      value: featuredProjects,
      sub:   'shown on homepage',
      accent: 'bg-orange-400',
      text:   'text-orange-600 dark:text-orange-400',
      subtle: 'bg-orange-50 dark:bg-orange-950/40',
      href:  '/cms/projects',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ]

  // Combined activity feed
  const activity: ActivityItem[] = [
    ...posts.map((p): ActivityItem => ({
      id: p.id, type: 'post', title: p.title,
      sub: `Article · ${p.tags.map(t => t.name).join(', ') || 'No tags'}`,
      href: `/cms/posts/edit?id=${p.id}`,
      status: p.status,
      date: p.updatedAt,
    })),
    ...projects.map((p): ActivityItem => ({
      id: p.id, type: 'project', title: p.title,
      sub: `Project · ${p.location}`,
      href: `/cms/projects/edit?id=${p.id}`,
      status: p.status,
      date: p.updatedAt,
    })),
    ...leads.slice(0, 5).map((l): ActivityItem => ({
      id: l.id, type: 'lead', title: l.email,
      sub: `Lead · ${l.resource_title ?? l.resource_slug}`,
      href: '/cms/leads',
      date: l.downloaded_at,
    })),
  ]
    .sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 8)

  // Content health checks
  const postsNoTags      = posts.filter(p => p.tags.length === 0)
  const postsNoCover     = posts.filter(p => !p.coverImageUrl)
  const projectsNoHero   = projects.filter(p => !p.heroImageUrl)
  const projectsNoSeo    = projects.filter(p => !p.seoDescription)
  const healthIssues = [
    postsNoTags.length    > 0 && `${postsNoTags.length} article${postsNoTags.length !== 1 ? 's' : ''} without tags`,
    postsNoCover.length   > 0 && `${postsNoCover.length} article${postsNoCover.length !== 1 ? 's' : ''} without cover image`,
    projectsNoHero.length > 0 && `${projectsNoHero.length} project${projectsNoHero.length !== 1 ? 's' : ''} without hero image`,
    projectsNoSeo.length  > 0 && `${projectsNoSeo.length} project${projectsNoSeo.length !== 1 ? 's' : ''} without SEO description`,
  ].filter(Boolean) as string[]

  return (
    <div className="space-y-6">

      {/* ── Page header ───────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">
            {getTodayLabel()}
          </p>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {getGreeting()}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
            Here&apos;s an overview of your content and leads.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Link
            href="/cms/posts/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-[#1E2235] bg-white dark:bg-[#13161F] text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:border-[#3e91ce] hover:text-[#3e91ce] dark:hover:text-[#60AFDF] transition-colors shadow-sm"
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

      {/* ── Metric cards ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {metrics.map((m) => (
          <MetricCardUI key={m.label} m={m} loading={loading} />
        ))}
      </div>

      {/* ── Content health ────────────────────────────────────────────────── */}
      {!loading && healthIssues.length > 0 && (
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-xl px-5 py-4">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-amber-800 dark:text-amber-200 mb-1.5">Content health checks</p>
              <ul className="space-y-1">
                {healthIssues.map((issue) => (
                  <li key={issue} className="text-[12px] text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── Activity + sidebar ────────────────────────────────────────────── */}
      <div className="grid gap-4 xl:grid-cols-[1fr_280px]">

        {/* Recent activity */}
        <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-[#1A1D2C]">
            <h2 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">Recent Activity</h2>
            <span className="text-[11px] text-slate-400 dark:text-slate-600">Latest updates</span>
          </div>

          {loading ? (
            <div className="px-5 py-12 flex flex-col items-center gap-3">
              <svg className="w-5 h-5 animate-spin text-[#3e91ce]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-sm text-slate-400 dark:text-slate-600">Loading…</p>
            </div>
          ) : activity.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <div className="w-12 h-12 bg-slate-100 dark:bg-[#1A1D2C] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-slate-300 dark:text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-600">No content yet.</p>
            </div>
          ) : (
            <div>
              {activity.map((item) => (
                <Link
                  key={`${item.type}-${item.id}`}
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-3 border-b border-slate-50 dark:border-[#161926] last:border-0 hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors group"
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.type === 'post'    ? 'bg-[#EAF4FF] dark:bg-[#162338] text-[#3e91ce] dark:text-[#60AFDF]' :
                    item.type === 'project' ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-500 dark:text-violet-400' :
                    'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 dark:text-emerald-400'
                  }`}>
                    {item.type === 'post' ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ) : item.type === 'project' ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5 truncate">{item.sub}</p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.status && <StatusPill status={item.status} />}
                    <span className="text-[11px] text-slate-400 dark:text-slate-600 tabular-nums hidden sm:block">
                      {formatDate(item.date)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-3">

          {/* Quick Actions */}
          <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b border-slate-100 dark:border-[#1A1D2C]">
              <h2 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">Quick Actions</h2>
            </div>
            <div className="p-2">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors group"
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${action.bg} ${action.color}`}>
                    {action.icon}
                  </span>
                  <span className="flex-1 text-[13px] text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                    {action.label}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700 group-hover:text-slate-400 dark:group-hover:text-slate-500 transition-colors flex-shrink-0"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    {action.external
                      ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    }
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Content breakdown */}
          {!loading && (
            <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm p-4">
              <p className="text-[12px] font-semibold text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wide">
                Content Breakdown
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Articles published',  value: publishedPosts,    total: posts.length,    color: 'bg-[#3e91ce]' },
                  { label: 'Projects published',  value: publishedProjects, total: projects.length, color: 'bg-violet-500' },
                  { label: 'Leads this week',     value: thisWeek,          total: leads.length,    color: 'bg-emerald-500' },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[11px] text-slate-500 dark:text-slate-500">{row.label}</span>
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 tabular-nums">
                        {row.value}
                        <span className="text-slate-400 dark:text-slate-600 font-normal">/{row.total}</span>
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-100 dark:bg-[#1E2235] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.color} transition-all duration-700`}
                        style={{ width: row.total ? `${Math.round((row.value / row.total) * 100)}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
