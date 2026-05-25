import type { Metadata } from 'next'
import Link from 'next/link'
import AppImage from '@/components/AppImage'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import SectionProjects from '@/components/SectionProjects'

export const metadata: Metadata = {
  title: 'Project Managed Water Infrastructure',
  description:
    'End-to-end project managed water infrastructure delivery across design, procurement, civil integration, commissioning, and handover documentation.',
  keywords: [
    'project managed water infrastructure',
    'water infrastructure project management',
    'end to end water infrastructure delivery',
    'water infrastructure contractor australia',
    'turnkey water infrastructure',
  ],
  alternates: {
    canonical: '/services/project-managed-water-infrastructure',
  },
}

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

const faqs = [
  {
    question: 'What does project managed water infrastructure cover?',
    answer:
      'It covers the full delivery chain around a water infrastructure asset: planning, design coordination, procurement, civil and structural interface management, construction sequencing, commissioning, documentation, and handover.',
  },
  {
    question: 'Do you manage subcontractors and delivery interfaces?',
    answer:
      'Yes. A core value of this service is reducing fragmentation between suppliers, civil contractors, installers, and asset owners by giving the project one accountable delivery lead.',
  },
  {
    question: 'Is this suitable for councils and remote projects?',
    answer:
      'Yes. This service is particularly relevant where compliance, documentation, logistics, community outcomes, or remote delivery complexity make coordination risk a major concern.',
  },
  {
    question: 'Can you manage upgrades as well as greenfield works?',
    answer:
      'Yes. Project managed delivery applies to both new infrastructure and upgrade programs where existing assets, operational continuity, and staged delivery all need to be considered.',
  },
]

export default function ProjectManagedWaterInfrastructurePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Project Managed Water Infrastructure', url: `${siteUrl}/services/project-managed-water-infrastructure` },
        ]}
      />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <AppImage
          src="/water/water-15.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/78" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Project Managed Water Infrastructure
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            One accountable delivery partner across planning, design coordination, procurement,
            construction, commissioning, and handover.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Service Overview</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Reduce Interface Risk From Day One</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complex water infrastructure projects fail when scope is split across too many parties
                without clear ownership. This service is built to solve that. PC Water Infrastructure
                coordinates the moving parts so design intent, compliance, construction sequencing, and
                handover stay aligned.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is a strong fit for councils, industrial operators, remote programs, and multi-discipline
                projects where timelines, documentation, and accountability matter as much as the physical asset.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Project planning & scoping',
                'Design coordination',
                'Procurement sequencing',
                'Civil & structural interfaces',
                'Construction oversight',
                'Commissioning coordination',
                'Handover documentation',
                'Single-point accountability',
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
          <h2 className="text-3xl font-black text-[#30505b] text-center mb-12">How The Delivery Model Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Define Scope', desc: 'Clarify project objectives, constraints, stakeholders, and performance requirements.' },
              { step: '02', label: 'Coordinate Delivery', desc: 'Align design, procurement, civil, structural, mechanical, and installation streams.' },
              { step: '03', label: 'Control Execution', desc: 'Manage sequencing, milestones, quality, compliance, and contractor interfaces.' },
              { step: '04', label: 'Commission & Handover', desc: 'Complete testing, documentation, handover, and practical closeout support.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-[#3e91ce] font-black text-2xl mb-3">{item.step}</p>
                <h3 className="font-bold text-[#30505b] mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Best Fit Sectors</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government & Councils', 'Mining & Resources', 'Industrial Facilities', 'Remote & Regional Communities'].map((sector) => (
              <span key={sector} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionProjects heading="Featured Project" slugs={['borumba-hydro']} bgColor="bg-[#F4F6F8]" />

      <FAQBlock faqs={faqs} heading="Project Managed Water Infrastructure - FAQs" />
      <CTABanner
        heading="NEED ONE ACCOUNTABLE DELIVERY PARTNER?"
        subheading="Tell us your scope, timeline, and site constraints and we can help map the right delivery approach."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Resources', href: '/resources' }}
        variant="navy"
      />
    </>
  )
}
