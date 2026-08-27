import type { Metadata } from 'next'
import Link from 'next/link'
import AppImage from '@/components/AppImage'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import SectionProjects from '@/components/SectionProjects'
import Masthead from '@/components/editorial/Masthead'
import DetailRail from '@/components/editorial/DetailRail'
import DetailFooterBand from '@/components/editorial/DetailFooterBand'
import { SHELL } from '@/lib/shell'

export const metadata: Metadata = {
  title: 'Water Treatment Solutions Australia',
  description:
    'Water treatment solutions across Australia. From raw water intake through filtration, disinfection, and automation to ADWG-compliant, project-delivered supply.',
  keywords: [
    'water treatment solutions australia',
    'potable water infrastructure',
    'remote water treatment projects',
    'drinking water treatment systems',
    'treatment plant infrastructure',
    'water treatment compliance',
  ],
  alternates: {
    canonical: '/services/water-treatment-solutions',
  },

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Treatment Solutions Australia',
    description: 'Water treatment solutions across Australia. From raw water intake through filtration, disinfection, and automation to ADWG-compliant, project-delivered supply.',
    url: 'https://pcwater.com.au/services/water-treatment-solutions',
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
  {
    question: 'What does water treatment infrastructure delivery include?',
    answer:
      'Our water treatment scope covers the full treatment chain — raw water intake, chemical conditioning, coagulation and filtration, UV and chlorine disinfection, SCADA and automation integration, and the civil and mechanical interfaces needed for reliable day-to-day operation. We coordinate all components from design through to commissioning and handover.',
  },
  {
    question: 'Do you work on partial upgrades or only new treatment plants?',
    answer:
      'Both. We deliver new treatment facilities and modular upgrades to existing plants. If only part of your treatment train needs replacing or expanding — for example, adding UV disinfection to an existing chlorine system, or upgrading SCADA controls — we can scope and deliver that component independently.',
  },
  {
    question: 'Is water treatment delivery suitable for remote and regional communities?',
    answer:
      'Yes, and it is one of our strongest areas. Remote communities often have the most acute treatment needs and the fewest local contractors capable of delivering to standard. We deploy FIFO crews, manage remote logistics, and bring the same engineering rigour to difficult-access sites as we do to urban projects.',
  },
  {
    question: 'What standards apply to potable water treatment systems?',
    answer:
      'Potable water treatment must conform to the Australian Drinking Water Guidelines (ADWG) administered by the National Health and Medical Research Council (NHMRC). Project-specific compliance is also shaped by state regulations, asset owner requirements, and operating context. Our engineers design and document to meet these obligations at every stage.',
  },
  {
    question: 'Can you handle the full project scope or just the treatment components?',
    answer:
      'We can manage the full scope or integrate as the treatment-specific subcontractor within a larger civil or infrastructure program. We hold RPEQ engineering certification and provide all required documentation — design certificates, as-built drawings, commissioning records, and operational handover packs.',
  },
]

export default function WaterTreatmentSolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Water Treatment Solutions', url: `${siteUrl}/services/water-treatment-solutions` },
        ]}
      />
      <Masthead
        kicker="Services"
        title="Water Treatment Solutions"
        lead="Treatment-related water infrastructure from source to supply, delivered with practical engineering, process awareness, and compliance focus."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: "Water Treatment Solutions" },
        ]}
        imageSrc="/water/water-16.jpg"
        imageAlt="Water treatment plant installation and commissioning across Australia"
        primaryCta={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCta={{ label: 'View Our Work', href: '/projects' }}
      />

      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px]">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Service Overview</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">From Raw Water To Reliable Supply</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                PC Water Infrastructure is positioned as more than a storage provider. This service
                covers the treatment side of the asset journey as well: the infrastructure, process
                interfaces, and delivery coordination needed to move water safely from intake through
                treatment and into dependable supply.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is suited to councils, remote communities, industrial operators, and programs where
                treatment performance, operational continuity, and standards-led delivery all matter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Raw water intake interfaces',
                'Chemical conditioning systems',
                'Coagulation & filtration support',
                'UV & chlorine disinfection',
                'SCADA & automation integration',
                'Mechanical process coordination',
                'Compliance-focused delivery',
                'Regional & remote execution',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-[#F4F6F8] rounded-lg p-4">
                  <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-[#30505b] font-medium">{point}</span>
                </div>
              ))}
            </div>
              <DetailRail family="services" currentHref="/services/water-treatment-solutions" />
            </div>
        </div>
      </section>

      <section className="relative py-8 sm:py-10 overflow-hidden">
        <AppImage src="/water/water-03.jpg" alt="Treated potable water meeting Australian Drinking Water Guidelines" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[#30505b]/88" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">Typical Treatment Scope Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Intake & Pre-Treatment', desc: 'Source water entry, early-stage conditioning, and process planning around upstream constraints.' },
              { step: '02', label: 'Treatment Process Integration', desc: 'Coordination of filtration, dosing, disinfection, and process equipment interfaces.' },
              { step: '03', label: 'Controls & Reliability', desc: 'Automation, monitoring, and supporting infrastructure for stable day-to-day operation.' },
              { step: '04', label: 'Commissioning & Handover', desc: 'Testing, documentation, operator handover, and delivery support aligned to project requirements.' },
            ].map((item) => (
              <div key={item.step} className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
                <p className="text-[#3e91ce] font-black text-2xl mb-3">{item.step}</p>
                <h3 className="font-bold text-white mb-2">{item.label}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Best Fit Sectors</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government & Councils', 'Remote & Regional Communities', 'Industrial Facilities', 'Mining & Resources'].map((sector) => (
              <span key={sector} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-8 sm:py-10">
        <div className={`${SHELL} grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {[
            {
              title: 'Potable water risk article',
              description: 'Read why storage condition matters as much as treatment quality for drinking water outcomes.',
              href: '/resources/water-is-food-your-tank-is-the-crockery',
            },
            {
              title: 'Tank inspection support',
              description: 'Condition assessment and inspection data often inform treatment-related upgrade planning.',
              href: '/services/tank-inspection-technology',
            },
            {
              title: 'Doomadgee treatment project',
              description: 'See a live remote community water treatment storage project with real delivery complexity.',
              href: '/projects/doomadgee-wtp',
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

      <SectionProjects heading="Featured Project" slugs={['doomadgee-wtp']} bgColor="bg-[#F4F6F8]" />

      <DetailFooterBand family="services" currentHref="/services/water-treatment-solutions" />

      <FAQBlock faqs={faqs} heading="Water Treatment Solutions - FAQs" />
      <CTABanner
        heading="NEED TREATMENT-RELATED WATER INFRASTRUCTURE SUPPORT?"
        subheading="Share your treatment scope, operational constraints, and project stage and the team can help point the job in the right direction."
        primaryCTA={{ label: 'Discuss Treatment Scope', href: '/contact' }}
        secondaryCTA={{ label: 'View Resources', href: '/resources' }}
        variant="navy"
      />
    </>
  )
}
