import type { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'

const gallery = [
  { src: '/projects/albury-01.jpg', alt: 'Albury reservoir reline and refurbishment' },
]

export const metadata: Metadata = {
  title: 'Albury Reservoir Reline | Projects',
  description:
    'PC Water Infrastructure delivered a complete 600kL reservoir reline and refurbishment in Albury NSW — restoring AS4020 potable water compliance and extending asset life.',
}

export default function AlburyReservoirPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/projects/albury-01.jpg"
          alt="Albury 600kL reservoir reline and refurbishment"
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
            <span className="bg-[#3e91ce] text-white text-xs font-semibold px-3 py-1 rounded-full">Municipal / Government</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">RPVC Liner</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Refurbishment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Albury Reservoir Reline</h1>
          <p className="text-gray-300 text-lg">Albury, New South Wales</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#30505b] mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
            An aging 600kL municipal reservoir in Albury, New South Wales had reached a point where corrosion and liner deterioration created compliance risk for potable water storage. PC Water Infrastructure was engaged to deliver a complete reline and refurbishment — restoring the reservoir to AS4020 potable water compliance and extending its service life by decades.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
            Rather than recommending reservoir replacement — which would have been significantly more expensive and disruptive — PC Water Infrastructure's assessment identified that the underlying structure remained sound and that RPVC liner installation combined with targeted refurbishment would fully restore the asset.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-10 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                The reservoir's original liner had deteriorated to a point where potable water compliance could not be maintained. Corrosion of internal surfaces posed contamination risk, and the asset required urgent intervention. The challenge was to deliver a cost-effective solution that restored compliance without the time and cost of full asset replacement.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
            PC Water Infrastructure conducted a structural assessment confirming the reservoir shell remained sound. An RPVC liner installation program was developed — the tank was taken offline, the interior cleaned and prepared, and specialist RPVC welders installed a new AS4020-compliant membrane lining. Full refurbishment of fittings and access infrastructure was completed alongside the liner installation.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Outcome</h3>
              <p className="text-gray-600 leading-relaxed">
                The Albury reservoir was returned to service in AS4020 potable water compliance, with an asset life extended by an estimated 20+ years. The total cost of the liner and refurbishment was a fraction of reservoir replacement — demonstrating the significant value of targeted RPVC liner investment over asset replacement for sound structures.
              </p>
            </div>

            <div>
              <div className="bg-[#F4F6F8] rounded-xl p-6 mb-6">
                <h3 className="font-black text-[#30505b] text-sm tracking-widest uppercase mb-4">Project Snapshot</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: 'Sector', value: 'Municipal / Government' },
                    { label: 'Location', value: 'Albury, NSW' },
                    { label: 'Scope', value: '1 × 600kL reservoir' },
                    { label: 'Service', value: 'RPVC reline + refurbishment' },
                    { label: 'Standard', value: 'AS4020 potable water' },
                    { label: 'Life Extension', value: '20+ years' },
                    { label: 'Status', value: 'Completed — returned to service' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 py-2 border-b border-gray-200 last:border-0">
                      <dt className="text-gray-500 font-medium">{item.label}</dt>
                      <dd className="text-[#30505b] font-semibold text-right">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Project image — click to view full size */}
              <div className="mb-6">
                <GalleryLightbox images={gallery} />
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

      <CTABanner heading="GOT AN AGING TANK THAT NEEDS RELINING?" subheading="An RPVC liner could restore compliance and extend life at a fraction of replacement cost." primaryCTA={{ label: 'Request an Assessment', href: '/contact' }} secondaryCTA={{ label: 'Learn About RPVC Liners', href: '/services/rpvc-liner-systems' }} variant="navy" />
    </>
  )
}
