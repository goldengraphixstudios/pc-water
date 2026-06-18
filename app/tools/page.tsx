import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: 'Free Water Infrastructure Tools',
  description:
    'Free online tools: check your water tank compliance risk, and decide whether to repair, reline, or replace an aging tank. Built for asset owners.',
  keywords: [
    'water tank tools',
    'tank compliance checker',
    'repair reline replace water tank',
    'water tank risk assessment',
    'water tank decision tool',
  ],
  alternates: { canonical: '/tools' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Free Water Infrastructure Tools',
    description: 'Free online tools: check your water tank compliance risk and decide whether to repair, reline, or replace an aging tank. Built for asset owners.',
    url: 'https://pcwater.com.au/tools',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image' as const, images: ['/hero.png'] },
}

const tools = [
  {
    title: 'Tank Compliance Checker',
    href: '/tools/tank-compliance-checker',
    blurb:
      'Answer a few questions about your tank and get a fast indication of likely compliance risk — from low risk through to urgent review recommended — plus your recommended next step.',
    cta: 'Check Compliance Risk',
    points: ['Tank type, age & inspection history', 'AS2304 / AS1851 / AS4020 context', 'Instant risk indication'],
  },
  {
    title: 'Repair vs Reline vs Replace',
    href: '/tools/repair-reline-replace',
    blurb:
      'For aging or deteriorating tanks: find out whether the practical path is targeted repair, RPVC relining, full replacement, or an inspection first.',
    cta: 'Get My Result',
    points: ['Structural & corrosion condition', 'Liner / coating assessment', 'Clear recommended path'],
  },
]

export default function ToolsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Tools', url: `${siteUrl}/tools` },
        ]}
      />

      <section className="relative pt-40 pb-24 overflow-hidden bg-[#0d1b2a]">
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3e91ce]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Free Tools</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Water Tank Tools</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Practical, no-cost tools to help you understand the condition and compliance position of your water
            tank assets — and decide what to do next. Built on the same engineering experience behind our
            inspection, relining, and compliance work.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((t) => (
            <div key={t.href} className="rounded-2xl border border-gray-200 p-8 flex flex-col hover:border-[#3e91ce] transition-colors">
              <h2 className="text-2xl font-black text-[#30505b] mb-3">{t.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{t.blurb}</p>
              <ul className="space-y-2 mb-6">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[#30505b]">
                    <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0 mt-2" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#2a72ad] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#246397] transition-colors"
              >
                {t.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="PREFER TO TALK TO A SPECIALIST?"
        subheading="Skip the tools and tell us about your tank. We’ll point you to the right next step."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  )
}
