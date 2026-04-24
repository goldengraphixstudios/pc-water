import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coming Soon',
  description:
    'This section of the PC Water Infrastructure website is temporarily unavailable while the site is being staged.',
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-white">
      <section className="relative overflow-hidden px-4 py-32">
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#30505b]/40 via-transparent to-[#3e91ce]/10 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#3e91ce]">
            / Temporary Site Mode
          </p>
          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            PAGE COMING
            <br />
            <span className="gradient-text">SOON</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
            This section is temporarily offline while the new PC Water Infrastructure site is being staged.
            For now, use the live pages below.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="glow-btn rounded-full bg-[#3e91ce] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#2d7ab8]"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              View Projects
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
