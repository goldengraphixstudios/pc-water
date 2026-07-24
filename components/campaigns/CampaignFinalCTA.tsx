import CtaLink from './CtaLink'
import { container, gridLinesDark } from './styles'
import type { CampaignConfig } from './config'

/** Strong closing call-to-action on a navy panel. */
export default function CampaignFinalCTA({ config }: { config: CampaignConfig }) {
  const { finalCta } = config
  return (
    <section className="relative isolate overflow-hidden bg-[#0d1b2a]">
      <div className={`pointer-events-none absolute inset-0 ${gridLinesDark} opacity-70`} aria-hidden="true" />
      <div className={`${container} relative py-16 sm:py-20`}>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            {finalCta.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">{finalCta.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#lead-form" variant="onDark" action="start-form" ctaLocation="final">
              {finalCta.primaryCta}
            </CtaLink>
            <CtaLink href={`tel:${config.phone}`} variant="outlineDark" action="call" ctaLocation="final">
              Call {config.phoneDisplay}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
