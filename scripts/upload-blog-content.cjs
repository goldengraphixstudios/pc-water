/**
 * upload-blog-content.cjs
 * Uploads blog images to Supabase and updates cms_posts content with rich HTML.
 * Run: node scripts/upload-blog-content.cjs
 */

const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

// ── Config ─────────────────────────────────────────────────────────────────────

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://mhggidgfivmdgkjerejn.supabase.co'
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_KEY || ''
const BUCKET       = 'cms-media'
const BASE_URL     = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/posts`

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ── Upload helper ──────────────────────────────────────────────────────────────

async function uploadFile(localPath, storageName) {
  const data = fs.readFileSync(localPath)
  const ext = path.extname(localPath).toLowerCase()
  const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg'
    : ext === '.png' ? 'image/png'
    : ext === '.webp' ? 'image/webp'
    : 'image/jpeg'

  const storagePath = `posts/${storageName}`

  // Check if already exists
  const { data: existing } = await supabase.storage.from(BUCKET).list('posts', { search: storageName })
  if (existing && existing.length > 0) {
    console.log(`  ✓ Already exists: ${storageName}`)
    return `${BASE_URL}/${storageName}`
  }

  const { data: uploaded, error } = await supabase.storage.from(BUCKET).upload(storagePath, data, {
    contentType: mime,
    upsert: true,
  })

  if (error) {
    console.error(`  ✗ Upload failed for ${storageName}: ${error.message}`)
    return null
  }

  console.log(`  ✓ Uploaded: ${storageName}`)
  return `${BASE_URL}/${storageName}`
}

// ── Update post content in Supabase ───────────────────────────────────────────

async function updatePostContent(slug, html) {
  // First find the post
  const { data: posts, error: fetchErr } = await supabase
    .from('cms_posts')
    .select('id, slug')
    .eq('slug', slug)

  if (fetchErr) {
    console.error(`  ✗ Fetch error for ${slug}: ${fetchErr.message}`)
    return
  }

  if (!posts || posts.length === 0) {
    console.log(`  ⚠ Post not found in DB for slug: ${slug} — skipping DB update`)
    return
  }

  const { error: updateErr } = await supabase
    .from('cms_posts')
    .update({ content: html, updated_at: new Date().toISOString() })
    .eq('slug', slug)

  if (updateErr) {
    console.error(`  ✗ Update error for ${slug}: ${updateErr.message}`)
  } else {
    console.log(`  ✓ Updated DB content for: ${slug}`)
  }
}

// ── Article 1: Water is Food ───────────────────────────────────────────────────

async function processWaterIsFood() {
  console.log('\n=== Article 1: Water is Food ===')
  const dir = 'C:/Users/My PC/Downloads/Blog Drafts/Water is Food 101'

  const [hero, damaged, biological, diver] = await Promise.all([
    uploadFile(path.join(dir, 'Blog 1 - Wide Shot of Water Storage Tank Exterior.jpeg'), 'water-food-hero.jpg'),
    uploadFile(path.join(dir, 'Blog 1 - image - damaged roof access - ChatGPT.png'), 'water-food-damaged-roof.png'),
    uploadFile(path.join(dir, 'Blog 1 - image - biological matters - ChatGPT.png'), 'water-food-biological.png'),
    uploadFile(path.join(dir, 'Blog 1 - image - diver - ChatGPT - blog 1.png'), 'water-food-diver.png'),
  ])

  const html = `<p class="article-lead">
  Water is food. Not metaphorically — literally. We pipe it into people's homes and serve it up 24 hours a day. Which means the vessel it's stored in matters as much as what's in it.
</p>

<p>Think of it this way: your water treatment plant is the kitchen. The distribution system is the crockery. Anyone who's watched <em>Ramsay's Kitchen Nightmares</em> knows that a brilliant kitchen can still send people to hospital if the plates are dirty. The same logic applies to every storage tank in Australia.</p>

<figure>
  <img src="${hero}" alt="Wide shot of water storage tank exterior showing roof and access hatch condition"/>
  <figcaption><strong>Water storage tank exterior.</strong> Roof condition, access hatch integrity, and external corrosion are key indicators assessed during a formal tank inspection.</figcaption>
</figure>

<p>Across Australia, there are thousands of potable water storage tanks that have never been properly assessed. Tanks with cracked roofs where birds roost and leave waste behind. Tanks with corroded walls leaching iron into treated drinking water. Tanks whose liners failed years ago, silently.</p>

<p>The difference between a dirty plate and a dirty tank? You can see the plate. Most Australians have no idea what condition the vessel holding their drinking water is in — and in many cases, neither do the asset owners.</p>

<div class="article-divider"><span>The cost of looking away</span></div>

<div class="article-photo-grid">
  <figure>
    <img src="${damaged}" alt="Damaged roof access hatch — common animal entry point for water storage tanks"/>
    <figcaption>Damaged roof access — a common animal entry point</figcaption>
  </figure>
  <figure>
    <img src="${biological}" alt="Biological matter found inside a neglected water storage tank"/>
    <figcaption>Biological matter found inside a neglected tank</figcaption>
  </figure>
</div>

<p>Proactive maintenance isn't expensive — deferred maintenance is. A tank that receives regular inspection and cleaning costs a fraction of one that requires emergency remediation or full replacement. The restaurants that make their customers sick don't stay in business long. The water industry works the same way.</p>

<div class="article-pull-stat">
  <span class="stat-num">5×</span>
  <span class="stat-label">The estimated cost difference between timely rehabilitation and full tank replacement</span>
</div>

<p>The question isn't whether your tank is at risk. It's whether you know the condition it's in right now — and whether that would hold up if someone looked inside.</p>

<blockquote class="article-quotable">
  <p>In Australia, potable water storage tanks sit between the treatment plant and the tap — but unlike the plant itself, many are never formally inspected. A tank with a cracked roof or failed liner can silently re-contaminate treated water over months or years. Proactive inspection and maintenance is not optional infrastructure spending; it is the last line of defence before the tap.</p>
</blockquote>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">Why is water stored in tanks if it has already been treated?</p>
  <p class="faq-a">Treated water needs to be held close to where it is used — treatment plants cannot pump on demand around the clock. Storage tanks are the buffer between treatment and distribution. Their condition directly affects the quality of water that reaches the tap.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a water storage tank contaminate drinking water?</p>
  <p class="faq-a">Yes. A tank with a damaged roof, corroded lining, or cracked access hatch can allow animal entry, sediment accumulation, and chemical leaching into treated drinking water. PC Water Infrastructure inspects and assesses tanks against <strong>AS4020</strong> compliance criteria to identify exactly these failure modes.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often does a water storage tank need to be inspected in Australia?</p>
  <p class="faq-a">For fire water storage tanks, <strong>AS1851-2012</strong> mandates routine inspection at defined intervals. For potable storage tanks, most Australian water authorities target inspection cycles of 1–4 years depending on tank size, condition history, and risk rating.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What are the early warning signs that a water storage tank needs attention?</p>
  <p class="faq-a">Common indicators include discoloured water, taste or odour changes, visible external corrosion, access hatches that no longer seal properly, and evidence of roof damage or animal activity near inlet or overflow points. Many failures are internal and cannot be identified without a formal inspection.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the difference between a potable water tank and a fire water tank?</p>
  <p class="faq-a">A potable water tank must meet <strong>AS4020</strong>, which governs materials in contact with drinking water. A fire water tank is designed to hold non-potable water under <strong>AS2304</strong>. The two are not interchangeable — inspection, lining, and maintenance requirements differ significantly between the two standards.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure provides inspection, cleaning, and condition assessment for water storage assets across Australia — potable, fire, and industrial.</p>
  <a href="/contact" class="cta-btn">Request an inspection</a>
</div>`

  await updatePostContent('water-is-food-your-tank-is-the-crockery', html)
  return { html, hero }
}

// ── Article 2: Fire Tank Compliance ───────────────────────────────────────────

async function processFireTank() {
  console.log('\n=== Article 2: Fire Tank Compliance ===')
  const dir = 'C:/Users/My PC/Downloads/Blog Drafts/Fire Tank Compliance'

  const [hero, internal, hatch, corroded, rpvc] = await Promise.all([
    uploadFile(path.join(dir, 'fire-tank-hero.png'), 'fire-tank-hero.png'),
    uploadFile(path.join(dir, 'fire-tank-internal-inspection.png'), 'fire-tank-internal-inspection.png'),
    uploadFile(path.join(dir, 'fire-tank-access-hatch.png'), 'fire-tank-access-hatch.png'),
    uploadFile(path.join(dir, 'fire-tank-corroded-internal.png'), 'fire-tank-corroded-internal.png'),
    uploadFile(path.join(dir, 'fire-tank-rpvc-liner.png'), 'fire-tank-rpvc-liner.png'),
  ])

  const html = `<p class="article-lead">
  When it comes to fire safety, cutting corners is not an option. Yet across Australia, countless facilities are running fire protection systems that don't meet compliance standards — often without realising it.
</p>

<p>Two standards govern fire water storage tanks in Australia. <strong>AS 2304</strong> covers the design, fabrication, and installation of water storage tanks specifically for fire protection — including capacity, materials, fittings, and access. <strong>AS 1851</strong> governs the routine service of fixed fire protection systems, mandating inspection intervals, testing requirements, and documented maintenance records. Together, these two standards define what a compliant fire tank looks like at installation, and what keeping it compliant requires throughout its operational life.</p>

<figure>
  <img src="${hero}" alt="Fire water storage tank exterior at industrial facility"/>
  <figcaption><strong>Fire water storage tank.</strong> External condition, access provisions, and fitting integrity are all assessed against AS 2304 requirements during a compliance inspection.</figcaption>
</figure>

<div class="article-divider"><span>Why fire tanks fail compliance</span></div>

<p>Fire tanks fail compliance for a consistent set of reasons. Tank capacity is insufficient for the calculated demand — particularly common where hazard classifications have changed since original installation. Fittings, pipework, and valves are degraded, corroded, or incompatible with current standards. Internal coatings and liners have deteriorated beyond the acceptable condition threshold for AS 2304 materials. Inspection and service records are incomplete, missing mandatory test results, or have lapsed beyond the required intervals under AS 1851.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${internal}" alt="Internal inspection of fire water storage tank showing coating condition"/>
    <figcaption>Internal inspection — coating condition and sediment accumulation are key compliance indicators</figcaption>
  </figure>
  <figure>
    <img src="${hatch}" alt="Fire tank access hatch showing seal condition"/>
    <figcaption>Access hatch integrity — a common failure point under AS 2304 inspection criteria</figcaption>
  </figure>
</div>

<p>Physical failure modes include corrosion of inlet and outlet pipework, blocked strainers, seized valves, and damaged access hatches that compromise the integrity of stored water. In tanks that have been out of routine service for several cycles, sediment accumulation and biofilm growth add contamination risk to the structural concerns.</p>

<div class="article-pull-stat">
  <span class="stat-num">3–5×</span>
  <span class="stat-label">Cost multiplier between timely maintenance and emergency remediation or full replacement</span>
</div>

<blockquote class="article-quotable">
  <p>The cost of non-compliance extends beyond regulatory penalties. Insurance claims may be denied where fire protection systems are found non-compliant at the time of a loss event. Principal contractor liability under building and fire codes can attach where compliance documentation is absent.</p>
</blockquote>

<div class="article-divider"><span>The path back to compliance</span></div>

<p>The fastest path back to compliance starts with an independent inspection and a documented deficiency register. Once the gaps are identified, the decision becomes commercial rather than speculative: repair, reline, upgrade, or replace. For tanks where the structure remains sound, internal relining under AS 2304-compliant materials is consistently the most cost-effective remediation pathway.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${corroded}" alt="Corroded fire tank internal — common failure mode requiring remediation"/>
    <figcaption>Internal corrosion — a structural and water quality concern requiring documented remediation</figcaption>
  </figure>
  <figure>
    <img src="${rpvc}" alt="RPVC liner installation inside a fire water storage tank"/>
    <figcaption>RPVC liner installation restores compliance and eliminates ongoing corrosion</figcaption>
  </figure>
</div>

<p>Prevention is simpler than remediation. A compliant maintenance program under AS 1851 — with documented inspection records, test results, and deficiency tracking — keeps fire tanks in the window where issues are addressable at routine maintenance cost, not emergency remediation cost.</p>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">What is AS 2304 and who does it apply to?</p>
  <p class="faq-a">AS 2304 is the Australian Standard governing the design, construction, and installation of water tanks used for fire protection systems. It applies to any facility with a dedicated fire water tank — including commercial, industrial, mining, healthcare, and government sites.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often does a fire tank need to be inspected under AS 1851?</p>
  <p class="faq-a">AS 1851 requires monthly visual checks, annual internal inspections, and five-year structural integrity assessments. Independent specialist inspections should occur every 1–4 years depending on the tank's condition, operating environment, and risk profile. All inspections must be formally documented and records retained.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can an existing non-compliant fire tank be upgraded, or does it need to be replaced?</p>
  <p class="faq-a">Many non-compliant tanks can be brought up to standard through targeted retrofits — adding compliant access hatches, installing an RPVC liner, replacing corroded fittings, and upgrading outlet configurations. Full replacement is usually a last resort.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What documentation is required to prove fire tank compliance?</p>
  <p class="faq-a">You need documented records of every inspection, test, and maintenance activity as required by AS 1851. This includes monthly visual check logs, annual internal inspection reports, five-year structural assessment reports, and records of any modifications or remedial works.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure provides inspection, condition assessment, and remediation for fire water storage tanks across Australia — including RPVC relining, pipework replacement, valve servicing, and full compliance documentation.</p>
  <a href="/contact" class="cta-btn">Arrange a compliance inspection</a>
</div>`

  await updatePostContent('why-your-fire-tank-might-fail-compliance-and-how-to-fix-it-fast', html)
  return { html, hero }
}

// ── Article 3: From Mines to Hospitals ────────────────────────────────────────

async function processMines() {
  console.log('\n=== Article 3: From Mines to Hospitals ===')
  const dir = 'C:/Users/My PC/Downloads/Blog Drafts/From Mines to Hospitals - Tank Maintenance Mistakes'

  const [hero, inspection, maintenance] = await Promise.all([
    uploadFile(path.join(dir, 'sector-mistakes-hero-industrial-tank.png'), 'sector-hero.jpg'),
    uploadFile(path.join(dir, 'sector-mistakes-inline-01-inspection.png'), 'sector-inline-inspection.png'),
    uploadFile(path.join(dir, 'sector-mistakes-inline-02-maintenance.png'), 'sector-inline-maintenance.png'),
  ])

  const html = `<p class="article-lead">
  Every industry depends on water storage in one way or another. From the massive tanks keeping mine sites operational, to the potable water reserves that safeguard hospitals and schools, tanks are the silent backbone of commercial, industrial, and public facilities.
</p>

<p>Yet across sectors, the same critical mistakes are repeated time and time again. These errors shorten tank life, compromise water quality, and create unnecessary risks to safety, compliance, and budgets.</p>

<figure>
  <img src="${hero}" alt="Large industrial water storage tank in operational facility"/>
  <figcaption><strong>Industrial water storage infrastructure.</strong> Every sector depends on tanks — and every sector repeats the same maintenance mistakes.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>The Australian water industry applies a useful benchmark to stored water: treat it like a food-grade product — with the same standards applied to milk, wine, and grain storage. You wouldn't leave an unlocked milk vat uninspected for a decade. But that is effectively what happens with thousands of water storage assets across the country every year.</p>
</blockquote>

<div class="article-divider"><span>Mistake 1 — Treating tanks as static assets</span></div>

<p>Too often, organisations view tanks as once-off investments. Install them, fill them, forget about them. The reality is that tanks are not static assets — they are systems made up of multiple interacting layers, each of which degrades on a different schedule. When a tank is neglected, these layers don't all fail at once — they fail quietly and at different rates, making the deterioration hard to detect until it becomes severe.</p>

<div class="article-divider"><span>Mistake 2 — Paper compliance over real inspection</span></div>

<p>Standards like AS 1851 require routine inspection and documented service logs. Yet across hospitals, schools, councils, and commercial buildings, inspection schedules are routinely skipped — and when regulators or insurers request proof, the paperwork is missing. Two practices separate effective inspection programs from paper exercises: sequential photography at fixed reference points, and fresh eyes from an independent inspector who hasn't normalised the gradual decline.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${inspection}" alt="Professional inspector conducting formal tank inspection with documentation"/>
    <figcaption>Independent inspection with sequential photography — the standard that separates paper compliance from real risk management</figcaption>
  </figure>
  <figure>
    <img src="${maintenance}" alt="Planned maintenance program for water storage infrastructure"/>
    <figcaption>Planned maintenance versus reactive emergency response — a consistent cost and safety difference</figcaption>
  </figure>
</div>

<div class="article-divider"><span>Mistake 3 — One-size-fits-all maintenance</span></div>

<p>Every sector faces unique environmental and operational stresses. Mining tanks are not hospital tanks. Neither should be maintained like one. Mining environments suffer from high-dust ventilation failures, dissimilar metal corrosion, and temperature cycling on RPVC liners. Hospital platforms and hatch areas are the most common contamination entry point — not the water source itself. Agriculture faces UV degradation and seasonal fluctuation stress on liner seams.</p>

<div class="article-pull-stat">
  <span class="stat-num">ROL</span>
  <span class="stat-label">Running on Luck — what engineers call tanks without active inspection programs</span>
</div>

<div class="article-divider"><span>Mistake 4 — Off-spec repairs and mismatched materials</span></div>

<p>Quick fixes, mismatched materials, and off-spec repairs create the appearance of rectification while the real problem continues beneath the surface. The single most important factor in coating performance is not the coating — it is surface preparation. A coating applied over contaminated or inadequately profiled steel will fail years ahead of schedule regardless of the product specification.</p>

<div class="article-divider"><span>Mistake 5 — Reactive-only maintenance culture</span></div>

<p>The most expensive maintenance decision is always the one made after the failure. Waiting until a problem becomes visible is the default mode for many organisations, despite the well-understood cost premium of reactive repair over planned maintenance. Tanks without active inspection programs are not on a maintenance schedule — they are running on luck.</p>

<blockquote class="article-quotable">
  <p>Avoiding these mistakes requires discipline around a small number of well-understood maintenance activities, applied consistently: independent professional inspection every 1–4 years, sequential photography at every inspection, cleaning and desludging every 4–6 years for treated water, annual overflow pipe and outlet screen verification.</p>
</blockquote>

<div class="article-divider"><span>Sector-specific guidance</span></div>

<p>For mining and resource operations, cathodic protection systems require the same scheduled attention as the tanks themselves — anode replacement cycles of 8–15 years must be built into the maintenance register, not discovered during an emergency inspection.</p>

<p>For public facilities, overflow pipework provides a warm, sheltered habitat for vermin. Animal carcasses entering tanks through unsealed overflow pipes are a documented contamination source in the Australian water industry.</p>

<p>Water stagnation in low-turnover zones creates conditions where bacteria breed and disinfection residuals deplete. SCADA-integrated flow monitoring can detect abnormal turnover rates remotely before conditions deteriorate to the point requiring emergency intervention.</p>

<div class="article-faq-item">
  <p class="faq-q">How often should industrial water storage tanks be inspected?</p>
  <p class="faq-a">An independent inspection on a 1–4 year cycle, calibrated to the tank's condition and environment, is the single highest-return maintenance action available to asset owners. Mining and high-exposure environments typically require more frequent inspection than sheltered urban installations.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the cost difference between planned maintenance and emergency repair?</p>
  <p class="faq-a">Industry experience consistently shows a 3–5 times cost multiplier between timely rehabilitation and emergency remediation or full replacement. The same tank identified at the right point in the deterioration cycle presents far smaller remediation scope than one assessed after pitting has penetrated the steel.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What unique risks do mining environments create for water storage tanks?</p>
  <p class="faq-a">Mining environments suffer from high-dust ventilation failures, dissimilar metal corrosion from mixed materials, temperature cycling stress on RPVC liners, and aggressive water chemistry from mineral-laden groundwater. Cathodic protection anode replacement cycles of 8–15 years must be actively managed, not discovered during emergency inspection.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure deploys ROV and UAV inspection capability capable of assessing tanks without full dewatering, reducing operational disruption while providing the condition data needed to make informed decisions.</p>
  <a href="/contact" class="cta-btn">Request a sector assessment</a>
</div>`

  await updatePostContent('from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance', html)
  return { html, hero }
}

// ── Article 4: RPVC Liners ─────────────────────────────────────────────────────

async function processRPVC() {
  console.log('\n=== Article 4: RPVC Liners ===')
  const dir = 'C:/Users/My PC/Downloads/Blog Drafts/RPVC Liners Extend Water Life'

  const [hero, inline] = await Promise.all([
    uploadFile(path.join(dir, 'Hero Image — Interior of aging reservoir during liner installation.png'), 'rpvc-hero.jpg'),
    uploadFile(path.join(dir, 'Inline Image — Completed RPVC liner installation inside a reservoir.png'), 'rpvc-completed-liner.png'),
  ])

  const html = `<p class="article-lead">
  Aging water storage tanks are reaching the end of their service life across Australia. RPVC liners offer a proven third path — extending service life by 10 to 20 years at a fraction of replacement cost, while restoring compliance with AS2304, AS1851, and AS4020 requirements.
</p>

<p>For asset owners managing concrete and steel tanks approaching the end of viable internal coating cycles, RPVC lining is the decision worth understanding in detail.</p>

<figure>
  <img src="${hero}" alt="Interior of aging reservoir during RPVC liner installation"/>
  <figcaption><strong>RPVC liner installation in progress.</strong> The liner creates a complete physical barrier between stored water and the tank substrate, eliminating direct contact and halting internal corrosion.</figcaption>
</figure>

<div class="article-divider"><span>The case for RPVC lining</span></div>

<p>Mining operations, remote communities, and municipal utilities all face the same pattern: internal corrosion progressing unchecked, AS1851 inspection cycles revealing escalating deficiency counts, and a growing gap between the tank's current condition and what compliance requires. The choice appears to be full replacement at high cost, or ongoing reactive repair that never addresses the root cause. RPVC lining is a third option that asset owners frequently underutilise.</p>

<p>An RPVC liner is a rigid polyvinyl chloride membrane installed inside an existing tank, bonded to the internal wall surface and sealed at all penetrations. It creates a complete physical barrier between the stored water and the tank substrate — ending direct contact between water and the corroding surface. Unlike internal coatings, which require blast-clean, application, and reapplication cycles, a correctly installed RPVC liner is a one-time installation with a design life that typically exceeds 20 years.</p>

<div class="article-pull-stat">
  <span class="stat-num">30–50%</span>
  <span class="stat-label">Cost of RPVC relining compared to full tank replacement, with significantly lower operational disruption</span>
</div>

<div class="article-divider"><span>Why RPVC stops the core problem</span></div>

<p>Corrosion is not just a structural problem — it is a water quality problem. Internal corrosion in steel tanks introduces iron, zinc, and other metal compounds into stored water. In potable water tanks governed by AS4020, these contamination pathways create direct compliance failures. In fire water tanks under AS2304, corrosion reduces the structural integrity of the vessel and the reliability of the system under demand. RPVC lining eliminates both pathways simultaneously.</p>

<p>The case for RPVC liners rests on four factors:</p>
<ul>
  <li><strong>Cost:</strong> relining consistently costs 30–50% of full tank replacement, with significantly lower disruption to site operations</li>
  <li><strong>Compliance:</strong> RPVC materials used in potable water applications are AS4020 certified, restoring the tank's compliance status without a new asset</li>
  <li><strong>Service life:</strong> design life of 20+ years from installation, with no recoating cycles</li>
  <li><strong>Speed:</strong> a typically sized water tank can be lined within 2–5 days of dewatering and internal preparation, versus weeks for replacement</li>
</ul>

<figure>
  <img src="${inline}" alt="Completed RPVC liner installation inside a large concrete reservoir"/>
  <figcaption><strong>Completed RPVC liner installation.</strong> A correctly executed installation leaves no unsupported liner sections, no voids behind the membrane, and no unsealed penetration points.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>PC Water Infrastructure completed RPVC liner installations for six town reservoirs for the Northern Peninsula Area Regional Council in Far North Queensland — a remote, high-humidity environment with aggressive water chemistry. The alternative — replacement — would have required significantly longer lead times and substantially higher capital expenditure.</p>
</blockquote>

<div class="article-divider"><span>When RPVC makes the most difference</span></div>

<p>RPVC liners make the most difference in three scenarios:</p>
<ul>
  <li>Steel tanks where the structural shell remains sound but internal coatings have failed beyond economic reapplication</li>
  <li>Concrete tanks where joint sealant failures and surface carbonation have created contamination pathways</li>
  <li>Older bolted steel panel tanks where individual panel replacements are no longer cost-effective but the bolt pattern structure remains intact</li>
</ul>

<p>In each case, the liner works with the existing structure rather than replacing it.</p>

<div class="article-divider"><span>The installation process</span></div>

<p>The installation process follows a consistent sequence: dewatering and confined space preparation to AS2865; surface blast-cleaning to Sa2.5 standard; primer application to the prepared substrate; RPVC sheet installation and bonding; sealing of all penetrations including inlet, outlet, overflow, and scour connections; final inspection and pressure testing.</p>

<div class="article-faq-item">
  <p class="faq-q">How long does an RPVC liner last?</p>
  <p class="faq-a">A correctly installed RPVC liner has a design life that typically exceeds 20 years. Unlike epoxy internal coatings — which require reapplication cycles every 10–15 years — an RPVC liner is a one-time installation that eliminates ongoing recoating costs.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does RPVC lining meet AS4020 for potable water?</p>
  <p class="faq-a">Yes. RPVC materials used in potable water applications are AS4020 certified, restoring the tank's compliance status for drinking water storage without requiring a new asset. This makes RPVC the preferred solution for aging potable water tanks approaching end of coating life.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What condition does a tank need to be in for RPVC relining?</p>
  <p class="faq-a">The structural shell must remain sound enough to support a liner installation. An independent condition inspection determines whether the shell is suitable, identifies the penetration configuration, and provides the deficiency register that informs the relining scope. Tanks with significant structural pitting may require targeted steel repair before lining.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How does RPVC relining compare to full tank replacement?</p>
  <p class="faq-a">Relining consistently costs 30–50% of full tank replacement, with significantly lower operational disruption. A typically sized water tank can be lined within 2–5 days of dewatering and internal preparation, versus weeks for replacement and the associated civil and connection works.</p>
</div>

<div class="article-cta">
  <p>For an accurate assessment of whether your tank is a candidate for RPVC relining, the starting point is always an independent condition inspection.</p>
  <a href="/contact" class="cta-btn">Request a relining assessment</a>
</div>`

  await updatePostContent('how-rpvc-liners-extend-the-life-of-aging-water-tanks', html)
  return { html, hero }
}

// ── Article 5: Harsh Environments ─────────────────────────────────────────────

async function processHarsh() {
  console.log('\n=== Article 5: Water Storage in Harsh Environments ===')
  const dir = 'C:/Users/My PC/Downloads/Blog Drafts/Water Storage in Harsh Environment'

  const [hero, corrosion, drone, rov, modular] = await Promise.all([
    uploadFile(path.join(dir, 'harsh-env-01-hero-remote-tank.png'), 'harsh-env-hero.jpg'),
    uploadFile(path.join(dir, 'harsh-env-02-corrosion-internal.png'), 'harsh-env-corrosion.png'),
    uploadFile(path.join(dir, 'harsh-env-03-drone-inspection-exterior.png'), 'harsh-env-drone.png'),
    uploadFile(path.join(dir, 'harsh-env-04-rov-inspection-internal.png'), 'harsh-env-rov.png'),
    uploadFile(path.join(dir, 'harsh-env-05-modular-installation-aerial.png'), 'harsh-env-modular.png'),
  ])

  const html = `<p class="article-lead">
  When most people think about water tanks, they picture something simple. But in mining zones, remote communities, and harsh climates across Australia and the Pacific, water storage is one of the most technically demanding infrastructure challenges a project can face.
</p>

<p>The environment exposes every weak specification decision quickly — and the cost of failure is measured not just in dollars, but in operational shutdowns and community water security.</p>

<figure>
  <img src="${hero}" alt="Remote water storage tank in harsh Australian environment"/>
  <figcaption><strong>Remote water storage infrastructure.</strong> In remote locations, there is no local trade supplier, no quick callout, and no redundancy if the primary storage fails.</figcaption>
</figure>

<div class="article-divider"><span>What harsh environments reveal</span></div>

<p>Harsh environments expose weaknesses that controlled conditions would never reveal. UV degradation on polyethylene tanks in Australian climates significantly reduces service life compared to manufacturer expectations derived from temperate environment testing. High-dust conditions in mining zones cause turbine ventilation units to seize, leaving tanks fully open to vermin and contamination. Temperature cycling in remote outback environments — where ambient temperatures swing 40 degrees between day and night — stresses liner seams, joint sealants, and base fittings at rates that standard design cycles do not account for.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${corrosion}" alt="Internal corrosion in a water storage tank exposed to harsh conditions"/>
    <figcaption>Internal corrosion accelerated by coastal chloride exposure and aggressive water chemistry</figcaption>
  </figure>
  <figure>
    <img src="${drone}" alt="Drone conducting external inspection of remote water storage tank"/>
    <figcaption>Drone inspection of external tank condition — reducing access risk in remote locations</figcaption>
  </figure>
</div>

<p>Coastal and island environments introduce salt-laden air and elevated chloride exposure. In these conditions, standard galvanised components corrode within seasons. Dissimilar metal connections corrode at accelerated rates. Roof fixings and access ladder brackets that would last decades in a temperate environment become replacement items within years. Material specification in these environments must account for the actual exposure profile, not the generic Australian standard.</p>

<div class="article-pull-stat">
  <span class="stat-num">40°C</span>
  <span class="stat-label">Day-to-night temperature swing in remote outback environments — stressing liner seams and fittings beyond standard design assumptions</span>
</div>

<div class="article-divider"><span>Inspection without full dewatering</span></div>

<p>Inspection in remote environments presents its own challenge. Full dewatering is not always operationally viable — the tank cannot be taken out of service for the duration required by a conventional inspection approach. PC Water Infrastructure deploys ROV and UAV inspection technology capable of assessing tank internal and external condition without dewatering, providing the same condition data that a drained inspection would deliver, without the operational disruption.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${rov}" alt="ROV conducting underwater internal inspection of water storage tank"/>
    <figcaption>ROV internal inspection — wall thickness readings and coating condition mapping without dewatering</figcaption>
  </figure>
  <figure>
    <img src="${modular}" alt="Aerial view of modular water storage installation at remote site"/>
    <figcaption>Remote site installation — logistics planning and community-aware delivery scheduling are critical to project success</figcaption>
  </figure>
</div>

<blockquote class="article-quotable">
  <p>The Northern Peninsula Area Regional Council reservoir relining program — six town water reservoirs across a remote Far North Queensland region — demonstrates how a structured, multi-asset mobilisation approach delivers better outcomes than individual reactive responses. Assessing all six assets under a single inspection program, then executing relining under a single mobilised trade team, achieved cost efficiencies and quality consistency that individual site responses could not have matched.</p>
</blockquote>

<div class="article-divider"><span>Design principles for harsh conditions</span></div>

<p>The design principles that separate tanks that perform in harsh conditions from those that fail early are consistent:</p>
<ul>
  <li>Material selection matched to the actual exposure profile</li>
  <li>Coating and liner systems rated for the temperature range and water chemistry of the specific site</li>
  <li>Structural design accounting for the access and maintenance constraints of the location</li>
  <li>Commissioning that includes a documented baseline condition assessment — so the first inspection has a reference point to compare against</li>
</ul>

<p>For new installations in remote or harsh environments, the procurement decision is as important as the engineering. A tank specified correctly for the environment and installed with the right materials and quality controls will cost more at procurement than a standard specification. The difference is recovered many times over in extended service life, reduced maintenance frequency, and avoided emergency remediation costs — especially in remote locations where every mobilisation carries a significant logistics cost.</p>

<div class="article-faq-item">
  <p class="faq-q">What makes coastal and island environments particularly challenging for water tanks?</p>
  <p class="faq-a">Salt-laden air and elevated chloride exposure accelerate corrosion of standard galvanised components, dissimilar metal connections, and roof fixings at rates that would not occur in temperate environments. Material specification must account for the actual exposure profile — stainless steel or HDPE alternatives are often required where galvanised components would be standard elsewhere.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a tank be inspected without taking it offline in a remote location?</p>
  <p class="faq-a">Yes. PC Water Infrastructure deploys ROV (remotely operated vehicle) and UAV drone inspection technology capable of assessing tank internal and external condition without dewatering. This provides wall thickness readings, coating condition mapping, and penetration seal assessment without the operational disruption of full dewatering.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What tank materials perform best in high-UV Australian outback environments?</p>
  <p class="faq-a">Steel tanks with RPVC liners or high-performance epoxy coatings outperform polyethylene in sustained high-UV environments, where UV degradation significantly reduces polyethylene service life below manufacturer expectations. Stainless steel and fibreglass tanks eliminate most corrosion risk at source and perform well in high-UV, high-temperature environments.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure has delivered water storage infrastructure in remote Far North Queensland, island communities, mining operations, and harsh outback environments across Australia.</p>
  <a href="/contact" class="cta-btn">Discuss your remote project</a>
</div>`

  await updatePostContent('water-storage-in-harsh-environments-what-you-need-to-know', html)
  return { html, hero }
}

// ── Article 6: Water Tank Warning Signs ───────────────────────────────────────

async function processBomb() {
  console.log('\n=== Article 6: Water Tank Warning Signs ===')
  const dir = 'C:/Users/My PC/Downloads/Blog Drafts/Water Tank Ticking Time Bomb'

  const [inspection, corroded] = await Promise.all([
    uploadFile(path.join(dir, 'water-tank-ticking-time-bomb-02-site-inspection.png'), 'ticking-site-inspection.png'),
    uploadFile(path.join(dir, 'water-tank-ticking-time-bomb-03-corroded-leak-closeup.png'), 'ticking-corroded-leak.png'),
  ])

  // Also upload the aging tank image for hero if it exists
  const agingPath = path.join(dir, 'water-tank-ticking-time-bomb-01-aging-elevated-tank.png')
  let agingHero = null
  if (fs.existsSync(agingPath)) {
    agingHero = await uploadFile(agingPath, 'ticking-hero.jpg')
  }

  const html = `<p class="article-lead">
  Water tanks are the unsung heroes of countless industries, homes, and facilities — quietly ensuring water is stored and ready whenever it's needed. Steel, concrete, and polyethylene tanks all face the same reality: they degrade over time, and when they fail, the consequences are costly, disruptive, and sometimes dangerous.
</p>

<p>The Australian water industry has a useful benchmark for how stored water should be treated: like a food-grade product. You wouldn't leave an unlocked milk vat uninspected for a decade. Yet that is effectively what happens with thousands of water storage assets across the country. The warning signs are there — but only if you know what to look for.</p>

${agingHero ? `<figure>
  <img src="${agingHero}" alt="Aging elevated water storage tank showing visible signs of deterioration"/>
  <figcaption><strong>Aging elevated water storage tank.</strong> Age alone is a risk factor, not a guarantee of failure — but material degradation timelines are well understood.</figcaption>
</figure>` : ''}

<div class="article-divider"><span>Warning sign 1 — Visible corrosion</span></div>

<p>Visible corrosion is the most obvious sign — but it is rarely limited to what you can see on the surface. Rust streaks running down external walls, around fittings, or near overflow outlets signal surface corrosion. Inside the tank, brown, reddish, or cloudy water indicates internal steel components are breaking down. Blisters and bubbles beneath a coating are caused by sub-film corrosion — pitting that concentrates attack into small, deep zones that compromise structural integrity faster than surface rust.</p>

<div class="article-divider"><span>Warning sign 2 — Odour or colour changes in water</span></div>

<p>Unusual odours or changes in water colour, taste, or clarity are direct indicators of contamination in the stored water. A tank with a damaged roof, corroded lining, or cracked access hatch can allow animal entry, sediment accumulation, and chemical leaching into treated drinking water. Hydrogen sulphide odour signals bacterial activity — particularly sulphate-reducing bacteria that attack the tank substrate at the molecular level, creating pitting that is often invisible until significant material loss has occurred.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${inspection}" alt="Professional site inspection of water storage tank condition"/>
    <figcaption>Site inspection identifies deterioration that is invisible from the outside — corrosion, liner failure, and sediment accumulation</figcaption>
  </figure>
  <figure>
    <img src="${corroded}" alt="Close-up of corroded tank wall with visible leak point"/>
    <figcaption>Corroded tank wall with active leak — a failure mode that develops over years before becoming externally visible</figcaption>
  </figure>
</div>

<div class="article-divider"><span>Warning sign 3 — Leakage and moisture</span></div>

<p>Leakage or damp patches around the tank base, at seams, or near foundation joints are a sign of structural compromise. If your tank is losing water without a visible external leak, internal corrosion may have created perforations. Even minor pitting can cause slow losses that go unnoticed for months. Moisture at the tank base — particularly near seams, welds, or where the tank meets the foundation slab — signals a potential breach.</p>

<div class="article-divider"><span>Warning sign 4 — Pressure or flow anomalies</span></div>

<p>Inconsistent water pressure or unexpected flow variations can indicate partial blockages, valve issues, or sediment accumulation reducing effective storage volume. In fire water tanks under AS2304, pressure capacity is a compliance parameter — unexplained pressure loss triggers mandatory inspection under AS1851. Sediment that has accumulated on the tank floor reduces the available volume, affecting both pressure performance and system reliability during peak demand events.</p>

<div class="article-pull-stat">
  <span class="stat-num">3–5×</span>
  <span class="stat-label">Cost multiplier between timely rehabilitation and emergency remediation or full replacement</span>
</div>

<div class="article-divider"><span>Warning sign 5 — Age past major maintenance thresholds</span></div>

<p>Tank age alone is a risk factor, not a guarantee of failure — but material degradation timelines are well understood. Epoxy internal coatings on steel tanks have a service life of 10–15 years from application before recoating becomes necessary. Polyethylene tanks under sustained UV exposure in Australian climates degrade faster than the same tanks in sheltered environments. RPVC liner seams under temperature cycling develop micro-tears at predictable rates. If your tank is approaching or past these thresholds without a condition assessment on record, the risk profile is material.</p>

<blockquote class="article-quotable">
  <p>A tank inspection at the right point in the deterioration cycle typically identifies rectification options at a fraction of the cost of the same tank identified later — after pitting has penetrated the steel, after liner seams have opened, after the roof access has allowed sustained contamination. The difference is consistently 3–5 times the remediation cost.</p>
</blockquote>

<div class="article-faq-item">
  <p class="faq-q">What are the most common early warning signs of water tank failure?</p>
  <p class="faq-a">The five key warning signs are visible corrosion (rust streaks, blistered coating), changes in water colour, taste or odour, moisture or leakage at the tank base or seams, unexplained pressure or flow variations, and age past major maintenance thresholds (typically 10–15 years for epoxy-coated steel, faster in harsh environments).</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a water tank be inspected without taking it out of service?</p>
  <p class="faq-a">Yes. PC Water Infrastructure deploys ROV and UAV inspection capability capable of assessing tanks without full dewatering, reducing operational disruption while providing the condition data needed to make informed maintenance decisions — wall thickness readings, coating condition mapping, and penetration seal assessment.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">At what age should a steel water tank have a condition assessment?</p>
  <p class="faq-a">Epoxy internal coatings on steel tanks have a service life of 10–15 years from application. An independent condition assessment should be completed before this threshold — and if the tank is past 15 years without a formal inspection on record, an assessment is a priority. Ultrasonic wall thickness gauging should be included for any steel tank over 15 years old.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure deploys ROV and UAV inspection capability capable of assessing tanks without full dewatering. When you know exactly what condition your tank is in, every subsequent maintenance decision becomes commercial rather than speculative.</p>
  <a href="/contact" class="cta-btn">Request a tank inspection</a>
</div>`

  await updatePostContent('water-tank-warning-signs-why-your-tank-is-a-ticking-time-bomb', html)
  return { html }
}

// ── Article 7: Corrosion ───────────────────────────────────────────────────────

async function processCorrosion() {
  console.log('\n=== Article 7: Corrosion ===')
  const dir = 'C:/Users/My PC/Downloads/Blog Drafts/Corrosion is Killing your Water Storage Tanks'

  const [hero, comparison, rpvcLiner, rov] = await Promise.all([
    uploadFile(
      path.join(dir, 'corrosion-tanks-hero.jpg — rust streaks and surface pitting on tank exterior wall.png'),
      'corrosion-hero.jpg'
    ),
    uploadFile(
      path.join(dir, 'corrosion-tanks-coating-comparison.jpg — corroded steel vs. freshly epoxy-coated wall comparison.png'),
      'corrosion-coating-comparison.png'
    ),
    uploadFile(
      path.join(dir, 'corrosion-tanks-rpvc-liner.jpg — workers installing RPVC liner inside a large concrete reservoir.png'),
      'corrosion-rpvc-liner.png'
    ),
    uploadFile(
      path.join(dir, 'corrosion-tanks-rov-inspection.jpg — ROV conducting underwater internal tank inspection.png'),
      'corrosion-rov-inspection.png'
    ),
  ])

  const html = `<p class="article-lead">
  Corrosion is the single most preventable cause of water tank failure across mining, industrial, and government infrastructure in Australia. When oxygen, moisture, or aggressive water chemistry contacts unprotected steel, degradation starts immediately — and accelerates without intervention.
</p>

<p>The good news: with the right inspection programme, protective coating system, and lining strategy, most tanks can be extended well beyond their original design life without full replacement.</p>

<figure>
  <img src="${hero}" alt="Rust streaks and surface pitting on water storage tank exterior wall"/>
  <figcaption><strong>External corrosion.</strong> Rust streaks and surface pitting are visible indicators of a larger internal problem — the external wall reflects what is happening beneath the coating surface.</figcaption>
</figure>

<div class="article-divider"><span>Understanding corrosion mechanisms</span></div>

<p>Poor pH control, aggressive chlorination, and elevated chloride concentrations all accelerate internal corrosion. Tanks storing water with a pH below 7 are particularly at risk — acidic conditions strip protective oxide layers and attack base metal directly. A common but underappreciated source of localised corrosion is the interface between pipework and the tank structure. Ductile iron pipework passing through concrete walls creates a galvanic cell where dissimilar metals meet — accelerating corrosion at the contact point.</p>

<p>Certain bacteria — particularly sulphate-reducing bacteria — metabolise sulphur compounds and produce hydrogen sulphide as a byproduct. This attacks the tank substrate at the molecular level, creating pitting that is often invisible until significant material loss has occurred. A single pinhole in an otherwise intact epoxy coating can produce more corrosion damage than an equivalent area of completely bare steel, because electrochemical current concentrates at the defect.</p>

<blockquote class="article-quotable">
  <p>A single pinhole in an otherwise intact epoxy coating can produce more corrosion damage than an equivalent area of completely bare steel, because electrochemical current concentrates at the defect. This is why coating holiday detection is critical at every inspection cycle.</p>
</blockquote>

<div class="article-divider"><span>How to detect corrosion early</span></div>

<p>Rust streaks running down external walls, around fittings, or near overflow outlets signal surface corrosion. Inside the tank, brown, reddish, or cloudy water indicates internal steel components are breaking down. Blisters and bubbles beneath a coating are caused by sub-film corrosion — pitting that concentrates attack into small, deep zones that compromise structural integrity faster than surface rust.</p>

<p>Ultrasonic thickness gauging measures remaining wall steel. If measurements fall below original specification, corrosion is actively consuming material. Significant thinning reduces pressure capacity and collapse resistance — particularly critical for fire tanks operating under AS2304. Pair visual checks with professional inspections on a 1–4 year cycle, more frequently in coastal, mining, or high-chloride conditions.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${comparison}" alt="Corroded steel tank wall versus freshly epoxy-coated wall comparison"/>
    <figcaption>Corroded steel versus freshly coated wall — the critical difference is surface preparation, not just the coating system itself</figcaption>
  </figure>
  <figure>
    <img src="${rov}" alt="ROV conducting underwater internal tank inspection"/>
    <figcaption>ROV internal inspection — wall thickness readings without dewatering, reducing operational disruption</figcaption>
  </figure>
</div>

<div class="article-divider"><span>Choosing the right coating system</span></div>

<p>The single most important factor in coating system performance is not the coating — it is surface preparation. A high-quality epoxy system applied to a poorly prepared surface will fail within 2–3 years. A mid-grade epoxy applied over a correctly blasted, clean substrate will last 15 years or more. For immersed applications, coatings must be matched to the specific liquid stored. Potable water tanks require coatings compliant with AS4020, whilst wastewater or chemical storage tanks require chemical resistance data matched to the stored substance.</p>

<div class="article-pull-stat">
  <span class="stat-num">15 yrs</span>
  <span class="stat-label">Service life of a correctly applied epoxy coating on properly blast-cleaned steel — versus 2–3 years on a poorly prepared surface</span>
</div>

<div class="article-divider"><span>RPVC liners and cathodic protection</span></div>

<p>RPVC liners and Glass Reinforced Plastic liners are the most cost-effective life-extension solution for ageing steel and concrete tanks. The liner creates a physical barrier between the stored water and the tank substrate — eliminating direct contact and halting internal corrosion entirely. PC Water Infrastructure has installed RPVC liners across town reservoirs for the Northern Peninsula Area Regional Council, health facilities, and mine sites including projects for Rio Tinto, BHP, and Veolia.</p>

<figure>
  <img src="${rpvcLiner}" alt="Workers installing RPVC liner inside a large concrete reservoir"/>
  <figcaption><strong>RPVC liner installation.</strong> The liner eliminates direct contact between stored water and the tank substrate, halting corrosion entirely and restoring compliance.</figcaption>
</figure>

<p>Cathodic protection works by making the tank's steel structure the cathode in an electrochemical circuit, preventing oxidation. Timing is critical — installed too early it provides little benefit, installed too late it cannot recover lost material. The best outcomes occur when cathodic protection is incorporated into a maintenance programme alongside a quality coating system, deployed at the point where coating holiday density starts to increase during routine inspection cycles.</p>

<div class="article-divider"><span>A practical corrosion prevention checklist</span></div>

<ul>
  <li>Annual visual inspection of accessible external surfaces</li>
  <li>Professional internal inspection every 1–4 years calibrated to condition</li>
  <li>Ultrasonic wall thickness gauging at each inspection for steel tanks over 15 years</li>
  <li>Coating system renewal before holiday density exceeds 5% of surface area</li>
  <li>Cathodic protection anode replacement on schedule</li>
  <li>Outlet screen replacement from galvanised to HDPE at first internal renovation</li>
</ul>

<div class="article-faq-item">
  <p class="faq-q">What causes microbiologically influenced corrosion (MIC) in water tanks?</p>
  <p class="faq-a">Sulphate-reducing bacteria metabolise sulphur compounds and produce hydrogen sulphide as a byproduct, attacking the tank substrate at the molecular level. MIC creates pitting that is often invisible until significant material loss has occurred, and is not detectable through visual inspection alone — ultrasonic wall thickness gauging is required.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often should a steel water tank's internal coating be renewed?</p>
  <p class="faq-a">Epoxy internal coatings on steel tanks have a service life of 10–15 years from application before recoating becomes necessary. The trigger for recoating should be coating condition data from professional inspection — not a fixed calendar date. Coating renewal before holiday density exceeds 5% of surface area is the standard benchmark.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does corrosion automatically mean a tank needs to be replaced?</p>
  <p class="faq-a">No. Corrosion does not automatically mean replacement. Refurbishment typically costs 30–60% of full replacement and can add 20–30 years to an asset's service life. RPVC liners, cathodic protection systems, and targeted steel repair are all alternatives to replacement for tanks where the structural shell remains sound.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure deploys ROV and UAV underwater drones and diving inspection teams capable of assessing tanks without full dewatering, minimising operational disruption.</p>
  <a href="/contact" class="cta-btn">Request a corrosion assessment</a>
</div>`

  await updatePostContent('how-to-stop-corrosion-killing-your-water-storage-tanks', html)
  return { html, hero }
}

// ── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Starting blog content upload...\n')

  const results = {}

  try {
    results.wif = await processWaterIsFood()
    results.fire = await processFireTank()
    results.mines = await processMines()
    results.rpvc = await processRPVC()
    results.harsh = await processHarsh()
    results.bomb = await processBomb()
    results.corrosion = await processCorrosion()

    // Write the results out to a JSON file for use in static-content.ts
    const output = {}
    for (const [key, val] of Object.entries(results)) {
      output[key] = { html: val.html, heroUrl: val.hero || null }
    }
    fs.writeFileSync(
      'scripts/blog-content-output.json',
      JSON.stringify(output, null, 2),
      'utf-8'
    )

    console.log('\n✓ All done! Results written to scripts/blog-content-output.json')
  } catch (err) {
    console.error('\n✗ Error:', err)
    process.exit(1)
  }
}

main()
