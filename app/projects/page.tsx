import type { Metadata } from 'next'
import Image from '@/components/AppImage'
import ProjectsGrid from '@/components/ProjectsGrid'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Pacific Water Tanks project portfolio — water storage infrastructure delivered across government, mining, industrial, commercial, and remote community sectors across Australia.',
}

export default function ProjectsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <Image
          src="/projects/borumba-03.jpg"
          alt="Pacific Water Tanks project portfolio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Our Work</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            BUILT TO PERFORM.<br />DESIGNED TO LAST.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From remote Indigenous communities to industrial facilities, hydro energy schemes to municipal reservoirs — every Pacific Water Tanks project is delivered with the same commitment to engineering excellence and lasting performance.
          </p>
        </div>
      </section>

      <ProjectsGrid />

      <CTABanner
        heading="DISCUSS A SIMILAR PROJECT"
        subheading="Tell us about your water storage challenge. Our team will respond within one business day."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '#' }}
        variant="navy"
      />
    </>
  )
}
