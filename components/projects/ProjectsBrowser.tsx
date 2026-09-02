'use client'

import { useMemo, useState } from 'react'
import ProjectCard, { type ProjectItem } from './ProjectCard'

/**
 * Sector filtering for the portfolio.
 *
 * Deliberately lighter than the article library: with a handful of projects,
 * search and pagination would be UI without a job, so this is a single
 * sector facet over a dense grid.
 */
export default function ProjectsBrowser({
  projects,
  sidebar,
}: {
  projects: ProjectItem[]
  sidebar?: React.ReactNode
}) {
  const [sector, setSector] = useState('all')

  const sectors = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const p of projects) for (const t of p.sectorTags) counts[t] = (counts[t] ?? 0) + 1
    return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  }, [projects])

  const visible = useMemo(
    () => (sector === 'all' ? projects : projects.filter((p) => p.sectorTags.includes(sector))),
    [projects, sector],
  )

  return (
    <div className={`grid grid-cols-1 gap-8 ${sidebar ? 'xl:grid-cols-[minmax(0,1fr)_290px]' : ''}`}>
      <div className="min-w-0">
        {/* Sector filter */}
        <div className="mb-4 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
            Sector
          </span>
          <button
            type="button"
            onClick={() => setSector('all')}
            aria-pressed={sector === 'all'}
            className={`px-3 py-1.5 text-[12px] font-semibold transition-colors ${
              sector === 'all'
                ? 'bg-[#0d1b2a] text-white'
                : 'border border-gray-300 bg-white text-[#30505b] hover:border-[#3e91ce] hover:text-[#2a72ad]'
            }`}
          >
            All <span className="font-mono opacity-60">{projects.length}</span>
          </button>
          {sectors.map(([name, count]) => {
            const active = sector === name
            return (
              <button
                key={name}
                type="button"
                onClick={() => setSector(active ? 'all' : name)}
                aria-pressed={active}
                className={`px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                  active
                    ? 'bg-[#2a72ad] text-white'
                    : 'border border-gray-300 bg-white text-[#30505b] hover:border-[#3e91ce] hover:text-[#2a72ad]'
                }`}
              >
                {name} <span className="font-mono opacity-60">{count}</span>
              </button>
            )
          })}
        </div>

        {/* Result bar */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-2">
          <p className="text-[13px] text-gray-500">
            <span className="font-bold text-[#30505b]">{visible.length}</span>{' '}
            {visible.length === 1 ? 'project' : 'projects'}
            {sector !== 'all' && <span className="text-gray-400"> in {sector}</span>}
          </p>
          {sector !== 'all' && (
            <button
              type="button"
              onClick={() => setSector('all')}
              className="text-[13px] font-semibold text-[#2a72ad] transition-colors hover:text-[#3e91ce]"
            >
              Reset
            </button>
          )}
        </div>

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white py-14 text-center">
            <p className="mb-1 font-bold text-[#30505b]">No projects in this sector yet</p>
            <button
              type="button"
              onClick={() => setSector('all')}
              className="mt-3 rounded-lg bg-[#2a72ad] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#246397]"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>

      {sidebar && <div>{sidebar}</div>}
    </div>
  )
}
