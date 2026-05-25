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
  }
}
