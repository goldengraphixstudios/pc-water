// Temporary launch mode:
// Keep Home, Projects, and Resources live.
// Send every other route to the Coming Soon fallback page.
// Revert by setting TEMPORARY_LIMITED_NAVIGATION to false and removing proxy.ts.
export const TEMPORARY_LIMITED_NAVIGATION = true

export const TEMPORARY_FALLBACK_ROUTE = '/coming-soon'

export const ACTIVE_TEMPORARY_ROUTES = [
  '/',
  '/about',
  '/projects',
  '/resources',
  TEMPORARY_FALLBACK_ROUTE,
] as const

export function isTemporaryRouteEnabled(pathname: string) {
  return ACTIVE_TEMPORARY_ROUTES.some((route) => {
    if (route === '/') {
      return pathname === '/'
    }

    if (route === TEMPORARY_FALLBACK_ROUTE) {
      return pathname === TEMPORARY_FALLBACK_ROUTE
    }

    return pathname === route || pathname.startsWith(`${route}/`)
  })
}
