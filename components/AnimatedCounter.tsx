'use client'
import { useInView, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
  value: string
  label: string
  sub: string
}

export default function AnimatedCounter({ value, label, sub }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const isNumber = /^\d+/.test(value)
  const num = parseInt(value.replace(/\D/g, ''), 10)

  const displayRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!inView || !isNumber || !displayRef.current) return
    const suffix = value.replace(/^\d+/, '')
    const controls = animate(0, num, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(v) {
        if (displayRef.current) displayRef.current.textContent = Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, num, value, isNumber])

  return (
    <div ref={ref} className="text-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3e91ce]/50 transition-all duration-500 group hover:bg-white/10">
      <p ref={displayRef} className="text-[1.75rem] sm:text-4xl lg:text-5xl font-black text-white mb-2 leading-none break-words group-hover:text-[#3e91ce] transition-colors duration-300">
        {isNumber ? '0' : value}
      </p>
      <p className="text-[11px] sm:text-sm font-bold text-[#3e91ce] mb-1 uppercase tracking-normal sm:tracking-wider leading-snug">{label}</p>
      <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">{sub}</p>
    </div>
  )
}
