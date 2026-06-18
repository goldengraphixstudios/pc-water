import type { Metadata } from 'next'
import Link from 'next/link'

import AppImage from '@/components/AppImage'
import ArticleJsonLd from '@/components/ArticleJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import { getPublicPostBySlug, getPublicPosts } from '@/lib/cms/queries'
import { formatDate } from '@/lib/cms/utils'

export const dynamic = 'force-static'
const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

const resourceLinkMap: Record<
  string,
  {
    relatedServices: Array<{ href: string; label: string }>
    relatedResources: string[]
    keywords: string[]
  }
> = {
  'why-your-fire-tank-might-fail-compliance-and-how-to-fix-it-fast': {
    relatedServices: [
      { href: '/services/fire-water-tanks', label: 'Fire Water Tank Solutions' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
    ],
    relatedResources: ['corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it', 'from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance'],
    keywords: ['fire water tank compliance australia', 'AS2304 fire water tanks', 'AS1851 inspection'],
  },
  'corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it': {
    relatedServices: [
      { href: '/services/rpvc-liner-systems', label: 'RPVC Liner Systems' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
    ],
    relatedResources: ['how-rpvc-liners-extend-the-life-of-aging-water-tanks', 'is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing'],
    keywords: ['water tank corrosion australia', 'corroded storage tank repair', 'tank corrosion inspection'],
  },
  'how-rpvc-liners-extend-the-life-of-aging-water-tanks': {
    relatedServices: [
      { href: '/services/rpvc-liner-systems', label: 'RPVC Liner Systems' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
    ],
    relatedResources: ['corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it', 'is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing'],
    keywords: ['RPVC liner systems', 'water tank relining australia', 'extend water tank life'],
  },
  'from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance': {
    relatedServices: [
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/water-treatment-solutions', label: 'Water Treatment Solutions' },
    ],
    relatedResources: ['water-is-food-your-tank-is-the-crockery', 'why-your-fire-tank-might-fail-compliance-and-how-to-fix-it-fast'],
    keywords: ['water tank maintenance australia', 'industrial tank maintenance', 'potable tank inspection'],
  },
  'water-is-food-your-tank-is-the-crockery': {
    relatedServices: [
      { href: '/services/water-treatment-solutions', label: 'Water Treatment Solutions' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
    ],
    relatedResources: ['from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance', 'is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing'],
    keywords: ['potable water tank inspection australia', 'drinking water storage tank hygiene', 'AS4020 potable water tank'],
  },
  'is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing': {
    relatedServices: [
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/rpvc-liner-systems', label: 'RPVC Liner Systems' },
    ],
    relatedResources: ['corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it', 'water-is-food-your-tank-is-the-crockery'],
    keywords: ['water tank failure warning signs', 'storage tank condition assessment', 'aging water tank inspection'],
  },
  'water-storage-in-harsh-environments-what-you-need-to-know': {
    relatedServices: [
      { href: '/services/remote-area-delivery', label: 'Remote Area Project Delivery' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/rpvc-liner-systems', label: 'RPVC Liner Systems' },
    ],
    relatedResources: ['from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance', 'corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it'],
    keywords: ['remote water infrastructure australia', 'harsh environment water storage', 'mining water tank australia', 'remote community water storage'],
  },
  'how-we-clean-a-water-tank-diver-vacuuming-method': {
    relatedServices: [
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
    ],
    relatedResources: ['water-is-food-your-tank-is-the-crockery', '5-contamination-risks-not-source-water', 'evidence-water-quality-issues-warning-signs'],
    keywords: ['water tank cleaning australia', 'diver vacuuming water tank', 'potable tank cleaning', 'water tank sediment removal'],
  },
  '5-contamination-risks-not-source-water': {
    relatedServices: [
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
    ],
    relatedResources: ['water-is-food-your-tank-is-the-crockery', 'evidence-water-quality-issues-warning-signs', 'the-open-overflow-wildlife-drain-point'],
    keywords: ['water quality contamination storage tank', 'potable water tank contamination', 'water storage contamination pathways australia'],
  },
  'evidence-water-quality-issues-warning-signs': {
    relatedServices: [
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
    ],
    relatedResources: ['5-contamination-risks-not-source-water', 'the-open-overflow-wildlife-drain-point', 'water-is-food-your-tank-is-the-crockery'],
    keywords: ['water quality warning signs tank', 'water tank inspection evidence', 'water storage contamination indicators australia'],
  },
  'the-open-overflow-wildlife-drain-point': {
    relatedServices: [
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
    ],
    relatedResources: ['5-contamination-risks-not-source-water', 'evidence-water-quality-issues-warning-signs', 'birds-are-the-most-common-body-found-inside-australian-tanks'],
    keywords: ['water tank wildlife entry', 'overflow drain animal entry water tank', 'flapper valve water tank overflow', 'water tank animal contamination australia'],
  },
  'birds-are-the-most-common-body-found-inside-australian-tanks': {
    relatedServices: [
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
    ],
    relatedResources: ['the-open-overflow-wildlife-drain-point', '5-contamination-risks-not-source-water', 'evidence-water-quality-issues-warning-signs'],
    keywords: ['birds inside water tanks australia', 'water tank bird contamination', 'vent mesh failure water tank', 'roof exclusion water storage tank'],
  },
  'vandalism-and-your-water-tank-the-damage-that-goes-unreported': {
    relatedServices: [
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
    ],
    relatedResources: ['5-contamination-risks-not-source-water', 'the-open-overflow-wildlife-drain-point', 'evidence-water-quality-issues-warning-signs'],
    keywords: ['water tank vandalism contamination risk', 'damaged hatch water tank', 'potable tank security australia', 'water storage vandal damage'],
  },
  'sediment-in-your-tank-what-it-is-where-it-comes-from-why-it-matters': {
    relatedServices: [
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
    ],
    relatedResources: ['when-iron-and-manganese-come-from-inside-the-tank-not-the-source', 'evidence-water-quality-issues-warning-signs', 'how-we-clean-a-water-tank-diver-vacuuming-method'],
    keywords: ['sediment in water tank australia', 'water tank sediment removal', 'potable tank cleaning sediment', 'water storage tank floor deposit'],
  },
  'when-iron-and-manganese-come-from-inside-the-tank-not-the-source': {
    relatedServices: [
      { href: '/services/tank-inspection-technology', label: 'Tank Inspection Technology' },
      { href: '/services/tank-maintenance-upgrades', label: 'Tank Maintenance & Upgrades' },
    ],
    relatedResources: ['sediment-in-your-tank-what-it-is-where-it-comes-from-why-it-matters', 'evidence-water-quality-issues-warning-signs', '5-contamination-risks-not-source-water'],
    keywords: ['iron manganese water tank australia', 'brown water storage tank cause', 'tank corrosion iron contamination', 'manganese water storage internal'],
  },
}

export async function generateStaticParams() {
  const posts = await getPublicPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function truncateMeta(text: string | null | undefined, max = 155): string {
  if (!text) return ''
  const trimmed = text.trim()
  if (trimmed.length <= max) return trimmed
  return trimmed.slice(0, max - 1).replace(/[,\s]+$/, '') + '…'
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublicPostBySlug(slug)

  if (!post) {
    return { title: 'Resource Not Found' }
  }

  const description = truncateMeta(post.seoDescription || post.excerpt)
  const ogTitle = truncateMeta(post.seoTitle || post.title, 60)
  const ogImage = post.coverImageUrl
    ? [{ url: post.coverImageUrl, width: 1200, height: 630, alt: post.title }]
    : [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }]

  return {
    title: post.seoTitle ? { absolute: post.seoTitle } : post.title,
    description,
    alternates: {
      canonical: `/resources/${post.slug}`,
    },
    keywords: resourceLinkMap[post.slug]?.keywords ?? post.tags.map((tag) => tag.name),
    openGraph: {
      type: 'article',
      locale: 'en_AU',
      siteName: 'PC Water Infrastructure',
      url: `${siteUrl}/resources/${post.slug}`,
      title: ogTitle,
      description,
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ogImage.map((i) => i.url),
    },
  }
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPublicPostBySlug(slug)
  const allPosts = await getPublicPosts()

  if (!post) {
    return null
  }

  const relatedConfig = resourceLinkMap[post.slug]
  const mappedResources = allPosts.filter(
    (candidate) => candidate.slug !== post.slug && relatedConfig?.relatedResources.includes(candidate.slug)
  )
  // Fall back to the latest posts so every article cross-links to others
  const relatedResources = mappedResources.length > 0
    ? mappedResources
    : allPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3)
  // Wrap-around prev/next so every article receives incoming links from its neighbours
  const postIndex = allPosts.findIndex((candidate) => candidate.slug === post.slug)
  const prevPost = allPosts.length > 1 ? allPosts[(postIndex - 1 + allPosts.length) % allPosts.length] : null
  const nextPost = allPosts.length > 1 ? allPosts[(postIndex + 1) % allPosts.length] : null
  const articleUrl = `${siteUrl}/resources/${post.slug}`
  const articleDescription = post.seoDescription || post.excerpt

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Resources', url: `${siteUrl}/resources` },
          { name: post.title, url: articleUrl },
        ]}
      />
      <ArticleJsonLd
        url={articleUrl}
        title={post.seoTitle || post.title}
        description={articleDescription}
        image={post.coverImageUrl}
        publishedAt={post.publishedAt}
        modifiedAt={post.updatedAt}
        keywords={resourceLinkMap[post.slug]?.keywords ?? post.tags.map((tag) => tag.name)}
      />
      {/* Hero — full bleed cover image with overlay */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[480px] flex items-end">
        {post.coverImageUrl ? (
          <AppImage
            src={post.coverImageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce]" />
        )}
        <div className="absolute inset-0 bg-[#0d1b2a]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <Link href="/resources" className="inline-flex items-center gap-2 text-[#7fc2f0] text-sm mb-6 hover:gap-3 transition-all">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Resources
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            {post.tags.map((tag) => (
              <span key={tag.slug} className="bg-[#2a72ad] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {tag.name}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            {post.readTime && <span className="bg-white/10 px-3 py-1 rounded-full text-white/70">{post.readTime}</span>}
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-[#3e91ce] pl-6 italic">{post.excerpt}</p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <article
            className="article-content prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {(relatedConfig?.relatedServices?.length || relatedResources.length > 0) && (
        <section className="bg-[#F4F6F8] py-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8">
            {relatedConfig?.relatedServices?.length ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Related Services</p>
                <h2 className="text-2xl font-black text-[#30505b] mb-4">Need delivery support, not just guidance?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  These services align directly with the issue covered in this article and are the best next step for technical scoping, inspection, compliance, or remediation.
                </p>
                <div className="flex flex-col gap-3">
                  {relatedConfig.relatedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center justify-between rounded-xl border border-gray-200 px-5 py-4 text-[#30505b] font-semibold hover:border-[#3e91ce] hover:text-[#3e91ce] transition-colors"
                    >
                      {service.label}
                      <span aria-hidden>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {relatedResources.length > 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Continue Reading</p>
                <h2 className="text-2xl font-black text-[#30505b] mb-4">Related resources</h2>
                <div className="space-y-4">
                  {relatedResources.map((resource) => (
                    <Link
                      key={resource.slug}
                      href={`/resources/${resource.slug}`}
                      className="block rounded-xl bg-[#F4F6F8] px-5 py-4 hover:bg-[#eaf3fa] transition-colors"
                    >
                      <p className="font-bold text-[#30505b] mb-1">{resource.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{resource.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {prevPost && nextPost && (
        <section className="bg-white py-10 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/resources/${prevPost.slug}`}
              className="rounded-xl border border-gray-200 px-5 py-4 hover:border-[#2a72ad] transition-colors"
            >
              <p className="text-xs text-gray-500 mb-1">← Previous article</p>
              <p className="font-bold text-[#30505b]">{prevPost.title}</p>
            </Link>
            <Link
              href={`/resources/${nextPost.slug}`}
              className="rounded-xl border border-gray-200 px-5 py-4 hover:border-[#2a72ad] transition-colors sm:text-right"
            >
              <p className="text-xs text-gray-500 mb-1">Next article →</p>
              <p className="font-bold text-[#30505b]">{nextPost.title}</p>
            </Link>
          </div>
        </section>
      )}

      <CTABanner
        heading="NEED HELP WITH A SIMILAR ISSUE?"
        subheading="Speak to the PC Water team about your site, storage asset, or compliance challenge."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Projects', href: '/projects' }}
        variant="navy"
      />
    </>
  )
}
