import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — Enquiry Received',
  description: 'Your enquiry has been received. The Pacific Water Tanks team will respond within one business day.',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F4F6F8] flex items-center justify-center pt-24">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-[#3e91ce] rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Enquiry Received</p>
        <h1 className="text-4xl font-black text-[#30505b] mb-4">THANK YOU — WE&apos;LL BE IN TOUCH</h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Your enquiry has been received and the Pacific Water Tanks team will review your project details and respond <strong>within one business day</strong>.
        </p>

        {/* What happens next */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10 text-left">
          <h2 className="font-black text-[#30505b] mb-6 text-center">WHAT HAPPENS NEXT</h2>
          <div className="space-y-5">
            {[
              { step: '01', title: 'Enquiry Review', desc: 'We review your project details and any attached documentation to understand your requirements.' },
              { step: '02', title: 'Team Contact', desc: 'Michael Spiller or a member of our project team will contact you by phone or email to discuss your needs in detail.' },
              { step: '03', title: 'Tailored Proposal', desc: 'We provide a tailored project proposal, capability overview, or recommendation — depending on your project stage and requirements.' },
            ].map((step) => (
              <div key={step.step} className="flex gap-4">
                <span className="text-[#3e91ce] font-black text-lg flex-shrink-0 w-8">{step.step}</span>
                <div>
                  <p className="font-bold text-[#30505b] mb-1">{step.title}</p>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgent contact */}
        <div className="bg-[#30505b] rounded-xl p-5 mb-10 text-white">
          <p className="font-semibold mb-2">Need to speak to us urgently?</p>
          <p className="text-gray-300 text-sm mb-3">Call us directly on:</p>
          <a href="tel:1300029804" className="text-[#3e91ce] font-black text-xl hover:underline">1300 029 804</a>
        </div>

        {/* Explore more */}
        <h2 className="font-black text-[#30505b] mb-6">EXPLORE RELEVANT PAGES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Our Services', href: '/services', desc: 'See the full range of services we deliver' },
            { label: 'Our Projects', href: '/projects', desc: 'View our project portfolio' },
            { label: 'RPVC Liner Systems', href: '/services/rpvc-liner-systems', desc: 'Extend tank life by 20+ years' },
            { label: 'Fire Water Solutions', href: '/services/fire-water-tanks', desc: 'AS2304 compliant fire water tanks' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#3e91ce]/30 hover:shadow-md transition-all text-left group">
              <p className="font-bold text-[#30505b] group-hover:text-[#3e91ce] transition-colors mb-1">{link.label}</p>
              <p className="text-gray-400 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>

        <Link href="/" className="text-[#3e91ce] text-sm font-semibold hover:underline">
          ← Return to Homepage
        </Link>
      </div>
    </main>
  )
}
