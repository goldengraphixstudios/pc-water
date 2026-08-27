import Link from 'next/link'
import type { ArticleRegion, ArticleTopic, EnrichedArticle } from '@/lib/cms/taxonomy'
import ArticleCard from './ArticleCard'

interface Props {
  regions: ArticleRegion[]
  regionCounts: Record<string, number>
  topics: ArticleTopic[]
  topicCounts: Record<string, number>
  mostRecent: EnrichedArticle[]
}

function Panel({
  eyebrow,
  title,
  children,
  className = '',
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`rounded-2xl border border-gray-200 bg-white p-5 ${className}`}>
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#3e91ce]">{eyebrow}</p>
      <h3 className="mb-4 text-base font-black text-[#30505b]">{title}</h3>
      {children}
    </section>
  )
}

export default function LibrarySidebar({
  regions,
  regionCounts,
  topics,
  topicCounts,
  mostRecent,
}: Props) {
  const activeRegions = regions.filter((r) => (regionCounts[r.slug] ?? 0) > 0)
  const activeTopics = topics.filter((t) => (topicCounts[t.slug] ?? 0) > 0)

  return (
    <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
      {/* Latest — redundant on mobile, where it would stack directly under the list */}
      {mostRecent.length > 0 && (
        <Panel eyebrow="/ Just published" title="Latest" className="hidden lg:block">
          <div className="flex flex-col gap-2.5">
            {mostRecent.map((a) => (
              <ArticleCard key={a.id} article={a} variant="compact" />
            ))}
          </div>
        </Panel>
      )}

      {/* Regions */}
      {activeRegions.length > 0 && (
        <Panel eyebrow="/ By region" title="Where you operate">
          <ul className="flex flex-col divide-y divide-gray-100">
            {activeRegions.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/resources/region/${r.slug}`}
                  className="group flex items-center justify-between gap-2 py-2.5 text-sm transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="rounded bg-[#0d1b2a] px-1.5 py-0.5 text-[10px] font-bold text-white transition-colors group-hover:bg-[#3e91ce]">
                      {r.shortName}
                    </span>
                    <span className="font-semibold text-[#30505b] transition-colors group-hover:text-[#3e91ce]">
                      {r.name}
                    </span>
                  </span>
                  <span className="text-xs text-gray-400">{regionCounts[r.slug]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      )}

      {/* Downloads promo */}
      <section className="overflow-hidden rounded-2xl bg-[#0d1b2a] p-5">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#3e91ce]">/ Free downloads</p>
        <h3 className="mb-2 text-base font-black text-white">Take something with you</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          Checklists, compliance guides and decision frameworks — free, no strings attached.
        </p>
        <Link
          href="/resources/downloads"
          className="inline-flex items-center gap-2 rounded-full bg-[#2a72ad] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#246397]"
        >
          Browse downloads
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      {/* Topics */}
      {activeTopics.length > 0 && (
        <Panel eyebrow="/ Cross-cutting" title="Explore topics">
          <div className="flex flex-wrap gap-1.5">
            {activeTopics.map((t) => (
              <Link
                key={t.slug}
                href={`/resources/topic/${t.slug}`}
                className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-[#30505b] transition-colors hover:border-[#3e91ce] hover:text-[#3e91ce]"
              >
                {t.name}
                <span className="text-gray-400">{topicCounts[t.slug]}</span>
              </Link>
            ))}
          </div>
        </Panel>
      )}

      {/* Talk to us — the page already ends with the same CTA on mobile */}
      <section className="hidden rounded-2xl border border-[#3e91ce]/30 bg-[#3e91ce]/5 p-5 lg:block">
        <h3 className="mb-2 text-base font-black text-[#30505b]">Have a specific question?</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          Our engineers respond to technical and project enquiries within one business day.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#0d1b2a] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#30505b]"
        >
          Contact our team
        </Link>
      </section>
    </aside>
  )
}
