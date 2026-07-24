import CampaignIcon from './CampaignIcon'
import CampaignReveal from './CampaignReveal'
import SectionHeading from './SectionHeading'
import { container, gridLinesLight } from './styles'
import type { CampaignSectionBlock } from './config'

type Background = 'white' | 'grey'

/**
 * Renders a config-driven content section in one of three layouts:
 *  - grid:     spec-sheet grid of indicators (hairline engineering grid lines)
 *  - pathways: 3 emphasized decision cards
 *  - sectors:  compact buyer/sector list
 */
export default function CampaignSection({
  block,
  background = 'white',
}: {
  block: CampaignSectionBlock
  background?: Background
}) {
  const bg = background === 'grey' ? 'bg-[#f4f6f8]' : 'bg-white'

  return (
    <section id={block.id} className={`relative scroll-mt-20 ${bg}`}>
      {background === 'grey' && (
        <div className={`pointer-events-none absolute inset-0 ${gridLinesLight}`} aria-hidden="true" />
      )}
      <div className={`${container} relative py-14 sm:py-16 lg:py-20`}>
        <CampaignReveal>
          <SectionHeading eyebrow={block.eyebrow} heading={block.heading} intro={block.intro} />
        </CampaignReveal>

        <div className="mt-10">
          {block.variant === 'grid' && <GridLayout block={block} />}
          {block.variant === 'pathways' && <PathwaysLayout block={block} />}
          {block.variant === 'sectors' && <SectorsLayout block={block} />}
        </div>

        {block.note && (
          <CampaignReveal delay={0.05}>
            <p className="mt-8 flex items-start gap-3 border-l-2 border-[#3e91ce] bg-white/60 py-2 pl-4 text-sm leading-relaxed text-[#30505b]">
              {block.note}
            </p>
          </CampaignReveal>
        )}
      </div>
    </section>
  )
}

function GridLayout({ block }: { block: CampaignSectionBlock }) {
  return (
    <CampaignReveal>
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <li key={item.title} className="bg-white p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-[#0d1b2a] text-[#3e91ce]">
              <CampaignIcon name={item.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-bold text-[#0d1b2a]">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.body}</p>
          </li>
        ))}
      </ul>
    </CampaignReveal>
  )
}

function PathwaysLayout({ block }: { block: CampaignSectionBlock }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {block.items.map((item, i) => (
        <CampaignReveal key={item.title} delay={i * 0.06}>
          <div className="group h-full rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-[#3e91ce]">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded bg-[#0d1b2a] text-white">
                <CampaignIcon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs font-bold tracking-widest text-gray-300">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-black text-[#0d1b2a]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
          </div>
        </CampaignReveal>
      ))}
    </div>
  )
}

function SectorsLayout({ block }: { block: CampaignSectionBlock }) {
  return (
    <CampaignReveal>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-[#3e91ce]"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-[#f4f6f8] text-[#30505b]">
              <CampaignIcon name={item.icon} className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-[#0d1b2a]">{item.title}</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{item.body}</span>
            </span>
          </li>
        ))}
      </ul>
    </CampaignReveal>
  )
}
