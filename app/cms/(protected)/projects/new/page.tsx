'use client'

import { useEffect, useState } from 'react'
import { fetchAdminProjectFilterOptions } from '@/lib/cms/browser-admin'
import ProjectEditorForm from '@/components/cms/ProjectEditorForm'

export default function NewProjectPage() {
  const [filterOptions, setFilterOptions] = useState<{ classifications: string[]; tags: string[] } | null>(null)

  useEffect(() => {
    fetchAdminProjectFilterOptions().then(setFilterOptions)
  }, [])

  return (
    <ProjectEditorForm
      availableClassifications={filterOptions?.classifications ?? []}
      availableTags={filterOptions?.tags ?? []}
    />
  )
}
