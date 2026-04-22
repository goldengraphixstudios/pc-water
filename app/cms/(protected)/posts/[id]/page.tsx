import PostEditorForm from '@/components/cms/PostEditorForm'
import { ensureRecord, getAdminPostById } from '@/lib/cms/queries'

export const dynamic = 'force-dynamic'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = ensureRecord(await getAdminPostById(id))

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-2">CMS</p>
        <h1 className="text-4xl font-black text-[#30505b]">Edit Article</h1>
      </div>
      <PostEditorForm post={post} />
    </div>
  )
}
