'use client'
import Link from 'next/link'
import Image from '@/components/AppImage'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  sector: string
  location: string
  scope: string
  imageSrc?: string
  imageAlt?: string
  href: string
}

export default function ProjectCard({ title, sector, location, scope, imageSrc, imageAlt, href }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
      <Link href={href} className="group block h-full">
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#3e91ce]/20 transition-all duration-500 h-full">
          {/* Image */}
          <div className="h-60 relative bg-[#30505b] overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce]" />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/20 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="bg-[#3e91ce] text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                {sector}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white/80 text-xs flex items-center gap-1.5 mb-1">
                <svg className="w-3 h-3 text-[#3e91ce]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {location}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white p-6 border-b-2 border-transparent group-hover:border-[#3e91ce] transition-colors duration-300">
            <h3 className="font-black text-[#30505b] text-lg mb-2 group-hover:text-[#3e91ce] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mb-5 leading-relaxed">{scope}</p>
            <div className="flex items-center gap-2 text-[#3e91ce] text-sm font-bold">
              <span>View Project</span>
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
