'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

interface CTABannerProps {
  heading: string
  subheading?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  variant?: 'dark' | 'navy' | 'primary'
}

export default function CTABanner({
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
  variant = 'dark',
}: CTABannerProps) {
  const bg = variant === 'navy' ? 'bg-[#0d1b2a]' : 'bg-[#30505b]'

  return (
    <section className={`${bg} py-20 relative overflow-hidden`}>
      {/* Animated background rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#3e91ce]/5 animate-ping pointer-events-none"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#3e91ce]/8 animate-ping pointer-events-none"
        style={{ animationDuration: '3s', animationDelay: '0.5s' }}
      />
      <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />

      <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{heading}</h2>
        {subheading && (
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">{subheading}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={primaryCTA.href}
              className="glow-btn inline-block bg-[#3e91ce] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2d7ab8] transition-colors text-sm tracking-wide"
            >
              {primaryCTA.label}
            </Link>
          </motion.div>
          {secondaryCTA && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={secondaryCTA.href}
                className="inline-block border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm tracking-wide"
              >
                {secondaryCTA.label}
              </Link>
            </motion.div>
          )}
        </div>
      </AnimatedSection>
    </section>
  )
}
