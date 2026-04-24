import type { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'

export const metadata: Metadata = {
  title: 'Clarence Road Liner Replacement | Projects',
  description:
    'PC Water Infrastructure delivered RPVC liner replacement for 2 tanks at 107 Clarence Road — restoring compliance and returning tanks to service.',
}

const gallery = [
  { src: '/projects/clarence-01.jpg', alt: 'Clarence Road tank liner replacement work' },
  { src: '/projects/clarence-02.jpg', alt: 'RPVC liner installation Clarence Road' },
  { src: '/projects/clarence-03.jpg', alt: 'Tank liner replacement progress' },
  { src: '/projects/clarence-04.jpg', alt: 'Clarence Road tank interior inspection' },
  { src: '/projects/clarence-05.jpg', alt: 'Completed RPVC liner installation' },
  { src: '/projects/clarence-06.jpg', alt: 'Clarence Road tanks restored to service' },
]

export default function ClarenceRoadLinerPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/projects/clarence-01.jpg"
          alt="Clarence Road RPVC liner replacement"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[#3e91ce] text-sm mb-6 hover:gap-3 transition-all">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
            Back to Projects
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#3e91ce] text-white text-xs font-semibold px-3 py-1 rounded-full">Commercial</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">RPVC Liner Replacement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Clarence Road Liner Replacement</h1>
          <p className="text-gray-300 text-lg">107 Clarence Road</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#30505b] mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            Two water storage tanks at 107 Clarence Road had reached a point of liner failure — deteriorated liners created compliance risk and potential contamination of stored water. PC Water Infrastructure was engaged to assess the tanks and deliver RPVC liner replacement to restore both tanks to compliant, operational condition.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The project is a representative example of a common maintenance need for commercial and industrial tank owners — liner deterioration that, if addressed proactively, can be resolved efficiently and cost-effectively through RPVC liner replacement rather than full tank replacement.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-10 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Both tanks had liners that had reached end of service life — showing deterioration, potential integrity failure, and compliance risk. The tanks needed to be taken offline, assessed, and returned to service as quickly as possible to minimise operational disruption.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
            PC Water Infrastructure conducted an internal inspection of both tanks to confirm structural condition and determine liner specification. RPVC liner replacement was completed by specialist welders — both tanks were cleaned, prepared, lined, and integrity-tested before return to service. Full compliance documentation was provided with handover.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Outcome</h3>
              <p className="text-gray-600 leading-relaxed">
                Both tanks were returned to service with new RPVC liners in compliance with applicable standards. The liner replacement extended the service life of both assets, avoided the cost of full tank replacement, and restored compliance for the client.
              </p>
            </div>

            <div>
              <div className="bg-[#F4F6F8] rounded-xl p-6 mb-6">
                <h3 className="font-black text-[#30505b] text-sm tracking-widest uppercase mb-4">Project Snapshot</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: 'Sector', value: 'Commercial' },
                    { label: 'Location', value: '107 Clarence Road' },
                    { label: 'Scope', value: '2 × tank liner replacement' },
                    { label: 'Service', value: 'RPVC liner replacement' },
                    { label: 'Status', value: 'Completed — restored to service' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 py-2 border-b border-gray-200 last:border-0">
                      <dt className="text-gray-500 font-medium">{item.label}</dt>
                      <dd className="text-[#30505b] font-semibold text-right">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-[#30505b] rounded-xl p-6">
                <h3 className="font-black text-white text-sm tracking-widest uppercase mb-3">Services Delivered</h3>
                <ul className="space-y-2">
                  {['RPVC Liner Systems', 'Tank Inspection Technology', 'Tank Maintenance & Upgrades'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Project Gallery</h2>
          <GalleryLightbox images={gallery} />
        </div>
      </section>

      <CTABanner heading="LINER FAILING? WE CAN HELP." subheading="Don't let a deteriorating liner become a compliance crisis. Contact us for a quick assessment." primaryCTA={{ label: 'Request an Assessment', href: '/contact' }} secondaryCTA={{ label: 'View All Projects', href: '/projects' }} />
    </>
  )
}
