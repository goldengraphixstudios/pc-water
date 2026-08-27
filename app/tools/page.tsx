import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import CTABanner from '@/components/CTABanner'
import CrossLinks from '@/components/editorial/CrossLinks'
import Masthead from '@/components/editorial/Masthead'
import RuleHeading from '@/components/editorial/RuleHeading'
import { Rail, RailArticles, RailContact, RailDownload, RailLinks, RailPanel } from '@/components/editorial/RailPanel'
import ToolCard, { PathwayCard, type Pathway, type Tool } from '@/components/tools/ToolCard'
import { getPublicPosts, getPublicProjects } from '@/lib/cms/queries'
import { enrichArticles, sortByNewest } from '@/lib/cms/taxonomy'
import { SHELL } from '@/lib/shell'

export const dynamic = 'force-static'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: 'Free Water Infrastructure Tools',
  description:
    'Free online tools: check your water tank compliance risk, and decide whether to repair, reline, or replace an aging tank. Built for asset owners.',
  keywords: [
    'water tank tools',
    'tank compliance checker',
    'repair reline replace water tank',
    'water tank risk assessment',
    'water tank decision tool',
  ],
  alternates: { canonical: '/tools' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Free Water Infrastructure Tools',
    description: 'Free online tools: check your water tank compliance risk and decide whether to repair, reline, or replace an aging tank. Built for asset owners.',
    url: 'https://pcwater.com.au/tools',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image' as const, images: ['/hero.png'] },
}

/* The inputs and outcomes below mirror lib/tools/*.ts — the questions each
   assessment actually asks and the results it can return. */
const tools: Tool[] = [
  {
    href: '/tools/tank-compliance-checker',
    title: 'Tank Compliance Checker',
    blurb:
      'Answer a few questions about your tank and get a fast indication of likely compliance risk — plus the recommended next step for your asset.',
    asks: [
      'Tank type & construction',
      'Age of the asset',
      'Last formal inspection',
      'Visible corrosion or damage',
      'Site environment',
      'Maintenance & documentation',
    ],
    outcomes: [
      { label: 'Low apparent risk', tone: 'low' },
      { label: 'Moderate risk', tone: 'moderate' },
      { label: 'High risk', tone: 'high' },
      { label: 'Urgent review', tone: 'urgent' },
    ],
    questions: 8,
    minutes: '2 min',
    cta: 'Check Compliance Risk',
  },
  {
    href: '/tools/repair-reline-replace',
    title: 'Repair vs Reline vs Replace',
    blurb:
      'For aging or deteriorating tanks: find out whether the practical path is targeted repair, RPVC relining, full replacement, or an inspection first.',
    asks: [
      'What the tank stores',
      'Age of the asset',
      'Structural condition',
      'Liner or coating condition',
      'Level of corrosion',
      'Downtime tolerance',
    ],
    outcomes: [
      { label: 'Inspect first', tone: 'info' },
      { label: 'Targeted repair', tone: 'low' },
      { label: 'RPVC reline', tone: 'moderate' },
      { label: 'Replacement', tone: 'high' },
    ],
    questions: 8,
    minutes: '2 min',
    cta: 'Get My Result',
  },
]

// Higher-intent project funnels — request a project-specific proposal / strategy.
const projectPathways: Pathway[] = [
  {
    href: '/campaigns/tank-remediation',
    title: 'Tank Remediation',
    blurb:
      'Leaking, corroded or deteriorating tank? Request a project-specific proposal covering repair, RPVC relining, upgrades or replacement — with the pathway confirmed at assessment.',
    points: ['Repair · Reline · Replace pathways', 'Councils, industrial & commercial', 'Reply within 1 business day'],
    cta: 'Request a Remediation Proposal',
  },
  {
    href: '/campaigns/remote-water-infrastructure',
    title: 'Remote Water Infrastructure',
    blurb:
      'Planning water storage or treatment in remote Australia? Discuss an end-to-end delivery strategy — planning, civil, storage, treatment, installation and commissioning under one team.',
    points: ['End-to-end coordinated delivery', 'Freight, access & seasonal planning', 'Reply within 1 business day'],
    cta: 'Discuss Your Remote Project',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Answer the questions',
    body: 'Eight multiple-choice questions about the asset. No account, no email required to see your result.',
  },
  {
    step: '02',
    title: 'Get a reasoned result',
    body: 'A rule-based verdict with the reasoning behind it — deliberately conservative, so uncertainty is flagged as risk.',
  },
  {
    step: '03',
    title: 'Take the next step',
    body: 'Every result links to the relevant service and, if you want it, a specialist summary sent to your inbox.',
  },
]

const standards = ['AS2304', 'AS1851', 'AS4020', 'AS/NZS 3500', 'ADWG']

export default async function ToolsPage() {
  const [projects, posts] = await Promise.all([getPublicProjects(), getPublicPosts()])

  const relatedArticles = sortByNewest(enrichArticles(posts))
    .slice(0, 4)
    .map((a) => ({ id: a.id, slug: a.slug, title: a.title, readTime: a.readTime, kicker: a.category.shortName }))

  const work = projects.slice(0, 3).map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.title,
    blurb: p.scope || p.summary,
    kicker: p.sector,
    imageSrc: p.heroImageUrl,
    meta: p.location,
  }))

  const reading = sortByNewest(enrichArticles(posts))
    .slice(0, 3)
    .map((a) => ({
      href: `/resources/${a.slug}`,
      title: a.title,
      blurb: a.excerpt,
      kicker: a.category.shortName,
      imageSrc: a.coverImageUrl,
      meta: a.readTime ?? undefined,
    }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Water Infrastructure Tools',
    description:
      'Free tools for asset owners: tank compliance risk assessment, and a repair / reline / replace decision guide.',
    url: `${siteUrl}/tools`,
    publisher: { '@type': 'Organization', name: 'PC Water Infrastructure', url: siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tools.length,
      itemListElement: tools.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}${t.href}`,
        name: t.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Tools', url: `${siteUrl}/tools` },
        ]}
      />

      {/* No photography here on purpose — this section is an instrument panel,
          not an editorial page, and the tools themselves lead. */}
      <Masthead
        kicker="Free Tools"
        title={
          <>
            ASSESS YOUR TANK<br />
            <span className="text-[#3e91ce]">IN TWO MINUTES.</span>
          </>
        }
        lead="Two free, rule-based tools that take a few details about your asset and return a reasoned verdict — compliance risk, or whether to repair, reline or replace. Built on the same engineering experience behind our inspection, relining and compliance work."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Tools' }]}
        stats={[
          { label: 'Tools', value: tools.length },
          { label: 'Questions each', value: 8 },
          { label: 'Cost', value: 'Free' },
        ]}
      />

      {/* ── The tools ── */}
      <section id="toolkit" className="scroll-mt-20 bg-[#f4f6f8] py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
            <div>
              <RuleHeading meta="No signup · Result on screen">Start Here</RuleHeading>
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                {tools.map((t, i) => (
                  <ToolCard key={t.href} tool={t} index={i + 1} />
                ))}
              </div>

              {/* How it works */}
              <div className="mt-10">
                <RuleHeading meta="Same for both tools">How They Work</RuleHeading>
                <ol className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {howItWorks.map((s) => (
                    <li key={s.step} className="border-t-2 border-[#0d1b2a] pt-3">
                      <p className="mb-1 font-mono text-[13px] font-bold text-[#2a72ad]">{s.step}</p>
                      <h3 className="mb-1.5 text-[15px] font-black text-[#0d1b2a]">{s.title}</h3>
                      <p className="text-[13px] leading-relaxed text-gray-600">{s.body}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 border-l-2 border-[#3e91ce] bg-white py-2.5 pl-3 text-[12px] leading-relaxed text-gray-600">
                  These are guidance tools, not compliance certificates. Confirming true condition and compliance
                  still requires a formal inspection — which is exactly what the result will point you to when it
                  matters.
                </p>
              </div>
            </div>

            <Rail>
              <RailPanel title="What these tools reference">
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

              <RailPanel title="Services these lead to">
                <RailLinks
                  links={[
                    { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
                    { label: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
                    { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
                    { label: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
                  ]}
                />
              </RailPanel>

              <RailDownload
                kicker="Free guide"
                heading="Tank Upgrade Decision Guide"
                body="The engineering logic behind repair, reline and replace — in one PDF."
                href="/downloads/tank-upgrade-decision-guide.pdf"
              />

              <RailArticles articles={relatedArticles} />
              <RailContact
                heading="Prefer to talk it through?"
                body="Skip the tools and tell us about your tank — we'll point you to the right next step."
                label="Discuss your asset"
              />
            </Rail>
          </div>
        </div>
      </section>

      {/* ── Project pathways ── */}
      <section className="bg-[#0d1b2a] py-8 sm:py-10">
        <div className={SHELL}>
          <RuleHeading light meta="Reply within 1 business day">Past the Assessment Stage?</RuleHeading>
          <p className="mb-6 max-w-[72ch] leading-relaxed text-gray-400">
            These guided pathways take a few details about your asset or project and put it in front of our
            engineering team — with a project-specific proposal or delivery strategy to follow.
          </p>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {projectPathways.map((p) => (
              <PathwayCard key={p.href} pathway={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivered work ── */}
      {work.length > 0 && (
        <section className="bg-white py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading meta={`${projects.length} in the portfolio`}>The Same Decisions, Delivered</RuleHeading>
            <CrossLinks links={work} columns={3} />
            <Link
              href="/projects"
              className="mt-5 inline-flex items-center gap-1.5 border-t border-gray-300 pt-4 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
            >
              See every project
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* ── Further reading ── */}
      {reading.length > 0 && (
        <section className="border-t border-gray-200 bg-[#f4f6f8] py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading meta="From the library">Further Reading</RuleHeading>
            <CrossLinks links={reading} columns={3} />
            <Link
              href="/resources"
              className="mt-5 inline-flex items-center gap-1.5 border-t border-gray-300 pt-4 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
            >
              Browse the article library
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      <CTABanner
        heading="PREFER TO TALK TO A SPECIALIST?"
        subheading="Skip the tools and tell us about your tank. We’ll point you to the right next step."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  )
}
