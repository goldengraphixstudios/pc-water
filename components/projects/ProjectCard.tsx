import Link from 'next/link'

export interface ProjectItem {
  slug: string
  title: string
  sector: string
  sectorTags: string[]
  location: string
  scope: string
  imageSrc?: string | null
  featured: boolean
  client?: string | null
  projectStatus?: string | null
}

type Variant = 'lead' | 'standard' | 'compact' | 'rail'

function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/** Lead — the flagship project on the portfolio index. */
function LeadCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-xl bg-[#0d1b2a] lg:min-h-[460px]"
    >
      {project.imageSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/85 to-[#0d1b2a]/25" />
      <div className="relative z-10 p-6 lg:p-9">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7fc2f0]">
            {project.sector}
          </span>
          <span className="h-3 w-px bg-white/25" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            Featured project
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-black leading-[1.12] text-white transition-colors group-hover:text-[#7fc2f0] lg:text-4xl">
          {project.title}
        </h2>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-gray-300 lg:text-base">{project.scope}</p>
        <p className="flex items-center gap-1.5 text-[13px] text-gray-400">
          <PinIcon className="h-3.5 w-3.5 text-[#3e91ce]" />
          {project.location}
        </p>
      </div>
    </Link>
  )
}

/** Standard — dense row on mobile, editorial card from sm up. */
function StandardCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-row gap-3 border-b border-gray-200 bg-white py-3 transition-colors hover:bg-[#f4f6f8] sm:flex-col sm:gap-0 sm:rounded-lg sm:border sm:border-gray-200 sm:py-0 sm:hover:border-[#3e91ce]/50 sm:hover:bg-white sm:hover:shadow-md"
    >
      <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded bg-[#162538] sm:h-56 sm:w-full sm:rounded-none sm:rounded-t-lg">
        {project.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageSrc}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#162538] to-[#30505b]" />
        )}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0d1b2a]/60 to-transparent sm:block" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:p-5">
        <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#2a72ad]">
          {project.sector}
        </span>
        <h3 className="mb-1.5 line-clamp-2 text-sm font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#2a72ad] sm:mb-2 sm:text-base">
          {project.title}
        </h3>
        <p className="mb-3 hidden line-clamp-3 flex-1 text-[13px] leading-relaxed text-gray-500 sm:block">
          {project.scope}
        </p>
        <p className="mt-auto flex items-center gap-1.5 text-[11px] text-gray-400">
          <PinIcon className="h-3 w-3 flex-shrink-0 text-[#3e91ce]" />
          <span className="truncate">{project.location}</span>
        </p>
      </div>
    </Link>
  )
}

/**
 * Rail — sits beside the flagship card and stretches to fill its height, so
 * three entries occupy the full column rather than leaving dead space.
 */
function RailCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex min-h-0 flex-1 items-stretch gap-4 py-3"
    >
      <div className="relative w-32 flex-shrink-0 overflow-hidden rounded bg-[#162538] sm:w-40">
        {project.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#162538] to-[#30505b]" />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#7fc2f0]">
          {project.sector}
        </span>
        <h4 className="mt-1 text-[15px] font-bold leading-snug text-white transition-colors group-hover:text-[#7fc2f0] sm:text-base">
          {project.title}
        </h4>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-gray-400">{project.scope}</p>
        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-500">
          <PinIcon className="h-3 w-3 flex-shrink-0 text-[#3e91ce]" />
          <span className="truncate">{project.location}</span>
        </p>
      </div>
    </Link>
  )
}

/** Compact — dense row for rails. */
function CompactCard({ project }: { project: ProjectItem }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex gap-3 py-2.5">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-[#162538]">
        {project.imageSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.imageSrc} alt="" className="h-full w-full object-cover" loading="lazy" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#2a72ad]">
          {project.sector}
        </span>
        <h4 className="mt-0.5 line-clamp-2 text-[13px] font-bold leading-snug text-[#30505b] transition-colors group-hover:text-[#2a72ad]">
          {project.title}
        </h4>
        <p className="mt-0.5 truncate text-[11px] text-gray-400">{project.location}</p>
      </div>
    </Link>
  )
}

export default function ProjectCard({
  project,
  variant = 'standard',
}: {
  project: ProjectItem
  variant?: Variant
}) {
  if (variant === 'lead') return <LeadCard project={project} />
  if (variant === 'rail') return <RailCard project={project} />
  if (variant === 'compact') return <CompactCard project={project} />
  return <StandardCard project={project} />
}
