import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact PC Water Infrastructure to discuss your water storage project. Phone: 1300 029 804. Email: info@pacificwatergroup.com.au. We respond within one business day.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">LET&apos;S DISCUSS YOUR PROJECT</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your water storage challenge. We respond to all enquiries within one business day.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-black text-[#30505b] mb-6">CONTACT DETAILS</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                    ),
                    label: 'Phone',
                    value: '1300 029 804',
                    href: 'tel:1300029804',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                    ),
                    label: 'Email',
                    value: 'info@pacificwatergroup.com.au',
                    href: 'mailto:info@pacificwatergroup.com.au',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                    ),
                    label: 'Address',
                    value: 'PO Box 961 Mudgeeraba, QLD 4213',
                    href: null,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                    ),
                    label: 'Hours',
                    value: 'Monday – Sunday | 8:30 AM – 5:00 PM',
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3e91ce]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#3e91ce]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#30505b] font-semibold hover:text-[#3e91ce] transition-colors text-sm">{item.value}</a>
                      ) : (
                        <p className="text-[#30505b] font-semibold text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div className="mt-8">
                <h3 className="font-black text-[#30505b] mb-4">WHAT HAPPENS NEXT</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', desc: 'We review your enquiry and project details within 1 business day.' },
                    { step: '02', desc: 'Our specialists will contact you to discuss your requirements.' },
                    { step: '03', desc: 'We provide a tailored proposal or capability overview for your project.' },
                  ].map((step) => (
                    <div key={step.step} className="flex items-start gap-3">
                      <span className="text-[#3e91ce] font-black text-sm flex-shrink-0 w-8">{step.step}</span>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
