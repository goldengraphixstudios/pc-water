import { Rail, RailArticles, RailContact, RailDownload, RailLinks, RailPanel } from '@/components/editorial/RailPanel'
import { getPublicPosts } from '@/lib/cms/queries'
import { enrichArticles, sortByNewest } from '@/lib/cms/taxonomy'
import { allServices, type DirectoryFamily, industries, STANDARDS, siblingsFor } from '@/lib/site-directory'

const CROSS_TITLE: Record<DirectoryFamily, string> = {
  services: 'Who we deliver for',
  industries: 'Services behind this',
  tools: 'Where this leads',
}

/**
 * The sticky rail that runs beside the opening content section of every
 * detail page — standards, cross-family links, the capability statement and
 * a contact prompt. Fills the third column that used to be white space.
 */
export default async function DetailRail({
  family,
  currentHref,
}: {
  family: DirectoryFamily
  currentHref: string
}) {
  const posts = await getPublicPosts()

  const relatedArticles = sortByNewest(enrichArticles(posts))
    .slice(0, 3)
    .map((a) => ({ id: a.id, slug: a.slug, title: a.title, readTime: a.readTime, kicker: a.category.shortName }))

  /* Services point at the sectors that buy them, sectors point back at the
     services that serve them, and tools point at both. */
  const crossLinks =
    family === 'services'
      ? industries.map((i) => ({ label: i.title, href: i.href }))
      : family === 'industries'
        ? allServices.slice(0, 6).map((s) => ({ label: s.title, href: s.href }))
        : allServices.slice(0, 4).map((s) => ({ label: s.title, href: s.href }))

  const siblings = siblingsFor(family, currentHref, 4).map((e) => ({ label: e.title, href: e.href }))

  return (
    <Rail variant="wrap" className="lg:col-span-2 xl:col-span-1 xl:col-start-3">
      <RailPanel title="Standards we work to">
        <div className="flex flex-wrap gap-1.5">
          {STANDARDS.map((s) => (
            <span
              key={s}
              className="inline-flex items-center border border-gray-300 bg-white px-2.5 py-1 text-[11px] font-medium text-[#30505b]"
            >
              {s}
            </span>
          ))}
        </div>
      </RailPanel>

      <RailPanel title={CROSS_TITLE[family]}>
        <RailLinks links={crossLinks} />
      </RailPanel>

      <RailDownload />

      {siblings.length > 0 && (
        <RailPanel title="Related pages">
          <RailLinks links={siblings} />
        </RailPanel>
      )}

      <RailArticles articles={relatedArticles} />

      <RailContact />
    </Rail>
  )
}
