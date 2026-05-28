'use client'
import LocationSelector from '@/components/LocationSelector'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateEmailLocally } from '@/lib/email-validation'

const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors'
const labelCls = 'block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5'

export default function ContactForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [submitError, setSubmitError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEmailError('')
    setSubmitError('')

    const validation = validateEmailLocally(email)
    if (!validation.ok) {
      setEmailError(validation.reason)
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      website: String(formData.get('website') ?? ''),
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      company: String(formData.get('company') ?? ''),
      email: validation.email,
      phone: String(formData.get('phone') ?? ''),
      state: String(formData.get('state') ?? ''),
      suburbTown: String(formData.get('suburbTown') ?? ''),
      industry: String(formData.get('industry') ?? ''),
      service: String(formData.get('service') ?? ''),
      projectStage: String(formData.get('stage') ?? ''),
      timeline: String(formData.get('timeline') ?? ''),
      budget: String(formData.get('budget') ?? ''),
      tankType: String(formData.get('tankType') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    setVerifying(true)
    try {
      const response = await fetch('/api/project-enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.ok) {
        setSubmitError(data?.reason ?? 'We could not submit your enquiry. Please try again.')
        setVerifying(false)
        return
      }

      router.push('/thank-you')
    } catch {
      setSubmitError('We could not submit your enquiry. Please try again.')
      setVerifying(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-xl font-black text-[#30505b] mb-6">PROJECT ENQUIRY FORM</h2>
      <form method="POST" action="/thank-you" className="space-y-5" onSubmit={handleSubmit}>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="firstName">First Name *</label>
            <input id="firstName" name="firstName" type="text" required className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="lastName">Last Name *</label>
            <input id="lastName" name="lastName" type="text" required className={inputCls} />
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="company">Company / Organisation</label>
          <input id="company" name="company" type="text" className={inputCls} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
              className={inputCls}
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1.5 font-medium">{emailError}</p>
            )}
          </div>
          <div>
            <label className={labelCls} htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" className={inputCls} />
          </div>
        </div>

        {/* Cascading location selector */}
        <LocationSelector />

        <div>
          <label className={labelCls} htmlFor="industry">Industry</label>
          <select id="industry" name="industry" className={`${inputCls} bg-white`}>
            <option value="">Select industry...</option>
            {['Government/Council','Mining/Resources','Industrial','Commercial/Fire','Remote Community','Other'].map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="service">Service Needed</label>
            <select id="service" name="service" className={`${inputCls} bg-white`}>
              <option value="">Select service...</option>
              {[
                'Project Managed Water Infrastructure',
                'Water Treatment Solutions',
                'Custom Tank Design & Engineering',
                'Professional Tank Installation',
                'Foundation & Civil Integration',
                'Fire Water Tank Solutions',
                'Remote Area Project Delivery',
                'Tank Maintenance & Upgrades',
                'Tank Inspection Technology',
                'RPVC Liner Systems',
                'Tender & Procurement Support',
                'Builder & Contractor Partnerships',
              ].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="stage">Project Stage</label>
            <select id="stage" name="stage" className={`${inputCls} bg-white`}>
              <option value="">Select stage...</option>
              {['Early Planning','Design Phase','Ready to Quote','Urgent'].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="timeline">Estimated Timeline</label>
            <input id="timeline" name="timeline" type="text" placeholder="e.g. 3–6 months" className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="budget">Estimated Budget Range</label>
            <input id="budget" name="budget" type="text" placeholder="e.g. $50k–$100k" className={inputCls} />
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="tankType">Tank Type / Application</label>
          <input
            id="tankType"
            name="tankType"
            type="text"
            placeholder="e.g. Fire water tank, potable storage, process water..."
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="message">Project Description / Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, site, and requirements..."
            className={`${inputCls} resize-none`}
          />
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
          <p className="text-xs font-bold text-[#30505b] uppercase tracking-wide mb-1">Supporting documents</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Share the key project details in the message field. If drawings, photos, or specifications are needed,
            the team will request them after the initial review.
          </p>
        </div>

        <button
          type="submit"
          disabled={verifying}
          className="w-full bg-[#3e91ce] text-white py-4 rounded-lg font-bold hover:bg-[#2d7ab8] transition-colors text-sm tracking-wide"
        >
          {verifying ? 'Submitting Enquiry…' : 'Submit Enquiry — We Reply Within 1 Business Day'}
        </button>

        {submitError && (
          <p className="text-red-500 text-sm font-medium text-center">{submitError}</p>
        )}

        <p className="text-xs text-gray-400 text-center">
          Your information is kept strictly confidential and will only be used to respond to your enquiry.
        </p>
      </form>
    </div>
  )
}
