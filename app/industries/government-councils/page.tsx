import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import SectionProjects from '@/components/SectionProjects'
import Masthead from '@/components/editorial/Masthead'
import DetailRail from '@/components/editorial/DetailRail'
import DetailFooterBand from '@/components/editorial/DetailFooterBand'
import { SHELL } from '@/lib/shell'

export const metadata: Metadata = {
  title: 'Water Storage for Government & Councils',
  description:
    'Compliant water storage for government and council assets. Tender-ready documentation, AS2304/AS1851 compliance, and procurement support.',
  keywords: [
    'government council water infrastructure',
    'council water tank solutions',
    'municipal water storage infrastructure',
    'government water treatment contractor',
    'public sector water infrastructure australia',
  ],
  alternates: {
    canonical: '/industries/government-councils',
  },

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Storage for Government & Councils',
    description: 'Compliant water storage for government and council assets. Tender-ready documentation, AS2304/AS1851 compliance, and procurement support.',
    url: 'https://pcwater.com.au/industries/government-councils',
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
  { question: 'Do you have experience with local government procurement?', answer: 'Yes. We have delivered projects for local and state government clients and understand the documentation requirements, compliance expectations, and procurement processes involved. We provide full capability statements, RPEQ certification, and compliance documentation to support tender evaluation.' },
  { question: 'Can you support panel supply arrangements?', answer: 'Yes. We are experienced with government panel supply arrangements and can provide all required pre-qualification documentation. Contact us to discuss your panel requirements.' },
  { question: 'How do you support public asset accountability?', answer: 'Every PC Water Infrastructure project includes full compliance documentation — engineering certificates, AS certification records, inspection reports, and handover documentation — ensuring public asset accountability from design through to commissioning and ongoing maintenance.' },
  { question: 'Do you deliver to regional and remote council areas?', answer: 'Remote delivery is a core specialisation. We have delivered to remote Queensland communities and understand the logistical challenges of delivering infrastructure to regional and remote council areas.' },
]

export default function GovernmentCouncilsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Industries', url: `${siteUrl}/industries` },
          { name: 'Water Storage Solutions for Government & Councils', url: `${siteUrl}/industries/government-councils` },
        ]}
      />
      <Masthead
        kicker="Industries"
        title="Water Storage Solutions for Government & Councils"
        lead="Compliant, accountable, and community-focused water storage delivery for government agencies, local councils, and public infrastructure programs."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: "Water Storage Solutions for Government & Councils" },
        ]}
        imageSrc="/heroes/government-councils.jpg"
        imageAlt="Municipal water storage infrastructure project for government and councils"
        primaryCta={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCta={{ label: 'View Our Work', href: '/projects' }}
      />

      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px]">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Sector Challenges</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">What Government Procurement Demands</h2>
              <div className="space-y-4">
                {[
                  { title: 'Tender & Compliance Documentation', desc: 'Government procurement requires comprehensive documentation — capability statements, RPEQ engineering, AS certification, safety records, and insurance.' },
                  { title: 'Public Asset Accountability', desc: 'Public assets must be delivered to standard, documented thoroughly, and maintainable for decades — not just to minimum specification.' },
                  { title: 'Budget Cycle Constraints', desc: 'Government projects must be delivered within defined budget and program constraints, with clear reporting and milestone accountability.' },
                  { title: 'Community Expectations', desc: 'Public water infrastructure carries community expectations around quality, reliability, and long-term performance — especially in regional and remote areas.' },
                ].map((challenge) => (
                  <div key={challenge.title} className="bg-[#F4F6F8] rounded-xl p-5">
                    <h3 className="font-bold text-[#30505b] mb-1">{challenge.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Relevant Services</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">How We Serve Government</h2>
              <div className="space-y-3">
                {[
                  { service: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
                  { service: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
                  { service: 'Remote Area Project Delivery', href: '/services/remote-area-delivery' },
                  { service: 'Tender & Procurement Support', href: '/services/tender-procurement-support' },
                  { service: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                  { service: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
                  { service: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3 bg-[#F4F6F8] rounded-xl p-4 hover:bg-[#3e91ce]/10 transition-colors group">
                    <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#30505b] group-hover:text-[#3e91ce] transition-colors">{s.service}</span>
                  </Link>
                ))}
              </div>
            </div>
              <DetailRail family="industries" currentHref="/industries/government-councils" />
            </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-6">Applicable Standards</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['AS2304', 'AS1851', 'AS4020', 'ISO9001', 'Public Sector Tender Requirements'].map((std) => (
              <span key={std} className="bg-white border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">{std}</span>
            ))}
          </div>
        </div>
      </section>

      <SectionProjects heading="Government Projects" limit={2} sector="Government" bgColor="bg-white" />

      <DetailFooterBand family="industries" currentHref="/industries/government-councils" />

      <FAQBlock faqs={faqs} heading="Government & Councils — FAQs" />
      <CTABanner heading="READY TO DISCUSS YOUR GOVERNMENT PROJECT?" subheading="Download our capability statement or contact us directly to discuss your project requirements." primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }} />
    </>
  )
}
