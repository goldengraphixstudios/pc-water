import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import ArticleBrowser from '@/components/resources/ArticleBrowser'
import Breadcrumbs from '@/components/resources/Breadcrumbs'
import { getPublicPosts } from '@/lib/cms/queries'
import {
  CATEGORIES,
  FORMATS,
  REGIONS,
  REGION_BY_SLUG,
  TOPICS,
  enrichArticles,
  sortByNewest,
} from '@/lib/cms/taxonomy'
import { SHELL } from '@/lib/shell'

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export function generateStaticParams() {
  return REGIONS.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const region = REGION_BY_SLUG[slug]
  if (!region) return {}

  const title = `Water Infrastructure Articles — ${region.name}`
  return {
    title,
    description: region.description,
    alternates: { canonical: `/resources/region/${region.slug}` },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      siteName: 'PC Water Infrastructure',
      title: `${region.name} Water Infrastructure | PC Water`,
      description: region.description,
      url: `${siteUrl}/resources/region/${region.slug}`,
      images: [{ url: '/hero.png', width: 1200, height: 630, alt: `${region.name} water infrastructure` }],
    },
    twitter: { card: 'summary_large_image', images: ['/hero.png'] },
  }
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const region = REGION_BY_SLUG[slug]
  if (!region) notFound()

  const posts = await getPublicPosts()
  const all = enrichArticles(posts)
  const articles = sortByNewest(all.filter((a) => a.region?.slug === region.slug))

  if (articles.length === 0) notFound()

  const regionCounts: Record<string, number> = {}
  for (const a of all) if (a.region) regionCounts[a.region.slug] = (regionCounts[a.region.slug] ?? 0) + 1
  const otherRegions = REGIONS.filter((r) => r.slug !== region.slug && (regionCounts[r.slug] ?? 0) > 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${region.name} Water Infrastructure Articles`,
    description: region.description,
    url: `${siteUrl}/resources/region/${region.slug}`,
    isPartOf: { '@type': 'CollectionPage', name: 'Articles & Insights', url: `${siteUrl}/resources` },
    about: { '@type': 'Place', name: region.name },
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
          { name: region.name, url: `${siteUrl}/resources/region/${region.slug}` },
        ]}
      />

      <section className="relative overflow-hidden bg-[#0d1b2a] pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-40">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#0891b2]/25 blur-3xl" />
        <div className={`relative z-10 ${SHELL}`}>
          <Breadcrumbs
            light
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/resources' },
              { label: region.name },
            ]}
          />
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0891b2] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            {region.shortName}
          </div>
          <h1 className="mb-5 text-[2rem] font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Water Infrastructure in {region.name}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{region.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {articles.length} {articles.length === 1 ? 'article' : 'articles'}
            </span>
            <Link
              href="/resources"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#3e91ce] hover:text-white"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className={SHELL}>
          <ArticleBrowser
            heading={`${region.name} articles`}
            articles={articles}
            categories={CATEGORIES}
            formats={FORMATS}
            topics={TOPICS}
            regions={REGIONS}
            lockRegion
          />
        </div>
      </section>

      {otherRegions.length > 0 && (
        <section className="border-t border-gray-100 bg-[#F4F6F8] py-12 sm:py-16">
          <div className={SHELL}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Elsewhere</p>
            <h2 className="mb-6 text-2xl font-black text-[#30505b]">OTHER REGIONS</h2>
            <div className="flex flex-wrap gap-3">
              {otherRegions.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/region/${r.slug}`}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#30505b] transition-all hover:border-[#3e91ce] hover:text-[#3e91ce]"
                >
                  <span className="rounded-md bg-[#0d1b2a] px-2 py-0.5 text-[10px] font-bold text-white transition-colors group-hover:bg-[#3e91ce]">
                    {r.shortName}
                  </span>
                  {r.name}
                  <span className="text-gray-400">({regionCounts[r.slug]})</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading={`WORKING ON A PROJECT IN ${region.shortName}?`}
        subheading="We deliver water infrastructure projects across Australia, including remote and regional sites."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
        variant="navy"
      />
    </>
  )
}
