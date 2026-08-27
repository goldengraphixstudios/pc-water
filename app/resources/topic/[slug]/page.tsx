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
  TOPICS,
  TOPIC_BY_SLUG,
  countByTopic,
  enrichArticles,
  sortByNewest,
} from '@/lib/cms/taxonomy'

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export function generateStaticParams() {
  return TOPICS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = TOPIC_BY_SLUG[slug]
  if (!topic) return {}

  return {
    title: `${topic.name} — Articles & Insights`,
    description: topic.description,
    alternates: { canonical: `/resources/topic/${topic.slug}` },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      siteName: 'PC Water Infrastructure',
      title: `${topic.name} | PC Water`,
      description: topic.description,
      url: `${siteUrl}/resources/topic/${topic.slug}`,
      images: [{ url: '/hero.png', width: 1200, height: 630, alt: topic.name }],
    },
    twitter: { card: 'summary_large_image', images: ['/hero.png'] },
  }
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const topic = TOPIC_BY_SLUG[slug]
  if (!topic) notFound()

  const posts = await getPublicPosts()
  const all = enrichArticles(posts)
  const articles = sortByNewest(all.filter((a) => a.topics.some((t) => t.slug === topic.slug)))

  if (articles.length === 0) notFound()

  const topicCounts = countByTopic(all)
  const otherTopics = TOPICS.filter((t) => t.slug !== topic.slug && (topicCounts[t.slug] ?? 0) > 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: topic.name,
    description: topic.description,
    url: `${siteUrl}/resources/topic/${topic.slug}`,
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
          { name: topic.name, url: `${siteUrl}/resources/topic/${topic.slug}` },
        ]}
      />

      <section className="relative overflow-hidden bg-[#0d1b2a] pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-40">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#3e91ce]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <Breadcrumbs
            light
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/resources' },
              { label: topic.name },
            ]}
          />
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Topic</p>
          <h1 className="mb-5 text-[2rem] font-black leading-tight text-white sm:text-4xl md:text-5xl">
            {topic.name}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{topic.description}</p>
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
        <div className="mx-auto max-w-6xl px-4">
          <ArticleBrowser
            heading={`Articles tagged ${topic.name}`}
            articles={articles}
            categories={CATEGORIES}
            formats={FORMATS}
            topics={TOPICS}
            regions={REGIONS}
          />
        </div>
      </section>

      {otherTopics.length > 0 && (
        <section className="border-t border-gray-100 bg-[#F4F6F8] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#3e91ce]">/ Related</p>
            <h2 className="mb-6 text-2xl font-black text-[#30505b]">OTHER TOPICS</h2>
            <div className="flex flex-wrap gap-2.5">
              {otherTopics.map((t) => (
                <Link
                  key={t.slug}
                  href={`/resources/topic/${t.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#30505b] transition-all hover:border-[#3e91ce] hover:text-[#3e91ce]"
                >
                  {t.name}
                  <span className="text-gray-400">({topicCounts[t.slug]})</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading="HAVE A SPECIFIC TECHNICAL QUESTION?"
        subheading="Our engineers respond to technical and project enquiries within one business day."
        primaryCTA={{ label: 'Contact Our Team', href: '/contact' }}
        secondaryCTA={{ label: 'Free Downloads', href: '/resources/downloads' }}
        variant="navy"
      />
    </>
  )
}
