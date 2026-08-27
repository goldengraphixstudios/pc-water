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
import { getPublicPosts } from '@/lib/cms/queries'
import { enrichArticles, sortByNewest } from '@/lib/cms/taxonomy'
import { SHELL } from '@/lib/shell'
import { projectPathways, tools } from '@/lib/site-directory'

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


// Higher-intent project funnels — request a project-specific proposal / strategy.

const standards = ['AS2304', 'AS1851', 'AS4020', 'AS/NZS 3500', 'ADWG']

export default async function ToolsPage() {
  const posts = await getPublicPosts()

  const lead = tools[0]
  const rail = [...tools.slice(1), ...projectPathways]

  const relatedArticles = sortByNewest(enrichArticles(posts))
    .slice(0, 4)
    .map((a) => ({ id: a.id, slug: a.slug, title: a.title, readTime: a.readTime, kicker: a.category.shortName }))

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

      <Masthead
        kicker="Free Tools"
        title={
          <>
            WATER TANK<br />
            <span className="text-[#3e91ce]">DECISION TOOLS.</span>
          </>
        }
        lead="Practical, no-cost tools to help you understand the condition and compliance position of your water tank assets — and decide what to do next. Built on the same engineering experience behind our inspection, relining, and compliance work."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Tools' }]}
        imageSrc="/water/water-05.jpg"
        imageAlt="Water storage assets assessed with PC Water Infrastructure's free compliance and condition tools"
        stats={[
          { label: 'Tools', value: tools.length },
          { label: 'Time each', value: '~2 min' },
          { label: 'Cost', value: 'Free' },
        ]}
      />

      <FlagshipBlock
        lead={lead}
        rail={rail}
        railTitle="Also available"
        seeAll={{ label: 'See every tool and pathway', href: '#toolkit' }}
      />

      {/* ── Toolkit + rail ── */}
      <section id="toolkit" className="scroll-mt-20 bg-[#f4f6f8] py-8 sm:py-10">
        <div className={SHELL}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
            <div>
              <RuleHeading meta={`${tools.length} free tools`}>Assess Your Asset</RuleHeading>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {tools.map((t) => (
                  <EntryCard key={t.href} entry={t} />
                ))}
              </div>

              <div className="mt-10">
                <RuleHeading meta="Talk to an engineer">Ready to Move on a Project?</RuleHeading>
                <p className="mb-5 max-w-[68ch] leading-relaxed text-gray-600">
                  Past the assessment stage? These guided pathways take a few details about your asset or project and
                  put it in front of our engineering team — with a project-specific proposal or delivery strategy to
                  follow.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {projectPathways.map((p) => (
                    <EntryCard key={p.href} entry={p} />
                  ))}
                </div>
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
                <p className="mt-3 text-[12px] leading-relaxed text-gray-500">
                  Results are an indication only. A formal condition assessment still requires an on-site or ROV
                  inspection by a qualified engineer.
                </p>
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

      {/* ── Where to next ── */}
      <section className="bg-[#0d1b2a] py-8 sm:py-10">
        <div className={SHELL}>
          <RuleHeading light meta="After your result">Where These Tools Lead</RuleHeading>
          <CrossLinks
            dark
            columns={3}
            links={[
              {
                href: '/services/tank-inspection-technology',
                title: 'Confirm it with an inspection',
                kicker: 'Service',
                blurb:
                  'ROV and UAV inspection gives you a measured condition assessment without dewatering the tank — the evidence behind any remediation decision.',
                imageSrc: '/heroes/tank-inspection-technology.jpg',
              },
              {
                href: '/services/rpvc-liner-systems',
                title: 'Extend the asset instead of replacing it',
                kicker: 'Service',
                blurb:
                  'Where the shell is structurally sound, an AS4020 RPVC liner restores compliance and adds 20+ years at a fraction of replacement cost.',
                imageSrc: '/heroes/rpvc-liner-systems.jpg',
              },
              {
                href: '/projects',
                title: 'See how it played out on real assets',
                kicker: 'Portfolio',
                blurb:
                  'Reservoirs, industrial tanks and remote community storage — the same decisions, made and delivered.',
                imageSrc: '/projects/borumba-03.jpg',
              },
            ]}
          />
          <Link
            href="/resources"
            className="mt-5 inline-flex items-center gap-1.5 border-t border-white/20 pt-4 text-[13px] font-bold text-[#7fc2f0] transition-colors hover:text-white"
          >
            Browse the article library
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <CTABanner
        heading="PREFER TO TALK TO A SPECIALIST?"
        subheading="Skip the tools and tell us about your tank. We’ll point you to the right next step."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  )
}
