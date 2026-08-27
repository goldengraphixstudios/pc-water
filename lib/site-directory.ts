import type { Entry } from '@/components/editorial/EntryCard'

/**
 * One source of truth for the service, industry and tool directories.
 *
 * The index pages render these as cards, and every detail page renders its
 * siblings from the same list — so a new entry only has to be added here.
 */

export const waterSolutionsServices: Entry[] = [
  {
    href: '/services/project-managed-water-infrastructure',
    title: 'Project Managed Water Infrastructure',
    kicker: 'PC Water Solutions',
    blurb:
      'End-to-end project management across the full water infrastructure lifecycle — from initial brief, civil design, and procurement through to commissioning, handover documentation, and ongoing asset support. Single point of accountability.',
    imageSrc: '/water/water-15.jpg',
    meta: 'Explore service',
    points: ['Single point of accountability', 'Design through commissioning', 'Full handover documentation'],
  },
  {
    href: '/services/water-treatment-solutions',
    title: 'Water Treatment Solutions',
    kicker: 'PC Water Solutions',
    blurb:
      'Potable water treatment infrastructure from source to supply — raw water intake, chemical conditioning, coagulation and filtration, UV and chlorine disinfection, and SCADA-controlled operation to ADWG compliance.',
    imageSrc: '/water/water-16.jpg',
    meta: 'Explore service',
    points: ['ADWG compliance', 'Filtration & disinfection', 'SCADA-controlled operation'],
  },
  {
    href: '/services/foundation-civil-integration',
    title: 'Foundation & Civil Integration',
    kicker: 'PC Water Solutions',
    blurb:
      'Engineered concrete foundations and civil integration for tanks of all sizes. Geotechnical assessment, civil contractor coordination, and structural compliance documentation.',
    imageSrc: '/heroes/foundation-civil-integration.jpg',
    meta: 'Explore service',
    points: ['Geotechnical assessment', 'Engineered foundations', 'Structural certification'],
  },
  {
    href: '/services/remote-area-delivery',
    title: 'Remote Area Project Delivery',
    kicker: 'PC Water Solutions',
    blurb:
      'Specialist delivery for remote and regional Australia — remote logistics, FIFO teams, Indigenous community projects, and harsh environment material selection.',
    imageSrc: '/heroes/remote-area-delivery.jpg',
    meta: 'Explore service',
    points: ['Freight & access planning', 'FIFO delivery crews', 'Harsh-environment materials'],
  },
]

export const pcTanksServices: Entry[] = [
  {
    href: '/services/custom-tank-design',
    title: 'Custom Tank Design & Engineering',
    kicker: 'PC Tanks',
    blurb:
      'Purpose-built tank systems engineered to AS2304 & AS4020 for any capacity, site condition, or application. RPEQ-certified structural engineering, material selection, and modular design.',
    imageSrc: '/heroes/custom-tank-design.jpg',
    meta: 'Explore service',
    points: ['AS2304 & AS4020', 'RPEQ-certified engineering', 'Modular & bolted systems'],
  },
  {
    href: '/services/tank-installation',
    title: 'Professional Tank Installation',
    kicker: 'PC Tanks',
    blurb:
      'End-to-end installation with certified crews, national reach, JSA/SWMS compliance, and Gantt-based project scheduling. Site preparation through to commissioning.',
    imageSrc: '/heroes/tank-installation.jpg',
    meta: 'Explore service',
    points: ['Certified installation crews', 'JSA / SWMS compliance', 'Programmed scheduling'],
  },
  {
    href: '/services/rpvc-liner-systems',
    title: 'RPVC Liner Systems',
    kicker: 'PC Tanks',
    blurb:
      'High-performance RPVC liner installation to protect tanks from corrosion, restore potable water compliance, and extend asset life by 20+ years. AS4020 compliant.',
    imageSrc: '/heroes/rpvc-liner-systems.jpg',
    meta: 'Explore service',
    points: ['AS4020 potable compliant', 'Extends life 20+ years', 'Specialist liner welders'],
  },
  {
    href: '/services/tank-inspection-technology',
    title: 'Tank Inspection Technology',
    kicker: 'PC Tanks',
    blurb:
      'Advanced ROV and UAV drone inspection for accurate condition assessment without costly dewatering. Detailed condition reports supporting AS1851 compliance and targeted maintenance.',
    imageSrc: '/heroes/tank-inspection-technology.jpg',
    meta: 'Explore service',
    points: ['ROV & UAV inspection', 'No dewatering required', 'AS1851 condition reports'],
  },
  {
    href: '/services/tank-maintenance-upgrades',
    title: 'Tank Maintenance & Upgrades',
    kicker: 'PC Tanks',
    blurb:
      'Planned and reactive maintenance, structural upgrades, corrosion treatment, and long-term asset management for steel and concrete water storage infrastructure.',
    imageSrc: '/heroes/tank-maintenance-upgrades.jpg',
    meta: 'Explore service',
    points: ['Planned maintenance programs', 'Corrosion treatment', 'Structural upgrades'],
  },
  {
    href: '/services/fire-water-tanks',
    title: 'Fire Water Tank Solutions',
    kicker: 'PC Tanks',
    blurb:
      'AS2304-compliant fire water storage systems with flow rate calculations, pump system integration, and annual inspection support under AS1851. For commercial, industrial, and mining sites.',
    imageSrc: '/heroes/fire-water-tanks.jpg',
    meta: 'Explore service',
    points: ['AS2304 fire water storage', 'Flow rate calculations', 'AS1851 inspection support'],
  },
  {
    href: '/services/tender-procurement-support',
    title: 'Tender & Procurement Support',
    kicker: 'PC Tanks',
    blurb:
      'Capability statements, specification support, tender response assistance, and compliance documentation for councils, government agencies, and major contractors.',
    imageSrc: '/heroes/tender-procurement-support.jpg',
    meta: 'Explore service',
    points: ['Specification support', 'Tender response assistance', 'Compliance documentation'],
  },
  {
    href: '/services/builder-contractor-partnerships',
    title: 'Builder & Contractor Partnerships',
    kicker: 'PC Tanks',
    blurb:
      'Reliable subcontract services for builders, civil contractors, and project managers who need specialist water infrastructure capability with national reach.',
    imageSrc: '/heroes/builder-contractor-partnerships.jpg',
    meta: 'Explore service',
    points: ['Subcontract capability', 'National reach', 'Programmed to your schedule'],
  },
]

export const industries: Entry[] = [
  {
    href: '/industries/government-councils',
    title: 'Government & Councils',
    kicker: 'Public infrastructure',
    blurb:
      'Compliant, accountable water storage for public assets — tender-ready documentation, budget-conscious delivery, and community-focused outcomes.',
    imageSrc: '/heroes/government-councils.jpg',
    meta: 'Explore sector',
    points: ['Tender & procurement support', 'RPEQ certification', 'Public asset accountability'],
  },
  {
    href: '/industries/mining-resources',
    title: 'Mining & Resources',
    kicker: 'Remote operations',
    blurb:
      'Robust water infrastructure engineered for remote, harsh-environment mining operations with zero compromise on safety or compliance.',
    imageSrc: '/heroes/mining-resources.jpg',
    meta: 'Explore sector',
    points: ['Harsh-environment materials', 'FIFO delivery crews', 'Process & fire water'],
  },
  {
    href: '/industries/industrial-facilities',
    title: 'Industrial Facilities',
    kicker: 'Process & fire water',
    blurb:
      'Reliable process water storage and fire suppression systems engineered for the demands of industrial operations.',
    imageSrc: '/heroes/industrial-facilities.jpg',
    meta: 'Explore sector',
    points: ['Process water storage', 'Fire suppression supply', 'Minimal-downtime works'],
  },
  {
    href: '/industries/commercial-fire-compliance',
    title: 'Commercial & Fire Compliance',
    kicker: 'AS2304 / AS1851',
    blurb:
      'AS2304 fire water storage and AS1851 compliance for commercial properties — protecting assets, lives, and insurance coverage.',
    imageSrc: '/heroes/commercial-fire-compliance.jpg',
    meta: 'Explore sector',
    points: ['AS2304 fire water storage', 'AS1851 inspection support', 'Insurance-grade records'],
  },
  {
    href: '/industries/remote-regional-communities',
    title: 'Remote & Regional Communities',
    kicker: 'Community water',
    blurb:
      'Safe water access delivered to remote and Indigenous communities — with specialist logistics, cultural sensitivity, and genuine care.',
    imageSrc: '/heroes/remote-regional-communities.jpg',
    meta: 'Explore sector',
    points: ['Remote logistics planning', 'Indigenous community delivery', 'Potable water compliance'],
  },
]

export const tools: Entry[] = [
  {
    href: '/tools/tank-compliance-checker',
    title: 'Tank Compliance Checker',
    kicker: 'Free assessment · 2 minutes',
    blurb:
      'Answer a few questions about your tank and get a fast indication of likely compliance risk — from low risk through to urgent review recommended — plus your recommended next step.',
    meta: 'Check compliance risk',
    points: ['Tank type, age & inspection history', 'AS2304 / AS1851 / AS4020 context', 'Instant risk indication'],
  },
  {
    href: '/tools/repair-reline-replace',
    title: 'Repair vs Reline vs Replace',
    kicker: 'Free decision tool · 2 minutes',
    blurb:
      'For aging or deteriorating tanks: find out whether the practical path is targeted repair, RPVC relining, full replacement, or an inspection first.',
    meta: 'Get my result',
    points: ['Structural & corrosion condition', 'Liner / coating assessment', 'Clear recommended path'],
  },
]

export const projectPathways: Entry[] = [
  {
    href: '/campaigns/tank-remediation',
    title: 'Tank Remediation',
    kicker: 'Project enquiry',
    blurb:
      'Leaking, corroded or deteriorating tank? Request a project-specific proposal covering repair, RPVC relining, upgrades or replacement — with the pathway confirmed at assessment.',
    meta: 'Request a proposal',
    points: ['Repair · Reline · Replace pathways', 'Councils, industrial & commercial', 'Reply within 1 business day'],
  },
  {
    href: '/campaigns/remote-water-infrastructure',
    title: 'Remote Water Infrastructure',
    kicker: 'Project enquiry',
    blurb:
      'Planning water storage or treatment in remote Australia? Discuss an end-to-end delivery strategy — planning, civil, storage, treatment, installation and commissioning under one team.',
    meta: 'Discuss your project',
    points: ['End-to-end coordinated delivery', 'Freight, access & seasonal planning', 'Reply within 1 business day'],
  },
]

/** Every service across both divisions, in catalogue order. */
export const allServices: Entry[] = [...waterSolutionsServices, ...pcTanksServices]

/** Every entry that lives under /tools, including the campaign pathways. */
export const allTools: Entry[] = [...tools, ...projectPathways]

/** Standards referenced across the site, for rail chips. */
export const STANDARDS = ['AS2304', 'AS1851', 'AS4020', 'AS/NZS 3500', 'ADWG', 'ISO 9001', 'RPEQ']

export type DirectoryFamily = 'services' | 'industries' | 'tools'

/** The sibling entries for a detail page, excluding the page itself. */
export function siblingsFor(family: DirectoryFamily, currentHref: string, limit = 3): Entry[] {
  const pool =
    family === 'services' ? allServices : family === 'industries' ? industries : allTools
  const index = pool.findIndex((e) => e.href === currentHref)
  const start = index >= 0 ? index + 1 : 0
  return pool
    .map((_, i) => pool[(start + i) % pool.length])
    .filter((e) => e.href !== currentHref)
    .slice(0, limit)
}
