import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import Masthead from '@/components/editorial/Masthead'
import DetailRail from '@/components/editorial/DetailRail'
import DetailFooterBand from '@/components/editorial/DetailFooterBand'
import { SHELL } from '@/lib/shell'

export const metadata: Metadata = {
  title: 'Commercial Fire Water Tank Solutions',
  description:
    'AS2304 fire water storage and AS1851 annual inspection for commercial properties. Pump integration, compliance documentation, and ongoing maintenance.',
  keywords: [
    'commercial fire water compliance',
    'fire tank compliance commercial buildings',
    'AS1851 fire tank inspection',
    'fire water tank services commercial',
    'commercial fire water storage australia',
  ],
  alternates: {
    canonical: '/industries/commercial-fire-compliance',
  },

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Commercial Fire Water Tank Solutions',
    description: 'AS2304 fire water storage and AS1851 annual inspection compliance for commercial properties. Pump system integration, compliance documentation, and ongoing maintenance.',
    url: 'https://pcwater.com.au/industries/commercial-fire-compliance',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'PC Water Infrastructure — Engineered Water Asset Solutions',
      },
    ],
  },
  twitter: { card: 'summary_large_image' as const, images: ['/hero.png'] },
}

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

const faqs = [
  { question: 'Does my commercial building need a fire water tank?', answer: 'The requirement for a fire water storage tank is determined by the fire engineer\'s report for your building, the applicable BCA/NCC fire system design, and local authority requirements. If your building has or requires a fire sprinkler system, suppression system, or hydrant system, a compliant water storage tank is typically required.' },
  { question: 'How often does a commercial fire water tank need to be inspected?', answer: 'Under AS1851, fire protection system components — including water storage tanks — require annual inspection and maintenance. PC Water Infrastructure provides AS1851 annual inspection services for commercial fire water tanks.' },
  { question: 'What happens if my fire water tank fails AS1851 inspection?', answer: 'If your tank fails annual inspection, it needs to be remediated to return to compliance. Depending on the findings, this might involve RPVC liner installation, structural repair, fitting replacement, or capacity verification. PC Water Infrastructure can assess and remediate tanks that have failed inspection.' },
  { question: 'Does fire water tank compliance affect my building insurance?', answer: 'Yes. An AS2304 compliant fire water tank and current AS1851 annual inspection are typically conditions of commercial property insurance. Non-compliance can void insurance coverage in the event of a fire — a significant financial risk for property owners.' },
]

export default function CommercialFireCompliancePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Industries', url: `${siteUrl}/industries` },
          { name: 'Fire Water Tank Solutions for Commercial Properties', url: `${siteUrl}/industries/commercial-fire-compliance` },
        ]}
      />
      <Masthead
        kicker="Industries"
        title="Fire Water Tank Solutions for Commercial Properties"
        lead="AS2304-compliant fire water storage and AS1851 annual inspection for commercial properties — protecting assets, lives, and insurance coverage."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: "Fire Water Tank Solutions for Commercial Properties" },
        ]}
        imageSrc="/heroes/commercial-fire-compliance.jpg"
        imageAlt="Fire water tank system at a commercial facility — AS2304 compliant"
        primaryCta={{ label: 'Request a Compliance Review', href: '/contact' }}
        secondaryCta={{ label: 'View Our Work', href: '/projects' }}
      />

      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px]">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Compliance Challenges</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">What Commercial Property Owners Face</h2>
              <div className="space-y-4">
                {[
                  { title: 'AS2304 Fire Storage Compliance', desc: 'Fire water tanks must be designed, installed, and documented to AS2304 — the standard specifically for water storage in fire protection systems.' },
                  { title: 'AS1851 Annual Inspection', desc: 'Commercial fire water tanks require annual inspection and maintenance under AS1851. Failure to maintain current inspection records creates insurance and regulatory risk.' },
                  { title: 'Pump System Integration', desc: 'Fire water storage tanks must be correctly integrated with fire pump systems — flow rates, connections, and detection must all meet the fire engineer\'s specification.' },
                  { title: 'Ongoing Compliance Risk', desc: 'Even a compliant tank at installation can fall out of compliance over time through corrosion, fitting deterioration, or capacity issues — requiring ongoing inspection and maintenance.' },
                ].map((challenge) => (
                  <div key={challenge.title} className="bg-[#F4F6F8] rounded-xl p-5">
                    <h3 className="font-bold text-[#30505b] mb-1">{challenge.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Our Solution</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Complete Fire Water Compliance</h2>
              <div className="space-y-3">
                {[
                  { service: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
                  { service: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                  { service: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
                  { service: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
                  { service: 'Builder & Contractor Partnerships', href: '/services/builder-contractor-partnerships' },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3 bg-[#F4F6F8] rounded-xl p-4 hover:bg-[#3e91ce]/10 transition-colors group">
                    <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#30505b] group-hover:text-[#3e91ce] transition-colors">{s.service}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 bg-[#3e91ce]/10 border border-[#3e91ce]/20 rounded-xl p-5">
                <p className="text-sm font-bold text-[#30505b] mb-2">Applicable Standards</p>
                <div className="flex flex-wrap gap-2">
                  {['AS2304', 'AS1851', 'BCA/NCC'].map((std) => (
                    <span key={std} className="bg-white border border-gray-200 text-[#3e91ce] px-3 py-1 rounded-full text-xs font-bold">{std}</span>
                  ))}
                </div>
              </div>
            </div>
              <DetailRail family="industries" currentHref="/industries/commercial-fire-compliance" />
            </div>
        </div>
      </section>

      <DetailFooterBand family="industries" currentHref="/industries/commercial-fire-compliance" />

      <FAQBlock faqs={faqs} heading="Commercial Fire Compliance — FAQs" />
      <CTABanner heading="IS YOUR FIRE WATER SYSTEM COMPLIANT?" subheading="Get a compliance review from PC Water Infrastructure and protect your property, people, and insurance." primaryCTA={{ label: 'Request a Compliance Review', href: '/contact' }} secondaryCTA={{ label: 'Download Fire Water Guide', href: '/downloads/fire-water-compliance-guide.pdf' }} variant="navy" />
    </>
  )
}
