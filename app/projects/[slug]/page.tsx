import type { Metadata } from 'next'
import Link from 'next/link'

import AppImage from '@/components/AppImage'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'
import { getProjectServiceOption, PROJECT_SERVICE_FALLBACKS } from '@/lib/cms/project-services'
import { getPublicProjectBySlug, getPublicProjects, renderContentBlocks } from '@/lib/cms/queries'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const projects = await getPublicProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

function truncateMeta(text: string | null | undefined, max = 155): string {
  if (!text) return ''
  const trimmed = text.trim()
  if (trimmed.length <= max) return trimmed
  return trimmed.slice(0, max - 1).replace(/[,\s]+$/, '') + '…'
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

  const siteUrlBase = process.env.SITE_URL || 'https://pcwater.com.au'
  const description = truncateMeta(project.seoDescription || project.summary)
  const ogTitle = truncateMeta(project.seoTitle || project.title, 60)

  return {
    title: project.seoTitle ? { absolute: project.seoTitle } : project.title,
    description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      siteName: 'PC Water Infrastructure',
      title: ogTitle,
      description,
      url: `${siteUrlBase}/projects/${slug}`,
      images: [{ url: '/hero.png', width: 1200, height: 630, alt: `${project.title} — PC Water Infrastructure` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/hero.png'],
    },
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

  // Wrap-around prev/next so every project receives incoming links from its neighbours
  const allProjects = await getPublicProjects()
  const projectIndex = allProjects.findIndex((candidate) => candidate.slug === slug)
  const prevProject = allProjects.length > 1 ? allProjects[(projectIndex - 1 + allProjects.length) % allProjects.length] : null
  const nextProject = allProjects.length > 1 ? allProjects[(projectIndex + 1) % allProjects.length] : null

  const blocks = renderContentBlocks(project.content)
  const serviceNames = project.servicesDelivered?.length
    ? project.servicesDelivered
    : PROJECT_SERVICE_FALLBACKS[slug] ?? []
  const services = serviceNames.map(getProjectServiceOption)
  const gallery = (project.galleryUrls.length ? project.galleryUrls : project.heroImageUrl ? [project.heroImageUrl] : [])
    .map((src, index) => ({
      src,
      alt: `${project.title} image ${index + 1}`,
    }))

  const projectUrl = `${siteUrl}/projects/${slug}`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Projects', url: `${siteUrl}/projects` },
          { name: project.title, url: projectUrl },
        ]}
      />
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce]" />
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
            <span className="bg-[#2a72ad] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {project.sector}
            </span>
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
              <div>
                {blocks.map((block, i) =>
                  block.type === 'heading' ? (
                    <h3 key={i} className="text-xl font-black text-[#30505b] mt-10 mb-4">
                      {block.text}
                    </h3>
                  ) : (
                    <p key={i} className="text-gray-600 leading-relaxed mb-6">
                      {block.text}
                    </p>
                  )
                )}
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
                    { label: 'Client / Organisation', value: project.clientOrganisation },
                    { label: 'Contract Value', value: project.contractValue },
                    { label: 'Status', value: project.projectStatus || 'Completed' },
                  ].filter((item) => item.value?.trim()).map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 py-2 border-b border-gray-200 last:border-0">
                      <dt className="text-gray-500 font-medium">{item.label}</dt>
                      <dd className="text-[#30505b] font-semibold text-right whitespace-pre-line">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {services.length > 0 && (
                <div className="bg-[#30505b] rounded-xl p-6">
                  <h3 className="font-black text-white text-sm tracking-widest uppercase mb-3">Services Delivered</h3>
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <li key={service.href} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0" />
                        <Link href={service.href} className="text-gray-300 hover:text-[#3e91ce] transition-colors">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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

      {prevProject && nextProject && (
        <section className="bg-white py-10 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="rounded-xl border border-gray-200 px-5 py-4 hover:border-[#2a72ad] transition-colors"
            >
              <p className="text-xs text-gray-500 mb-1">← Previous project</p>
              <p className="font-bold text-[#30505b]">{prevProject.title}</p>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="rounded-xl border border-gray-200 px-5 py-4 hover:border-[#2a72ad] transition-colors sm:text-right"
            >
              <p className="text-xs text-gray-500 mb-1">Next project →</p>
              <p className="font-bold text-[#30505b]">{nextProject.title}</p>
            </Link>
          </div>
        </section>
      )}

      <CTABanner
        heading="DISCUSS A SIMILAR PROJECT"
        subheading="Tell us about your asset, site, or delivery challenge and we'll map the right next step."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Resources', href: '/resources' }}
        variant="navy"
      />
    </>
  )
}
