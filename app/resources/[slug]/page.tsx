import type { Metadata } from 'next'
import Link from 'next/link'

import CTABanner from '@/components/CTABanner'
import { getPublicPostBySlug, getPublicPosts, renderContentParagraphs } from '@/lib/cms/queries'

export const dynamic = 'force-dynamic'

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
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/resources" className="inline-flex items-center gap-2 text-[#7fc2f0] text-sm mb-6 hover:gap-3 transition-all">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Resources
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            {post.tags.map((tag) => (
              <span key={tag.slug} className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {tag.name}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">{post.title}</h1>
          <p className="text-gray-300 text-lg max-w-3xl">{post.excerpt}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
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
