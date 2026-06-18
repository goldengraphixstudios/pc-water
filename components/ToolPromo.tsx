import Link from 'next/link'

interface ToolPromoProps {
  eyebrow?: string
  heading: string
  description: string
  href: string
  ctaLabel: string
}

/**
 * Compact, on-brand banner that points service / resource / project pages at a
 * free lead-generation tool. Server component — no client JS required.
 */
export default function ToolPromo({
  eyebrow = '/ Free Tool',
  heading,
  description,
  href,
  ctaLabel,
}: ToolPromoProps) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-[#0d1b2a] px-6 py-8 md:px-10 md:py-9">
          <div className="dot-pattern absolute inset-0 opacity-15 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#3e91ce]/15 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[#2a72ad] text-xs font-bold tracking-widest uppercase mb-2">{eyebrow}</p>
              <h2 className="text-xl md:text-2xl font-black text-white mb-2">{heading}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
            <Link
              href={href}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#2a72ad] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#246397] transition-colors whitespace-nowrap"
            >
              {ctaLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
