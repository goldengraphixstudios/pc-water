/**
 * blog-batch-8.js - authors + integrates 1 more blog post.
 *
 * Single source of truth for the batch. Two modes:
 *   node scripts/blog-batch-8.js static   -> prints TS entries for
 *                                             lib/cms/static-content.ts (SSG fallback)
 *   node scripts/blog-batch-8.js          -> uploads images + upserts posts to Supabase
 *
 * Images are reused from public/posts (already in the repo).
 */

/* eslint-disable @typescript-eslint/no-require-imports */

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

// -- POSTS --------------------------------------------------------------------
const posts = [
  {
    slug: 'planning-a-water-tank-shutdown-for-relining-refurbishment-and-return-to-service',
    title: 'Planning a Water Tank Shutdown for Relining, Refurbishment and Return to Service',
    excerpt:
      'A tank shutdown is not just a calendar booking. The risk sits in water continuity, access, cleaning, testing, documentation and the decision points that determine whether the asset can safely return to service.',
    coverImage: 'rpvc-hero.jpg',
    readTime: '7 min read',
    publishedAt: '2026-08-28T15:00:00.000Z',
    seoTitle: 'Water Tank Shutdown Planning for Relining and Refurbishment | PC Water',
    seoDescription:
      'How to plan a water tank shutdown for relining or refurbishment, including access, temporary supply, testing, documentation and return-to-service risk.',
    tags: [
      ['tag-tank-maintenance-shutdown-planning', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-rpvc-liners-shutdown-planning', 'RPVC Liners', 'rpvc-liners'],
      ['tag-project-managed-shutdown-planning', 'Project Delivery', 'project-managed'],
    ],
    content: `<p class="article-lead">
  A water tank shutdown usually looks simple on a program: take the tank offline, complete the internal works, test it, and return it to service. In practice, that line item carries more risk than most asset owners expect.
</p>

<p>The tank is not just a container. It is part of a live operating system. It may be feeding a potable network, a fire service, an industrial process, a remote community, or a commercial building that cannot tolerate extended disruption. If the shutdown is planned only around the contractor's site access, the project is already under-scoped.</p>

<p>Good shutdown planning starts with one question: what must remain true while this tank is unavailable? The answer determines temporary supply, staging, isolation points, cleaning method, testing requirements, documentation, and the final return-to-service decision.</p>

<figure>
  <img src="${BASE}/rpvc-hero.jpg" alt="Internal RPVC liner system installed inside a water storage tank"/>
  <figcaption><strong>Relining changes the tank from the inside out.</strong> The work may be physical, but the shutdown plan is operational, compliance-led, and documentation-heavy.</figcaption>
</figure>

<div class="article-divider"><span>The shutdown starts before the tank is empty</span></div>

<h3>Confirm what the tank actually supports</h3>
<p>The first planning failure is assuming everyone knows what the tank feeds. In older facilities, drawings may be incomplete, valves may not match the plan, and pipework may have been modified over years of maintenance. Before any shutdown is approved, the project team should confirm whether the tank supports potable water, fire water, process water, irrigation, washdown, cooling, or more than one function.</p>

<p>This matters because each use has a different tolerance for downtime. A process water tank may affect production. A potable tank may trigger water quality requirements before recommissioning. A fire water tank may create a compliance gap the moment it is isolated. A dual-use asset can create several risks at once.</p>

<h3>Check redundancy before relying on it</h3>
<p>Many sites describe themselves as having backup storage because a second tank exists. That is not the same as proven redundancy. The second tank must have sufficient usable volume, confirmed valve positions, known pump capacity, and enough isolation flexibility to support the site while the primary asset is offline.</p>

<p>If the backup tank has not been inspected, cleaned, or verified recently, it can become the weak point in the shutdown. The maintenance project then depends on an asset whose condition is unknown. That is how a planned intervention becomes an unplanned operational problem.</p>

<div class="article-divider"><span>Access and preparation decide the real program</span></div>

<h3>Internal access is not only a safety issue</h3>
<p>Tank access planning normally focuses on confined space rules, fall protection, ventilation and rescue. Those are non-negotiable, but they are only part of the program risk. Access also determines how quickly the crew can clean, inspect, remove waste, prepare surfaces, install liner panels, test welds and demobilise.</p>

<p>A small hatch can slow material handling. Poor laydown space can delay preparation. Restricted vehicle access can affect vacuum tanker setup, scaffold delivery, crane positioning or waste removal. These are not minor site details. They determine whether a three-day window stays three days.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${BASE}/cleaning-inspection-hero.jpg" alt="Tank cleaning and inspection work being prepared before refurbishment"/>
    <figcaption><strong>Cleaning is part of the shutdown, not a separate chore.</strong> Sediment, coatings, liner condition and access constraints all affect how quickly a tank can be made ready for internal works.</figcaption>
  </figure>
  <figure>
    <img src="${BASE}/fire-tank-inspection.jpg" alt="Fire water tank inspection and maintenance documentation being reviewed"/>
    <figcaption><strong>Return to service needs evidence.</strong> Inspection records, test results and handover notes are what turn a completed repair into a defensible asset decision.</figcaption>
  </figure>
</div>

<h3>Cleaning can reveal a different job</h3>
<p>Shutdown scopes often begin with an assumed repair path: reline the tank, patch a section, replace a fitting, or refurbish the internal surface. But the real condition is confirmed only once the tank is accessed and cleaned. Sediment can hide corrosion. A failed coating can conceal pitting. A liner can look intact from above while failing at penetrations, corners or seam transitions.</p>

<p>The shutdown plan should include decision points. If the inspection reveals structural loss, failed substrate, unexpected contamination, or a non-compliant fitting arrangement, the team needs a defined pathway for engineering review, variation approval and revised return-to-service timing. Without that pathway, the crew finds the issue, everyone stops, and the program starts drifting.</p>

<blockquote class="article-quotable">
  <p>A tank shutdown is not successful because the work finished quickly. It is successful when the asset returns to service with the right evidence behind it: condition confirmed, works completed, testing passed, and operational risk closed.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">4</span>
  <span class="stat-label">Controls that make a shutdown manageable: supply continuity, safe access, condition hold-points, and return-to-service evidence</span>
</div>

<div class="article-divider"><span>Return to service is a controlled step</span></div>

<h3>Testing must match the tank's purpose</h3>
<p>After relining or refurbishment, return to service should not rely on visual completion alone. The testing path depends on the asset. A potable tank may require cleaning verification, disinfection, flushing, water quality testing and confirmation that materials in contact with drinking water are suitable. A fire water tank needs confidence that usable volume, fittings, suction arrangement and inspection records support the required compliance position. An industrial process tank may need chemical compatibility checks or site-specific acceptance criteria.</p>

<p>The mistake is treating testing as paperwork after completion. Testing is part of the program. If samples require lab turnaround, if the tank must hold water for leak verification, or if client witnessing is required, those dates belong in the shutdown plan from the beginning.</p>

<h3>Documentation is what closes the risk</h3>
<p>For an asset owner, the most valuable output is not only the repaired tank. It is the record that proves what was done, what was found, what was tested, and what assumptions remain. Good handover documentation should include pre-work condition notes, photos, cleaning records, material data, liner or coating details, test results, defect notes, and recommendations for future inspection intervals.</p>

<p>That documentation protects the next maintenance decision. It gives the site a baseline, helps insurers and auditors understand the asset condition, and prevents the same questions being reopened from memory two years later.</p>

<div class="article-divider"><span>Shutdown planning checklist</span></div>

<table class="checklist-table">
  <thead>
    <tr><th>Planning question</th><th>Why it matters</th></tr>
  </thead>
  <tbody>
    <tr><td>What systems does the tank support?</td><td>Potable, fire, process and dual-use tanks carry different shutdown risks</td></tr>
    <tr><td>Is redundancy verified, not assumed?</td><td>Backup tanks and alternate supply paths must have confirmed usable capacity</td></tr>
    <tr><td>Are access and laydown constraints known?</td><td>Hatches, cranes, vacuum equipment, waste removal and scaffold can drive the real schedule</td></tr>
    <tr><td>What condition findings trigger a hold-point?</td><td>Structural loss, failed coatings or unexpected contamination may change the repair pathway</td></tr>
    <tr><td>What evidence is needed before return to service?</td><td>Testing, photos, materials records and handover documentation close the compliance loop</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">How long should a water tank shutdown be planned for?</p>
  <p class="faq-a">The shutdown length depends on tank size, access, cleaning requirement, repair scope, liner or coating system, testing requirements and whether the tank needs laboratory water quality clearance before return to service. The safer approach is to plan around hold-points rather than assume a fixed duration from the first site walk.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a tank be relined without interrupting site water supply?</p>
  <p class="faq-a">Sometimes, but only if the site has verified redundancy or an acceptable temporary supply arrangement. The tank being relined must usually be isolated, cleaned and accessed internally, so continuity depends on what other storage, pumping or supply options can safely support the site during that window.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the biggest cause of delay during tank refurbishment?</p>
  <p class="faq-a">The common delay is not the liner or repair work itself. It is an unexpected condition finding after cleaning, unclear approval pathway for variations, poor access planning, delayed testing, or missing return-to-service documentation requirements. These can all be planned for before the tank comes offline.</p>
</div>

<div class="article-cta">
  <p>Planning a relining or refurbishment window? PC Water Infrastructure can help scope the shutdown, confirm the condition risks and return the asset to service with the right evidence behind it.</p>
  <a href="/contact" class="cta-btn">Plan a tank shutdown</a>
</div>`,
  },
]

// -- IMAGE UPLOAD LIST (unique images referenced) ------------------------------
const imageFiles = [
  'rpvc-hero.jpg',
  'cleaning-inspection-hero.jpg',
  'fire-tank-inspection.jpg',
]

// -- STATIC MODE: print TS entries for lib/cms/static-content.ts ---------------
function toStatic() {
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{(?!BASE\})/g, '\\${')
  const out = posts
    .map((p) => {
      const content = esc(p.content).split(BASE + '/').join('${BASE}/')
      const tags = p.tags.map(([id, name, slug]) => `      { id: '${id}', name: '${name}', slug: '${slug}' },`).join('\n')
      return `  {
    id: staticId('post', '${p.title.replace(/'/g, "\\'").slice(0, 60)}'),
    title: ${JSON.stringify(p.title)},
    slug: '${p.slug}',
    excerpt:
      ${JSON.stringify(p.excerpt)},
    content: \`${content}\`,
    coverImageUrl: \`\${BASE}/${p.coverImage}\`,
    readTime: '${p.readTime}',
    status: 'published',
    seoTitle: ${JSON.stringify(p.seoTitle)},
    seoDescription:
      ${JSON.stringify(p.seoDescription)},
    publishedAt: '${p.publishedAt}',
    createdAt: '${p.publishedAt}',
    updatedAt: '${p.publishedAt}',
    tags: [
${tags}
    ],
  },`
    })
    .join('\n')
  process.stdout.write(out + '\n')
}

async function ensureTags(sb, tagTriples) {
  const tags = tagTriples.map(([, name, slug]) => ({ name, slug }))
  if (!tags.length) return []

  const { data, error } = await sb
    .from('cms_tags')
    .upsert(tags, { onConflict: 'slug' })
    .select('id,name,slug')

  if (error) throw new Error(`Tag upsert failed: ${error.message}`)
  return data || []
}

async function syncPostTags(sb, postId, tagTriples) {
  const tags = await ensureTags(sb, tagTriples)
  const { error: deleteError } = await sb.from('cms_post_tags').delete().eq('post_id', postId)
  if (deleteError) throw new Error(`Tag cleanup failed: ${deleteError.message}`)
  if (!tags.length) return

  const { error: insertError } = await sb
    .from('cms_post_tags')
    .insert(tags.map((tag) => ({ post_id: postId, tag_id: tag.id })))

  if (insertError) throw new Error(`Tag link failed: ${insertError.message}`)
}

// -- INSERT MODE: upload images + upsert posts to Supabase ---------------------
async function insert() {
  const { createClient } = require('@supabase/supabase-js')
  const fs = require('fs')
  const path = require('path')
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.SUPABASE_SECRET_KEY || '')
  const POSTS_DIR = path.join(process.cwd(), 'public', 'posts')

  console.log('\nUploading images...')
  for (const name of imageFiles) {
    const localPath = path.join(POSTS_DIR, name)
    if (!fs.existsSync(localPath)) {
      console.warn(`  missing ${name}`)
      continue
    }
    const buf = fs.readFileSync(localPath)
    const ct = name.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'
    const { error } = await sb.storage.from('cms-media').upload(`posts/${name}`, buf, { contentType: ct, upsert: true })
    console.log(error ? `  x ${name}: ${error.message}` : `  ok ${name}`)
  }

  console.log('\nUpserting posts...')
  for (const p of posts) {
    const { data, error } = await sb.from('cms_posts').upsert(
      {
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        cover_image_url: `${BASE}/${p.coverImage}`,
        content: p.content,
        read_time: p.readTime,
        status: 'published',
        seo_title: p.seoTitle,
        seo_description: p.seoDescription,
        published_at: p.publishedAt,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'slug' },
    ).select('id').single()

    if (error || !data) {
      console.log(`  x ${p.slug}: ${error?.message || 'No post returned'}`)
      continue
    }

    await syncPostTags(sb, data.id, p.tags)
    console.log(`  ok ${p.slug}`)
  }
  console.log('\nDone.')
}

if (process.argv[2] === 'static') {
  toStatic()
} else {
  insert().catch((e) => {
    console.error(e)
    process.exit(1)
  })
}
