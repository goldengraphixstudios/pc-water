'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

/**
 * Controlled entrance animation for campaign sections. Animates once on scroll.
 * Fully respects prefers-reduced-motion — when reduced, content renders
 * immediately with no transform or fade.
 */
export default function CampaignReveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag ref={ref as never} className={className}>
        {children}
      </Tag>
    )
  }

  const MotionTag = as === 'li' ? motion.li : motion.div

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </MotionTag>
  )
}
