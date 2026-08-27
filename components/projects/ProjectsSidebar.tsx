import Link from 'next/link'
import type { EnrichedArticle } from '@/lib/cms/taxonomy'

interface Props {
  locations: Array<{ label: string; count: number }>
  services: Array<{ label: string; count: number }>
  relatedArticles: EnrichedArticle[]
}

function Panel({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <h3 className="mb-2 border-b-2 border-[#0d1b2a] pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d1b2a]">
        {title}
      </h3>
      {children}
    </section>
  )
}

export default function ProjectsSidebar({ locations, services, relatedArticles }: Props) {
  return (
    <aside className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:sticky xl:top-24 xl:max-h-[calc(100vh-7rem)] xl:grid-cols-1 xl:overflow-y-auto xl:pr-1 xl:thin-scroll">
      {locations.length > 0 && (
        <Panel title="Where we've delivered">
          <ul className="divide-y divide-gray-200">
            {locations.map((l) => (
              <li key={l.label} className="flex items-center justify-between gap-2 py-2 text-[13px]">
                <span className="font-medium text-[#30505b]">{l.label}</span>
                <span className="font-mono text-[11px] text-gray-400">{l.count}</span>
              </li>
            ))}
          </ul>
        </Panel>
      )}

      {services.length > 0 && (
        <Panel title="Services delivered">
          <div className="flex flex-wrap gap-1">
            {services.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1 border border-gray-300 px-2 py-1 text-[11px] font-medium text-[#30505b]"
              >
                {s.label}
                <span className="font-mono text-[10px] text-gray-400">{s.count}</span>
              </span>
            ))}
          </div>
        </Panel>
      )}

      {/* Capability statement */}
      <section className="bg-[#0d1b2a] p-5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3e91ce]">
          Capability statement
        </p>
        <h3 className="mb-2 text-[15px] font-black leading-snug text-white">
          The full picture of what we deliver
        </h3>
        <p className="mb-4 text-[13px] leading-relaxed text-gray-400">
          Scope, standards, sectors and delivery model — in one document.
        </p>
        <a
          href="/downloads/pc-tanks-capability-statement-2026.pdf"
          className="inline-flex items-center gap-1.5 bg-[#2a72ad] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#3e91ce]"
        >
          Download PDF
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

      {relatedArticles.length > 0 && (
        <Panel title="Related reading">
          <div className="divide-y divide-gray-200">
            {relatedArticles.map((a) => (
              <Link key={a.id} href={`/resources/${a.slug}`} className="group block py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#2a72ad]">
                  {a.category.shortName}
                </span>
                <p className="mt-0.5 line-clamp-2 text-[13px] font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#2a72ad]">
                  {a.title}
                </p>
                <p className="mt-0.5 text-[11px] text-gray-400">{a.readTime}</p>
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
        </Panel>
      )}

      <section className="border-l-2 border-[#3e91ce] bg-[#f4f6f8] p-4">
        <h3 className="mb-1.5 text-[14px] font-black leading-snug text-[#30505b]">
          Have a similar project?
        </h3>
        <p className="mb-3 text-[12px] leading-relaxed text-gray-600">
          Tell us about your water storage challenge — we respond within one business day.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
        >
          Discuss a project
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </aside>
  )
}
