import type { Metadata } from 'next'
import AppImage from '@/components/AppImage'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ToolPromo from '@/components/ToolPromo'
import Masthead from '@/components/editorial/Masthead'
import DetailRail from '@/components/editorial/DetailRail'
import DetailFooterBand from '@/components/editorial/DetailFooterBand'
import { SHELL } from '@/lib/shell'

export const metadata: Metadata = {
  title: 'Tank Inspection Technology Australia',
  description:
    'ROV and UAV tank inspection across Australia. Assess condition without dewatering to support AS1851 compliance, maintenance, and refurbishment decisions.',
  keywords: [
    'ROV tank inspection australia',
    'UAV tank inspection',
    'water tank condition assessment',
    'tank inspection without dewatering',
    'AS1851 tank inspection support',
    'water storage asset inspection',
  ],
  alternates: {
    canonical: '/services/tank-inspection-technology',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Tank Inspection Technology Australia',
    description: 'ROV and UAV tank inspection across Australia. Assess condition without dewatering to support AS1851 compliance, maintenance planning, and refurbishment decisions.',
    url: 'https://pcwater.com.au/services/tank-inspection-technology',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },
}

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

const faqs = [
  { question: 'What is an ROV inspection?', answer: 'ROV (Remotely Operated Vehicle) inspection uses an underwater drone to inspect the interior of a water tank without needing to dewater it. The ROV provides video and photographic documentation of internal conditions — including the floor, walls, roof, and fittings — while the tank remains in service.' },
  { question: 'Can a UAV drone inspect a tank?', answer: 'Yes. UAV (drone) inspection is used for external tank structure inspection, including roofs, external coatings, and structural elements that are difficult to access safely from ground level. Combined with ROV internal inspection, it provides a comprehensive condition assessment.' },
  { question: 'How much does tank dewatering cost compared to ROV inspection?', answer: 'Dewatering a large tank involves water disposal or transfer, loss of storage capacity during inspection, and additional labour. ROV inspection typically reduces inspection cost significantly while maintaining a higher quality of documentation and causing no supply interruption.' },
  { question: 'Does ROV inspection meet AS1851 requirements?', answer: 'Our ROV inspection reports are prepared to support AS1851 compliance requirements for fire system water storage tanks. We provide detailed condition reports that document inspection methodology, findings, and recommendations.' },
  { question: 'How long does a typical inspection take?', answer: 'Inspection time depends on tank size and the inspection methodology required. ROV inspections of medium-sized tanks typically complete in half a day. We provide a scope of works and timeline estimate prior to each inspection program.' },
]

export default function TankInspectionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Tank Inspection Technology', url: `${siteUrl}/services/tank-inspection-technology` },
        ]}
      />
      <Masthead
        kicker="Services"
        title="Tank Inspection Technology"
        lead="Advanced ROV and UAV-assisted tank inspection — delivering accurate condition assessment without costly tank dewatering and minimal disruption to your operations."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: "Tank Inspection Technology" },
        ]}
        imageSrc="/heroes/tank-inspection-technology.jpg"
        imageAlt="ROV underwater inspection technology being deployed inside a water tank"
        primaryCta={{ label: 'Request an Inspection', href: '/contact' }}
        secondaryCta={{ label: 'View Our Work', href: '/projects' }}
      />

      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px]">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Advanced Technology</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">See More. Disrupt Less.</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            Traditional tank inspection requires dewatering — taking the asset offline, disposing of or transferring stored water, and conducting a manual internal inspection. For large tanks, this is expensive, time-consuming, and disruptive. PC Water Infrastructure uses advanced ROV and UAV technology to deliver superior inspection data with a fraction of the cost and disruption.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our inspection reports provide detailed photographic and video documentation, condition ratings, and maintenance recommendations — giving asset owners the information they need to make smart decisions about their water storage assets.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F4F6F8] rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#3e91ce]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#30505b]">ROV (Remotely Operated Vehicle)</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">Underwater drone inspection of tank interiors — floor, walls, roof, fittings — while the tank remains in service. No dewatering required.</p>
              </div>
              <div className="bg-[#F4F6F8] rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#3e91ce]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#30505b]">UAV Drone Inspection</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">Aerial drone inspection of external tank structures — roofs, coatings, external walls, and surrounding infrastructure. Safe, fast, and highly detailed.</p>
              </div>
            </div>
              <DetailRail family="services" currentHref="/services/tank-inspection-technology" />
            </div>
        </div>
      </section>

      <section className="relative py-8 sm:py-10 overflow-hidden">
        <AppImage src="/water/water-10.jpg" alt="Underwater view representing ROV tank inspection technology" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[#30505b]/87" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">What Our Inspection Reports Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Detailed Condition Rating', desc: 'Systematic condition rating of all tank components — structure, coatings, fittings, and liner (where applicable) — with photographic evidence.' },
              { title: 'Prioritised Recommendations', desc: 'Clear maintenance and upgrade recommendations prioritised by urgency and cost-effectiveness, to support asset management decisions.' },
              { title: 'Compliance Documentation', desc: 'Reports formatted to support AS1851 fire system compliance, regulatory reporting, and insurance requirements.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <div className="w-8 h-0.5 bg-[#3e91ce] mb-4" />
                <h3 className="font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government & Councils', 'Mining & Resources', 'Industrial Facilities', 'Commercial & Fire Compliance', 'Remote & Regional Communities'].map((ind) => {

              const hrefMap: Record<string, string> = {

                'Mining & Resources': '/industries/mining-resources',

                'Government & Councils': '/industries/government-councils',

                'Industrial Facilities': '/industries/industrial-facilities',

                'Commercial & Fire Compliance': '/industries/commercial-fire-compliance',

                'Commercial Fire Compliance': '/industries/commercial-fire-compliance',

                'Remote & Regional Communities': '/industries/remote-regional-communities',

                'Remote Communities': '/industries/remote-regional-communities',

              }

              const href = hrefMap[ind]

              return href ? (

                <Link key={ind} href={href} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3e91ce]/10 hover:border-[#3e91ce]/40 transition-colors">{ind}</Link>

              ) : (

                <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">{ind}</span>

              )

            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-8 sm:py-10">
        <div className={`${SHELL} grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {[
            {
              title: 'Signs a tank is failing',
              description: 'Use this article to identify the common failure indicators before they become emergency issues.',
              href: '/resources/is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing',
            },
            {
              title: 'Sector maintenance risks',
              description: 'See how inspection scope changes across mining, councils, hospitals, and industrial sites.',
              href: '/resources/from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance',
            },
            {
              title: 'RPVC liner follow-up',
              description: 'Condition assessment often leads directly into relining decisions for still-sound assets.',
              href: '/services/rpvc-liner-systems',
            },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:border-[#3e91ce] transition-colors">
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Related</p>
              <h2 className="text-xl font-black text-[#30505b] mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ToolPromo
        heading="Should you inspect, repair, reline, or replace?"
        description="If your tank is aging, our free decision tool gives you a practical path in under a minute — and shows where an inspection adds the most value before you commit to works."
        href="/tools/repair-reline-replace"
        ctaLabel="Use the Decision Tool"
      />

      <DetailFooterBand family="services" currentHref="/services/tank-inspection-technology" />

      <FAQBlock faqs={faqs} heading="Tank Inspection — FAQs" />
      <CTABanner heading="KNOW THE CONDITION OF YOUR ASSETS" subheading="Schedule an ROV or drone inspection and get the data you need to make confident asset decisions." primaryCTA={{ label: 'Request an Inspection', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }} variant="navy" />
    </>
  )
}
