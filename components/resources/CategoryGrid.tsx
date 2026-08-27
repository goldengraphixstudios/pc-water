import Link from 'next/link'
import type { ArticleCategory } from '@/lib/cms/taxonomy'

export default function CategoryGrid({
  categories,
  counts,
}: {
  categories: ArticleCategory[]
  counts: Record<string, number>
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => {
        const count = counts[c.slug] ?? 0
        return (
          <Link
            key={c.slug}
            href={`/resources/category/${c.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ backgroundColor: c.accent }}
              aria-hidden="true"
            />
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-black leading-tight text-[#30505b] transition-colors group-hover:text-[#3e91ce]">
                {c.name}
              </h3>
              <span
                className="mt-0.5 flex-shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
                style={{ backgroundColor: c.accent }}
              >
                {count}
              </span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-gray-500">{c.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2a72ad] transition-all group-hover:gap-2.5">
              Browse section
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        )
      })}
    </div>
  )
}
