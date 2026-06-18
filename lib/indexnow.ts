const INDEXNOW_KEY = 'b4f7e2a1d6c3890f'
const SITE_URL = process.env.SITE_URL || 'https://pcwater.com.au'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export async function submitUrlsToIndexNow(urls: string[]): Promise<{ ok: boolean; error?: string }> {
  if (!urls.length) return { ok: true }

  // Ensure all URLs are absolute
  const absoluteUrls = urls.map((u) =>
    u.startsWith('http') ? u : `${SITE_URL}${u.startsWith('/') ? '' : '/'}${u}`,
  )

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: new URL(SITE_URL).hostname,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: absoluteUrls,
      }),
      cache: 'no-store',
    })

    // IndexNow returns 200 or 202 on success
    if (res.status === 200 || res.status === 202) {
      return { ok: true }
    }

    const body = await res.text().catch(() => '')
    return { ok: false, error: `IndexNow returned ${res.status}: ${body}` }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'IndexNow submission failed.' }
  }
}

export async function submitSingleUrl(path: string): Promise<void> {
  const result = await submitUrlsToIndexNow([path])
  if (!result.ok) {
    console.error('[indexnow] submission failed:', result.error)
  }
}
