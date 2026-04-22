import { NextResponse } from 'next/server'

import { deleteProject, updateProject } from '@/lib/cms/admin'
import type { CmsProjectInput } from '@/lib/cms/types'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const input = (await request.json()) as CmsProjectInput
  const result = await updateProject(id, input)

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
  const result = await deleteProject(id)

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ success: true })
}
