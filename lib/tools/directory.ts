import type { Pathway, Tool } from '@/components/tools/ToolCard'

/**
 * The free tools and the higher-intent enquiry pathways.
 *
 * `asks` and `outcomes` mirror the questions and results defined in
 * lib/tools/tank-compliance-checker.ts and lib/tools/repair-reline-replace.ts,
 * so the cards on /tools describe what the assessment actually does.
 */
export const TOOLS: Tool[] = [
  {
    href: '/tools/tank-compliance-checker',
    title: 'Tank Compliance Checker',
    blurb:
      'Answer a few questions about your tank and get a fast indication of likely compliance risk — plus the recommended next step for your asset.',
    asks: [
      'Tank type & construction',
      'Age of the asset',
      'Last formal inspection',
      'Visible corrosion or damage',
      'Site environment',
      'Maintenance & documentation',
    ],
    outcomes: [
      { label: 'Low apparent risk', tone: 'low' },
      { label: 'Moderate risk', tone: 'moderate' },
      { label: 'High risk', tone: 'high' },
      { label: 'Urgent review', tone: 'urgent' },
    ],
    questions: 8,
    minutes: '2 min',
    cta: 'Check Compliance Risk',
  },
  {
    href: '/tools/repair-reline-replace',
    title: 'Repair vs Reline vs Replace',
    blurb:
      'For aging or deteriorating tanks: find out whether the practical path is targeted repair, RPVC relining, full replacement, or an inspection first.',
    asks: [
      'What the tank stores',
      'Age of the asset',
      'Structural condition',
      'Liner or coating condition',
      'Level of corrosion',
      'Downtime tolerance',
    ],
    outcomes: [
      { label: 'Inspect first', tone: 'info' },
      { label: 'Targeted repair', tone: 'low' },
      { label: 'RPVC reline', tone: 'moderate' },
      { label: 'Replacement', tone: 'high' },
    ],
    questions: 8,
    minutes: '2 min',
    cta: 'Get My Result',
  },
]

export const PATHWAYS: Pathway[] = [
  {
    href: '/campaigns/tank-remediation',
    title: 'Tank Remediation',
    blurb:
      'Leaking, corroded or deteriorating tank? Request a project-specific proposal covering repair, RPVC relining, upgrades or replacement — with the pathway confirmed at assessment.',
    points: ['Repair · Reline · Replace pathways', 'Councils, industrial & commercial', 'Reply within 1 business day'],
    cta: 'Request a Remediation Proposal',
  },
  {
    href: '/campaigns/remote-water-infrastructure',
    title: 'Remote Water Infrastructure',
    blurb:
      'Planning water storage or treatment in remote Australia? Discuss an end-to-end delivery strategy — planning, civil, storage, treatment, installation and commissioning under one team.',
    points: ['End-to-end coordinated delivery', 'Freight, access & seasonal planning', 'Reply within 1 business day'],
    cta: 'Discuss Your Remote Project',
  },
]
