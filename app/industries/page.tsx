import type { Metadata } from 'next'
import IndustryCard from '@/components/IndustryCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Pacific Water Tanks delivers water storage solutions to government, mining, industrial, commercial, and remote community sectors across Australia.',
}

const industries = [
  {
    title: 'Government & Councils',
    description: 'Compliant, accountable water storage for public assets — tender-ready documentation, budget-conscious delivery, and community-focused outcomes.',
    href: '/industries/government-councils',
  },
  {
    title: 'Mining & Resources',
    description: 'Robust water infrastructure engineered for remote, harsh-environment mining operations with zero compromise on safety or compliance.',
    href: '/industries/mining-resources',
  },
  {
    title: 'Industrial Facilities',
    description: 'Reliable process water storage and fire suppression systems engineered for the demands of industrial operations.',
    href: '/industries/industrial-facilities',
  },
  {
    title: 'Commercial & Fire Compliance',
    description: 'AS2304 fire water storage and AS1851 compliance for commercial properties — protecting assets, lives, and insurance coverage.',
    href: '/industries/commercial-fire-compliance',
  },
  {
    title: 'Remote & Regional Communities',
    description: 'Safe water access delivered to remote and Indigenous communities — with specialist logistics, cultural sensitivity, and genuine care.',
    href: '/industries/remote-regional-communities',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Industries</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">BUILT FOR YOUR SECTOR</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Every industry has unique water storage demands. Pacific Water Tanks has the experience, compliance capability, and sector-specific expertise to meet yours.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.href} {...industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#30505b] mb-6">SECTOR EXPERIENCE THAT MATTERS</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Understanding the compliance environment, procurement constraints, and operational realities of each sector allows us to deliver solutions that genuinely fit — not just technically, but commercially and operationally. Our sector experience spans government, mining, industrial, commercial, and some of Australia's most remote communities.
          </p>
        </div>
      </section>

      <CTABanner
        heading="FIND YOUR SECTOR SOLUTION"
        subheading="Tell us your industry and project requirements — we will respond with relevant experience and a path forward."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '#' }}
        variant="navy"
      />
    </>
  )
}
