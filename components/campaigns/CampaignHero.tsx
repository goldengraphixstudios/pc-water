import AppImage from '@/components/AppImage'
import CampaignLeadFormUI from './CampaignLeadFormUI'
import CtaLink from './CtaLink'
import { container, eyebrow as eyebrowCls, gridLinesDark } from './styles'
import type { CampaignConfig } from './config'

/**
 * Hero + primary conversion point. On desktop the lead form sits in the right
 * column, above the fold. On mobile the copy stacks first and the hero CTA
 * scrolls to the same form (id="lead-form") below.
 */
export default function CampaignHero({ config }: { config: CampaignConfig }) {
  const { hero } = config

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0d1b2a]">
      {/* Full-bleed project photography with a navy editorial overlay */}
      <div className="absolute inset-0 -z-10">
        <AppImage
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/85 via-[#0d1b2a]/80 to-[#0d1b2a]/95 lg:bg-gradient-to-r lg:from-[#0d1b2a]/95 lg:via-[#0d1b2a]/88 lg:to-[#0d1b2a]/70" />
        <div className={`absolute inset-0 ${gridLinesDark} opacity-60`} aria-hidden="true" />
      </div>

      <div
        className={`${container} grid items-start gap-10 py-12 sm:py-14 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-12 lg:py-20`}
      >
        {/* Copy column */}
        <div className="max-w-xl">
          <p className={eyebrowCls}>{hero.eyebrow}</p>
          <h1 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">{hero.sub}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href="#lead-form" variant="onDark" action="start-form" ctaLocation="hero">
              {hero.primaryCta}
            </CtaLink>
            <CtaLink href={`tel:${config.phone}`} variant="outlineDark" action="call" ctaLocation="hero">
              {hero.secondaryCta}
            </CtaLink>
          </div>

          {/* Compact trust indicators */}
          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-2">
            {config.trust.map((t) => (
              <li key={t.title} className="flex items-start gap-2.5 text-sm text-gray-300">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3e91ce]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-gray-200">{t.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form column — the single dominant action */}
        <div id="lead-form" className="scroll-mt-20">
          <CampaignLeadFormUI config={config} />
        </div>
      </div>
    </section>
  )
}
