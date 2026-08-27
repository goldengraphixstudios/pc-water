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
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <h3 className="mb-2 border-b-2 border-[#0d1b2a] pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d1b2a]">
        {title}
      </h3>
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
    <aside className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:sticky xl:top-24 xl:max-h-[calc(100vh-7rem)] xl:grid-cols-1 xl:overflow-y-auto xl:pr-1 xl:thin-scroll">
      {/* Redundant below xl, where the results list sits directly above. */}
      {mostRecent.length > 0 && (
        <Panel title="Just published" className="hidden xl:block">
          <div className="divide-y divide-gray-200">
            {mostRecent.map((a) => (
              <ArticleCard key={a.id} article={a} variant="compact" />
            ))}
          </div>
        </Panel>
      )}

      {activeRegions.length > 0 && (
        <Panel title="By region">
          <ul className="divide-y divide-gray-200">
            {activeRegions.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/resources/region/${r.slug}`}
                  className="group flex items-center justify-between gap-2 py-2 text-[13px]"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-7 font-mono text-[10px] font-bold text-gray-400 transition-colors group-hover:text-[#2a72ad]">
                      {r.shortName}
                    </span>
                    <span className="font-medium text-[#30505b] transition-colors group-hover:text-[#2a72ad]">
                      {r.name}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] text-gray-400">{regionCounts[r.slug]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      )}

      <section className="bg-[#0d1b2a] p-5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3e91ce]">
          Free downloads
        </p>
        <h3 className="mb-2 text-[15px] font-black leading-snug text-white">Take something with you</h3>
        <p className="mb-4 text-[13px] leading-relaxed text-gray-400">
          Checklists, compliance guides and decision frameworks — free, no strings attached.
        </p>
        <Link
          href="/resources/downloads"
          className="inline-flex items-center gap-1.5 bg-[#2a72ad] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#3e91ce]"
        >
          Browse downloads
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      {activeTopics.length > 0 && (
        <Panel title="Topics">
          <div className="flex flex-wrap gap-1">
            {activeTopics.map((t) => (
              <Link
                key={t.slug}
                href={`/resources/topic/${t.slug}`}
                className="inline-flex items-center gap-1 border border-gray-300 px-2 py-1 text-[11px] font-medium text-[#30505b] transition-colors hover:border-[#3e91ce] hover:bg-[#3e91ce]/5 hover:text-[#2a72ad]"
              >
                {t.name}
                <span className="font-mono text-[10px] text-gray-400">{topicCounts[t.slug]}</span>
              </Link>
            ))}
          </div>
        </Panel>
      )}

      <section className="border-l-2 border-[#3e91ce] bg-[#f4f6f8] p-4">
        <h3 className="mb-1.5 text-[14px] font-black leading-snug text-[#30505b]">
          Have a specific question?
        </h3>
        <p className="mb-3 text-[12px] leading-relaxed text-gray-600">
          Our engineers respond to technical enquiries within one business day.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
        >
          Contact our team
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </aside>
  )
}
