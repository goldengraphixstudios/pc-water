'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchAdminPosts, fetchAdminProjects } from '@/lib/cms/browser-admin'
import { fetchResourceLeads } from '@/lib/supabase/resources'
import type { CmsPost, CmsProject } from '@/lib/cms/types'
import type { ResourceLead } from '@/lib/supabase/resources'
import { formatDate } from '@/lib/cms/utils'

// ── Helpers ───────────────────────────────────────────────────────────────────

function greeting() {
  const h = new Date().getHours()
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
}

function todayLabel() {
  return new Date().toLocaleDateString('en-AU', {
    weekday: 'long', day: 'numeric', month: 'long',
  })
}

// ── Shared atoms ──────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const live = status === 'published'
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-[3px] rounded-full whitespace-nowrap ${
      live
        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${live ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {live ? 'Published' : 'Draft'}
    </span>
  )
}

// ── Metric card ───────────────────────────────────────────────────────────────

type Metric = {
  label: string
  value: number | string
  sub: string
  borderColor: string
  iconBg: string
  iconColor: string
  href: string
  icon: React.ReactNode
}

function MetricCard({ m, loading }: { m: Metric; loading: boolean }) {
  return (
    <Link href={m.href} className="cms-stat-card group block">
      {/* Top accent bar */}
      <div className={`h-[3px] ${m.borderColor}`} />
      <div className="flex gap-4 p-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${m.iconBg}`}>
          <span className={m.iconColor}>{m.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-wider mb-1.5">{m.label}</p>
          {loading ? (
            <div className="h-7 w-12 rounded-md bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
          ) : (
            <p className={`text-[26px] font-black leading-none tracking-tight ${m.iconColor}`}>{m.value}</p>
          )}
          <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] mt-1.5 truncate">{m.sub}</p>
        </div>
      </div>
    </Link>
  )
}

// ── Quick action config ───────────────────────────────────────────────────────

const QUICK_ACTIONS = [
  {
    href: '/cms/posts/new',
    label: 'Write new article',
    bg: 'bg-[#EAF4FF] dark:bg-[#0C1D36]',
    color: 'text-[#3E91CE] dark:text-[#60AFDF]',
    icon: (
      <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    href: '/cms/projects/new',
    label: 'Add new project',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    color: 'text-violet-600 dark:text-violet-400',
    icon: (
      <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    href: '/cms/media',
    label: 'Browse media library',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    color: 'text-emerald-600 dark:text-emerald-400',
    icon: (
      <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/cms/leads',
    label: 'View resource leads',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    color: 'text-orange-600 dark:text-orange-400',
    icon: (
      <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/cms/settings',
    label: 'Manage CMS access',
    bg: 'bg-black/[0.04] dark:bg-white/[0.05]',
    color: 'text-[#536070] dark:text-[#8B9CB8]',
    icon: (
      <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    href: '/',
    label: 'View live site',
    bg: 'bg-[#EAF4FF] dark:bg-[#0C1D36]',
    color: 'text-[#3E91CE] dark:text-[#60AFDF]',
    external: true,
    icon: (
      <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
  },
]

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

// ── Main page ─────────────────────────────────────────────────────────────────

export default function CmsDashboardPage() {
  const [posts, setPosts]       = useState<CmsPost[]>([])
  const [projects, setProjects] = useState<CmsProject[]>([])
  const [leads, setLeads]       = useState<ResourceLead[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    Promise.all([fetchAdminPosts(), fetchAdminProjects(), fetchResourceLeads()])
      .then(([p, proj, l]) => { setPosts(p); setProjects(proj); setLeads(l); setLoading(false) })
  }, [])

  const publishedPosts    = posts.filter(p => p.status === 'published').length
  const publishedProjects = projects.filter(p => p.status === 'published').length
  const featuredProjects  = projects.filter(p => p.featured).length
  const thisWeek          = leads.filter(l => new Date(l.downloaded_at) >= new Date(Date.now() - 7 * 86400000)).length

  const metrics: Metric[] = [
    {
      label: 'Total Articles', value: posts.length, sub: `${publishedPosts} published`,
      borderColor: 'bg-[#3E91CE]', iconBg: 'bg-[#EAF4FF] dark:bg-[#0C1D36]', iconColor: 'text-[#3E91CE] dark:text-[#60AFDF]',
      href: '/cms/posts',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    },
    {
      label: 'Total Projects', value: projects.length, sub: `${publishedProjects} published · ${featuredProjects} featured`,
      borderColor: 'bg-violet-500', iconBg: 'bg-violet-50 dark:bg-violet-950/30', iconColor: 'text-violet-600 dark:text-violet-400',
      href: '/cms/projects',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
    },
    {
      label: 'Resource Leads', value: leads.length, sub: `${thisWeek} this week`,
      borderColor: 'bg-emerald-500', iconBg: 'bg-emerald-50 dark:bg-emerald-950/30', iconColor: 'text-emerald-600 dark:text-emerald-400',
      href: '/cms/leads',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
      label: 'Featured Projects', value: featuredProjects, sub: 'shown on homepage',
      borderColor: 'bg-orange-400', iconBg: 'bg-orange-50 dark:bg-orange-950/30', iconColor: 'text-orange-600 dark:text-orange-400',
      href: '/cms/projects',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    },
  ]

  // Activity feed
  const activity: ActivityItem[] = [
    ...posts.map((p): ActivityItem => ({
      id: p.id, type: 'post', title: p.title,
      sub: p.tags.map(t => t.name).join(', ') || 'No tags',
      href: `/cms/posts/edit?id=${p.id}`, status: p.status, date: p.updatedAt,
    })),
    ...projects.map((p): ActivityItem => ({
      id: p.id, type: 'project', title: p.title,
      sub: p.location,
      href: `/cms/projects/edit?id=${p.id}`, status: p.status, date: p.updatedAt,
    })),
    ...leads.slice(0, 4).map((l): ActivityItem => ({
      id: l.id, type: 'lead', title: l.email,
      sub: l.resource_title ?? l.resource_slug,
      href: '/cms/leads', date: l.downloaded_at,
    })),
  ]
    .sort((a, b) => (!a.date ? 1 : !b.date ? -1 : new Date(b.date).getTime() - new Date(a.date).getTime()))
    .slice(0, 8)

  // Health checks
  const healthIssues = [
    posts.filter(p => p.tags.length === 0).length > 0   && `${posts.filter(p => p.tags.length === 0).length} article${posts.filter(p => p.tags.length === 0).length !== 1 ? 's' : ''} without tags`,
    posts.filter(p => !p.coverImageUrl).length > 0       && `${posts.filter(p => !p.coverImageUrl).length} article${posts.filter(p => !p.coverImageUrl).length !== 1 ? 's' : ''} without cover image`,
    projects.filter(p => !p.heroImageUrl).length > 0     && `${projects.filter(p => !p.heroImageUrl).length} project${projects.filter(p => !p.heroImageUrl).length !== 1 ? 's' : ''} without hero image`,
    projects.filter(p => !p.seoDescription).length > 0   && `${projects.filter(p => !p.seoDescription).length} project${projects.filter(p => !p.seoDescription).length !== 1 ? 's' : ''} without SEO description`,
  ].filter(Boolean) as string[]

  const typeStyle = {
    post:    { bg: 'bg-[#EAF4FF] dark:bg-[#0C1D36]', text: 'text-[#3E91CE] dark:text-[#60AFDF]' },
    project: { bg: 'bg-violet-50 dark:bg-violet-950/30', text: 'text-violet-600 dark:text-violet-400' },
    lead:    { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-600 dark:text-emerald-400' },
  }

  return (
    <div className="space-y-6">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.16em] mb-1">
            {todayLabel()}
          </p>
          <h1 className="text-[22px] font-black text-[#0E1525] dark:text-[#ECF0F9] tracking-tight leading-tight">
            {greeting()}
          </h1>
          <p className="text-[13px] text-[#536070] dark:text-[#8B9CB8] mt-1">
            Here&apos;s an overview of your content and activity.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Link
            href="/cms/posts/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white/80 dark:bg-[#0A1020]/70 backdrop-blur-sm text-[12px] font-semibold text-[#536070] dark:text-[#8B9CB8] hover:border-[#3E91CE] hover:text-[#3E91CE] dark:hover:text-[#60AFDF] transition-all shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Article
          </Link>
          <Link
            href="/cms/projects/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#3E91CE] text-white text-[12px] font-semibold hover:bg-[#2D7AB8] transition-colors shadow-md shadow-[#3E91CE]/20"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Project
          </Link>
        </div>
      </div>

      {/* ── Metric cards ───────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {metrics.map((m) => <MetricCard key={m.label} m={m} loading={loading} />)}
      </div>

      {/* ── Health warning ─────────────────────────────────────────────────── */}
      {!loading && healthIssues.length > 0 && (
        <div className="flex items-start gap-3.5 bg-amber-50/80 dark:bg-amber-950/15 border border-amber-200/70 dark:border-amber-900/30 rounded-xl px-5 py-4 backdrop-blur-sm">
          <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-[15px] h-[15px] text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="text-[12px] font-bold text-amber-800 dark:text-amber-300 mb-1.5">Content quality issues</p>
            <ul className="space-y-0.5">
              {healthIssues.map((i) => (
                <li key={i} className="flex items-center gap-1.5 text-[12px] text-amber-700 dark:text-amber-400">
                  <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── Activity + sidebar ─────────────────────────────────────────────── */}
      <div className="grid gap-4 xl:grid-cols-[1fr_260px]">

        {/* Recent activity */}
        <div className="cms-card">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.05]">
            <h2 className="text-[12px] font-bold text-[#0E1525] dark:text-[#ECF0F9] uppercase tracking-wider">Recent Activity</h2>
            <span className="text-[10px] font-medium text-[#99AABF] dark:text-[#4A5670] uppercase tracking-wider">Latest first</span>
          </div>

          {loading ? (
            <div className="flex flex-col items-center gap-2 py-12">
              <svg className="w-5 h-5 animate-spin text-[#3E91CE]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-[12px] text-[#99AABF] dark:text-[#4A5670]">Loading…</p>
            </div>
          ) : activity.length === 0 ? (
            <div className="flex flex-col items-center py-14">
              <div className="w-12 h-12 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#99AABF] dark:text-[#4A5670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] mb-1">No content yet</p>
              <p className="text-[12px] text-[#99AABF] dark:text-[#4A5670]">Create your first article or project</p>
            </div>
          ) : (
            <div className="divide-y divide-black/[0.05] dark:divide-white/[0.04]">
              {activity.map((item) => (
                <Link
                  key={`${item.type}-${item.id}`}
                  href={item.href}
                  className="flex items-center gap-3.5 px-5 py-3.5 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors group"
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${typeStyle[item.type].bg}`}>
                    <span className={typeStyle[item.type].text}>
                      {item.type === 'post' ? (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      ) : item.type === 'project' ? (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                      ) : (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      )}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] truncate group-hover:text-[#3E91CE] dark:group-hover:text-[#60AFDF] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] mt-0.5 truncate">{item.sub}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.status && <StatusBadge status={item.status} />}
                    <span className="text-[11px] text-[#99AABF] dark:text-[#4A5670] font-mono hidden sm:block">
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

          {/* Quick actions */}
          <div className="cms-card">
            <div className="px-4 py-3 border-b border-black/[0.06] dark:border-white/[0.05]">
              <h2 className="text-[11px] font-bold text-[#0E1525] dark:text-[#ECF0F9] uppercase tracking-wider">Jump to</h2>
            </div>
            <div className="p-2">
              {QUICK_ACTIONS.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  target={a.external ? '_blank' : undefined}
                  rel={a.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 px-3 py-[9px] rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.05] transition-colors"
                >
                  <span className={`w-[28px] h-[28px] rounded-lg flex items-center justify-center flex-shrink-0 ${a.bg} ${a.color}`}>
                    {a.icon}
                  </span>
                  <span className="flex-1 text-[12px] font-medium text-[#536070] dark:text-[#8B9CB8] group-hover:text-[#0E1525] dark:group-hover:text-[#ECF0F9] transition-colors leading-none">
                    {a.label}
                  </span>
                  <svg className="w-3 h-3 text-[#C8D2E0] dark:text-[#2A3550] group-hover:text-[#99AABF] dark:group-hover:text-[#4A5670] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={a.external ? 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' : 'M9 5l7 7-7 7'} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Content breakdown */}
          {!loading && (
            <div className="cms-card p-4">
              <h2 className="text-[11px] font-bold text-[#0E1525] dark:text-[#ECF0F9] uppercase tracking-wider mb-4">Breakdown</h2>
              <div className="space-y-3.5">
                {[
                  { label: 'Articles published',  v: publishedPosts,    t: posts.length,    color: 'bg-[#3E91CE]' },
                  { label: 'Projects published',  v: publishedProjects, t: projects.length, color: 'bg-violet-500' },
                  { label: 'Leads this week',     v: thisWeek,          t: leads.length,    color: 'bg-emerald-500' },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] text-[#536070] dark:text-[#8B9CB8]">{row.label}</span>
                      <span className="text-[11px] font-bold font-mono text-[#0E1525] dark:text-[#ECF0F9]">
                        {row.v}<span className="text-[#99AABF] dark:text-[#4A5670] font-normal">/{row.t}</span>
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.color} transition-all duration-700`}
                        style={{ width: row.t ? `${Math.round((row.v / row.t) * 100)}%` : '0%' }}
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
