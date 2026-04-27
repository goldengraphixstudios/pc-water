/**
 * Defines which website pages each project sector/classification maps to.
 * Used by the CMS editor to show "Page Appearances" and by SectionProjects
 * to filter by sector keyword.
 */

export interface SitePageEntry {
  label: string
  path: string
  type: 'industry' | 'service' | 'homepage'
  /** The keyword that must appear (case-insensitive) in the project's sector field */
  matchKeyword: string
}

export const SITE_PAGE_MAP: SitePageEntry[] = [
  // Industries
  { label: 'Mining & Resources',           path: '/industries/mining-resources',          type: 'industry', matchKeyword: 'mining'      },
  { label: 'Government & Councils',        path: '/industries/government-councils',        type: 'industry', matchKeyword: 'government'  },
  { label: 'Industrial Facilities',        path: '/industries/industrial-facilities',      type: 'industry', matchKeyword: 'industrial'  },
  { label: 'Commercial & Fire Compliance', path: '/industries/commercial-fire-compliance', type: 'industry', matchKeyword: 'commercial'  },
  { label: 'Remote & Regional Communities',path: '/industries/remote-regional-communities',type: 'industry', matchKeyword: 'remote'      },
  // Services
  { label: 'Fire Water Tank Solutions',    path: '/services/fire-water-tanks',             type: 'service',  matchKeyword: 'fire'        },
  { label: 'RPVC Liner Systems',           path: '/services/rpvc-liner-systems',           type: 'service',  matchKeyword: 'liner'       },
  { label: 'Tank Maintenance & Upgrades',  path: '/services/tank-maintenance-upgrades',    type: 'service',  matchKeyword: 'refurb'      },
  { label: 'Tank Inspection Technology',   path: '/services/tank-inspection-technology',   type: 'service',  matchKeyword: 'inspect'     },
  { label: 'Remote Area Project Delivery', path: '/services/remote-area-delivery',         type: 'service',  matchKeyword: 'remote'      },
  { label: 'Custom Tank Design',           path: '/services/custom-tank-design',           type: 'service',  matchKeyword: 'design'      },
]

/** Returns the site pages a project appears on based on its sector value. */
export function getProjectPageAppearances(sector: string, featured: boolean): SitePageEntry[] {
  const pages: SitePageEntry[] = []

  if (featured) {
    pages.push({ label: 'Homepage (Featured)', path: '/', type: 'homepage', matchKeyword: '' })
  }

  if (sector) {
    const lower = sector.toLowerCase()
    for (const entry of SITE_PAGE_MAP) {
      if (lower.includes(entry.matchKeyword) && !pages.find(p => p.path === entry.path)) {
        pages.push(entry)
      }
    }
  }

  return pages
}

/** Predefined sector options shown in the CMS selector with their page mapping hint. */
export const PREDEFINED_SECTORS: { value: string; hint: string }[] = [
  { value: 'Mining',                       hint: 'Mining & Resources industry page'            },
  { value: 'Government',                   hint: 'Government & Councils industry page'         },
  { value: 'Remote Community / Government',hint: 'Remote Communities + Government pages'       },
  { value: 'Industrial',                   hint: 'Industrial Facilities industry page'         },
  { value: 'Commercial',                   hint: 'Commercial & Fire Compliance industry page'  },
  { value: 'Remote',                       hint: 'Remote & Regional Communities + delivery'    },
  { value: 'Refurbish',                    hint: 'Tank Maintenance & Upgrades service page'    },
  { value: 'Fire Water',                   hint: 'Fire Water Tank Solutions service page'      },
  { value: 'Hydro Energy / Government',    hint: 'Government & Councils industry page'         },
]
