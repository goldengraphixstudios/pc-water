import { NextResponse } from 'next/server'

import { createPost } from '@/lib/cms/admin'
import type { CmsPostInput } from '@/lib/cms/types'

export async function POST(request: Request) {
  const input = (await request.json()) as CmsPostInput
  const result = await createPost(input)

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ id: result.id })
}
