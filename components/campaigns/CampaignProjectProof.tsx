import AppImage from '@/components/AppImage'
import CampaignReveal from './CampaignReveal'
import CtaLink from './CtaLink'
import SectionHeading from './SectionHeading'
import { container } from './styles'
import type { CampaignConfig } from './config'

/** Project proof with full-width photography and factual project detail. */
export default function CampaignProjectProof({ config }: { config: CampaignConfig }) {
  const { proof } = config

  return (
    <section id="project-proof" className="scroll-mt-20 bg-white">
      <div className={`${container} py-12 sm:py-16 lg:py-20`}>
        <CampaignReveal>
          <SectionHeading eyebrow={proof.eyebrow} heading={proof.heading} intro={proof.intro} />
        </CampaignReveal>

        <div className="mt-10 space-y-12 lg:space-y-20">
          {proof.projects.map((project, i) => {
            const imageFirst = i % 2 === 0
            return (
              <CampaignReveal key={project.name}>
                <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className={`relative ${imageFirst ? '' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200">
                      <AppImage
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      {project.status && (
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded bg-[#0d1b2a] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#3e91ce]" aria-hidden="true" />
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={imageFirst ? '' : 'lg:order-1'}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#3e91ce]">{project.location}</p>
                    <h3 className="mt-2 text-xl font-black text-[#0d1b2a] sm:text-2xl">{project.name}</h3>
                    <p className="mt-3 border-l-2 border-gray-200 pl-3 text-sm font-semibold text-[#30505b]">
                      {project.scope}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">{project.body}</p>
                  </div>
                </article>
              </CampaignReveal>
            )
          })}
        </div>

        {proof.note && (
          <CampaignReveal>
            <p className="mt-12 border-t border-gray-200 pt-6 text-xs leading-relaxed text-gray-500">{proof.note}</p>
          </CampaignReveal>
        )}

        <CampaignReveal>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#lead-form" variant="primary" action="start-form" ctaLocation="project-proof">
              {config.finalCta.primaryCta}
            </CtaLink>
            <CtaLink href={`tel:${config.phone}`} variant="outlineLight" action="call" ctaLocation="project-proof">
              Call {config.phoneDisplay}
            </CtaLink>
          </div>
        </CampaignReveal>
      </div>
    </section>
  )
}
