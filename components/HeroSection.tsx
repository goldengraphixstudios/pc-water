'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { preload } from 'react-dom'

import { withBasePath } from '@/lib/base-path'

const particles = [
  { size: 4, top: '20%', left: '10%', delay: 0 },
  { size: 6, top: '60%', left: '5%', delay: 1.5 },
  { size: 3, top: '30%', right: '8%', delay: 0.8 },
  { size: 5, top: '70%', right: '15%', delay: 2 },
  { size: 4, top: '45%', left: '25%', delay: 1.2 },
  { size: 3, top: '15%', right: '25%', delay: 0.4 },
]

export default function HeroSection() {
  const heroVideoSrc = withBasePath('/hero-borumba.mp4')
  const heroPosterSrc = withBasePath('/hero-poster.webp')
  preload(heroPosterSrc, { as: 'image', fetchPriority: 'high' })

  // The 5MB video repaints the hero area when its first frame decodes, which
  // resets LCP on slow connections — so the video only loads on desktop.
  // UA check rather than matchMedia: Lighthouse's mobile emulation reports a
  // wide viewport to matchMedia, but always carries a mobile UA.
  const [showVideo, setShowVideo] = useState(false)
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    if (!isMobile && window.matchMedia('(min-width: 768px)').matches) setShowVideo(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static poster — paints immediately and stays as the mobile background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroPosterSrc}
        alt="Borumba pumped hydro water infrastructure project — PC Water engineered tank delivery"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {showVideo && (
        <video
          className="hidden md:block absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPosterSrc}
          crossOrigin="anonymous"
          aria-hidden
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051422]/90 via-[#0a2535]/82 to-[#0d1b2a]/88" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2e4a]/50 via-transparent to-[#1a6080]/12" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#3e91ce]"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: 'left' in p ? p.left : undefined,
            right: 'right' in p ? p.right : undefined,
            opacity: 0.4,
          }}
          animate={{ y: [-12, 0, -12], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Rotating ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#3e91ce]/5 rotate-slow pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#3e91ce]/8 rotate-slow pointer-events-none"
        style={{ animationDirection: 'reverse', animationDuration: '15s' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-28 text-center sm:px-4 sm:pb-24 sm:pt-32">
        <p className="hero-rise mb-4 text-[#3e91ce] text-xs font-bold uppercase tracking-widest sm:mb-6 sm:text-sm">
          / Established In 2013
        </p>

        <h1 className="hero-slide mb-5 text-[2.6rem] font-black leading-[1.02] tracking-tight text-white sm:mb-6 sm:text-6xl md:text-7xl lg:text-8xl">
          ADVANCED
          <br />
          <span className="gradient-text">WATER ASSET</span>
          <br />
          SOLUTIONS
        </h1>

        <p className="hero-rise hero-rise-3 mx-auto mb-9 max-w-3xl text-base leading-relaxed text-gray-300 sm:mb-12 sm:text-xl">
          Designed. Built. Delivered.
        </p>

        <div className="hero-rise hero-rise-4 mb-10 flex flex-col items-stretch justify-center gap-3 sm:mb-14 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="glow-btn rounded-full bg-[#2a72ad] px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#246397] hover:scale-105 sm:px-10 sm:py-4"
          >
            Start Your Project Enquiry
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 sm:px-10 sm:py-4"
          >
            View Our Services
          </Link>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'AS2304 & AS4020 Compliant' },
            { label: 'Remote Capable' },
            { label: '20+ Years Experience' },
            { label: 'Zero Injury Record' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="flex items-center gap-2 glass text-white px-5 py-2.5 rounded-full text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full" />
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1200 0 960 60 720 30C480 0 240 60 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
