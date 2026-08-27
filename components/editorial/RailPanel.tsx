import Link from 'next/link'

/** A titled block inside a sticky editorial rail. */
export function RailPanel({
  title,
  children,
  light = false,
  className = '',
}: {
  title: string
  children: React.ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <section className={className}>
      <h3
        className={`mb-2 border-b-2 pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] ${
          light ? 'border-white/25 text-white' : 'border-[#0d1b2a] text-[#0d1b2a]'
        }`}
      >
        {title}
      </h3>
      {children}
    </section>
  )
}

/** Key/value list — project snapshots, specifications, standards. */
export function RailFacts({ facts }: { facts: Array<{ label: string; value: React.ReactNode }> }) {
  return (
    <dl className="divide-y divide-gray-200">
      {facts.map((f) => (
        <div key={f.label} className="flex justify-between gap-3 py-2 text-[13px]">
          <dt className="flex-shrink-0 font-medium text-gray-500">{f.label}</dt>
          <dd className="whitespace-pre-line text-right font-semibold text-[#30505b]">{f.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Plain link list with a hairline divider — services, standards, siblings. */
export function RailLinks({
  links,
}: {
  links: Array<{ label: string; href: string; meta?: string }>
}) {
  return (
    <ul className="divide-y divide-gray-200">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="group flex items-center justify-between gap-2 py-2 text-[13px] transition-colors"
          >
            <span className="font-medium text-[#30505b] transition-colors group-hover:text-[#2a72ad]">
              {l.label}
            </span>
            {l.meta ? (
              <span className="flex-shrink-0 font-mono text-[11px] text-gray-400">{l.meta}</span>
            ) : (
              <svg
                className="h-3 w-3 flex-shrink-0 text-gray-300 transition-colors group-hover:text-[#2a72ad]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** Navy download/capability block. */
export function RailDownload({
  kicker = 'Capability statement',
  heading = 'The full picture of what we deliver',
  body = 'Scope, standards, sectors and delivery model — in one document.',
  href = '/downloads/pc-tanks-capability-statement-2026.pdf',
  label = 'Download PDF',
}: {
  kicker?: string
  heading?: string
  body?: string
  href?: string
  label?: string
}) {
  return (
    <section className="bg-[#0d1b2a] p-5">
      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3e91ce]">{kicker}</p>
      <h3 className="mb-2 text-[15px] font-black leading-snug text-white">{heading}</h3>
      <p className="mb-4 text-[13px] leading-relaxed text-gray-400">{body}</p>
      <a
        href={href}
        className="inline-flex items-center gap-1.5 bg-[#2a72ad] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#3e91ce]"
      >
        {label}
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </a>
    </section>
  )
}

/** Light contact prompt with the steel-blue keyline. */
export function RailContact({
  heading = 'Have a similar project?',
  body = 'Tell us about your water storage challenge — we respond within one business day.',
  label = 'Discuss a project',
  href = '/contact',
}: {
  heading?: string
  body?: string
  label?: string
  href?: string
}) {
  return (
    <section className="border-l-2 border-[#3e91ce] bg-[#f4f6f8] p-4">
      <h3 className="mb-1.5 text-[14px] font-black leading-snug text-[#30505b]">{heading}</h3>
      <p className="mb-3 text-[12px] leading-relaxed text-gray-600">{body}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
      >
        {label}
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </section>
  )
}

/** Article teasers for a rail. */
export function RailArticles({
  articles,
  title = 'Related reading',
}: {
  articles: Array<{ id: string; slug: string; title: string; readTime?: string | null; kicker?: string }>
  title?: string
}) {
  if (articles.length === 0) return null
  return (
    <RailPanel title={title}>
      <div className="divide-y divide-gray-200">
        {articles.map((a) => (
          <Link key={a.id} href={`/resources/${a.slug}`} className="group block py-2.5">
            {a.kicker && (
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#2a72ad]">{a.kicker}</span>
            )}
            <p className="mt-0.5 line-clamp-2 text-[13px] font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#2a72ad]">
              {a.title}
            </p>
            {a.readTime && <p className="mt-0.5 text-[11px] text-gray-400">{a.readTime}</p>}
          </Link>
        ))}
      </div>
      <Link
        href="/resources"
        className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
      >
        Browse the library
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </RailPanel>
  )
}

/**
 * The shared rail wrapper.
 *
 * `sticky` becomes a pinned single column from lg up — for layouts that give
 * the rail its own column at that width. `wrap` keeps it a full-width band of
 * panels at lg and only pins it at xl, which is what a three-column page needs
 * once the middle columns have claimed the lg breakpoint.
 */
export function Rail({
  children,
  variant = 'sticky',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'sticky' | 'wrap'
  className?: string
}) {
  const base = 'grid grid-cols-1 gap-6 sm:grid-cols-2'
  const pin =
    variant === 'wrap'
      ? 'lg:grid-cols-3 xl:sticky xl:top-24 xl:max-h-[calc(100vh-7rem)] xl:grid-cols-1 xl:overflow-y-auto xl:pr-1 xl:thin-scroll'
      : 'lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:grid-cols-1 lg:overflow-y-auto lg:pr-1 lg:thin-scroll'

  return <aside className={`${base} ${pin} ${className}`}>{children}</aside>
}
