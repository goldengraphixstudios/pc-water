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

      {/* ── Section header ── */}
      <section className="relative overflow-hidden bg-[#0d1b2a] pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
          style={{ backgroundColor: category.accent }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: category.accent }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <Breadcrumbs
            light
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/resources' },
              { label: category.name },
            ]}
          />
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: category.accent }}>
            / Section
          </p>
          <h1 className="mb-5 text-[2rem] font-black leading-tight text-white sm:text-4xl md:text-5xl">
            {category.name}
          </h1>
          <div className="max-w-3xl space-y-4">
            {category.intro.map((para, i) => (
              <p key={i} className={i === 0 ? 'text-lg leading-relaxed text-gray-200' : 'leading-relaxed text-gray-400'}>
                {para}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {articles.length} {articles.length === 1 ? 'article' : 'articles'}
            </span>
            <Link
              href="/resources"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#3e91ce] hover:text-white"
            >
              ← All sections
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lead article in this section ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Start with</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
            <ArticleCard article={featured} variant="lead" />
            {rest.length > 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">More in this section</p>
                {rest.slice(0, 5).map((a) => (
                  <ArticleCard key={a.id} article={a} variant="compact" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── All articles in this section ── */}
      <section className="border-t border-gray-100 bg-[#F4F6F8] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ArticleBrowser
            heading={`All ${category.name} articles`}
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
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Keep reading</p>
          <h2 className="mb-6 text-2xl font-black text-[#30505b]">OTHER SECTIONS</h2>
          <div className="flex flex-wrap gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/resources/category/${c.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#30505b] transition-all hover:border-[#3e91ce] hover:text-[#3e91ce]"
              >
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: c.accent }}
                  aria-hidden="true"
                />
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
