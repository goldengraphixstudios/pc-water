import type { Metadata } from 'next'
import AppImage from '@/components/AppImage'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Builder & Contractor Partnerships',
  description:
    'Water storage subcontract partnerships for builders and contractors. National reach, AS2304 compliance documentation, and flexible scope delivery.',
  keywords: [
    'builder contractor water infrastructure partnerships',
    'water tank subcontractor australia',
    'water infrastructure delivery partner',
    'tank contractor partnership australia',
    'specialist water subcontractor',
  ],
  alternates: {
    canonical: '/services/builder-contractor-partnerships',
  },

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Builder & Contractor Partnerships',
    description: 'Water storage subcontract partnerships for builders and contractors. National reach, AS2304 compliance documentation, and flexible scope delivery.',
    url: 'https://pcwater.com.au/services/builder-contractor-partnerships',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'PC Water Infrastructure — Engineered Water Asset Solutions',
      },
    ],
  },
  twitter: { card: 'summary_large_image' as const, images: ['/hero.png'] },
}

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

const faqs = [
  { question: 'How do builder partnerships typically work?', answer: 'We typically work as a specialist subcontractor to builders and civil contractors, providing the water infrastructure scope on projects where the head contractor does not have in-house tank capability. We provide our own JSA/SWMS, coordinate our own crew, and deliver our scope to agreed milestones within the head contractor\'s program.' },
  { question: 'Can you work within an existing construction program?', answer: 'Yes. We are experienced at integrating our installation scope into existing construction programs, coordinating with head contractors on site access, sequencing, and inspection hold points.' },
  { question: 'Do you provide all compliance documentation for subcontract work?', answer: 'Yes. We provide full compliance documentation including SWMS, RPEQ engineering certificates, compliance testing results, and AS2304/AS4020 compliance records as required for each project.' },
  { question: 'What is your national reach as a subcontractor?', answer: 'We have completed subcontract projects across Queensland, New South Wales, Victoria, Tasmania, and Western Australia. Remote site capability extends our reach to locations most metropolitan contractors cannot reach.' },
]

export default function BuilderContractorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Builder & Contractor Partnerships', url: `${siteUrl}/services/builder-contractor-partnerships` },
        ]}
      />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <AppImage
          src="/heroes/builder-contractor-partnerships.jpg"
          alt="Water storage subcontract partnership installation project"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Builder & Contractor Partnerships</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Reliable specialist water storage subcontract services for builders, civil contractors, and project managers — with national reach and zero compromise on compliance.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2a72ad] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#246397] transition-colors">
            Discuss a Partnership
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ The Subcontract Model</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Your Specialist Water Storage & WTP Infrastructure Partner</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                When your project requires specialist water infrastructure capability — custom tank design, RPVC lining, fire water compliance, potable reservoir works, process tanks, or WTP upgrade support — PC Water Infrastructure delivers as a reliable subcontract partner.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We integrate into your program, coordinate our scope with your site team, and deliver to the required timeline with the QA, safety, engineering, and compliance documentation expected on civil, municipal, industrial, and remote infrastructure projects.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our partnerships are built on reliability, clear communication, and technical competence. Whether the scope is a water storage asset, a treatment plant tank package, or a remote refurbishment project, we understand that your reputation depends on your subcontractors performing — which is why we make accountability our standard.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Full scope subcontract delivery',
                'Own JSA/SWMS documentation',
                'Program integration capability',
                'National reach including remote',
                'RPEQ engineering compliance',
                'AS2304/AS4020 certification',
                'Clear milestone reporting',
                'Responsive project management',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-[#F4F6F8] rounded-lg p-4">
                  <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-[#30505b] font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <AppImage src="/water/water-06.jpg" alt="Water infrastructure delivered through builder and contractor partnerships" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[#30505b]/87" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-12">What Builders & Contractors Value Most</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Reliability', desc: 'We turn up when we say we will, deliver what we promise, and communicate proactively when anything changes.' },
              { title: 'Compliance', desc: 'All documentation — SWMS, engineering, AS certifications — is provided without chasing. You have what you need for your project file.' },
              { title: 'Specialist Expertise', desc: 'We bring genuine expertise in water storage that most head contractors and builders simply do not have in-house.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <div className="w-8 h-0.5 bg-[#3e91ce] mb-4 mx-auto" />
                <h3 className="font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Commercial & Fire Compliance', 'Industrial Facilities', 'Government & Councils'].map((ind) => {

              const hrefMap: Record<string, string> = {

                'Mining & Resources': '/industries/mining-resources',

                'Government & Councils': '/industries/government-councils',

                'Industrial Facilities': '/industries/industrial-facilities',

                'Commercial & Fire Compliance': '/industries/commercial-fire-compliance',

                'Commercial Fire Compliance': '/industries/commercial-fire-compliance',

                'Remote & Regional Communities': '/industries/remote-regional-communities',

                'Remote Communities': '/industries/remote-regional-communities',

              }

              const href = hrefMap[ind]

              return href ? (

                <Link key={ind} href={href} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3e91ce]/10 hover:border-[#3e91ce]/40 transition-colors">{ind}</Link>

              ) : (

                <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">{ind}</span>

              )

            })}
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Builder Partnerships — FAQs" />
      <CTABanner heading="LET'S BUILD SOMETHING TOGETHER" subheading="Contact us to register as a preferred subcontractor partner or discuss an upcoming project." primaryCTA={{ label: 'Discuss a Partnership', href: '/contact' }} secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }} />
    </>
  )
}
