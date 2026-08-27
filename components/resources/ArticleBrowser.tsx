'use client'

import { useMemo, useState } from 'react'
import ArticleCard from './ArticleCard'
import type { ArticleCategory, ArticleFormat, ArticleRegion, ArticleTopic, EnrichedArticle } from '@/lib/cms/taxonomy'

type SortKey = 'newest' | 'oldest' | 'az'

const PAGE_SIZE = 12

interface Props {
  articles: EnrichedArticle[]
  categories: ArticleCategory[]
  formats: ArticleFormat[]
  topics: ArticleTopic[]
  regions: ArticleRegion[]
  /** Hide the category facet when the surrounding page already scopes to one. */
  lockCategory?: boolean
  /** Hide the region facet when the surrounding page already scopes to one. */
  lockRegion?: boolean
  heading?: string
  /** Grid density — use 'two' when rendered beside a sidebar. */
  columns?: 'two' | 'three'
}

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export default function ArticleBrowser({
  articles,
  categories,
  formats,
  topics,
  regions,
  lockCategory = false,
  lockRegion = false,
  heading,
  columns = 'three',
}: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')
  const [activeFormats, setActiveFormats] = useState<string[]>([])
  const [activeTopics, setActiveTopics] = useState<string[]>([])
  const [activeRegions, setActiveRegions] = useState<string[]>([])
  const [sort, setSort] = useState<SortKey>('newest')
  const [showFilters, setShowFilters] = useState(false)
  const [visible, setVisible] = useState(PAGE_SIZE)

  // Only offer facet values that actually exist in this article set.
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const terms = q ? q.split(/\s+/) : []

    const result = articles.filter((a) => {
      if (terms.length && !terms.every((t) => a.searchText.includes(t))) return false
      if (!lockCategory && category !== 'all' && a.category.slug !== category) return false
      if (activeFormats.length && !activeFormats.includes(a.format.slug)) return false
      if (activeTopics.length && !a.topics.some((t) => activeTopics.includes(t.slug))) return false
      if (!lockRegion && activeRegions.length && (!a.region || !activeRegions.includes(a.region.slug))) return false
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

  const activeFilterCount =
    activeFormats.length + activeTopics.length + activeRegions.length + (category !== 'all' && !lockCategory ? 1 : 0)

  function resetAll() {
    setQuery('')
    setCategory('all')
    setActiveFormats([])
    setActiveTopics([])
    setActiveRegions([])
    setVisible(PAGE_SIZE)
  }

  const shown = filtered.slice(0, visible)

  return (
    <div>
      {heading && (
        <h2 className="mb-6 text-2xl font-black text-[#30505b] sm:text-3xl">{heading}</h2>
      )}

      {/* ── Search + sort ── */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
          <label htmlFor="article-search" className="sr-only">
            Search articles
          </label>
          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setVisible(PAGE_SIZE)
            }}
            placeholder="Search articles — topic, standard, region…"
            className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-[#30505b] shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#3e91ce] focus:ring-2 focus:ring-[#3e91ce]/20"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setShowFilters((s) => !s)}
            aria-expanded={showFilters}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
              showFilters || activeFilterCount > 0
                ? 'border-[#3e91ce] bg-[#3e91ce]/10 text-[#2a72ad]'
                : 'border-gray-200 bg-white text-[#30505b] hover:border-[#3e91ce]'
            }`}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M6 12h12M10 20h4" />
            </svg>
            Filters
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-[#2a72ad] px-1.5 py-0.5 text-[10px] font-bold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="relative">
            <label htmlFor="article-sort" className="sr-only">
              Sort articles
            </label>
            <select
              id="article-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-full cursor-pointer appearance-none rounded-full border border-gray-200 bg-white py-3 pl-5 pr-10 text-sm font-semibold text-[#30505b] shadow-sm outline-none transition-colors hover:border-[#3e91ce] focus:border-[#3e91ce]"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A–Z</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400"
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

      {/* ── Primary facet: category ── */}
      {!lockCategory && availableCategories.length > 1 && (
        <div className="mb-4 -mx-4 overflow-x-auto px-4 pb-1">
          <div className="flex w-max gap-2">
            <button
              type="button"
              onClick={() => {
                setCategory('all')
                setVisible(PAGE_SIZE)
              }}
              aria-pressed={category === 'all'}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === 'all'
                  ? 'bg-[#0d1b2a] text-white'
                  : 'border border-gray-200 bg-white text-[#30505b] hover:border-[#3e91ce] hover:text-[#3e91ce]'
              }`}
            >
              All ({articles.length})
            </button>
            {availableCategories.map((c) => {
              const count = articles.filter((a) => a.category.slug === c.slug).length
              const active = category === c.slug
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => {
                    setCategory(active ? 'all' : c.slug)
                    setVisible(PAGE_SIZE)
                  }}
                  aria-pressed={active}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? 'text-white'
                      : 'border border-gray-200 bg-white text-[#30505b] hover:border-[#3e91ce] hover:text-[#3e91ce]'
                  }`}
                  style={active ? { backgroundColor: c.accent } : undefined}
                >
                  {c.shortName} ({count})
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Secondary facets ── */}
      {showFilters && (
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5">
          <FacetGroup
            label="Format"
            items={availableFormats.map((f) => ({ slug: f.slug, name: f.name }))}
            active={activeFormats}
            onToggle={(slug) => {
              setActiveFormats((s) => toggle(s, slug))
              setVisible(PAGE_SIZE)
            }}
          />
          {availableTopics.length > 0 && (
            <FacetGroup
              label="Topic"
              items={availableTopics.map((t) => ({ slug: t.slug, name: t.name }))}
              active={activeTopics}
              onToggle={(slug) => {
                setActiveTopics((s) => toggle(s, slug))
                setVisible(PAGE_SIZE)
              }}
            />
          )}
          {!lockRegion && availableRegions.length > 0 && (
            <FacetGroup
              label="Region"
              items={availableRegions.map((r) => ({ slug: r.slug, name: r.name }))}
              active={activeRegions}
              onToggle={(slug) => {
                setActiveRegions((s) => toggle(s, slug))
                setVisible(PAGE_SIZE)
              }}
            />
          )}
        </div>
      )}

      {/* ── Result count ── */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-3">
        <p className="text-sm text-gray-500">
          <span className="font-bold text-[#30505b]">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'article' : 'articles'}
          {query && <> matching “{query}”</>}
        </p>
        {(activeFilterCount > 0 || query) && (
          <button
            type="button"
            onClick={resetAll}
            className="text-sm font-semibold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
          >
            Clear all
          </button>
        )}
      </div>

      {/* ── Results ── */}
      {shown.length > 0 ? (
        <>
          <div
            className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${
              columns === 'three' ? 'lg:grid-cols-3' : ''
            }`}
          >
            {shown.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>

          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0d1b2a] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#30505b]"
              >
                Load more articles
                <span className="text-white/60">({filtered.length - visible} left)</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <p className="mb-2 font-bold text-[#30505b]">No articles match those filters</p>
          <p className="mb-5 text-sm text-gray-500">Try a broader search or clear the filters.</p>
          <button
            type="button"
            onClick={resetAll}
            className="rounded-full bg-[#2a72ad] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#246397]"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}

function FacetGroup({
  label,
  items,
  active,
  onToggle,
}: {
  label: string
  items: Array<{ slug: string; name: string }>
  active: string[]
  onToggle: (slug: string) => void
}) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const on = active.includes(item.slug)
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => onToggle(item.slug)}
              aria-pressed={on}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                on
                  ? 'bg-[#2a72ad] text-white'
                  : 'border border-gray-200 bg-white text-[#30505b] hover:border-[#3e91ce] hover:text-[#3e91ce]'
              }`}
            >
              {item.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
