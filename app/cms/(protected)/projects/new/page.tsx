import ProjectEditorForm from '@/components/cms/ProjectEditorForm'

export const dynamic = 'force-dynamic'

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-2">CMS</p>
        <h1 className="text-4xl font-black text-[#30505b]">New Project</h1>
      </div>
      <ProjectEditorForm />
    </div>
  )
}
