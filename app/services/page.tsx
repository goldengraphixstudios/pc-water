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
import { allServices, pcTanksServices, STANDARDS, waterSolutionsServices } from '@/lib/site-directory'

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: 'Water Infrastructure Services Australia',
  description:
    'End-to-end water infrastructure services across Australia. Tank design, installation, RPVC liners, fire compliance, remote delivery, and asset management.',
  keywords: [
    'water infrastructure services australia',
    'engineered water solutions',
    'water tank services australia',
    'water treatment services australia',
    'remote water infrastructure services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Infrastructure Services Australia',
    description: 'End-to-end water infrastructure services across Australia. Tank design, installation, RPVC liners, fire compliance, remote delivery, and asset management.',
    url: 'https://pcwater.com.au/services',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },
}

/** The umbrella service given the flagship slot. */
const FLAGSHIP_HREF = '/services/project-managed-water-infrastructure'



const divisions = [
  {
    name: 'PC Water Solutions',
    label: 'Division One',
    accent: '#3e91ce',
    body:
      'Our project delivery division, delivering complex water infrastructure and treatment facility works across Australia — civil construction, structural works, mechanical and process installation, pipeline and reticulation, SCADA and electrical integration, and complete treatment plant delivery.',
    services: waterSolutionsServices,
  },
  {
    name: 'PC Tanks',
    label: 'Division Two',
    accent: '#30505b',
    body:
      'Our specialist engineering and supply division for high-performance water storage. Bolted steel, GFS and rectangular systems for potable, process, fire and critical infrastructure applications — plus the full asset lifecycle: lining, corrosion protection, inspection, refurbishment and maintenance.',
    services: pcTanksServices,
  },
]

const standards = STANDARDS

const industryLinks = [
  { label: 'Government & Councils', href: '/industries/government-councils' },
  { label: 'Mining & Resources', href: '/industries/mining-resources' },
  { label: 'Industrial Facilities', href: '/industries/industrial-facilities' },
  { label: 'Commercial & Fire Compliance', href: '/industries/commercial-fire-compliance' },
  { label: 'Remote & Regional Communities', href: '/industries/remote-regional-communities' },
]

export default async function ServicesPage() {
  const [projects, posts] = await Promise.all([getPublicProjects(), getPublicPosts()])

  const lead = allServices.find((s) => s.href === FLAGSHIP_HREF) ?? allServices[0]
  const rail = allServices.filter((s) => s.href !== lead.href).slice(0, 3)

  const relatedArticles = sortByNewest(enrichArticles(posts))
    .slice(0, 4)
    .map((a) => ({ id: a.id, slug: a.slug, title: a.title, readTime: a.readTime, kicker: a.category.shortName }))

  const proof = projects.slice(0, 3).map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.title,
    blurb: p.scope || p.summary,
    kicker: p.sector,
    imageSrc: p.heroImageUrl,
    meta: p.location,
  }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Water Infrastructure Services',
    description:
      'End-to-end water infrastructure services across Australia — design, treatment, installation, lining, inspection and asset management.',
    url: `${siteUrl}/services`,
    publisher: { '@type': 'Organization', name: 'PC Water Infrastructure', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: allServices.length,
      itemListElement: allServices.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}${s.href}`,
        name: s.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
        ]}
      />

      <Masthead
        kicker="What We Do"
        title={
          <>
            COMPLETE WATER<br />
            <span className="text-[#3e91ce]">INFRASTRUCTURE SERVICES.</span>
          </>
        }
        lead="PC Water Solutions and PC Tanks — together as PC Water Infrastructure — deliver every stage of your project, from treatment design and supply through to installation, inspection, lining, and long-term asset management."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        imageSrc="/heroes/services.jpg"
        imageAlt="PC Water Infrastructure — full range of water storage and treatment services across Australia"
        stats={[
          { label: 'Services', value: allServices.length },
          { label: 'Divisions', value: divisions.length },
          { label: 'Projects', value: projects.length },
        ]}
      />

      <FlagshipBlock
        lead={lead}
        rail={rail}
        railTitle="Also from our team"
        seeAll={{ label: `See all ${allServices.length} services`, href: '#catalogue' }}
      />

      {/* ── Divisions ── */}
      <section className="border-b border-gray-200 bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <RuleHeading meta="Two divisions. One team.">How Our Services Are Structured</RuleHeading>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            {divisions.map((d) => (
              <div key={d.name} className="border-l-2 pl-5" style={{ borderColor: d.accent }}>
                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: d.accent }}
                >
                  {d.label}
                </p>
                <h3 className="mb-3 text-xl font-black text-[#0d1b2a]">{d.name}</h3>
                <p className="mb-4 max-w-[62ch] text-[14px] leading-relaxed text-gray-600">{d.body}</p>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {d.services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="group flex items-center gap-2 py-1.5 text-[13px] font-medium text-[#30505b] transition-colors hover:text-[#2a72ad]"
                      >
                        <span
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: d.accent }}
                        />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The catalogue + rail ── */}
      <section id="catalogue" className="scroll-mt-20 bg-[#f4f6f8] py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
            <div>
              {divisions.map((d, di) => (
                <div key={d.name} className={di > 0 ? 'mt-10' : ''}>
                  <RuleHeading meta={`${d.services.length} services`}>{d.name}</RuleHeading>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {d.services.map((s) => (
                      <EntryCard key={s.href} entry={s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Rail>
              <RailPanel title="Standards we work to">
                <div className="flex flex-wrap gap-1.5">
                  {standards.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-medium text-[#30505b]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </RailPanel>

              <RailPanel title="Who we deliver for">
                <RailLinks links={industryLinks} />
              </RailPanel>

              <RailDownload />

              <RailPanel title="Free decision tools">
                <RailLinks
                  links={[
                    { label: 'Tank Compliance Checker', href: '/tools/tank-compliance-checker' },
                    { label: 'Repair vs Reline vs Replace', href: '/tools/repair-reline-replace' },
                  ]}
                />
              </RailPanel>

              <RailArticles articles={relatedArticles} />
              <RailContact
                heading="Not sure which service you need?"
                body="Describe the asset and the problem — we'll tell you which of these actually applies."
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
              These Services, Delivered
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

      {/* ── One partner ── */}
      <section className="bg-white py-8 sm:py-10">
        <div className={SHELL}>
          <RuleHeading>One Partner. Every Stage.</RuleHeading>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-14">
            <p className="text-[17px] font-medium leading-relaxed text-[#30505b]">
              Rather than managing multiple contractors across your water storage project, PC Water Infrastructure
              provides a single point of accountability — from initial design through to long-term maintenance. Our
              integrated service model reduces handover risk, improves compliance outcomes, and keeps your project on
              schedule.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  label: 'Design & Build',
                  items: [
                    { name: 'Custom Tank Design', href: '/services/custom-tank-design' },
                    { name: 'Foundation & Civil Integration', href: '/services/foundation-civil-integration' },
                    { name: 'Tank Installation', href: '/services/tank-installation' },
                  ],
                },
                {
                  label: 'Compliance & Safety',
                  items: [
                    { name: 'Fire Water Solutions', href: '/services/fire-water-tanks' },
                    { name: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
                    { name: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
                  ],
                },
                {
                  label: 'Partnerships & Support',
                  items: [
                    { name: 'Remote Area Delivery', href: '/services/remote-area-delivery' },
                    { name: 'Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                    { name: 'Tender Support', href: '/services/tender-procurement-support' },
                    { name: 'Contractor Partnerships', href: '/services/builder-contractor-partnerships' },
                  ],
                },
              ].map((group) => (
                <div key={group.label} className="border-t-2 border-[#0d1b2a] pt-3">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2a72ad]">
                    {group.label}
                  </p>
                  <ul className="divide-y divide-gray-200">
                    {group.items.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block py-2.5 text-[13px] font-medium text-[#30505b] transition-colors hover:text-[#2a72ad]"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="READY TO DISCUSS YOUR PROJECT?"
        subheading="Tell us about your water storage challenge and we will respond within one business day."
        primaryCTA={{ label: 'Discuss a Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '/downloads/pc-tanks-capability-statement-2026.pdf' }}
        variant="navy"
      />
    </>
  )
}
