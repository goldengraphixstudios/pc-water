'use client'

import { useState } from 'react'
import Link from 'next/link'
import CmsSidebar from '@/components/cms/CmsSidebar'

export default function CmsShell({
  children,
  email,
}: {
  children: React.ReactNode
  email: string
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F0F3F9] dark:bg-[#0C0E16]">

      {/* Sidebar */}
      <CmsSidebar
        email={email}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content — offset by sidebar on desktop */}
      <div className="lg:pl-[220px] flex flex-col min-h-screen">

        {/* Mobile topbar */}
        <div className="lg:hidden sticky top-0 z-30 bg-white/95 dark:bg-[#13161F]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#1E2235] h-14 flex items-center px-4 gap-3 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1E2235] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/cms/dashboard" className="flex items-center gap-2 flex-1 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#3e91ce] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#3e91ce]/30">
              <svg className="w-[15px] h-[15px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-slate-900 dark:text-slate-100 truncate">PC Water Studio</span>
          </Link>
        </div>

        {/* Page content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {children}
        </main>

      </div>
    </div>
  )
}
