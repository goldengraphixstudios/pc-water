import { resolveMx } from 'node:dns/promises'
import { NextResponse } from 'next/server'

import { normalizeEmail, validateEmailLocally } from '@/lib/email-validation'

type AbstractResult = {
  deliverability?: 'DELIVERABLE' | 'UNDELIVERABLE' | 'RISKY' | 'UNKNOWN'
  is_disposable_email?: { value?: boolean }
  is_mx_found?: { value?: boolean }
  is_role?: { value?: boolean }
}

async function checkAbstractDeliverability(email: string) {
  const apiKey =
    process.env.ABSTRACT_EMAIL_API_KEY ||
    process.env.NEXT_PUBLIC_ABSTRACT_EMAIL_API_KEY ||
    ''

  if (!apiKey) {
    return { ok: true }
  }

  try {
    const response = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(email)}`,
      {
        signal: AbortSignal.timeout(6000),
        cache: 'no-store',
      },
    )

    if (!response.ok) {
      return { ok: true }
    }

    const data = (await response.json()) as AbstractResult

    if (data.is_disposable_email?.value) {
      return {
        ok: false,
        reason: 'Disposable email addresses are not accepted. Please use your work or personal email.',
      }
    }

    if (data.is_role?.value) {
      return {
        ok: false,
        reason: 'Please use a personal or work email address rather than a shared mailbox.',
      }
    }

    if (data.is_mx_found?.value === false) {
      return {
        ok: false,
        reason: 'This email domain does not appear to accept mail. Please check your address.',
      }
    }

    if (data.deliverability === 'UNDELIVERABLE') {
      return {
        ok: false,
        reason: 'This email address appears to be invalid or unreachable.',
      }
    }

    return { ok: true }
  } catch {
    return { ok: true }
  }
}

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

  const domain = email.split('@')[1] ?? ''
  try {
    const records = await resolveMx(domain)
    if (!records.length) {
      return NextResponse.json(
        { ok: false, reason: 'This email domain does not appear to accept mail. Please check your address.', code: 'mx' },
        { status: 400 },
      )
    }
  } catch {
    return NextResponse.json(
      { ok: false, reason: 'This email domain does not appear to accept mail. Please check your address.', code: 'mx' },
      { status: 400 },
    )
  }

  const abstractValidation = await checkAbstractDeliverability(email)
  if (!abstractValidation.ok) {
    return NextResponse.json(
      { ok: false, reason: abstractValidation.reason, code: 'deliverability' },
      { status: 400 },
    )
  }

  return NextResponse.json({ ok: true, email })
}
