import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Pacific Water Tanks delivers 10 core services: custom tank design, installation, fire water solutions, RPVC liners, inspection, remote delivery, and more.',
}

const services = [
  {
    title: 'Custom Tank Design & Engineering',
    description: 'Purpose-built tank systems engineered to AS2304 & AS4020 for any capacity, site condition, or application. RPEQ-certified structural engineering, material selection, and modular design.',
    href: '/services/custom-tank-design',
  },
  {
    title: 'Professional Tank Installation',
    description: 'End-to-end installation with certified crews, national reach, JSA/SWMS compliance, and Gantt-based project scheduling. Site preparation through to commissioning.',
    href: '/services/tank-installation',
  },
  {
    title: 'Foundation & Civil Integration',
    description: 'Engineered concrete foundations and civil integration for tanks of all sizes. Geotechnical assessment, civil contractor coordination, and structural compliance documentation.',
    href: '/services/foundation-civil-integration',
  },
  {
    title: 'Fire Water Tank Solutions',
    description: 'AS2304-compliant fire water storage systems with flow rate calculations, pump system integration, and annual inspection support under AS1851. For commercial, industrial, and mining sites.',
    href: '/services/fire-water-tanks',
  },
  {
    title: 'Remote Area Project Delivery',
    description: 'Specialist delivery for remote and regional Australia — remote logistics, FIFO teams, Indigenous community projects, and harsh environment material selection.',
    href: '/services/remote-area-delivery',
  },
  {
    title: 'Tank Maintenance & Upgrades',
    description: 'Planned and reactive maintenance, structural upgrades, corrosion treatment, and long-term asset management for steel and concrete water storage infrastructure.',
    href: '/services/tank-maintenance-upgrades',
  },
  {
    title: 'Tank Inspection Technology',
    description: 'Advanced ROV and UAV drone inspection for accurate condition assessment without costly dewatering. Detailed condition reports supporting AS1851 compliance and targeted maintenance.',
    href: '/services/tank-inspection-technology',
  },
  {
    title: 'RPVC Liner Systems',
    description: 'High-performance RPVC liner installation to protect tanks from corrosion, restore potable water compliance, and extend asset life by 20+ years. AS4020 compliant.',
    href: '/services/rpvc-liner-systems',
  },
  {
    title: 'Tender & Procurement Support',
    description: 'Capability statements, specification support, tender response assistance, and compliance documentation for councils, government agencies, and major contractors.',
    href: '/services/tender-procurement-support',
  },
  {
    title: 'Builder & Contractor Partnerships',
    description: 'Reliable subcontract services for builders, civil contractors, and project managers who need specialist water storage capability with national reach.',
    href: '/services/builder-contractor-partnerships',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ What We Do</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            COMPLETE WATER STORAGE SERVICES
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From design and installation through to inspection, lining, maintenance, and remote delivery — Pacific Water Tanks covers every stage of your water storage project.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={service.href} {...service} number={idx + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose PWT */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#30505b] mb-6">ONE PARTNER. EVERY STAGE.</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Rather than managing multiple contractors across your water storage project, Pacific Water Tanks provides a single point of accountability — from initial design through to long-term maintenance. Our integrated service model reduces handover risk, improves compliance outcomes, and keeps your project on schedule.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { label: 'Design & Build', services: ['Custom Tank Design', 'Foundation & Civil Integration', 'Tank Installation'] },
              { label: 'Compliance & Safety', services: ['Fire Water Solutions', 'Tank Inspection Technology', 'RPVC Liner Systems'] },
              { label: 'Partnerships & Support', services: ['Remote Area Delivery', 'Maintenance & Upgrades', 'Tender Support', 'Contractor Partnerships'] },
            ].map((group) => (
              <div key={group.label} className="bg-[#F4F6F8] rounded-xl p-6">
                <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">{group.label}</p>
                <ul className="space-y-2">
                  {group.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-[#30505b]">
                      <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="READY TO DISCUSS YOUR PROJECT?"
        subheading="Tell us about your water storage challenge and we will respond within one business day."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '#' }}
        variant="navy"
      />
    </>
  )
}
