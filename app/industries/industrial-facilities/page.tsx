import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import SectionProjects from '@/components/SectionProjects'

export const metadata: Metadata = {
  title: 'Industrial Water Storage Solutions',
  description:
    'Process water reliability and fire suppression compliance for industrial facilities. Tank design, inspection, RPVC liners, and maintenance for industrial water storage assets.',
}

const faqs = [
  { question: 'What industrial water storage applications do you cover?', answer: 'We deliver water storage for a wide range of industrial applications including process water supply, cooling water storage, fire suppression systems, effluent holding, and chemical-compatible storage tanks engineered for specific industrial fluids.' },
  { question: 'How do you handle corrosive industrial environments?', answer: 'Industrial environments often involve chemical exposure, corrosive atmospheres, or aggressive stored fluids. We specify materials, coatings, and liner systems appropriate to the specific chemical environment — and provide RPVC liner solutions for tanks exposed to corrosive conditions.' },
  { question: 'Do you provide ongoing maintenance for industrial tanks?', answer: 'Yes. We provide planned maintenance programs specifically designed for industrial sites — minimising disruption to production while ensuring tanks remain in compliant, operational condition.' },
  { question: 'What fire water compliance standards apply to industrial facilities?', answer: 'Industrial facilities typically require fire water storage to AS2304 and ongoing maintenance under AS1851. The specific requirements depend on the fire engineer\'s risk assessment and relevant BCA/NCC requirements for the facility type.' },
]

export default function IndustrialFacilitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Industries</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Industrial Water Storage Solutions</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Process water reliability, fire suppression compliance, and tank lifecycle management for industrial facilities across Australia.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Your Industrial Project
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Sector Challenges</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Industrial Water Storage Challenges</h2>
              <div className="space-y-4">
                {[
                  { title: 'Process Water Reliability', desc: 'Industrial production depends on reliable water supply. Tank failures or contamination can halt production and cause significant operational losses.' },
                  { title: 'Fire Suppression Compliance', desc: 'Industrial facilities require fire water storage to AS2304 and annual AS1851 inspection — failure to comply creates liability and insurance risk.' },
                  { title: 'Tank Degradation', desc: 'Industrial environments accelerate tank degradation through chemical exposure, corrosion, and operating conditions that standard tanks are not designed for.' },
                  { title: 'Asset Lifecycle Management', desc: 'Industrial facilities need water storage assets managed through their full lifecycle — from design and installation through to inspection, lining, and eventual upgrade or replacement.' },
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
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Our Industrial Capability</h2>
              <div className="space-y-3">
                {[
                  { service: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
                  { service: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                  { service: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
                  { service: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
                  { service: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
                  { service: 'Foundation & Civil Integration', href: '/services/foundation-civil-integration' },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3 bg-[#F4F6F8] rounded-xl p-4 hover:bg-[#3e91ce]/10 transition-colors group">
                    <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#30505b] group-hover:text-[#3e91ce] transition-colors">{s.service}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-6">Applicable Standards</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['AS2304', 'AS4020', 'AS1851', 'ISO9001', 'ISO14001'].map((std) => (
              <span key={std} className="bg-white border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">{std}</span>
            ))}
          </div>
        </div>
      </section>

      <SectionProjects heading="Industrial Projects" limit={2} sector="Industrial" bgColor="bg-white" />

      <FAQBlock faqs={faqs} heading="Industrial Facilities — FAQs" />
      <CTABanner heading="INDUSTRIAL WATER STORAGE THAT PERFORMS" subheading="Contact us to discuss your process water or fire suppression requirements." primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '#' }} />
    </>
  )
}
