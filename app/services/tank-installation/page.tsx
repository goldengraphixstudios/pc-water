import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Professional Tank Installation',
  description:
    'End-to-end tank installation with certified crews, national reach, and rigorous safety standards. Site preparation, structural erection, commissioning, JSA/SWMS compliance.',
}

const faqs = [
  { question: 'Do you manage the full installation process?', answer: 'Yes. Pacific Water Tanks manages everything from site preparation and foundation work through to structural erection, commissioning, and handover — providing a single point of accountability for your project.' },
  { question: 'How do you manage safety on installation sites?', answer: 'All installations operate under comprehensive JSA (Job Safety Analysis) and SWMS (Safe Work Method Statements). Our zero injury record reflects embedded daily toolbox talks, strict PPE compliance, and continuous safety monitoring.' },
  { question: 'Can you install in remote locations?', answer: 'Yes. Remote installation is a core capability. We coordinate FIFO crew deployment, remote logistics, and site-specific safety planning for installations across Queensland, Western Australia, Northern Territory, and beyond.' },
  { question: 'Do you provide project scheduling?', answer: 'All installation projects are managed with Gantt-based scheduling that provides clients with clear milestones, dependencies, and progress visibility throughout the project.' },
  { question: 'What types of tanks do you install?', answer: 'We install steel tanks, concrete tanks, modular tank systems, and all associated civil and mechanical works — including pump systems, pipe connections, and access infrastructure.' },
]

export default function TankInstallationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Professional Tank Installation</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            End-to-end tank installation with certified crews, national reach, and rigorous safety standards — from site preparation to commissioning.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Your Installation
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ What We Deliver</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Turnkey Installation, National Reach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pacific Water Tanks provides end-to-end installation services across Australia. Our certified installation crews bring the expertise, equipment, and safety systems needed to deliver complex tank projects on schedule and within compliance requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are installing a single fire water tank on a commercial site or multiple tanks as part of a major infrastructure program, we provide the same standard of professional delivery — with Gantt-based scheduling and single-point project accountability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Site preparation & earthworks',
                'Foundation construction',
                'Structural tank erection',
                'Mechanical & pipe connections',
                'Commissioning & testing',
                'JSA/SWMS compliance',
                'Gantt-based scheduling',
                'Handover documentation',
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
          <h2 className="text-3xl font-black text-[#30505b] text-center mb-12">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', label: 'Pre-Installation Planning', desc: 'Site assessment, logistics planning, JSA/SWMS development, and scheduling.' },
              { step: '02', label: 'Site Preparation', desc: 'Clearing, earthworks, access track construction, and foundation preparation.' },
              { step: '03', label: 'Foundation Construction', desc: 'Engineered concrete foundation poured to specification with quality testing.' },
              { step: '04', label: 'Tank Erection', desc: 'Structural assembly and erection by certified installation crews with all safety controls in place.' },
              { step: '05', label: 'Mechanical Connections', desc: 'Pipework, pump systems, fittings, and instrumentation installed and tested.' },
              { step: '06', label: 'Commissioning & Handover', desc: 'Final testing, compliance verification, documentation package, and formal handover.' },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-[#3e91ce] font-black text-2xl mb-3">{step.step}</p>
                <h3 className="font-bold text-[#30505b] mb-2">{step.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
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

      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#30505b] mb-8 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ProjectCard title="Borumba Hydro Scheme" sector="Hydro Energy / Government" location="Borumba Dam, QLD" scope="Full installation of 2 × 521KL tanks" href="/projects/borumba-hydro" />
            <ProjectCard title="Hobart Nyrstar Industrial" sector="Refurbish" location="Hobart, Tasmania" scope="Industrial tank refurbishment in a corrosion-critical environment" href="/projects/hobart-nyrstar" />
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Tank Installation — FAQs" />
      <CTABanner heading="READY TO DISCUSS YOUR INSTALLATION?" subheading="Contact us to discuss your project scope, timeline, and site requirements." primaryCTA={{ label: 'Discuss a Project', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '#' }} />
    </>
  )
}
