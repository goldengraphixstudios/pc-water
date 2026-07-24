import CampaignFAQ from './CampaignFAQ'
import CampaignFinalCTA from './CampaignFinalCTA'
import CampaignHeader from './CampaignHeader'
import CampaignHero from './CampaignHero'
import CampaignMobileCTA from './CampaignMobileCTA'
import CampaignConversionTracker from './CampaignConversionTracker'
import CampaignProcess from './CampaignProcess'
import CampaignProjectProof from './CampaignProjectProof'
import CampaignSection from './CampaignSection'
import CampaignTrustStrip from './CampaignTrustStrip'
import type { CampaignConfig } from './config'

/**
 * Single shared shell for both campaign funnels. Each route is a thin server
 * component that supplies its typed config — no page implementation is
 * duplicated. Section order and alternating backgrounds are derived here.
 */
export default function CampaignPage({ config }: { config: CampaignConfig }) {
  return (
    <div className="bg-white">
      <CampaignConversionTracker campaignId={config.id} />
      <CampaignHeader config={config} />

      <CampaignHero config={config} />
      <CampaignTrustStrip items={config.trust} />

      {config.sections.map((block, i) => (
        <CampaignSection key={block.id} block={block} background={i % 2 === 0 ? 'grey' : 'white'} />
      ))}

      <CampaignProjectProof config={config} />
      <CampaignProcess config={config} />
      <CampaignFAQ config={config} />
      <CampaignFinalCTA config={config} />

      {/* Spacer so the sticky mobile bar never covers the final content */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      <CampaignMobileCTA config={config} />
    </div>
  )
}
