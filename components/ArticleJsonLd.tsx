interface ArticleJsonLdProps {
  url: string
  title: string
  description: string
  image?: string | null
  publishedAt?: string | null
  modifiedAt?: string | null
  keywords?: string[]
  /** Named author with job title, when known. Falls back to the organisation. */
  author?: { name: string; role?: string } | null
}

export default function ArticleJsonLd({
  url,
  title,
  description,
  image,
  publishedAt,
  modifiedAt,
  keywords = [],
  author,
}: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    description,
    image: image ? [image] : undefined,
    datePublished: publishedAt || undefined,
    dateModified: modifiedAt || publishedAt || undefined,
    keywords: keywords.length ? keywords.join(', ') : undefined,
    author: author
      ? {
          '@type': 'Person',
          name: author.name,
          jobTitle: author.role || undefined,
          worksFor: { '@type': 'Organization', name: 'PC Water Infrastructure' },
        }
      : {
          '@type': 'Organization',
          name: 'PC Water Infrastructure',
        },
    publisher: {
      '@type': 'Organization',
      name: 'PC Water Infrastructure',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pcwater.com.au/logo-pacific-water-group.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
