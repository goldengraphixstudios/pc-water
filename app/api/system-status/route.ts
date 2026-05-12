import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    abstractConfigured: Boolean(
      process.env.ABSTRACT_EMAIL_API_KEY || process.env.NEXT_PUBLIC_ABSTRACT_EMAIL_API_KEY,
    ),
  })
}
