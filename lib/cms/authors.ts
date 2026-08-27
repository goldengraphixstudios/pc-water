/**
 * Article authorship.
 *
 * Attribution is date-based: articles published before August 2026 are
 * authored by the engineering side of the business, August 2026 onward by
 * the digital marketing side. New posts inherit the current author
 * automatically, so nothing needs updating when articles are added.
 */

export interface Author {
  /** Stable key used in URLs and schema. */
  id: string
  name: string
  role: string
  /** Post-nominals, shown after the name. */
  credentials?: string
  /** Short bio shown in the byline card. */
  bio: string
  initials: string
}

export const AUTHORS = {
  'alexander-rivera': {
    id: 'alexander-rivera',
    name: 'Alexander Karl Rivera',
    role: 'Project Engineer',
    credentials: 'RCE, PMP',
    bio: 'Project engineer working across water storage design, inspection and remediation delivery for municipal, industrial and remote-area assets.',
    initials: 'AR',
  },
  'gabriel-labriaga': {
    id: 'gabriel-labriaga',
    name: 'Gabriel P. Labriaga',
    role: 'Digital Marketing Specialist',
    bio: 'Digital marketing specialist at PC Water Infrastructure, translating the engineering team’s field experience into practical guidance for asset owners and operators.',
    initials: 'GL',
  },
} as const satisfies Record<string, Author>

export type AuthorId = keyof typeof AUTHORS

/** Articles from this date onward are attributed to the marketing author. */
const HANDOVER_DATE = Date.parse('2026-08-01T00:00:00.000Z')

export function getAuthorFor(publishedAt: string | null | undefined): Author {
  if (!publishedAt) return AUTHORS['gabriel-labriaga']
  const t = Date.parse(publishedAt)
  if (Number.isNaN(t)) return AUTHORS['gabriel-labriaga']
  return t < HANDOVER_DATE ? AUTHORS['alexander-rivera'] : AUTHORS['gabriel-labriaga']
}

export function authorDisplayName(author: Author): string {
  return author.credentials ? `${author.name}, ${author.credentials}` : author.name
}
