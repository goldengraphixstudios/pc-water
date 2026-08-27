/**
 * fix-kybrook-images.js
 *
 * The kybrook-nt project was never migrated off the old GitHub Pages host
 * when the site moved to Vercel/Supabase. Its hero and all ten gallery
 * images still point at goldengraphixstudios.github.io, which now 404s —
 * so the project renders with eleven broken images in production.
 *
 * Every other project uses:
 *   hero    -> cms-media/projects/hero/{slug}-hero.jpg
 *   gallery -> cms-media/projects/gallery/{slug}-{filename}.jpg
 *
 * This uploads the local originals from public/projects and repoints the
 * Supabase record to match that convention.
 *
 *   node scripts/fix-kybrook-images.js          # dry run
 *   node scripts/fix-kybrook-images.js --apply  # upload + update
 */

const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

const SLUG = 'kybrook-nt'
const BUCKET = 'cms-media'
const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media'
const APPLY = process.argv.includes('--apply')

const GALLERY_FILES = Array.from({ length: 10 }, (_, i) => `kybrook-${String(i + 1).padStart(2, '0')}.jpg`)
const HERO_SOURCE = 'kybrook-01.jpg'

async function main() {
  const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SECRET_KEY || '',
  )
  const dir = path.join(process.cwd(), 'public', 'projects')

  const heroPath = `projects/hero/${SLUG}-hero.jpg`
  const galleryPaths = GALLERY_FILES.map((f) => `projects/gallery/${SLUG}-${f}`)

  const heroUrl = `${BASE}/${heroPath}`
  const galleryUrls = galleryPaths.map((p) => `${BASE}/${p}`)

  console.log(`\n${APPLY ? 'APPLYING' : 'DRY RUN'} — ${SLUG}\n`)
  console.log('hero   ->', heroUrl)
  galleryUrls.forEach((u) => console.log('gallery->', u))

  // Verify every source file exists before touching anything.
  const missing = [HERO_SOURCE, ...GALLERY_FILES].filter((f) => !fs.existsSync(path.join(dir, f)))
  if (missing.length) {
    console.error('\n✗ missing local source files:', missing.join(', '))
    process.exit(1)
  }
  console.log('\n✓ all 10 local source files present')

  if (!APPLY) {
    console.log('\nDry run only. Re-run with --apply to upload and update.')
    return
  }

  console.log('\n📸 Uploading...')
  const uploads = [[HERO_SOURCE, heroPath], ...GALLERY_FILES.map((f, i) => [f, galleryPaths[i]])]
  for (const [file, dest] of uploads) {
    const buf = fs.readFileSync(path.join(dir, file))
    const { error } = await sb.storage
      .from(BUCKET)
      .upload(dest, buf, { contentType: 'image/jpeg', upsert: true })
    console.log(error ? `  ✗ ${dest}: ${error.message}` : `  ✓ ${dest}`)
    if (error) process.exit(1)
  }

  console.log('\n📝 Updating cms_projects record...')
  const { error } = await sb
    .from('cms_projects')
    .update({ hero_image_url: heroUrl, gallery_urls: galleryUrls, updated_at: new Date().toISOString() })
    .eq('slug', SLUG)

  if (error) {
    console.error('  ✗', error.message)
    process.exit(1)
  }
  console.log('  ✓ hero_image_url + gallery_urls repointed')
  console.log('\n✅ Done.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
