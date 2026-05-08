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
    <div className="cms-app cms-app-bg min-h-screen">

      <CmsSidebar
        email={email}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Content area */}
      <div className="lg:pl-[240px] flex flex-col min-h-screen">

        {/* Mobile topbar */}
        <header className="lg:hidden sticky top-0 z-30 h-14 flex items-center px-4 gap-3 cms-topbar-glass">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#536070] dark:text-[#8B9CB8] hover:bg-black/[0.06] dark:hover:bg-white/[0.07] transition-colors"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/cms/dashboard" className="flex items-center gap-2 flex-1 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#3E91CE] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#3E91CE]/30">
              <svg className="w-[14px] h-[14px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#0E1525] dark:text-[#ECF0F9] truncate tracking-tight">
              PC Water Studio
            </span>
          </Link>
        </header>

        {/* Page */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-7 lg:py-8 max-w-[1400px] w-full mx-auto">
          {children}
        </main>

      </div>
    </div>
  )
}
