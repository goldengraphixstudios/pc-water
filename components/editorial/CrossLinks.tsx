import Link from 'next/link'
import AppImage from '@/components/AppImage'

export interface CrossLink {
  href: string
  title: string
  blurb?: string
  kicker?: string
  imageSrc?: string | null
  meta?: string
}

/**
 * Image-backed cross-link cards. Used for "related services", "sectors we
 * serve" and "also in the portfolio" strips so every hand-off between page
 * families carries a picture rather than a bare list of links.
 */
export default function CrossLinks({
  links,
  columns = 3,
  dark = false,
}: {
  links: CrossLink[]
  columns?: 2 | 3 | 4
  dark?: boolean
}) {
  if (links.length === 0) return null

  const cols =
    columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 gap-4 ${cols}`}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`group flex flex-col overflow-hidden border transition-colors ${
            dark
              ? 'border-white/15 bg-white/[0.04] hover:border-[#3e91ce]/60'
              : 'border-gray-200 bg-white hover:border-[#3e91ce]/60 hover:shadow-md'
          }`}
        >
          {l.imageSrc && (
            <div className="relative aspect-[16/9] overflow-hidden bg-[#162538]">
              <AppImage
                src={l.imageSrc}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/55 to-transparent" />
            </div>
          )}
          <div className="flex flex-1 flex-col p-4 sm:p-5">
            {l.kicker && (
              <span
                className={`mb-1 text-[10px] font-bold uppercase tracking-[0.08em] ${
                  dark ? 'text-[#7fc2f0]' : 'text-[#2a72ad]'
                }`}
              >
                {l.kicker}
              </span>
            )}
            <h3
              className={`mb-1.5 text-[15px] font-black leading-snug transition-colors sm:text-base ${
                dark ? 'text-white group-hover:text-[#7fc2f0]' : 'text-[#30505b] group-hover:text-[#2a72ad]'
              }`}
            >
              {l.title}
            </h3>
            {l.blurb && (
              <p
                className={`line-clamp-3 flex-1 text-[13px] leading-relaxed ${
                  dark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {l.blurb}
              </p>
            )}
            {l.meta && (
              <p
                className={`mt-3 font-mono text-[11px] uppercase tracking-[0.08em] ${
                  dark ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                {l.meta}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
