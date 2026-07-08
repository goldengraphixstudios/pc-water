/**
 * insert-week7-posts.js
 * Uploads images and inserts Week 7.1 (Sediment Disposal) and Week 7.2
 * (When Cleaning Is Not Just Cleaning) blog posts into Supabase.
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SECRET_KEY || ''
)

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

const SRC_DISPOSAL = 'C:\\Users\\MYPC~1\\AppData\\Local\\Temp\\blog-week7\\Week 7.1 - Sediment Disposal'
const SRC_CLEANING = 'C:\\Users\\MYPC~1\\AppData\\Local\\Temp\\blog-week7\\Week 7.2 - When Cleaning Is Not Just Cleaning'

const IMAGES_TO_UPLOAD = [
  { localPath: path.join(SRC_DISPOSAL, '2. sediment-pond.jpeg'), storageName: 'sediment-disposal-pond.jpg', contentType: 'image/jpeg' },
  { localPath: path.join(SRC_CLEANING, '1. hero-page.jpeg'), storageName: 'cleaning-inspection-hero.jpg', contentType: 'image/jpeg' },
  { localPath: path.join(SRC_CLEANING, '2. corrosion.jpeg'), storageName: 'cleaning-inspection-corrosion.jpg', contentType: 'image/jpeg' },
]

// ─── Week 7.1 — Sediment Disposal ────────────────────────────────────────────
const sedimentDisposalContent = `<p class="article-lead">
  Every tank clean produces two outputs: a clean tank, and a pile of waste that needs to go somewhere. The second part is often the more complicated one - and the part most asset owners never think to ask about.
</p>

<p>Where the sediment and contaminated water end up affects cost, compliance, and the environment - in ways that sit with the asset owner even when a contractor is doing the work.</p>

<div class="article-divider"><span>Two ways to get waste out</span></div>

<h3>Over-the-wall pumping</h3>
<p>Industrial pumps draw wastewater and sediment through hoses inside the tank and discharge over the wall to ground level. Works universally, but the pump works against the full head of the wall - which affects flow rate on taller structures.</p>

<h3>Scour penetration discharge</h3>
<p>Where a scour pipe exists at the tank base, a fitted cover plate converts it into a suction connection. Waste exits through the scour line - no vertical lift, faster extraction. The constraint: the discharge destination is fixed by where the scour normally drains.</p>

<div class="article-divider"><span>Where the waste goes</span></div>

<h3>Controlled ground discharge (coffer dam)</h3>
<p>Standard on rural and remote sites with no sewer connection. A hay bale or sand berm captures discharge and prevents uncontrolled flow. Residual chlorine dissipates rapidly in soil - but confirm with your state environmental authority before assuming a permit exemption. Discharging to stormwater without an explicit permit is an environmental offence in every Australian state and territory.</p>

<h3>Direct sewer discharge</h3>
<p>Urban sites discharge via pump to a reticulated sewer - the cleanest option environmentally. Requires a current trade waste approval from the relevant water utility before the job starts. Confirm the approval number in writing before work commences, not after a spill.</p>

<h3>Mobile tankers</h3>
<p>Used when neither option above is viable. Tankers carry waste to a licensed facility - the most expensive route. See the cost section below.</p>

<h3>Dedicated sediment ponds</h3>
<p>Purpose-built waste ponds at larger water authority sites eliminate road tanker movements and per-job approvals. Worth noting as a capital planning item if tank cleaning frequency justifies the investment.</p>

<figure>
  <img src="${BASE}/sediment-disposal-pond.jpg" alt="Earthen sediment settling pond receiving iron-rich tank cleaning wastewater on a remote Australian site"/>
  <figcaption><strong>Dedicated settling infrastructure.</strong> A purpose-built earthen pond receives iron-rich tank cleaning wastewater directly - no road tankers, no trade waste approvals, no discharge-point coordination. A capital investment that pays back quickly on high-frequency cleaning programs.</figcaption>
</figure>

<div class="article-divider"><span>The tanker cost factor</span></div>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">Tankers required when the return trip to the licensed discharge point exceeds 45 minutes - the threshold at which a two-tanker rotation leaves gaps in the cleaning operation</span>
</div>

<p>A standard 25,000 litre semi tanker fills in approximately one hour of continuous vacuuming. Two tankers allow uninterrupted rotation when the round-trip is under 45 minutes. Beyond that, a third is needed - and vehicle hire, driver time, and disposal fees compound quickly. Get the full logistics plan and a cost breakdown before signing, not just a day rate.</p>

<div class="article-divider"><span>What to confirm before the job starts</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Confirmation item</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Extraction method - over-wall pump or scour penetration</td>
      <td>Determines equipment requirements, discharge destination, and hose logistics</td>
    </tr>
    <tr>
      <td>Disposal method and discharge destination - confirmed in writing</td>
      <td>Liability for illegal or unpermitted discharge defaults to the asset owner in most jurisdictions</td>
    </tr>
    <tr>
      <td>Trade waste approval number (sewer discharge)</td>
      <td>Required before discharge commences - not something to sort out after a blockage or spill</td>
    </tr>
    <tr>
      <td>Environmental authority confirmation (ground discharge)</td>
      <td>Some jurisdictions require documented site assessment or de-chlorination records even for rural sites</td>
    </tr>
    <tr>
      <td>Full tanker logistics plan - number of vehicles, turnaround, destination, cost breakdown</td>
      <td>Tanker costs are the main variable in total price - a day rate without logistics detail leaves cost open-ended</td>
    </tr>
    <tr>
      <td>Liability allocation for spills or contamination at the discharge point</td>
      <td>Contractual default often sits with the asset owner - confirm in writing before works commence</td>
    </tr>
  </tbody>
</table>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">What are the two main methods for removing waste from a water tank during cleaning?</p>
  <p class="faq-a">The first method pumps wastewater and sediment out over the top of the tank wall to a ground-level discharge point. The second uses the existing scour pipe penetration in the tank base - a fitted cover plate converts this into a suction point for vacuum hoses, with waste exiting through the scour pipe to wherever it normally drains. The scour method avoids lifting waste over the wall, which simplifies hose logistics, but the discharge destination is fixed by the existing scour drainage.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can tank cleaning wastewater be discharged to the stormwater system?</p>
  <p class="faq-a">Not without an explicit permit. Discharging tank cleaning waste directly to stormwater is an environmental offence in every Australian state. Urban sites should use sewer discharge backed by a current trade waste approval from the relevant water utility. Rural and remote sites typically use a coffer dam for controlled ground discharge - but this should be confirmed with the state environmental authority before the job starts, not assumed.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Why can tankering waste offsite more than double the cost of a tank clean?</p>
  <p class="faq-a">A standard 25,000 litre semi tanker fills in approximately one hour of continuous vacuuming. At least two tankers are required for uninterrupted operations - one filling on-site while the other is in transit to the discharge point. If the round-trip exceeds 45 minutes, a third tanker is needed to eliminate gaps in the operation. Vehicle hire, driver time, and disposal fees at a licensed sewer or treatment facility compound quickly on top of the baseline cleaning cost.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is chlorinated tank wastewater harmful to the environment if it soaks into the ground?</p>
  <p class="faq-a">Not significantly in most cases. Residual chlorine dissipates rapidly when mixed with organic sediment material and exposed to air - effective neutralisation typically occurs before water penetrates more than a few centimetres of natural soil. However, asset owners should confirm with their state environmental authority before assuming a permit exemption, as some jurisdictions require documented de-chlorination or site assessment records before approving ground discharge.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What should asset owners confirm with a cleaning contractor before signing a contract?</p>
  <p class="faq-a">Confirm the extraction method (over-wall pump or scour penetration) and the disposal destination in writing. Verify that any sewer discharge is covered by a current trade waste approval. If tankers are used, get the full logistics plan - number of vehicles, estimated turnaround, and discharge destination - along with a cost breakdown, not just a day rate. Confirm who holds liability for spills or contamination at the discharge point. Under most state environmental protection legislation, this liability defaults to the asset owner if the contractor cannot produce the required approvals.</p>
</div>

<div class="article-cta">
  <p>Before scheduling a tank clean, know what condition your asset is actually in. PC Water Infrastructure provides professional tank inspection and condition assessment - giving you the full picture before you brief any cleaning contractor.</p>
  <a href="/contact" class="cta-btn">Request a tank inspection</a>
</div>`

// ─── Week 7.2 — When Cleaning Is Not Just Cleaning ───────────────────────────
const whenCleaningContent = `<p class="article-lead">
  Most water tanks get cleaned every few years. A smaller number get properly inspected at the same time. Without a trained assessor present, structural issues, coating failures, and pipe configuration errors get loaded onto the truck with the waste.
</p>

<p>A cleaning intervention is the best access opportunity most asset owners will ever have. The tank is dewatered, the floor is visible, and the internal surfaces are exposed for the first time since the last clean. Here is what a trained assessor looks for during that window - and how to know when findings point beyond cleaning to something more significant.</p>

<div class="article-divider"><span>What the exterior tells you first</span></div>

<p>A trained assessor starts before entering the tank. A compromised perimeter fence combined with a damaged or unlocked hatch is a potential contamination event, not a maintenance oversight. Bird nesting concentrated around the roof or overflow pipe often signals a damaged ventilation screen - birds entering the potable water environment bring biological contamination with them. Roof downpipes terminating on the roof surface rather than connecting to external drainage allow rain runoff and contamination to re-enter the tank directly. Each of these is fixable - but only if someone looks.</p>

<div class="article-divider"><span>Structural and material condition</span></div>

<h3>Concrete reservoirs</h3>
<p>Concrete spalling - surface material detaching and falling to the floor - is the most common structural finding in older reservoirs. The cause is nearly always shallow reinforcement cover combined with concrete carbonation: moisture reaches the steel, it rusts, and the expanding corrosion products fracture the surrounding concrete. Cracking at load-bearing headstocks or beam junctions is more serious and requires engineering assessment before the tank returns to full operating level.</p>

<h3>Roof support posts</h3>
<p>Galvanised posts corrode at the waterline in tanks held at consistently high operating levels. They can corrode through entirely while appearing intact from above. A single failed central post has caused full roof subsidence in documented cases - a failure mode only visible from inside during dewatering.</p>

<div class="article-pull-stat">
  <span class="stat-num">1 post</span>
  <span class="stat-label">A single corroded central roof support post - if missed - can cause progressive subsidence across an entire reservoir roof. Visible only from inside, and only during dewatering.</span>
</div>

<h3>Coatings and linings</h3>
<p>Coating failures initiate first at sharp edges, corners, bolted joints, and seams - the locations hardest to coat properly. Disbonded or blistered coatings in bolted steel tanks should be remediated at the current access event; substrate corrosion accelerates once the coating fails, and the next opportunity requires another full dewatering cycle.</p>

<figure>
  <img src="${BASE}/cleaning-inspection-corrosion.jpg" alt="Interior wall of a GFS bolted steel tank showing rust bleeding from bolt fixings down a white-painted surface"/>
  <figcaption><strong>Corrosion initiating at bolt fixings.</strong> Each fixing point is a potential coating breach - rust bleeds down the panel surface, increases chlorine demand in the water column, and signals that the coating system is failing at the locations most prone to adhesion loss. Remediation is far simpler during a cleaning access than after the substrate has been exposed for another full cycle.</figcaption>
</figure>

<div class="article-divider"><span>Sediment as diagnostic evidence</span></div>

<p>Sediment distribution reveals how the tank is operating, not just that it needs cleaning. Sand under the inlet of a bore-fed tank points to bore casing failure. Heavy organic debris in a reticulated supply tank indicates an unsealed entry point - defective ventilation screen, unsealed roof penetration, or damaged overflow termination. Sediment concentrated on one side with a clean floor elsewhere suggests short-circuiting flow: water entering and leaving without adequate mixing, leaving a stagnation zone where biological fouling establishes unchecked. Cleaning removes the evidence - but not the cause.</p>

<div class="article-divider"><span>When findings point beyond cleaning</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Finding category</th>
      <th>Typical indicators</th>
      <th>Recommended response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>OH&amp;S risk</strong></td>
      <td>Unsecured access ladders, failed platform decking, unsealed or unsecured hatches</td>
      <td>Rectify before the tank returns to service</td>
    </tr>
    <tr>
      <td><strong>Structural risk</strong></td>
      <td>Corroded or failed roof support posts, concrete spalling with exposed reinforcement, cracking at headstocks</td>
      <td>Engineering assessment and remediation planning - do not defer</td>
    </tr>
    <tr>
      <td><strong>Coating and lining failure</strong></td>
      <td>Disbonded or blistered epoxy, failed adhesion at joints and edges, RPVC lining delamination</td>
      <td>Remediate at current access event - substrate corrosion accelerates once coating fails</td>
    </tr>
    <tr>
      <td><strong>Cathodic protection failure</strong></td>
      <td>Depleted sacrificial anodes, continuity failure, unprotected substrate at coating defects</td>
      <td>Anode replacement and CP system assessment</td>
    </tr>
    <tr>
      <td><strong>Pipe configuration</strong></td>
      <td>Inlet directing flow at roof framing, outlet too close to inlet, missing or collapsed outlet screens</td>
      <td>Rectify during or following cleaning access</td>
    </tr>
    <tr>
      <td><strong>Water quality risk</strong></td>
      <td>Defective ventilation screens, unsealed roof penetrations, incorrect valve configuration</td>
      <td>Prompt rectification and documentation - may be a reportable event under state drinking water legislation</td>
    </tr>
  </tbody>
</table>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">What is the difference between a tank clean and a tank inspection?</p>
  <p class="faq-a">A tank clean removes accumulated sediment, biological matter, and wastewater from the interior. A tank inspection - conducted by a trained assessor - evaluates the condition of the asset: structural integrity, coating condition, pipe configuration, cathodic protection performance, ventilation adequacy, and operational settings. Cleaning and inspection can be performed simultaneously during a dewatering event, but they require different expertise. Relying on the cleaning crew alone to flag condition issues means accepting that anything outside their scope - which is often most of what matters - goes unrecorded and unfixed.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What structural problems are commonly found during tank access?</p>
  <p class="faq-a">Concrete reservoirs frequently reveal spalling on floors and walls, most often caused by shallow steel reinforcement cover combined with concrete carbonation - moisture reaches the steel, initiates corrosion, and the expanding rust fractures the surrounding concrete. Roof support posts corroded through at the waterline can cause progressive roof subsidence across the entire structure. In bolted steel tanks, internal coatings may show disbondment, blistering, or failed adhesion - particularly in areas prone to thermal cycling or humidity accumulation. Any of these conditions, left undetected, significantly shortens asset life and creates escalating repair costs.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How can sediment patterns reveal problems beyond contamination?</p>
  <p class="faq-a">Sediment distribution provides diagnostic evidence of how the tank is operating. Sand accumulating under the inlet of a bore-fed tank often indicates bore casing failure - fine formation material is entering the groundwater feed. Heavy organic debris in a reticulated supply tank points to a defective ventilation mesh or an unsealed entry point. Sediment concentrated on one side of a large tank, with a relatively clean floor elsewhere, suggests inlet short-circuiting - water entering and leaving without effective mixing, leaving stagnation zones where biological fouling establishes unchecked.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What pipe configuration issues are discovered during tank inspection?</p>
  <p class="faq-a">Common findings include top-fill inlets positioned to direct water across roof framing rather than downward, accelerating corrosion in the roof structure from constant spray. Outlets located too close to inlets allow short-circuiting, reducing effective water residence time. Outlets without a sealed or raised base draw sediment directly into the distribution system during drawdown. Roof overflow pipes that are not connected to external drainage allow contaminated roof runoff to re-enter the tank. These are design and installation issues - invisible without access to the tank interior, and missed entirely if the cleaning crew is the only team on site.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">When should findings from a tank inspection trigger work beyond cleaning?</p>
  <p class="faq-a">The threshold depends on the finding. OH&amp;S risks - unsecured access ladders, failed platforms, unsealed hatches - should be rectified before the tank returns to service. Structural risks - corroded roof support posts, concrete cracking around load-bearing headstocks - require engineering assessment and a remediation plan. Failing internal coatings, disbonded linings, or cathodic protection deficiencies need remediation before the next cleaning cycle. Water quality risks from incorrect pipe configurations or defective ventilation should be addressed promptly and documented. Deferring structural and coating issues beyond the current access event typically doubles the remediation cost.</p>
</div>

<div class="article-cta">
  <p>If your next tank clean is also your next inspection opportunity, make the most of it. PC Water Infrastructure provides professional condition assessment, RPVC lining, and structural refurbishment - delivered alongside any cleaning intervention, so you only dewater once.</p>
  <a href="/contact" class="cta-btn">Talk to us about your tank condition</a>
</div>`

// ─── POST RECORDS ──────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'sediment-disposal-what-happens-to-everything-that-comes-out-of-your-tank',
    title: 'Sediment Disposal: What Happens to Everything That Comes Out of Your Tank',
    excerpt: 'When a water tank is cleaned, the sediment and wastewater must go somewhere. Two extraction methods, four disposal options, and what every asset owner should confirm before scheduling a clean.',
    cover_image_url: `${BASE}/sediment-disposal-pond.jpg`,
    content: sedimentDisposalContent,
    read_time: '2 min read',
    status: 'published',
    seo_title: 'Sediment Disposal: What Happens to Everything That Comes Out of Your Tank | PC Water',
    seo_description: 'When a water tank is cleaned, the sediment and wastewater must go somewhere. This guide explains the two main extraction methods and disposal options - and what every asset owner should confirm before scheduling a clean.',
    published_at: '2026-07-03T09:00:00.000Z',
    is_update: false,
  },
  {
    slug: 'when-cleaning-is-not-just-cleaning',
    title: 'When Cleaning Is Not Just Cleaning: Recognising When a Tank Needs More',
    excerpt: 'A tank clean is the best inspection opportunity you will get. Here is what a trained assessor looks for - and what gets missed when the cleaning crew is the only set of eyes on your asset.',
    cover_image_url: `${BASE}/cleaning-inspection-hero.jpg`,
    content: whenCleaningContent,
    read_time: '3 min read',
    status: 'published',
    seo_title: 'When Cleaning Is Not Just Cleaning: Recognising When a Tank Needs More | PC Water',
    seo_description: 'A tank clean is the best inspection opportunity you will get. Here is what a trained assessor looks for - and what gets missed when the cleaning crew is the only set of eyes on your asset.',
    published_at: '2026-07-10T09:00:00.000Z',
    is_update: false,
  },
]

async function uploadImages() {
  console.log('\n📸 Uploading images to Supabase storage...')
  for (const img of IMAGES_TO_UPLOAD) {
    if (!fs.existsSync(img.localPath)) {
      console.warn(`  ⚠ File not found, skipping: ${img.localPath}`)
      continue
    }
    const fileBuffer = fs.readFileSync(img.localPath)
    const { error } = await sb.storage
      .from('cms-media')
      .upload(`posts/${img.storageName}`, fileBuffer, {
        contentType: img.contentType,
        upsert: true,
      })
    if (error) {
      console.error(`  ✗ Failed to upload ${img.storageName}: ${error.message}`)
    } else {
      console.log(`  ✓ Uploaded: ${img.storageName}`)
    }
  }
}

async function upsertPosts() {
  console.log('\n📝 Inserting posts into Supabase...')
  for (const post of posts) {
    const { is_update, ...postData } = post
    const { error } = await sb
      .from('cms_posts')
      .upsert({
        ...postData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'slug' })
    if (error) {
      console.error(`  ✗ Failed to insert "${postData.slug}": ${error.message}`)
    } else {
      console.log(`  ✓ Inserted: ${postData.slug}`)
    }
  }
}

;(async () => {
  await uploadImages()
  await upsertPosts()
  console.log('\n✅ Done!')
})()
