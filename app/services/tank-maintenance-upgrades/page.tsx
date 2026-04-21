import type { Metadata } from 'next'
import Link from 'next/link'
import FAQBlock from '@/components/FAQBlock'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Tank Maintenance & Upgrades',
  description:
    'Planned and reactive maintenance, structural upgrades, corrosion treatment, and lifecycle extension for steel and concrete water storage assets across Australia.',
}

const faqs = [
  { question: 'How often should a water tank be maintained?', answer: 'At minimum, water tanks should be inspected annually and maintained on a schedule that reflects the inspection findings, operating environment, and age of the asset. In corrosive environments or with older assets, more frequent inspection and maintenance is warranted.' },
  { question: 'What is the difference between maintenance and an upgrade?', answer: 'Maintenance addresses existing conditions — cleaning, coating touch-ups, minor structural repairs, fitting replacement. An upgrade increases capacity, improves structural integrity, or extends the asset\'s life through more significant intervention like RPVC liner installation or structural reinforcement.' },
  { question: 'Can you extend the life of an aging tank rather than replacing it?', answer: 'In most cases, yes. Depending on the condition of the tank, options including RPVC liner installation, structural repair, and corrosion treatment can extend asset life by 20+ years at a fraction of replacement cost. Pacific Water Tanks provides honest assessments of what is achievable for each asset.' },
  { question: 'Do you provide emergency reactive maintenance?', answer: 'Yes. We respond to urgent maintenance requests where tank failure or compliance breaches require immediate attention. Contact us directly on 1300 029 804 to discuss urgent maintenance needs.' },
]

export default function TankMaintenancePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Tank Maintenance & Upgrades</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Planned and reactive maintenance, structural upgrades, and lifecycle extension for steel and concrete water storage assets — keeping your infrastructure performing for decades.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Discuss Maintenance
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Service Overview</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Protect Your Asset Investment</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Water storage tanks represent significant capital investment. Without planned maintenance, that investment deteriorates faster than necessary — leading to compliance failures, emergency repairs, and premature replacement. Pacific Water Tanks provides systematic maintenance programs that protect your asset and extend its operational life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From routine annual maintenance to major structural upgrades, our maintenance and upgrade services are inspection-led — meaning every recommendation is grounded in the actual condition of your asset, not generic assumptions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Inspection-based maintenance planning',
                'Corrosion treatment & coating',
                'Structural repair & reinforcement',
                'RPVC liner installation',
                'Capacity upgrade engineering',
                'Fitting & valve replacement',
                'Reactive emergency maintenance',
                'Long-term asset management',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-[#F4F6F8] rounded-lg p-4">
                  <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-[#30505b] font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#30505b] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">Maintenance vs. Upgrade — What Is Right For Your Asset?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Planned Maintenance</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Regular inspection-led maintenance prevents deterioration, maintains compliance, and extends asset life without major intervention.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {['Annual inspection program', 'Protective coating maintenance', 'Fitting and valve service', 'Minor structural repairs', 'AS1851 compliance (fire systems)'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Structural Upgrades</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">For tanks with significant deterioration or capacity constraints, targeted upgrades can restore functionality and extend life by decades.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {['RPVC liner installation', 'Structural reinforcement', 'Capacity expansion engineering', 'Roof replacement', 'Access & safety upgrades'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#30505b] mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government & Councils', 'Mining & Resources', 'Industrial Facilities', 'Commercial & Fire Compliance', 'Remote & Regional Communities'].map((ind) => (
              <span key={ind} className="bg-[#F4F6F8] border border-gray-200 text-[#30505b] px-5 py-2.5 rounded-full text-sm font-semibold">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} heading="Maintenance & Upgrades — FAQs" />
      <CTABanner heading="PROTECT YOUR WATER STORAGE ASSETS" subheading="Get an inspection-led maintenance assessment and protect your infrastructure investment." primaryCTA={{ label: 'Discuss Maintenance', href: '/contact' }} secondaryCTA={{ label: 'Download Maintenance Checklist', href: '#' }} />
    </>
  )
}
