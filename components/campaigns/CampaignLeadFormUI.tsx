'use client'

import { useRef, useState } from 'react'

import { validateEmailLocally } from '@/lib/email-validation'
import type { CampaignConfig, FieldConfig } from './config'
import { fieldInput, fieldInputError, fieldLabel } from './styles'

// ─────────────────────────────────────────────────────────────────────────────
// CAMPAIGN SUBMISSION CONTRACT
//
// The payload maps campaign answers onto the shared project-enquiries API plus:
//   - source:     'paid-campaign'
//   - campaignId: 'tank-remediation' | 'remote-water-infrastructure'
//   - ad attribution and all raw step-1 values
// The API stores the lead before sending email and syncing Pipedrive.
// ─────────────────────────────────────────────────────────────────────────────

export interface CampaignEnquiryPayload {
  // Honeypot + attribution
  website: string
  source: 'paid-campaign'
  campaignId: CampaignConfig['id']
  // Existing project-enquiries contract
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  industry: string
  service: string
  projectStage: string
  timeline: string
  budget: string
  tankType: string
  message: string
  // Campaign-specific qualification and attribution
  jobRole: string
  preferredContactMethod: string
  consent: boolean
  raw: Record<string, string | string[]>
  attribution: {
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
}

type Status = 'idle' | 'submitting' | 'error' | 'success'
type Values = Record<string, string | string[]>

async function submitCampaignEnquiry(
  payload: CampaignEnquiryPayload,
): Promise<'success'> {
  const response = await fetch('/api/project-enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = (await response.json().catch(() => null)) as {
    ok?: boolean
    reason?: string
  } | null

  if (!response.ok || !data?.ok) {
    throw new Error(data?.reason || 'We could not submit your request. Please try again.')
  }

  return 'success'
}

function getAttribution() {
  const params = new URLSearchParams(window.location.search)
  return {
    landingPage: window.location.href,
    referrer: document.referrer,
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmContent: params.get('utm_content') || '',
    utmTerm: params.get('utm_term') || '',
    gclid: params.get('gclid') || '',
    fbclid: params.get('fbclid') || '',
  }
}

function trackEvent(name: string, params: Record<string, string>) {
  const analyticsWindow = window as typeof window & {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }

  analyticsWindow.gtag?.('event', name, params)

  if (name === 'generate_lead') {
    analyticsWindow.fbq?.('track', 'Lead', {
      content_name: params.campaign_id,
      content_category: 'project_enquiry',
    })
  }
}

function serviceHint(id: CampaignConfig['id'], values: Values): string {
  if (id === 'tank-remediation') {
    const pathway = String(values.suspectedPathway ?? '')
    if (pathway === 'Reline') return 'RPVC Liner Systems'
    if (pathway === 'Replace') return 'Custom Tank Design & Engineering'
    return 'Tank Maintenance & Upgrades'
  }
  return 'Remote Area Project Delivery'
}

function buildPayload(config: CampaignConfig, values: Values): CampaignEnquiryPayload {
  const asText = (v: string | string[] | undefined) => (Array.isArray(v) ? v.join(', ') : (v ?? ''))

  const summary = config.form.step1Fields
    .map((f) => {
      const text = asText(values[f.name])
      return text ? `${f.label}: ${text}` : null
    })
    .filter(Boolean)
    .join(' | ')

  const message = `[CAMPAIGN: ${config.id}] ${summary}`.trim()

  return {
    website: asText(values.website),
    source: 'paid-campaign',
    campaignId: config.id,
    firstName: asText(values.firstName),
    lastName: asText(values.lastName),
    company: asText(values.company),
    email: asText(values.email),
    phone: asText(values.phone),
    industry: asText(values.sector) || asText(values.jobRole),
    service: serviceHint(config.id, values),
    projectStage: asText(values.projectStage) || asText(values.urgency),
    timeline: asText(values.targetTimeline),
    budget: '',
    tankType: asText(values.tankApplication) || asText(values.waterApplication),
    message,
    jobRole: asText(values.jobRole),
    preferredContactMethod: asText(values.preferredContactMethod),
    consent: values.consent === 'yes',
    raw: values,
    attribution: getAttribution(),
  }
}

export default function CampaignLeadFormUI({ config }: { config: CampaignConfig }) {
  const { form } = config
  const [step, setStep] = useState<1 | 2>(1)
  const [values, setValues] = useState<Values>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')
  const formRef = useRef<HTMLFormElement | null>(null)
  const formStartedTracked = useRef(false)

  const setValue = (name: string, value: string | string[]) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev))
  }

  const toggleCard = (name: string, option: string) => {
    setValues((prev) => {
      const current = Array.isArray(prev[name]) ? (prev[name] as string[]) : []
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option]
      return { ...prev, [name]: next }
    })
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev))
  }

  const focusField = (name: string) => {
    const el = formRef.current?.querySelector<HTMLElement>(`[data-field="${name}"]`)
    el?.focus()
    el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  function validateFields(fields: FieldConfig[], extra?: () => Record<string, string>) {
    const next: Record<string, string> = {}
    for (const f of fields) {
      if (!f.required) continue
      const v = values[f.name]
      const empty = f.type === 'cards' ? !Array.isArray(v) || v.length === 0 : !String(v ?? '').trim()
      if (empty) next[f.name] = f.type === 'cards' ? 'Please select at least one option.' : 'This field is required.'
    }
    if (extra) Object.assign(next, extra())
    return next
  }

  function handleNext() {
    const next = validateFields(form.step1Fields)
    setErrors(next)
    const firstError = Object.keys(next)[0]
    if (firstError) {
      focusField(firstError)
      return
    }
    setStep(2)
    if (!formStartedTracked.current) {
      formStartedTracked.current = true
      trackEvent('campaign_form_started', {
        campaign_id: config.id,
        campaign_source: 'paid-campaign',
      })
    }
    // move focus into step 2 for keyboard users
    requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>('#campaign-step2-heading')?.focus()
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const next = validateFields(form.step2Fields, () => {
      const errs: Record<string, string> = {}
      const emailCheck = validateEmailLocally(String(values.email ?? ''))
      if (!emailCheck.ok) errs.email = emailCheck.reason
      if (values.consent !== 'yes') errs.consent = 'Please confirm you agree to be contacted.'
      return errs
    })
    setErrors(next)
    const firstError = Object.keys(next)[0]
    if (firstError) {
      focusField(firstError)
      return
    }

    const payload = buildPayload(config, values)
    setStatus('submitting')
    setServerError('')
    try {
      const result = await submitCampaignEnquiry(payload)
      if (result === 'success') {
        trackEvent('generate_lead', {
          campaign_id: config.id,
          campaign_source: 'paid-campaign',
          lead_type: 'project_enquiry',
        })
        trackEvent('campaign_enquiry_submitted', {
          campaign_id: config.id,
          campaign_source: 'paid-campaign',
        })
        setStatus('success')
      }
    } catch (error) {
      setStatus('error')
      setServerError(
        error instanceof Error
          ? error.message
          : 'We could not submit your request. Please try again, or call us directly.',
      )
    }
  }

  const progress = step === 1 ? 50 : 100

  // ── Success state shown only after the API confirms storage ──
  if (status === 'success') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-xl shadow-black/10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0d1b2a]">
          <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-black text-[#0d1b2a]">Enquiry received</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Thanks — your details are with our project team. We reply within one business day. If it’s
          urgent, call us on{' '}
          <a href={`tel:${config.phone}`} data-action="call" className="font-semibold text-[#30505b] underline">
            {config.phoneDisplay}
          </a>
          .
        </p>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      data-campaign-id={config.id}
      data-source="paid-campaign"
      aria-label={config.hero.formHeading}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-xl shadow-black/20 sm:p-7"
    >
      {/* Handoff: explicit identifiers in the DOM as well as the JS payload */}
      <input type="hidden" name="campaignId" value={config.id} readOnly />
      <input type="hidden" name="source" value="paid-campaign" readOnly />
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={String(values.website ?? '')}
        onChange={(e) => setValue('website', e.target.value)}
      />

      <div className="mb-5">
        <p className="text-lg font-black text-[#0d1b2a]">{config.hero.formHeading}</p>
        <p className="mt-1 text-sm text-gray-500">{config.hero.formIntro}</p>
        {/* Step progress */}
        <div className="mt-4 flex items-center gap-3" aria-hidden="true">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#3e91ce] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-bold uppercase tracking-wide text-[#30505b]">Step {step} / 2</span>
        </div>
      </div>

      {/* ── STEP 1 ── */}
      <div hidden={step !== 1} className="space-y-5">
        <fieldset className="space-y-5">
          <legend className="sr-only">{form.step1Heading}</legend>
          <FieldGrid fields={form.step1Fields} values={values} errors={errors} setValue={setValue} toggleCard={toggleCard} />
        </fieldset>
        <button
          type="button"
          onClick={handleNext}
          data-action="start-form"
          className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded bg-[#0d1b2a] px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#30505b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2"
        >
          Continue to contact details
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── STEP 2 ── */}
      <div hidden={step !== 2} className="space-y-5">
        <div>
          <h3 id="campaign-step2-heading" tabIndex={-1} className="text-base font-bold text-[#0d1b2a] focus:outline-none">
            {form.step2Heading}
          </h3>
          {form.step2Intro && <p className="mt-1 text-sm text-gray-500">{form.step2Intro}</p>}
        </div>

        <fieldset className="space-y-5">
          <legend className="sr-only">{form.step2Heading}</legend>
          <FieldGrid fields={form.step2Fields} values={values} errors={errors} setValue={setValue} toggleCard={toggleCard} />
        </fieldset>

        {/* Consent */}
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              data-field="consent"
              checked={values.consent === 'yes'}
              onChange={(e) => setValue('consent', e.target.checked ? 'yes' : '')}
              className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-[#0d1b2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <span className="text-sm leading-relaxed text-gray-600">
              I agree to PC Water Infrastructure contacting me about this enquiry. *
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.consent}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row-reverse">
          <button
            type="submit"
            disabled={submitting}
            data-action="submit-enquiry"
            data-cta-location="lead-form"
            className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded bg-[#0d1b2a] px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#30505b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2 disabled:opacity-60"
          >
            {submitting ? 'Submitting…' : form.submitLabel}
          </button>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded border border-gray-300 px-5 text-sm font-semibold text-[#30505b] transition-colors hover:border-[#0d1b2a] hover:text-[#0d1b2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-2 sm:flex-none"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>

        {/* Server error returned by the shared project-enquiries pipeline */}
        {status === 'error' && serverError && (
          <p role="alert" className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {serverError}
          </p>
        )}
      </div>

      <p className="mt-5 text-center text-xs text-gray-400">
        Your details are kept strictly confidential and only used to respond to this enquiry.
      </p>
    </form>
  )
}

// ── Field renderers ───────────────────────────────────────────────────────────
function FieldGrid({
  fields,
  values,
  errors,
  setValue,
  toggleCard,
}: {
  fields: FieldConfig[]
  values: Values
  errors: Record<string, string>
  setValue: (name: string, value: string | string[]) => void
  toggleCard: (name: string, option: string) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.fullWidth || f.type === 'cards' || f.type === 'radio' || f.type === 'textarea' ? 'sm:col-span-2' : ''}>
          <Field field={f} value={values[f.name]} error={errors[f.name]} setValue={setValue} toggleCard={toggleCard} />
        </div>
      ))}
    </div>
  )
}

function Field({
  field: f,
  value,
  error,
  setValue,
  toggleCard,
}: {
  field: FieldConfig
  value: string | string[] | undefined
  error?: string
  setValue: (name: string, value: string | string[]) => void
  toggleCard: (name: string, option: string) => void
}) {
  const errorId = error ? `${f.name}-error` : undefined
  const labelId = `${f.name}-label`
  const req = f.required ? (
    <span className="text-red-500" aria-hidden="true">
      {' '}
      *
    </span>
  ) : null

  // Cards (multi-select)
  if (f.type === 'cards') {
    const selected = Array.isArray(value) ? value : []
    return (
      <fieldset aria-describedby={errorId} aria-invalid={Boolean(error)}>
        <legend id={labelId} className={fieldLabel}>
          {f.label}
          {req}
        </legend>
        {f.helper && <p className="-mt-0.5 mb-2 text-xs text-gray-400">{f.helper}</p>}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {f.options?.map((opt, i) => {
            const checked = selected.includes(opt)
            return (
              <label
                key={opt}
                className={`flex min-h-[48px] cursor-pointer items-center gap-2.5 rounded border px-3.5 py-2.5 text-sm transition-colors ${
                  checked
                    ? 'border-[#0d1b2a] bg-[#0d1b2a]/[0.04] text-[#0d1b2a]'
                    : 'border-gray-300 text-gray-600 hover:border-[#3e91ce]'
                }`}
              >
                <input
                  type="checkbox"
                  name={f.name}
                  value={opt}
                  checked={checked}
                  data-field={i === 0 ? f.name : undefined}
                  onChange={() => toggleCard(f.name, opt)}
                  className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-[#0d1b2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-1"
                />
                <span className="font-medium">{opt}</span>
              </label>
            )
          })}
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-xs font-medium text-red-600">
            {error}
          </p>
        )}
      </fieldset>
    )
  }

  // Radio
  if (f.type === 'radio') {
    const val = String(value ?? '')
    return (
      <fieldset aria-describedby={errorId} aria-invalid={Boolean(error)}>
        <legend id={labelId} className={fieldLabel}>
          {f.label}
          {req}
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {f.options?.map((opt, i) => {
            const checked = val === opt
            return (
              <label
                key={opt}
                className={`flex min-h-[44px] cursor-pointer items-center gap-2 rounded border px-4 py-2 text-sm transition-colors ${
                  checked ? 'border-[#0d1b2a] bg-[#0d1b2a]/[0.04] text-[#0d1b2a]' : 'border-gray-300 text-gray-600 hover:border-[#3e91ce]'
                }`}
              >
                <input
                  type="radio"
                  name={f.name}
                  value={opt}
                  checked={checked}
                  data-field={i === 0 ? f.name : undefined}
                  onChange={() => setValue(f.name, opt)}
                  className="h-4 w-4 text-[#0d1b2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e91ce] focus-visible:ring-offset-1"
                />
                <span className="font-medium">{opt}</span>
              </label>
            )
          })}
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-xs font-medium text-red-600">
            {error}
          </p>
        )}
      </fieldset>
    )
  }

  const commonProps = {
    id: f.name,
    name: f.name,
    'data-field': f.name,
    'aria-invalid': Boolean(error),
    'aria-describedby': errorId,
    className: `${fieldInput} ${error ? fieldInputError : ''}`,
  }

  return (
    <div>
      <label htmlFor={f.name} className={fieldLabel}>
        {f.label}
        {req}
      </label>
      {f.type === 'textarea' ? (
        <textarea
          {...commonProps}
          rows={4}
          placeholder={f.placeholder}
          value={String(value ?? '')}
          onChange={(e) => setValue(f.name, e.target.value)}
          className={`${commonProps.className} resize-none`}
        />
      ) : f.type === 'select' ? (
        <select
          {...commonProps}
          value={String(value ?? '')}
          onChange={(e) => setValue(f.name, e.target.value)}
          className={`${commonProps.className} bg-white`}
        >
          <option value="">Select…</option>
          {f.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...commonProps}
          type={f.name === 'email' ? 'email' : f.name === 'phone' ? 'tel' : 'text'}
          placeholder={f.placeholder}
          value={String(value ?? '')}
          onChange={(e) => setValue(f.name, e.target.value)}
        />
      )}
      {f.helper && !error && <p className="mt-1 text-xs text-gray-400">{f.helper}</p>}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
