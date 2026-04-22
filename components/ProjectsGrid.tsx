'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

import type { ProjectGridItem } from '@/lib/cms/types'

export default function ProjectsGrid({ projects }: { projects: ProjectGridItem[] }) {
  const [active, setActive] = useState('All Projects')
  const filters = ['All Projects', ...Array.from(new Set(projects.flatMap((project) => project.filterTags)))]

  const visible = active === 'All Projects'
    ? projects
    : projects.filter(p => p.filterTags.includes(active))

  return (
    <>
      {/* Filter bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm text-gray-500 font-medium mr-2">Filter by sector:</span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  active === filter
                    ? 'bg-[#30505b] text-white border-[#30505b]'
                    : 'bg-white text-[#30505b] border-gray-200 hover:border-[#30505b] hover:bg-[#30505b]/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {visible.length > 0 ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visible.map((project) => (
                  <ProjectCard key={project.href} {...project} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 text-gray-400"
              >
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-semibold text-gray-500">No projects in this category yet.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
