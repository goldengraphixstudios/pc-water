import Link from 'next/link'
import CrossLinks from '@/components/editorial/CrossLinks'
import RuleHeading from '@/components/editorial/RuleHeading'
import { getPublicPosts, getPublicProjects } from '@/lib/cms/queries'
import { enrichArticles, sortByNewest } from '@/lib/cms/taxonomy'
import { type DirectoryFamily, siblingsFor } from '@/lib/site-directory'
import { SHELL } from '@/lib/shell'

const FAMILY_COPY: Record<DirectoryFamily, { heading: string; index: string; label: string }> = {
  services: { heading: 'More of What We Do', index: '/services', label: 'See every service' },
  industries: { heading: 'Other Sectors We Serve', index: '/industries', label: 'See every sector' },
  tools: { heading: 'Other Free Tools', index: '/tools', label: 'See every tool' },
}

/**
 * The closing band every detail page shares: sibling entries with imagery,
 * delivered work, and recent articles — so no page is a dead end and each one
 * carries pictures below the fold rather than trailing off into a CTA.
 */
export default async function DetailFooterBand({
  family,
  currentHref,
}: {
  family: DirectoryFamily
  currentHref: string
}) {
  const [projects, posts] = await Promise.all([getPublicProjects(), getPublicPosts()])

  const siblings = siblingsFor(family, currentHref, 3).map((e) => ({
    href: e.href,
    title: e.title,
    blurb: e.blurb,
    kicker: e.kicker,
    imageSrc: e.imageSrc,
    meta: e.meta,
  }))

  const work = projects.slice(0, 3).map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.title,
    blurb: p.scope || p.summary,
    kicker: p.sector,
    imageSrc: p.heroImageUrl,
    meta: p.location,
  }))

  const articles = sortByNewest(enrichArticles(posts))
    .slice(0, 3)
    .map((a) => ({
      href: `/resources/${a.slug}`,
      title: a.title,
      blurb: a.excerpt,
      kicker: a.category.shortName,
      imageSrc: a.coverImageUrl,
      meta: a.readTime ?? undefined,
    }))

  const copy = FAMILY_COPY[family]

  return (
    <>
      {siblings.length > 0 && (
        <section className="border-t border-gray-200 bg-[#f4f6f8] py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading meta={copy.label}>{copy.heading}</RuleHeading>
            <CrossLinks links={siblings} columns={3} />
            <Link
              href={copy.index}
              className="mt-5 inline-flex items-center gap-1.5 border-t border-gray-300 pt-4 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
            >
              {copy.label}
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {work.length > 0 && (
        <section className="bg-[#0d1b2a] py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading light meta={`${projects.length} in the portfolio`}>
              Delivered Work
            </RuleHeading>
            <CrossLinks links={work} dark columns={3} />
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

      {articles.length > 0 && (
        <section className="bg-white py-8 sm:py-10">
          <div className={SHELL}>
            <RuleHeading meta="From the library">Further Reading</RuleHeading>
            <CrossLinks links={articles} columns={3} />
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
    </>
  )
}
