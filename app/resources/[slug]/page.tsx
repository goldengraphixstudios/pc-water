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
}

export async function generateStaticParams() {
  const posts = await getPublicPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
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

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: `/resources/${post.slug}`,
    },
    keywords: resourceLinkMap[post.slug]?.keywords ?? post.tags.map((tag) => tag.name),
    openGraph: {
      type: 'article',
      url: `/resources/${post.slug}`,
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.coverImageUrl ? [{ url: post.coverImageUrl }] : undefined,
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
  const relatedResources = allPosts.filter(
    (candidate) => candidate.slug !== post.slug && relatedConfig?.relatedResources.includes(candidate.slug)
  )
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
              <span key={tag.slug} className="bg-[#3e91ce] text-white text-xs font-semibold px-3 py-1 rounded-full">
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
