'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { fetchAdminPostById } from '@/lib/cms/browser-admin'
import PostEditorForm from '@/components/cms/PostEditorForm'
import type { CmsPost } from '@/lib/cms/types'

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

function EditPostContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  // undefined = loading, null = not found, CmsPost = loaded
  const [post, setPost] = useState<CmsPost | null | undefined>(undefined)

  useEffect(() => {
    if (!id) { setPost(null); return }
    fetchAdminPostById(id).then(setPost)
  }, [id])

  if (post === undefined) return <Spinner />

  if (!post) {
    return (
      <div className="flex flex-col items-center py-20 text-center">
        <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Article not found</p>
        <p className="text-sm text-slate-400 dark:text-slate-600">The article ID is missing or invalid.</p>
      </div>
    )
  }

  return <PostEditorForm post={post} />
}

export default function EditPostPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <EditPostContent />
    </Suspense>
  )
}
