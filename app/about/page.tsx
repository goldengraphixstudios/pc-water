import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'PC Water Infrastructure — Australian-owned water storage engineering specialists since 2013. 20+ years combined expertise, zero injury record, nationwide coverage.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1b2a] via-[#30505b] to-[#3e91ce] pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ About PC Water Infrastructure</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            SHAPING THE FUTURE<br />OF WATER STORAGE
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            20+ years of expertise. Australian-owned. Standards-led. Engineering water storage solutions for the projects that matter most.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#2d7ab8] transition-colors">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Company intro */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Who We Are</p>
              <h2 className="text-3xl font-black text-[#30505b] mb-6">Australian-Owned. Engineering-Led. Standards-First.</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                PC Water Infrastructure was founded in 2013 with a single purpose: to deliver engineered water storage solutions that genuinely meet the demands of Australia's most challenging projects. We are not a product supplier with an installation team. We are an engineering-led organisation that designs, builds, inspects, and maintains water storage infrastructure for the long term.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team brings 20+ years of combined expertise across water infrastructure engineering, remote project delivery, fire system compliance, and tank lifecycle management. We have delivered to some of Australia's most remote communities, major industrial facilities, government agencies, and commercial properties.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What sets us apart is not just what we build — it is how we build it. With RPEQ-certified engineering, zero injury safety culture, and a track record that speaks to genuine delivery capability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '2013', label: 'Founded', sub: 'Australian-owned since day one' },
                { stat: '20+', label: 'Years Expertise', sub: 'Combined team experience' },
                { stat: 'Zero', label: 'Injury Record', sub: 'On major projects' },
                { stat: '5+', label: 'States Delivered', sub: 'National reach & capability' },
              ].map((item) => (
                <div key={item.label} className="bg-[#F4F6F8] rounded-xl p-6 text-center">
                  <p className="text-3xl font-black text-[#30505b]">{item.stat}</p>
                  <p className="font-bold text-[#30505b] text-sm mt-1">{item.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Our Values</p>
            <h2 className="text-3xl font-black text-[#30505b]">WHAT DRIVES EVERYTHING WE DO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Honesty', desc: 'We tell you what you need to hear — not what you want to hear. Our assessments are honest, our recommendations are based on what is genuinely best for your project.' },
              { title: 'Safety First', desc: 'Our zero injury record is not a coincidence. It is the result of an embedded safety culture — where every person on every site prioritises safety above all else.' },
              { title: 'Community Focus', desc: 'We believe safe water is a right, not a privilege. Our work in remote and Indigenous communities reflects a genuine commitment to improving lives through infrastructure.' },
              { title: 'Technical Rigour', desc: 'We hold our engineering to the highest standard. Every design is certified, every installation documented, every compliance requirement met.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-0.5 bg-[#3e91ce] mb-4" />
                <h3 className="font-bold text-[#30505b] text-lg mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Specialisations</p>
            <h2 className="text-3xl font-black text-[#30505b]">WHERE WE FOCUS OUR EXPERTISE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Remote & Regional Project Delivery',
              'Tank Upgrades & RPVC Liner Systems',
              'Government & Council Projects',
              'Panel Integration & Procurement Support',
              'Advanced Inspection Technology',
              'Collaborative Delivery Partnerships',
            ].map((area) => (
              <div key={area} className="flex items-center gap-3 bg-[#F4F6F8] rounded-xl p-5">
                <span className="w-2 h-2 bg-[#3e91ce] rounded-full flex-shrink-0" />
                <span className="font-semibold text-[#30505b] text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#30505b] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ Our Vision</p>
          <h2 className="text-3xl font-black text-white mb-6">PIONEERING A NEW ERA OF WATER STORAGE ENGINEERING</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our vision is to be Australia's most trusted water storage engineering firm — recognised not for scale, but for the quality of our engineering, the reliability of our delivery, and the lasting impact our infrastructure has on the communities, industries, and environments we serve. Every tank we build, every liner we install, and every inspection we complete brings us closer to that vision.
          </p>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Our Journey</p>
            <h2 className="text-3xl font-black text-[#30505b]">WHERE WE HAVE COME FROM</h2>
          </div>
          <div className="space-y-6">
            {[
              { year: '2013', label: 'Founded', desc: 'PC Water Infrastructure established with a focus on engineering-led water storage solutions for demanding projects.' },
              { year: '2016', label: 'Growing Capability', desc: 'Expanded service range to include RPVC liner systems and tank inspection services, building specialist capability across the full asset lifecycle.' },
              { year: '2019', label: 'Remote Expansion', desc: 'Developed and formalised remote project delivery capability — including FIFO crew systems, Indigenous community engagement frameworks, and remote logistics expertise.' },
              { year: '2024', label: 'Advanced Inspection Technology', desc: 'Introduced ROV and UAV drone inspection technology, enabling superior condition assessment without dewatering and significantly reducing inspection cost and downtime for clients.' },
            ].map((milestone) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-[#3e91ce] font-black text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#30505b] mb-1">{milestone.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Leadership</p>
            <h2 className="text-3xl font-black text-[#30505b]">LEADING FROM THE FRONT</h2>
          </div>
          <div className="max-w-2xl mx-auto bg-[#F4F6F8] rounded-2xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 bg-[#30505b] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-3xl">MS</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#30505b] mb-1">Michael Spiller</h3>
                <p className="text-[#3e91ce] font-semibold text-sm mb-4">Director | Senior Project Engineer / Water Infrastructure Specialist</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Michael founded PC Water Infrastructure in 2013 and has led every significant project delivery since. As a Senior Project Engineer with deep expertise in water infrastructure, Michael brings a hands-on engineering approach to every client engagement — from initial project consultation through to final commissioning. His commitment to honest advice, technical rigour, and lasting outcomes defines the PC Water Infrastructure culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[#0d1b2a] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Why Choose Us</p>
            <h2 className="text-3xl font-black text-white">SEVEN REASONS TO CHOOSE PC WATER INFRASTRUCTURE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'RPEQ-certified engineering on every project — not off-the-shelf design',
              'Genuine remote project delivery capability — not subcontracted to unknown parties',
              'Full compliance documentation package included — no chasing required',
              'Zero injury safety record across major projects — embedded, not claimed',
              'Single point of accountability from design through to commissioning',
              'AS2304, AS4020, AS1851, ISO9001, ISO14001 — all standards, all covered',
              'Honest assessments — we recommend what is right, not what is most profitable',
            ].map((diff, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <span className="text-[#3e91ce] font-black text-lg flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="LET'S WORK TOGETHER"
        subheading="Schedule a free project consultation with Michael Spiller and the PC Water Infrastructure team."
        primaryCTA={{ label: 'Schedule a Free Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '#' }}
      />
    </>
  )
}
