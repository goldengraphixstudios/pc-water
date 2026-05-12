'use client'

import { useState } from 'react'

import ResourceDownloadGate from '@/components/ResourceDownloadGate'
import { getResourceByKey, type ResourceDownloadKey } from '@/lib/resource-catalog'

interface Props {
  resourceKey: ResourceDownloadKey
  className?: string
  children: React.ReactNode
}

export default function GatedDownloadLink({ resourceKey, className, children }: Props) {
  const [open, setOpen] = useState(false)
  const resource = getResourceByKey(resourceKey)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <ResourceDownloadGate
          resourceSlug={resource.slug}
          resourceTitle={resource.title}
          division={resource.division}
          fileUrl={resource.fileUrl}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
