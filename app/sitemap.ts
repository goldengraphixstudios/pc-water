import type { MetadataRoute } from 'next'
import { getPublicPosts, getPublicProjects } from '@/lib/cms/queries'

export const dynamic = 'force-static'

const BASE_URL = process.env.SITE_URL || 'https://goldengraphixstudios.github.io/pc-water'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date('2026-04-21T00:00:00.000Z')
  const [posts, projects] = await Promise.all([getPublicPosts(), getPublicProjects()])

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

    // Project hub
    { url: `${BASE_URL}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // Resource hub
    { url: `${BASE_URL}/resources`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const projectRoutes = projects
    .filter((project) => project.status === 'published')
    .map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  const postRoutes = posts
    .filter((post) => post.status === 'published')
    .map((post) => ({
      url: `${BASE_URL}/resources/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))

  return [...routes, ...projectRoutes, ...postRoutes]
}
