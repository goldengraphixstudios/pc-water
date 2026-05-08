'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import ThemeToggle from '@/components/cms/ThemeToggle'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconDashboard() {
  return (
    <svg className="w-[17px] h-[17px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 14a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zM14 5a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
    </svg>
  )
}

function IconArticles() {
  return (
    <svg className="w-[17px] h-[17px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function IconProjects() {
  return (
    <svg className="w-[17px] h-[17px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  )
}

function IconLeads() {
  return (
    <svg className="w-[17px] h-[17px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function IconMedia() {
  return (
    <svg className="w-[17px] h-[17px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function IconSettings() {
  return (
    <svg className="w-[17px] h-[17px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconExternalLink() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function IconLogout() {
  return (
    <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  )
}

// ── Nav config ────────────────────────────────────────────────────────────────

const navGroups = [
  {
    label: 'Content',
    items: [
      { href: '/cms/dashboard', label: 'Dashboard', icon: <IconDashboard /> },
      { href: '/cms/posts',     label: 'Articles',  icon: <IconArticles /> },
      { href: '/cms/projects',  label: 'Projects',  icon: <IconProjects /> },
    ],
  },
  {
    label: 'Data',
    items: [
      { href: '/cms/leads', label: 'Leads',         icon: <IconLeads /> },
      { href: '/cms/media', label: 'Media Library', icon: <IconMedia /> },
    ],
  },
  {
    label: 'System',
    items: [
      { href: '/cms/settings', label: 'Settings', icon: <IconSettings /> },
    ],
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function CmsSidebar({
  email,
  isOpen,
  onClose,
}: {
  email: string
  isOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()
  const router   = useRouter()

  async function handleLogout() {
    const supabase = createSupabaseBrowserClient()
    if (supabase) await supabase.auth.signOut()
    router.push('/cms/login')
  }

  const initials = email
    ? email.split('@')[0].slice(0, 2).toUpperCase()
    : 'CM'

  return (
    <>
      {/* ── Sidebar panel ── */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-[220px] flex flex-col
          bg-white dark:bg-[#13161F]
          border-r border-slate-200 dark:border-[#1E2235]
          transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-4 h-[64px] border-b border-slate-200 dark:border-[#1E2235] flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#3e91ce] flex items-center justify-center shadow-md shadow-[#3e91ce]/25 flex-shrink-0 ring-1 ring-[#3e91ce]/20">
            <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="leading-none min-w-0 flex-1">
            <p className="text-[13.5px] font-extrabold text-slate-900 dark:text-slate-100 leading-none tracking-tight">PC Water</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-600 font-semibold mt-1 uppercase tracking-widest">Studio</p>
          </div>
          {/* Close — mobile only */}
          <button
            onClick={onClose}
            className="ml-auto w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1E2235] transition-colors lg:hidden flex-shrink-0"
            aria-label="Close sidebar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest px-2.5 mb-1.5">
                {group.label}
              </p>
              <div className="space-y-0.5">
                {group.items.map(({ href, label, icon }) => {
                  const active = pathname === href || pathname.startsWith(href + '/')
                  return (
                    <div key={href} className="relative">
                      {/* Left accent bar */}
                      {active && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-[#3e91ce] rounded-r-full" />
                      )}
                      <Link
                        href={href}
                        onClick={onClose}
                        className={`
                          flex items-center gap-3 pl-3 pr-2.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-150
                          ${active
                            ? 'bg-[#EAF4FF] dark:bg-[#162338] text-[#3e91ce] dark:text-[#60AFDF]'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-[#1E2235]'
                          }
                        `}
                      >
                        <span className={active ? 'text-[#3e91ce] dark:text-[#60AFDF]' : 'text-slate-400 dark:text-slate-600'}>
                          {icon}
                        </span>
                        <span className="flex-1 min-w-0 truncate">{label}</span>
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3e91ce] flex-shrink-0" />
                        )}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-slate-100 dark:border-[#1A1D2C] flex-shrink-0">

          {/* View site */}
          <div className="px-3 pt-3 pb-1">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] font-medium text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1E2235] transition-colors"
            >
              <IconExternalLink />
              View Live Site
            </Link>
          </div>

          {/* User row */}
          <div className="px-3 pb-3.5 flex items-center gap-2">
            {/* Avatar with online indicator */}
            <div className="relative flex-shrink-0">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3e91ce] to-[#2d7ab8] text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                {initials}
              </div>
              <span className="absolute -bottom-px -right-px w-2 h-2 bg-emerald-500 border-[1.5px] border-white dark:border-[#13161F] rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium truncate">{email}</p>
              <p className="text-[10px] text-slate-400 dark:text-slate-600">Administrator</p>
            </div>
            <div className="flex items-center gap-0.5 flex-shrink-0">
              <ThemeToggle />
              <button
                onClick={handleLogout}
                title="Sign out"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 dark:text-slate-600 hover:text-red-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              >
                <IconLogout />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
