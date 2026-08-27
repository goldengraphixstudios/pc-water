import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import ArticleCard from '@/components/resources/ArticleCard'
import ArticleBrowser from '@/components/resources/ArticleBrowser'
import Breadcrumbs from '@/components/resources/Breadcrumbs'
import { getPublicPosts } from '@/lib/cms/queries'
import {
  CATEGORIES,
  CATEGORY_BY_SLUG,
  FORMATS,
  REGIONS,
  TOPICS,
  enrichArticles,
  sortByNewest,
} from '@/lib/cms/taxonomy'
import { SHELL } from '@/lib/shell'

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = CATEGORY_BY_SLUG[slug]
  if (!category) return {}

  const title = `${category.name} — Articles & Insights`
  const description = `${category.tagline} ${category.intro[0]}`.slice(0, 158)

  return {
    title,
    description,
    alternates: { canonical: `/resources/category/${category.slug}` },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      siteName: 'PC Water Infrastructure',
      title: `${category.name} | PC Water`,
      description,
      url: `${siteUrl}/resources/category/${category.slug}`,
      images: [{ url: '/hero.png', width: 1200, height: 630, alt: category.name }],
    },
    twitter: { card: 'summary_large_image', images: ['/hero.png'] },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = CATEGORY_BY_SLUG[slug]
  if (!category) notFound()

  const posts = await getPublicPosts()
  const all = enrichArticles(posts)
  const articles = sortByNewest(all.filter((a) => a.category.slug === category.slug))

  if (articles.length === 0) notFound()

  const featured = articles.find((a) => a.feature !== null) ?? articles[0]
  const rest = articles.filter((a) => a.id !== featured.id)
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.tagline,
    url: `${siteUrl}/resources/category/${category.slug}`,
    isPartOf: { '@type': 'CollectionPage', name: 'Articles & Insights', url: `${siteUrl}/resources` },
    publisher: { '@type': 'Organization', name: 'PC Water Infrastructure', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((a, i) => ({
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
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Articles', url: `${siteUrl}/resources` },
          { name: category.name, url: `${siteUrl}/resources/category/${category.slug}` },
        ]}
      />

      {/* ── Section masthead ── */}
      <section className="relative overflow-hidden border-b-4 border-[#3e91ce] bg-[#0d1b2a] pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-15" />
        <div className={`relative z-10 ${SHELL}`}>
          <Breadcrumbs
            light
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/resources' },
              { label: category.name },
            ]}
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px] lg:gap-12">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3e91ce]">/ Section</p>
              <h1 className="mb-4 text-[1.9rem] font-black leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                {category.name}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-gray-200 lg:text-lg">
                {category.intro[0]}
              </p>
            </div>
            <div className="lg:border-l lg:border-white/15 lg:pl-8">
              <p className="text-sm leading-relaxed text-gray-400">{category.intro[1]}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="border border-white/25 px-3 py-1.5 text-[13px] text-white">
                  {articles.length} {articles.length === 1 ? 'article' : 'articles'}
                </span>
                <Link
                  href="/resources"
                  className="text-[13px] font-semibold text-gray-400 transition-colors hover:text-[#7fc2f0]"
                >
                  ← All sections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead + more in section ── */}
      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
            <ArticleCard article={featured} variant="lead" />
            {rest.length > 0 && (
              <div>
                <h2 className="mb-2 border-b-2 border-[#0d1b2a] pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d1b2a]">
                  More in this section
                </h2>
                <div className="divide-y divide-gray-200">
                  {rest.slice(0, 6).map((a) => (
                    <ArticleCard key={a.id} article={a} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── All articles in this section ── */}
      <section className="border-t border-gray-200 bg-[#f4f6f8] py-8 sm:py-10">
        <div className={SHELL}>
          <div className="mb-5 flex items-baseline justify-between gap-4 border-b-2 border-[#0d1b2a] pb-2">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#0d1b2a] sm:text-xl">
              All {category.name}
            </h2>
            <span className="font-mono text-[11px] text-gray-500">{articles.length} articles</span>
          </div>
          <ArticleBrowser
            articles={articles}
            categories={CATEGORIES}
            formats={FORMATS}
            topics={TOPICS}
            regions={REGIONS}
            lockCategory
          />
        </div>
      </section>

      {/* ── Other sections ── */}
      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <h2 className="mb-3 border-b-2 border-[#0d1b2a] pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d1b2a]">
            Other sections
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/resources/category/${c.slug}`}
                className="inline-flex items-center border border-gray-300 px-3.5 py-2 text-[13px] font-medium text-[#30505b] transition-colors hover:border-[#3e91ce] hover:bg-[#3e91ce]/5 hover:text-[#2a72ad]"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="NEED THIS APPLIED TO YOUR ASSET?"
        subheading="Our engineers respond to technical and project enquiries within one business day."
        primaryCTA={{ label: 'Contact Our Team', href: '/contact' }}
        secondaryCTA={{ label: 'Free Downloads', href: '/resources/downloads' }}
        variant="navy"
      />
    </>
  )
}
