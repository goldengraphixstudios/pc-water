'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/cms/dashboard', label: 'Dashboard' },
  { href: '/cms/posts', label: 'Articles' },
  { href: '/cms/projects', label: 'Projects' },
]

export default function CmsSidebar({ email }: { email: string }) {
  const pathname = usePathname()

  return (
    <aside className="w-full lg:w-72 bg-[#0d1b2a] text-white lg:min-h-screen">
      <div className="px-6 py-8 border-b border-white/10">
        <Link href="/cms/dashboard" className="block">
          <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-2">PC Water CMS</p>
          <h1 className="text-2xl font-black">Content Admin</h1>
        </Link>
        <p className="text-sm text-gray-400 mt-4 break-all">{email}</p>
      </div>

      <nav className="px-4 py-6 space-y-2">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                active
                  ? 'bg-[#3e91ce] text-white'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          )
        })}

        <Link
          href="/"
          className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
        >
          View Website
        </Link>
      </nav>
    </aside>
  )
}
