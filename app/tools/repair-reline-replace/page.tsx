import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import AssessmentTool from '@/components/tools/AssessmentTool'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: 'Repair, Reline or Replace? Tank Tool',
  description:
    'Free decision tool for aging water tanks — answer questions on condition, age, and corrosion to find out whether to repair, reline with RPVC, or replace.',
  keywords: [
    'water tank relining australia',
    'replace or reline water tank',
    'corroded water tank repair',
    'aging tank refurbishment',
    'RPVC tank relining',
    'repair vs replace water tank',
    'water tank refurbishment decision',
  ],
  alternates: { canonical: '/tools/repair-reline-replace' },
  openGraph: {
    title: 'Repair, Reline or Replace? Tank Tool',
    description:
      'Answer a few questions about your aging tank and get a practical guidance path — repair, reline, replace, or inspect first.',
    url: `${siteUrl}/tools/repair-reline-replace`,
    type: 'website',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image' as const, images: ['/hero.png'] },
}

const faqs = [
  {
    question: 'When should a water tank be relined instead of replaced?',
    answer:
      'Relining with an RPVC liner system is usually the best option when the tank’s structure (shell, roof, supports) is still serviceable but the internal barrier has deteriorated or failed. It restores a watertight, compliant interior at a fraction of the cost and downtime of full replacement.',
  },
  {
    question: 'When is replacement the better choice?',
    answer:
      'Replacement tends to be the lower-risk choice once the structure itself is compromised — major structural deterioration or severe corrosion of the shell. At that point, repairs and relining often defer rather than solve the problem and can cost more over the asset’s life.',
  },
  {
    question: 'Why does the tool sometimes recommend an inspection first?',
    answer:
      'Internal condition — corrosion, liner integrity, and structural soundness — is the biggest driver of cost and cannot be judged reliably from the outside. If that information is unknown, a scoping inspection is recommended before committing to repair, reline, or replacement.',
  },
  {
    question: 'Can you inspect a tank without taking it out of service?',
    answer:
      'Often, yes. PC Water Infrastructure uses ROV and UAV inspection methods that can assess condition with minimal disruption and frequently without full dewatering, which is valuable where downtime must be minimised.',
  },
  {
    question: 'Is this decision tool a formal engineering assessment?',
    answer:
      'No. It provides general guidance based on your answers to help you understand likely options. A formal engineering assessment or condition inspection is required to confirm the right path before works are scoped.',
  },
]

const audience = [
  'Councils and utilities',
  'Commercial asset owners',
  'Industrial sites',
  'Operations and maintenance teams',
  'Procurement teams scoping major works',
  'Facility managers',
]

const paths = [
  { label: 'Inspect first', desc: 'When internal condition is unknown, a scoping inspection defines the real options.' },
  { label: 'Targeted repair', desc: 'When structure and barrier are broadly intact and issues are localised.' },
  { label: 'RPVC relining', desc: 'When the shell is serviceable but the internal barrier has failed.' },
  { label: 'Replacement', desc: 'When major structural deterioration or severe corrosion make repair uneconomic.' },
]

export default function RepairRelineReplacePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Tools', url: `${siteUrl}/tools` },
          { name: 'Repair vs Reline vs Replace', url: `${siteUrl}/tools/repair-reline-replace` },
        ]}
      />

      <section className="relative pt-40 pb-24 overflow-hidden bg-[#0d1b2a]">
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3e91ce]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Free Tool</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Repair, Reline or Replace?</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Aging or deteriorating tank? Answer a few questions about its use, age, and condition and get a
            practical guidance path — repair, reline with RPVC, replace, or inspect first — with the right
            next step for your asset.
          </p>
          <Link
            href="#assessment"
            className="inline-flex items-center gap-2 bg-[#2a72ad] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#246397] transition-colors"
          >
            Get My Result
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      <AssessmentTool slug="repair-reline-replace" />

      {/* The four paths */}
      <section className="relative py-20 overflow-hidden bg-[#30505b]">
        <div className="dot-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">Four Possible Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paths.map((p, i) => (
              <div key={p.label} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <p className="text-[#3e91ce] font-black text-2xl mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-bold text-white mb-2">{p.label}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Who this is for</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#30505b] mb-8">
            For the teams making the call on aging tank assets
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {audience.map((a) => (
              <span key={a} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'RPVC Liner Systems', description: 'Restore an aging tank with a watertight, compliant internal barrier — without full replacement.', href: '/services/rpvc-liner-systems' },
            { title: 'Tank Inspection Technology', description: 'Confirm internal condition with ROV and UAV methods before you commit to works.', href: '/services/tank-inspection-technology' },
            { title: 'Tank Compliance Checker', description: 'Not sure if your tank is compliant? Check your likely compliance risk in a minute.', href: '/tools/tank-compliance-checker' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:border-[#3e91ce] transition-colors">
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Next Step</p>
              <h2 className="text-xl font-black text-[#30505b] mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Repair vs Reline vs Replace — FAQs" />
      <CTABanner
        heading="READY TO CONFIRM THE RIGHT PATH?"
        subheading="Request a tank assessment and PC Water Infrastructure will validate the recommendation and scope the works."
        primaryCTA={{ label: 'Request an Assessment', href: '/contact' }}
        secondaryCTA={{ label: 'Explore RPVC Relining', href: '/services/rpvc-liner-systems' }}
      />
    </>
  )
}
