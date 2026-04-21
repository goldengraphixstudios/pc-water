import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.pctanks.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: MetadataRoute.Sitemap = [
    // Core pages
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/commitment`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/thank-you`, lastModified, changeFrequency: 'yearly', priority: 0.2 },

    // Services
    { url: `${BASE_URL}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/custom-tank-design`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/tank-installation`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/foundation-civil-integration`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/fire-water-tanks`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/remote-area-delivery`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/tank-maintenance-upgrades`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/tank-inspection-technology`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/rpvc-liner-systems`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/tender-procurement-support`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/builder-contractor-partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // Industries
    { url: `${BASE_URL}/industries`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/industries/government-councils`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/industries/mining-resources`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/industries/industrial-facilities`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/industries/commercial-fire-compliance`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/industries/remote-regional-communities`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Projects
    { url: `${BASE_URL}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/projects/borumba-hydro`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/projects/hobart-nyrstar`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/projects/doomadgee-wtp`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/projects/albury-reservoir`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/projects/clarence-road-liner`, lastModified, changeFrequency: 'yearly', priority: 0.6 },

    // Resources
    { url: `${BASE_URL}/resources`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
  ]

  return routes
}
