export type EmailDeliverabilityResult =
  | { ok: true }
  | { ok: false; reason: string }

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

export async function verifyEmailDeliverability(email: string): Promise<EmailDeliverabilityResult> {
  const apiKey = process.env.ABSTRACT_EMAIL_API_KEY || process.env.NEXT_PUBLIC_ABSTRACT_EMAIL_API_KEY || ''

  if (!apiKey) {
    return { ok: true }
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
      return { ok: true }
    }

    if (!response.ok) {
      return { ok: true }
    }

    const data = (await response.json()) as AbstractEmailReputationResult

    if (data.error?.code) {
      return { ok: true }
    }

    // Only block clearly invalid addresses — disposable/temp emails and domains
    // with no MX record at all. Other checks (is_role, is_catchall, is_smtp_valid,
    // status) are too aggressive for Australian corporate/government domains,
    // which frequently block SMTP probe queries and get flagged as undeliverable.
    if (data.email_quality?.is_disposable) {
      return {
        ok: false,
        reason: 'Disposable email addresses are not accepted. Please use your work or personal email.',
      }
    }

    if (data.email_deliverability?.is_mx_valid === false) {
      return {
        ok: false,
        reason: 'This email domain does not appear to accept mail. Please check your address.',
      }
    }

    return { ok: true }
  } catch {
    return { ok: true }
  }
}
