import Link from 'next/link'
import type { ArticleCategory } from '@/lib/cms/taxonomy'

/**
 * Section rail — uniform, monochrome tiles. Wraps to a full-width row on
 * large screens so there is never a horizontal scrollbar.
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
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-gray-200 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10">
      {categories.map((c) => {
        const count = counts[c.slug] ?? 0
        const img = previews[c.slug]
        return (
          <Link
            key={c.slug}
            href={`/resources/category/${c.slug}`}
            className="group relative flex h-24 flex-col justify-end overflow-hidden bg-[#0d1b2a] xl:h-28"
          >
            {img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0"
                loading="lazy"
              />
            )}
            <span className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/70 to-[#0d1b2a]/20" />
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#3e91ce] transition-transform duration-300 group-hover:scale-x-100" />
            <span className="relative z-10 p-3">
              <span className="block text-[12px] font-bold leading-tight text-white transition-colors group-hover:text-[#7fc2f0]">
                {c.shortName}
              </span>
              <span className="mt-0.5 block font-mono text-[10px] text-gray-500">{count}</span>
            </span>
          </Link>
        )
      })}
    </div>
  )
}
