import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Remote Area Project Delivery',
  description:
    'Specialist water infrastructure delivery for remote and regional Australia. FIFO crews, Indigenous community engagement, harsh environment materials, and remote logistics expertise.',
}

const faqs = [
  { question: 'How far into remote areas can you deliver?', answer: 'We have delivered to some of Australia\'s most isolated locations — including Doomadgee in remote Queensland and other sites requiring fly-in/fly-out crews and chartered freight. If there is a road or an airstrip, we can deliver.' },
  { question: 'Do you have experience with Indigenous community projects?', answer: 'Yes. The Doomadgee 2ML Reservoir is an example of our work delivering water infrastructure to a remote Indigenous community. We approach these projects with cultural sensitivity, community engagement, and a genuine commitment to improving access to safe water.' },
  { question: 'What special materials do you use for harsh environments?', answer: 'Remote and harsh environments often require specific material selection — corrosion-resistant steel grades, UV-stable coatings, and materials rated for extreme temperature ranges. We specify materials appropriate to the environmental conditions of each project.' },
  { question: 'How do you manage logistics for remote sites?', answer: 'Remote logistics planning is integrated into project planning from day one. We coordinate freight, equipment, crew accommodation, site access, and supply chain management — including contingency planning for weather and access delays.' },
  { question: 'Can you work with local subcontractors in remote communities?', answer: 'Where possible, we engage local subcontractors and community members in project delivery — providing training, employment opportunities, and community benefit alongside the infrastructure outcome.' },
]

export default function RemoteAreaDeliveryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Remote Area Project Delivery</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Specialist water infrastructure delivery for remote and regional Australia — including Indigenous communities, mining operations, and government projects in the most challenging locations.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Your Remote Project
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Our Remote Capability</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Where Others Stop, We Start</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Remote project delivery is not a service we offer reluctantly — it is a capability we have built deliberately over many years. From Indigenous community water supply projects to remote mining operations, Pacific Water Tanks has the systems, experience, and crew capability to deliver where others cannot.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our remote delivery expertise covers logistics, crew deployment, materials specification for harsh environments, Indigenous community engagement, and contingency planning for the unexpected challenges that remote projects always bring.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Fly-in/fly-out crew deployment',
                'Remote logistics coordination',
                'Indigenous community engagement',
                'Harsh environment materials',
                'Site access planning',
                'Supply chain management',
                'Community employment support',
                'Contingency & risk planning',
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
            <ProjectCard title="Doomadgee 2ML Reservoir" sector="Remote Community / Government" location="Doomadgee, QLD (Remote)" scope="2ML ground-level reservoir — remote community water storage" href="/projects/doomadgee-wtp" />
            <ProjectCard title="Borumba Hydro Scheme" sector="Hydro Energy / Government" location="Borumba Dam, QLD" scope="Remote site dual-purpose tank system" href="/projects/borumba-hydro" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Remote & Regional Communities', 'Mining & Resources', 'Government & Councils'].map((ind) => (
              <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Remote Delivery — FAQs" />
      <CTABanner heading="GOT A REMOTE PROJECT IN MIND?" subheading="Tell us your location, scope, and timeline. We have been there before." primaryCTA={{ label: 'Discuss Your Remote Project', href: '/contact' }} secondaryCTA={{ label: 'Download Remote Project Guide', href: '#' }} variant="navy" />
    </>
  )
}
