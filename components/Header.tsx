'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from '@/components/AppImage'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const IcGear = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
const IcCrane = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 21V10h6v11M9 14h6" /></svg>
const IcPillars = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3L3 8h18L12 3zM4 21h16M4 8v13M20 8v13M8 21V8M12 21V8M16 21V8" /></svg>
const IcFlame = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
const IcPin = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
const IcWrench = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
const IcScan = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
const IcShield = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
const IcDoc = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
const IcPeople = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
const IcGlobe = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
const IcFactory = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V9l5-4v4l5-4v4l5-4V21H3zM3 21h18M7 21v-3h2v3M11 21v-3h2v3M15 21v-3h2v3" /></svg>
const IcHardHat = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 15a8 8 0 0116 0H4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 18h20" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18v1.5a1 1 0 001 1h10a1 1 0 001-1V18" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7V4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9.5L7.5 8M15 9.5L16.5 8" /></svg>
const IcIndustrial = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 10h10v10H7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 10Q7 6 12 6Q17 6 17 10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 3h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 15h3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 15h2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20v2M15 20v2" /></svg>

const services: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: 'Custom Tank Design & Engineering', href: '/services/custom-tank-design', icon: <IcGear /> },
  { label: 'Professional Tank Installation', href: '/services/tank-installation', icon: <IcCrane /> },
  { label: 'Foundation & Civil Integration', href: '/services/foundation-civil-integration', icon: <IcPillars /> },
  { label: 'Fire Water Tank Solutions', href: '/services/fire-water-tanks', icon: <IcFlame /> },
  { label: 'Remote Area Project Delivery', href: '/services/remote-area-delivery', icon: <IcPin /> },
  { label: 'Tank Maintenance & Upgrades', href: '/services/tank-maintenance-upgrades', icon: <IcWrench /> },
  { label: 'Tank Inspection Technology', href: '/services/tank-inspection-technology', icon: <IcScan /> },
  { label: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems', icon: <IcShield /> },
  { label: 'Tender & Procurement Support', href: '/services/tender-procurement-support', icon: <IcDoc /> },
  { label: 'Builder & Contractor Partnerships', href: '/services/builder-contractor-partnerships', icon: <IcPeople /> },
]

const industries: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: 'Government & Councils', href: '/industries/government-councils', icon: <IcPillars /> },
  { label: 'Mining & Resources', href: '/industries/mining-resources', icon: <IcHardHat /> },
  { label: 'Industrial Facilities', href: '/industries/industrial-facilities', icon: <IcIndustrial /> },
  { label: 'Commercial & Fire Compliance', href: '/industries/commercial-fire-compliance', icon: <IcFlame /> },
  { label: 'Remote & Regional Communities', href: '/industries/remote-regional-communities', icon: <IcGlobe /> },
]

const socialPaths = [
  { href: 'https://facebook.com', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { href: 'https://instagram.com', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { href: 'https://linkedin.com', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileIndustries, setMobileIndustries] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-2xl shadow-black/30' : ''}`}>
      {/* Top utility bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#0d1b2a] border-b border-white/5 text-white text-xs"
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {socialPaths.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-[#3e91ce] transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-6 text-gray-400">
            <a href="tel:1300029804" className="flex items-center gap-1.5 hover:text-[#3e91ce] transition-colors group">
              <svg className="w-3 h-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              1300 029 804
            </a>
            <a href="mailto:info@pctanks.com.au" className="flex items-center gap-1.5 hover:text-[#3e91ce] transition-colors group">
              <svg className="w-3 h-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@pctanks.com.au
            </a>
            <span className="text-gray-600">Mon–Sun 8:30am–5pm</span>
          </div>
        </div>
      </motion.div>

      {/* Main nav bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`transition-all duration-500 ${scrolled ? 'bg-[#0d1b2a]/95 backdrop-blur-xl border-b border-white/5' : 'bg-white border-b border-gray-100'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative overflow-hidden">
              <Image
                src="/logo-colour.webp"
                alt="Pacific Water Tanks"
                width={180}
                height={50}
                className={`h-12 w-auto transition-all duration-500 group-hover:scale-105 ${
                  scrolled ? 'brightness-0 invert' : ''
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors animated-underline ${
                  scrolled ? 'text-gray-300 hover:text-white' : 'text-[#30505b] hover:text-[#3e91ce]'
                } ${pathname === item.href ? 'text-[#3e91ce]' : ''}`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3e91ce]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-300 hover:text-white' : 'text-[#30505b] hover:text-[#3e91ce]'
                }`}
              >
                Services
                <motion.svg
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 bg-[#0d1b2a] border border-white/10 rounded-2xl py-3 z-50 shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    <div className="px-3 mb-2">
                      <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase">Our Services</p>
                    </div>
                    {services.map((s, i) => (
                      <motion.div
                        key={s.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <Link
                          href={s.href}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all rounded-lg mx-1"
                        >
                          <span className="text-[#3e91ce] flex-shrink-0">{s.icon}</span>
                          {s.label}
                        </Link>
                      </motion.div>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2 px-3">
                      <Link
                        href="/services"
                        className="flex items-center gap-2 text-sm font-semibold text-[#3e91ce] hover:text-white transition-colors"
                      >
                        View All Services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-300 hover:text-white' : 'text-[#30505b] hover:text-[#3e91ce]'
                }`}
              >
                Industries
                <motion.svg
                  animate={{ rotate: industriesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-72 bg-[#0d1b2a] border border-white/10 rounded-2xl py-3 z-50 shadow-2xl shadow-black/50"
                  >
                    <div className="px-3 mb-2">
                      <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase">Industries We Serve</p>
                    </div>
                    {industries.map((ind, i) => (
                      <motion.div
                        key={ind.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={ind.href}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all rounded-lg mx-1"
                        >
                          <span className="text-[#3e91ce] flex-shrink-0">{ind.icon}</span>
                          {ind.label}
                        </Link>
                      </motion.div>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2 px-3">
                      <Link
                        href="/industries"
                        className="flex items-center gap-2 text-sm font-semibold text-[#3e91ce] hover:text-white transition-colors"
                      >
                        View All Industries
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="glow-btn bg-[#3e91ce] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d7ab8] transition-all duration-300 hover:scale-105"
            >
              Discuss a Project
            </Link>
            <Link
              href="/resources"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 border ${
                scrolled
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-[#30505b] text-[#30505b] hover:bg-[#30505b] hover:text-white'
              }`}
            >
              Capability Statement
            </Link>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-white' : 'text-[#30505b]'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                transition={{ duration: 0.2 }}
                className={`block h-0.5 rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-[#30505b]'}`}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className={`block h-0.5 rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-[#30505b]'}`}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                transition={{ duration: 0.2 }}
                className={`block h-0.5 rounded-full transition-colors ${scrolled ? 'bg-white' : 'bg-[#30505b]'}`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-[#0d1b2a] border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-white font-medium py-2.5 border-b border-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <button
                    className="flex items-center justify-between w-full text-gray-300 font-medium py-2.5 border-b border-white/5"
                    onClick={() => setMobileServices(!mobileServices)}
                  >
                    Services
                    <motion.svg
                      animate={{ rotate: mobileServices ? 180 : 0 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobileServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#3e91ce] py-1.5 transition-colors"
                          >
                            <span className="text-[#3e91ce]">{s.icon}</span> {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    className="flex items-center justify-between w-full text-gray-300 font-medium py-2.5 border-b border-white/5"
                    onClick={() => setMobileIndustries(!mobileIndustries)}
                  >
                    Industries
                    <motion.svg
                      animate={{ rotate: mobileIndustries ? 180 : 0 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobileIndustries && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {industries.map((ind) => (
                          <Link
                            key={ind.href}
                            href={ind.href}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#3e91ce] py-1.5 transition-colors"
                          >
                            <span className="text-[#3e91ce]">{ind.icon}</span> {ind.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <div className="pt-4 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#3e91ce] text-white px-4 py-3 rounded-full text-sm font-semibold"
                  >
                    Discuss a Project
                  </Link>
                  <Link
                    href="/resources"
                    className="block w-full text-center border border-white/20 text-white px-4 py-3 rounded-full text-sm font-semibold"
                  >
                    Capability Statement
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
