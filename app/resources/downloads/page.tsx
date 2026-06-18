import type { Metadata } from 'next'
import Link from 'next/link'
import AppImage from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import ResourcesDownloadSection from '@/components/ResourcesDownloadSection'
import { getPublicPosts } from '@/lib/cms/queries'
import { formatDate } from '@/lib/cms/utils'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Free Technical Downloads',
  description:
    'Free downloadable guides, checklists, and compliance resources for water storage engineers, asset managers, and operators across Australia.',
  keywords: [
    'free water tank guides australia',
    'tank maintenance checklist download',
    'fire water compliance guide',
    'AS2304 guide download',
    'RPVC liner guide',
    'water treatment resources',
    'tank upgrade decision guide',
  ],
  alternates: { canonical: '/resources/downloads' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Free Technical Downloads | PC Water',
    description: 'Checklists, compliance guides, and decision frameworks — free to download from PC Water.',
    url: 'https://pcwater.com.au/resources/downloads',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure Free Downloads' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },
}

const benefits = [
  {
    title: 'Written by Engineers',
    desc: 'Every guide is produced by the same engineers who deliver projects — not marketers. The content is technical, direct, and field-tested.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Genuinely Free',
    desc: 'No credit card, no trial. Enter your email and get instant access. We send one confirmation — you decide if you want to hear more.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Compliance-Ready',
    desc: 'Built around Australian standards — AS2304, AS1851, AS4020. Use them directly in your asset management, procurement, or compliance documentation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Updated Regularly',
    desc: 'Standards and practices evolve. Our guides are reviewed and updated when the underlying standards or common industry practice changes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const downloadFaqItems = [
  {
    question: 'Do I have to pay for these guides?',
    answer: 'No. Every guide on this page is genuinely free. You enter your email address, and we send you the download link. That\'s it. You can opt out of any further communication immediately.',
  },
  {
    question: 'Who are these guides written for?',
    answer: 'Asset managers, engineers, operators, and owners who work with water storage infrastructure. The language is technical and direct — these are working documents, not marketing brochures.',
  },
  {
    question: 'Are these guides current with Australian standards?',
    answer: 'Yes. All guides reference current AS2304, AS1851, and AS4020 requirements. We review and update when standards are revised or when industry practice has materially shifted.',
  },
  {
    question: 'What is the difference between PC Tanks and PC Water Solutions resources?',
    answer: 'PC Tanks is our water storage division — focused on tanks, liners, fire water compliance, and asset maintenance. PC Water Solutions is our water treatment division — focused on WTPs, operations, and remote treatment infrastructure. The guides are divided by division so you can find what\'s relevant to your project type.',
  },
  {
    question: 'Can I share these guides with my team or clients?',
    answer: 'Yes, within your organisation. The guides are provided for professional use. If you are distributing broadly or using content in published work, please contact us.',
  },
]

export default async function DownloadsPage() {
  const allPosts = await getPublicPosts()
  // Show 3 most recent posts as featured articles
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden min-h-[500px] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#162538] to-[#1e3a52]" />
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(62,145,206,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(62,145,206,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-32 right-0 w-96 h-96 bg-[#3e91ce]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/resources" className="text-gray-500 text-xs hover:text-gray-400 transition-colors">
              Articles & Insights
            </Link>
            <span className="text-gray-600 text-xs">/</span>
            <span className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase">Free Downloads</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 leading-none">
            FREE TECHNICAL<br />
            <span className="text-[#3e91ce]">RESOURCES.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Checklists, compliance guides, and decision frameworks — built for engineers, asset managers, and operators. Free to download, no strings attached.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              8 Resources Available
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Always Free
            </div>
          </div>
        </div>
      </section>

      {/* ── Why these guides ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Why Download</p>
            <h2 className="text-3xl font-black text-[#30505b]">WHAT MAKES THESE DIFFERENT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#F4F6F8] rounded-2xl p-6 border border-gray-100 hover:border-[#3e91ce]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[#3e91ce]/10 rounded-xl flex items-center justify-center text-[#3e91ce] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-[#30505b] mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Downloads grid ── */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Downloads</p>
            <h2 className="text-3xl font-black text-[#30505b]">FREE GUIDES & RESOURCES</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              Practical technical guides for engineers, asset managers, and operators. Enter your email to access any guide instantly.
            </p>
          </div>
          <ResourcesDownloadSection />
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ FAQs</p>
            <h2 className="text-3xl font-black text-[#30505b]">ABOUT THESE RESOURCES</h2>
          </div>
          <div className="space-y-3">
            {downloadFaqItems.map((item, i) => (
              <DownloadFaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured articles (advertise blog) ── */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Knowledge Base</p>
              <h2 className="text-3xl font-black text-[#30505b]">TECHNICAL ARTICLES</h2>
              <p className="text-gray-500 mt-2 max-w-xl leading-relaxed">
                Go deeper on any topic with our library of free technical articles — written by the same engineers who build and maintain these assets.
              </p>
            </div>
            <Link
              href="/resources"
              className="flex-shrink-0 flex items-center gap-2 border border-[#30505b] text-[#30505b] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#30505b] hover:text-white transition-colors"
            >
              Browse All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/resources/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="relative h-44 bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] overflow-hidden">
                  {post.coverImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="text-white/20 text-4xl font-black">PC</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/50 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#3e91ce]/10 text-[#3e91ce] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.tags[0]?.name ?? 'Insights'}
                    </span>
                    {post.readTime && (
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#30505b] text-sm mb-2 group-hover:text-[#3e91ce] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                  {post.publishedAt && (
                    <p className="text-gray-400 text-xs mt-3">{formatDate(post.publishedAt)}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="NEED SOMETHING MORE SPECIFIC?"
        subheading="If you have a specific compliance, design, or maintenance question, our team can help."
        primaryCTA={{ label: 'Talk to Our Team', href: '/contact' }}
        secondaryCTA={{ label: 'Browse Articles', href: '/resources' }}
        variant="navy"
      />
    </>
  )
}

// Simple static FAQ accordion — server-renderable version
function DownloadFaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-[#3e91ce]/30 transition-colors">
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
        <span className="font-bold text-[#30505b] pr-4 leading-snug">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-[#3e91ce] group-open:border-[#3e91ce] transition-colors">
          <svg
            className="w-4 h-4 text-[#30505b] group-open:text-white transition-colors group-open:rotate-45 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </summary>
      <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
        {answer}
      </div>
    </details>
  )
}
