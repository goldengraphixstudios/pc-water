'use client'

import { useEffect, useRef, useState } from 'react'
import { submitResourceLead } from '@/lib/supabase/resources'

interface Props {
  resourceSlug: string
  resourceTitle: string
  division: string
  fileUrl: string
  onClose: () => void
}

const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'sharklasers.com', 'guerrillamailblock.com', 'grr.la', 'guerrillamail.info',
  'yopmail.com', 'spam4.me', 'trashmail.com', 'dispostable.com', 'maildrop.cc',
  'fakeinbox.com', 'getairmail.com', 'mailnull.com', 'spamgourmet.com',
  'getnada.com', 'burnermail.io', 'mailtemp.net',
]

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

function isDisposableEmail(email: string): boolean {
  const domain = email.trim().toLowerCase().split('@')[1] ?? ''
  return DISPOSABLE_DOMAINS.includes(domain)
}

export default function ResourceDownloadGate({ resourceSlug, resourceTitle, division, fileUrl, onClose }: Props) {
  const [email, setEmail]       = useState('')
  const [status, setStatus]     = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const inputRef                = useRef<HTMLInputElement>(null)
  const overlayRef              = useRef<HTMLDivElement>(null)

  // Focus input on open
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80)
    return () => clearTimeout(t)
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg('')

    const trimmed = email.trim()

    if (!isValidEmail(trimmed)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    if (isDisposableEmail(trimmed)) {
      setErrorMsg('Disposable email addresses are not accepted. Please use your work or personal email.')
      return
    }

    setStatus('loading')

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

  // Click outside overlay closes
  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#162538] to-[#30505b] px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-1">Free Download</p>
            <h2 className="text-white font-black text-lg leading-snug">{resourceTitle}</h2>
            <span className="inline-block mt-2 bg-white/10 text-white/80 text-xs px-2.5 py-0.5 rounded-full">{division}</span>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors mt-0.5"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
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
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e91ce] underline hover:text-[#2d7ab8]"
                >
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
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3e91ce] focus:ring-2 focus:ring-[#3e91ce]/20 transition-all"
                    disabled={status === 'loading'}
                  />
                  {errorMsg && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium">{errorMsg}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !email.trim()}
                  className="w-full flex items-center justify-center gap-2 bg-[#3e91ce] hover:bg-[#2d7ab8] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded-xl transition-all text-sm shadow-sm shadow-[#3e91ce]/20"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 12 5.373 12 0h4z" />
                      </svg>
                      Processing…
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                      Download Free Guide
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
