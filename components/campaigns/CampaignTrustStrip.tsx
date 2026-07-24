import CampaignIcon from './CampaignIcon'
import CampaignReveal from './CampaignReveal'
import { container } from './styles'
import type { GridItem } from './config'

/** Compact trust indicators directly under the hero. */
export default function CampaignTrustStrip({ items }: { items: GridItem[] }) {
  return (
    <section aria-label="Why PC Water Infrastructure" className="border-b border-gray-200 bg-[#f4f6f8]">
      <div className={container}>
        <CampaignReveal>
          <ul className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {items.map((item, i) => (
              <li
                key={item.title}
                className={`flex items-start gap-3 py-5 sm:py-6 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-gray-200' : ''}`}
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-white text-[#3e91ce] ring-1 ring-gray-200">
                  <CampaignIcon name={item.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-[#0d1b2a]">{item.title}</span>
                  {item.body && <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{item.body}</span>}
                </span>
              </li>
            ))}
          </ul>
        </CampaignReveal>
      </div>
    </section>
  )
}
