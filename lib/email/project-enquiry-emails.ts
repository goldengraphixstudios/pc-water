import type { ProjectEnquiryInput } from '@/lib/project-enquiries'

type EmailSendResult = {
  confirmationSent: boolean
  notificationSent: boolean
  error?: string
}

function buildConfirmationHtml(input: ProjectEnquiryInput) {
  return `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
      <h2 style="color: #30505b; margin-bottom: 12px;">Thanks for your enquiry</h2>
      <p>Hi ${input.firstName},</p>
      <p>We have received your project enquiry and the PC Water Infrastructure team will review it within one business day.</p>
      <p><strong>What you sent us</strong></p>
      <ul>
        <li><strong>Service:</strong> ${input.service || 'Not specified'}</li>
        <li><strong>Project stage:</strong> ${input.projectStage || 'Not specified'}</li>
        <li><strong>Location:</strong> ${[input.suburbTown, input.state].filter(Boolean).join(', ') || 'Not specified'}</li>
      </ul>
      <p>If anything urgent comes up, you can contact us on <strong>1300 029 804</strong> or reply to this email.</p>
      <p>Regards,<br />PC Water Infrastructure</p>
    </div>
  `
}

function buildNotificationHtml(input: ProjectEnquiryInput) {
  const rows = [
    ['Name', `${input.firstName} ${input.lastName}`],
    ['Company', input.company || '—'],
    ['Email', input.email],
    ['Phone', input.phone || '—'],
    ['State', input.state || '—'],
    ['Suburb / Town', input.suburbTown || '—'],
    ['Industry', input.industry || '—'],
    ['Service', input.service || '—'],
    ['Project Stage', input.projectStage || '—'],
    ['Timeline', input.timeline || '—'],
    ['Budget', input.budget || '—'],
    ['Tank Type', input.tankType || '—'],
    ['Message', input.message],
  ]

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
      <h2 style="color: #30505b; margin-bottom: 12px;">New project enquiry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: 700; width: 180px;">${label}</td>
                  <td style="padding: 8px; border: 1px solid #e5e7eb;">${String(value).replace(/\n/g, '<br />')}</td>
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `
}

async function sendResendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
}) {
  const apiKey = process.env.RESEND_API_KEY || ''
  const from = process.env.RESEND_FROM_EMAIL || ''

  if (!apiKey || !from) {
    return { ok: false, error: 'Email provider not configured.' }
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => '')
    let parsedMessage = ''

    try {
      const parsed = JSON.parse(errorText) as { message?: string }
      parsedMessage = parsed.message ?? ''
    } catch {
      parsedMessage = ''
    }

    return {
      ok: false,
      error: parsedMessage || errorText || `Email provider responded with ${response.status}.`,
    }
  }

  return { ok: true }
}

export async function sendProjectEnquiryEmails(input: ProjectEnquiryInput): Promise<EmailSendResult> {
  const notifyTo = (process.env.PROJECT_ENQUIRY_NOTIFY_TO || 'contact@pcwater.com.au')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)

  const confirmation = await sendResendEmail({
    to: input.email,
    subject: 'We received your PC Water project enquiry',
    html: buildConfirmationHtml(input),
  })

  const notification = await sendResendEmail({
    to: notifyTo,
    subject: `New project enquiry from ${input.firstName} ${input.lastName}`,
    html: buildNotificationHtml(input),
    replyTo: input.email,
  })

  return {
    confirmationSent: confirmation.ok,
    notificationSent: notification.ok,
    error: confirmation.ok && notification.ok ? undefined : confirmation.error || notification.error,
  }
}
