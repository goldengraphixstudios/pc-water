import type { Metadata } from 'next'
import Link from 'next/link'

import AppImage from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'
import { getPublicProjectBySlug, getPublicProjects, renderContentParagraphs } from '@/lib/cms/queries'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const projects = await getPublicProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getPublicProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.seoTitle || `${project.title} | Projects`,
    description: project.seoDescription || project.summary,
  }
}

export default async function ManagedProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getPublicProjectBySlug(slug)

  if (!project) {
    return null
  }

  const paragraphs = renderContentParagraphs(project.content)
  const gallery = (project.galleryUrls.length ? project.galleryUrls : project.heroImageUrl ? [project.heroImageUrl] : [])
    .map((src, index) => ({
      src,
      alt: `${project.title} image ${index + 1}`,
    }))

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[480px] flex items-end">
        {project.heroImageUrl ? (
          <AppImage
            src={project.heroImageUrl}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce]" />
        )}
        <div className="absolute inset-0 bg-[#0d1b2a]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[#3e91ce] text-sm mb-6 hover:gap-3 transition-all">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Projects
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#3e91ce] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {project.sector}
            </span>
            {project.tags.map((tag) => (
              <span key={tag.slug} className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {tag.name}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{project.title}</h1>
          <p className="text-gray-300 text-lg">{project.location}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#30505b] mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{project.summary}</p>
              <div className="space-y-6">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#F4F6F8] rounded-xl p-6 mb-6">
                <h3 className="font-black text-[#30505b] text-sm tracking-widest uppercase mb-4">Project Snapshot</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { label: 'Sector', value: project.sector },
                    { label: 'Location', value: project.location },
                    { label: 'Scope', value: project.scope },
                    { label: 'Status', value: project.status },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 py-2 border-b border-gray-200 last:border-0">
                      <dt className="text-gray-500 font-medium">{item.label}</dt>
                      <dd className="text-[#30505b] font-semibold text-right">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-[#30505b] rounded-xl p-6">
                <h3 className="font-black text-white text-sm tracking-widest uppercase mb-3">Tag Set</h3>
                <ul className="space-y-2">
                  {project.tags.map((tag) => (
                    <li key={tag.slug} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0" />
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="bg-[#F4F6F8] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-black text-[#30505b] mb-8">Project Gallery</h2>
            <GalleryLightbox images={gallery} />
          </div>
        </section>
      )}

      <CTABanner
        heading="DISCUSS A SIMILAR PROJECT"
        subheading="Tell us about your asset, site, or delivery challenge and we’ll map the right next step."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Resources', href: '/resources' }}
        variant="navy"
      />
    </>
  )
}
