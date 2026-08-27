'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

import AppImage from '@/components/AppImage'
import { getActiveOffer } from '@/lib/offers'

const DELAY_MS = 3000
const STORAGE_PREFIX = 'pcw-offer-popup:'

export default function OfferPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const offer = getActiveOffer()
  // The "seen" key is offer-specific so a brand-new offer will re-show once.
  const storageKey = offer ? `${STORAGE_PREFIX}${offer.id}` : null

  useEffect(() => {
    if (!offer || !storageKey) return
    // Never interrupt the funnel page itself or the CMS.
    if (pathname === '/offer' || pathname.startsWith('/cms')) return

    let dismissed = false
    try {
      dismissed = window.localStorage.getItem(storageKey) === '1'
    } catch {
      dismissed = false
    }
    if (dismissed) return

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [offer, pathname, storageKey])

  // Lock body scroll + close on Escape while the modal is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  function close() {
    setOpen(false)
    if (!storageKey) return
    try {
      window.localStorage.setItem(storageKey, '1')
    } catch {
      /* ignore */
    }
  }

  // An expired, disabled, or missing offer must never mount a popup.
  if (!offer) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0d1b2a]/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${offer.title} ${offer.titleHighlight}`}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl shadow-black/50"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close offer"
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#0d1b2a] flex items-center justify-center shadow-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Graphic */}
              <div className="relative bg-[#eef6fd] md:rounded-l-2xl overflow-hidden">
                <AppImage
                  src={offer.image}
                  alt={offer.imageAlt}
                  width={1254}
                  height={1254}
                  className="w-full h-56 md:h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col">
                <span className="inline-flex items-center gap-2 self-start bg-[#e0f2ff] text-[#2a72ad] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2a72ad] animate-pulse" />
                  {offer.eyebrow}
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0d1b2a] leading-tight mb-3">
                  {offer.title}{' '}
                  <span className="text-[#2a72ad]">{offer.titleHighlight}</span>
                </h2>

                <div className="space-y-2.5 mb-5">
                  {offer.discounts.map((d) => (
                    <div key={d.label} className="flex items-baseline gap-2.5">
                      <span className="text-2xl font-black text-[#2a72ad] leading-none">{d.value}</span>
                      <span className="text-sm font-semibold text-[#30505b]">{d.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-1">{offer.audience}.</p>
                <p className="text-xs font-semibold text-[#c2410c] uppercase tracking-wide mb-6">
                  Book before {offer.endLabel}
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href="/offer"
                    onClick={close}
                    className="glow-btn text-center bg-[#2a72ad] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#246397] transition-colors"
                  >
                    See the Full Offer
                  </Link>
                  <a
                    href={`tel:${offer.phone}`}
                    className="text-center border border-[#30505b] text-[#30505b] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#30505b] hover:text-white transition-colors"
                  >
                    Call {offer.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
