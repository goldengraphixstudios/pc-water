// Shared Tailwind class strings for the campaign funnels. Plain strings only,
// safe to import from server or client components.
//
// Accessibility notes:
// - Buttons/inputs use min-height ≥ 44px touch targets.
// - Every interactive element carries a visible focus-visible ring.
// - Brand blue #3e91ce is used for focus/accents, NOT as a text-on-blue
//   surface (it does not meet AA against white text). Primary CTAs use navy.

const btnBase =
  'inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2'

// On light backgrounds
export const btnPrimary = `${btnBase} bg-[#0d1b2a] text-white hover:bg-[#30505b] focus-visible:ring-offset-white`
export const btnOutlineLight = `${btnBase} bg-white border border-[#30505b]/40 text-[#30505b] hover:border-[#0d1b2a] hover:text-[#0d1b2a] focus-visible:ring-offset-white`

// On dark (navy) backgrounds
export const btnOnDark = `${btnBase} bg-white text-[#0d1b2a] hover:bg-[#e6edf2] focus-visible:ring-offset-[#0d1b2a]`
export const btnOutlineDark = `${btnBase} border border-white/30 text-white hover:bg-white/10 focus-visible:ring-offset-[#0d1b2a]`

// Form fields
export const fieldLabel = 'block text-xs font-bold text-[#30505b] uppercase tracking-wide mb-1.5'
export const fieldInput =
  'w-full min-h-[48px] rounded border border-gray-300 bg-white px-4 py-3 text-sm text-[#0d1b2a] placeholder:text-gray-400 transition-colors focus:border-[#3e91ce] focus:outline-none focus:ring-2 focus:ring-[#3e91ce]/30'
export const fieldInputError = 'border-red-500 focus:border-red-500 focus:ring-red-500/30'

// Faint blueprint grid — applied as an arbitrary background, no global CSS.
export const gridLinesDark =
  'bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]'
export const gridLinesLight =
  'bg-[linear-gradient(to_right,rgba(13,27,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,27,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]'

// Standard section width
export const container = 'mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8'
export const eyebrow = 'text-xs font-bold uppercase tracking-[0.18em] text-[#3e91ce]'
