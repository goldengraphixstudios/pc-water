export interface AssessmentOption {
  value: string
  label: string
  description?: string
}

export interface AssessmentQuestion {
  id: string
  question: string
  helpText?: string
  options: AssessmentOption[]
}

export interface RelatedLink {
  label: string
  href: string
}

export type ResultTone = 'low' | 'moderate' | 'high' | 'urgent' | 'info'

export interface AssessmentResult {
  /** Stable key returned by the scoring function. */
  key: string
  /** Short label, e.g. "Moderate compliance risk". */
  level: string
  tone: ResultTone
  headline: string
  /** One-line plain-language summary shown prominently. */
  summary: string
  /** Why this result was reached + what it means in practice. */
  detail: string[]
  /** The recommended next step in plain language. */
  recommendation: string
  /** Most relevant service / resource / project pages for this result. */
  links: RelatedLink[]
  ctaLabel: string
  ctaHref: string
}

export interface AssessmentConfig {
  slug: string
  toolTitle: string
  /** Short label used for CRM lead division tagging. */
  leadDivision: string
  /** Plain-language intro shown above the first question. */
  intro: string
  questions: AssessmentQuestion[]
  /** Pure scoring function → returns a key present in `results`. */
  score: (answers: Record<string, string>) => string
  results: Record<string, AssessmentResult>
}
