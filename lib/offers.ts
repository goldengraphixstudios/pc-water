/**
 * Central offer configuration.
 *
 * To publish a new promotion: add an Offer object to the `offers` array with
 * `active: true` and a future `endsAt`. To end all promotions, set every
 * offer's `active` to false (or let `endsAt` pass — offers auto-expire).
 *
 * When `getActiveOffer()` returns null, the site shows a graceful
 * "no current offer" state on both the popup and the /offer page.
 */

export interface OfferDiscount {
  /** e.g. "50%" */
  value: string
  /** e.g. "OFF Drone / ROV Inspections" */
  label: string
  /** optional supporting line */
  note?: string
}

export interface OfferFeature {
  title: string
  desc: string
}

export interface Offer {
  /** unique, stable id — also drives the popup "seen" memory */
  id: string
  /** master on/off switch */
  active: boolean
  eyebrow: string
  title: string
  titleHighlight: string
  subtitle: string
  audience: string
  discounts: OfferDiscount[]
  features: OfferFeature[]
  /** square marketing graphic in /public */
  image: string
  imageAlt: string
  startLabel: string
  /** ISO datetime — the offer auto-expires after this instant */
  endsAt: string
  endLabel: string
  /** service label used to attribute leads captured through the funnel */
  serviceTag: string
  phone: string
  phoneDisplay: string
  phoneSecondary: string
  phoneSecondaryDisplay: string
  email: string
}

const eofyOffer: Offer = {
  id: 'eofy-tank-inspection-2026',
  active: true,
  eyebrow: 'Limited Time — July Only',
  title: 'EOFY Tank Inspection',
  titleHighlight: 'Offer',
  subtitle:
    'Tank issues do not start loud. They start hidden, below the waterline, out of sight. By the time you notice, it is already expensive.',
  audience: 'For fire contractors, property managers, and asset owners',
  discounts: [
    {
      value: '50%',
      label: 'OFF Drone / ROV Inspections',
      note: 'A full internal condition assessment without taking your tank offline.',
    },
    {
      value: '30%',
      label: 'OFF Recommended Maintenance',
      note: 'Applied to any maintenance identified from the inspection and required.',
    },
  ],
  features: [
    {
      title: 'Remote Inspections',
      desc: 'Drone and ROV technology that sees inside your tank without dewatering or shutting it down.',
    },
    {
      title: 'Asset Visibility',
      desc: 'Real clarity on what is actually happening below the waterline — no guessing, no delays.',
    },
    {
      title: 'Maintenance Planning',
      desc: 'A clear, prioritised plan for anything we find — clarity now, not a crisis later.',
    },
  ],
  image: '/offers/eofy-tank-inspection-2026.jpg',
  imageAlt:
    'PC Water Infrastructure EOFY Tank Inspection Offer — 50% off drone and ROV inspections, 30% off recommended maintenance. Book before 31 July.',
  startLabel: 'July 2026',
  endsAt: '2026-07-31T23:59:59+10:00',
  endLabel: '31 July 2026',
  serviceTag: 'Tank Inspection Technology',
  phone: '1300029804',
  phoneDisplay: '1300 029 804',
  phoneSecondary: '+61480571151',
  phoneSecondaryDisplay: '+61 480 571 151',
  email: 'contact@pcwater.com.au',
}

const offers: Offer[] = [eofyOffer]

/** Returns the current live offer, or null if none is active / all have expired. */
export function getActiveOffer(now: Date = new Date()): Offer | null {
  return (
    offers.find((offer) => offer.active && new Date(offer.endsAt).getTime() >= now.getTime()) ?? null
  )
}

export function hasActiveOffer(now: Date = new Date()): boolean {
  return getActiveOffer(now) !== null
}
