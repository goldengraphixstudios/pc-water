export async function validateEmailWithServer(email: string): Promise<{ ok: boolean; reason?: string }> {
  try {
    const response = await fetch('/api/validate-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      return {
        ok: false,
        reason: data?.reason ?? 'Please enter a valid email address.',
      }
    }

    return { ok: Boolean(data?.ok), reason: data?.reason }
  } catch {
    return {
      ok: false,
      reason: 'We could not verify that this email can receive mail. Please try again shortly.',
    }
  }
}
