import type { Metadata } from 'next'

import CampaignPage from '@/components/campaigns/CampaignPage'
import { tankRemediationConfig } from '@/components/campaigns/config'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: { absolute: tankRemediationConfig.metaTitle },
  description: tankRemediationConfig.metaDescription,
  alternates: { canonical: tankRemediationConfig.route },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    url: `${siteUrl}${tankRemediationConfig.route}`,
    title: tankRemediationConfig.metaTitle,
    description: tankRemediationConfig.metaDescription,
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Tank Remediation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: tankRemediationConfig.metaTitle,
    description: tankRemediationConfig.metaDescription,
    images: ['/hero.png'],
  },
}

export default function TankRemediationCampaignPage() {
  return <CampaignPage config={tankRemediationConfig} />
}
