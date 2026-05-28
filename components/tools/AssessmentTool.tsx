'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { validateEmailLocally } from '@/lib/email-validation'
import { validateEmailWithServer } from '@/lib/email-validation-client'
import { toolConfigs } from '@/lib/tools/registry'
import type { AssessmentConfig, AssessmentResult, ResultTone } from '@/lib/tools/types'

const toneStyles: Record<ResultTone, { badge: string; bar: string; ring: string; label: string }> = {
  low: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'bg-emerald-500', ring: 'border-emerald-200', label: 'text-emerald-600' },
  moderate: { badge: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'bg-amber-500', ring: 'border-amber-200', label: 'text-amber-600' },
  high: { badge: 'bg-orange-50 text-orange-700 border-orange-200', bar: 'bg-orange-500', ring: 'border-orange-200', label: 'text-orange-600' },
  urgent: { badge: 'bg-red-50 text-red-700 border-red-200', bar: 'bg-red-500', ring: 'border-red-200', label: 'text-red-600' },
  info: { badge: 'bg-[#3e91ce]/10 text-[#2d7ab8] border-[#3e91ce]/30', bar: 'bg-[#3e91ce]', ring: 'border-[#3e91ce]/30', label: 'text-[#2d7ab8]' },
}

export default function AssessmentTool({ slug }: { slug: string }) {
  const config = toolConfigs[slug]
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const resultKey = useMemo(
    () => (config && showResult ? config.score(answers) : ''),
    [config, showResult, answers],
  )

  if (!config) return null

  const total = config.questions.length
  const answeredCount = Object.keys(answers).length
  const progress = showResult ? 100 : Math.round((answeredCount / total) * 100)
  const result = showResult ? config.results[resultKey] : null

  function choose(questionId: string, value: string) {
    const next = { ...answers, [questionId]: value }
    setAnswers(next)
    if (step < total - 1) {
      setStep(step + 1)
    } else {
      setShowResult(true)
    }
  }

  function restart() {
    setAnswers({})
    setStep(0)
    setShowResult(false)
  }

  const current = config.questions[step]

  return (
    <section className="bg-white py-16" id="assessment">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
            <span>{showResult ? 'Assessment complete' : `Question ${step + 1} of ${total}`}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full bg-[#3e91ce] rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showResult && current ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-2xl md:text-3xl font-black text-[#30505b] mb-2">{current.question}</h2>
              {current.helpText && <p className="text-gray-500 text-sm mb-6">{current.helpText}</p>}
              <div className="grid gap-3 mt-6">
                {current.options.map((opt) => {
                  const selected = answers[current.id] === opt.value
                  return (
                    <button
                      key={opt.value}
                      onClick={() => choose(current.id, opt.value)}
                      className={`text-left rounded-xl border p-4 transition-all hover:border-[#3e91ce] hover:bg-[#3e91ce]/[0.03] ${
                        selected ? 'border-[#3e91ce] bg-[#3e91ce]/[0.05] ring-2 ring-[#3e91ce]/20' : 'border-gray-200'
                      }`}
                    >
                      <span className="block font-semibold text-[#30505b]">{opt.label}</span>
                      {opt.description && <span className="block text-sm text-gray-500 mt-1">{opt.description}</span>}
                    </button>
                  )
                })}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#3e91ce] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}
            </motion.div>
          ) : result ? (
            <ResultView key="result" config={config} result={result} answers={answers} onRestart={restart} />
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ResultView({
  config,
  result,
  answers,
  onRestart,
}: {
  config: AssessmentConfig
  result: AssessmentResult
  answers: Record<string, string>
  onRestart: () => void
}) {
  const tone = toneStyles[result.tone]
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function submitLead(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg('')
    const local = validateEmailLocally(email)
    if (!local.ok) {
      setErrorMsg(local.reason)
      return
    }
    setStatus('sending')
    const server = await validateEmailWithServer(local.email)
    if (!server.ok) {
      setErrorMsg(server.reason ?? 'Please enter a valid email address.')
      setStatus('idle')
      return
    }
    await fetch('/api/tool-leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: local.email,
        toolSlug: config.slug,
        toolTitle: config.toolTitle,
        division: config.leadDivision,
        resultKey: result.key,
        resultLevel: result.level,
        answers,
      }),
    }).catch(() => null)
    setStatus('done')
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className={`rounded-2xl border ${tone.ring} overflow-hidden shadow-sm`}>
        <div className="px-6 py-6 border-b border-gray-100">
          <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${tone.badge} mb-4`}>
            {result.level}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#30505b] mb-3">{result.headline}</h2>
          <p className="text-gray-600 leading-relaxed">{result.summary}</p>
        </div>

        <div className="px-6 py-6 space-y-4">
          <div>
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-2">/ Why this result</p>
            {result.detail.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-3">{para}</p>
            ))}
          </div>
          <div className="rounded-xl bg-[#F4F6F8] p-5">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-2">/ Recommended next step</p>
            <p className="text-[#30505b] font-medium leading-relaxed">{result.recommendation}</p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="px-6 pb-6">
          <Link
            href={result.ctaHref}
            className="glow-btn inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#3e91ce] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#2d7ab8] transition-colors"
          >
            {result.ctaLabel}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Email capture */}
      <div className="mt-6 rounded-2xl border border-gray-200 p-6">
        {status === 'done' ? (
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#30505b]">You’re on the list</h3>
              <p className="text-gray-500 text-sm mt-1">
                We’ve logged your result. A specialist can follow up with a tailored summary — or reach us now on{' '}
                <a href="tel:1300029804" className="text-[#3e91ce] font-semibold">1300 029 804</a>.
              </p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-2">/ Email my summary</p>
            <h3 className="font-bold text-[#30505b] mb-1">Want a copy and a tailored follow-up?</h3>
            <p className="text-gray-500 text-sm mb-4">
              Enter your email and a PC Water specialist can send a detailed summary and answer questions about your tank. No spam — your details are never sold.
            </p>
            <form onSubmit={submitLead} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrorMsg('') }}
                placeholder="you@company.com.au"
                autoComplete="email"
                disabled={status === 'sending'}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3e91ce] focus:ring-2 focus:ring-[#3e91ce]/20 transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'sending' || !email.trim()}
                className="bg-[#30505b] hover:bg-[#253e47] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                {status === 'sending' ? 'Sending…' : 'Email My Summary'}
              </button>
            </form>
            {errorMsg && <p className="text-red-500 text-xs mt-2 font-medium">{errorMsg}</p>}
          </>
        )}
      </div>

      {/* Related links */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {result.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between rounded-xl border border-gray-200 px-5 py-4 hover:border-[#3e91ce] transition-colors group"
          >
            <span className="font-semibold text-[#30505b] text-sm">{link.label}</span>
            <svg className="w-4 h-4 text-[#3e91ce] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#3e91ce] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Start over
      </button>

      <p className="mt-6 text-xs text-gray-400 leading-relaxed">
        This tool provides general guidance only based on the answers you give. It is not a formal compliance
        certificate or engineering assessment. For a definitive position, request an inspection or assessment.
      </p>
    </motion.div>
  )
}
