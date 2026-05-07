import type { Metadata } from 'next'
import Link from 'next/link'

import AppImage from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import { getPublicPostBySlug, getPublicPosts, renderContentParagraphs } from '@/lib/cms/queries'
import { formatDate } from '@/lib/cms/utils'

export const dynamic = 'force-static'

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
  }
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPublicPostBySlug(slug)

  if (!post) {
    return null
  }

  const paragraphs = renderContentParagraphs(post.content)

  return (
    <>
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
          <article className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:text-[#30505b] prose-strong:text-gray-800">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

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
