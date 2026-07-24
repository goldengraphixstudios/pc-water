import CampaignReveal from './CampaignReveal'
import SectionHeading from './SectionHeading'
import { container, gridLinesLight } from './styles'
import type { CampaignConfig } from './config'

/** Numbered delivery process — submit → review → clarify → recommend → propose → plan. */
export default function CampaignProcess({ config }: { config: CampaignConfig }) {
  const { process } = config
  return (
    <section id="process" className="relative scroll-mt-20 bg-[#f4f6f8]">
      <div className={`pointer-events-none absolute inset-0 ${gridLinesLight}`} aria-hidden="true" />
      <div className={`${container} relative py-12 sm:py-16 lg:py-20`}>
        <CampaignReveal>
          <SectionHeading eyebrow={process.eyebrow} heading={process.heading} intro={process.intro} />
        </CampaignReveal>

        <ol className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, i) => (
            <CampaignReveal as="li" key={step.title} delay={i * 0.04} className="bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-[#0d1b2a] font-mono text-sm font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0d1b2a]">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{step.body}</p>
            </CampaignReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
