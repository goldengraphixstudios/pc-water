/**
 * update-project-images.mjs
 * Wires Supabase storage URLs into the cms_projects table records.
 * Run after upload-project-images.mjs has finished.
 */
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL     = 'https://mhggidgfivmdgkjerejn.supabase.co'
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SERVICE_ROLE_KEY) {
  console.error('❌  SUPABASE_SERVICE_ROLE_KEY not set'); process.exit(1)
}

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media'

const UPDATES = [
  {
    slug: 'doomadgee-wtp',
    hero_image_url: `${BASE}/projects/hero/doomadgee-wtp-hero.jpg`,
    gallery_urls: [
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-01.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-02.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-03.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-04.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-05.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-06.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-07.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-08.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-09.jpg`,
      `${BASE}/projects/gallery/doomadgee-wtp-doomadgee-10.jpg`,
    ],
  },
  {
    slug: 'hobart-nyrstar',
    hero_image_url: `${BASE}/projects/hero/hobart-nyrstar-hero.jpg`,
    gallery_urls: [
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-01.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-02.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-03.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-04.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-05.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-06.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-07.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-08.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-09.jpg`,
      `${BASE}/projects/gallery/hobart-nyrstar-hobart-10.jpg`,
    ],
  },
  {
    slug: 'borumba-hydro',
    hero_image_url: `${BASE}/projects/hero/borumba-hydro-hero.jpg`,
    gallery_urls: [
      `${BASE}/projects/gallery/borumba-hydro-borumba-01.jpg`,
      `${BASE}/projects/gallery/borumba-hydro-borumba-02.jpg`,
      `${BASE}/projects/gallery/borumba-hydro-borumba-03.jpg`,
      `${BASE}/projects/gallery/borumba-hydro-borumba-04.jpg`,
      `${BASE}/projects/gallery/borumba-hydro-borumba-05.jpg`,
      `${BASE}/projects/gallery/borumba-hydro-borumba-06.jpg`,
    ],
  },
  {
    slug: 'clarence-road-liner',
    hero_image_url: `${BASE}/projects/hero/clarence-road-liner-hero.jpg`,
    gallery_urls: [
      `${BASE}/projects/gallery/clarence-road-liner-clarence-01.jpg`,
      `${BASE}/projects/gallery/clarence-road-liner-clarence-02.jpg`,
      `${BASE}/projects/gallery/clarence-road-liner-clarence-03.jpg`,
      `${BASE}/projects/gallery/clarence-road-liner-clarence-04.jpg`,
      `${BASE}/projects/gallery/clarence-road-liner-clarence-05.jpg`,
      `${BASE}/projects/gallery/clarence-road-liner-clarence-06.jpg`,
    ],
  },
  {
    slug: 'albury-reservoir',
    hero_image_url: `${BASE}/projects/hero/albury-reservoir-hero.jpg`,
    gallery_urls: [
      `${BASE}/projects/gallery/albury-reservoir-albury-06.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-01.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-02.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-03.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-04.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-05.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-07.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-08.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-09.jpg`,
      `${BASE}/projects/gallery/albury-reservoir-albury-10.jpg`,
    ],
  },
]

async function main() {
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  })

  console.log('\n🔄  Updating cms_projects image URLs in Supabase...\n')

  for (const { slug, hero_image_url, gallery_urls } of UPDATES) {
    const { error } = await supabase
      .from('cms_projects')
      .update({ hero_image_url, gallery_urls, updated_at: new Date().toISOString() })
      .eq('slug', slug)

    if (error) {
      // If row doesn't exist yet (slug not in DB), skip gracefully
      if (error.message?.includes('0 rows')) {
        console.warn(`  ⚠  No DB row for slug "${slug}" — create it in CMS first`)
      } else {
        console.error(`  ❌  ${slug}: ${error.message}`)
      }
    } else {
      console.log(`  ✅  ${slug}`)
    }
  }

  console.log('\n✅  Done. Open the CMS panel to see images in every project.\n')
}

main().catch((err) => { console.error('❌', err.message); process.exit(1) })
