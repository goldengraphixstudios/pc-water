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
  title: 'Water Tank Installation Australia',
  description:
    'End-to-end water tank installation with certified crews across Australia. Ground-up builds to drop-in replacements with rigorous commissioning protocols.',
  keywords: [
    'water tank installation australia',
    'professional tank installation',
    'steel water tank installation',
    'potable water tank installation',
    'fire water tank installation',
    'tank erection contractor',
  ],
  alternates: {
    canonical: '/services/tank-installation',
  },

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Tank Installation Australia',
    description: 'End-to-end water tank installation with certified crews across Australia. Ground-up builds to drop-in replacements with rigorous commissioning protocols.',
    url: 'https://pcwater.com.au/services/tank-installation',
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
  { question: 'Do you manage the full installation process?', answer: 'Yes. PC Water Infrastructure manages everything from site preparation and foundation work through to structural erection, commissioning, and handover — providing a single point of accountability for your project.' },
  { question: 'How do you manage safety on installation sites?', answer: 'All installations operate under comprehensive JSA (Job Safety Analysis) and SWMS (Safe Work Method Statements). Our zero injury record reflects embedded daily toolbox talks, strict PPE compliance, and continuous safety monitoring.' },
  { question: 'Can you install in remote locations?', answer: 'Yes. Remote installation is a core capability. We coordinate FIFO crew deployment, remote logistics, and site-specific safety planning for installations across Queensland, Western Australia, Northern Territory, and beyond.' },
  { question: 'Do you provide project scheduling?', answer: 'All installation projects are managed with Gantt-based scheduling that provides clients with clear milestones, dependencies, and progress visibility throughout the project.' },
  { question: 'What types of tanks do you install?', answer: 'We install steel tanks, concrete tanks, modular tank systems, and all associated civil and mechanical works — including pump systems, pipe connections, and access infrastructure.' },
]

export default function TankInstallationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Water Tank Installation', url: `${siteUrl}/services/tank-installation` },
        ]}
      />
      <Masthead
        kicker="Services"
        title="Professional Tank Installation"
        lead="End-to-end tank installation with certified crews, national reach, and rigorous safety standards — from site preparation to commissioning."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: "Professional Tank Installation" },
        ]}
        imageSrc="/heroes/tank-installation.jpg"
        imageAlt="Water tank installation by certified crews at a project site"
        primaryCta={{ label: 'Discuss Your Installation', href: '/contact' }}
        secondaryCta={{ label: 'View Our Work', href: '/projects' }}
      />

      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px]">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ What We Deliver</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Turnkey Installation, National Reach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            PC Water Infrastructure provides end-to-end installation services across Australia. Our certified installation crews bring the expertise, equipment, and safety systems needed to deliver complex tank projects on schedule and within compliance requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are installing a single fire water tank on a commercial site or multiple tanks as part of a major infrastructure program, we provide the same standard of professional delivery — with Gantt-based scheduling and single-point project accountability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Site preparation & earthworks',
                'Foundation construction',
                'Structural tank erection',
                'Mechanical & pipe connections',
                'Commissioning & testing',
                'JSA/SWMS compliance',
                'Gantt-based scheduling',
                'Handover documentation',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-[#F4F6F8] rounded-lg p-4">
                  <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-[#30505b] font-medium">{point}</span>
                </div>
              ))}
            </div>
              <DetailRail family="services" currentHref="/services/tank-installation" />
            </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-8 sm:py-10">
        <div className={SHELL}>
          <h2 className="text-3xl font-black text-[#30505b] text-center mb-12">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', label: 'Pre-Installation Planning', desc: 'Site assessment, logistics planning, JSA/SWMS development, and scheduling.' },
              { step: '02', label: 'Site Preparation', desc: 'Clearing, earthworks, access track construction, and foundation preparation.' },
              { step: '03', label: 'Foundation Construction', desc: 'Engineered concrete foundation poured to specification with quality testing.' },
              { step: '04', label: 'Tank Erection', desc: 'Structural assembly and erection by certified installation crews with all safety controls in place.' },
              { step: '05', label: 'Mechanical Connections', desc: 'Pipework, pump systems, fittings, and instrumentation installed and tested.' },
              { step: '06', label: 'Commissioning & Handover', desc: 'Final testing, compliance verification, documentation package, and formal handover.' },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-[#3e91ce] font-black text-2xl mb-3">{step.step}</p>
                <h3 className="font-bold text-[#30505b] mb-2">{step.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
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

      <SectionProjects heading="Featured Project" slugs={['borumba-hydro']} bgColor="bg-[#F4F6F8]" />

      <DetailFooterBand family="services" currentHref="/services/tank-installation" />

      <FAQBlock faqs={faqs} heading="Tank Installation — FAQs" />
      <CTABanner heading="READY TO DISCUSS YOUR INSTALLATION?" subheading="Contact us to discuss your project scope, timeline, and site requirements." primaryCTA={{ label: 'Discuss a Project', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }} />
    </>
  )
}
