import Link from 'next/link'
import AppImage from '@/components/AppImage'

export interface Entry {
  href: string
  title: string
  blurb: string
  kicker?: string
  imageSrc?: string | null
  meta?: string
  /** Short supporting bullets, shown on the lead and standard variants. */
  points?: string[]
}

type Variant = 'lead' | 'standard' | 'rail'

function Chevron({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  )
}

/** Lead — the flagship entry at the top of a directory page. */
function LeadCard({ entry }: { entry: Entry }) {
  return (
    <Link
      href={entry.href}
      className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-[#0d1b2a] lg:min-h-[440px]"
    >
      {entry.imageSrc && (
        <AppImage
          src={entry.imageSrc}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/85 to-[#0d1b2a]/25" />
      <div className="relative z-10 p-6 lg:p-9">
        {entry.kicker && (
          <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.08em] text-[#7fc2f0]">
            {entry.kicker}
          </span>
        )}
        <h2 className="mb-3 text-2xl font-black leading-[1.12] text-white transition-colors group-hover:text-[#7fc2f0] lg:text-4xl">
          {entry.title}
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">{entry.blurb}</p>
        {entry.points && entry.points.length > 0 && (
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
            {entry.points.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-[13px] text-gray-400">
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#3e91ce]" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  )
}

/** Standard — the workhorse grid card, image over copy. */
function StandardCard({ entry }: { entry: Entry }) {
  return (
    <Link
      href={entry.href}
      className="group flex h-full flex-row gap-3 border-b border-gray-200 bg-white py-3 transition-colors hover:bg-[#f4f6f8] sm:flex-col sm:gap-0 sm:border sm:border-gray-200 sm:py-0 sm:hover:border-[#3e91ce]/50 sm:hover:bg-white sm:hover:shadow-md"
    >
      <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden bg-[#162538] sm:h-52 sm:w-full">
        {entry.imageSrc ? (
          <AppImage
            src={entry.imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 72px, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#162538] to-[#30505b]" />
        )}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0d1b2a]/60 to-transparent sm:block" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:p-5">
        {entry.kicker && (
          <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#2a72ad]">
            {entry.kicker}
          </span>
        )}
        <h3 className="mb-1.5 text-sm font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#2a72ad] sm:mb-2 sm:text-base">
          {entry.title}
        </h3>
        <p className="mb-3 hidden line-clamp-3 flex-1 text-[13px] leading-relaxed text-gray-500 sm:block">
          {entry.blurb}
        </p>
        {entry.points && entry.points.length > 0 && (
          <ul className="mb-3 hidden space-y-1 sm:block">
            {entry.points.slice(0, 3).map((p) => (
              <li key={p} className="flex items-start gap-2 text-[12px] leading-snug text-[#30505b]">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#3e91ce]" />
                {p}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-bold text-[#2a72ad]">
          {entry.meta ?? 'Read more'}
          <Chevron />
        </span>
      </div>
    </Link>
  )
}

/**
 * Rail — sits beside the lead card and stretches to fill its height, so a
 * short list occupies the whole column instead of leaving dead space.
 */
function RailCard({ entry }: { entry: Entry }) {
  return (
    <Link href={entry.href} className="group flex min-h-0 flex-1 items-stretch gap-4 py-3">
      <div className="relative w-32 flex-shrink-0 overflow-hidden bg-[#162538] sm:w-40">
        {entry.imageSrc ? (
          <AppImage
            src={entry.imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="160px"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#162538] to-[#30505b]" />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        {entry.kicker && (
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7fc2f0]">{entry.kicker}</span>
        )}
        <h3 className="mt-1 text-[15px] font-bold leading-snug text-white transition-colors group-hover:text-[#7fc2f0] sm:text-base">
          {entry.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-gray-400">{entry.blurb}</p>
        {entry.meta && (
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500">{entry.meta}</p>
        )}
      </div>
    </Link>
  )
}

export default function EntryCard({ entry, variant = 'standard' }: { entry: Entry; variant?: Variant }) {
  if (variant === 'lead') return <LeadCard entry={entry} />
  if (variant === 'rail') return <RailCard entry={entry} />
  return <StandardCard entry={entry} />
}
