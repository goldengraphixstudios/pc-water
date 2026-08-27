import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import GatedDownloadLink from '@/components/GatedDownloadLink'
import Masthead from '@/components/editorial/Masthead'
import DetailRail from '@/components/editorial/DetailRail'
import DetailFooterBand from '@/components/editorial/DetailFooterBand'
import { SHELL } from '@/lib/shell'

export const metadata: Metadata = {
  title: 'Water Infrastructure Tender & Procurement Support',
  description:
    'Tender and procurement support for councils, government agencies, and major contractors. Capability statements, specification support, and bid management.',
  keywords: [
    'water infrastructure tender procurement support',
    'tank procurement support australia',
    'infrastructure tender support',
    'water project tender documentation',
    'council water tender support',
  ],
  alternates: {
    canonical: '/services/tender-procurement-support',
  },

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Infrastructure Tender & Procurement Support',
    description: 'Tender and procurement support for councils, government agencies, and major contractors. Capability statements, specification support, and bid management.',
    url: 'https://pcwater.com.au/services/tender-procurement-support',
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
  { question: 'What procurement support do you provide?', answer: 'We support clients through the full procurement process — from specification development and tender preparation through to compliance documentation and ongoing panel supply. Our goal is to make PC Water Infrastructure the easiest, most credible choice in any tender evaluation.' },
  { question: 'Can you help develop technical specifications?', answer: 'Yes. We provide technical specification development support to ensure that procurement documents accurately reflect best-practice water storage requirements — including applicable Australian standards, material specifications, and performance criteria.' },
  { question: 'Are you on any government panels?', answer: 'Our procurement support service is specifically designed to support government and council procurement processes. We can provide all required documentation to support panel registration applications and ongoing panel supply.' },
  { question: 'Do you have a capability statement available?', answer: 'Yes. Our capability statement is available for download and covers our full service range, project track record, compliance certifications, and key personnel. It is designed to meet common government procurement documentation requirements.' },
]

export default function TenderProcurementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Water Infrastructure Tender & Procurement Support', url: `${siteUrl}/services/tender-procurement-support` },
        ]}
      />
      <Masthead
        kicker="Services"
        title="Tender & Procurement Support"
        lead="Specialist procurement and tendering support for councils, government agencies, and major contractors — making PC Water Infrastructure easy to engage and easy to trust."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: "Tender & Procurement Support" },
        ]}
        imageSrc="/heroes/tender-procurement-support.jpg"
        imageAlt="Water infrastructure tender and procurement support for government and major contractors"
        primaryCta={{ label: 'Discuss Procurement', href: '/contact' }}
        secondaryCta={{ label: 'View Our Work', href: '/projects' }}
      />

      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px]">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ What We Provide</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Government-Ready. Panel-Ready. Project-Ready.</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            Government procurement requires more than capability — it requires documentation, compliance records, and a demonstrable track record. PC Water Infrastructure has built its procurement support service to make the evaluation process straightforward for councils, agencies, and major contractors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From pre-qualification through to tender response and contract delivery, we provide the documentation, expertise, and reliability that government procurement demands.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Capability statement preparation',
                'Technical specification support',
                'Tender response assistance',
                'Compliance documentation',
                'Pre-qualification support',
                'Panel registration assistance',
                'RPEQ engineering certification',
                'Project track record documentation',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-[#F4F6F8] rounded-lg p-4">
                  <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-[#30505b] font-medium">{point}</span>
                </div>
              ))}
            </div>
              <DetailRail family="services" currentHref="/services/tender-procurement-support" />
            </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-[#30505b] mb-8 text-center">Why Government Procurement Teams Choose PC Water Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Proven Track Record', desc: 'Delivered projects for government, councils, and major agencies across Australia — with documented project outcomes and client references.' },
              { title: 'Full Compliance Documentation', desc: 'AS2304, AS4020, ISO9001, ISO14001 compliance documentation available. RPEQ-certified engineering. Zero injury safety record.' },
              { title: 'Responsive & Reliable', desc: 'Government procurement teams need a contractor they can rely on. We respond within one business day and deliver on our commitments.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-0.5 bg-[#3e91ce] mb-4" />
                <h3 className="font-bold text-[#30505b] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government & Councils', 'Mining & Resources', 'Industrial Facilities'].map((ind) => {

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

      <DetailFooterBand family="services" currentHref="/services/tender-procurement-support" />

      <FAQBlock faqs={faqs} heading="Tender & Procurement — FAQs" />
      <CTABanner heading="NEED PROCUREMENT SUPPORT?" subheading="Contact us to discuss your tender requirements and download our capability statement." primaryCTA={{ label: 'Discuss Your Procurement', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }} variant="navy" />
    </>
  )
}
