'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { validateEmailLocally } from '@/lib/email-validation'
import type { Offer } from '@/lib/offers'

const inputCls =
  'w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors'
const labelCls = 'block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5'

const roles = [
  'Fire Contractor',
  'Property Manager',
  'Asset Owner',
  'Government / Council',
  'Facilities Manager',
  'Other',
]

export default function OfferForm({ offer }: { offer: Offer }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [submitting, setSubmitting] = useState(false)
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

    const role = String(formData.get('role') ?? '')
    const userMessage = String(formData.get('message') ?? '').trim()
    const tankType = String(formData.get('tankType') ?? '').trim()

    // Attribute the lead to the promotion so the team can see where it came from.
    const message =
      `[OFFER: ${offer.title} ${offer.titleHighlight} — ${offer.id}] ` +
      `Claiming the ${offer.endLabel} inspection offer.` +
      (role ? ` Role: ${role}.` : '') +
      (tankType ? ` Tank/site: ${tankType}.` : '') +
      (userMessage ? ` Notes: ${userMessage}` : '')

    const payload = {
      website: String(formData.get('website') ?? ''),
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      company: String(formData.get('company') ?? ''),
      email: validation.email,
      phone: String(formData.get('phone') ?? ''),
      state: '',
      suburbTown: '',
      industry: role,
      service: offer.serviceTag,
      projectStage: 'Ready to Quote',
      timeline: `Offer ends ${offer.endLabel}`,
      budget: '',
      tankType,
      message,
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/project-enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.ok) {
        setSubmitError(data?.reason ?? 'We could not submit your request. Please try again.')
        setSubmitting(false)
        return
      }
      router.push('/thank-you')
    } catch {
      setSubmitError('We could not submit your request. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="offer-firstName">First Name *</label>
          <input id="offer-firstName" name="firstName" type="text" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="offer-lastName">Last Name *</label>
          <input id="offer-lastName" name="lastName" type="text" required className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="offer-email">Email Address *</label>
          <input
            id="offer-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
            className={inputCls}
          />
          {emailError && <p className="text-red-500 text-xs mt-1.5 font-medium">{emailError}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="offer-phone">Phone Number</label>
          <input id="offer-phone" name="phone" type="tel" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="offer-company">Company / Organisation</label>
          <input id="offer-company" name="company" type="text" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="offer-role">I am a…</label>
          <select id="offer-role" name="role" className={`${inputCls} bg-white`}>
            <option value="">Select…</option>
            {roles.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="offer-tankType">Tank Type / Site (optional)</label>
        <input
          id="offer-tankType"
          name="tankType"
          type="text"
          placeholder="e.g. Fire water tank, potable reservoir, site location…"
          className={inputCls}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="offer-message">Anything we should know? (optional)</label>
        <textarea
          id="offer-message"
          name="message"
          rows={3}
          placeholder="Number of tanks, access constraints, timing…"
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#2a72ad] text-white py-4 rounded-lg font-bold hover:bg-[#246397] transition-colors text-sm tracking-wide disabled:opacity-60"
      >
        {submitting ? 'Submitting…' : `Claim My Offer — Book Before ${offer.endLabel}`}
      </button>

      {submitError && <p className="text-red-500 text-sm font-medium text-center">{submitError}</p>}

      <p className="text-xs text-gray-400 text-center">
        We reply within one business day. Your details are kept strictly confidential and only used to respond to this request.
      </p>
    </form>
  )
}
