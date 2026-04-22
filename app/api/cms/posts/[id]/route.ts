import { NextResponse } from 'next/server'

import { deletePost, updatePost } from '@/lib/cms/admin'
import type { CmsPostInput } from '@/lib/cms/types'

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
