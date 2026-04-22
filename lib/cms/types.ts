export type CmsStatus = 'draft' | 'published'

export interface CmsTag {
  id: string
  name: string
  slug: string
}

export interface CmsPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImageUrl: string | null
  readTime: string | null
  status: CmsStatus
  seoTitle: string | null
  seoDescription: string | null
  publishedAt: string | null
  createdAt: string | null
  updatedAt: string | null
  tags: CmsTag[]
}

export interface CmsProject {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  sector: string
  location: string
  scope: string
  heroImageUrl: string | null
  galleryUrls: string[]
  status: CmsStatus
  featured: boolean
  seoTitle: string | null
  seoDescription: string | null
  publishedAt: string | null
  createdAt: string | null
  updatedAt: string | null
  tags: CmsTag[]
}

export interface CmsPostInput {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImageUrl?: string | null
  readTime?: string | null
  status: CmsStatus
  seoTitle?: string | null
  seoDescription?: string | null
  publishedAt?: string | null
  tags: string[]
}

export interface CmsProjectInput {
  title: string
  slug: string
  summary: string
  content: string
  sector: string
  location: string
  scope: string
  heroImageUrl?: string | null
  galleryUrls: string[]
  status: CmsStatus
  featured: boolean
  seoTitle?: string | null
  seoDescription?: string | null
  publishedAt?: string | null
  tags: string[]
}

export interface ProjectGridItem {
  title: string
  sector: string
  location: string
  scope: string
  imageSrc?: string
  imageAlt?: string
  href: string
  filterTags: string[]
}
