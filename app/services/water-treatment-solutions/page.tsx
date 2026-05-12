import type { Metadata } from 'next'
import Link from 'next/link'
import AppImage from '@/components/AppImage'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import SectionProjects from '@/components/SectionProjects'

export const metadata: Metadata = {
  title: 'Water Treatment Solutions',
  description:
    'Potable and treatment-related water infrastructure covering intake, conditioning, filtration, disinfection, automation, and compliance-led delivery.',
}

const faqs = [
  {
    question: 'What does water treatment solutions include?',
    answer:
      'This service covers treatment-related infrastructure including intake, conditioning, filtration, UV and chlorine disinfection, automation, and supporting civil or mechanical interfaces required for reliable operation.',
  },
  {
    question: 'Do you only work on full treatment plants?',
    answer:
      'No. The service can apply to full treatment facilities, modular upgrades, treatment-related process infrastructure, or supporting works tied to broader water asset delivery.',
  },
  {
    question: 'Is this relevant for remote and regional communities?',
    answer:
      'Yes. Treatment reliability is especially critical in remote and regional contexts, so the service is positioned strongly for councils, community infrastructure, and difficult-access projects.',
  },
  {
    question: 'Do you work to Australian drinking water requirements?',
    answer:
      'The site positions this service around standards-led delivery and references the Australian Drinking Water Guidelines. Project-specific compliance still needs proper engineering and operational review.',
  },
]

export default function WaterTreatmentSolutionsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <AppImage
          src="/water/water-16.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Water Treatment Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Treatment-related water infrastructure from source to supply, delivered with practical
            engineering, process awareness, and compliance focus.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors"
          >
            Discuss Treatment Scope
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <AppImage src="/water/water-03.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden />
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

      <section className="bg-white py-16">
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

      <SectionProjects heading="Featured Project" slugs={['doomadgee-wtp']} bgColor="bg-[#F4F6F8]" />

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
