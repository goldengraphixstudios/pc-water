import type { ProjectEnquiryInput } from '@/lib/project-enquiries'

type EmailSendResult = {
  confirmationSent: boolean
  notificationSent: boolean
  error?: string
}

const PROJECT_ENQUIRY_NOTIFY_TO = [
  'goldengraphixstudios@gmail.com',
  'james@pctanks.com.au',
  'mike@pctanks.com.au',
  'ricci@pctanks.com.au',
]

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatValue(value?: string) {
  const trimmed = value?.trim() ?? ''
  return trimmed ? escapeHtml(trimmed).replace(/\n/g, '<br />') : '—'
}

function buildDetailRows(input: ProjectEnquiryInput) {
  return [
    ['Name', `${input.firstName} ${input.lastName}`.trim()],
    ['Company / Organisation', input.company || ''],
    ['Email', input.email],
    ['Phone', input.phone || ''],
    ['State', input.state || ''],
    ['Suburb / Town', input.suburbTown || ''],
    ['Industry', input.industry || ''],
    ['Service Needed', input.service || ''],
    ['Project Stage', input.projectStage || ''],
    ['Estimated Timeline', input.timeline || ''],
    ['Estimated Budget Range', input.budget || ''],
    ['Tank Type / Application', input.tankType || ''],
    ['Project Description / Message', input.message],
  ] as const
}

function buildDetailsTable(rows: ReadonlyArray<readonly [string, string]>) {
  return `
    <table style="border-collapse: collapse; width: 100%; background: #ffffff; border: 1px solid #d7e1ee; border-radius: 12px; overflow: hidden;">
      <tbody>
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 10px 12px; border: 1px solid #e5e7eb; font-weight: 700; width: 220px; background: #f8fbff; color: #30505b; vertical-align: top;">
                  ${escapeHtml(label)}
                </td>
                <td style="padding: 10px 12px; border: 1px solid #e5e7eb; color: #111827; vertical-align: top;">
                  ${formatValue(value)}
                </td>
              </tr>
            `,
          )
          .join('')}
      </tbody>
    </table>
  `
}

function buildConfirmationHtml(input: ProjectEnquiryInput) {
  const detailsTable = buildDetailsTable(buildDetailRows(input))

  return `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; background: #f4f8fc; padding: 24px;">
      <div style="max-width: 760px; margin: 0 auto; background: #ffffff; border: 1px solid #d7e1ee; border-radius: 18px; overflow: hidden;">
        <div style="padding: 28px 28px 22px; background: linear-gradient(135deg, #0f2236 0%, #30505b 100%); color: #ffffff;">
          <p style="margin: 0 0 10px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.8;">PC Water Infrastructure</p>
          <h2 style="margin: 0; font-size: 30px; line-height: 1.15;">Project enquiry received</h2>
          <p style="margin: 12px 0 0; font-size: 15px; line-height: 1.6; opacity: 0.92;">
            Thanks ${escapeHtml(input.firstName)}. This email is your copy of everything submitted through the website.
          </p>
        </div>
        <div style="padding: 24px 28px 30px;">
          <p style="margin: 0 0 16px; color: #374151;">
            Our team will review your enquiry within one business day. If we need drawings, photos, or technical documentation,
            we will request them after the initial review.
          </p>

          <div style="margin: 0 0 18px;">
            <p style="margin: 0 0 10px; font-size: 16px; font-weight: 700; color: #30505b;">Your submitted details</p>
            ${detailsTable}
          </div>

          <div style="margin: 0 0 18px; padding: 16px 18px; border: 1px solid #d7e1ee; border-radius: 12px; background: #f8fbff;">
            <p style="margin: 0 0 8px; font-size: 15px; font-weight: 700; color: #30505b;">What happens next</p>
            <ol style="margin: 0; padding-left: 18px; color: #374151;">
              <li style="margin-bottom: 6px;">We review your project details and location.</li>
              <li style="margin-bottom: 6px;">We route the enquiry to the right internal team.</li>
              <li>We contact you by phone or email with the next step.</li>
            </ol>
          </div>

          <p style="margin: 0; color: #374151;">
            If anything urgent comes up, contact us on <strong>1300 029 804</strong> or reply to this email.
          </p>
          <p style="margin: 18px 0 0; color: #374151;">
            Regards,<br />
            <strong>PC Water Infrastructure</strong>
          </p>
        </div>
      </div>
    </div>
  `
}

function buildNotificationHtml(input: ProjectEnquiryInput) {
  const rows = buildDetailRows(input)

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
      <h2 style="color: #30505b; margin-bottom: 12px;">New project enquiry</h2>
      ${buildDetailsTable(rows)}
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
  const notifyTo = PROJECT_ENQUIRY_NOTIFY_TO

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
