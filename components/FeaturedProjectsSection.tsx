'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { fetchPublishedProjects } from '@/lib/cms/browser-admin'
import type { CmsProject } from '@/lib/cms/types'

export default function FeaturedProjectsSection() {
  const [projects, setProjects] = useState<CmsProject[]>([])
  const [loaded, setLoaded]     = useState(false)

  useEffect(() => {
    fetchPublishedProjects(20).then((all) => {
      // Prefer featured projects; fall back to most-recent published
      const featured = all.filter((p) => p.featured)
      setProjects((featured.length >= 2 ? featured : all).slice(0, 3))
      setLoaded(true)
    })
  }, [])

  // Don't render the section at all if nothing is published
  if (loaded && projects.length === 0) return null

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#30505b]">PROOF IN THE FIELD</h2>
          <p className="text-gray-400 mt-5 text-lg max-w-xl mx-auto">
            Real projects. Real outcomes. Delivered in some of Australia&apos;s most challenging environments.
          </p>
        </motion.div>

        {/* Grid */}
        {!loaded ? (
          /* Skeleton */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl bg-slate-100 animate-pulse h-72" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectCard
                  title={p.title}
                  sector={p.sector}
                  location={p.location}
                  scope={p.summary}
                  imageSrc={p.heroImageUrl ?? undefined}
                  href={`/projects/${p.slug}`}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 border-2 border-[#30505b] text-[#30505b] px-8 py-4 rounded-full font-semibold hover:bg-[#30505b] hover:text-white transition-all duration-300 hover:scale-105 text-sm"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
