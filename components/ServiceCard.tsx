'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  number: number
}

export default function ServiceCard({ title, description, href, number }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
      <Link href={href} className="group block h-full">
        <div className="relative h-full bg-[#0d1b2a]/60 border border-white/10 rounded-2xl p-6 overflow-hidden card-glow transition-all duration-500 hover:border-[#3e91ce]/50">
          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#3e91ce]/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32" />

          {/* Number */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#3e91ce]/40 font-black text-5xl leading-none select-none group-hover:text-[#3e91ce]/60 transition-colors duration-300">
              {String(number).padStart(2, '0')}
            </span>
            <div className="w-8 h-8 rounded-full border border-[#3e91ce]/30 flex items-center justify-center group-hover:bg-[#3e91ce] group-hover:border-[#3e91ce] transition-all duration-300">
              <svg
                className="w-4 h-4 text-[#3e91ce] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <h3 className="font-bold text-white text-base mb-3 group-hover:text-[#3e91ce] transition-colors duration-300 leading-snug">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
            {description}
          </p>

          {/* Bottom border animation */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#3e91ce] to-transparent group-hover:w-full transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  )
}
