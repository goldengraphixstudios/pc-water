import Link from 'next/link'

export type OutcomeTone = 'low' | 'moderate' | 'high' | 'urgent' | 'info'

/** Matches the tones the assessment tool itself uses for a result. */
const TONES: Record<OutcomeTone, string> = {
  low: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  moderate: 'border-amber-200 bg-amber-50 text-amber-700',
  high: 'border-orange-200 bg-orange-50 text-orange-700',
  urgent: 'border-red-200 bg-red-50 text-red-700',
  info: 'border-[#3e91ce]/30 bg-[#3e91ce]/10 text-[#2d7ab8]',
}

export interface Tool {
  href: string
  title: string
  blurb: string
  /** The dimensions the tool actually asks about. */
  asks: string[]
  /** The results it can return, in escalating order. */
  outcomes: Array<{ label: string; tone: OutcomeTone }>
  questions: number
  minutes: string
  cta: string
}

function Arrow() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  )
}

/**
 * A tool is not an article — it takes inputs and returns a verdict. The card
 * shows both up front (what it asks, what it can tell you) and leads with a
 * real button, so the page reads as something to use rather than to read.
 */
export default function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <div className="flex flex-col border border-gray-200 bg-white transition-colors hover:border-[#3e91ce]/60">
      <div className="flex items-center justify-between border-b border-gray-200 bg-[#f4f6f8] px-5 py-2.5">
        <span className="font-mono text-[13px] font-bold text-[#2a72ad]">
          {String(index).padStart(2, '0')}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500">
          Free tool · No signup
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-xl font-black leading-tight text-[#0d1b2a] sm:text-2xl">{tool.title}</h3>
        <p className="mb-5 text-[14px] leading-relaxed text-gray-600">{tool.blurb}</p>

        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2a72ad]">What it asks</p>
        <ul className="mb-5 grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
          {tool.asks.map((a) => (
            <li key={a} className="flex items-start gap-2 text-[13px] leading-snug text-[#30505b]">
              <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#3e91ce]" />
              {a}
            </li>
          ))}
        </ul>

        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2a72ad]">
          What it can tell you
        </p>
        <div className="mb-6 flex flex-wrap gap-1.5">
          {tool.outcomes.map((o) => (
            <span
              key={o.label}
              className={`inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold ${TONES[o.tone]}`}
            >
              {o.label}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-gray-200 pt-5">
          <Link
            href={tool.href}
            className="inline-flex w-full items-center justify-center gap-2 bg-[#2a72ad] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#3e91ce]"
          >
            {tool.cta}
            <Arrow />
          </Link>
          <p className="mt-2.5 text-center font-mono text-[11px] text-gray-500">
            {tool.questions} questions · ~{tool.minutes} · Result on screen
          </p>
        </div>
      </div>
    </div>
  )
}

export interface Pathway {
  href: string
  title: string
  blurb: string
  points: string[]
  cta: string
}

/**
 * The higher-intent enquiry funnels. Deliberately styled apart from the tools
 * above them — navy, no scoring, a person answers at the other end.
 */
export function PathwayCard({ pathway }: { pathway: Pathway }) {
  return (
    <div className="flex flex-col border border-white/15 bg-white/[0.04] p-5 transition-colors hover:border-[#3e91ce]/60 sm:p-6">
      <span className="mb-3 inline-flex items-center gap-2 self-start border border-white/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-[#3e91ce]" />
        Project enquiry
      </span>
      <h3 className="mb-2 text-xl font-black leading-tight text-white">{pathway.title}</h3>
      <p className="mb-5 text-[14px] leading-relaxed text-gray-400">{pathway.blurb}</p>
      <ul className="mb-6 space-y-1.5">
        {pathway.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-[13px] leading-snug text-gray-300">
            <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-[#3e91ce]" />
            {p}
          </li>
        ))}
      </ul>
      <Link
        href={pathway.href}
        className="mt-auto inline-flex w-full items-center justify-center gap-2 border border-[#3e91ce] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#2a72ad] hover:border-[#2a72ad]"
      >
        {pathway.cta}
        <Arrow />
      </Link>
    </div>
  )
}
