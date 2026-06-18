/**
 * fix-seo-titles.js
 * Fixes Ahrefs title length warnings:
 * 1. Shortens " | PC Water Infrastructure" suffix to " | PC Water" in metadata
 * 2. Shortens specific main titles that remain over 60 chars
 * 3. Fixes project seoDescription fields that are far too long
 * 4. Fixes blog post seoTitle lengths in static-content.ts and Supabase
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SECRET_KEY || ''
)

const APP_DIR = path.join(__dirname, '..', 'app')

// ─── Step 1: Fix suffix in all static page files ──────────────────────────────
// Replace " | PC Water Infrastructure" with " | PC Water" in title metadata fields only
function fixSuffixInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const original = content

  // Match title: '...' or title: "..." patterns in metadata objects
  // Also match seoTitle, og:title etc.
  // Be surgical: only replace in string literals that end with | PC Water Infrastructure
  content = content.replace(/ \| PC Water Infrastructure'/g, " | PC Water'")
  content = content.replace(/ \| PC Water Infrastructure"/g, ' | PC Water"')
  content = content.replace(/ \| PC Water Infrastructure`/g, ' | PC Water`')

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8')
    return true
  }
  return false
}

// ─── Step 2: Fix specific titles that are still too long after suffix change ──
const SPECIFIC_TITLE_FIXES = {
  // homepage
  [path.join(APP_DIR, 'page.tsx')]: [
    {
      find: /title:\s*['"]Engineered Water Infrastructure Solutions Australia \| PC Water['"]/,
      replace: `title: 'Water Infrastructure Solutions Australia | PC Water'`,
    },
  ],
  // services/builder-contractor-partnerships
  [path.join(APP_DIR, 'services/builder-contractor-partnerships/page.tsx')]: [
    {
      find: /Builder [&amp;]? ?& ?Contractor Water Infrastructure Partnerships \| PC Water/,
      replace: 'Builder & Contractor Partnerships | PC Water',
    },
  ],
  // services/fire-water-tanks
  [path.join(APP_DIR, 'services/fire-water-tanks/page.tsx')]: [
    {
      find: /Fire Water Tank Solutions Australia \| PC Water/,
      replace: 'Fire Water Tank Solutions | PC Water',
    },
  ],
  // services/remote-area-delivery
  [path.join(APP_DIR, 'services/remote-area-delivery/page.tsx')]: [
    {
      find: /Remote Area Water Infrastructure Delivery \| PC Water/,
      replace: 'Remote Area Water Infrastructure | PC Water',
    },
  ],
  // services/tank-maintenance-upgrades
  [path.join(APP_DIR, 'services/tank-maintenance-upgrades/page.tsx')]: [
    {
      find: /Tank Maintenance, Upgrades & Refurbishment Australia \| PC Water/,
      replace: 'Tank Maintenance & Refurbishment | PC Water',
    },
  ],
  // services/tender-procurement-support
  [path.join(APP_DIR, 'services/tender-procurement-support/page.tsx')]: [
    {
      find: /Water Infrastructure Tender & Procurement Support \| PC Water/,
      replace: 'Tender & Procurement Support | PC Water',
    },
  ],
  // industries/commercial-fire-compliance
  [path.join(APP_DIR, 'industries/commercial-fire-compliance/page.tsx')]: [
    {
      find: /Fire Water Tank Solutions for Commercial Properties \| PC Water/,
      replace: 'Commercial Fire Water Tank Solutions | PC Water',
    },
  ],
  // industries/remote-regional-communities
  [path.join(APP_DIR, 'industries/remote-regional-communities/page.tsx')]: [
    {
      find: /Water Storage for Remote & Regional Communities \| PC Water/,
      replace: 'Remote & Regional Water Storage | PC Water',
    },
  ],
  // industries/government-councils
  [path.join(APP_DIR, 'industries/government-councils/page.tsx')]: [
    {
      find: /Water Storage Solutions for Government & Councils \| PC Water/,
      replace: 'Water Storage for Government & Councils | PC Water',
    },
  ],
  // tools/tank-compliance-checker
  [path.join(APP_DIR, 'tools/tank-compliance-checker/page.tsx')]: [
    {
      find: /Tank Compliance Checker[^'"]*\| PC Water/,
      replace: 'Water Tank Compliance Checker | PC Water',
    },
  ],
  // tools/repair-reline-replace
  [path.join(APP_DIR, 'tools/repair-reline-replace/page.tsx')]: [
    {
      find: /Repair, Reline or Replace[^'"]*\| PC Water/,
      replace: 'Repair, Reline or Replace? | PC Water',
    },
  ],
  // commitment
  [path.join(APP_DIR, 'commitment/page.tsx')]: [
    {
      find: /Safety, Quality [&amp;]? ?& ?Compliance Commitment \| PC Water/,
      replace: 'Safety, Quality & Compliance | PC Water',
    },
  ],
  // industries/mining-resources
  [path.join(APP_DIR, 'industries/mining-resources/page.tsx')]: [
    {
      find: /Water Storage for Mining & Resources \| PC Water/,
      replace: 'Water Storage for Mining & Resources | PC Water',
    },
  ],
}

// ─── Step 3: Fix project description lengths in [slug]/page.tsx ───────────────
// Project pages get their description from the CMS project's seoDescription field
// The actual descriptions are being used as meta descriptions but they're too long
// Fix: limit description in the metadata generation to 160 chars

// ─── Step 4: Fix blog seoTitle lengths in static-content.ts ──────────────────
const STATIC_CONTENT_TITLE_FIXES = [
  {
    from: "seoTitle: 'Birds Inside Australian Water Tanks: Exclusion Failures Explained | PC Water'",
    to: "seoTitle: 'Birds Inside Australian Water Tanks | PC Water'",
  },
  {
    from: "seoTitle: '5 Water Tank Contamination Risks That Aren\\'t About Source Water | PC Water'",
    to: "seoTitle: '5 Water Tank Contamination Risks | PC Water'",
  },
  {
    from: "seoTitle: 'How Wildlife Gets Into Water Tanks Through the Overflow Drain | PC Water'",
    to: "seoTitle: 'Wildlife Entry Through Tank Overflow Drain | PC Water'",
  },
  {
    from: "seoTitle: 'Water Tank Vandalism: Hidden Contamination Risks Explained | PC Water'",
    to: "seoTitle: 'Water Tank Vandalism: Hidden Contamination Risks | PC Water'",
  },
  {
    from: "seoTitle: 'Water is Food: Your Tank is the Crockery | PC Water Infrastructure'",
    to: "seoTitle: 'Water is Food: Your Tank is the Crockery | PC Water'",
  },
]

// ─── Step 5: Fix project descriptions in Supabase ────────────────────────────
const PROJECT_DESC_FIXES = [
  {
    slug: 'borumba-hydro',
    seo_description: 'PC Water designed and installed two 521kL dual-purpose tanks — potable and effluent storage — at the Borumba Dam hydro scheme site in Queensland.',
  },
  {
    slug: 'hobart-nyrstar',
    seo_description: 'Two industrial water tanks for the Nyrstar zinc smelter in Hobart — specialist corrosion-resistant engineering for a harsh processing environment.',
  },
  {
    slug: 'doomadgee-wtp',
    seo_description: 'PC Water delivering a 2ML ground-level tank for Doomadgee community in remote Queensland — supporting the water treatment plant infrastructure.',
  },
  {
    slug: 'albury-reservoir',
    seo_description: 'RPVC liner installation and full refurbishment of a 600kL Albury NSW reservoir — restoring AS4020 potable water compliance and extending asset life.',
  },
  {
    slug: 'kybrook-nt',
    seo_description: '90kL stainless steel elevated potable water tank replacement at Kybrook Farm, Pine Creek NT — remote Northern Territory delivery by PC Water.',
  },
  {
    slug: 'clarence-road-liner',
    seo_description: 'RPVC liner replacement for two commercial water storage tanks at 107 Clarence Road — restoring compliance and avoiding full asset replacement.',
  },
]

// ─── Blog title fixes in Supabase ────────────────────────────────────────────
const BLOG_TITLE_FIXES = [
  {
    slug: 'birds-are-the-most-common-body-found-inside-australian-tanks',
    seo_title: 'Birds Inside Australian Water Tanks | PC Water',
    seo_description: 'Bird remains, feathers, and nesting material are structural evidence of roof-level exclusion failures in water storage tanks. Here\'s what to fix first.',
  },
  {
    slug: 'vandalism-and-your-water-tank-the-damage-that-goes-unreported',
    seo_title: 'Water Tank Vandalism: Hidden Contamination Risks | PC Water',
    seo_description: 'The real cost of water tank vandalism is rarely the visible damage. Forced hatches, broken locks, and torn vent screens leave contamination pathways open.',
  },
  {
    slug: 'the-open-overflow-wildlife-drain-point',
    seo_title: 'Wildlife Entry Through Tank Overflow Drain | PC Water',
    seo_description: 'The overflow drain is the most overlooked animal entry point in water storage. Here\'s how wildlife gets in and what a flapper valve costs vs a contamination event.',
  },
  {
    slug: '5-contamination-risks-not-source-water',
    seo_title: '5 Water Tank Contamination Risks | PC Water',
    seo_description: 'Most water quality failures get blamed on the source. But five contamination risks exist entirely within the storage asset — none visible at the tap until too late.',
  },
  {
    slug: 'evidence-water-quality-issues-warning-signs',
    seo_title: 'Water Quality Warning Signs in a Storage Tank | PC Water',
    seo_description: 'Every piece of physical evidence inside a water storage tank is a clue — floating debris, sediment, staining, and animal remains each point to a specific contamination source.',
  },
  {
    slug: 'water-is-food-your-tank-is-the-crockery',
    seo_title: 'Water is Food: Your Tank is the Crockery | PC Water',
    seo_description: 'Water is food — literally. The storage vessel matters as much as the source. A sharp look at why tank condition is a public health issue, not just a maintenance one.',
  },
  {
    slug: 'how-we-clean-a-water-tank-diver-vacuuming-method',
    seo_title: 'How We Clean a Water Tank: Diver Vacuuming | PC Water',
    seo_description: 'A diver descends while your taps keep running. The diver vacuuming method, cleaning intervals by tank type, and what sediment levels mean for water quality.',
  },
  {
    slug: 'how-rpvc-liners-extend-the-life-of-aging-water-tanks',
    seo_title: 'How RPVC Liners Extend Aging Water Tank Life | PC Water',
    seo_description: 'Aging water storage tanks don\'t always need replacing. RPVC liners extend tank service life by 10–20 years at a fraction of replacement cost.',
  },
]

// ─── Run all fixes ─────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🔧 Step 1: Replacing suffix in all page files...')

  // Get all TSX/TS files in app directory
  function getAllFiles(dir, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        getAllFiles(fullPath, files)
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
        files.push(fullPath)
      }
    }
    return files
  }

  const allAppFiles = getAllFiles(APP_DIR)
  let suffixFixed = 0
  for (const file of allAppFiles) {
    if (fixSuffixInFile(file)) {
      console.log(`  ✓ Suffix fixed: ${path.relative(APP_DIR, file)}`)
      suffixFixed++
    }
  }
  // Also fix static-content.ts
  const staticContentPath = path.join(__dirname, '..', 'lib', 'cms', 'static-content.ts')
  if (fixSuffixInFile(staticContentPath)) {
    console.log(`  ✓ Suffix fixed: lib/cms/static-content.ts`)
    suffixFixed++
  }
  console.log(`  → ${suffixFixed} files updated`)

  console.log('\n🔧 Step 2: Fixing specific overly-long titles in page files...')
  for (const [filePath, fixes] of Object.entries(SPECIFIC_TITLE_FIXES)) {
    if (!fs.existsSync(filePath)) {
      console.warn(`  ⚠ File not found: ${filePath}`)
      continue
    }
    let content = fs.readFileSync(filePath, 'utf8')
    const original = content
    for (const { find, replace } of fixes) {
      content = content.replace(find, replace)
    }
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`  ✓ Title shortened: ${path.relative(APP_DIR + '/..', filePath)}`)
    }
  }

  console.log('\n🔧 Step 3: Fixing blog seoTitle lengths in static-content.ts...')
  let staticContent = fs.readFileSync(staticContentPath, 'utf8')
  for (const { from, to } of STATIC_CONTENT_TITLE_FIXES) {
    if (staticContent.includes(from)) {
      staticContent = staticContent.replace(from, to)
      console.log(`  ✓ Fixed: ${from.substring(0, 60)}...`)
    }
  }
  fs.writeFileSync(staticContentPath, staticContent, 'utf8')

  console.log('\n🔧 Step 4: Fixing project seoDescription fields in Supabase...')
  for (const fix of PROJECT_DESC_FIXES) {
    const { error } = await sb
      .from('cms_projects')
      .update({ seo_description: fix.seo_description })
      .eq('slug', fix.slug)
    if (error) {
      console.error(`  ✗ Failed to update project "${fix.slug}": ${error.message}`)
    } else {
      console.log(`  ✓ Updated project: ${fix.slug} (${fix.seo_description.length} chars)`)
    }
  }

  console.log('\n🔧 Step 5: Fixing blog seoTitle/seoDescription in Supabase...')
  for (const fix of BLOG_TITLE_FIXES) {
    const updateData = {}
    if (fix.seo_title) updateData.seo_title = fix.seo_title
    if (fix.seo_description) updateData.seo_description = fix.seo_description
    const { error } = await sb
      .from('cms_posts')
      .update(updateData)
      .eq('slug', fix.slug)
    if (error) {
      console.error(`  ✗ Failed to update post "${fix.slug}": ${error.message}`)
    } else {
      console.log(`  ✓ Updated post: ${fix.slug}`)
    }
  }

  console.log('\n✅ All SEO title fixes applied!')
}

main().catch(console.error)
