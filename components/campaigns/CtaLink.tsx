import { btnOnDark, btnOutlineDark, btnOutlineLight, btnPrimary } from './styles'

type Variant = 'primary' | 'onDark' | 'outlineDark' | 'outlineLight'

const variantClass: Record<Variant, string> = {
  primary: btnPrimary,
  onDark: btnOnDark,
  outlineDark: btnOutlineDark,
  outlineLight: btnOutlineLight,
}

/**
 * Shared campaign CTA anchor. Uses native in-page anchors for scroll-to-form
 * (keyboard accessible, works without JS) and tel: links for calls.
 * Carries the analytics/handoff data attributes Codex maps.
 */
export default function CtaLink({
  href,
  variant = 'primary',
  children,
  ctaLocation,
  action,
  className = '',
}: {
  href: string
  variant?: Variant
  children: React.ReactNode
  /** data-cta-location: hero | project-proof | final | header | mobile-bar */
  ctaLocation?: string
  /** data-action: start-form | call | submit-enquiry */
  action?: string
  className?: string
}) {
  return (
    <a
      href={href}
      data-cta-location={ctaLocation}
      data-action={action}
      className={`${variantClass[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
