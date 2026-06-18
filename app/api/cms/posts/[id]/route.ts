import { NextResponse } from 'next/server'

import { deletePost, updatePost } from '@/lib/cms/admin'
import { submitSingleUrl } from '@/lib/indexnow'
import type { CmsPostInput } from '@/lib/cms/types'

// Static export: no paths pre-rendered (server-only endpoint)
export function generateStaticParams() { return [] }

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const input = (await request.json()) as CmsPostInput
  const result = await updatePost(id, input)

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  // Auto-submit to IndexNow when a post is published
  if (input.status === 'published' && input.slug) {
    submitSingleUrl(`/resources/${input.slug}`)
  }

  return NextResponse.json({ id: result.id })
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const result = await deletePost(id)

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ success: true })
}
