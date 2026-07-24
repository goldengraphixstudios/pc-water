import CampaignIcon from './CampaignIcon'
import CampaignReveal from './CampaignReveal'
import SectionHeading from './SectionHeading'
import { container, gridLinesLight } from './styles'
import type { CampaignSectionBlock } from './config'

type Background = 'white' | 'grey'

/**
 * Renders a config-driven content section in one of three layouts:
 *  - grid:     even card grid of indicators (no empty filler cells)
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
      <div className={`${container} relative py-12 sm:py-16 lg:py-20`}>
        <CampaignReveal>
          <SectionHeading eyebrow={block.eyebrow} heading={block.heading} intro={block.intro} />
        </CampaignReveal>

        <div className="mt-9 sm:mt-10">
          {block.variant === 'grid' && <GridLayout block={block} />}
          {block.variant === 'pathways' && <PathwaysLayout block={block} />}
          {block.variant === 'sectors' && <SectorsLayout block={block} />}
        </div>

        {block.note && (
          <CampaignReveal delay={0.05}>
            <p className="mt-8 border-l-2 border-[#3e91ce] py-1.5 pl-4 text-sm leading-relaxed text-[#30505b]">
              {block.note}
            </p>
          </CampaignReveal>
        )}
      </div>
    </section>
  )
}

/** Even icon tile shared across every card layout so glyphs align perfectly. */
function IconTile({ icon }: { icon?: string }) {
  return (
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#0d1b2a] text-[#3e91ce]">
      <CampaignIcon name={icon} className="h-[22px] w-[22px]" />
    </span>
  )
}

function GridLayout({ block }: { block: CampaignSectionBlock }) {
  return (
    <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
      {block.items.map((item, i) => (
        <CampaignReveal as="li" key={item.title} delay={(i % 3) * 0.05}>
          <div className="h-full rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-[#3e91ce] hover:shadow-sm">
            <IconTile icon={item.icon} />
            <h3 className="mt-4 text-base font-bold text-[#0d1b2a]">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.body}</p>
          </div>
        </CampaignReveal>
      ))}
    </ul>
  )
}

function PathwaysLayout({ block }: { block: CampaignSectionBlock }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {block.items.map((item, i) => (
        <CampaignReveal key={item.title} delay={i * 0.06}>
          <div className="group h-full rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#3e91ce] hover:shadow-sm">
            <div className="flex items-center justify-between">
              <IconTile icon={item.icon} />
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
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {block.items.map((item, i) => (
        <CampaignReveal as="li" key={item.title} delay={(i % 3) * 0.04}>
          <div className="flex h-full items-start gap-3.5 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-[#3e91ce] hover:shadow-sm">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#f4f6f8] text-[#30505b]">
              <CampaignIcon name={item.icon} className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-[#0d1b2a]">{item.title}</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{item.body}</span>
            </span>
          </div>
        </CampaignReveal>
      ))}
    </ul>
  )
}
