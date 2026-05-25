import { NextResponse } from 'next/server'

import { syncResourceLeadToPipedrive } from '@/lib/pipedrive'
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
  const resourceSlug = getText(body.resourceSlug)
  const resourceTitle = getText(body.resourceTitle)
  const division = getText(body.division)

  if (!email || !resourceSlug || !resourceTitle || !division) {
    return NextResponse.json({ ok: false, reason: 'Missing required fields.' }, { status: 400 })
  }

  const emailValidation = validateEmailLocally(email)
  if (!emailValidation.ok) {
    return NextResponse.json({ ok: false, reason: emailValidation.reason }, { status: 400 })
  }

  const supabase = createSupabaseAdminClient()
  if (!supabase) {
    return NextResponse.json({ ok: true, pipedriveSynced: false })
  }

  const downloadedAt = new Date().toISOString()
  const { error } = await (supabase.from('resource_leads') as any).insert({
    email: emailValidation.email,
    resource_slug: resourceSlug,
    resource_title: resourceTitle,
    division,
    downloaded_at: downloadedAt,
  })

  if (error) {
    console.error('[resource_leads] insert error', error)
    return NextResponse.json({ ok: true, pipedriveSynced: false })
  }

  const syncResult = await syncResourceLeadToPipedrive({
    email: emailValidation.email,
    resourceSlug,
    resourceTitle,
    division,
    downloadedAt,
  })

  if (!syncResult.ok) {
    console.error('[pipedrive] resource lead sync error', syncResult.error)
  }

  return NextResponse.json({
    ok: true,
    pipedriveSynced: syncResult.ok,
  })
}
