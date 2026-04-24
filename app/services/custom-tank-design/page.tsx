import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Custom Tank Design & Engineering',
  description:
    'Purpose-built water storage tanks engineered to AS2304 & AS4020 for any capacity, site condition, or application. RPEQ-certified engineers, structural engineering, civil integration.',
}

const faqs = [
  { question: 'What tank sizes can you design?', answer: 'We design tanks from 10KL up to multi-megalitre capacity. Every tank is engineered to the specific site conditions, capacity requirements, and compliance standards for the application.' },
  { question: 'Are your designs RPEQ certified?', answer: 'Yes. All structural designs are certified by RPEQ (Registered Professional Engineer Queensland) and meet AS2304 and relevant Australian standards for the project location.' },
  { question: 'Can you design dual-purpose tanks (e.g. potable and effluent)?', answer: 'Yes. We have delivered dual-purpose tank systems including the Borumba Hydro project which required both potable and effluent storage in a single engineered system.' },
  { question: 'What materials do you use?', answer: 'Material selection depends on application — steel, concrete, and composite materials are all options. We select materials based on the stored fluid, environmental conditions, and compliance requirements including AS4020 for potable water.' },
  { question: 'Can you design for remote sites with difficult access?', answer: 'Remote site design is a specialisation for us. We account for transport constraints, site access, modular design for staged delivery, and materials suited to harsh environments when designing for remote locations.' },
]

export default function CustomTankDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Custom Tank Design<br />& Engineering
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Purpose-built water storage systems engineered to Australian standards (AS2304, AS4020) for any capacity, site condition, or application.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* What this service covers */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Service Overview</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">What This Service Covers</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            Every PC Water Infrastructure project begins with engineering — not with a product catalogue. Our custom tank design service delivers purpose-built solutions that match your exact site, capacity, regulatory, and operational requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From initial concept through to construction-ready documentation, our RPEQ-certified engineers manage every aspect of the design process — ensuring your tank performs reliably for decades.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Structural engineering & analysis',
                'Civil integration planning',
                'Material selection & specification',
                'Modular & staged design options',
                'RPEQ-certified documentation',
                'AS2304 & AS4020 compliance',
                'Dual-purpose tank capability',
                'Remote site design expertise',
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

      {/* Common triggers */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#30505b]">When Do You Need Custom Tank Design?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'New Infrastructure Projects', desc: 'Greenfield projects requiring engineered water storage as part of a broader infrastructure or construction program.' },
              { title: 'Non-Standard Site Conditions', desc: 'Sites with challenging geotechnical conditions, steep terrain, flood risk, or extreme environmental factors requiring engineered solutions.' },
              { title: 'Compliance-Critical Applications', desc: 'Potable water, fire water, or process water storage where regulatory compliance and certification is non-negotiable.' },
              { title: 'Capacity Upgrade Requirements', desc: 'Existing infrastructure that no longer meets operational demands and requires a new purpose-designed storage system.' },
              { title: 'Remote & Difficult Access Sites', desc: 'Locations where modular design, materials specification, and transport planning are critical to project success.' },
              { title: 'Government & Council Projects', desc: 'Public infrastructure requiring RPEQ certification, full compliance documentation, and tender-ready engineering packages.' },
            ].map((trigger) => (
              <div key={trigger.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-0.5 bg-[#3e91ce] mb-4" />
                <h3 className="font-bold text-[#30505b] mb-2">{trigger.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{trigger.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery scope */}
      <section className="bg-[#30505b] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Our Design Delivery Scope</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Brief & Site Assessment', desc: 'Understand your requirements, assess site conditions, and define design parameters.' },
              { step: '02', label: 'Concept Design', desc: 'Develop concept options including capacity, configuration, and material recommendations.' },
              { step: '03', label: 'Detailed Engineering', desc: 'RPEQ-certified structural and civil engineering, specifications, and compliance documentation.' },
              { step: '04', label: 'Construction Documentation', desc: 'Tender-ready construction drawings, specifications, and project management support.' },
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

      {/* Industries */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Industries We Serve With This Service</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Mining & Resources', 'Government & Councils', 'Industrial Facilities', 'Remote & Regional Communities'].map((ind) => (
              <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#30505b] mb-8 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ProjectCard
              title="Borumba Hydro Scheme"
              sector="Hydro Energy / Government"
              location="Borumba Dam, QLD"
              scope="2 × 521KL tanks — custom dual-purpose design"
              href="/projects/borumba-hydro"
            />
            <ProjectCard
              title="Doomadgee 2ML Reservoir"
              sector="Remote Community / Government"
              location="Doomadgee, QLD"
              scope="2ML ground-level reservoir custom design & delivery"
              href="/projects/doomadgee-wtp"
            />
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Custom Tank Design — FAQs" />
      <CTABanner
        heading="READY TO ENGINEER YOUR WATER STORAGE SOLUTION?"
        subheading="Contact our team to discuss your project requirements and receive a tailored design proposal."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '#' }}
      />
    </>
  )
}
