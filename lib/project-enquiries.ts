export interface ProjectEnquiryAttribution {
  landingPage: string
  referrer: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  utmTerm: string
  gclid: string
  fbclid: string
}

export interface ProjectEnquiryInput {
  firstName: string
  lastName: string
  company?: string
  email: string
  phone?: string
  state?: string
  suburbTown?: string
  industry?: string
  service?: string
  projectStage?: string
  timeline?: string
  budget?: string
  tankType?: string
  message: string
  source?: string
  campaignId?: string
  jobRole?: string
  preferredContactMethod?: string
  attribution?: ProjectEnquiryAttribution
}

export interface ProjectEnquiry extends ProjectEnquiryInput {
  id: string
  source: string
  submissionStatus: 'new' | 'reviewed' | 'closed'
  emailDeliveryStatus: 'sent' | 'failed' | 'skipped'
  emailDeliveryError: string | null
  submittedAt: string
  reviewedAt: string | null
  pipedrivePersonId?: number | null
  pipedriveOrganizationId?: number | null
  pipedriveLeadId?: string | null
  pipedriveSyncedAt?: string | null
  pipedriveSyncError?: string | null
}

function normalizeAttribution(
  attribution?: Partial<ProjectEnquiryAttribution>,
): ProjectEnquiryAttribution | undefined {
  if (!attribution) return undefined

  const normalized = {
    landingPage: attribution.landingPage?.trim() || '',
    referrer: attribution.referrer?.trim() || '',
    utmSource: attribution.utmSource?.trim() || '',
    utmMedium: attribution.utmMedium?.trim() || '',
    utmCampaign: attribution.utmCampaign?.trim() || '',
    utmContent: attribution.utmContent?.trim() || '',
    utmTerm: attribution.utmTerm?.trim() || '',
    gclid: attribution.gclid?.trim() || '',
    fbclid: attribution.fbclid?.trim() || '',
  }

  return Object.values(normalized).some(Boolean) ? normalized : undefined
}

export function normalizeProjectEnquiryInput(input: ProjectEnquiryInput): ProjectEnquiryInput {
  return {
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    company: input.company?.trim() || '',
    email: input.email.trim().toLowerCase(),
    phone: input.phone?.trim() || '',
    state: input.state?.trim() || '',
    suburbTown: input.suburbTown?.trim() || '',
    industry: input.industry?.trim() || '',
    service: input.service?.trim() || '',
    projectStage: input.projectStage?.trim() || '',
    timeline: input.timeline?.trim() || '',
    budget: input.budget?.trim() || '',
    tankType: input.tankType?.trim() || '',
    message: input.message.trim(),
    source: input.source?.trim() || 'website',
    campaignId: input.campaignId?.trim() || '',
    jobRole: input.jobRole?.trim() || '',
    preferredContactMethod: input.preferredContactMethod?.trim() || '',
    attribution: normalizeAttribution(input.attribution),
  }
}
