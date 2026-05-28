import type { AssessmentConfig } from './types'

/**
 * Repair vs Reline vs Replace Decision Tool
 * Rule-based guidance path for an aging or deteriorating tank. Deliberately
 * routes anything with unknown internal condition toward inspection first.
 */
export const repairRelineReplace: AssessmentConfig = {
  slug: 'repair-reline-replace',
  toolTitle: 'Repair vs Reline vs Replace Decision Tool',
  leadDivision: 'Repair vs Reline vs Replace',
  intro:
    'Answer eight questions about your aging tank and get a practical guidance path — repair, reline, replace, or inspect first — with the right next step for your asset.',
  questions: [
    {
      id: 'use',
      question: 'What is the tank used for?',
      options: [
        { value: 'potable', label: 'Potable / drinking water' },
        { value: 'fire', label: 'Fire water' },
        { value: 'industrial', label: 'Industrial / process water' },
      ],
    },
    {
      id: 'age',
      question: 'How old is the tank?',
      options: [
        { value: 'lt10', label: 'Under 10 years' },
        { value: '10to20', label: '10 – 20 years' },
        { value: '20to30', label: '20 – 30 years' },
        { value: 'gt30', label: '30+ years' },
      ],
    },
    {
      id: 'structural',
      question: 'How would you describe the tank’s structural condition?',
      helpText: 'Structure means the shell, roof, and supports — not the liner or coating.',
      options: [
        { value: 'sound', label: 'Appears structurally sound' },
        { value: 'minor', label: 'Minor visible deterioration' },
        { value: 'moderate', label: 'Moderate deterioration' },
        { value: 'major', label: 'Major deterioration' },
        { value: 'unknown', label: 'Not sure' },
      ],
    },
    {
      id: 'internalKnown',
      question: 'Is the internal condition known?',
      options: [
        { value: 'recent', label: 'Yes — recently inspected internally' },
        { value: 'older', label: 'Yes — but the inspection is old' },
        { value: 'unknown', label: 'No — not inspected internally' },
      ],
    },
    {
      id: 'liner',
      question: 'What is the condition of the liner or internal coating?',
      options: [
        { value: 'good', label: 'Good' },
        { value: 'deteriorating', label: 'Deteriorating' },
        { value: 'failed', label: 'Failed / damaged' },
        { value: 'na', label: 'No liner / not applicable' },
        { value: 'unknown', label: 'Not sure' },
      ],
    },
    {
      id: 'corrosion',
      question: 'What is the level of corrosion?',
      options: [
        { value: 'none', label: 'None visible' },
        { value: 'light', label: 'Light' },
        { value: 'moderate', label: 'Moderate' },
        { value: 'severe', label: 'Severe' },
        { value: 'unknown', label: 'Not sure' },
      ],
    },
    {
      id: 'downtime',
      question: 'Can the tank tolerate downtime for works?',
      options: [
        { value: 'yes', label: 'Yes — downtime is manageable' },
        { value: 'limited', label: 'Limited downtime only' },
        { value: 'no', label: 'No — disruption must be minimised' },
      ],
    },
    {
      id: 'budget',
      question: 'What is the priority for this decision?',
      options: [
        { value: 'lowest', label: 'Lowest short-term cost' },
        { value: 'lifecycle', label: 'Best lifecycle value' },
        { value: 'urgent', label: 'Urgent risk reduction' },
      ],
    },
  ],

  score: (a) => {
    const unknownInternal =
      a.internalKnown === 'unknown' || a.structural === 'unknown' || a.corrosion === 'unknown'

    // Without reliable internal data, no responsible recommendation can be made.
    if (unknownInternal) return 'inspect'

    // Clear replacement signals.
    if (a.structural === 'major' || a.corrosion === 'severe') return 'replace'
    if (a.age === 'gt30' && (a.structural === 'moderate' || a.liner === 'failed')) return 'replace'

    // Relining sweet spot: structure is serviceable but the barrier has gone.
    const structureServiceable = a.structural === 'sound' || a.structural === 'minor'
    if (
      structureServiceable &&
      (a.liner === 'failed' || a.liner === 'deteriorating') &&
      (a.corrosion === 'light' || a.corrosion === 'moderate' || a.corrosion === 'none')
    ) {
      return 'reline'
    }
    // Moderate structural deterioration with a serviceable barrier still leans reline over replace.
    if (a.structural === 'moderate' && a.corrosion !== 'severe' && a.liner !== 'good') {
      return 'reline'
    }

    // Targeted repair: minor issues, structure and barrier broadly intact.
    if (
      structureServiceable &&
      (a.corrosion === 'light' || a.corrosion === 'none') &&
      (a.liner === 'good' || a.liner === 'na' || a.liner === 'deteriorating')
    ) {
      return 'repair'
    }

    // Anything else benefits from a scoping inspection.
    return 'inspect'
  },

  results: {
    inspect: {
      key: 'inspect',
      level: 'Inspection recommended first',
      tone: 'info',
      headline: 'Start with an inspection',
      summary:
        'There isn’t enough confirmed internal data to choose a path responsibly. A condition assessment will define your real options.',
      detail: [
        'The biggest driver of cost on an aging tank is internal condition — corrosion, liner integrity, and structural soundness that can’t be judged reliably from the outside.',
        'A scoping inspection turns guesswork into a defined repair / reline / replace decision, usually for a fraction of the cost of the works themselves.',
      ],
      recommendation:
        'Commission a condition assessment. PC Water uses ROV and UAV methods that often avoid full dewatering, then provides a documented recommendation.',
      links: [
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
        { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
        { label: 'Tank Compliance Checker', href: '/tools/tank-compliance-checker' },
      ],
      ctaLabel: 'Book an Inspection',
      ctaHref: '/contact',
    },
    repair: {
      key: 'repair',
      level: 'Likely a targeted-repair candidate',
      tone: 'low',
      headline: 'Your tank looks like a targeted-repair candidate',
      summary:
        'Your answers suggest the structure and barrier are broadly intact, with issues that can usually be addressed with targeted repair and maintenance.',
      detail: [
        'Where corrosion is light and the liner or coating is largely sound, addressing the specific defects is typically the most cost-effective route — and extends service life without major works.',
        'Catching it at this stage is what keeps a repairable tank from sliding into reline or replacement territory.',
      ],
      recommendation:
        'Have the specific defects assessed and scoped for targeted repair, and put the tank on a documented maintenance schedule to protect the investment.',
      links: [
        { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
      ],
      ctaLabel: 'Request an Assessment',
      ctaHref: '/contact',
    },
    reline: {
      key: 'reline',
      level: 'Likely an RPVC relining candidate',
      tone: 'moderate',
      headline: 'Your tank looks like an RPVC relining candidate',
      summary:
        'The structure appears serviceable but the internal barrier has deteriorated — the classic case where relining restores the asset without full replacement.',
      detail: [
        'An RPVC liner system re-establishes a watertight, compliant internal barrier inside an otherwise sound tank, typically at a fraction of the cost and downtime of replacement.',
        'In practice this is often the best lifecycle decision for tanks where corrosion and liner failure are the main issues but the shell still has years of service left.',
      ],
      recommendation:
        'Request a tank assessment to confirm structural suitability for relining, then a scope and quote for an RPVC liner system.',
      links: [
        { label: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
        { label: 'Clarence Road liner replacement', href: '/projects/clarence-road-liner' },
      ],
      ctaLabel: 'Request a Tank Assessment',
      ctaHref: '/contact',
    },
    replace: {
      key: 'replace',
      level: 'Likely a replacement candidate',
      tone: 'high',
      headline: 'Your tank looks like a replacement candidate',
      summary:
        'Major structural deterioration or severe corrosion usually means repair and relining are no longer the lowest-risk options.',
      detail: [
        'Once the shell itself is compromised, patching or relining tends to defer rather than solve the problem — and can cost more across the asset’s life than a properly engineered replacement.',
        'A replacement also lets you right-size capacity and design for the standards and environment the tank actually operates in.',
      ],
      recommendation:
        'Commission an engineering assessment to confirm the finding, then scope a custom-designed replacement. An inspection can validate this before you commit to capital works.',
      links: [
        { label: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
        { label: 'Professional Tank Installation', href: '/services/tank-installation' },
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
      ],
      ctaLabel: 'Request an Assessment',
      ctaHref: '/contact',
    },
  },
}
