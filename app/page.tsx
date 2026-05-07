import type { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/AppImage'
import AnimatedSection from '@/components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '@/components/StaggerContainer'
import AnimatedCounter from '@/components/AnimatedCounter'
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection'
import FAQBlock from '@/components/FAQBlock'
import PartnerMarquee from '@/components/PartnerMarquee'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'PC Water Infrastructure - Engineered Water Solutions',
  description:
    'PC Water Infrastructure delivers complete water infrastructure and water treatment solutions across Australia — project managed facilities, asset installation, RPVC lining, fire water compliance, and remote project delivery since 2013.',
}

const faqs = [
  {
    question: 'What water infrastructure services does PC Water Infrastructure provide?',
    answer:
      'PC Water Infrastructure is a one-stop partner for potable water and engineered water solutions across Australia. We deliver project-managed water infrastructure facilities, water treatment systems, remote area project delivery, and asset installation and commissioning — from initial design through to long-term asset management. Two specialist divisions — PC Water Solutions and PC Tanks — operate under one team, providing a single point of accountability at every stage of your project.',
  },
  {
    question: 'What is PC Water Solutions?',
    answer:
      'PC Water Solutions is our project delivery division — handling the full scope of civil construction, structural works, mechanical and process installation, pipeline and reticulation systems, SCADA and electrical, and water treatment plant integration. Whether it\'s a greenfield treatment facility or a major infrastructure upgrade, PC Water Solutions delivers across every state and territory in Australia, including remote and indigenous community projects.',
  },
  {
    question: 'What is PC Tanks?',
    answer:
      'PC Tanks is our specialist engineering and supply division for high-performance water storage systems. We design and manufacture a full range of bolted steel, GFS, and rectangular tanks — scalable across capacities and configurations, built to Australian Standards (AS2304 and AS4020) for potable, process, fire protection, and critical infrastructure applications. From concept design and detailed engineering through to manufacture and coordinated delivery, PC Tanks provides rapid, reliable supply engineered for durability and long-term asset performance in some of the harshest environments in Australia. Beyond new supply, PC Tanks delivers complete asset lifecycle services — including RPVC lining and corrosion protection systems, reservoir and liner inspections, liner maintenance and refurbishment, and ongoing tank maintenance programs. We also provide fire water tank compliance services to AS2304 and AS1851, covering inspection, certification, and maintenance for fire protection storage assets across all sectors.',
  },
  {
    question: 'Do you support water treatment plant design and delivery?',
    answer:
      'Yes. We deliver water treatment and potable water infrastructure — covering source water intake, chemical conditioning, filtration, UV and chlorine disinfection, and SCADA-controlled automated operation. Our water treatment capabilities serve regional councils, remote communities, and private operators across Australia.',
  },
  {
    question: 'Can you deliver water infrastructure to remote locations?',
    answer:
      'Remote project delivery is a core specialisation. We have extensive experience delivering to remote Queensland, Northern Territory, Western Australia, and Tasmania — including fly-in/fly-out team deployment, remote logistics coordination, and Indigenous community engagement.',
  },
  {
    question: 'Are your systems compliant with Australian standards?',
    answer:
      'Yes. All work is delivered to AS2304 (water storage tanks), AS4020 (potable water contact), AS1851 (fire system maintenance), and the Australian Drinking Water Guidelines (ADWG). Our engineers are RPEQ-certified and all documentation is available for tender and compliance purposes.',
  },
  {
    question: 'What is an RPVC liner and when do I need one?',
    answer:
      'RPVC (Rigid PVC) liners are installed inside existing tanks to prevent corrosion, restore structural integrity, and bring ageing assets back to potable water compliance. If your tank is corroding, leaking, or has failed an inspection, an RPVC liner can extend its life by 20+ years at a fraction of replacement cost.',
  },
  {
    question: 'Who do I contact to discuss a project?',
    answer:
      'Reach our team via the enquiry form at /contact, by phone on 1300 029 804, or by email at contact@pcwater.com.au. Our specialists respond to all enquiries within one business day.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── STATS ─── */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/water/water-17.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden />
        <div className="absolute inset-0 bg-[#0d1b2a]/88" />
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <StaggerContainer className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StaggerItem>
            <AnimatedCounter value="20+" label="Years Experience" sub="Combined team expertise" />
          </StaggerItem>
          <StaggerItem>
            <AnimatedCounter value="ML+" label="Litres Delivered" sub="Across all sectors" />
          </StaggerItem>
          <StaggerItem>
            <AnimatedCounter value="Zero" label="Injury Record" sub="Safety is non-negotiable" />
          </StaggerItem>
          <StaggerItem>
            <AnimatedCounter value="National" label="Coverage" sub="Every state & territory" />
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ─── PARTNERS MARQUEE ─── */}
      <PartnerMarquee />

      {/* ─── ABOUT US ─── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">
            <AnimatedSection>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ About Us</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#30505b] leading-tight mb-6">
                TWO SPECIALIST<br />
                <span className="text-[#3e91ce]">DIVISIONS.</span><br />
                ONE MISSION.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                PC Water Infrastructure is a national delivery partner for water storage and treatment infrastructure — providing fully integrated, end-to-end solutions with single-point accountability across design, supply, construction, and asset lifecycle management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong>PC Water Solutions</strong> is our full-scope delivery arm — executing complex water infrastructure and treatment facility works across civil construction, structural works, mechanical and process installation, pipeline and reticulation systems, and full treatment plant integration. From greenfield treatment plants to major upgrades, we deliver with precision in demanding and remote environments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong>PC Tanks</strong> is our specialist engineering and supply division — designing and manufacturing high-performance bolted steel water storage systems to Australian Standards for potable, process, fire protection, and critical infrastructure applications. Scalable, durable, engineered for long-term asset performance.
              </p>
              <p className="text-sm text-[#30505b] font-semibold border-l-2 border-[#3e91ce] pl-4 mb-8">
                No fragmentation. No interface risk. No blurred responsibility. One contract. One accountable partner. One standard.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#3e91ce] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#2d7ab8] transition-all duration-300 hover:scale-105"
                >
                  About PC Water Infrastructure
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border-2 border-[#30505b] text-[#30505b] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#30505b] hover:text-white transition-all duration-300"
                >
                  View Our Projects
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Founded', value: '2013', sub: 'Established in Queensland' },
                  { label: 'Coverage', value: 'National', sub: 'Every state & territory' },
                  { label: 'Safety Record', value: 'Zero', sub: 'LTI — non-negotiable culture' },
                  { label: 'Standards', value: 'AS2304', sub: 'AS4020 · AS1851 · ADWG' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F4F6F8] rounded-xl p-4 border-2 border-transparent hover:border-[#3e91ce]/30 transition-all duration-300"
                  >
                    <p className="text-[#3e91ce] font-black text-xl mb-0.5">{stat.value}</p>
                    <p className="font-bold text-[#30505b] text-xs mb-0.5">{stat.label}</p>
                    <p className="text-gray-500 text-[11px]">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 bg-gradient-to-br from-[#162538] to-[#30505b] rounded-xl p-4 text-white">
                <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-2">/ Our Two Divisions</p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { name: 'PC Water Solutions', role: 'Full-scope delivery — civil, structural, mechanical, process, pipelines, treatment plant integration' },
                    { name: 'PC Tanks', role: 'Engineering, design & supply of high-performance bolted steel water storage systems. We also restore and refurbish existing tanks — delivering RPVC lining systems and advanced corrosion protection technology to extend asset life by 20+ years and return ageing infrastructure to full compliance.' },
                  ].map((d) => (
                    <div key={d.name} className="bg-white/10 rounded-lg p-3">
                      <p className="font-bold text-white text-sm mb-0.5">{d.name}</p>
                      <p className="text-gray-300 text-xs leading-snug">{d.role}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-3">
                  PC Water Infrastructure — two divisions, one team. PC Water Solutions and PC Tanks delivering water infrastructure across Australia since 2013.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DELIVER ─── */}
      <section className="bg-[#F4F6F8] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ What We Deliver</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#30505b] leading-tight">
              WATER INFRASTRUCTURE<br />
              <span className="text-[#3e91ce]">FROM SOURCE TO SUPPLY</span>
            </h2>
            <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
              Complete water infrastructure capabilities — project managed, engineered to compliance, delivered anywhere in Australia.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {[
              {
                num: '01',
                title: 'Project Managed Water Infrastructure',
                desc: 'End-to-end project management across the full infrastructure lifecycle — from initial brief and design through to civil integration, commissioning, handover, and ongoing asset support.',
                iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
              },
              {
                num: '02',
                title: 'Water Treatment Solutions',
                desc: 'Potable water treatment infrastructure covering source water intake, chemical conditioning, filtration, UV and chlorine disinfection, and SCADA-controlled automated operation to ADWG compliance.',
                iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
              },
              {
                num: '03',
                title: 'Remote Area Project Delivery',
                desc: 'Specialist delivery for remote and regional Australia — FIFO teams, Indigenous community project experience, harsh environment material selection, and dedicated remote logistics coordination.',
                iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                num: '04',
                title: 'Asset Installation & Commissioning',
                desc: 'Certified installation crews with national reach. Site preparation, civil integration, Gantt-based project scheduling, commissioning, and full handover documentation — built for accountability.',
                iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                num: '05',
                title: 'RPVC Lining & Corrosion Protection',
                desc: 'High-performance RPVC liner systems installed to protect tanks from corrosion, restore potable water compliance, and extend asset service life by 20+ years. AS4020 compliant.',
                iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                num: '06',
                title: 'Inspection & Compliance Management',
                desc: 'Advanced ROV and UAV drone inspection for condition assessment without costly dewatering. AS1851 compliance reporting, detailed condition assessments, and targeted maintenance recommendations.',
                iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
              },
            ].map((cap) => (
              <StaggerItem key={cap.num}>
                <div className="group bg-white rounded-2xl p-7 border-2 border-transparent hover:border-[#3e91ce]/30 card-glow transition-all duration-500 h-full overflow-hidden relative">
                  <div className="absolute top-0 right-0 text-8xl font-black text-[#3e91ce]/5 select-none leading-none group-hover:text-[#3e91ce]/8 transition-colors duration-500">
                    {cap.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#3e91ce]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3e91ce] transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#3e91ce] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.iconPath} />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#30505b] text-lg mb-3">{cap.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3e91ce] to-[#30505b] group-hover:w-full transition-all duration-700" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border-2 border-[#30505b] text-[#30505b] px-8 py-4 rounded-full font-semibold hover:bg-[#30505b] hover:text-white transition-all duration-300 hover:scale-105 text-sm"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHO WE SERVE ─── */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/water/water-07.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden />
        <div className="absolute inset-0 bg-[#0d1b2a]/85" />
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Who We Serve</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              SAFE WATER.<br />
              <span className="gradient-text">EVERY SECTOR.</span>
            </h2>
            <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
              Three distinct sectors. One consistent standard of water infrastructure delivery — the postcode changes, the scale changes, the standard remains.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                idx: 1,
                title: 'Government & Councils',
                sub: 'Authorities & Public Infrastructure',
                desc: 'Councils and government authorities carry the obligation to deliver safe, compliant water to their communities — often with ageing infrastructure and increasing regulatory scrutiny. We support them from tender through to commissioning.',
                items: [
                  'Regional and local councils',
                  'Government-funded infrastructure upgrades',
                  'State water authority projects',
                  'Public health compliance programs',
                ],
              },
              {
                idx: 2,
                title: 'Mining, Industry & Resources',
                sub: 'Private & Commercial Operations',
                desc: 'For private operators, water infrastructure is a critical operational asset — and downtime is not an option. We deliver compliant potable and process water systems built around your production schedule, site constraints, and obligations.',
                items: [
                  'Mining and resources camp water supply',
                  'Industrial and manufacturing facilities',
                  'Commercial and agricultural operations',
                  'Remote operational site infrastructure',
                ],
              },
              {
                idx: 3,
                title: 'Remote & Indigenous Communities',
                sub: 'Where It Matters Most',
                desc: 'Across remote and regional Australia, communities face real water security challenges. We are committed to being part of the solution — through specialist remote project delivery and community-appropriate water infrastructure.',
                items: [
                  'Remote Indigenous communities',
                  'Government-funded remote water programs',
                  'Outback pastoral and agricultural regions',
                  'Off-grid community water treatment systems',
                ],
              },
            ].map((sector) => (
              <StaggerItem key={sector.title}>
                <div className="group glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#3e91ce]/20 border border-[#3e91ce]/30 flex items-center justify-center mb-5 flex-shrink-0 group-hover:bg-[#3e91ce] transition-all duration-300">
                    <span className="text-[#3e91ce] font-black text-sm group-hover:text-white transition-colors">0{sector.idx}</span>
                  </div>
                  <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-2">{sector.sub}</p>
                  <h3 className="font-bold text-white text-xl mb-4">{sector.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{sector.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {sector.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-[#3e91ce] rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── PROJECTS (dynamic — driven by CMS featured flag) ─── */}
      <FeaturedProjectsSection />

      {/* ─── WHY PC WATER INFRASTRUCTURE ─── */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/water/water-11.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden />
        <div className="absolute inset-0 bg-[#30505b]/88" />
        <div className="dot-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#162538]/40 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Our Difference</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">WHY PC WATER INFRASTRUCTURE</h2>
            <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-lg">
              Not a product supplier. A specialist water infrastructure company that understands every stage of the project lifecycle.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              {
                title: 'Engineering-Led Approach',
                desc: 'RPEQ-certified engineers design for your specific site, application, and regulatory environment — never off-the-shelf solutions.',
              },
              {
                title: 'Water Infrastructure Specialists',
                desc: 'From source water intake and treatment through to storage, distribution, and long-term asset management — we understand the full water infrastructure picture.',
              },
              {
                title: 'Standards-First Compliance',
                desc: 'AS2304, AS4020, AS1851, and ADWG compliance — we design within Australian standards and drinking water guidelines from day one through commissioning.',
              },
              {
                title: 'Remote Project Specialists',
                desc: "Remote delivery is not an afterthought — it is a core capability. Delivered to some of Australia's most inaccessible sites.",
              },
              {
                title: 'Full Lifecycle Support',
                desc: 'From initial design to decade-long maintenance programs, we stay with your infrastructure through its entire operational lifecycle.',
              },
              {
                title: 'Genuine Zero Injury Culture',
                desc: 'Our safety record results from embedded JSA/SWMS processes, daily toolbox talks, and a culture where safety is never traded for convenience.',
              },
            ].map((point, i) => (
              <StaggerItem key={point.title}>
                <div className="glass rounded-2xl p-7 hover:bg-white/10 transition-all duration-300 h-full group">
                  <div className="w-10 h-10 bg-[#3e91ce]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3e91ce] transition-colors duration-300">
                    <span className="text-[#3e91ce] font-black text-sm group-hover:text-white transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="w-8 h-0.5 bg-[#3e91ce] mb-4" />
                  <h3 className="font-bold text-white mb-3 text-lg">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── COMPLIANCE ─── */}
      <section className="bg-[#F4F6F8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Standards</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#30505b]">
              COMPLIANCE & PROCUREMENT CONFIDENCE
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" staggerDelay={0.07}>
            {[
              { code: 'AS2304', label: 'Water Storage Tanks' },
              { code: 'AS4020', label: 'Potable Water Products' },
              { code: 'AS1851', label: 'Fire System Maintenance' },
              { code: 'ISO9001', label: 'Quality Management' },
              { code: 'ADWG', label: 'Australian Drinking Water Guidelines' },
            ].map((std) => (
              <StaggerItem key={std.code}>
                <div className="group bg-white border-2 border-gray-100 hover:border-[#3e91ce] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#3e91ce]/10 hover:-translate-y-1">
                  <p className="text-[#3e91ce] font-black text-2xl mb-2">{std.code}</p>
                  <p className="text-[#30505b] text-xs font-semibold">{std.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection className="text-center mt-10">
            <Link
              href="/commitment"
              className="inline-flex items-center gap-2 text-[#3e91ce] font-semibold hover:gap-4 transition-all duration-300"
            >
              View Our Commitment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQBlock faqs={faqs} heading="FREQUENTLY ASKED QUESTIONS" />

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/water/water-05.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/88" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#3e91ce]/10 animate-ping pointer-events-none"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#3e91ce]/15 animate-ping pointer-events-none"
          style={{ animationDuration: '3s', animationDelay: '0.5s' }}
        />
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />

        <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-5">/ Get Started</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            READY TO DISCUSS<br />
            <span className="gradient-text">YOUR PROJECT?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Whether you need water treatment infrastructure, a new installation, a compliance fix, or a long-term
            maintenance partner — we are ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="glow-btn bg-[#3e91ce] text-white px-10 py-5 rounded-full font-bold hover:bg-[#2d7ab8] transition-all duration-300 hover:scale-105 text-base tracking-wide"
            >
              Discuss a Project
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 text-base tracking-wide"
            >
              Download Capability Statement
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
