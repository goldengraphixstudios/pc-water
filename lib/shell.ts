/**
 * Full-bleed page shell.
 *
 * Most of the site uses a centred `max-w-6xl` container. The article library
 * and the project portfolio deliberately break that rule so their multi-column
 * workspaces can use the full viewport width — the rails need to sit at the
 * actual left and right edges rather than inside a narrow column.
 *
 * Capped at 1920px so ultra-wide displays do not stretch line lengths.
 */
export const SHELL = 'mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8'
