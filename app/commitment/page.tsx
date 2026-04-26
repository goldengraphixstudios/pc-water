import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Our Commitment',
  description:
    'PC Water Infrastructure commitment to safety, quality, sustainability, and community — including our SQE policies, engineering standards, and Indigenous engagement principles.',
}

export default function CommitmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Our Commitment</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            DRIVEN BY SAFETY, QUALITY,<br />AND SUSTAINABILITY IN EVERY<br />PROJECT WE DELIVER
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Our commitment to safety, quality, and the environment is not a policy document — it is embedded in how we work, how we engage, and how we measure success on every project.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#30505b] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Our Mission</p>
          <h2 className="text-3xl font-black text-white mb-4">SAFE WATER IS NOT A PRIVILEGE. IT IS A RIGHT.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            From remote Indigenous communities to major industrial facilities, every person deserves access to safe, reliable water. PC Water Infrastructure exists to deliver the infrastructure that makes that possible — with technical excellence, genuine care, and lasting commitment.
          </p>
        </div>
      </section>

      {/* How we commit */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#30505b]">HOW WE COMMIT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Who We Serve',
                desc: 'We serve government agencies, councils, mining operations, industrial facilities, commercial properties, and remote communities — all with the same standard of engineering excellence and safety commitment. Every client, every project, every time.',
              },
              {
                title: 'Engineering Standards',
                desc: 'Our engineering standards are not minimums — they are a floor. We design, build, and maintain to AS2304, AS4020, AS1851, ISO9001, and ISO14001. Every project carries full RPEQ-certified engineering documentation.',
              },
              {
                title: 'Country Acknowledgement',
                desc: 'We acknowledge the Traditional Custodians of the lands on which we work and pay our respects to Elders past, present and emerging. Our commitment to country is reflected in our environmental management practices and community engagement approach.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#F4F6F8] rounded-xl p-6 border border-gray-100">
                <div className="w-8 h-0.5 bg-[#3e91ce] mb-4" />
                <h3 className="font-bold text-[#30505b] text-lg mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector commitment */}
      <section className="bg-[#0d1b2a] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">SAFE WATER. EVERY SECTOR. NO EXCEPTIONS.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sector: 'Private / Commercial',
                items: ['Fire water compliance from day one', 'Annual AS1851 inspection programs', 'Tank lifecycle planning', 'Asset protection advice'],
              },
              {
                sector: 'Government / Councils',
                items: ['Tender-ready documentation', 'Full compliance certification', 'Public asset accountability', 'Long-term maintenance programs'],
              },
              {
                sector: 'Remote Communities',
                items: ['Indigenous community engagement', 'Cultural sensitivity first', 'Long-term reliability focus', 'Local employment support'],
              },
            ].map((col) => (
              <div key={col.sector} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-[#3e91ce] font-black text-sm tracking-widest uppercase mb-4">{col.sector}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indigenous Engagement */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Indigenous Engagement</p>
          <h2 className="text-3xl font-black text-[#30505b] mb-6">OUR COMMITMENT TO COUNTRY AND COMMUNITY</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            PC Water Infrastructure acknowledges the Traditional Custodians of the land on which we work and live. We pay our respects to Elders past, present and emerging. This acknowledgement is not performative — it reflects our genuine commitment to respectful engagement with Indigenous communities and our ongoing responsibility to deliver projects that benefit, not burden, the communities we work alongside.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            In practice, our Indigenous engagement commitment means: we engage with community elders and representatives before and during projects on Traditional land; we support and prioritise local employment on community projects; we design and deliver infrastructure that serves communities for decades; and we manage environmental impacts with the seriousness that Traditional land deserves.
          </p>
          <div className="bg-[#30505b] rounded-xl p-6 text-white">
            <p className="text-sm italic text-gray-200 leading-relaxed">
              "PC Water Infrastructure acknowledges the Traditional Custodians of the land on which we work and live. We pay our respects to Elders past, present and emerging."
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Standards</p>
            <h2 className="text-3xl font-black text-[#30505b]">ENGINEERING STANDARDS WE WORK TO</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { code: 'AS1851', label: 'Fire System Maintenance', desc: 'Annual fire protection maintenance' },
              { code: 'ISO9001', label: 'Quality Management', desc: 'Quality management systems' },
              { code: 'ISO14001', label: 'Environmental Management', desc: 'Environmental management systems' },
              { code: 'AS2304', label: 'Water Storage Tanks', desc: 'Water storage for fire protection' },
              { code: 'AS4020', label: 'Potable Water Contact', desc: 'Products in contact with drinking water' },
            ].map((std) => (
              <div key={std.code} className="bg-[#F4F6F8] rounded-xl p-5 text-center border border-gray-100">
                <p className="text-[#3e91ce] font-black text-lg mb-1">{std.code}</p>
                <p className="text-[#30505b] text-xs font-semibold mb-2">{std.label}</p>
                <p className="text-gray-400 text-xs">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy cards */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Policies</p>
            <h2 className="text-3xl font-black text-[#30505b]">OUR SQE POLICIES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                policy: 'Safety Policy',
                icon: (
                  <svg className="w-10 h-10 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                desc: 'Zero harm is our target. Every project operates under comprehensive Safety Management Plans, JSA/SWMS documentation, and daily toolbox talks. Our safety culture is embedded — not aspirational.',
              },
              {
                policy: 'Quality Policy',
                icon: (
                  <svg className="w-10 h-10 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                desc: 'We hold our delivery to AS and ISO quality standards. Every project includes full quality documentation — compliance testing, engineering certification, and systematic handover records.',
              },
              {
                policy: 'Environmental Policy',
                icon: (
                  <svg className="w-10 h-10 text-[#3e91ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                desc: 'We manage our environmental footprint on every project — from material selection through to waste management and site restoration. ISO14001 principles guide our environmental management approach.',
              },
            ].map((card) => (
              <div key={card.policy} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-black text-[#30505b] text-xl mb-3">{card.policy}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SQE Objectives */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#30505b]">SQE OBJECTIVES</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#30505b] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Objective</th>
                  <th className="px-6 py-4 text-left font-semibold">Target</th>
                  <th className="px-6 py-4 text-left font-semibold">Measurement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { obj: 'Zero workplace injury', target: 'Zero LTIs on all projects', measure: 'Monthly safety reporting' },
                  { obj: 'Compliance delivery', target: '100% of projects meet applicable AS standards', measure: 'Compliance audit at handover' },
                  { obj: 'Client satisfaction', target: 'High client satisfaction on all projects', measure: 'Post-project client review' },
                  { obj: 'Environmental impact', target: 'Minimal environmental footprint on all sites', measure: 'Environmental inspection records' },
                  { obj: 'On-schedule delivery', target: 'Project milestones met or exceeded', measure: 'Gantt progress reporting' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F4F6F8]' : 'bg-white'}>
                    <td className="px-6 py-4 text-[#30505b] font-medium">{row.obj}</td>
                    <td className="px-6 py-4 text-gray-600">{row.target}</td>
                    <td className="px-6 py-4 text-gray-500">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner
        heading="OUR COMMITMENT IN ACTION"
        subheading="Discuss your project with a team that puts safety, quality, and community at the centre of everything we do."
        primaryCTA={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '#' }}
        variant="navy"
      />
    </>
  )
}
