import Link from 'next/link'
import EntryCard, { type Entry } from '@/components/editorial/EntryCard'
import { SHELL } from '@/lib/shell'

/**
 * The navy opening block shared by every directory page: one large lead entry
 * with a rail of others stretched alongside it, and a jump link to the full
 * listing below.
 */
export default function FlagshipBlock({
  lead,
  rail,
  railTitle,
  seeAll,
}: {
  lead: Entry
  rail: Entry[]
  railTitle: string
  seeAll?: { label: string; href: string }
}) {
  return (
    <section className="bg-[#0d1b2a] pb-10 pt-6 sm:pb-14 sm:pt-8">
      <div className={SHELL}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
          <EntryCard entry={lead} variant="lead" />
          {rail.length > 0 && (
            <div className="flex flex-col">
              <h2 className="mb-1 border-b border-white/20 pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                {railTitle}
              </h2>
              <div className="flex flex-1 flex-col divide-y divide-white/10">
                {rail.map((e) => (
                  <EntryCard key={e.href} entry={e} variant="rail" />
                ))}
              </div>
              {seeAll && (
                <a
                  href={seeAll.href}
                  className="mt-3 inline-flex items-center gap-1.5 border-t border-white/20 pt-3 text-[13px] font-bold text-[#7fc2f0] transition-colors hover:text-white"
                >
                  {seeAll.label}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/** Re-exported so pages import the card and the block from one place. */
export { EntryCard }
export type { Entry }

/** Link kept for pages that need an internal jump target outside the block. */
export function JumpLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
    >
      {children}
      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
