import CampaignReveal from './CampaignReveal'
import SectionHeading from './SectionHeading'
import { container } from './styles'
import type { CampaignConfig } from './config'

/**
 * FAQ built on native <details>/<summary> — fully keyboard accessible, works
 * without JS, and inherently reduced-motion friendly. Emits FAQPage JSON-LD.
 */
export default function CampaignFAQ({ config }: { config: CampaignConfig }) {
  const { faq } = config

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-20 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className={`${container} py-14 sm:py-16 lg:py-20`}>
        <CampaignReveal>
          <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} />
        </CampaignReveal>

        <CampaignReveal>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {faq.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-bold text-[#0d1b2a] transition-colors hover:text-[#30505b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-[#3e91ce] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </CampaignReveal>
      </div>
    </section>
  )
}
