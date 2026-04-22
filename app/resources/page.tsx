import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'
import { formatDate } from '@/lib/cms/utils'
import { getPublicPosts } from '@/lib/cms/queries'

export const metadata: Metadata = {
  title: 'Resources & Insights',
  description:
    'Insights, guides, and resources on water storage engineering, tank maintenance, fire water compliance, RPVC liners, and remote project delivery across Australia.',
}

const downloads = [
  { title: 'Capability Statement', desc: 'Full company capability, project track record, and compliance documentation.', tag: 'Company Profile' },
  { title: 'Tank Maintenance Checklist', desc: 'Practical asset owner checklist for assessing tank condition and maintenance needs.', tag: 'Maintenance' },
  { title: 'Fire Water Compliance Guide', desc: 'Understanding AS2304 and AS1851 requirements for fire water storage.', tag: 'Compliance' },
  { title: 'Tank Upgrade Decision Guide', desc: 'When to reline, repair, or replace — practical guidance for asset managers.', tag: 'Asset Management' },
  { title: 'Remote Project Delivery Guide', desc: 'Water infrastructure delivery in remote and regional Australia — what you need to know.', tag: 'Remote Projects' },
]

const faqs = [
  { question: 'What Australian standards apply to water storage tanks?', answer: 'The key standards are AS2304 (water storage tanks for fire protection systems), AS4020 (products in contact with drinking water — relevant for potable storage), and AS1851 (maintenance of fire protection systems and equipment). ISO9001 and ISO14001 apply to quality and environmental management systems.' },
  { question: 'How do I know if my tank needs relining or replacement?', answer: 'A structural condition assessment by a specialist is the starting point. In most cases, if the tank structure is sound, RPVC liner installation is significantly more cost-effective than replacement. Download our Tank Upgrade Decision Guide for a practical framework.' },
  { question: 'How often should a water storage tank be inspected?', answer: 'At minimum annually for fire water tanks under AS1851. For other tanks, we recommend at least every two years, or more frequently in corrosive environments or for aging assets. ROV inspection technology makes inspection faster and less expensive than ever — removing the barrier of dewatering.' },
  { question: 'What is the difference between a fire tank and a regular storage tank?', answer: 'Fire water tanks must be specifically designed and installed to AS2304, which sets requirements for structural design, fittings, access, and performance. They also require annual AS1851 inspection and maintenance. Standard storage tanks do not carry these specific compliance requirements.' },
]

export const dynamic = 'force-dynamic'

export default async function ResourcesPage() {
  const articles = await getPublicPosts()

  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
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
                <div className="h-40 bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce]" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#3e91ce]/10 text-[#3e91ce] text-xs font-semibold px-3 py-1 rounded-full">
                      {article.tags[0]?.name ?? 'Insights'}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime ?? formatDate(article.publishedAt)}</span>
                  </div>
                  <h3 className="font-bold text-[#30505b] text-base mb-3 group-hover:text-[#3e91ce] transition-colors leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{article.excerpt}</p>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((resource) => (
              <div key={resource.title} className="bg-[#F4F6F8] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="inline-block bg-[#3e91ce]/10 text-[#3e91ce] text-xs font-semibold px-3 py-1 rounded-full mb-4">{resource.tag}</span>
                <h3 className="font-bold text-[#30505b] mb-2">{resource.title}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{resource.desc}</p>
                <a href="#" className="flex items-center gap-2 text-[#3e91ce] text-sm font-semibold hover:gap-3 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Free
                </a>
              </div>
            ))}
          </div>
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
