import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    abstractConfigured: Boolean(
      process.env.ABSTRACT_EMAIL_API_KEY || process.env.NEXT_PUBLIC_ABSTRACT_EMAIL_API_KEY,
    ),
    supabaseAdminConfigured: Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SECRET_KEY,
    ),
    resendConfigured: Boolean(
      process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL,
    ),
    projectEnquiryNotifyConfigured: Boolean(
      process.env.PROJECT_ENQUIRY_NOTIFY_TO,
    ),
  })
}
