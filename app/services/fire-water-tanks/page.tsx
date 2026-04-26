import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Fire Water Tank Solutions',
  description:
    'AS2304-compliant fire water storage systems for commercial, industrial, and mining. Flow rate calculations, pump integration, annual AS1851 inspection support.',
}

const faqs = [
  { question: 'What standard applies to fire water tanks in Australia?', answer: 'Fire water storage tanks in Australia must be designed and installed to AS2304 (Water Storage Tanks for Fire Protection Systems). Annual maintenance and inspection must comply with AS1851 (Maintenance of Fire Protection Systems and Equipment).' },
  { question: 'How do I know if my fire water tank is compliant?', answer: 'If your tank has not had an AS1851 annual inspection, or if the tank pre-dates AS2304 compliance documentation, there is a compliance risk. PC Water Infrastructure can conduct an inspection and provide a condition report with remediation recommendations.' },
  { question: 'What is the minimum storage volume required?', answer: 'Minimum fire water storage volume is determined by the fire engineer\'s report for your building or facility, based on risk category, sprinkler system design, and local authority requirements. PC Water Infrastructure works with fire engineers to design tanks that meet the specified flow duration and volume.' },
  { question: 'Do you integrate pump systems with fire water tanks?', answer: 'Yes. We coordinate fire pump system integration as part of our fire water tank installation scope, ensuring compatibility with the storage tank, pipework design, and AS2304 performance requirements.' },
  { question: 'How often does a fire water tank need to be inspected?', answer: 'Under AS1851, fire protection systems — including water storage tanks — require annual inspection and maintenance by a qualified contractor. PC Water Infrastructure provides ongoing AS1851 inspection and maintenance services.' },
]

export default function FireWaterTanksPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fire Water Tank Solutions</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            AS2304-compliant fire water storage systems designed for commercial, industrial, and mining applications — protecting lives, assets, and insurance compliance.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Your Fire Water Requirement
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ What This Service Covers</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Compliance You Cannot Afford to Skip</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            A fire water tank that does not perform in an emergency is not just a compliance failure — it is a catastrophic risk. PC Water Infrastructure designs, installs, and maintains fire water storage systems to AS2304, with full documentation for insurance, regulatory, and building compliance purposes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work alongside fire engineers, building certifiers, and facility managers to ensure your system is designed to the correct flow rates and storage volumes — and remains compliant through ongoing AS1851 inspection and maintenance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'AS2304 compliant design',
                'Flow rate calculations',
                'Volume determination support',
                'Pump system integration',
                'Pipework coordination',
                'AS1851 annual inspections',
                'Compliance documentation',
                'Insurance-ready reporting',
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

      {/* Standards callout */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Applicable Standards</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { code: 'AS2304', label: 'Water Storage Tanks for Fire Protection' },
              { code: 'AS1851', label: 'Fire System Maintenance' },
              { code: 'BCA/NCC', label: 'Building Code of Australia' },
            ].map((std) => (
              <div key={std.code} className="bg-white border border-gray-200 rounded-xl px-6 py-4 text-center shadow-sm">
                <p className="text-[#3e91ce] font-black text-lg">{std.code}</p>
                <p className="text-gray-500 text-sm mt-1">{std.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#30505b] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">Our Fire Water Delivery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Design Consultation', desc: 'Review fire engineer report, determine storage requirements, and design to AS2304.' },
              { step: '02', label: 'Installation', desc: 'Tank erection, foundation, pipework, and pump system integration.' },
              { step: '03', label: 'Commissioning', desc: 'System testing, flow rate verification, and compliance documentation.' },
              { step: '04', label: 'Ongoing AS1851', desc: 'Annual inspection and maintenance to keep your system compliant and operational.' },
            ].map((step) => (
              <div key={step.step} className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
                <p className="text-[#3e91ce] font-black text-2xl mb-3">{step.step}</p>
                <h3 className="font-bold text-white mb-2">{step.label}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Commercial & Fire Compliance', 'Industrial Facilities', 'Mining & Resources', 'Government & Councils'].map((ind) => (
              <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Fire Water Tanks — FAQs" />
      <CTABanner heading="IS YOUR FIRE WATER SYSTEM COMPLIANT?" subheading="Contact us for a compliance review and expert fire water storage consultation." primaryCTA={{ label: 'Request a Compliance Review', href: '/contact' }} secondaryCTA={{ label: 'Download Fire Water Guide', href: '#' }} />
    </>
  )
}
