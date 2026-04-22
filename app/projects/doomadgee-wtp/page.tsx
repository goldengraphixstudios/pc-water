import type { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'

export const metadata: Metadata = {
  title: 'Doomadgee 2ML Reservoir | Projects',
  description:
    'Pacific Water Tanks delivered a 2ML ground-level reservoir for Doomadgee — providing safe water storage to a remote Indigenous community in Queensland.',
}

const gallery = [
  { src: '/projects/doomadgee-01.jpg', alt: 'Doomadgee WTP earthworks site' },
  { src: '/projects/doomadgee-02.jpg', alt: 'Doomadgee WTP ground preparation' },
  { src: '/projects/doomadgee-03.jpg', alt: 'Doomadgee 2ML reservoir earthworks' },
  { src: '/projects/doomadgee-04.jpg', alt: 'Aerial view of Doomadgee WTP tank installation' },
  { src: '/projects/doomadgee-05.jpg', alt: 'Doomadgee WTP aerial drone view' },
  { src: '/projects/doomadgee-06.jpg', alt: 'Doomadgee site earthworks progress' },
]

export default function DoomadgeeWTPPage() {
  return (
    <>
      {/* Hero with real project image */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/projects/doomadgee-04.jpg"
          alt="Doomadgee 2ML Reservoir — aerial view"
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
            <span className="bg-[#3e91ce] text-white text-xs font-semibold px-3 py-1 rounded-full">Remote Community / Government</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Remote Delivery</span>
            <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Indigenous Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Doomadgee 2ML Reservoir</h1>
          <p className="text-gray-300 text-lg">Doomadgee, Queensland (Remote)</p>
        </div>
      </section>

      {/* Cultural acknowledgement */}
      <section className="bg-[#30505b] py-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-4">
          <div className="relative w-12 h-8 flex-shrink-0">
            <Image src="/aboriginal-flag.png" alt="Aboriginal flag" fill className="object-contain" sizes="48px" />
          </div>
          <p className="text-gray-200 text-sm">
            Pacific Water Tanks acknowledges the Traditional Custodians of the land at Doomadgee and pays respect to Elders past, present, and emerging. We are proud to have contributed to safe water access for this community.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#30505b] mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Doomadgee is a remote Indigenous community in Queensland's Gulf Country, located approximately 200 kilometres south of the Gulf of Carpentaria. Pacific Water Tanks was engaged to deliver a 2-megalitre ground-level tank as part of the community's water treatment plant infrastructure — providing the storage capacity needed to ensure reliable, safe water supply to the community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This project represents one of the most logistically complex deliveries in Pacific Water Tanks' portfolio — combining extreme remoteness, significant civil earthworks in challenging soil conditions, and the responsibility of delivering infrastructure that would directly impact community health and wellbeing.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-10 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Doomadgee's remote location means all materials, equipment, and crew must be transported hundreds of kilometres on unsealed roads that become inaccessible during the wet season. The earthworks required for a 2ML ground-level tank in the local soil conditions presented additional engineering and construction challenges. Working in an Indigenous community required cultural sensitivity and genuine engagement with community representatives throughout the project.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                Pacific Water Tanks coordinated a comprehensive remote project delivery plan — scheduling construction activities within the dry season window, pre-positioning materials ahead of wet season risk, and engaging with community and government representatives to ensure the project proceeded with community support. Civil earthworks were engineered to address the site's specific soil conditions.
              </p>

              <h3 className="text-xl font-black text-[#30505b] mt-8 mb-4">The Outcome</h3>
              <p className="text-gray-600 leading-relaxed">
                The 2ML storage tank was successfully delivered and commissioned, providing the Doomadgee community with the water storage capacity needed to support the water treatment plant's operations. The project contributes directly to safe water access for one of Australia's most remote communities — an outcome Pacific Water Tanks is genuinely proud of.
              </p>
            </div>

            <div>
              <div className="bg-[#F4F6F8] rounded-xl p-6 mb-6">
                <h3 className="font-black text-[#30505b] text-sm tracking-widest uppercase mb-4">Project Snapshot</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: 'Sector', value: 'Remote Community / Government' },
                    { label: 'Location', value: 'Doomadgee, QLD (Remote)' },
                    { label: 'Scope', value: '2ML ground-level tank' },
                    { label: 'Application', value: 'Water treatment plant storage' },
                    { label: 'Community', value: 'Indigenous community' },
                    { label: 'Status', value: 'Completed — operational' },
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
                  {['Remote Area Project Delivery', 'Custom Tank Design & Engineering', 'Foundation & Civil Integration', 'Professional Tank Installation'].map((s) => (
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

      <CTABanner heading="DISCUSS A REMOTE COMMUNITY PROJECT" subheading="Pacific Water Tanks has the expertise to deliver water infrastructure where it matters most." primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }} secondaryCTA={{ label: 'View All Projects', href: '/projects' }} />
    </>
  )
}
