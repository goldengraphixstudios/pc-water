'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from '@/components/AppImage'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  src: string
  alt: string
}

export default function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => setActive(i => i !== null ? (i - 1 + images.length) % images.length : null), [images.length])
  const next = useCallback(() => setActive(i => i !== null ? (i + 1) % images.length : null), [images.length])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative aspect-video rounded-lg overflow-hidden shadow-sm group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#3e91ce]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95"
            onClick={close}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-5xl w-full mx-20 max-h-[85vh] flex flex-col items-center"
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src={images[active].src}
                  alt={images[active].alt}
                  width={1400}
                  height={900}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  priority
                />
                <p className="text-white/40 text-sm mt-3">{images[active].alt}</p>
              </motion.div>
            </AnimatePresence>

            {/* Close */}
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); next() }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Dot navigation */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={e => { e.stopPropagation(); setActive(i) }}
                    aria-label={`View image ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${i === active ? 'w-5 h-2 bg-[#3e91ce]' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
