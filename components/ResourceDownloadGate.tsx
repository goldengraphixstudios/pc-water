'use client'

import { useEffect, useRef, useState } from 'react'
import { validateEmailLocally } from '@/lib/email-validation'
import { validateEmailWithServer } from '@/lib/email-validation-client'
import { submitResourceLead } from '@/lib/supabase/resources'

interface Props {
  resourceSlug: string
  resourceTitle: string
  division: string
  fileUrl: string
  onClose: () => void
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ResourceDownloadGate({ resourceSlug, resourceTitle, division, fileUrl, onClose }: Props) {
  const [email, setEmail]       = useState('')
  const [status, setStatus]     = useState<'idle' | 'validating' | 'saving' | 'done'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const inputRef                = useRef<HTMLInputElement>(null)
  const overlayRef              = useRef<HTMLDivElement>(null)

  const busy = status === 'validating' || status === 'saving'

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && !busy) onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose, busy])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg('')

    const localValidation = validateEmailLocally(email)

    // Local checks (instant)
    if (!localValidation.ok) {
      setErrorMsg(localValidation.reason)
      return
    }
    const trimmed = localValidation.email

    // Server-side validation for MX / deliverability layers
    setStatus('validating')
    const { ok, reason } = await validateEmailWithServer(trimmed)
    if (!ok) {
      setErrorMsg(reason ?? 'Please enter a valid email address.')
      setStatus('idle')
      return
    }

    // Store lead
    setStatus('saving')
    await submitResourceLead(trimmed, resourceSlug, resourceTitle, division)
    setStatus('done')

    // Trigger download
    const a = document.createElement('a')
    a.href = fileUrl
    a.download = resourceTitle + '.pdf'
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current && !busy) onClose()
  }

  const buttonLabel = status === 'validating'
    ? 'Verifying email…'
    : status === 'saving'
    ? 'Preparing download…'
    : 'Download Free Guide'

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#162538] to-[#30505b] px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-1">Free Download</p>
            <h2 className="text-white font-black text-lg leading-snug">{resourceTitle}</h2>
            <span className="inline-block mt-2 bg-white/10 text-white/80 text-xs px-2.5 py-0.5 rounded-full">{division}</span>
          </div>
          {!busy && (
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors mt-0.5"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === 'done' ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-black text-[#30505b] text-lg mb-2">Your download has started</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                If the download did not start automatically,{' '}
                <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-[#3e91ce] underline hover:text-[#2d7ab8]">
                  click here to download
                </a>.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-[#30505b] text-white font-semibold py-2.5 rounded-xl hover:bg-[#253e47] transition-colors text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Enter your email address to access this free resource. We may occasionally send you relevant
                water infrastructure updates — unsubscribe any time.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="gate-email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    ref={inputRef}
                    id="gate-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrorMsg('') }}
                    placeholder="you@company.com.au"
                    autoComplete="email"
                    disabled={busy}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3e91ce] focus:ring-2 focus:ring-[#3e91ce]/20 transition-all disabled:opacity-60"
                  />
                  {errorMsg && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {errorMsg}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={busy || !email.trim()}
                  className="w-full flex items-center justify-center gap-2 bg-[#3e91ce] hover:bg-[#2d7ab8] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded-xl transition-all text-sm shadow-sm shadow-[#3e91ce]/20"
                >
                  {busy ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {buttonLabel}
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                      {buttonLabel}
                    </>
                  )}
                </button>
              </form>

              <p className="text-gray-400 text-xs text-center mt-4">
                No spam. Your information is kept private and never sold.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
