'use client'

import { useEffect } from 'react'

import type { CampaignId } from './config'

function track(name: string, params: Record<string, string>) {
  const analyticsWindow = window as typeof window & {
    gtag?: (...args: unknown[]) => void
  }
  analyticsWindow.gtag?.('event', name, params)
}

export default function CampaignConversionTracker({ campaignId }: { campaignId: CampaignId }) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return

      const actionElement = target.closest<HTMLElement>('[data-action]')
      if (!actionElement) return

      const action = actionElement.dataset.action || ''
      if (!action || action === 'submit-enquiry') return

      track(action === 'call' ? 'campaign_phone_click' : 'campaign_cta_click', {
        campaign_id: campaignId,
        campaign_source: 'paid-campaign',
        action,
        cta_location: actionElement.dataset.ctaLocation || 'unknown',
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [campaignId])

  return null
}
