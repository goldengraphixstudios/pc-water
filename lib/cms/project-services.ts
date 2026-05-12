export type ProjectServiceOption = {
  name: string
  href: string
}

export const PROJECT_SERVICE_OPTIONS: ProjectServiceOption[] = [
  { name: 'Project Managed Water Infrastructure Facilities', href: '/services/project-managed-water-infrastructure' },
  { name: 'Project Managed Water Infrastructure', href: '/services/project-managed-water-infrastructure' },
  { name: 'Water Treatment Solutions', href: '/services/water-treatment-solutions' },
  { name: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
  { name: 'Professional Tank Installation', href: '/services/tank-installation' },
  { name: 'Foundation & Civil Integration', href: '/services/foundation-civil-integration' },
  { name: 'Remote Area Project Delivery', href: '/services/remote-area-delivery' },
  { name: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems' },
  { name: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
  { name: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
  { name: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
  { name: 'Tender & Procurement Support', href: '/services/tender-procurement-support' },
  { name: 'Builder & Contractor Partnerships', href: '/services/builder-contractor-partnerships' },
]

const SERVICE_BY_NAME = new Map(PROJECT_SERVICE_OPTIONS.map((service) => [service.name, service]))

export const PROJECT_SERVICE_FALLBACKS: Record<string, string[]> = {
  'hobart-nyrstar': [
    'Custom Tank Design & Engineering',
    'Professional Tank Installation',
    'Foundation & Civil Integration',
  ],
  'borumba-hydro': [
    'Custom Tank Design & Engineering',
    'Remote Area Project Delivery',
    'RPVC Liner Systems',
    'Foundation & Civil Integration',
    'Professional Tank Installation',
  ],
  'doomadgee-wtp': [
    'Remote Area Project Delivery',
    'Custom Tank Design & Engineering',
    'Foundation & Civil Integration',
    'Professional Tank Installation',
  ],
  'albury-reservoir': [
    'RPVC Liner Systems',
    'Tank Inspection Technology',
    'Tank Maintenance & Upgrades',
  ],
  'clarence-road-liner': [
    'RPVC Liner Systems',
    'Tank Inspection Technology',
    'Tank Maintenance & Upgrades',
  ],
  'kybrook-nt': [
    'Professional Tank Installation',
  ],
}

export function getProjectServiceOption(name: string): ProjectServiceOption {
  return SERVICE_BY_NAME.get(name) ?? { name, href: '/services' }
}
