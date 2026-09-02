import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import GalleryLightbox from '@/components/GalleryLightbox'
import CrossLinks from '@/components/editorial/CrossLinks'
import Masthead from '@/components/editorial/Masthead'
import PhotoMosaic from '@/components/editorial/PhotoMosaic'
import RuleHeading from '@/components/editorial/RuleHeading'
import {
  Rail,
  RailArticles,
  RailContact,
  RailDownload,
  RailFacts,
  RailLinks,
  RailPanel,
} from '@/components/editorial/RailPanel'
import { getProjectServiceOption, PROJECT_SERVICE_FALLBACKS } from '@/lib/cms/project-services'
import { getPublicPosts, getPublicProjectBySlug, getPublicProjects, renderContentBlocks } from '@/lib/cms/queries'
import { enrichArticles, sortByNewest } from '@/lib/cms/taxonomy'
import { SHELL } from '@/lib/shell'

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
  const [project, allProjects, posts] = await Promise.all([
    getPublicProjectBySlug(slug),
    getPublicProjects(),
    getPublicPosts(),
  ])

  if (!project) {
    notFound()
  }

  // Wrap-around prev/next so every project receives incoming links from its neighbours
  const projectIndex = allProjects.findIndex((candidate) => candidate.slug === slug)
  const prevProject = allProjects.length > 1 ? allProjects[(projectIndex - 1 + allProjects.length) % allProjects.length] : null
  const nextProject = allProjects.length > 1 ? allProjects[(projectIndex + 1) % allProjects.length] : null

  const blocks = renderContentBlocks(project.content)
  const serviceNames = project.servicesDelivered?.length
    ? project.servicesDelivered
    : PROJECT_SERVICE_FALLBACKS[slug] ?? []
  const services = serviceNames.map(getProjectServiceOption)

  const galleryUrls = project.galleryUrls.length
    ? project.galleryUrls
    : project.heroImageUrl
      ? [project.heroImageUrl]
      : []
  const gallery = galleryUrls.map((src, index) => ({
    src,
    alt: `${project.title} image ${index + 1}`,
  }))
  /* The opening spread reuses the first five frames; the lightbox below still
     carries the complete set so nothing is unreachable. */
  const spread = gallery.slice(0, 5)

  /* Sibling projects, walking forward from this one and wrapping around, so
     each project points at a different trio than its neighbours do. */
  const siblings = allProjects
    .map((_, i) => allProjects[(projectIndex + 1 + i) % allProjects.length])
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({
      href: `/projects/${p.slug}`,
      title: p.title,
      blurb: p.scope || p.summary,
      kicker: p.sector,
      imageSrc: p.heroImageUrl,
      meta: p.location,
    }))

  const relatedArticles = sortByNewest(enrichArticles(posts))
    .slice(0, 4)
    .map((a) => ({
      id: a.id,
      slug: a.slug,
      title: a.title,
      readTime: a.readTime,
      kicker: a.category.shortName,
    }))

  const facts = [
    { label: 'Sector', value: project.sector },
    { label: 'Location', value: project.location },
    { label: 'Scope', value: project.scope },
    { label: 'Client', value: project.clientOrganisation },
    { label: 'Status', value: project.projectStatus || 'Completed' },
    { label: 'Contract value', value: project.contractValue },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value?.trim()))

  const stats = [
    { label: 'Sector', value: project.sector.split('/')[0].trim() },
    { label: 'Status', value: project.projectStatus || 'Completed' },
    ...(gallery.length > 1 ? [{ label: 'Images', value: gallery.length }] : []),
  ]

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

      <Masthead
        kicker="Project"
        title={project.title}
        lead={project.summary}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
        imageSrc={project.heroImageUrl}
        imageAlt={project.title}
        stats={stats}
        aside={
          <p className="flex items-start gap-2 text-sm leading-relaxed text-gray-300">
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3e91ce]"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {project.location}
          </p>
        }
        primaryCta={{ label: 'Discuss a Similar Project', href: '/contact' }}
      />

      {/* ── Opening spread ── */}
      {spread.length > 1 && (
        <section className="bg-[#0d1b2a] py-5 sm:py-6">
          <div className={SHELL}>
            <PhotoMosaic
              images={spread}
              caption={`${project.title} — ${project.location}`}
            />
          </div>
        </section>
      )}

      {/* ── Body: spec rail · narrative · context rail ── */}
      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[248px_minmax(0,1fr)_320px]">
            {/* Left rail — the spec sheet */}
            <div className="order-2 lg:order-none lg:col-span-2 xl:col-span-1 xl:col-start-1 xl:row-start-1">
              <Rail variant="wrap">
                <RailPanel title="Project snapshot">
                  <RailFacts facts={facts} />
                </RailPanel>

                {services.length > 0 && (
                  <RailPanel title="Services delivered">
                    <RailLinks links={services.map((s) => ({ label: s.name, href: s.href }))} />
                  </RailPanel>
                )}

                <RailContact />
              </Rail>
            </div>

            {/* Centre — the narrative */}
            <div className="order-1 lg:order-none xl:col-start-2 xl:row-start-1">
              <RuleHeading meta={project.projectStatus || 'Completed'}>Project Overview</RuleHeading>
              <p className="mb-6 max-w-[72ch] text-[17px] font-medium leading-relaxed text-[#30505b]">
                {project.summary}
              </p>
              <div className="max-w-[72ch]">
                {blocks.map((block, i) =>
                  block.type === 'heading' ? (
                    <h3 key={i} className="mt-9 mb-3 text-xl font-black text-[#0d1b2a]">
                      {block.text}
                    </h3>
                  ) : (
                    <p key={i} className="mb-5 leading-relaxed text-gray-600">
                      {block.text}
                    </p>
                  )
                )}
              </div>

              {services.length > 0 && (
                <div className="mt-10 border-t border-gray-200 pt-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2a72ad]">
                    What this project involved
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="inline-flex items-center rounded-lg border border-gray-300 px-3.5 py-2 text-[13px] font-medium text-[#30505b] transition-colors hover:border-[#3e91ce] hover:bg-[#3e91ce]/5 hover:text-[#2a72ad]"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right rail — wider context */}
            <div className="order-3 lg:order-none xl:col-start-3 xl:row-start-1">
              <Rail>
                <RailArticles articles={relatedArticles} />
                <RailDownload />
                <RailPanel title="More from the portfolio">
                  <RailLinks
                    links={[
                      ...(prevProject
                        ? [{ label: prevProject.title, href: `/projects/${prevProject.slug}`, meta: '←' }]
                        : []),
                      ...(nextProject && nextProject.slug !== prevProject?.slug
                        ? [{ label: nextProject.title, href: `/projects/${nextProject.slug}`, meta: '→' }]
                        : []),
                      { label: `All ${allProjects.length} projects`, href: '/projects' },
                    ]}
                  />
                </RailPanel>
              </Rail>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full gallery ── */}
      {gallery.length > 0 && (
        <section className="border-t border-gray-200 bg-[#f4f6f8] py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading meta={`${gallery.length} ${gallery.length === 1 ? 'image' : 'images'}`}>
              Project Gallery
            </RuleHeading>
            <GalleryLightbox images={gallery} />
          </div>
        </section>
      )}

      {/* ── Sibling projects ── */}
      {siblings.length > 0 && (
        <section className="bg-[#0d1b2a] py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading light meta={`${allProjects.length} in total`}>
              Elsewhere in the portfolio
            </RuleHeading>
            <CrossLinks links={siblings} dark columns={3} />
            <Link
              href="/projects"
              className="mt-5 inline-flex items-center gap-1.5 border-t border-white/20 pt-4 text-[13px] font-bold text-[#7fc2f0] transition-colors hover:text-white"
            >
              See every project
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
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
