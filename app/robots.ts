import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL || 'https://goldengraphixstudios.github.io/pc-water'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
