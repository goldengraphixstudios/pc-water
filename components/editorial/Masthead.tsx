import Link from 'next/link'
import AppImage from '@/components/AppImage'
import Breadcrumbs, { type Crumb } from '@/components/resources/Breadcrumbs'
import { SHELL } from '@/lib/shell'

export interface MastheadStat {
  label: string
  value: string | number
}

interface Props {
  /** Small "/ Section" label above the title. */
  kicker: string
  title: React.ReactNode
  lead?: string
  /** Secondary paragraph shown in the right column on large screens. */
  aside?: React.ReactNode
  crumbs?: Crumb[]
  imageSrc?: string | null
  imageAlt?: string
  /** Numbers rendered as a stat rail beneath the lead. */
  stats?: MastheadStat[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  priority?: boolean
}

/**
 * The full-bleed editorial masthead used across projects, industries, services
 * and tools. Same navy/steel palette and left-to-right span as /resources —
 * these pages deliberately opt out of the narrow centred container.
 */
export default function Masthead({
  kicker,
  title,
  lead,
  aside,
  crumbs,
  imageSrc,
  imageAlt = '',
  stats,
  primaryCta,
  secondaryCta,
  priority = true,
}: Props) {
  return (
    <section className="relative flex min-h-[360px] items-end overflow-hidden border-b-4 border-[#3e91ce] bg-[#0d1b2a] pt-28 pb-9 sm:min-h-[420px] sm:pt-32 sm:pb-11 lg:pt-36">
      {imageSrc ? (
        <AppImage
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-15" />
      )}
      {imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/70 via-[#0d1b2a]/82 to-[#0d1b2a]/96" />
      )}

      <div className={`relative z-10 ${SHELL}`}>
        {crumbs && crumbs.length > 0 && <Breadcrumbs light items={crumbs} />}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-12">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3e91ce]">/ {kicker}</p>
            <h1 className="mb-4 text-[2rem] font-black leading-[0.98] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h1>
            {lead && <p className="max-w-3xl text-base leading-relaxed text-gray-300">{lead}</p>}

            {(primaryCta || secondaryCta) && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#2a72ad] px-6 py-3 text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#3e91ce]"
                  >
                    {primaryCta.label}
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-[14px] font-bold text-white transition-colors hover:border-[#3e91ce] hover:text-[#7fc2f0]"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {(aside || (stats && stats.length > 0)) && (
            <div className="lg:border-l lg:border-white/15 lg:pb-1 lg:pl-8">
              {aside && <div className="text-sm leading-relaxed text-gray-400">{aside}</div>}
              {stats && stats.length > 0 && (
                <dl className={`flex flex-wrap gap-x-8 gap-y-4 ${aside ? 'mt-5' : ''}`}>
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">{s.label}</dt>
                      <dd className="text-2xl font-black leading-tight text-white lg:text-3xl">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
