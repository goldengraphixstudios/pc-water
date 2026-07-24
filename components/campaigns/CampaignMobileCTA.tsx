import type { CampaignConfig } from './config'

/**
 * Mobile sticky conversion bar (hidden on lg+). Call + primary CTA, with
 * safe-area inset padding so it clears the iOS home indicator.
 */
export default function CampaignMobileCTA({ config }: { config: CampaignConfig }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto flex max-w-6xl items-stretch gap-2.5 px-4 py-3">
        <a
          href={`tel:${config.phone}`}
          data-action="call"
          data-cta-location="mobile-bar"
          aria-label={`Call ${config.phoneDisplay}`}
          className="flex min-h-[52px] flex-shrink-0 items-center justify-center gap-2 rounded border border-[#30505b]/40 px-4 text-sm font-semibold text-[#30505b] transition-colors hover:border-[#0d1b2a] hover:text-[#0d1b2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="sr-only">Call</span>
        </a>
        <a
          href="#lead-form"
          data-action="start-form"
          data-cta-location="mobile-bar"
          className="flex min-h-[52px] flex-1 items-center justify-center rounded bg-[#0d1b2a] px-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#30505b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2"
        >
          {config.ctaShort}
        </a>
      </div>
    </div>
  )
}
