import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Pacific Water Tanks to discuss your water storage project. Phone: 1300 029 804. Email: info@pctanks.com.au. We respond within one business day.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
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
                    value: 'info@pctanks.com.au',
                    href: 'mailto:info@pctanks.com.au',
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

              {/* Director */}
              <div className="mt-8 bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-xs font-bold text-[#3e91ce] uppercase tracking-wide mb-2">Director</p>
                <p className="font-bold text-[#30505b]">Michael Spiller</p>
                <p className="text-gray-500 text-sm">Senior Project Engineer<br />Water Infrastructure Specialist</p>
              </div>

              {/* What happens next */}
              <div className="mt-8">
                <h3 className="font-black text-[#30505b] mb-4">WHAT HAPPENS NEXT</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', desc: 'We review your enquiry and project details within 1 business day.' },
                    { step: '02', desc: 'Michael or our project team contacts you to discuss your requirements.' },
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
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-black text-[#30505b] mb-6">PROJECT ENQUIRY FORM</h2>
                {/* Note: form submission requires backend integration */}
                <form
                  method="POST"
                  action="/thank-you"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="firstName" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="company">Company / Organisation</label>
                    <input id="company" name="company" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="state">State / Region</label>
                      <select id="state" name="state" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors bg-white">
                        <option value="">Select state...</option>
                        {['QLD', 'NSW', 'VIC', 'TAS', 'SA', 'WA', 'NT', 'ACT', 'Remote'].map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="industry">Industry</label>
                      <select id="industry" name="industry" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors bg-white">
                        <option value="">Select industry...</option>
                        {['Government/Council', 'Mining/Resources', 'Industrial', 'Commercial/Fire', 'Remote Community', 'Other'].map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="service">Service Needed</label>
                      <select id="service" name="service" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors bg-white">
                        <option value="">Select service...</option>
                        {[
                          'Custom Tank Design & Engineering',
                          'Professional Tank Installation',
                          'Foundation & Civil Integration',
                          'Fire Water Tank Solutions',
                          'Remote Area Project Delivery',
                          'Tank Maintenance & Upgrades',
                          'Tank Inspection Technology',
                          'RPVC Liner Systems',
                          'Tender & Procurement Support',
                          'Builder & Contractor Partnerships',
                        ].map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="stage">Project Stage</label>
                      <select id="stage" name="stage" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors bg-white">
                        <option value="">Select stage...</option>
                        {['Early Planning', 'Design Phase', 'Ready to Quote', 'Urgent'].map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="timeline">Estimated Timeline</label>
                      <input id="timeline" name="timeline" type="text" placeholder="e.g. 3–6 months" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="budget">Estimated Budget Range</label>
                      <input id="budget" name="budget" type="text" placeholder="e.g. $50k–$100k" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="tankType">Tank Type / Application</label>
                    <input id="tankType" name="tankType" type="text" placeholder="e.g. Fire water tank, potable storage, process water..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="message">Project Description / Message *</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project, site, and requirements..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors resize-none" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="file">File Upload (optional)</label>
                    <input id="file" name="file" type="file" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#3e91ce] file:text-white" accept=".pdf,.doc,.docx,.jpg,.png" />
                    <p className="text-xs text-gray-400 mt-1">Accepted: PDF, DOC, DOCX, JPG, PNG (max 10MB)</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3e91ce] text-white py-4 rounded-lg font-bold hover:bg-[#2d7ab8] transition-colors text-sm tracking-wide"
                  >
                    Submit Enquiry — We Reply Within 1 Business Day
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Your information is kept strictly confidential and will only be used to respond to your enquiry.
                  </p>
                </form>

                {/* Tawk.to placeholder */}
                {/*
                  TODO: Add Tawk.to live chat script here.
                  Replace with your Tawk.to property ID and widget ID:
                  <script type="text/javascript">
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true; s1.src='https://embed.tawk.to/PROPERTY_ID/WIDGET_ID';
                    s1.charset='UTF-8'; s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0); })();
                  </script>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
