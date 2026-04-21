import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/api/'],
      },
    ],
    sitemap: 'https://www.pctanks.com.au/sitemap.xml',
    host: 'https://www.pctanks.com.au',
  }
}
