import { NextResponse } from 'next/server'

import { verifyEmailDeliverability } from '@/lib/email-deliverability'
import { normalizeEmail, validateEmailLocally } from '@/lib/email-validation'

export async function POST(request: Request) {
  let email = ''

  try {
    const body = (await request.json()) as { email?: string }
    email = normalizeEmail(body.email ?? '')
  } catch {
    return NextResponse.json({ ok: false, reason: 'Invalid request body.' }, { status: 400 })
  }

  const localValidation = validateEmailLocally(email)
  if (!localValidation.ok) {
    return NextResponse.json(
      { ok: false, reason: localValidation.reason, code: localValidation.code },
      { status: 400 },
    )
  }

  const deliverability = await verifyEmailDeliverability(email)
  if (!deliverability.ok) {
    return NextResponse.json(
      { ok: false, reason: deliverability.reason, code: 'deliverability' },
      { status: 400 },
    )
  }

  return NextResponse.json({ ok: true, email })
}
