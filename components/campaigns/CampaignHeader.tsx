import AppImage from '@/components/AppImage'
import CtaLink from './CtaLink'
import { container } from './styles'
import type { CampaignConfig } from './config'

const PhoneGlyph = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)

/**
 * Compact, distraction-free campaign header. Sticky via pure CSS (no JS).
 * Logo links back to the campaign top only — no site navigation, so the
 * enquiry action stays the single dominant path.
 */
export default function CampaignHeader({ config }: { config: CampaignConfig }) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className={`${container} flex h-16 items-center justify-between gap-3`}>
        <a
          href="#top"
          className="-my-1 flex min-h-[44px] items-center rounded py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2"
          aria-label="PC Water Infrastructure"
        >
          <AppImage
            src="/logo-pacific-water-group.png"
            alt="PC Water Infrastructure"
            width={320}
            height={98}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#30505b] lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3e91ce]" aria-hidden="true" />
            Australia-Wide Project Delivery
          </span>

          <a
            href={`tel:${config.phone}`}
            data-action="call"
            data-cta-location="header"
            aria-label={`Call ${config.phoneDisplay}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-2.5 text-sm font-semibold text-[#30505b] transition-colors hover:bg-[#f4f6f8] hover:text-[#0d1b2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <PhoneGlyph />
            <span className="hidden sm:inline">{config.phoneDisplay}</span>
          </a>

          <CtaLink
            href="#lead-form"
            variant="primary"
            action="start-form"
            ctaLocation="header"
            className="!min-h-[44px] px-4 text-[13px] sm:px-5 sm:text-sm"
          >
            {config.ctaShort}
          </CtaLink>
        </div>
      </div>
    </header>
  )
}
