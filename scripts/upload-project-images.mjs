/**
 * upload-project-images.mjs
 *
 * Uploads all local project images to Supabase Storage (cms-media bucket)
 * and prints the SQL needed to update cms_projects with the correct URLs.
 *
 * HOW TO RUN:
 *   1. Go to Supabase → Project Settings → API → copy the "service_role" secret key
 *   2. In your terminal run:
 *        set SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxxxx   (Windows CMD)
 *        $env:SUPABASE_SERVICE_ROLE_KEY="sb_secret_xxxxx"  (Windows PowerShell)
 *   3. Then run:
 *        node scripts/upload-project-images.mjs
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ── Config ─────────────────────────────────────────────────────────────────
const SUPABASE_URL     = 'https://mhggidgfivmdgkjerejn.supabase.co'
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SERVICE_ROLE_KEY) {
  console.error('\n❌  SUPABASE_SERVICE_ROLE_KEY env var is not set.')
  console.error('    Get it from: Supabase → Project Settings → API → service_role\n')
  process.exit(1)
}

const BUCKET      = 'cms-media'
const PROJECTS_DIR = path.join(ROOT, 'public', 'projects')

// ── Project → image mapping ─────────────────────────────────────────────────
// Maps each project slug to its hero image and gallery images (local filenames)
const PROJECT_IMAGES = {
  'doomadgee-wtp': {
    hero:    'doomadgee-01.jpg',
    gallery: ['doomadgee-01.jpg','doomadgee-02.jpg','doomadgee-03.jpg',
              'doomadgee-04.jpg','doomadgee-05.jpg','doomadgee-06.jpg',
              'doomadgee-07.jpg','doomadgee-08.jpg','doomadgee-09.jpg','doomadgee-10.jpg'],
  },
  'hobart-nyrstar': {
    hero:    'hobart-01.jpg',
    gallery: ['hobart-01.jpg','hobart-02.jpg','hobart-03.jpg','hobart-04.jpg',
              'hobart-05.jpg','hobart-06.jpg','hobart-07.jpg','hobart-08.jpg',
              'hobart-09.jpg','hobart-10.jpg'],
  },
  'borumba-hydro': {
    hero:    'borumba-01.jpg',
    gallery: ['borumba-01.jpg','borumba-02.jpg','borumba-03.jpg',
              'borumba-04.jpg','borumba-05.jpg','borumba-06.jpg'],
  },
  'clarence-road-liner': {
    hero:    'clarence-01.jpg',
    gallery: ['clarence-01.jpg','clarence-02.jpg','clarence-03.jpg',
              'clarence-04.jpg','clarence-05.jpg','clarence-06.jpg'],
  },
  'albury-reservoir': {
    hero:    'albury-06.jpg',
    gallery: ['albury-06.jpg','albury-01.jpg','albury-02.jpg','albury-03.jpg',
              'albury-04.jpg','albury-05.jpg','albury-07.jpg','albury-08.jpg',
              'albury-09.jpg','albury-10.jpg'],
  },
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function mimeType(filename) {
  const ext = path.extname(filename).toLowerCase()
  return ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg'
}

async function ensureBucket(supabase) {
  const { data: buckets } = await supabase.storage.listBuckets()
  const exists = buckets?.some((b) => b.name === BUCKET)
  if (!exists) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true })
    if (error) throw new Error(`Failed to create bucket: ${error.message}`)
    console.log(`✅  Created bucket: ${BUCKET}`)
  } else {
    // Make sure it is public
    await supabase.storage.updateBucket(BUCKET, { public: true })
    console.log(`✅  Bucket "${BUCKET}" already exists`)
  }
}

async function uploadFile(supabase, localPath, storagePath) {
  const buffer      = fs.readFileSync(localPath)
  const contentType = mimeType(path.basename(localPath))

  // Try to remove old version first (upsert manually)
  await supabase.storage.from(BUCKET).remove([storagePath])

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(storagePath, buffer, { contentType, upsert: true })

  if (error) throw new Error(`Upload failed for ${storagePath}: ${error.message}`)

  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(storagePath)
  return urlData.publicUrl
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  })

  console.log('\n🚀  Starting project image upload to Supabase Storage...\n')

  await ensureBucket(supabase)

  const results = {}   // slug → { heroUrl, galleryUrls }

  for (const [slug, { hero, gallery }] of Object.entries(PROJECT_IMAGES)) {
    console.log(`\n📁  Processing: ${slug}`)
    results[slug] = { heroUrl: null, galleryUrls: [] }

    // Hero
    const heroLocal = path.join(PROJECTS_DIR, hero)
    if (fs.existsSync(heroLocal)) {
      const storagePath = `projects/hero/${slug}-hero${path.extname(hero)}`
      const url = await uploadFile(supabase, heroLocal, storagePath)
      results[slug].heroUrl = url
      console.log(`   ✓ Hero:    ${url}`)
    } else {
      console.warn(`   ⚠  Hero not found locally: ${hero}`)
    }

    // Gallery
    for (const filename of gallery) {
      const localPath = path.join(PROJECTS_DIR, filename)
      if (!fs.existsSync(localPath)) {
        console.warn(`   ⚠  Gallery image not found locally: ${filename}`)
        continue
      }
      const storagePath = `projects/gallery/${slug}-${filename}`
      const url = await uploadFile(supabase, localPath, storagePath)
      results[slug].galleryUrls.push(url)
      console.log(`   ✓ Gallery: ${path.basename(filename)}`)
    }
  }

  // ── Print SQL UPDATE statements ──────────────────────────────────────────
  console.log('\n\n══════════════════════════════════════════════════════════')
  console.log('  SQL to paste into Supabase → SQL Editor')
  console.log('══════════════════════════════════════════════════════════\n')

  for (const [slug, { heroUrl, galleryUrls }] of Object.entries(results)) {
    if (!heroUrl && galleryUrls.length === 0) continue
    const galleryJson = JSON.stringify(galleryUrls).replace(/'/g, "''")
    const heroSql     = heroUrl ? `'${heroUrl}'` : 'NULL'
    console.log(`UPDATE public.cms_projects`)
    console.log(`  SET hero_image_url = ${heroSql},`)
    console.log(`      gallery_urls   = '${galleryJson}'::jsonb,`)
    console.log(`      updated_at     = NOW()`)
    console.log(`  WHERE slug = '${slug}';\n`)
  }

  console.log('══════════════════════════════════════════════════════════')
  console.log('✅  Done! Copy the SQL above and run it in Supabase.')
  console.log('    Then open each project in the CMS to see the images.\n')
}

main().catch((err) => {
  console.error('\n❌  Error:', err.message)
  process.exit(1)
})
