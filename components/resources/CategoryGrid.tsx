import Link from 'next/link'
import type { ArticleCategory } from '@/lib/cms/taxonomy'

/**
 * Compact, image-led section tiles — magazine "sections" strip.
 */
export default function CategoryGrid({
  categories,
  counts,
  previews,
}: {
  categories: ArticleCategory[]
  counts: Record<string, number>
  previews: Record<string, string>
}) {
  return (
    <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">
      {categories.map((c) => {
        const count = counts[c.slug] ?? 0
        const img = previews[c.slug]
        return (
          <Link
            key={c.slug}
            href={`/resources/category/${c.slug}`}
            className="group relative flex h-28 w-40 flex-shrink-0 snap-start flex-col justify-end overflow-hidden rounded-xl bg-[#0d1b2a] sm:h-32 sm:w-auto"
          >
            {img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"
                loading="lazy"
              />
            )}
            <span
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background: `linear-gradient(to top, ${c.accent}E6 0%, ${c.accent}66 45%, transparent 100%)`,
              }}
              aria-hidden="true"
            />
            <span className="relative z-10 p-3">
              <span className="block text-[13px] font-black leading-tight text-white drop-shadow-sm">
                {c.name}
              </span>
              <span className="mt-0.5 block text-[11px] font-semibold text-white/75">
                {count} {count === 1 ? 'article' : 'articles'}
              </span>
            </span>
          </Link>
        )
      })}
    </div>
  )
}
