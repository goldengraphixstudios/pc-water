import type { Metadata } from 'next'
import Image from '@/components/AppImage'
import CTABanner from '@/components/CTABanner'
import ProjectCard, { type ProjectItem } from '@/components/projects/ProjectCard'
import ProjectsBrowser from '@/components/projects/ProjectsBrowser'
import ProjectsSidebar from '@/components/projects/ProjectsSidebar'
import { getPublicPosts, getPublicProjects } from '@/lib/cms/queries'
import { enrichArticles, sortByNewest } from '@/lib/cms/taxonomy'
import { SHELL } from '@/lib/shell'

export const metadata: Metadata = {
  title: 'Water Infrastructure Projects',
  description:
    'Water storage infrastructure delivered across government, mining, industrial, and remote community sectors across Australia.',
  keywords: [
    'water infrastructure projects australia',
    'water tank project portfolio',
    'engineered water storage projects',
  ],
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Infrastructure Projects',
    description:
      'Water storage infrastructure delivered across government, mining, industrial, and remote community sectors across Australia.',
    url: 'https://pcwater.com.au/projects',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },
}

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

/** The project given the flagship slot. Falls back to the first featured. */
const FLAGSHIP_SLUG = 'hobart-nyrstar'

/** Compound sectors like "Hydro Energy / Government" become two facets. */
function splitSector(sector: string): string[] {
  return sector
    .split('/')
    .map((s) => s.trim())
    .filter(Boolean)
}

/** Best-effort state extraction from the free-text location field. */
function stateFromLocation(location: string): string | null {
  const map: Array<[RegExp, string]> = [
    [/queensland|\bqld\b/i, 'Queensland'],
    [/tasmania|\btas\b/i, 'Tasmania'],
    [/new south wales|\bnsw\b/i, 'New South Wales'],
    [/victoria|\bvic\b/i, 'Victoria'],
    [/northern territory|\bnt\b/i, 'Northern Territory'],
    [/south australia|\bsa\b/i, 'South Australia'],
    [/western australia|\bwa\b/i, 'Western Australia'],
  ]
  for (const [re, name] of map) if (re.test(location)) return name
  return null
}

export default async function ProjectsPage() {
  const [projects, posts] = await Promise.all([getPublicProjects(), getPublicPosts()])

  const items: ProjectItem[] = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    sector: p.sector,
    sectorTags: splitSector(p.sector),
    location: p.location,
    scope: p.scope || p.summary,
    imageSrc: p.heroImageUrl,
    featured: p.featured,
    client: p.clientOrganisation ?? null,
    projectStatus: p.projectStatus ?? null,
  }))

  const lead = items.find((p) => p.slug === FLAGSHIP_SLUG) ?? items.find((p) => p.featured) ?? items[0]
  const rest = items.filter((p) => p.slug !== lead?.slug)
  /* The rail shows the other featured projects only — three fill the column
     beside the flagship card without crowding it. */
  const alsoFeatured = rest.filter((p) => p.featured).slice(0, 3)

  // Sidebar facets
  const locationCounts = new Map<string, number>()
  for (const p of projects) {
    const state = stateFromLocation(p.location)
    if (state) locationCounts.set(state, (locationCounts.get(state) ?? 0) + 1)
  }
  const locations = [...locationCounts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))

  const serviceCounts = new Map<string, number>()
  for (const p of projects) {
    for (const s of p.servicesDelivered ?? []) {
      const label = s.trim()
      if (label) serviceCounts.set(label, (serviceCounts.get(label) ?? 0) + 1)
    }
  }
  const services = [...serviceCounts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
    .slice(0, 12)

  const relatedArticles = sortByNewest(enrichArticles(posts)).slice(0, 4)

  const sectorCount = new Set(items.flatMap((p) => p.sectorTags)).size

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Water Infrastructure Projects',
    description:
      'Water storage infrastructure delivered across government, mining, industrial and remote community sectors across Australia.',
    url: `${siteUrl}/projects`,
    publisher: { '@type': 'Organization', name: 'PC Water Infrastructure', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}/projects/${p.slug}`,
        name: p.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Masthead ── */}
      <section className="relative flex min-h-[380px] items-end overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36">
        <Image
          src="/projects/borumba-03.jpg"
          alt="PC Water Infrastructure project portfolio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/65 via-[#0d1b2a]/80 to-[#0d1b2a]/95" />
        <div className={`relative z-10 ${SHELL}`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3e91ce]">/ Our Work</p>
              <h1 className="mb-4 text-[2.1rem] font-black leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                BUILT TO PERFORM.<br />
                <span className="text-[#3e91ce]">DESIGNED TO LAST.</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-gray-300">
                From remote Indigenous communities to industrial facilities, hydro energy schemes to municipal
                reservoirs — delivered with the same commitment to engineering excellence and lasting performance.
              </p>
            </div>
            <dl className="flex gap-8 lg:pb-1">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">Projects</dt>
                <dd className="text-3xl font-black text-white">{items.length}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">Sectors</dt>
                <dd className="text-3xl font-black text-white">{sectorCount}</dd>
              </div>
              {locations.length > 0 && (
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">States</dt>
                  <dd className="text-3xl font-black text-white">{locations.length}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Flagship project ── */}
      {lead && (
        <section className="bg-[#0d1b2a] pb-10 pt-6 sm:pb-14 sm:pt-8">
          <div className={SHELL}>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
              <ProjectCard project={lead} variant="lead" />
              {alsoFeatured.length > 0 && (
                <div className="flex flex-col">
                  <h2 className="mb-1 border-b border-white/20 pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    Also in the portfolio
                  </h2>
                  <div className="flex flex-1 flex-col divide-y divide-white/10">
                    {alsoFeatured.map((p) => (
                      <ProjectCard key={p.slug} project={p} variant="rail" />
                    ))}
                  </div>
                  <a
                    href="#portfolio"
                    className="mt-3 inline-flex items-center gap-1.5 border-t border-white/20 pt-3 text-[13px] font-bold text-[#7fc2f0] transition-colors hover:text-white"
                  >
                    See all {items.length} projects
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Portfolio ── */}
      <section id="portfolio" className="scroll-mt-20 bg-[#f4f6f8] py-8 sm:py-10">
        <div className={SHELL}>
          <div className="mb-5 flex items-baseline justify-between gap-4 border-b-2 border-[#0d1b2a] pb-2">
            <h2 className="text-lg font-black uppercase tracking-tight text-[#0d1b2a] sm:text-xl">
              The Full Portfolio
            </h2>
            <span className="font-mono text-[11px] text-gray-500">{items.length} projects</span>
          </div>

          <ProjectsBrowser
            projects={items}
            sidebar={
              <ProjectsSidebar
                locations={locations}
                services={services}
                relatedArticles={relatedArticles}
              />
            }
          />
        </div>
      </section>

      <CTABanner
        heading="DISCUSS A SIMILAR PROJECT"
        subheading="Tell us about your water storage challenge. Our team will respond within one business day."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }}
        variant="navy"
      />
    </>
  )
}
