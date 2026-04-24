'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { fetchAdminProjectById, fetchAdminProjectFilterOptions } from '@/lib/cms/browser-admin'
import ProjectEditorForm from '@/components/cms/ProjectEditorForm'
import type { CmsProject } from '@/lib/cms/types'

function Spinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <svg className="w-5 h-5 animate-spin text-[#3e91ce]" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>
  )
}

function EditProjectContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const [project, setProject]           = useState<CmsProject | null | undefined>(undefined)
  const [filterOptions, setFilterOptions] = useState<{ classifications: string[]; tags: string[] }>({ classifications: [], tags: [] })

  useEffect(() => {
    if (!id) { setProject(null); return }
    Promise.all([
      fetchAdminProjectById(id),
      fetchAdminProjectFilterOptions(),
    ]).then(([proj, opts]) => {
      setProject(proj)
      setFilterOptions(opts)
    })
  }, [id])

  if (project === undefined) return <Spinner />

  if (!project) {
    return (
      <div className="flex flex-col items-center py-20 text-center">
        <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Project not found</p>
        <p className="text-sm text-slate-400 dark:text-slate-600">The project ID is missing or invalid.</p>
      </div>
    )
  }

  return (
    <ProjectEditorForm
      project={project}
      availableClassifications={filterOptions.classifications}
      availableTags={filterOptions.tags}
    />
  )
}

export default function EditProjectPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <EditProjectContent />
    </Suspense>
  )
}
