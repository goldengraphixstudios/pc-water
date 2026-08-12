import AppImage from '@/components/AppImage'
import CampaignLeadFormUI from './CampaignLeadFormUI'
import CtaLink from './CtaLink'
import { container, eyebrow as eyebrowCls, gridLinesDark } from './styles'
import type { CampaignConfig } from './config'

/**
 * Hero + primary conversion point.
 *
 * Desktop (lg+): full-bleed project photography with a two-column layout —
 * copy left, lead form right, above the fold.
 *
 * Mobile/tablet: the photo becomes a crisp top image band that fades into a
 * solid navy field (rather than a single landscape image stretched behind the
 * whole tall hero, which looked low-quality). Copy and the white form card then
 * sit on clean navy.
 */
export default function CampaignHero({ config }: { config: CampaignConfig }) {
  const { hero } = config

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0d1b2a]">
      {/* Faint engineering grid on the solid-navy field (mobile) */}
      <div className={`absolute inset-0 -z-10 ${gridLinesDark} opacity-40 lg:hidden`} aria-hidden="true" />

      {/* Desktop: full-bleed photography */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <AppImage src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/95 via-[#0d1b2a]/88 to-[#0d1b2a]/70" />
        <div className={`absolute inset-0 ${gridLinesDark} opacity-60`} aria-hidden="true" />
      </div>

      {/* Mobile/tablet: crisp image band that fades into navy */}
      <div className="relative h-[210px] w-full overflow-hidden sm:h-[280px] lg:hidden">
        <AppImage src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/25 via-[#0d1b2a]/55 to-[#0d1b2a]" />
        <div className={`absolute inset-0 ${gridLinesDark} opacity-50`} aria-hidden="true" />
      </div>

      <div
        className={`${container} relative grid items-start gap-9 pb-12 pt-8 sm:gap-10 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-12 lg:pb-20 lg:pt-20`}
      >
        {/* Copy column */}
        <div className="max-w-xl">
          <p className={eyebrowCls}>{hero.eyebrow}</p>
          <h1 className="mt-3.5 text-[1.85rem] font-black leading-[1.1] tracking-tight text-balance text-white sm:mt-4 sm:text-[2.4rem] lg:text-[2.85rem] lg:leading-[1.08]">
            {hero.headline}
          </h1>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-300 sm:mt-5 sm:text-lg">{hero.sub}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href="#lead-form" variant="onDark" action="start-form" ctaLocation="hero">
              {hero.primaryCta}
            </CtaLink>
            <CtaLink href={`tel:${config.phone}`} variant="outlineDark" action="call" ctaLocation="hero">
              {hero.secondaryCta}
            </CtaLink>
          </div>

          {/* Quick reassurance — visible on every size */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-medium text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3e91ce]" aria-hidden="true" />
              Australia-wide delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3e91ce]" aria-hidden="true" />
              Reply within 1 business day
            </span>
          </div>

          {/* Fuller trust list — desktop only (TrustStrip covers mobile below) */}
          <ul className="mt-9 hidden grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-6 lg:grid">
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
        <div id="lead-form" className="scroll-mt-24">
          <CampaignLeadFormUI config={config} />
        </div>
      </div>
    </section>
  )
}
