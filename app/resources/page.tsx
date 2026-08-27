import type { Metadata } from 'next'
import Link from 'next/link'
import AppImage from '@/components/AppImage'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ArticleCard from '@/components/resources/ArticleCard'
import ArticleBrowser from '@/components/resources/ArticleBrowser'
import CategoryGrid from '@/components/resources/CategoryGrid'
import LibrarySidebar from '@/components/resources/LibrarySidebar'
import { getPublicPosts } from '@/lib/cms/queries'
import {
  CATEGORIES,
  FORMATS,
  REGIONS,
  TOPICS,
  countByCategory,
  countByRegion,
  countByTopic,
  enrichArticles,
  getCategoryPreviews,
  getFeatured,
  sortByNewest,
} from '@/lib/cms/taxonomy'

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: 'Articles & Insights',
  description:
    'A structured library of technical articles on water storage, tank maintenance, fire compliance, corrosion, inspection and regional water infrastructure across Australia.',
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
    description: 'A structured technical library on water storage engineering, compliance, maintenance and delivery.',
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
]

export default async function ArticlesPage() {
  const posts = await getPublicPosts()
  const articles = enrichArticles(posts)
  const latest = sortByNewest(articles)
  const featured = getFeatured(articles, 5)
  const [lead, ...secondary] = featured
  const categoryCounts = countByCategory(articles)
  const categoryPreviews = getCategoryPreviews(articles)
  const regionCounts = countByRegion(articles)
  const topicCounts = countByTopic(articles)
  const featuredIds = new Set(featured.map((a) => a.id))
  const sidebarRecent = latest.filter((a) => !featuredIds.has(a.id)).slice(0, 4)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Articles & Insights',
    description:
      'A structured library of technical articles on water storage, tank maintenance, compliance and regional water infrastructure across Australia.',
    url: `${siteUrl}/resources`,
    publisher: { '@type': 'Organization', name: 'PC Water Infrastructure', url: siteUrl },
    hasPart: CATEGORIES.map((c) => ({
      '@type': 'CollectionPage',
      name: c.name,
      description: c.tagline,
      url: `${siteUrl}/resources/category/${c.slug}`,
    })),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: latest.length,
      itemListElement: latest.slice(0, 20).map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}/resources/${a.slug}`,
        name: a.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[460px] items-end overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <AppImage
          src="/heroes/resources.jpg"
          alt="Water storage engineering articles and technical insights"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/60 via-[#0d1b2a]/75 to-[#0d1b2a]/90" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ The Library</p>
          <h1 className="mb-5 text-[2.25rem] font-black leading-none text-white sm:text-5xl md:text-6xl">
            ENGINEERING KNOWLEDGE<br />
            <span className="text-[#3e91ce]">WRITTEN DOWN.</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            {articles.length} technical articles on water storage, compliance, maintenance and infrastructure
            delivery — organised by section, topic and region. Written by engineers, for asset owners and operators.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#library"
              className="inline-flex items-center gap-2 rounded-full bg-[#2a72ad] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#246397]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              Search the library
            </Link>
            <Link
              href="/resources/downloads"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Free guides &amp; checklists →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Editorial front page: lead + featured ── */}
      {lead && (
        <section className="bg-[#0d1b2a] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Editor’s Picks</p>
                <h2 className="text-2xl font-black text-white sm:text-3xl">START HERE</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-gray-400">
                The articles we point people to most often — the ones that answer the questions asset owners
                actually arrive with.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ArticleCard article={lead} variant="lead" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {secondary.slice(0, 4).map((a) => (
                  <ArticleCard key={a.id} article={a} variant="feature" />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Sections strip ── */}
      <section className="border-b border-gray-100 bg-white pt-10 pb-8 sm:pt-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Sections</p>
              <h2 className="text-xl font-black text-[#30505b] sm:text-2xl">BROWSE BY SECTION</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500">
              Every article sits in one section — start with the one closest to your problem.
            </p>
          </div>
          <CategoryGrid categories={CATEGORIES} counts={categoryCounts} previews={categoryPreviews} />
        </div>
      </section>

      {/* ── Magazine layout: library + sidebar ── */}
      <section id="library" className="scroll-mt-24 bg-[#F4F6F8] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            {/* Main column */}
            <div className="min-w-0">
              <div className="mb-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Full Library</p>
                <h2 className="text-xl font-black text-[#30505b] sm:text-2xl">EVERY ARTICLE</h2>
              </div>
              <ArticleBrowser
                articles={latest}
                categories={CATEGORIES}
                formats={FORMATS}
                topics={TOPICS}
                regions={REGIONS}
                columns="two"
              />
            </div>

            {/* Sidebar */}
            <LibrarySidebar
              regions={REGIONS}
              regionCounts={regionCounts}
              topics={TOPICS}
              topicCounts={topicCounts}
              mostRecent={sidebarRecent}
            />
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="COMMON QUESTIONS" />

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
