import { NextResponse } from 'next/server'

import { syncToolLeadToPipedrive } from '@/lib/pipedrive'
import { validateEmailLocally } from '@/lib/email-validation'
import { createSupabaseAdminClient } from '@/lib/supabase/admin'

function getText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>

  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, reason: 'Invalid request body.' }, { status: 400 })
  }

  const email = getText(body.email)
  const toolSlug = getText(body.toolSlug)
  const toolTitle = getText(body.toolTitle)
  const division = getText(body.division)
  const resultKey = getText(body.resultKey)
  const resultLevel = getText(body.resultLevel)
  const answers =
    body.answers && typeof body.answers === 'object' ? (body.answers as Record<string, unknown>) : {}

  if (!email || !toolSlug || !toolTitle) {
    return NextResponse.json({ ok: false, reason: 'Missing required fields.' }, { status: 400 })
  }

  const emailValidation = validateEmailLocally(email)
  if (!emailValidation.ok) {
    return NextResponse.json({ ok: false, reason: emailValidation.reason }, { status: 400 })
  }

  const submittedAt = new Date().toISOString()

  // Best-effort persistence. A missing table or client must never lose the lead —
  // the Pipedrive sync below is the source of truth for follow-up.
  const supabase = createSupabaseAdminClient()
  if (supabase) {
    const { error } = await (supabase.from('tool_leads') as any).insert({
      email: emailValidation.email,
      tool_slug: toolSlug,
      tool_title: toolTitle,
      division,
      result_key: resultKey,
      result_level: resultLevel,
      answers,
      submitted_at: submittedAt,
    })
    if (error) {
      console.error('[tool_leads] insert error', error)
    }
  }

  const syncResult = await syncToolLeadToPipedrive({
    email: emailValidation.email,
    toolSlug,
    toolTitle,
    division,
    resultLevel,
    answers,
    submittedAt,
  })

  if (!syncResult.ok) {
    console.error('[pipedrive] tool lead sync error', syncResult.error)
  }

  return NextResponse.json({ ok: true, pipedriveSynced: syncResult.ok })
}
