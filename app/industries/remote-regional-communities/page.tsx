import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import SectionProjects from '@/components/SectionProjects'

export const metadata: Metadata = {
  title: 'Water Storage for Remote & Regional Communities',
  description:
    'Safe water access for remote and Indigenous communities. Specialist logistics, FIFO delivery, cultural sensitivity, and community engagement for remote water infrastructure.',
}

const faqs = [
  { question: 'Do you have experience delivering to Indigenous communities?', answer: 'Yes. The Doomadgee 2ML Reservoir is one example of our work delivering critical water infrastructure to a remote Indigenous community. We approach these projects with cultural sensitivity, genuine community engagement, and a commitment to outcomes that serve the community well beyond project completion.' },
  { question: 'What is your approach to cultural sensitivity in community projects?', answer: 'We respect Traditional Custodian rights and community protocols in all remote community projects. This includes engaging with community elders and representatives early in the project, supporting local employment where possible, and operating in a way that respects the cultural significance of country.' },
  { question: 'How do you handle environmental sensitivity in remote areas?', answer: 'Remote areas often involve significant environmental sensitivity — wetlands, protected species, and Traditional Custodian country. We manage environmental risks through early assessment, appropriate material selection, and construction methods designed to minimise ground disturbance and environmental impact.' },
  { question: 'Can you train local community members in tank maintenance?', answer: 'Yes. Where projects support it, we provide basic training to local community members in routine tank inspection and maintenance — supporting long-term water security and local capability.' },
]

export default function RemoteRegionalCommunitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Industries</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Water Storage for Remote & Regional Communities</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Safe, reliable water access for remote and Indigenous communities — delivered with specialist logistics, cultural sensitivity, and genuine care for community outcomes.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Your Community Project
          </Link>
        </div>
      </section>

      {/* Indigenous acknowledgement banner */}
      <section className="bg-[#30505b] py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-200 text-sm leading-relaxed">
            PC Water Infrastructure acknowledges the Traditional Custodians of the lands on which we work. We are committed to delivering water infrastructure that serves remote and Indigenous communities with respect, dignity, and lasting impact.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Community Challenges</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">What Remote Communities Need</h2>
              <div className="space-y-4">
                {[
                  { title: 'Access & Logistics', desc: 'Remote communities may be hundreds of kilometres from the nearest road, requiring chartered freight, FIFO crews, and careful advance logistics planning.' },
                  { title: 'Reliability Over Longevity', desc: 'Remote communities cannot afford water system failures. Infrastructure must be designed for decades of reliable service with minimal maintenance requirements.' },
                  { title: 'Cultural Sensitivity', desc: 'Community projects must be delivered in partnership with community elders and representatives — not imposed on communities without genuine engagement.' },
                  { title: 'Environmental Responsibility', desc: 'Remote and Indigenous land often carries significant environmental and cultural value. Project delivery must minimise environmental impact and respect country.' },
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
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Our Remote Community Capability</h2>
              <div className="space-y-3">
                {[
                  { service: 'Remote Area Project Delivery', href: '/services/remote-area-delivery' },
                  { service: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
                  { service: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                  { service: 'RPVC Liners', href: '/services/rpvc-liner-systems' },
                  { service: 'Foundation & Civil Integration', href: '/services/foundation-civil-integration' },
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

      <SectionProjects heading="Community Projects" limit={2} sector="Remote" bgColor="bg-[#F4F6F8]" />

      <FAQBlock faqs={faqs} heading="Remote Communities — FAQs" />
      <CTABanner heading="DELIVERING SAFE WATER WHERE IT MATTERS MOST" subheading="Contact us to discuss your remote community water storage project." primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }} secondaryCTA={{ label: 'Download Remote Project Guide', href: '#' }} />
    </>
  )
}
