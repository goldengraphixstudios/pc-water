import type { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'

export const metadata: Metadata = {
  title: 'Borumba Hydro Scheme | Projects',
  description:
    'PC Water Infrastructure delivered 2 × 521KL tanks for the Borumba Hydro Scheme — custom dual-purpose design for potable and effluent storage at a remote Queensland dam site.',
}

const gallery = [
  { src: '/projects/borumba-01.jpg', alt: 'Aerial view of Borumba tank site' },
  { src: '/projects/borumba-02.jpg', alt: 'Borumba Hydro tank aerial overview' },
  { src: '/projects/borumba-03.jpg', alt: 'Borumba dam site drone photography' },
  { src: '/projects/borumba-04.jpg', alt: 'Borumba tank installation progress' },
  { src: '/projects/borumba-05.jpg', alt: 'Borumba Hydro completed tanks' },
  { src: '/projects/borumba-06.jpg', alt: 'Borumba site completion aerial' },
]

export default function BorumbaHydroPage() {
  return (
    <>
      {/* Hero with real project image */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/projects/borumba-02.jpg"
          alt="Borumba Hydro Scheme — aerial view of tank installation"
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
            <span className="bg-[#3e91ce] text-white text-xs font-semibold px-3 py-1 rounded-full">Hydro Energy / Government</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Custom Tank Design</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Remote Delivery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Borumba Hydro Scheme</h1>
          <p className="text-gray-300 text-lg">Borumba Dam, Queensland</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#30505b] mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            The Borumba Hydro Scheme is a major renewable energy infrastructure project in Queensland. PC Water Infrastructure was engaged to design and install two 521KL tanks serving dual purposes — potable water storage and effluent containment — as part of the broader scheme infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The remote site location at Borumba Dam required careful project planning, remote logistics coordination, and engineering design that accounted for site accessibility, environmental conditions, and the stringent potable water standards required for one of the two tanks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The project was delivered on schedule, contributing critical water infrastructure to support the Borumba Hydro scheme operations.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-10 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering a dual-purpose tank system to a remote dam site with strict potable water engineering requirements presented multiple challenges. The design had to simultaneously meet AS4020 potable water compliance for one tank and engineering requirements for effluent storage in the other — while being constructable in a remote, access-constrained environment on a defined program.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
            PC Water Infrastructure developed a custom dual-purpose tank design certified by RPEQ engineers. The potable water tank was designed to AS4020 standards with RPVC liner system, while the effluent storage tank was engineered for its specific containment requirements. Civil integration and remote logistics were managed by PC Water Infrastructure as a single-point delivery package.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Outcome</h3>
              <p className="text-gray-600 leading-relaxed">
                Both tanks were delivered on schedule and to specification, providing critical water infrastructure for the Borumba Hydro scheme. The dual-purpose design met all compliance requirements and has been integrated successfully into the scheme's ongoing operations.
              </p>
            </div>

            <div>
              <div className="bg-[#F4F6F8] rounded-xl p-6 mb-6">
                <h3 className="font-black text-[#30505b] text-sm tracking-widest uppercase mb-4">Project Snapshot</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: 'Sector', value: 'Hydro Energy / Government' },
                    { label: 'Location', value: 'Borumba Dam, Queensland' },
                    { label: 'Scope', value: '2 × 521KL tanks' },
                    { label: 'Application', value: 'Potable water + effluent storage' },
                    { label: 'Key Standards', value: 'AS2304, AS4020' },
                    { label: 'Delivery', value: 'Remote project delivery' },
                    { label: 'Status', value: 'Completed — on schedule' },
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
                  {['Custom Tank Design & Engineering', 'Remote Area Project Delivery', 'RPVC Liner Systems', 'Foundation & Civil Integration', 'Tank Installation'].map((s) => (
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

      <CTABanner heading="DISCUSS A SIMILAR PROJECT" subheading="Planning a remote water infrastructure project? Contact us to discuss your requirements." primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }} secondaryCTA={{ label: 'View All Projects', href: '/projects' }} />
    </>
  )
}
