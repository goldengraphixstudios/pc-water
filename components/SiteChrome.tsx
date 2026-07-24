'use client'

import { usePathname } from 'next/navigation'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import OfferPopup from '@/components/OfferPopup'
import PageTransition from '@/components/PageTransition'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCmsRoute = pathname.startsWith('/cms')
  const isCampaignRoute = pathname.startsWith('/campaigns')

  if (isCmsRoute) {
    return <main className="min-h-screen bg-[#f4f6f8]">{children}</main>
  }

  // Distraction-free conversion layout for paid campaign funnels:
  // no site Header, Footer, PageTransition or OfferPopup. Each campaign page
  // supplies its own compact CampaignHeader. Tawk chat stays available because
  // it is mounted in app/layout.tsx, outside SiteChrome.
  if (isCampaignRoute) {
    return <main className="flex-1">{children}</main>
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <OfferPopup />
    </>
  )
}
