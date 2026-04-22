import { NextResponse } from 'next/server'

import { createProject } from '@/lib/cms/admin'
import type { CmsProjectInput } from '@/lib/cms/types'

export async function POST(request: Request) {
  const input = (await request.json()) as CmsProjectInput
  const result = await createProject(input)

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ id: result.id })
}
