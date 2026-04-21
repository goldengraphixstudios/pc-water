'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

interface FAQ {
  question: string
  answer: string
}

export default function FAQBlock({ faqs, heading = 'FREQUENTLY ASKED QUESTIONS' }: { faqs: FAQ[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ FAQs</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#30505b]">{heading}</h2>
        </AnimatedSection>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open === i
                    ? 'border-[#3e91ce]/40 shadow-lg shadow-[#3e91ce]/5'
                    : 'border-gray-200 hover:border-[#3e91ce]/30'
                }`}
                whileHover={{ scale: open === i ? 1 : 1.005 }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-bold text-[#30505b] pr-4 leading-snug">{faq.question}</span>
                  <motion.div
                    animate={{
                      rotate: open === i ? 45 : 0,
                      backgroundColor: open === i ? '#3e91ce' : 'transparent',
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${open === i ? 'text-white' : 'text-[#30505b]'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
