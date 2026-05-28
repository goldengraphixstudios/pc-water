import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import AssessmentTool from '@/components/tools/AssessmentTool'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: 'Tank Compliance Checker — Free Water Tank Risk Assessment',
  description:
    'Free online tank compliance checker for Australian water tanks. Answer a few questions on tank type, age, inspection history, and condition to get an instant compliance-risk indication and your recommended next step.',
  keywords: [
    'water tank compliance check',
    'fire water tank compliance australia',
    'AS2304 compliance',
    'AS1851 inspection',
    'tank inspection checklist',
    'water tank compliance risk',
    'is my water tank compliant',
  ],
  alternates: { canonical: '/tools/tank-compliance-checker' },
  openGraph: {
    title: 'Tank Compliance Checker — Free Water Tank Risk Assessment',
    description:
      'Answer a few questions and get a fast indication of your water tank’s likely compliance risk, plus a clear next step.',
    url: `${siteUrl}/tools/tank-compliance-checker`,
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Is the Tank Compliance Checker a legal compliance certificate?',
    answer:
      'No. It is a free guidance tool that gives a fast indication of likely compliance risk based on your answers. It is not a legal compliance certificate or a substitute for a formal inspection. For a definitive position, request a compliance review from PC Water Infrastructure.',
  },
  {
    question: 'Which standards apply to my water tank?',
    answer:
      'Fire water tanks are governed by AS2304 for design and AS1851 for ongoing maintenance and inspection. Potable (drinking) water tanks must meet AS4020 material requirements and ADWG hygiene expectations. The right combination depends on how the tank is used.',
  },
  {
    question: 'How accurate is the result?',
    answer:
      'The result is a rule-based indicator designed to flag uncertainty as risk. It is intentionally conservative. The only way to confirm true compliance and condition is a formal inspection, which can assess internal corrosion, liner integrity, and structural soundness that are not visible from the outside.',
  },
  {
    question: 'What happens after I get my result?',
    answer:
      'You can review your recommended next step, follow the relevant service links, or request a compliance review. If you enter your email, a PC Water specialist can send a tailored summary and help you plan an inspection or remediation.',
  },
  {
    question: 'How often should a water tank be inspected?',
    answer:
      'Fire protection water tanks require annual inspection and maintenance under AS1851. For other tanks, a documented inspection cycle — typically every one to three years depending on age, environment, and use — is the most reliable way to keep compliance risk low.',
  },
]

const audience = [
  'Facility and asset managers',
  'Local councils and water authorities',
  'Commercial property operators',
  'Mining and industrial asset managers',
  'Fire compliance stakeholders',
  'Building owners and operators',
]

const steps = [
  { step: '01', label: 'Answer eight questions', desc: 'Tank type, material, age, inspection history, visible issues, environment, maintenance, and documentation.' },
  { step: '02', label: 'Get an instant risk indication', desc: 'A clear result from low apparent risk through to urgent review recommended.' },
  { step: '03', label: 'See your recommended next step', desc: 'Plain-language guidance plus the most relevant PC Water services.' },
  { step: '04', label: 'Request a review', desc: 'Book an inspection or compliance review, or get a tailored summary by email.' },
]

export default function TankComplianceCheckerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Tools', url: `${siteUrl}/tools` },
          { name: 'Tank Compliance Checker', url: `${siteUrl}/tools/tank-compliance-checker` },
        ]}
      />

      {/* Hero — asset-free gradient */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#0d1b2a]">
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3e91ce]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Free Tool</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Tank Compliance Checker</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Not sure whether your water tank is compliant, at risk, or overdue for review? Answer a few quick
            questions and get a fast, plain-language indication of your likely compliance risk — and exactly
            what to do next.
          </p>
          <Link
            href="#assessment"
            className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#2d7ab8] transition-colors"
          >
            Check Compliance Risk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* The tool */}
      <AssessmentTool slug="tank-compliance-checker" />

      {/* How it works */}
      <section className="relative py-20 overflow-hidden bg-[#30505b]">
        <div className="dot-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">How the Compliance Checker Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <p className="text-[#3e91ce] font-black text-2xl mb-3">{s.step}</p>
                <h3 className="font-bold text-white mb-2">{s.label}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Who this is for</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#30505b] mb-8">
            Built for the people responsible for tank assets
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

      {/* Related next steps */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Tank Inspection Technology', description: 'ROV and UAV inspection methods that assess condition with less disruption — often without dewatering.', href: '/services/tank-inspection-technology' },
            { title: 'Fire Water Tank Solutions', description: 'AS2304 design and AS1851 maintenance for compliant, insurance-ready fire water storage.', href: '/services/fire-water-tanks' },
            { title: 'Repair vs Reline vs Replace tool', description: 'If your tank is aging, find out whether to repair, reline, or replace it.', href: '/tools/repair-reline-replace' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:border-[#3e91ce] transition-colors">
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Next Step</p>
              <h2 className="text-xl font-black text-[#30505b] mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Tank Compliance Checker — FAQs" />
      <CTABanner
        heading="WANT A DEFINITIVE COMPLIANCE POSITION?"
        subheading="A quick check is a starting point. Request a formal inspection and compliance review from PC Water Infrastructure."
        primaryCTA={{ label: 'Request a Compliance Review', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Inspection Technology', href: '/services/tank-inspection-technology' }}
      />
    </>
  )
}
