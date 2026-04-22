'use client'

import { usePathname } from 'next/navigation'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCmsRoute = pathname.startsWith('/cms')

  if (isCmsRoute) {
    return <main className="min-h-screen bg-[#f4f6f8]">{children}</main>
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  )
}
