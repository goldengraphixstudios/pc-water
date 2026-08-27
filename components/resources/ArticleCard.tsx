import Link from 'next/link'
import type { EnrichedArticle } from '@/lib/cms/taxonomy'
import { formatDate } from '@/lib/cms/utils'

type Variant = 'lead' | 'feature' | 'standard' | 'compact'

function CategoryPill({ article, dark = false }: { article: EnrichedArticle; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
        dark ? 'bg-white/15 text-white backdrop-blur-sm' : 'text-white'
      }`}
      style={dark ? undefined : { backgroundColor: article.category.accent }}
    >
      {article.category.shortName}
    </span>
  )
}

function Meta({ article, className = '' }: { article: EnrichedArticle; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${className}`}>
      <span className="font-semibold">{article.format.label}</span>
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

/**
 * Lead — the single most prominent article on a hub. Large, image-led.
 */
function LeadCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-[#0d1b2a] lg:min-h-[460px]"
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/80 to-[#0d1b2a]/20" />
      <div className="relative z-10 p-7 lg:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <CategoryPill article={article} />
          <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80">
            Featured
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-black leading-tight text-white transition-colors group-hover:text-[#7fc2f0] lg:text-4xl">
          {article.title}
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">
          {article.excerpt}
        </p>
        <Meta article={article} className="text-gray-400" />
      </div>
    </Link>
  )
}

/**
 * Feature — secondary featured slot. Image band + copy.
 */
function FeatureCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#3e91ce]/40 hover:bg-white/10"
    >
      <div className="relative h-40 overflow-hidden bg-[#162538]">
        {article.coverImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/70 to-transparent" />
        <div className="absolute left-4 top-4">
          <CategoryPill article={article} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-base font-bold leading-snug text-white transition-colors group-hover:text-[#7fc2f0]">
          {article.title}
        </h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-400">
          {article.excerpt}
        </p>
        <Meta article={article} className="text-gray-500" />
      </div>
    </Link>
  )
}

/**
 * Standard — the workhorse grid card on light backgrounds.
 */
function StandardCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex h-full flex-row gap-3 overflow-hidden rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-col sm:gap-0 sm:rounded-2xl sm:p-0 sm:hover:-translate-y-1 sm:hover:shadow-xl"
    >
      {/* Thumbnail — compact square on mobile, full-width band on larger screens */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] sm:h-40 sm:w-full sm:rounded-none">
        {article.coverImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-3">
            <span className="select-none text-3xl font-black leading-none text-white/20 sm:text-5xl">PC</span>
          </div>
        )}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0d1b2a]/45 to-transparent sm:block" />
        <div className="absolute left-3 top-3 hidden sm:block">
          <CategoryPill article={article} />
        </div>
        {article.region && (
          <div className="absolute right-3 top-3 hidden sm:block">
            <span className="rounded-full bg-[#0d1b2a]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {article.region.shortName}
            </span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:p-5">
        {/* Mobile-only category label (the pill lives on the image at sm+) */}
        <span
          className="mb-1 text-[10px] font-bold uppercase tracking-wider sm:hidden"
          style={{ color: article.category.accent }}
        >
          {article.category.shortName}
        </span>
        <Meta article={article} className="mb-2 hidden text-gray-400 sm:flex" />
        <h3 className="mb-1.5 line-clamp-3 text-sm font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#3e91ce] sm:mb-2.5 sm:line-clamp-none sm:text-base">
          {article.title}
        </h3>
        <p className="hidden flex-1 text-sm leading-relaxed text-gray-500 sm:line-clamp-3 sm:block">
          {article.excerpt}
        </p>
        <span className="text-[11px] text-gray-400 sm:hidden">{article.readTime}</span>
      </div>
    </Link>
  )
}

/**
 * Compact — dense text-only row for sidebars and "more in this section".
 */
function CompactCard({ article }: { article: EnrichedArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex gap-4 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:border-[#3e91ce]/40 hover:shadow-sm"
    >
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#162538]">
        {article.coverImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.coverImageUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: article.category.accent }}>
          {article.category.shortName}
        </p>
        <h4 className="mb-1 line-clamp-2 text-sm font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#3e91ce]">
          {article.title}
        </h4>
        <p className="text-xs text-gray-400">{article.readTime}</p>
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
