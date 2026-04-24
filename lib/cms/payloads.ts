/**
 * Pure payload-builder functions used by both server-side (queries.ts)
 * and client-side (browser-admin.ts) CMS operations.
 * No server imports — safe to use in Client Components.
 */
import type { CmsPostInput, CmsProjectInput } from '@/lib/cms/types'
import { normalizeOptionalText, slugify } from '@/lib/cms/utils'

export function defaultPublishedAt(
  status: 'draft' | 'published',
  publishedAt?: string | null,
) {
  if (status === 'published') {
    return normalizeOptionalText(publishedAt) ?? new Date().toISOString()
  }
  return null
}

export function buildPostPayload(input: CmsPostInput) {
  return {
    title:           input.title.trim(),
    slug:            slugify(input.slug || input.title),
    excerpt:         input.excerpt.trim(),
    content:         input.content.trim(),
    cover_image_url: normalizeOptionalText(input.coverImageUrl),
    read_time:       normalizeOptionalText(input.readTime),
    status:          input.status,
    seo_title:       normalizeOptionalText(input.seoTitle),
    seo_description: normalizeOptionalText(input.seoDescription),
    published_at:    defaultPublishedAt(input.status, input.publishedAt),
  }
}

export function buildProjectPayload(input: CmsProjectInput) {
  return {
    title:           input.title.trim(),
    slug:            slugify(input.slug || input.title),
    summary:         input.summary.trim(),
    content:         input.content.trim(),
    sector:          input.sector.trim(),
    location:        input.location.trim(),
    scope:           input.scope.trim(),
    hero_image_url:  normalizeOptionalText(input.heroImageUrl),
    gallery_urls:    input.galleryUrls,
    status:          input.status,
    featured:        input.featured,
    seo_title:       normalizeOptionalText(input.seoTitle),
    seo_description: normalizeOptionalText(input.seoDescription),
    published_at:    defaultPublishedAt(input.status, input.publishedAt),
  }
}
