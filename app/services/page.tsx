import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'PC Water Infrastructure combines PC Tanks (tank design & supply) and PC Water Solutions (project delivery & asset management) for a complete end-to-end water infrastructure service.',
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
      <section className="bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ What We Do</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            COMPLETE WATER INFRASTRUCTURE SERVICES
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            PC Tanks and PC Water Solutions — together as PC Water Infrastructure — deliver every stage of your water storage project, from design and supply through to installation, inspection, lining, and long-term asset management.
          </p>
        </div>
      </section>

      {/* Brand overview — two divisions */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Two Divisions. One Team.</p>
            <h2 className="text-3xl font-black text-[#30505b]">HOW OUR SERVICES ARE STRUCTURED</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PC Tanks */}
            <div className="bg-[#F4F6F8] rounded-2xl p-8 border-2 border-transparent hover:border-[#3e91ce]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#3e91ce] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 21V10h6v11" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase">Division One</p>
                  <h3 className="font-black text-[#30505b] text-xl">PC Tanks</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our tank design and manufacturing division. PC Tanks engineers and supplies bolted steel water storage tanks purpose-built to client specifications — any size, any application, fully compliant with AS2304 and AS4020.
              </p>
              <ul className="space-y-2">
                {['Custom Tank Design & Engineering','RPVC Liner Systems','Custom Tank Supply & Fabrication','AS2304 & AS4020 Compliance'].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-[#30505b]">
                    <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* PC Water Solutions */}
            <div className="bg-[#F4F6F8] rounded-2xl p-8 border-2 border-transparent hover:border-[#3e91ce]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#30505b] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#30505b] text-xs font-bold tracking-widest uppercase">Division Two</p>
                  <h3 className="font-black text-[#30505b] text-xl">PC Water Solutions</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our project delivery and asset management division. PC Water Solutions manages the full lifecycle of water infrastructure — installation, inspection, maintenance, fire water compliance, and remote project delivery across Australia.
              </p>
              <ul className="space-y-2">
                {['Professional Tank Installation','Remote Area Project Delivery','Tank Inspection Technology','Tank Maintenance & Upgrades','Fire Water Tank Solutions','Foundation & Civil Integration'].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-[#30505b]">
                    <span className="w-1.5 h-1.5 bg-[#30505b] rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ All Services</p>
            <h2 className="text-3xl font-black text-[#30505b]">OUR FULL SERVICE OFFERING</h2>
          </div>
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
            Rather than managing multiple contractors across your water storage project, PC Water Infrastructure provides a single point of accountability — from initial design through to long-term maintenance. Our integrated service model reduces handover risk, improves compliance outcomes, and keeps your project on schedule.
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
