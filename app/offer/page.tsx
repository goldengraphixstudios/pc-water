import type { Metadata } from 'next'
import Link from 'next/link'

import AppImage from '@/components/AppImage'
import OfferForm from '@/components/OfferForm'
import { getActiveOffer } from '@/lib/offers'

// Re-evaluate on every request so the offer auto-expires without a redeploy.
export const dynamic = 'force-dynamic'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export function generateMetadata(): Metadata {
  const offer = getActiveOffer()
  const title = offer
    ? `${offer.title} ${offer.titleHighlight} — ${offer.discounts[0]?.value} Off | PC Water`
    : 'Offers & Promotions | PC Water Infrastructure'
  const description = offer
    ? `${offer.audience}. ${offer.discounts.map((d) => `${d.value} ${d.label}`).join(' and ')}. Book before ${offer.endLabel}.`
    : 'Seasonal inspection and maintenance offers from PC Water Infrastructure. Register your interest or request a tailored quote for your water storage assets.'

  return {
    title,
    description,
    alternates: { canonical: '/offer' },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      siteName: 'PC Water Infrastructure',
      title,
      description,
      url: `${siteUrl}/offer`,
      images: [
        offer
          ? { url: offer.image, width: 1254, height: 1254, alt: offer.imageAlt }
          : { url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' },
      ],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function OfferPage() {
  const offer = getActiveOffer()

  if (!offer) {
    return <NoActiveOffer />
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0d1b2a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#12263b] to-[#1a3353]" />
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#3e91ce]/15 text-[#7fc2f0] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-[#3e91ce]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3e91ce] animate-pulse" />
              {offer.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
              {offer.title}
              <br />
              <span className="text-[#3e91ce]">{offer.titleHighlight}</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">{offer.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#claim"
                className="glow-btn text-center bg-[#2a72ad] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#246397] transition-colors"
              >
                Claim the Offer
              </Link>
              <a
                href={`tel:${offer.phone}`}
                className="text-center border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
              >
                Call {offer.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Offer graphic */}
          <div className="relative">
            <div className="absolute -inset-3 bg-[#3e91ce]/20 rounded-3xl blur-2xl" />
            <AppImage
              src={offer.image}
              alt={offer.imageAlt}
              width={1254}
              height={1254}
              priority
              className="relative w-full rounded-2xl shadow-2xl shadow-black/40 border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Discounts band */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offer.discounts.map((d) => (
              <div
                key={d.label}
                className="rounded-2xl border border-gray-100 bg-[#f8fbfe] p-8 shadow-sm flex flex-col"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-5xl font-black text-[#2a72ad] leading-none">{d.value}</span>
                  <span className="text-lg font-black text-[#30505b] leading-tight">{d.label}</span>
                </div>
                {d.note && <p className="text-gray-600 text-sm leading-relaxed">{d.note}</p>}
              </div>
            ))}
          </div>
          <p className="text-center text-[#30505b] font-semibold mt-8">{offer.audience}.</p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-[#F4F6F8] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Clarity Now, Not Crisis Later</p>
            <h2 className="text-3xl font-black text-[#30505b] mb-4">See what is actually happening inside your tank</h2>
            <p className="text-gray-600 leading-relaxed">
              No guessing. No delays. Just real visibility and a clear plan — before a hidden issue
              becomes an expensive one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offer.features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#3e91ce]/10 text-[#3e91ce] flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-black text-[#30505b] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim form */}
      <section id="claim" className="bg-white py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[0.85fr,1.15fr] gap-10">
          <div>
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Book Before {offer.endLabel}</p>
            <h2 className="text-3xl font-black text-[#30505b] mb-4">Claim your inspection offer</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Fill in your details and the team will get in touch within one business day to book your
              discounted drone / ROV inspection. Prefer to talk now? Call us directly.
            </p>

            <div className="space-y-4">
              <a href={`tel:${offer.phone}`} className="flex items-center gap-3 text-[#30505b] font-semibold hover:text-[#3e91ce] transition-colors">
                <span className="w-10 h-10 rounded-lg bg-[#3e91ce]/10 text-[#3e91ce] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                </span>
                {offer.phoneDisplay}
              </a>
              <a href={`tel:${offer.phoneSecondary}`} className="flex items-center gap-3 text-[#30505b] font-semibold hover:text-[#3e91ce] transition-colors">
                <span className="w-10 h-10 rounded-lg bg-[#3e91ce]/10 text-[#3e91ce] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" /></svg>
                </span>
                {offer.phoneSecondaryDisplay}
              </a>
              <a href={`mailto:${offer.email}`} className="flex items-center gap-3 text-[#30505b] font-semibold hover:text-[#3e91ce] transition-colors">
                <span className="w-10 h-10 rounded-lg bg-[#3e91ce]/10 text-[#3e91ce] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </span>
                {offer.email}
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-[#fed7aa] bg-[#fff7ed] px-5 py-4">
              <p className="text-xs font-bold text-[#c2410c] uppercase tracking-wide mb-1">Offer ends {offer.endLabel}</p>
              <p className="text-sm text-[#7c2d12] leading-relaxed">
                This promotion runs throughout July only. Book before it is gone.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f8fbfe] border border-gray-100 p-6 sm:p-8 shadow-sm">
            <OfferForm offer={offer} />
          </div>
        </div>
      </section>
    </>
  )
}

function NoActiveOffer() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#0d1b2a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#12263b] to-[#1a3353]" />
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#7fc2f0] text-xs font-bold tracking-widest uppercase mb-4">/ Offers &amp; Promotions</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">No live promotion right now</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
            We run seasonal inspection and maintenance offers throughout the year. There is no active
            promotion today — but there are still two ways to get ahead.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-[#f8fbfe] p-8 shadow-sm flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#3e91ce]/10 text-[#3e91ce] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h2 className="text-xl font-black text-[#30505b] mb-3">Be first to know</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
              Register your interest and we will notify you the moment our next inspection or
              maintenance promotion goes live — before it is advertised publicly.
            </p>
            <Link
              href="/contact"
              className="glow-btn text-center bg-[#2a72ad] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#246397] transition-colors"
            >
              Register My Interest
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#f8fbfe] p-8 shadow-sm flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-[#3e91ce]/10 text-[#3e91ce] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-black text-[#30505b] mb-3">Request a tailored quote</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
              Not every good deal waits for a campaign. Tell us about your tanks and site and we will
              scope a competitive, condition-based inspection and maintenance proposal now.
            </p>
            <Link
              href="/contact"
              className="text-center border border-[#30505b] text-[#30505b] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#30505b] hover:text-white transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Free tools nudge */}
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="rounded-2xl bg-[#0d1b2a] p-8 text-center">
            <p className="text-[#7fc2f0] text-xs font-bold tracking-widest uppercase mb-3">/ In the meantime</p>
            <h3 className="text-2xl font-black text-white mb-3">Get an instant read on your tank — free</h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
              Use our free assessment tools to gauge compliance risk and whether your tank needs a
              repair, reline, or replacement — no cost, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tools/tank-compliance-checker" className="bg-[#2a72ad] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#246397] transition-colors">
                Check Compliance Risk
              </Link>
              <Link href="/tools/repair-reline-replace" className="border border-white/30 text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors">
                Repair, Reline or Replace?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
