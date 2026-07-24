import { eyebrow as eyebrowCls } from './styles'

export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = 'left',
  tone = 'light',
}: {
  eyebrow?: string
  heading: string
  intro?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  const headingColor = tone === 'dark' ? 'text-white' : 'text-[#0d1b2a]'
  const introColor = tone === 'dark' ? 'text-gray-300' : 'text-gray-600'
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={eyebrowCls}>{eyebrow}</p>}
      <h2 className={`mt-3 text-2xl font-black leading-tight tracking-tight sm:text-3xl ${headingColor}`}>
        {heading}
      </h2>
      {intro && <p className={`mt-4 text-base leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  )
}
