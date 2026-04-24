'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'
import ThemeToggle from '@/components/cms/ThemeToggle'

const navItems = [
  { href: '/cms/dashboard', label: 'Dashboard' },
  { href: '/cms/posts',     label: 'Articles'  },
  { href: '/cms/projects',  label: 'Projects'  },
]

export default function CmsSidebar({ email }: { email: string }) {
  const pathname = usePathname()
  const router   = useRouter()

  async function handleLogout() {
    const supabase = createSupabaseBrowserClient()
    if (supabase) await supabase.auth.signOut()
    router.push('/cms/login')
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#13161F] border-b border-slate-200 dark:border-[#1E2235]">
      <div className="max-w-6xl mx-auto px-5 sm:px-7 h-[52px] flex items-center gap-4">

        {/* Brand */}
        <Link href="/cms/dashboard" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-7 h-7 rounded-lg bg-[#3e91ce] flex items-center justify-center shadow-sm shadow-[#3e91ce]/30 group-hover:bg-[#2d7ab8] transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="hidden sm:block leading-none">
            <p className="text-[13px] font-bold text-slate-900 dark:text-slate-100">PC Water</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-600 font-medium mt-0.5">Studio</p>
          </div>
        </Link>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 dark:bg-[#252A3D] hidden sm:block flex-shrink-0" />

        {/* Nav links */}
        <nav className="flex items-center gap-0.5 flex-1 min-w-0 overflow-x-auto scrollbar-none">
          {navItems.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium whitespace-nowrap transition-all duration-150 ${
                  active
                    ? 'bg-[#EAF4FF] dark:bg-[#162338] text-[#3e91ce] dark:text-[#60AFDF]'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1E2235]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1.5 flex-shrink-0">

          {/* View site */}
          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1E2235] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="hidden md:block">Site</span>
          </Link>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Divider */}
          <div className="h-5 w-px bg-slate-200 dark:bg-[#252A3D] mx-0.5" />

          {/* User avatar + email */}
          <div className="flex items-center gap-2 pl-0.5">
            <div className="w-7 h-7 rounded-full bg-[#3e91ce]/15 dark:bg-[#3e91ce]/20 text-[#3e91ce] dark:text-[#60AFDF] flex items-center justify-center text-[11px] font-bold flex-shrink-0">
              {email.charAt(0).toUpperCase()}
            </div>
            <span className="text-[12px] text-slate-600 dark:text-slate-400 hidden lg:block max-w-[140px] truncate">{email}</span>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            title="Sign out"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 dark:text-slate-600 hover:text-red-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  )
}
