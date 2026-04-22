import type { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'

export const metadata: Metadata = {
  title: 'Hobart Nyrstar Industrial | Projects',
  description:
    'Pacific Water Tanks delivered 2 industrial tanks for the Nyrstar zinc processing facility in Hobart — corrosion-resistant design for a demanding industrial chemical environment.',
}

const gallery = [
  { src: '/projects/hobart-01.jpg', alt: 'Aerial view of Hobart Nyrstar industrial tanks' },
  { src: '/projects/hobart-02.jpg', alt: 'Hobart Nyrstar tank installation drone view' },
  { src: '/projects/hobart-03.jpg', alt: 'Nyrstar facility tank aerial photography' },
  { src: '/projects/hobart-04.jpg', alt: 'Industrial tank construction Hobart' },
  { src: '/projects/hobart-05.jpg', alt: 'Hobart Nyrstar completed tank installation' },
  { src: '/projects/hobart-06.jpg', alt: 'Nyrstar industrial tanks aerial view' },
]

export default function HobartNyrstarPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/projects/hobart-01.jpg"
          alt="Hobart Nyrstar industrial tanks — aerial drone view"
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
            <span className="bg-[#3e91ce] text-white text-xs font-semibold px-3 py-1 rounded-full">Refurbish</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Corrosion-Critical Environment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Hobart Nyrstar Industrial</h1>
          <p className="text-gray-300 text-lg">Hobart, Tasmania</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#30505b] mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nyrstar operates one of the world's largest zinc smelters in Hobart, Tasmania. Pacific Water Tanks was engaged to supply and install two industrial tanks for the facility — a demanding industrial environment characterised by chemical exposure, corrosive atmospheres, and stringent operational requirements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The zinc processing environment at the Hobart facility creates highly aggressive conditions for water storage infrastructure. Standard tank specification is insufficient for this type of environment — materials, coatings, and fittings all need to be specifically selected for compatibility with the chemical environment and resistance to accelerated corrosion.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-10 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering water storage tanks to an active industrial facility with complex operational requirements and a corrosive chemical environment demanded careful engineering. The tanks needed to withstand the specific environmental conditions of the Nyrstar zinc processing operations while meeting the facility's operational and safety requirements.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                Pacific Water Tanks designed and installed two industrial tanks with materials and coatings specifically selected for the Nyrstar operating environment. Corrosion-resistant steel grades, specialist protective coating systems, and chemically compatible fittings were specified to ensure longevity in the aggressive industrial environment.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Outcome</h3>
              <p className="text-gray-600 leading-relaxed">
                Both tanks were delivered to specification, meeting the facility's operational requirements and the specific engineering demands of the Nyrstar zinc processing environment. The project demonstrates Pacific Water Tanks' capability to deliver specialist industrial tank solutions in complex, demanding facilities.
              </p>
            </div>

            <div>
              <div className="bg-[#F4F6F8] rounded-xl p-6 mb-6">
                <h3 className="font-black text-[#30505b] text-sm tracking-widest uppercase mb-4">Project Snapshot</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: 'Sector', value: 'Refurbish' },
                    { label: 'Location', value: 'Hobart, Tasmania' },
                    { label: 'Scope', value: '2 × industrial tanks' },
                    { label: 'Application', value: 'Industrial process water' },
                    { label: 'Environment', value: 'Zinc processing facility' },
                    { label: 'Status', value: 'Delivered to specification' },
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
                  {['Custom Tank Design & Engineering', 'Professional Tank Installation', 'Foundation & Civil Integration'].map((s) => (
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

      <CTABanner heading="NEED AN INDUSTRIAL TANK SOLUTION?" subheading="Contact us to discuss your industrial water storage requirements — corrosive environments included." primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }} secondaryCTA={{ label: 'View All Projects', href: '/projects' }} variant="navy" />
    </>
  )
}
