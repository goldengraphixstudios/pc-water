import type { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/AppImage'
import AnimatedSection from '@/components/AnimatedSection'
import StaggerContainer, { StaggerItem } from '@/components/StaggerContainer'
import AnimatedCounter from '@/components/AnimatedCounter'
import ServiceCard from '@/components/ServiceCard'
import IndustryCard from '@/components/IndustryCard'
import ProjectCard from '@/components/ProjectCard'
import FAQBlock from '@/components/FAQBlock'
import PartnerMarquee from '@/components/PartnerMarquee'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'PC Water Infrastructure - Engineered Water Solutions',
  description:
    'PC Water Infrastructure delivers purpose-built water storage systems across Australia. Custom design, installation, RPVC liners, fire water, and remote project delivery since 2013.',
}

const services = [
  {
    title: 'Custom Tank Design & Engineering',
    description:
      'Purpose-built tank systems engineered to AS2304 & AS4020 for any capacity, site condition, or application.',
    href: '/services/custom-tank-design',
  },
  {
    title: 'Professional Tank Installation',
    description:
      'End-to-end installation with certified crews, national reach, and rigorous safety compliance.',
    href: '/services/tank-installation',
  },
  {
    title: 'Foundation & Civil Integration',
    description:
      'Engineered concrete foundations and civil integration for tanks of all sizes and site conditions.',
    href: '/services/foundation-civil-integration',
  },
  {
    title: 'Fire Water Tank Solutions',
    description:
      'AS2304-compliant fire water storage systems designed for commercial, industrial and mining applications.',
    href: '/services/fire-water-tanks',
  },
  {
    title: 'Remote Area Project Delivery',
    description:
      'Specialist delivery for remote and regional sites — logistics, site access, and local coordination.',
    href: '/services/remote-area-delivery',
  },
  {
    title: 'Tank Maintenance & Upgrades',
    description:
      'Planned and reactive maintenance, structural upgrades, and lifecycle extension for water storage assets.',
    href: '/services/tank-maintenance-upgrades',
  },
  {
    title: 'Tank Inspection Technology',
    description:
      'Advanced ROV and UAV-assisted tank inspection for accurate condition assessment without costly dewatering.',
    href: '/services/tank-inspection-technology',
  },
  {
    title: 'RPVC Liners',
    description:
      'High-performance RPVC liner installation to protect tanks, extend asset life, and meet potable water standards.',
    href: '/services/rpvc-liner-systems',
  },
  {
    title: 'Tender & Procurement Support',
    description:
      'Specialist procurement and tendering support for councils, government agencies, and major contractors.',
    href: '/services/tender-procurement-support',
  },
  {
    title: 'Builder & Contractor Partnerships',
    description:
      'Reliable subcontract partnerships for builders and civil contractors who need specialist water storage capability.',
    href: '/services/builder-contractor-partnerships',
  },
]

const industries = [
  {
    title: 'Government & Councils',
    description:
      'Compliant, accountable water storage for public assets — tender-ready, budget-conscious, community-focused.',
    href: '/industries/government-councils',
  },
  {
    title: 'Mining & Resources',
    description:
      'Robust water infrastructure for remote, harsh-environment mining operations with zero compromise on safety.',
    href: '/industries/mining-resources',
  },
  {
    title: 'Industrial Facilities',
    description:
      'Reliable process water and fire suppression systems engineered for industrial requirements.',
    href: '/industries/industrial-facilities',
  },
  {
    title: 'Commercial & Fire Compliance',
    description:
      'AS2304 fire water storage and AS1851 compliance for commercial properties — done right, every time.',
    href: '/industries/commercial-fire-compliance',
  },
  {
    title: 'Remote & Regional Communities',
    description:
      'Safe water access for remote and Indigenous communities — logistics mastered, communities respected.',
    href: '/industries/remote-regional-communities',
  },
]

const projects = [
  {
    title: 'Borumba Hydro Scheme',
    sector: 'Hydro Energy / Government',
    location: 'Borumba Dam, QLD',
    scope: '2 × 521KL tanks — potable and effluent storage',
    imageSrc: '/projects/borumba-01.jpg',
    imageAlt: 'Aerial view of Borumba Hydro tank installation',
    href: '/projects/borumba-hydro',
  },
  {
    title: 'Hobart Nyrstar Industrial',
    sector: 'Refurbish',
    location: 'Hobart, Tasmania',
    scope: 'Industrial tank refurbishment for a corrosive processing environment',
    imageSrc: '/projects/hobart-01.jpg',
    imageAlt: 'Aerial drone view of Hobart Nyrstar industrial tanks',
    href: '/projects/hobart-nyrstar',
  },
  {
    title: 'Doomadgee 2ML Reservoir',
    sector: 'Remote Community / Government',
    location: 'Doomadgee, QLD (Remote)',
    scope: '2ML ground-level reservoir for remote community water storage',
    imageSrc: '/projects/doomadgee-04.jpg',
    imageAlt: 'Aerial view of Doomadgee WTP tank installation',
    href: '/projects/doomadgee-wtp',
  },
]

const faqs = [
  {
    question: 'What tank sizes and configurations can PC Water Infrastructure design?',
    answer:
      'We design tanks from small 10KL installations through to multi-megalitre reservoirs. Every tank is purpose-engineered for the specific site, application, and compliance requirement — including dual-purpose potable and effluent storage, fire water tanks, and process water systems.',
  },
  {
    question: 'Are your tanks compliant with Australian standards?',
    answer:
      'Yes. All PC Water Infrastructure designs are engineered to AS2304 (water storage tanks), AS4020 (potable water contact), AS1851 (fire system maintenance), and relevant ISO standards. Our engineers are RPEQ-certified and all documentation is available for tender and compliance purposes.',
  },
  {
    question: 'Can you deliver to remote locations?',
    answer:
      'Remote project delivery is a core specialisation. We have extensive experience delivering to remote Queensland, Northern Territory, Western Australia, and Tasmania — including fly-in/fly-out team deployment, remote logistics coordination, and Indigenous community engagement.',
  },
  {
    question: 'What is an RPVC liner and when do I need one?',
    answer:
      'RPVC (Rigid PVC) liners are installed inside existing tanks to prevent corrosion, restore structural integrity, and bring aging assets back to potable water compliance. If your tank is corroding, leaking, or has failed an inspection, an RPVC liner can extend its life by 20+ years at a fraction of replacement cost.',
  },
  {
    question: 'How do your tank inspection services work?',
    answer:
      'We use advanced ROV (Remotely Operated Vehicle) and UAV (drone) technology to inspect tanks without requiring dewatering. This dramatically reduces downtime and cost. We provide detailed condition reports supporting AS1851 compliance and can recommend targeted maintenance or upgrades based on findings.',
  },
  {
    question: 'Do you support government tender processes?',
    answer:
      'Yes. We provide comprehensive tender and procurement support including capability statements, specification development, tender response assistance, and compliance documentation. Our track record on government projects makes us a credible and trusted panel partner.',
  },
  {
    question: 'What is the difference between a fire water tank and a standard storage tank?',
    answer:
      'Fire water tanks must be designed and installed specifically to AS2304 to ensure sufficient storage volume, flow rates, and pump system compatibility. They require annual inspections under AS1851. Standard storage tanks do not carry these compliance requirements. PC Water Infrastructure can design, install, and maintain both.',
  },
  {
    question: 'Who do I contact to discuss a project?',
    answer:
      'Reach our team via the enquiry form at /contact, by phone on 1300 029 804, or by email at info@pacificwatergroup.com.au. Our specialists respond to all enquiries within one business day.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── STATS ─── */}
      <section className="bg-[#0d1b2a] py-20 relative overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-30 pointer-events-none" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-4">/ About Us</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#30505b] leading-tight mb-6">
                TWO BRANDS.<br />
                <span className="text-[#3e91ce]">ONE TEAM.</span><br />
                ONE COMMITMENT.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                PC Water Infrastructure is the trading identity of two specialist divisions — <strong>PC Tanks</strong> and <strong>PC Water Solutions</strong> — operating together as part of the Pacific Water Group.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong>PC Tanks</strong> designs and supplies bolted steel water storage tanks, engineered to Australian standards for any capacity or application. <strong>PC Water Solutions</strong> delivers the full project lifecycle — installation, inspection, RPVC lining, maintenance, fire water compliance, and remote area delivery — across every state and territory in Australia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Together, we give our clients something rare in the water infrastructure sector: a single partner that covers design, supply, delivery, and long-term asset management — without handover risk, without gaps in accountability.
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
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Founded', value: '2013', sub: 'Established in Queensland' },
                  { label: 'Coverage', value: 'National', sub: 'Every state & territory' },
                  { label: 'Safety Record', value: 'Zero', sub: 'LTI — non-negotiable culture' },
                  { label: 'Standards', value: 'AS2304', sub: 'AS4020 · AS1851 · ISO9001' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#F4F6F8] rounded-2xl p-6 border-2 border-transparent hover:border-[#3e91ce]/30 transition-all duration-300">
                    <p className="text-[#3e91ce] font-black text-2xl mb-1">{stat.value}</p>
                    <p className="font-bold text-[#30505b] text-sm mb-1">{stat.label}</p>
                    <p className="text-gray-500 text-xs">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-gradient-to-br from-[#162538] to-[#30505b] rounded-2xl p-6 text-white">
                <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Our Footprint</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'PC Tanks', role: 'Tank Design & Supply' },
                    { name: 'PC Water Solutions', role: 'Project Delivery & Asset Management' },
                  ].map((d) => (
                    <div key={d.name} className="bg-white/10 rounded-xl p-4">
                      <p className="font-bold text-white text-sm mb-1">{d.name}</p>
                      <p className="text-gray-300 text-xs">{d.role}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  Part of the Pacific Water Group — delivering water infrastructure solutions across Australia since 2013.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── STAKES ─── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ The Stakes</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#30505b] leading-tight">
              THE COST OF GETTING<br />TANK INFRASTRUCTURE WRONG
            </h2>
            <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
              Inadequate water storage creates cascading risks across compliance, safety, and operations.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              {
                num: '01',
                title: 'Compliance Failures',
                desc: 'Non-compliant tanks expose operators to regulatory penalties, failed audits, and potential loss of operating licences.',
              },
              {
                num: '02',
                title: 'Corrosion & Asset Decline',
                desc: 'Untreated corrosion accelerates structural degradation, contaminating stored water and leading to costly emergency replacement.',
              },
              {
                num: '03',
                title: 'Fire Water Risk',
                desc: 'Fire water tanks that fail AS2304 or AS1851 annual inspection put lives, property, and insurance at serious risk.',
              },
              {
                num: '04',
                title: 'Project Delays',
                desc: 'Poor planning, under-qualified crews, or inadequate civil integration cause cascading delays and cost overruns.',
              },
              {
                num: '05',
                title: 'Lifecycle Cost Blowouts',
                desc: 'Cheap short-term decisions on tank selection or maintenance lead to exponentially higher lifecycle costs.',
              },
              {
                num: '06',
                title: 'Remote Environment Failures',
                desc: 'Remote sites demand specialist logistics and materials. Standard solutions fail rapidly in harsh environments.',
              },
            ].map((risk) => (
              <StaggerItem key={risk.num}>
                <div className="group relative bg-[#F4F6F8] rounded-2xl p-7 border-2 border-transparent hover:border-[#3e91ce]/30 card-glow transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-black text-[#3e91ce]/5 select-none leading-none group-hover:text-[#3e91ce]/10 transition-colors duration-500">
                    {risk.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#3e91ce]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#3e91ce] transition-colors duration-300">
                      <span className="text-[#3e91ce] font-black text-sm group-hover:text-white transition-colors">
                        {risk.num}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#30505b] text-lg mb-3">{risk.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{risk.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3e91ce] to-[#30505b] group-hover:w-full transition-all duration-700" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-gradient-to-b from-[#162538] to-[#1a2f3a] py-24 relative overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
              COMPLETE SOLUTIONS FOR WATER STORAGE{' '}
              <span className="gradient-text">DESIGN, INSPECTION & MAINTENANCE</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {services.map((service, idx) => (
              <StaggerItem key={service.href}>
                <ServiceCard {...service} number={idx + 1} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-[#3e91ce] border border-white/20 hover:border-[#3e91ce] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="bg-[#F4F6F8] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Industries</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#30505b]">BUILT FOR YOUR SECTOR</h2>
            <p className="text-gray-400 mt-5 text-lg">Every sector has unique demands. We understand yours.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {industries.map((ind) => (
              <StaggerItem key={ind.href}>
                <IndustryCard {...ind} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHY PC WATER INFRASTRUCTURE ─── */}
      <section className="bg-[#30505b] py-24 relative overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#162538]/50 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Our Difference</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">WHY PC WATER INFRASTRUCTURE</h2>
            <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-lg">
              Not a product supplier. A specialist engineering firm that understands water infrastructure from the
              ground up.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              {
                title: 'Engineering-Led Approach',
                desc: "RPEQ-certified engineers design for your specific site, application, and regulatory environment — never off-the-shelf solutions.",
              },
              {
                title: 'Standards-First Compliance',
                desc: 'AS2304, AS4020, AS1851, ISO9001, ISO14001 — we work within Australian and international standards from design through commissioning.',
              },
              {
                title: 'Remote Project Specialists',
                desc: "Remote delivery is not an afterthought — it is a core capability. Delivered to some of Australia's most inaccessible sites.",
              },
              {
                title: 'Full Lifecycle Support',
                desc: 'From initial design to decade-long maintenance programs, we stay with your infrastructure through its entire lifecycle.',
              },
              {
                title: 'Genuine Zero Injury Culture',
                desc: 'Our safety record results from embedded JSA/SWMS processes, daily toolbox talks, and a culture where safety is never traded.',
              },
              {
                title: 'Government & Panel Ready',
                desc: 'We understand government procurement — capability documentation, compliance records, and track record for panel partnerships.',
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

      {/* ─── PROJECTS ─── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Projects</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#30505b]">PROOF IN THE FIELD</h2>
            <p className="text-gray-400 mt-5 text-lg max-w-xl mx-auto">
              Real projects. Real outcomes. Delivered in some of Australia&apos;s most challenging environments.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {projects.map((p) => (
              <StaggerItem key={p.href}>
                <ProjectCard {...p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border-2 border-[#30505b] text-[#30505b] px-8 py-4 rounded-full font-semibold hover:bg-[#30505b] hover:text-white transition-all duration-300 hover:scale-105 text-sm"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LIFECYCLE ─── */}
      <section className="bg-[#0d1b2a] py-24 relative overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Lifecycle</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">FULL TANK LIFECYCLE SUPPORT</h2>
            <p className="text-gray-400 mt-5 text-lg">
              We support your assets from first pour through to long-term longevity planning.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-6" staggerDelay={0.1}>
            {[
              { step: '01', label: 'Inspections', desc: 'ROV & UAV-assisted condition assessment' },
              { step: '02', label: 'RPVC Liners', desc: 'Corrosion protection & compliance restoration' },
              { step: '03', label: 'Maintenance', desc: 'Planned & reactive asset maintenance' },
              { step: '04', label: 'Upgrades', desc: 'Structural repair & capacity enhancement' },
              { step: '05', label: 'Longevity', desc: 'Long-term asset management programs' },
            ].map((s, i) => (
              <StaggerItem key={s.step}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-5">
                    <div className="w-20 h-20 bg-[#3e91ce]/10 border-2 border-[#3e91ce]/30 text-white rounded-full flex items-center justify-center text-lg font-black group-hover:bg-[#3e91ce] group-hover:border-[#3e91ce] transition-all duration-300 glow-btn">
                      {s.step}
                    </div>
                    {i < 4 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-[#3e91ce]/50 to-transparent" />
                    )}
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-[#3e91ce] transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
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
              { code: 'ISO14001', label: 'Environmental Management' },
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

      {/* ─── DOWNLOADS ─── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase mb-3">/ Resources</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#30505b]">RESOURCES FOR YOUR PROJECT</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              {
                title: 'Capability Statement',
                desc: 'Our full company capability, project track record, and compliance documentation.',
                tag: 'Company Profile',
              },
              {
                title: 'Tank Maintenance Checklist',
                desc: "A practical checklist for asset owners to assess their tank's condition and maintenance needs.",
                tag: 'Maintenance',
              },
              {
                title: 'Fire Water Compliance Guide',
                desc: 'Understanding AS2304 and AS1851 requirements for fire water storage and annual inspection.',
                tag: 'Compliance',
              },
              {
                title: 'Tank Upgrade Decision Guide',
                desc: 'When to reline, repair, or replace — a practical guide for asset managers and engineers.',
                tag: 'Asset Management',
              },
              {
                title: 'Remote Project Delivery Guide',
                desc: 'What you need to know about delivering water infrastructure in remote and regional Australia.',
                tag: 'Remote Projects',
              },
            ].map((r) => (
              <StaggerItem key={r.title}>
                <div className="group bg-[#F4F6F8] hover:bg-white border-2 border-transparent hover:border-[#3e91ce]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <span className="inline-block bg-[#3e91ce]/10 text-[#3e91ce] text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {r.tag}
                  </span>
                  <h3 className="font-bold text-[#30505b] mb-2 text-lg">{r.title}</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{r.desc}</p>
                  <a href="#" className="flex items-center gap-2 text-[#3e91ce] text-sm font-bold group-hover:gap-3 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Free
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
        {/* Animated rings */}
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
            Whether you need a new installation, a compliance fix, or a long-term maintenance partner — we are
            ready.
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
