import { NextResponse } from 'next/server'
import { submitUrlsToIndexNow } from '@/lib/indexnow'

// Static export: no paths pre-rendered (server-only endpoint)
export function generateStaticParams() { return [] }

/**
 * POST /api/indexnow
 * Body: { urls: string[] }
 * Submits a list of URLs to IndexNow for fast indexing by Bing, Yandex, Yep, and other participating engines.
 */
export async function POST(request: Request) {
  let body: { urls?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  if (!Array.isArray(body.urls) || body.urls.length === 0) {
    return NextResponse.json({ error: 'urls must be a non-empty array.' }, { status: 400 })
  }

  const urls = body.urls.filter((u): u is string => typeof u === 'string' && u.trim().length > 0)
  if (urls.length === 0) {
    return NextResponse.json({ error: 'No valid URL strings provided.' }, { status: 400 })
  }

  const result = await submitUrlsToIndexNow(urls)

  if (!result.ok) {
    console.error('[indexnow route] submission failed:', result.error)
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 })
  }

  return NextResponse.json({ ok: true, submitted: urls.length })
}
