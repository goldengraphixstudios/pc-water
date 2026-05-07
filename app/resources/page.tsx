import type { Metadata } from 'next'
import AppImage from '@/components/AppImage'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import ResourcesDownloadSection from '@/components/ResourcesDownloadSection'
import { formatDate } from '@/lib/cms/utils'
import { getPublicPosts } from '@/lib/cms/queries'

export const metadata: Metadata = {
  title: 'Resources & Insights',
  description:
    'Insights, guides, and resources on water storage engineering, tank maintenance, fire water compliance, RPVC liners, and remote project delivery across Australia.',
}


const faqs = [
  { question: 'What Australian standards apply to water storage tanks?', answer: 'The key standards are AS2304 (water storage tanks for fire protection systems), AS4020 (products in contact with drinking water — relevant for potable storage), and AS1851 (maintenance of fire protection systems and equipment). ISO9001 and ISO14001 apply to quality and environmental management systems.' },
  { question: 'How do I know if my tank needs relining or replacement?', answer: 'A structural condition assessment by a specialist is the starting point. In most cases, if the tank structure is sound, RPVC liner installation is significantly more cost-effective than replacement. Download our Tank Upgrade Decision Guide for a practical framework.' },
  { question: 'How often should a water storage tank be inspected?', answer: 'At minimum annually for fire water tanks under AS1851. For other tanks, we recommend at least every two years, or more frequently in corrosive environments or for aging assets. ROV inspection technology makes inspection faster and less expensive than ever — removing the barrier of dewatering.' },
  { question: 'What is the difference between a fire tank and a regular storage tank?', answer: 'Fire water tanks must be specifically designed and installed to AS2304, which sets requirements for structural design, fittings, access, and performance. They also require annual AS1851 inspection and maintenance. Standard storage tanks do not carry these specific compliance requirements.' },
]

export const dynamic = 'force-static'

export default async function ResourcesPage() {
  const articles = await getPublicPosts()

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <AppImage
          src="/heroes/resources.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Resources</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            INSIGHTS IN WATER STORAGE,<br />ENGINEERING, AND SUSTAINABILITY
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guides, articles, and downloadable resources to help you plan, specify, and manage your water storage infrastructure.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Insights</p>
            <h2 className="text-3xl font-black text-[#30505b]">LATEST ARTICLES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.id} href={`/resources/${article.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow block">
                <div className="relative h-48 bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] overflow-hidden">
                  {article.coverImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.coverImageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="text-white/20 text-5xl font-black leading-none select-none">PC</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/40 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#3e91ce]/10 text-[#3e91ce] text-xs font-semibold px-3 py-1 rounded-full">
                      {article.tags[0]?.name ?? 'Insights'}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime ?? formatDate(article.publishedAt)}</span>
                  </div>
                  <h3 className="font-bold text-[#30505b] text-base mb-3 group-hover:text-[#3e91ce] transition-colors leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Downloads</p>
            <h2 className="text-3xl font-black text-[#30505b]">FREE GUIDES & RESOURCES</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              Practical technical guides for engineers, asset managers, and operators — available free. Enter your email to access any guide instantly.
            </p>
          </div>
          <ResourcesDownloadSection />
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="COMMON QUESTIONS" />

      <CTABanner
        heading="HAVE A SPECIFIC QUESTION?"
        subheading="Our team responds to all technical and project enquiries within one business day."
        primaryCTA={{ label: 'Contact Our Team', href: '/contact' }}
        secondaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        variant="navy"
      />
    </>
  )
}
