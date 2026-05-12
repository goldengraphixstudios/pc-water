import { NextResponse } from 'next/server'

import { normalizeEmail, validateEmailLocally } from '@/lib/email-validation'

type AbstractEmailReputationResult = {
  error?: {
    message?: string
    code?: string
  }
  email_deliverability?: {
    status?: 'deliverable' | 'undeliverable' | 'unknown'
    status_detail?: string
    is_format_valid?: boolean
    is_smtp_valid?: boolean
    is_mx_valid?: boolean
  }
  email_quality?: {
    score?: number
    is_disposable?: boolean
    is_catchall?: boolean
    is_role?: boolean
  }
}

async function checkAbstractDeliverability(email: string) {
  const apiKey =
    process.env.ABSTRACT_EMAIL_API_KEY ||
    process.env.NEXT_PUBLIC_ABSTRACT_EMAIL_API_KEY ||
    ''

  if (!apiKey) {
    return {
      ok: false,
      reason: 'Email verification is temporarily unavailable. Please try again shortly.',
    }
  }

  try {
    const response = await fetch(
      `https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(email)}`,
      {
        signal: AbortSignal.timeout(6000),
        cache: 'no-store',
      },
    )

    if (response.status === 429) {
      return {
        ok: false,
        reason: 'Email verification is temporarily rate-limited. Please try again in a moment.',
      }
    }

    if (!response.ok) {
      return {
        ok: false,
        reason: 'We could not verify that this email can receive mail. Please try again shortly.',
      }
    }

    const data = (await response.json()) as AbstractEmailReputationResult

    if (data.error?.code) {
      return {
        ok: false,
        reason: 'We could not verify that this email can receive mail. Please try again shortly.',
      }
    }

    if (data.email_quality?.is_disposable) {
      return {
        ok: false,
        reason: 'Disposable email addresses are not accepted. Please use your work or personal email.',
      }
    }

    if (data.email_quality?.is_role) {
      return {
        ok: false,
        reason: 'Please use a personal or work email address rather than a shared mailbox.',
      }
    }

    if (data.email_deliverability?.is_mx_valid === false) {
      return {
        ok: false,
        reason: 'This email domain does not appear to accept mail. Please check your address.',
      }
    }

    if (data.email_deliverability?.is_smtp_valid === false) {
      return {
        ok: false,
        reason: 'This email address could not be verified as able to receive mail.',
      }
    }

    if (data.email_quality?.is_catchall) {
      return {
        ok: false,
        reason: 'Please use a directly reachable email address rather than a catch-all inbox.',
      }
    }

    if (data.email_deliverability?.status !== 'deliverable') {
      return {
        ok: false,
        reason: 'This email address appears to be invalid or unreachable.',
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      reason: 'We could not verify that this email can receive mail. Please try again shortly.',
    }
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

  const abstractValidation = await checkAbstractDeliverability(email)
  if (!abstractValidation.ok) {
    return NextResponse.json(
      { ok: false, reason: abstractValidation.reason, code: 'deliverability' },
      { status: 400 },
    )
  }

  return NextResponse.json({ ok: true, email })
}
