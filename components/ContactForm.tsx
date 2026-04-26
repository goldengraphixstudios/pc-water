'use client'
import LocationSelector from '@/components/LocationSelector'

const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors'
const labelCls = 'block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5'

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-xl font-black text-[#30505b] mb-6">PROJECT ENQUIRY FORM</h2>
      <form method="POST" action="/thank-you" className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="firstName">First Name *</label>
            <input id="firstName" name="firstName" type="text" required className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="lastName">Last Name *</label>
            <input id="lastName" name="lastName" type="text" required className={inputCls} />
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="company">Company / Organisation</label>
          <input id="company" name="company" type="text" className={inputCls} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email" required className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" className={inputCls} />
          </div>
        </div>

        {/* Cascading location selector */}
        <LocationSelector />

        <div>
          <label className={labelCls} htmlFor="industry">Industry</label>
          <select id="industry" name="industry" className={`${inputCls} bg-white`}>
            <option value="">Select industry...</option>
            {['Government/Council','Mining/Resources','Industrial','Commercial/Fire','Remote Community','Other'].map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="service">Service Needed</label>
            <select id="service" name="service" className={`${inputCls} bg-white`}>
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
            <label className={labelCls} htmlFor="stage">Project Stage</label>
            <select id="stage" name="stage" className={`${inputCls} bg-white`}>
              <option value="">Select stage...</option>
              {['Early Planning','Design Phase','Ready to Quote','Urgent'].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="timeline">Estimated Timeline</label>
            <input id="timeline" name="timeline" type="text" placeholder="e.g. 3–6 months" className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="budget">Estimated Budget Range</label>
            <input id="budget" name="budget" type="text" placeholder="e.g. $50k–$100k" className={inputCls} />
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="tankType">Tank Type / Application</label>
          <input
            id="tankType"
            name="tankType"
            type="text"
            placeholder="e.g. Fire water tank, potable storage, process water..."
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="message">Project Description / Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, site, and requirements..."
            className={`${inputCls} resize-none`}
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="file">File Upload (optional)</label>
          <input
            id="file"
            name="file"
            type="file"
            className={`${inputCls} file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#3e91ce] file:text-white`}
            accept=".pdf,.doc,.docx,.jpg,.png"
          />
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
    </div>
  )
}
