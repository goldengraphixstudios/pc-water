import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Water Storage for Mining & Resources',
  description:
    'Robust water storage for remote mining operations. Harsh environment engineering, AS2304 fire water compliance, RPVC liners, ROV inspection, and FIFO crew deployment.',
}

const faqs = [
  { question: 'Can you deliver to active mine sites?', answer: 'Yes. We are experienced with the access, induction, and safety requirements of active mine sites. All crews hold relevant mining site inductions and our SWMS are developed to mine site WHS standards.' },
  { question: 'What experience do you have with harsh environment materials?', answer: 'Remote mining environments often involve extreme temperatures, corrosive atmospheres, and difficult access. We specify materials appropriate to the operating environment — including corrosion-resistant steel grades, specialist coatings, and RPVC liner systems that perform in harsh conditions.' },
  { question: 'Do you provide fire water tanks for mining operations?', answer: 'Yes. Fire water tank design and installation to AS2304 is a core service for mining clients. We provide flow rate calculations, pump system integration, and ongoing AS1851 inspection support.' },
  { question: 'How do you manage FIFO crew deployment for remote mine sites?', answer: 'Remote project delivery is a specialisation. We coordinate FIFO crew rosters, site accommodation, equipment freight, and logistics planning for remote mine site projects across Western Australia, Queensland, and the Northern Territory.' },
]

export default function MiningResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Industries</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Water Storage for Mining & Resources</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Robust, engineered water infrastructure for remote mining and resources operations — built for harsh environments, compliance-critical, and operationally reliable.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Your Mine Site Project
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Sector Challenges</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">What Mining Projects Demand</h2>
              <div className="space-y-4">
                {[
                  { title: 'Remote Locations', desc: 'Mine sites are often hundreds of kilometres from the nearest supply centre, requiring specialist logistics, FIFO crews, and remote-rated materials.' },
                  { title: 'Harsh Environments', desc: 'Extreme temperatures, corrosive atmospheres, dust, and UV exposure demand materials and coatings engineered for the operating environment.' },
                  { title: 'Corrosion Management', desc: 'Process water, chemical exposure, and harsh environments accelerate tank corrosion. RPVC liners and corrosion-resistant coatings are critical for asset longevity.' },
                  { title: 'Operational Continuity', desc: 'Mine sites cannot afford water supply failures. Inspection and maintenance programs that minimise downtime are essential.' },
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
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Our Mining Capability</h2>
              <div className="space-y-3">
                {[
                  { service: 'Remote Area Project Delivery', href: '/services/remote-area-delivery' },
                  { service: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
                  { service: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
                  { service: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                  { service: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
                  { service: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
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
            {['AS2304', 'AS1851', 'WHS Compliance', 'Site-Specific Requirements', 'ISO14001'].map((std) => (
              <span key={std} className="bg-white border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">{std}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#30505b] mb-8 text-center">Mining & Industrial Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ProjectCard title="Hobart Nyrstar Industrial" sector="Industrial / Mining" location="Hobart, Tasmania" scope="2 × industrial tanks — corrosion resistant design" href="/projects/hobart-nyrstar" />
            <ProjectCard title="Doomadgee Water Treatment Plant" sector="Remote Community" location="Doomadgee, QLD (Remote)" scope="2ML ground-level tank — remote delivery" href="/projects/doomadgee-wtp" />
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Mining & Resources — FAQs" />
      <CTABanner heading="GOT A MINE SITE WATER STORAGE CHALLENGE?" subheading="Contact us to discuss your project requirements — remote, harsh environment, and compliance-critical." primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '#' }} variant="navy" />
    </>
  )
}
