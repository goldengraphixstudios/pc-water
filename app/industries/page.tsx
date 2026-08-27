import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import CrossLinks from '@/components/editorial/CrossLinks'
import EntryCard from '@/components/editorial/EntryCard'
import FlagshipBlock from '@/components/editorial/FlagshipBlock'
import Masthead from '@/components/editorial/Masthead'
import RuleHeading from '@/components/editorial/RuleHeading'
import { Rail, RailArticles, RailContact, RailDownload, RailLinks, RailPanel } from '@/components/editorial/RailPanel'
import { getPublicPosts, getPublicProjects } from '@/lib/cms/queries'
import { enrichArticles, sortByNewest } from '@/lib/cms/taxonomy'
import { SHELL } from '@/lib/shell'
import { industries, STANDARDS } from '@/lib/site-directory'

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: 'Water Infrastructure Industries We Serve',
  description:
    'PC Water Infrastructure delivers water storage solutions to government, mining, industrial, commercial, and remote community sectors across Australia.',
  keywords: [
    'water infrastructure industries',
    'water tank solutions by industry',
    'sector specific water infrastructure australia',
  ],
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Infrastructure Industries We Serve',
    description: 'PC Water Infrastructure delivers water storage solutions to government, mining, industrial, commercial, and remote community sectors across Australia.',
    url: 'https://pcwater.com.au/industries',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },
}

/** The sector given the flagship slot at the top of the page. */
const FLAGSHIP_HREF = '/industries/government-councils'


const standards = STANDARDS

const relatedServices = [
  { label: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
  { label: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
  { label: 'Remote Area Project Delivery', href: '/services/remote-area-delivery' },
  { label: 'Tender & Procurement Support', href: '/services/tender-procurement-support' },
  { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
  { label: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
]

export default async function IndustriesPage() {
  const [projects, posts] = await Promise.all([getPublicProjects(), getPublicPosts()])

  const lead = industries.find((i) => i.href === FLAGSHIP_HREF) ?? industries[0]
  const rail = industries.filter((i) => i.href !== lead.href).slice(0, 3)

  const relatedArticles = sortByNewest(enrichArticles(posts))
    .slice(0, 4)
    .map((a) => ({ id: a.id, slug: a.slug, title: a.title, readTime: a.readTime, kicker: a.category.shortName }))

  /* Real delivered work, so each sector page is reachable from evidence
     rather than only from the marketing copy above it. */
  const proof = projects.slice(0, 3).map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.title,
    blurb: p.scope || p.summary,
    kicker: p.sector,
    imageSrc: p.heroImageUrl,
    meta: p.location,
  }))

  const states = new Set(
    projects
      .map((p) => /queensland|qld/i.test(p.location) ? 'QLD'
        : /tasmania|tas/i.test(p.location) ? 'TAS'
        : /new south wales|nsw/i.test(p.location) ? 'NSW'
        : /victoria|vic/i.test(p.location) ? 'VIC'
        : /northern territory|nt/i.test(p.location) ? 'NT'
        : /south australia/i.test(p.location) ? 'SA'
        : /western australia|wa/i.test(p.location) ? 'WA'
        : null)
      .filter(Boolean),
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industries We Serve',
    description:
      'Water storage and treatment infrastructure delivered to government, mining, industrial, commercial and remote community sectors across Australia.',
    url: `${siteUrl}/industries`,
    publisher: { '@type': 'Organization', name: 'PC Water Infrastructure', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: industries.length,
      itemListElement: industries.map((i, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${siteUrl}${i.href}`,
        name: i.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Industries', url: `${siteUrl}/industries` },
        ]}
      />

      <Masthead
        kicker="Industries"
        title={
          <>
            BUILT FOR<br />
            <span className="text-[#3e91ce]">YOUR SECTOR.</span>
          </>
        }
        lead="Every industry has different water storage demands — different standards, procurement rules, site conditions and risk. These are the sectors we work in, and how our delivery model changes to suit each one."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
        imageSrc="/heroes/industries.jpg"
        imageAlt="PC Water Infrastructure serving government, mining, industrial and remote community sectors across Australia"
        stats={[
          { label: 'Sectors', value: industries.length },
          { label: 'Projects', value: projects.length },
          { label: 'States', value: states.size },
        ]}
      />

      <FlagshipBlock
        lead={lead}
        rail={rail}
        railTitle="Also serving"
        seeAll={{ label: `See all ${industries.length} sectors`, href: '#sectors' }}
      />

      {/* ── All sectors + rail ── */}
      <section id="sectors" className="scroll-mt-20 bg-[#f4f6f8] py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
            <div>
              <RuleHeading meta={`${industries.length} sectors`}>Every Sector We Serve</RuleHeading>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {industries.map((i) => (
                  <EntryCard key={i.href} entry={i} />
                ))}
              </div>
            </div>

            <Rail>
              <RailPanel title="Applicable standards">
                <div className="flex flex-wrap gap-1.5">
                  {standards.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-medium text-[#30505b]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </RailPanel>

              <RailPanel title="Services behind them">
                <RailLinks links={relatedServices} />
              </RailPanel>

              <RailDownload />
              <RailArticles articles={relatedArticles} />
              <RailContact
                heading="Not sure which sector fits?"
                body="Tell us about the asset and the standard you answer to — we'll point you to the right team."
                label="Talk to an engineer"
              />
            </Rail>
          </div>
        </div>
      </section>

      {/* ── Proof ── */}
      {proof.length > 0 && (
        <section className="bg-[#0d1b2a] py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading light meta={`${projects.length} in the portfolio`}>
              Sector Experience, Delivered
            </RuleHeading>
            <CrossLinks links={proof} dark columns={3} />
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

      {/* ── Why sector experience matters ── */}
      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <RuleHeading>Sector Experience That Matters</RuleHeading>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <p className="max-w-[68ch] text-[17px] font-medium leading-relaxed text-[#30505b]">
              Understanding the compliance environment, procurement constraints, and operational realities of each
              sector allows us to deliver solutions that genuinely fit — not just technically, but commercially and
              operationally.
            </p>
            <p className="max-w-[68ch] leading-relaxed text-gray-600">
              Our sector experience spans government, mining, industrial, commercial, and some of Australia&apos;s most
              remote communities. That range is the reason a council tender, a mine site upgrade and a remote community
              reservoir can all be delivered by the same team without the documentation, logistics or compliance
              expectations of any one of them being treated as an afterthought.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="FIND YOUR SECTOR SOLUTION"
        subheading="Tell us your industry and project requirements — we will respond with relevant experience and a path forward."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }}
        variant="navy"
      />
    </>
  )
}
