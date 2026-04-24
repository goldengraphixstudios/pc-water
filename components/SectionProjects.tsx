'use client'

import { useEffect, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { fetchPublishedProjects } from '@/lib/cms/browser-admin'
import type { CmsProject } from '@/lib/cms/types'

interface Props {
  heading?: string
  /** How many cards to show */
  limit?: number
  /** Optional keyword matched against project sector (case-insensitive). Falls back to any published projects. */
  sector?: string
  bgColor?: string
}

export default function SectionProjects({
  heading = 'Related Projects',
  limit = 2,
  sector,
  bgColor = 'bg-white',
}: Props) {
  const [projects, setProjects] = useState<CmsProject[]>([])
  const [loaded, setLoaded]     = useState(false)

  useEffect(() => {
    fetchPublishedProjects(20).then((all) => {
      let filtered = sector
        ? all.filter(p => p.sector?.toLowerCase().includes(sector.toLowerCase()))
        : all

      // Fall back to any published projects if the sector filter returns nothing
      if (!filtered.length) filtered = all

      setProjects(filtered.slice(0, limit))
      setLoaded(true)
    })
  }, [limit, sector])

  // Hide the whole section if nothing is published yet
  if (loaded && projects.length === 0) return null

  return (
    <section className={`${bgColor} py-20`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-black text-[#30505b] mb-8 text-center">{heading}</h2>

        {/* Skeleton while loading */}
        {!loaded ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {Array.from({ length: limit }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-slate-200 animate-pulse h-72" />
            ))}
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(limit, 3)} gap-6 ${limit <= 2 ? 'max-w-3xl mx-auto' : ''}`}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                sector={project.sector}
                location={project.location}
                scope={project.summary}
                imageSrc={project.heroImageUrl ?? undefined}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
