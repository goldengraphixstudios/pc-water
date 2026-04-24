import ProjectEditorForm from '@/components/cms/ProjectEditorForm'
import { ensureRecord, getAdminProjectById, getAdminProjectFilterOptions } from '@/lib/cms/queries'

export const dynamic = 'force-dynamic'

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = ensureRecord(await getAdminProjectById(id))
  const filterOptions = await getAdminProjectFilterOptions()

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-2">CMS</p>
        <h1 className="text-4xl font-black text-[#30505b]">Edit Project</h1>
      </div>
      <ProjectEditorForm
        project={project}
        availableClassifications={filterOptions.classifications}
        availableTags={filterOptions.tags}
      />
    </div>
  )
}
