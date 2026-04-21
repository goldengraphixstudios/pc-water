import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import {
  TEMPORARY_FALLBACK_ROUTE,
  TEMPORARY_LIMITED_NAVIGATION,
  isTemporaryRouteEnabled,
} from '@/lib/site-mode'

const BYPASS_EXACT = ['/robots.txt', '/sitemap.xml', '/favicon.ico']
const BYPASS_PREFIXES = ['/_next', '/images', '/water']

export function proxy(request: NextRequest) {
  if (!TEMPORARY_LIMITED_NAVIGATION) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api') ||
    BYPASS_EXACT.includes(pathname) ||
    BYPASS_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  ) {
    return NextResponse.next()
  }

  if (isTemporaryRouteEnabled(pathname)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(TEMPORARY_FALLBACK_ROUTE, request.url))
}
