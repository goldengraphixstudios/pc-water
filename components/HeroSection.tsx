'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const particles = [
  { size: 4, top: '20%', left: '10%', delay: 0 },
  { size: 6, top: '60%', left: '5%', delay: 1.5 },
  { size: 3, top: '30%', right: '8%', delay: 0.8 },
  { size: 5, top: '70%', right: '15%', delay: 2 },
  { size: 4, top: '45%', left: '25%', delay: 1.2 },
  { size: 3, top: '15%', right: '25%', delay: 0.4 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Pacific Water Tanks — engineered water storage infrastructure"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0d1b2a]/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/60 via-transparent to-[#3e91ce]/10" />

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
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#3e91ce] text-sm font-bold tracking-widest uppercase mb-6"
        >
          / Established In 2013
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight"
        >
          ENGINEERED<br />
          <span className="gradient-text">WATER STORAGE</span><br />
          SOLUTIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Purpose-built water storage systems for demanding infrastructure, remote environments, and compliance-critical projects across Australia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/contact"
            className="glow-btn bg-[#3e91ce] text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#2d7ab8] transition-all duration-300 hover:scale-105"
          >
            Discuss a Project
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            View Our Services
          </Link>
        </motion.div>

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
