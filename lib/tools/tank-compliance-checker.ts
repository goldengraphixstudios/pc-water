import type { AssessmentConfig } from './types'

/**
 * Tank Compliance Checker
 * Rule-based risk indicator. Intentionally conservative: it frames uncertainty
 * as risk and positions PC Water as the technical-review provider. It is NOT a
 * legal compliance certificate.
 */
export const tankComplianceChecker: AssessmentConfig = {
  slug: 'tank-compliance-checker',
  toolTitle: 'Tank Compliance Checker',
  leadDivision: 'Tank Compliance Checker',
  intro:
    'Answer eight short questions about your water tank and get a fast indication of likely compliance risk — plus a clear next step. Takes about a minute.',
  questions: [
    {
      id: 'tankType',
      question: 'What type of tank is this?',
      helpText: 'Different tank uses are governed by different Australian Standards.',
      options: [
        { value: 'potable', label: 'Potable / drinking water', description: 'Subject to AS4020 material and ADWG hygiene expectations.' },
        { value: 'fire', label: 'Fire water', description: 'Subject to AS2304 design and AS1851 maintenance.' },
        { value: 'industrial', label: 'Industrial / process water' },
        { value: 'unknown', label: 'Not sure' },
      ],
    },
    {
      id: 'material',
      question: 'What is the tank constructed from?',
      options: [
        { value: 'steel', label: 'Steel', description: 'Most exposed to corrosion over time.' },
        { value: 'concrete', label: 'Concrete' },
        { value: 'lined', label: 'Lined tank (existing liner)' },
        { value: 'unknown', label: 'Not sure' },
      ],
    },
    {
      id: 'age',
      question: 'Roughly how old is the tank?',
      options: [
        { value: 'lt5', label: 'Under 5 years' },
        { value: '5to10', label: '5 – 10 years' },
        { value: '10to20', label: '10 – 20 years' },
        { value: 'gt20', label: '20+ years' },
        { value: 'unknown', label: 'Not sure' },
      ],
    },
    {
      id: 'lastInspection',
      question: 'When was the last formal inspection?',
      helpText: 'A formal inspection means a documented condition assessment, not a visual glance.',
      options: [
        { value: 'lt12', label: 'Within the last 12 months' },
        { value: '1to3', label: '1 – 3 years ago' },
        { value: 'gt3', label: 'More than 3 years ago' },
        { value: 'never', label: 'Never / not sure' },
      ],
    },
    {
      id: 'visibleIssues',
      question: 'Any visible corrosion, leakage, liner damage, or access-hatch issues?',
      options: [
        { value: 'yes', label: 'Yes — one or more present' },
        { value: 'no', label: 'No visible issues' },
        { value: 'unsure', label: 'Unsure / not recently checked' },
      ],
    },
    {
      id: 'environment',
      question: 'What environment is the tank in?',
      helpText: 'Harsh and remote environments accelerate deterioration and complicate access.',
      options: [
        { value: 'coastal', label: 'Coastal' },
        { value: 'mining', label: 'Mining / industrial' },
        { value: 'remote', label: 'Remote / regional' },
        { value: 'standard', label: 'Standard metro / regional' },
      ],
    },
    {
      id: 'maintenance',
      question: 'Is the tank on a documented maintenance schedule?',
      options: [
        { value: 'yes', label: 'Yes — maintained on schedule' },
        { value: 'lapsed', label: 'Was, but has lapsed' },
        { value: 'no', label: 'No formal schedule' },
      ],
    },
    {
      id: 'standardsDocs',
      question: 'Do you hold current compliance documentation for this tank?',
      helpText: 'For fire tanks: AS2304 design + AS1851 servicing records. For potable: AS4020 material evidence.',
      options: [
        { value: 'yes', label: 'Yes — documentation is current' },
        { value: 'unsure', label: 'Unsure / incomplete' },
        { value: 'no', label: 'No documentation' },
      ],
    },
  ],

  score: (a) => {
    let points = 0

    points += { lt5: 0, '5to10': 1, '10to20': 2, gt20: 3, unknown: 2 }[a.age] ?? 2
    points += { lt12: 0, '1to3': 1, gt3: 3, never: 4 }[a.lastInspection] ?? 3
    points += { yes: 4, unsure: 2, no: 0 }[a.visibleIssues] ?? 2
    points += { coastal: 2, mining: 2, remote: 1, standard: 0 }[a.environment] ?? 1
    points += { yes: 0, lapsed: 2, no: 3 }[a.maintenance] ?? 2
    points += { yes: 0, unsure: 2, no: 3 }[a.standardsDocs] ?? 2
    points += { steel: 1, concrete: 1, lined: 0, unknown: 1 }[a.material] ?? 1
    // Higher-stakes uses get a small risk weighting.
    points += { fire: 1, potable: 1, industrial: 0, unknown: 1 }[a.tankType] ?? 1

    // Hard escalation: a visible defect on a tank that has not been formally
    // inspected recently warrants an urgent review regardless of total score.
    const staleInspection = a.lastInspection === 'gt3' || a.lastInspection === 'never'
    if (a.visibleIssues === 'yes' && staleInspection) return 'urgent'

    if (points <= 3) return 'low'
    if (points <= 7) return 'moderate'
    if (points <= 11) return 'high'
    return 'urgent'
  },

  results: {
    low: {
      key: 'low',
      level: 'Low apparent risk',
      tone: 'low',
      headline: 'Your tank shows a low apparent compliance risk',
      summary:
        'Based on your answers, there are no obvious red flags — but this indicator is not a substitute for a formal inspection.',
      detail: [
        'Your responses suggest a relatively young, maintained tank with recent inspection history and no visible defects.',
        'Compliance status can still change between inspections, particularly in harsh environments. The most reliable way to keep risk low is a documented inspection cycle.',
      ],
      recommendation:
        'Keep your inspection and documentation current. If your last formal condition report is approaching its review date, schedule the next one before it lapses.',
      links: [
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
        { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
      ],
      ctaLabel: 'Book an Inspection',
      ctaHref: '/contact',
    },
    moderate: {
      key: 'moderate',
      level: 'Moderate compliance risk',
      tone: 'moderate',
      headline: 'Your tank shows a moderate compliance risk',
      summary:
        'There are enough uncertainties in your answers to warrant a closer look before you can be confident of compliance.',
      detail: [
        'Factors such as tank age, gaps in inspection history, or incomplete documentation push this tank into a moderate-risk band.',
        'In practice, this usually means a condition assessment will either confirm the tank is sound or surface issues that are far cheaper to address early than after a failure.',
      ],
      recommendation:
        'Arrange a condition assessment and bring your compliance documentation up to date. This is the point where most owners catch problems before they become expensive.',
      links: [
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
        { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
        { label: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
      ],
      ctaLabel: 'Request a Compliance Review',
      ctaHref: '/contact',
    },
    high: {
      key: 'high',
      level: 'High compliance risk',
      tone: 'high',
      headline: 'Your tank shows a high compliance risk',
      summary:
        'Several answers point to elevated risk. A formal review is strongly recommended to establish your true compliance position.',
      detail: [
        'A combination of age, lapsed maintenance, missing documentation, or a harsh environment significantly raises the likelihood of a compliance or condition issue.',
        'Tanks in this band frequently have problems that are not visible from the outside — internal corrosion, liner breakdown, or deterioration around fittings and the access hatch.',
      ],
      recommendation:
        'Commission a formal inspection and compliance review now. If issues are found, options usually range from targeted repair through to RPVC relining — far less disruptive than replacement.',
      links: [
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
        { label: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
        { label: 'Repair vs Reline vs Replace tool', href: '/tools/repair-reline-replace' },
      ],
      ctaLabel: 'Request a Compliance Review',
      ctaHref: '/contact',
    },
    urgent: {
      key: 'urgent',
      level: 'Urgent review recommended',
      tone: 'urgent',
      headline: 'Urgent review recommended',
      summary:
        'Your answers indicate a visible issue and/or a long gap since the last formal inspection. This warrants prompt attention.',
      detail: [
        'A visible defect on a tank that has not been formally inspected recently is a strong signal that compliance and structural integrity should be verified without delay.',
        'For fire water tanks in particular, an undetected fault can mean the system fails to perform in an emergency — a life-safety and insurance exposure, not just a paperwork gap.',
      ],
      recommendation:
        'Arrange an inspection as a priority. PC Water can assess condition, document compliance status, and recommend the most cost-effective remediation path.',
      links: [
        { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
        { label: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
        { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
      ],
      ctaLabel: 'Request an Urgent Review',
      ctaHref: '/contact',
    },
  },
}
