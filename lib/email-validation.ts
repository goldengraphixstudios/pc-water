export const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.info', 'guerrillamailblock.com',
  'tempmail.com', 'throwaway.email', 'sharklasers.com', 'grr.la',
  'yopmail.com', 'spam4.me', 'trashmail.com', 'dispostable.com',
  'maildrop.cc', 'fakeinbox.com', 'getairmail.com', 'mailnull.com',
  'spamgourmet.com', 'getnada.com', 'burnermail.io', 'mailtemp.net',
  'tempinbox.com', 'spamgmail.com', 'filzmail.com', 'throwam.com',
  'mailsac.com', 'boun.cr', 'spam.la', 'spaml.com', 'tempr.email',
  'discard.email', 'trashmail.at', 'trashmail.io', 'trashmail.me',
  'mailnesia.com', 'tempomail.fr', 'jetable.fr', '10minutemail.com',
  'tempmail.net', 'tempmail.org', 'emailondeck.com', 'dropmail.me',
  'guerrillamail.de', 'guerrillamail.net', 'guerrillamail.org',
])

export const ROLE_PREFIXES = ['noreply', 'no-reply', 'donotreply', 'postmaster', 'bounce', 'mailer-daemon']

export type LocalEmailValidationResult =
  | { ok: true; email: string }
  | { ok: false; email: string; reason: string; code: 'format' | 'disposable' | 'role' }

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function isValidEmailFormat(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalizeEmail(email))
}

export function isDisposableEmail(email: string) {
  const domain = normalizeEmail(email).split('@')[1] ?? ''
  return DISPOSABLE_DOMAINS.has(domain)
}

export function isRoleBasedEmail(email: string) {
  const prefix = normalizeEmail(email).split('@')[0] ?? ''
  return ROLE_PREFIXES.includes(prefix)
}

export function validateEmailLocally(email: string): LocalEmailValidationResult {
  const normalized = normalizeEmail(email)

  if (!isValidEmailFormat(normalized)) {
    return { ok: false, email: normalized, reason: 'Please enter a valid email address.', code: 'format' }
  }

  if (isDisposableEmail(normalized)) {
    return {
      ok: false,
      email: normalized,
      reason: 'Disposable email addresses are not accepted. Please use your work or personal email.',
      code: 'disposable',
    }
  }

  if (isRoleBasedEmail(normalized)) {
    return {
      ok: false,
      email: normalized,
      reason: 'Please use a personal or work email address rather than a shared mailbox.',
      code: 'role',
    }
  }

  return { ok: true, email: normalized }
}
