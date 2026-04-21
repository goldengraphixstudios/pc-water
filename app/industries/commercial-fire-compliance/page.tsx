import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Fire Water Tank Solutions for Commercial Properties',
  description:
    'AS2304 fire water storage and AS1851 annual inspection compliance for commercial properties. Pump system integration, compliance documentation, and ongoing maintenance.',
}

const faqs = [
  { question: 'Does my commercial building need a fire water tank?', answer: 'The requirement for a fire water storage tank is determined by the fire engineer\'s report for your building, the applicable BCA/NCC fire system design, and local authority requirements. If your building has or requires a fire sprinkler system, suppression system, or hydrant system, a compliant water storage tank is typically required.' },
  { question: 'How often does a commercial fire water tank need to be inspected?', answer: 'Under AS1851, fire protection system components — including water storage tanks — require annual inspection and maintenance. Pacific Water Tanks provides AS1851 annual inspection services for commercial fire water tanks.' },
  { question: 'What happens if my fire water tank fails AS1851 inspection?', answer: 'If your tank fails annual inspection, it needs to be remediated to return to compliance. Depending on the findings, this might involve RPVC liner installation, structural repair, fitting replacement, or capacity verification. Pacific Water Tanks can assess and remediate tanks that have failed inspection.' },
  { question: 'Does fire water tank compliance affect my building insurance?', answer: 'Yes. An AS2304 compliant fire water tank and current AS1851 annual inspection are typically conditions of commercial property insurance. Non-compliance can void insurance coverage in the event of a fire — a significant financial risk for property owners.' },
]

export default function CommercialFireCompliancePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Industries</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fire Water Tank Solutions for Commercial Properties</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            AS2304-compliant fire water storage and AS1851 annual inspection for commercial properties — protecting assets, lives, and insurance coverage.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Request a Compliance Review
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Compliance Challenges</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">What Commercial Property Owners Face</h2>
              <div className="space-y-4">
                {[
                  { title: 'AS2304 Fire Storage Compliance', desc: 'Fire water tanks must be designed, installed, and documented to AS2304 — the standard specifically for water storage in fire protection systems.' },
                  { title: 'AS1851 Annual Inspection', desc: 'Commercial fire water tanks require annual inspection and maintenance under AS1851. Failure to maintain current inspection records creates insurance and regulatory risk.' },
                  { title: 'Pump System Integration', desc: 'Fire water storage tanks must be correctly integrated with fire pump systems — flow rates, connections, and detection must all meet the fire engineer\'s specification.' },
                  { title: 'Ongoing Compliance Risk', desc: 'Even a compliant tank at installation can fall out of compliance over time through corrosion, fitting deterioration, or capacity issues — requiring ongoing inspection and maintenance.' },
                ].map((challenge) => (
                  <div key={challenge.title} className="bg-[#F4F6F8] rounded-xl p-5">
                    <h3 className="font-bold text-[#30505b] mb-1">{challenge.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Our Solution</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Complete Fire Water Compliance</h2>
              <div className="space-y-3">
                {[
                  { service: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
                  { service: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                  { service: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
                  { service: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
                  { service: 'Builder & Contractor Partnerships', href: '/services/builder-contractor-partnerships' },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3 bg-[#F4F6F8] rounded-xl p-4 hover:bg-[#3e91ce]/10 transition-colors group">
                    <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#30505b] group-hover:text-[#3e91ce] transition-colors">{s.service}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 bg-[#3e91ce]/10 border border-[#3e91ce]/20 rounded-xl p-5">
                <p className="text-sm font-bold text-[#30505b] mb-2">Applicable Standards</p>
                <div className="flex flex-wrap gap-2">
                  {['AS2304', 'AS1851', 'BCA/NCC'].map((std) => (
                    <span key={std} className="bg-white border border-gray-200 text-[#3e91ce] px-3 py-1 rounded-full text-xs font-bold">{std}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Commercial Fire Compliance — FAQs" />
      <CTABanner heading="IS YOUR FIRE WATER SYSTEM COMPLIANT?" subheading="Get a compliance review from Pacific Water Tanks and protect your property, people, and insurance." primaryCTA={{ label: 'Request a Compliance Review', href: '/contact' }} secondaryCTA={{ label: 'Download Fire Water Guide', href: '#' }} variant="navy" />
    </>
  )
}
