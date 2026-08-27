/**
 * The ruled section heading used throughout the editorial pages — a heavy
 * navy rule with the title left and an optional count/label right.
 */
export default function RuleHeading({
  children,
  meta,
  light = false,
  as: Tag = 'h2',
  className = '',
}: {
  children: React.ReactNode
  meta?: React.ReactNode
  light?: boolean
  as?: 'h2' | 'h3'
  className?: string
}) {
  return (
    <div
      className={`mb-5 flex items-baseline justify-between gap-4 border-b-2 pb-2 ${
        light ? 'border-white/25' : 'border-[#0d1b2a]'
      } ${className}`}
    >
      <Tag
        className={`text-lg font-black uppercase tracking-tight sm:text-xl ${
          light ? 'text-white' : 'text-[#0d1b2a]'
        }`}
      >
        {children}
      </Tag>
      {meta && (
        <span className={`font-mono text-[11px] ${light ? 'text-gray-400' : 'text-gray-500'}`}>{meta}</span>
      )}
    </div>
  )
}
