import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Foundation & Civil Integration',
  description:
    'Engineered concrete foundations and civil integration for tanks of all sizes. Geotechnical assessment, civil contractor coordination, and structural compliance for any site.',
}

const faqs = [
  { question: 'Why is an engineered foundation so important?', answer: 'Tank foundations must be designed to handle the full static load of a filled tank — which can run to hundreds of tonnes. An under-engineered foundation leads to differential settlement, structural cracking, and in extreme cases, catastrophic failure. All PC Water Infrastructure foundations are engineered to site-specific geotechnical conditions.' },
  { question: 'Do you conduct geotechnical assessments?', answer: 'We coordinate geotechnical investigations on behalf of clients and use the results to inform our foundation design. This ensures the foundation is appropriate for actual soil conditions, not assumptions.' },
  { question: 'Can you coordinate with existing civil contractors?', answer: 'Yes. We regularly work alongside existing civil contractors on construction projects, providing specialist tank foundation and civil integration scope as a subcontractor or as the lead civil manager.' },
  { question: 'What are your concrete specifications?', answer: 'Concrete specifications are project-specific and determined by structural loads, site conditions, and applicable Australian standards. All concrete work is subject to quality testing and documented compliance verification.' },
]

export default function FoundationCivilPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Foundation & Civil Integration</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Engineered concrete foundations and civil integration for tanks of all sizes, site conditions, and structural requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Your Project
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Service Overview</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">The Foundation Matters As Much As The Tank</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            A tank is only as good as what it sits on. PC Water Infrastructure provides specialist foundation engineering and civil integration services — ensuring every tank is supported by an engineered, compliant foundation designed for the actual site conditions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our civil integration service also extends to coordinating tanks with surrounding infrastructure — stormwater, pipework, access roads, and earthworks — providing a seamless delivery experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Geotechnical assessment coordination',
                'Engineered concrete foundations',
                'Civil contractor coordination',
                'Earthworks management',
                'Structural compliance documentation',
                'Access infrastructure',
                'Drainage integration',
                'Quality testing & certification',
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

      <section className="bg-[#30505b] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">Civil Integration Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Site Investigation', desc: 'Geotechnical investigation, survey, and site assessment to establish design parameters.' },
              { step: '02', label: 'Foundation Design', desc: 'Engineered foundation design certified by RPEQ, appropriate for site-specific soil conditions and tank loads.' },
              { step: '03', label: 'Civil Construction', desc: 'Earthworks, formwork, reinforcement, and concrete pour with quality testing and documentation.' },
              { step: '04', label: 'Integration & Handover', desc: 'Integration of tank with surrounding civil infrastructure, final inspection, and compliance certification.' },
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
            {['Mining & Resources', 'Government & Councils', 'Commercial & Fire Compliance'].map((ind) => (
              <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Foundation & Civil Integration — FAQs" />
      <CTABanner heading="BUILD ON SOLID FOUNDATIONS" subheading="Contact us to discuss your foundation engineering and civil integration requirements." primaryCTA={{ label: 'Discuss a Project', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '#' }} variant="navy" />
    </>
  )
}
