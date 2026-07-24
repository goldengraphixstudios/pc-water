import type { Metadata } from 'next'

import CampaignPage from '@/components/campaigns/CampaignPage'
import { remoteWaterConfig } from '@/components/campaigns/config'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  title: { absolute: remoteWaterConfig.metaTitle },
  description: remoteWaterConfig.metaDescription,
  alternates: { canonical: remoteWaterConfig.route },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    url: `${siteUrl}${remoteWaterConfig.route}`,
    title: remoteWaterConfig.metaTitle,
    description: remoteWaterConfig.metaDescription,
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Remote Water Infrastructure' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: remoteWaterConfig.metaTitle,
    description: remoteWaterConfig.metaDescription,
    images: ['/hero.png'],
  },
}

export default function RemoteWaterInfrastructureCampaignPage() {
  return <CampaignPage config={remoteWaterConfig} />
}
