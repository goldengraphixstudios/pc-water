'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface IndustryCardProps {
  title: string
  description: string
  href: string
}

const iconMap: Record<string, React.ReactNode> = {
  'Government & Councils': (
    <svg className="w-9 h-9 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3L3 8.5h18L12 3zM4 21h16M4 8.5V21M20 8.5V21M8 21v-6h2v6M14 21v-6h2v6M10 14h4" />
    </svg>
  ),
  'Mining & Resources': (
    <svg className="w-9 h-9 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 15a8 8 0 0116 0H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 18h20" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18v1.5a1 1 0 001 1h10a1 1 0 001-1V18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7V4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9.5L7.5 8M15 9.5L16.5 8" />
    </svg>
  ),
  'Industrial Facilities': (
    <svg className="w-9 h-9 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 10h10v10H7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 10Q7 6 12 6Q17 6 17 10" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 3h4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 15h3M7 15H4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20v2M15 20v2" />
    </svg>
  ),
  'Commercial & Fire Compliance': (
    <svg className="w-9 h-9 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  'Remote & Regional Communities': (
    <svg className="w-9 h-9 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

const fallbackIcon = (
  <svg className="w-9 h-9 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
)

export default function IndustryCard({ title, description, href }: IndustryCardProps) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
      <Link href={href} className="group block h-full">
        <div className="relative h-full bg-white border-2 border-gray-100 rounded-2xl p-7 overflow-hidden transition-all duration-500 group-hover:border-[#3e91ce]/30 group-hover:shadow-2xl group-hover:shadow-[#3e91ce]/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3e91ce]/0 to-[#30505b]/0 group-hover:from-[#3e91ce]/3 group-hover:to-[#30505b]/5 transition-all duration-500" />

          <div className="relative z-10">
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
              {iconMap[title] ?? fallbackIcon}
            </div>
            <h3 className="font-black text-[#30505b] text-xl mb-3 group-hover:text-[#3e91ce] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            <div className="mt-5 flex items-center gap-2 text-[#3e91ce] text-sm font-bold">
              <span>Explore Sector</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
