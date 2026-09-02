'use client'

import { useMemo, useState } from 'react'
import ArticleCard from './ArticleCard'
import type {
  ArticleCategory,
  ArticleFormat,
  ArticleRegion,
  ArticleTopic,
  EnrichedArticle,
} from '@/lib/cms/taxonomy'

type SortKey = 'newest' | 'oldest' | 'az'

const PAGE_SIZE = 15

interface Props {
  articles: EnrichedArticle[]
  categories: ArticleCategory[]
  formats: ArticleFormat[]
  topics: ArticleTopic[]
  regions: ArticleRegion[]
  lockCategory?: boolean
  lockRegion?: boolean
  heading?: string
  /** Right-hand rail content, rendered at xl and above. */
  sidebar?: React.ReactNode
}

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

/* ── Rail primitives ─────────────────────────────────────────────────── */

function RailHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">{children}</p>
  )
}

function RailRow({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count?: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2.5 text-left text-[13px] leading-tight transition-colors ${
        active
          ? 'bg-[#2a72ad] font-semibold text-white'
          : 'text-[#30505b] hover:bg-[#e8edf2] hover:text-[#2a72ad]'
      }`}
    >
      <span className="min-w-0 truncate">{label}</span>
      {count !== undefined && (
        <span className={`font-mono text-[11px] ${active ? 'text-white/70' : 'text-gray-400'}`}>
          {count}
        </span>
      )}
    </button>
  )
}

/* ── Component ───────────────────────────────────────────────────────── */

export default function ArticleBrowser({
  articles,
  categories,
  formats,
  topics,
  regions,
  lockCategory = false,
  lockRegion = false,
  heading,
  sidebar,
}: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')
  const [activeFormats, setActiveFormats] = useState<string[]>([])
  const [activeTopics, setActiveTopics] = useState<string[]>([])
  const [activeRegions, setActiveRegions] = useState<string[]>([])
  const [sort, setSort] = useState<SortKey>('newest')
  const [mobileFilters, setMobileFilters] = useState(false)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const availableCategories = useMemo(() => {
    const present = new Set(articles.map((a) => a.category.slug))
    return categories.filter((c) => present.has(c.slug))
  }, [articles, categories])

  const availableFormats = useMemo(() => {
    const present = new Set(articles.map((a) => a.format.slug))
    return formats.filter((f) => present.has(f.slug))
  }, [articles, formats])

  const availableTopics = useMemo(() => {
    const present = new Set(articles.flatMap((a) => a.topics.map((t) => t.slug)))
    return topics.filter((t) => present.has(t.slug))
  }, [articles, topics])

  const availableRegions = useMemo(() => {
    const present = new Set(articles.map((a) => a.region?.slug).filter(Boolean))
    return regions.filter((r) => present.has(r.slug))
  }, [articles, regions])

  const countFor = useMemo(() => {
    const cat: Record<string, number> = {}
    const fmt: Record<string, number> = {}
    const top: Record<string, number> = {}
    const reg: Record<string, number> = {}
    for (const a of articles) {
      cat[a.category.slug] = (cat[a.category.slug] ?? 0) + 1
      fmt[a.format.slug] = (fmt[a.format.slug] ?? 0) + 1
      if (a.region) reg[a.region.slug] = (reg[a.region.slug] ?? 0) + 1
      for (const t of a.topics) top[t.slug] = (top[t.slug] ?? 0) + 1
    }
    return { cat, fmt, top, reg }
  }, [articles])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const terms = q ? q.split(/\s+/) : []

    const result = articles.filter((a) => {
      if (terms.length && !terms.every((t) => a.searchText.includes(t))) return false
      if (!lockCategory && category !== 'all' && a.category.slug !== category) return false
      if (activeFormats.length && !activeFormats.includes(a.format.slug)) return false
      if (activeTopics.length && !a.topics.some((t) => activeTopics.includes(t.slug))) return false
      if (!lockRegion && activeRegions.length && (!a.region || !activeRegions.includes(a.region.slug)))
        return false
      return true
    })

    result.sort((a, b) => {
      if (sort === 'az') return a.title.localeCompare(b.title)
      const at = a.publishedAt ? Date.parse(a.publishedAt) : 0
      const bt = b.publishedAt ? Date.parse(b.publishedAt) : 0
      return sort === 'oldest' ? at - bt : bt - at
    })

    return result
  }, [articles, query, category, activeFormats, activeTopics, activeRegions, sort, lockCategory, lockRegion])

  const activeCount =
    activeFormats.length +
    activeTopics.length +
    activeRegions.length +
    (category !== 'all' && !lockCategory ? 1 : 0)

  function resetAll() {
    setQuery('')
    setCategory('all')
    setActiveFormats([])
    setActiveTopics([])
    setActiveRegions([])
    setVisible(PAGE_SIZE)
  }

  const shown = filtered.slice(0, visible)

  /* Filter rail markup, shared between the sticky desktop rail and the
     collapsible mobile panel. */
  const railContent = (
    <>
      {!lockCategory && availableCategories.length > 1 && (
        <div className="mb-5">
          <RailHeading>Sections</RailHeading>
          <div className="flex flex-col gap-0.5">
            <RailRow
              label="All sections"
              count={articles.length}
              active={category === 'all'}
              onClick={() => {
                setCategory('all')
                setVisible(PAGE_SIZE)
              }}
            />
            {availableCategories.map((c) => (
              <RailRow
                key={c.slug}
                label={c.shortName}
                count={countFor.cat[c.slug]}
                active={category === c.slug}
                onClick={() => {
                  setCategory(category === c.slug ? 'all' : c.slug)
                  setVisible(PAGE_SIZE)
                }}
              />
            ))}
          </div>
        </div>
      )}

      {availableFormats.length > 1 && (
        <div className="mb-5">
          <RailHeading>Format</RailHeading>
          <div className="flex flex-col gap-0.5">
            {availableFormats.map((f) => (
              <RailRow
                key={f.slug}
                label={f.name}
                count={countFor.fmt[f.slug]}
                active={activeFormats.includes(f.slug)}
                onClick={() => {
                  setActiveFormats((s) => toggle(s, f.slug))
                  setVisible(PAGE_SIZE)
                }}
              />
            ))}
          </div>
        </div>
      )}

      {availableTopics.length > 0 && (
        <div className="mb-5">
          <RailHeading>Topic</RailHeading>
          <div className="flex flex-col gap-0.5">
            {availableTopics.map((t) => (
              <RailRow
                key={t.slug}
                label={t.name}
                count={countFor.top[t.slug]}
                active={activeTopics.includes(t.slug)}
                onClick={() => {
                  setActiveTopics((s) => toggle(s, t.slug))
                  setVisible(PAGE_SIZE)
                }}
              />
            ))}
          </div>
        </div>
      )}

      {!lockRegion && availableRegions.length > 0 && (
        <div className="mb-5">
          <RailHeading>Region</RailHeading>
          <div className="flex flex-col gap-0.5">
            {availableRegions.map((r) => (
              <RailRow
                key={r.slug}
                label={r.name}
                count={countFor.reg[r.slug]}
                active={activeRegions.includes(r.slug)}
                onClick={() => {
                  setActiveRegions((s) => toggle(s, r.slug))
                  setVisible(PAGE_SIZE)
                }}
              />
            ))}
          </div>
        </div>
      )}

      {activeCount > 0 && (
        <button
          type="button"
          onClick={resetAll}
          className="w-full rounded-md border border-gray-300 px-2 py-2 text-[12px] font-semibold text-[#30505b] transition-colors hover:border-[#3e91ce] hover:text-[#2a72ad]"
        >
          Clear {activeCount} filter{activeCount === 1 ? '' : 's'}
        </button>
      )}
    </>
  )

  const railColumns = sidebar
    ? 'lg:grid-cols-[190px_minmax(0,1fr)] xl:grid-cols-[190px_minmax(0,1fr)_290px]'
    : 'lg:grid-cols-[190px_minmax(0,1fr)]'

  return (
    <div>
      {heading && <h2 className="mb-5 text-xl font-black text-[#30505b] sm:text-2xl">{heading}</h2>}

      <div className={`grid grid-cols-1 gap-6 ${railColumns} xl:gap-8`}>
        {/* ── Left rail ── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 thin-scroll">
            {railContent}
          </div>
        </aside>

        {/* ── Main column ── */}
        <div className="min-w-0">
          {/* Search + sort */}
          <div className="mb-4 flex flex-col gap-2.5 sm:flex-row">
            <div className="relative flex-1">
              <svg
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              <label htmlFor="article-search" className="sr-only">
                Search articles
              </label>
              <input
                id="article-search"
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisible(PAGE_SIZE)
                }}
                placeholder={`Search ${articles.length} articles…`}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-9 text-sm text-[#30505b] outline-none transition-colors placeholder:text-gray-400 focus:border-[#3e91ce] focus:ring-1 focus:ring-[#3e91ce]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setVisible(PAGE_SIZE)
                  }}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#30505b]"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <div className="flex gap-2.5">
              {/* Mobile filter toggle */}
              <button
                type="button"
                onClick={() => setMobileFilters((s) => !s)}
                aria-expanded={mobileFilters}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-sm font-semibold transition-colors lg:hidden ${
                  activeCount > 0
                    ? 'border-[#3e91ce] bg-[#3e91ce]/10 text-[#2a72ad]'
                    : 'border-gray-300 bg-white text-[#30505b]'
                }`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M6 12h12M10 20h4" />
                </svg>
                Filters
                {activeCount > 0 && (
                  <span className="rounded-full bg-[#2a72ad] px-1.5 text-[10px] font-bold text-white">
                    {activeCount}
                  </span>
                )}
              </button>

              <div className="relative flex-1 sm:flex-none">
                <label htmlFor="article-sort" className="sr-only">
                  Sort articles
                </label>
                <select
                  id="article-sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-3.5 pr-9 text-sm font-medium text-[#30505b] outline-none transition-colors hover:border-[#3e91ce] focus:border-[#3e91ce]"
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="az">A–Z</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile filter panel */}
          {mobileFilters && (
            <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 lg:hidden">{railContent}</div>
          )}

          {/* Result bar */}
          <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-2">
            <p className="text-[13px] text-gray-500">
              <span className="font-bold text-[#30505b]">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'result' : 'results'}
              {query && <span className="text-gray-400"> for “{query}”</span>}
            </p>
            {(activeCount > 0 || query) && (
              <button
                type="button"
                onClick={resetAll}
                className="text-[13px] font-semibold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
              >
                Reset
              </button>
            )}
          </div>

          {/* Results */}
          {shown.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                {shown.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>

              {visible < filtered.length && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#30505b] px-6 py-2.5 text-sm font-semibold text-[#30505b] transition-colors hover:bg-[#30505b] hover:text-white"
                  >
                    Load {Math.min(PAGE_SIZE, filtered.length - visible)} more
                    <span className="font-mono text-xs opacity-60">
                      {visible}/{filtered.length}
                    </span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 bg-white py-14 text-center">
              <p className="mb-1 font-bold text-[#30505b]">No results</p>
              <p className="mb-4 text-sm text-gray-500">Try a broader search or clear the filters.</p>
              <button
                type="button"
                onClick={resetAll}
                className="rounded-lg bg-[#2a72ad] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#246397]"
              >
                Reset all
              </button>
            </div>
          )}
        </div>

        {/* ── Right rail — becomes a full-width block below the results
             on narrower screens rather than disappearing. ── */}
        {sidebar && (
          <div className="lg:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-start-1">{sidebar}</div>
        )}
      </div>
    </div>
  )
}
