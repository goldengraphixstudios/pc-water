import Link from 'next/link'
import type { EnrichedArticle } from '@/lib/cms/taxonomy'
import { formatDate } from '@/lib/cms/utils'

type Variant = 'lead' | 'feature' | 'standard' | 'compact'

/** Small uppercase section label — one accent across the whole library. */
function SectionLabel({ article, light = false }: { article: EnrichedArticle; light?: boolean }) {
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-[0.08em] ${
        light ? 'text-[#7fc2f0]' : 'text-[#2a72ad]'
      }`}
    >
      {article.category.shortName}
    </span>
  )
}

function Meta({ article, className = '' }: { article: EnrichedArticle; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] ${className}`}>
      <span>{article.format.label}</span>
      {article.readTime && (
        <>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </>
      )}
      {article.publishedAt && (
        <>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </>
      )}
    </div>
  )
}

/** Lead — the single most prominent article on a hub. */
function LeadCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-xl bg-[#0d1b2a] lg:min-h-[440px]"
    >
      {article.coverImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.coverImageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/85 to-[#0d1b2a]/25" />
      <div className="relative z-10 p-6 lg:p-9">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <SectionLabel article={article} light />
          <span className="h-3 w-px bg-white/25" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">Featured</span>
        </div>
        <h2 className="mb-3 text-2xl font-black leading-[1.12] text-white transition-colors group-hover:text-[#7fc2f0] lg:text-4xl">
          {article.title}
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">{article.excerpt}</p>
        <Meta article={article} className="text-gray-400" />
      </div>
    </Link>
  )
}

/** Feature — secondary featured slot on dark backgrounds. */
function FeatureCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-[#3e91ce]/50 hover:bg-white/[0.08]"
    >
      <div className="relative h-32 overflow-hidden bg-[#162538]">
        {article.coverImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/85 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <SectionLabel article={article} light />
        <h3 className="mt-1.5 mb-2 text-sm font-bold leading-snug text-white transition-colors group-hover:text-[#7fc2f0]">
          {article.title}
        </h3>
        <p className="mb-3 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-400">{article.excerpt}</p>
        <Meta article={article} className="text-gray-500" />
      </div>
    </Link>
  )
}

/** Standard — dense row on mobile, editorial card from sm up. */
function StandardCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex h-full flex-row gap-3 rounded-xl border-b border-gray-200 bg-white py-3 transition-all hover:bg-[#f4f6f8] sm:flex-col sm:gap-0 sm:border sm:border-gray-200 sm:py-0 sm:shadow-sm sm:hover:border-[#3e91ce]/50 sm:hover:bg-white sm:hover:shadow-lg"
    >
      <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded bg-[#162538] sm:h-36 sm:w-full sm:rounded-none sm:rounded-t-lg">
        {article.coverImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-end bg-gradient-to-br from-[#162538] to-[#30505b] p-2">
            <span className="select-none text-2xl font-black leading-none text-white/15 sm:text-4xl">PC</span>
          </div>
        )}
        {article.region && (
          <span className="absolute right-1.5 top-1.5 hidden rounded bg-[#0d1b2a]/80 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm sm:block">
            {article.region.shortName}
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:p-4">
        <div className="mb-1 flex items-center gap-1.5">
          <SectionLabel article={article} />
          <span className="hidden text-[11px] text-gray-400 sm:inline" aria-hidden="true">
            ·
          </span>
          <span className="hidden text-[11px] text-gray-400 sm:inline">{article.format.label}</span>
        </div>
        <h3 className="mb-1.5 line-clamp-3 text-sm font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#2a72ad] sm:mb-2 sm:line-clamp-2 sm:text-[15px]">
          {article.title}
        </h3>
        <p className="mb-2 hidden line-clamp-2 flex-1 text-[13px] leading-relaxed text-gray-500 sm:block">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-1.5 text-[11px] text-gray-400">
          <span>{article.readTime}</span>
          {article.publishedAt && (
            <>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

/** Compact — dense text row for rails. */
function CompactCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link href={`/resources/${article.slug}`} className="group flex gap-3 py-2.5">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-[#162538]">
        {article.coverImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.coverImageUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <SectionLabel article={article} />
        <h4 className="mt-0.5 line-clamp-2 text-[13px] font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#2a72ad]">
          {article.title}
        </h4>
        <p className="mt-0.5 text-[11px] text-gray-400">{article.readTime}</p>
      </div>
    </Link>
  )
}

export default function ArticleCard({
  article,
  variant = 'standard',
}: {
  article: EnrichedArticle
  variant?: Variant
}) {
  if (variant === 'lead') return <LeadCard article={article} />
  if (variant === 'feature') return <FeatureCard article={article} />
  if (variant === 'compact') return <CompactCard article={article} />
  return <StandardCard article={article} />
}
