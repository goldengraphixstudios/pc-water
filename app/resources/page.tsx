import type { Metadata } from 'next'
import Link from 'next/link'
import AppImage from '@/components/AppImage'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ArticlesGrid from '@/components/ArticlesGrid'
import { getPublicPosts } from '@/lib/cms/queries'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Articles & Insights',
  description:
    'Technical articles on water storage, tank maintenance, fire water compliance, RPVC liners, and remote project delivery across Australia.',
  keywords: [
    'water infrastructure articles',
    'water tank maintenance guide',
    'fire water tank compliance',
    'RPVC liner systems australia',
    'tank inspection insights',
    'water storage engineering',
  ],
  alternates: { canonical: '/resources' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Articles & Insights | PC Water',
    description: 'Technical articles on water storage engineering, compliance, maintenance, and remote project delivery.',
    url: 'https://pcwater.com.au/resources',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },
}

const faqs = [
  {
    question: 'What Australian standards apply to water storage tanks?',
    answer: 'The key standards are AS2304 (water storage tanks for fire protection systems), AS4020 (products in contact with drinking water — relevant for potable storage), and AS1851 (maintenance of fire protection systems and equipment). ISO9001 and ISO14001 apply to quality and environmental management systems.',
  },
  {
    question: 'How do I know if my tank needs relining or replacement?',
    answer: 'A structural condition assessment by a specialist is the starting point. In most cases, if the tank structure is sound, RPVC liner installation is significantly more cost-effective than replacement. Our Tank Upgrade Decision Guide (available free on the Downloads page) provides a practical framework for asset managers navigating this decision.',
  },
  {
    question: 'How often should a water storage tank be inspected?',
    answer: 'At minimum annually for fire water tanks under AS1851. For other tanks, we recommend at least every two years, or more frequently in corrosive environments or for aging assets. ROV inspection technology removes the barrier of dewatering — making regular inspection faster and more affordable.',
  },
  {
    question: 'What is the most common entry point for wildlife into a water tank?',
    answer: 'The overflow drain is by far the most overlooked animal entry point in water storage. An open-ended overflow allows birds, reptiles, and small animals to enter, and unlike inlets, there is no mesh to stop them. A flapper valve is the standard fix — inexpensive compared to the cost of a contamination event.',
  },
  {
    question: 'What is the difference between a fire tank and a regular storage tank?',
    answer: 'Fire water tanks must be specifically designed and installed to AS2304, which sets requirements for structural design, fittings, access, and performance. They also require annual AS1851 inspection and maintenance. Standard storage tanks do not carry these specific compliance requirements, though potable water tanks must comply with AS4020 for materials.',
  },
  {
    question: 'What is an RPVC liner and when is it the right solution?',
    answer: 'A Reinforced PVC (RPVC) liner is a structural lining installed inside an existing tank to stop corrosion progression, restore AS4020 compliance, and extend asset life by 10–20 years. It is the right solution when the tank structure is sound but the internal surface is corroded, compromised, or non-compliant — significantly cheaper than full replacement.',
  },
  {
    question: 'Can water tanks be inspected without emptying them?',
    answer: 'Yes. ROV (Remotely Operated Vehicle) and diver inspection methods allow detailed internal inspection while the tank remains in service and full. This eliminates the cost and disruption of dewatering, and is now the preferred approach for large tanks, reservoirs, and assets that cannot be taken offline.',
  },
  {
    question: 'How does vandalism affect water tank safety?',
    answer: 'Vandalism to hatches, locks, and vent screens creates direct contamination pathways. A forced hatch or broken lock is not just a physical damage issue — it leaves the tank open to foreign object entry, deliberate contamination, and ongoing weather ingress. These access events often go unreported and unrepaired for months.',
  },
]

const downloadTeasers = [
  {
    slug: 'tank-maintenance-checklist',
    title: 'Tank Maintenance Checklist',
    desc: 'Practical asset owner checklist for assessing tank condition and scheduling maintenance.',
    tag: 'Maintenance',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    slug: 'tank-upgrade-decision-guide',
    title: 'Tank Upgrade Decision Guide',
    desc: 'Repair, reline, or replace? A practical decision framework for asset managers.',
    tag: 'Asset Management',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: 'fire-water-compliance-guide',
    title: 'Fire Water Compliance Guide',
    desc: 'AS2304 and AS1851 requirements — what engineers and operators need to know.',
    tag: 'Compliance',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    slug: 'wtp-operator-checklist',
    title: 'WTP Operator Checklist',
    desc: 'Day-to-day operational checklist for water treatment plant operators.',
    tag: 'Operations',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default async function ArticlesPage() {
  const articles = await getPublicPosts()

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden min-h-[520px] flex items-end">
        <AppImage
          src="/heroes/resources.jpg"
          alt="Water storage engineering articles and technical insights"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/60 via-[#0d1b2a]/70 to-[#0d1b2a]/85" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Articles & Insights</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 leading-none">
            ENGINEERING KNOWLEDGE<br />
            <span className="text-[#3e91ce]">WRITTEN DOWN.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Practical technical articles on water storage, tank maintenance, compliance, and infrastructure delivery — written by engineers for asset owners and operators.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm">
              {articles.length} articles
            </span>
            <Link
              href="/resources/downloads"
              className="bg-[#3e91ce]/20 border border-[#3e91ce]/40 text-[#7fc2f0] text-sm px-4 py-2 rounded-full backdrop-blur-sm hover:bg-[#3e91ce]/30 transition-colors"
            >
              Looking for free guides? →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-[#0d1b2a] py-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: articles.length.toString(), label: 'Technical Articles' },
              { stat: '8+', label: 'Free Downloads' },
              { stat: 'AS2304', label: 'Compliance Covered' },
              { stat: 'Free', label: 'Always' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-2xl font-black text-[#3e91ce]">{stat}</p>
                <p className="text-gray-400 text-xs mt-1 font-medium uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles grid with filter ── */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Browse</p>
            <h2 className="text-3xl font-black text-[#30505b]">ALL ARTICLES</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
              Filter by topic or scroll through the full library. Every article is written to be actionable — not marketing.
            </p>
          </div>
          <ArticlesGrid articles={articles} />
        </div>
      </section>

      {/* ── Free Downloads teaser ── */}
      <section className="bg-[#0d1b2a] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Free Downloads</p>
              <h2 className="text-3xl font-black text-white">TAKE SOMETHING WITH YOU</h2>
              <p className="text-gray-400 mt-3 max-w-xl leading-relaxed">
                Checklists, compliance guides, and decision frameworks — free to download. Enter your email to access any resource instantly.
              </p>
            </div>
            <Link
              href="/resources/downloads"
              className="flex-shrink-0 flex items-center gap-2 bg-[#2a72ad] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#246397] transition-colors"
            >
              View All Downloads
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {downloadTeasers.map((item) => (
              <Link
                key={item.slug}
                href="/resources/downloads"
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#3e91ce]/40 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#3e91ce]/20 rounded-xl flex items-center justify-center text-[#3e91ce] mb-4 group-hover:bg-[#3e91ce]/30 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[#3e91ce] text-xs font-semibold mb-2 block">{item.tag}</span>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug group-hover:text-[#7fc2f0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-1 text-[#3e91ce] text-xs font-semibold mt-4 group-hover:gap-2 transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Free
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQBlock faqs={faqs} heading="COMMON QUESTIONS" />

      {/* ── CTA ── */}
      <CTABanner
        heading="HAVE A SPECIFIC TECHNICAL QUESTION?"
        subheading="Our team responds to all technical and project enquiries within one business day."
        primaryCTA={{ label: 'Contact Our Team', href: '/contact' }}
        secondaryCTA={{ label: 'Free Downloads', href: '/resources/downloads' }}
        variant="navy"
      />
    </>
  )
}
