import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'RPVC Liner Systems',
  description:
    'High-performance RPVC liner installation to protect tanks from corrosion, extend asset life by 20+ years, and meet potable water standards (AS4020). Expert RPVC welding specialists.',
}

const faqs = [
  { question: 'What is an RPVC liner?', answer: 'RPVC (Rigid PVC) liner is a thick, welded PVC membrane installed inside a water storage tank to protect the structural shell from corrosion and to meet potable water compliance requirements under AS4020. It is welded in place by specialist welders and provides a fully sealed internal surface.' },
  { question: 'How long does an RPVC liner last?', answer: 'A correctly installed and maintained RPVC liner will typically extend the service life of a tank by 20-25 years or more. The liner protects the structural steel or concrete from contact with stored water, dramatically reducing corrosion rates.' },
  { question: 'Is RPVC liner suitable for potable water?', answer: 'Yes. RPVC liner material used by Pacific Water Tanks is AS4020 compliant — meaning it is suitable for contact with potable (drinking) water. This is an important compliance requirement for many water storage applications.' },
  { question: 'Can a liner be installed in a tank that is still serviceable?', answer: 'Yes. RPVC liners can be installed as a proactive measure to prevent corrosion in tanks that are currently serviceable. This is often more cost-effective than waiting until significant corrosion has occurred and the tank requires major structural remediation.' },
  { question: 'What is involved in the liner installation process?', answer: 'The tank is taken offline, cleaned, and prepared. The RPVC membrane panels are fabricated to size, installed, and welded in place by specialist welders. The liner is then tested for integrity before the tank is returned to service. The full process typically takes a few days depending on tank size.' },
]

export default function RPVCLinerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">RPVC Liner Systems</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            High-performance RPVC liner installation to protect tanks from corrosion, extend asset life by 20+ years, and restore potable water compliance — at a fraction of replacement cost.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Request a Liner Assessment
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ The RPVC Advantage</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Extend, Don't Replace</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Replacing an aging water tank is expensive and disruptive. In most cases, a correctly installed RPVC liner can restore the tank to full compliance, prevent further corrosion, and extend operational life by two decades or more — at a fraction of replacement cost.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pacific Water Tanks is a specialist RPVC liner contractor with expert welders trained in membrane preparation, installation, and integrity testing. Every liner is installed to AS4020 potable water standards and tested before the tank returns to service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'RPVC welding specialists',
                'AS4020 potable water compliant',
                'Extends tank life 20+ years',
                'Corrosion barrier protection',
                'Membrane integrity testing',
                'Steel & concrete tank capability',
                'Minimal downtime installation',
                'Full compliance documentation',
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

      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#30505b] mb-8 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ProjectCard title="Albury Reservoir Reline" sector="Municipal / Government" location="Albury, NSW" scope="600kL reservoir RPVC reline & refurbishment" href="/projects/albury-reservoir" />
            <ProjectCard title="Clarence Road Liner Replacement" sector="Commercial" location="107 Clarence Road" scope="2 × tank RPVC liner replacement" href="/projects/clarence-road-liner" />
          </div>
        </div>
      </section>

      <section className="bg-[#30505b] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">RPVC Liner Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Inspection & Assessment', desc: 'Internal inspection to assess condition, determine liner specification, and plan installation.' },
              { step: '02', label: 'Tank Preparation', desc: 'Surface cleaning, surface preparation, and fitting modifications to accept the liner membrane.' },
              { step: '03', label: 'Liner Installation', desc: 'Expert RPVC panel fabrication, installation, and specialist welding by certified liner welders.' },
              { step: '04', label: 'Testing & Handover', desc: 'Liner integrity testing, compliance documentation, and return of tank to service.' },
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
            {['Government & Councils', 'Mining & Resources', 'Industrial Facilities', 'Commercial & Fire Compliance', 'Remote & Regional Communities'].map((ind) => (
              <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="RPVC Liner Systems — FAQs" />
      <CTABanner heading="RESTORE YOUR TANK. EXTEND ITS LIFE." subheading="Get an RPVC liner assessment and find out if relining is right for your asset." primaryCTA={{ label: 'Request an Assessment', href: '/contact' }} secondaryCTA={{ label: 'Download Tank Upgrade Guide', href: '#' }} />
    </>
  )
}
