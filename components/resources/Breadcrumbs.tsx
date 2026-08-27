import Link from 'next/link'

export interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={`font-medium transition-colors ${
                    light ? 'text-gray-400 hover:text-[#7fc2f0]' : 'text-gray-500 hover:text-[#2a72ad]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-semibold ${light ? 'text-white' : 'text-[#30505b]'}`} aria-current="page">
                  {item.label}
                </span>
              )}
              {!last && (
                <span className={light ? 'text-gray-600' : 'text-gray-300'} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
