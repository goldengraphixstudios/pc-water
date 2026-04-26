'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface SectionHeroProps {
  label?: string
  heading: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  variant?: 'dark' | 'blue'
}

export default function SectionHero({
  label,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  variant = 'dark',
}: SectionHeroProps) {
  const bg =
    variant === 'blue'
      ? 'bg-gradient-to-br from-[#3e91ce] via-[#30505b] to-[#0d1b2a]'
      : 'bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce]'

  return (
    <section className={`${bg} pt-40 pb-24 relative overflow-hidden`}>
      {/* Dot pattern */}
      <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Rotating ring decoration */}
      <div className="absolute top-1/2 right-24 w-48 h-48 rounded-full border border-[#3e91ce]/10 rotate-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#3e91ce] text-sm font-bold tracking-widest uppercase mb-4"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
        >
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            {subheading}
          </motion.p>
        )}
        {(ctaLabel || secondaryCtaLabel) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="glow-btn inline-flex items-center justify-center bg-[#3e91ce] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#2d7ab8] transition-all duration-300 hover:scale-105"
              >
                {ctaLabel}
              </Link>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
