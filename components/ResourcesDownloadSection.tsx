'use client'

import { useState } from 'react'
import ResourceDownloadGate from '@/components/ResourceDownloadGate'

const SUPABASE_RESOURCES_BASE =
  'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/resources/'

interface Resource {
  slug: string
  title: string
  desc: string
  tag: string
  division: string
  file: string
}

const pcTanksResources: Resource[] = [
  {
    slug: 'tank-maintenance-checklist',
    title: 'Tank Maintenance Checklist',
    desc: 'Practical asset owner checklist for assessing tank condition and prioritising maintenance needs.',
    tag: 'Maintenance',
    division: 'PC Tanks',
    file: 'tank-maintenance-checklist.pdf',
  },
  {
    slug: 'tank-upgrade-decision-guide',
    title: 'Tank Upgrade Decision Guide',
    desc: 'When to reline, repair, or replace — practical guidance for asset managers navigating the options.',
    tag: 'Asset Management',
    division: 'PC Tanks',
    file: 'tank-upgrade-decision-guide.pdf',
  },
  {
    slug: 'fire-water-compliance-guide',
    title: 'Fire Water Compliance Guide',
    desc: 'Understanding AS2304 and AS1851 requirements for fire water storage — what engineers and operators need to know.',
    tag: 'Compliance',
    division: 'PC Tanks',
    file: 'fire-water-compliance-guide.pdf',
  },
]

const pcWaterSolutionsResources: Resource[] = [
  {
    slug: 'wtp-compliance-monitoring-guide',
    title: 'WTP Compliance Monitoring Guide',
    desc: 'A structured guide to monitoring and documenting compliance across water treatment plant operations.',
    tag: 'Water Treatment',
    division: 'PC Water Solutions',
    file: 'wtp-compliance-monitoring-guide.pdf',
  },
  {
    slug: 'wtp-operator-checklist',
    title: 'WTP Operator Checklist',
    desc: 'Day-to-day operational checklist for water treatment plant operators — inspection, monitoring, and recordkeeping.',
    tag: 'Operations',
    division: 'PC Water Solutions',
    file: 'wtp-operator-checklist.pdf',
  },
  {
    slug: 'wtp-disinfection-compliance-primer',
    title: 'WTP Disinfection Compliance Primer',
    desc: 'Core principles and compliance requirements for disinfection in Australian water treatment systems.',
    tag: 'Compliance',
    division: 'PC Water Solutions',
    file: 'wtp-disinfection-compliance-primer.pdf',
  },
  {
    slug: 'remote-wtp-construction-commissioning',
    title: 'Remote WTP Construction & Commissioning',
    desc: 'What it takes to deliver and commission a water treatment plant in remote Australia — logistics, constraints, and solutions.',
    tag: 'Remote Projects',
    division: 'PC Water Solutions',
    file: 'remote-wtp-construction-commissioning.pdf',
  },
]

function ResourceCard({ resource, onDownload }: { resource: Resource; onDownload: (r: Resource) => void }) {
  return (
    <div className="bg-[#F4F6F8] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      <span className="inline-block bg-[#3e91ce]/10 text-[#3e91ce] text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
        {resource.tag}
      </span>
      <h3 className="font-bold text-[#30505b] mb-2 leading-snug">{resource.title}</h3>
      <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">{resource.desc}</p>
      <button
        onClick={() => onDownload(resource)}
        className="flex items-center gap-2 text-[#3e91ce] text-sm font-semibold hover:gap-3 transition-all group w-fit"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Download Free
      </button>
    </div>
  )
}

export default function ResourcesDownloadSection() {
  const [active, setActive] = useState<Resource | null>(null)

  function handleDownload(resource: Resource) {
    setActive(resource)
  }

  return (
    <>
      {/* PC Tanks Resources */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-8 bg-[#30505b] rounded-full" />
          <div>
            <p className="text-[#30505b] text-xs font-bold tracking-widest uppercase">Division Two</p>
            <h3 className="text-xl font-black text-[#30505b]">PC Tanks</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pcTanksResources.map((r) => (
            <ResourceCard key={r.slug} resource={r} onDownload={handleDownload} />
          ))}
        </div>
      </div>

      {/* PC Water Solutions Resources */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-8 bg-[#3e91ce] rounded-full" />
          <div>
            <p className="text-[#3e91ce] text-xs font-bold tracking-widest uppercase">Division One</p>
            <h3 className="text-xl font-black text-[#30505b]">PC Water Solutions</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pcWaterSolutionsResources.map((r) => (
            <ResourceCard key={r.slug} resource={r} onDownload={handleDownload} />
          ))}
        </div>
      </div>

      {/* Email gate modal */}
      {active && (
        <ResourceDownloadGate
          resourceSlug={active.slug}
          resourceTitle={active.title}
          division={active.division}
          fileUrl={SUPABASE_RESOURCES_BASE + active.file}
          onClose={() => setActive(null)}
        />
      )}
    </>
  )
}
