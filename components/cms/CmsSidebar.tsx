'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import ThemeToggle from '@/components/cms/ThemeToggle'

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const IC = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg className="w-[16px] h-[16px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={d} />
    {d2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={d2} />}
  </svg>
)

const icons = {
  dashboard: <IC d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 14a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zM14 5a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />,
  articles:  <IC d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  projects:  <IC d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />,
  leads:     <IC d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  media:     <IC d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  settings:  <IC d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" d2="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
  external:  <IC d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />,
  logout:    <IC d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />,
  close:     <IC d="M6 18L18 6M6 6l12 12" />,
  menu:      <IC d="M4 6h16M4 12h16M4 18h16" />,
}

// ── Nav structure ─────────────────────────────────────────────────────────────

const NAV = [
  {
    group: 'Content',
    items: [
      { href: '/cms/dashboard', label: 'Dashboard', icon: icons.dashboard },
      { href: '/cms/posts',     label: 'Articles',  icon: icons.articles  },
      { href: '/cms/projects',  label: 'Projects',  icon: icons.projects  },
    ],
  },
  {
    group: 'Data',
    items: [
      { href: '/cms/leads', label: 'Leads',         icon: icons.leads },
      { href: '/cms/media', label: 'Media Library', icon: icons.media },
    ],
  },
  {
    group: 'System',
    items: [
      { href: '/cms/settings', label: 'Settings', icon: icons.settings },
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

  const initials = email ? email.split('@')[0].slice(0, 2).toUpperCase() : 'CM'

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-[240px] flex flex-col
        bg-white dark:bg-[#0D1020]
        border-r border-[#DDE2EE] dark:border-[#1A1E2E]
        transition-transform duration-200 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
    >
      {/* ── Brand ──────────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 px-5 h-[68px] border-b border-[#DDE2EE] dark:border-[#1A1E2E] flex-shrink-0">
        <div className="w-9 h-9 rounded-xl bg-[#3E91CE] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#3E91CE]/20 ring-1 ring-[#3E91CE]/25">
          <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-bold text-[#0E1525] dark:text-[#ECF0F9] leading-none tracking-tight">PC Water</p>
          <p className="text-[9px] text-[#99AABF] dark:text-[#4A5670] font-semibold uppercase tracking-[0.18em] mt-[5px]">Studio</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close sidebar"
          className="lg:hidden w-7 h-7 flex items-center justify-center rounded-lg text-[#99AABF] dark:text-[#4A5670] hover:bg-[#EFF2F8] dark:hover:bg-[#111622] hover:text-[#0E1525] dark:hover:text-[#ECF0F9] transition-colors"
        >
          {icons.close}
        </button>
      </div>

      {/* ── Nav ────────────────────────────────────────────────────────────── */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-1">
        {NAV.map((section, si) => (
          <div key={section.group}>
            {/* Group separator between sections (not before first) */}
            {si > 0 && (
              <div className="mx-5 my-2 border-t border-[#EFF2F8] dark:border-[#1A1E2E]" />
            )}

            {/* Group label */}
            <p className="px-5 pt-1 pb-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#99AABF] dark:text-[#4A5670]">
              {section.group}
            </p>

            {/* Items */}
            <div className="px-2 space-y-[1px]">
              {section.items.map(({ href, label, icon }) => {
                const active = pathname === href || pathname.startsWith(href + '/')
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className={`
                      group flex items-center gap-3 px-3 py-[9px] rounded-lg text-[13px] font-medium
                      border-l-[2px] transition-all duration-150
                      ${active
                        ? 'border-[#3E91CE] bg-[#EAF4FF] dark:bg-[#0C1D36] text-[#2D7AB8] dark:text-[#60AFDF]'
                        : 'border-transparent text-[#536070] dark:text-[#8B9CB8] hover:text-[#0E1525] dark:hover:text-[#ECF0F9] hover:bg-[#EFF2F8] dark:hover:bg-[#111622]'
                      }
                    `}
                  >
                    <span className={`transition-colors ${
                      active
                        ? 'text-[#3E91CE] dark:text-[#60AFDF]'
                        : 'text-[#99AABF] dark:text-[#4A5670] group-hover:text-[#536070] dark:group-hover:text-[#8B9CB8]'
                    }`}>
                      {icon}
                    </span>
                    <span className="flex-1 leading-none">{label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3E91CE] dark:bg-[#60AFDF] flex-shrink-0" />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* ── Bottom ─────────────────────────────────────────────────────────── */}
      <div className="flex-shrink-0 border-t border-[#EFF2F8] dark:border-[#1A1E2E]">

        {/* View site */}
        <div className="px-4 pt-3 pb-1">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium text-[#99AABF] dark:text-[#4A5670] hover:text-[#536070] dark:hover:text-[#8B9CB8] hover:bg-[#EFF2F8] dark:hover:bg-[#111622] transition-colors"
          >
            {icons.external}
            View live site
          </Link>
        </div>

        {/* User row */}
        <div className="px-4 pb-4 pt-1 flex items-center gap-2.5">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3E91CE] to-[#1E6BAA] flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
              {initials}
            </div>
            <span className="absolute -bottom-px -right-px w-[9px] h-[9px] bg-emerald-500 border-[1.5px] border-white dark:border-[#0D1020] rounded-full" />
          </div>

          {/* Email */}
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] truncate leading-none">{email}</p>
            <p className="text-[10px] text-[#99AABF] dark:text-[#4A5670] mt-[3px]">Administrator</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-0.5">
            <ThemeToggle />
            <button
              onClick={handleLogout}
              title="Sign out"
              className="w-7 h-7 flex items-center justify-center rounded-lg text-[#99AABF] dark:text-[#4A5670] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
            >
              {icons.logout}
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
