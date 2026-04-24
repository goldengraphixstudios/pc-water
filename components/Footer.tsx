import Link from 'next/link'
import Image from '@/components/AppImage'

const services = [
  { label: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design' },
  { label: 'Professional Tank Installation', href: '/services/tank-installation' },
  { label: 'Foundation & Civil Integration', href: '/services/foundation-civil-integration' },
  { label: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks' },
  { label: 'Remote Area Project Delivery', href: '/services/remote-area-delivery' },
  { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades' },
  { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology' },
  { label: 'RPVC Liners', href: '/services/rpvc-liner-systems' },
  { label: 'Tender & Procurement Support', href: '/services/tender-procurement-support' },
  { label: 'Builder & Contractor Partnerships', href: '/services/builder-contractor-partnerships' },
]

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Our Commitment', href: '/commitment' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        {/* Top section: logo + tagline + newsletter */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="inline-flex mb-4">
              <Image
                src="/logo-pacific-water-group.png"
                alt="PC Water Infrastructure - Engineered Water Systems"
                width={320}
                height={98}
                className="h-12 md:h-14 w-auto"
              />
            </div>
            <p className="text-[#3e91ce] font-bold text-sm tracking-widest uppercase mb-3">
              PC WATER INFRASTRUCTURE
            </p>
            <p className="text-gray-400 text-sm max-w-md">
              Australian-Made Tanks. Global-Standard Performance. Engineered water storage solutions for demanding infrastructure across Australia.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3 text-gray-300">Stay Informed — Subscribe to Our Newsletter</p>
            <form className="flex gap-2" action="#">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#3e91ce] hover:bg-[#2d7ab8] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Menu */}
          <div>
            <h3 className="text-[#3e91ce] font-bold text-xs tracking-widest uppercase mb-5">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#3e91ce] font-bold text-xs tracking-widest uppercase mb-5">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#3e91ce] font-bold text-xs tracking-widest uppercase mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-[#3e91ce] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>PO Box 961 Mudgeeraba, QLD 4213</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#3e91ce] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:1300029804" className="hover:text-white transition-colors">1300 029 804</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#3e91ce] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@pacificwatergroup.com.au" className="hover:text-white transition-colors">info@pacificwatergroup.com.au</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#3e91ce] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span>Monday – Sunday | 8:30 AM – 5:00 PM</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#3e91ce] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#3e91ce] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#3e91ce] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Indigenous Acknowledgement */}
        <div className="border-t border-white/10 pt-8 mb-6 flex items-start gap-4">
          <div className="relative w-12 h-8 flex-shrink-0 mt-0.5">
            <Image
              src="/aboriginal-flag.png"
              alt="Aboriginal flag"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl">
            <span className="text-gray-400 font-medium">Acknowledgement of Country: </span>
            PC Water Infrastructure acknowledges the Traditional Custodians of the land on which we work and live. We pay our respects to Elders past, present and emerging.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2013–2026 PC Water Infrastructure. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
            <Link href="/resources" className="hover:text-gray-300 transition-colors">Resources</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
