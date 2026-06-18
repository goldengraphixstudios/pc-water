/**
 * insert-week5-posts.js
 * Uploads images and inserts Week 5.1 (Sediment) and Week 5.2 (Iron & Manganese)
 * blog posts into Supabase.
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SECRET_KEY || ''
)

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

const SRC_SEDIMENT = 'C:\\Users\\My PC\\Downloads\\sediment-extract\\Week 5.1 - Sediment in Your Tank'
const SRC_IRON = 'C:\\Users\\My PC\\Downloads\\iron-manganese-extract\\Week 5.2 - Iron and Manganese From Inside the Tank'

const IMAGES_TO_UPLOAD = [
  // Sediment (Week 5.1)
  { localPath: path.join(SRC_SEDIMENT, 'sediment-tank-hero.jpg'),      storageName: 'sediment-tank-hero.jpg',      contentType: 'image/jpeg' },
  { localPath: path.join(SRC_SEDIMENT, 'sediment-floor-deposit.png'),  storageName: 'sediment-floor-deposit.png',  contentType: 'image/png'  },
  { localPath: path.join(SRC_SEDIMENT, 'sediment-wall-banding.png'),   storageName: 'sediment-wall-banding.png',   contentType: 'image/png'  },
  { localPath: path.join(SRC_SEDIMENT, 'sediment-outlet-zone.png'),    storageName: 'sediment-outlet-zone.png',    contentType: 'image/png'  },
  // Iron & Manganese (Week 5.2)
  { localPath: path.join(SRC_IRON, 'iron-manganese-tank-hero.png'),        storageName: 'iron-manganese-tank-hero.png',        contentType: 'image/png' },
  { localPath: path.join(SRC_IRON, 'iron-manganese-corroding-fitting.png'), storageName: 'iron-manganese-corroding-fitting.png', contentType: 'image/png' },
  { localPath: path.join(SRC_IRON, 'iron-manganese-black-deposit.png'),     storageName: 'iron-manganese-black-deposit.png',     contentType: 'image/png' },
  { localPath: path.join(SRC_IRON, 'iron-manganese-outlet-corrosion.png'),  storageName: 'iron-manganese-outlet-corrosion.png',  contentType: 'image/png' },
]

// ─── Week 5.1 — Sediment in Your Tank ────────────────────────────────────────
const sedimentContent = `<p class="article-lead">
  Sediment in a water storage tank is physical evidence that material is entering, forming, or settling inside the asset faster than the system is removing it.
</p>

<p>Asset owners often treat sediment as a housekeeping issue. It is more useful to treat it as a diagnostic signal. The depth, colour, texture, and location of the deposit tell you whether the problem is poor turnover, upstream treatment carry-over, coating breakdown, airborne entry, corroding internals, or simply a cleaning interval that has drifted too far.</p>

<p>That is why this post sits naturally alongside <a href="/resources/evidence-water-quality-issues-warning-signs">our earlier guide to reading water quality evidence</a>. Sediment is not just a symptom to remove. It is a record of how the tank has been operating.</p>

<div class="article-divider"><span>What counts as sediment</span></div>

<p>In potable storage, sediment can include fine dust and silt, corrosion product, floc carry-over, iron and manganese precipitate, and organic debris such as leaves, insect material, and algae residue. All of those may settle on the tank floor, around the outlet zone, along the wall-floor junction, or as banding at repeated operating levels.</p>

<p>Not all sediment means the same thing. A thin stable dusting in a low-risk system is very different from soft black sludge in a low-chlorine dead zone or orange-brown deposits developing beside corroding fittings. The correct maintenance response depends on what the deposit is telling you.</p>

<figure>
  <img src="${BASE}/sediment-floor-deposit.png" alt="Sediment accumulated across the floor of a potable water storage tank"/>
  <figcaption><strong>Sediment is evidence.</strong> The deposit itself records where material is entering, where water is slowing down, and whether the tank is starting to generate contamination internally.</figcaption>
</figure>

<div class="article-divider"><span>Where it comes from</span></div>

<h3>Airborne entry and external debris</h3>
<p>If vent mesh is too coarse, ridge capping is poorly sealed, hatches are compromised, or overflows are left exposed, wind-borne dust, leaf fragments, and other debris can enter the vessel. In arid and remote parts of Australia, that external load can be significant even when the tank looks acceptable from ground level.</p>

<h3>Source-water and treatment carry-over</h3>
<p>Some sediment begins upstream. Fine treatment solids can settle once flow velocity drops inside the tank. Bore supplies with elevated iron or manganese can also leave deposits, particularly where water age is high and turnover is poor.</p>

<h3>Internal corrosion and material breakdown</h3>
<p>The tank can manufacture its own sediment. Failing coatings, corroding steel, permanently immersed components that were poorly selected, and deteriorating fixtures all shed material into the stored water. In potable systems, materials in contact with drinking water should comply with <strong>AS 4020</strong> requirements, and maintenance choices should align with local hygiene obligations — not just what was convenient during a past repair.</p>

<h3>Hydraulic stagnation</h3>
<p>Sediment is not only about what enters the tank. It is also about what stays there. An oversized or poorly cycled tank allows fine particles to settle, stratify, and build up. That same behaviour also supports disinfectant loss and localised biological activity.</p>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Finding</th>
      <th>What it usually suggests</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fine light silt across the floor</td>
      <td>Dust ingress, low flow velocity, or long interval between cleans</td>
      <td>Usually points to exclusion details and operating history</td>
    </tr>
    <tr>
      <td>Black sludge or dark floc</td>
      <td>Treatment carry-over, stagnant zones, or biological activity</td>
      <td>May indicate a water quality problem, not just a cleaning one</td>
    </tr>
    <tr>
      <td>Orange-brown deposits</td>
      <td>Iron precipitation, internal corrosion, or corroding fittings</td>
      <td>Often means the tank is generating contamination internally</td>
    </tr>
    <tr>
      <td>Sediment banding on walls</td>
      <td>Repeated standing levels and poor turnover</td>
      <td>Indicates a hydraulic management issue</td>
    </tr>
    <tr>
      <td>Build-up near the outlet or scour</td>
      <td>Dead spots, poor cleaning history, or weak screen design</td>
      <td>Increases the chance of mobilisation into supply</td>
    </tr>
  </tbody>
</table>

<div class="article-pull-stat">
  <span class="stat-num">5-15 mm</span>
  <span class="stat-label">Commonly observed in well-run distribution tanks. Keeping sediment in this range minimises disposal issues — once deposits grow thick, soft, widespread, or concentrated at hydraulic points, cleaning cost and inspection difficulty rise quickly.</span>
</div>

<div class="article-divider"><span>When it becomes a problem</span></div>

<p>There is no single universal millimetre depth that makes one tank safe and another unsafe. The real question is whether the sediment load has started affecting inspection clarity, outlet performance, disinfection confidence, or cleaning complexity.</p>

<p>Heavy deposits make condition assessment harder because they cover the floor, mask early defects, and hide what is happening at the wall-floor junction. They can also obstruct scour drains, sit unnoticed until demand changes disturb them, and suddenly appear as a discolouration complaint even though the build-up has been present for years.</p>

<blockquote class="article-quotable">
  <p>A thin layer of sediment is a maintenance task. A heavy layer of sediment is usually evidence that the tank has been left unobserved for too long.</p>
</blockquote>

<div class="article-photo-grid">
  <figure>
    <img src="${BASE}/sediment-wall-banding.png" alt="Sediment banding on the internal wall of a water tank at repeated standing water levels"/>
    <figcaption><strong>Wall banding.</strong> Sediment on the walls is a hydraulic clue that the tank is not cycling or mixing effectively.</figcaption>
  </figure>
  <figure>
    <img src="${BASE}/sediment-outlet-zone.png" alt="Sediment build-up near the outlet area of a potable water tank"/>
    <figcaption><strong>Outlet risk.</strong> Deposits concentrated around low points and outlet zones are the ones most likely to be disturbed back into supply.</figcaption>
  </figure>
</div>

<div class="article-divider"><span>What asset owners should do next</span></div>

<h3>Characterise the deposit</h3>
<p>Record depth, colour, texture, smell, and location. "Sediment present" is not enough to support a useful maintenance decision.</p>

<h3>Check entry and generation points</h3>
<p>Inspect hatches, vents, roof details, overflows, submerged fittings, outlet screens, and any internal metalwork. If the tank is creating the sediment itself, a clean alone will not solve the problem.</p>

<h3>Review the tank's operating history</h3>
<p>Wall staining, persistent low chlorine, and repeated standing levels are observable clues that conditions inside the tank are contributing to sediment accumulation. Note what you find and pass it to the inspector — it shapes the diagnosis.</p>

<h3>Combine cleaning with inspection</h3>
<p>Cleaning removes the material. Inspection explains the cause. Done together, the tank becomes visible again and the next maintenance decision is based on evidence rather than guesswork.</p>

<div class="article-faq-item">
  <p class="faq-q">How much sediment in a water tank is too much?</p>
  <p class="faq-a">There is no single universal threshold, because risk depends on tank type, water source, deposit type, and where the material has accumulated. In practice, once sediment begins affecting outlet zones, inspection clarity, or cleaning complexity, it has moved beyond routine background build-up and should be addressed.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can sediment in a potable water tank affect water quality even if the water looks clear?</p>
  <p class="faq-a">Yes. Settled deposits can remain unnoticed until demand changes or tank levels move enough to disturb them. At that point the sediment can contribute to discolouration, turbidity, taste and odour issues, or carry other contaminants into supply.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does sediment always come from the source water?</p>
  <p class="faq-a">No. Sediment may come from external dust ingress, internal corrosion, degraded coatings, organic entry through compromised exclusion points, or hydraulic stagnation inside the tank itself. One of the most common mistakes is assuming every deposit originated upstream.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often should a water storage tank be cleaned?</p>
  <p class="faq-a">That depends on the source water, the tank's operating regime, and what previous inspections have found. As a general guide, standard distribution tanks often sit in the 4 to 6 year range, while higher-risk supplies such as bore water with iron or manganese may require shorter intervals around 2 to 4 years. Always check your scheme's approval conditions — some supplies have mandatory cleaning intervals set by their regulator.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Should cleaning and inspection be done together?</p>
  <p class="faq-a">Usually yes. Cleaning removes the physical load, but inspection explains why that load formed and whether it has been masking corrosion, coating failure, hydraulic issues, or exclusion defects. Combining the two gives a much stronger maintenance decision than either task alone.</p>
</div>

<div class="article-cta">
  <p>If sediment is building in your tank, do not wait for it to become an outlet problem or a complaint trigger. Read the evidence while it is still cheap to fix.</p>
  <a href="/contact" class="cta-btn">Book a tank clean and inspection</a>
</div>`

// ─── Week 5.2 — Iron and Manganese ────────────────────────────────────────────
const ironManganeseContent = `<p class="article-lead">
  If iron and manganese show up in complaints, sample results, or visible discolouration, do not assume they came from the raw water or treatment plant.
</p>

<p>Water storage tanks can generate or mobilise iron- and manganese-related deposits internally through corrosion, poor material selection, stagnant zones, disturbed floor sediment, and biological activity. That matters because the response is completely different depending on the true source.</p>

<p>If the metals are arriving with the water, the answer may sit in treatment performance. If the tank is generating or releasing them internally, the answer is inspection, cleaning, materials review, and correction of the operating conditions that allowed the deposit to form. <a href="/resources/sediment-in-your-tank-what-it-is-where-it-comes-from-why-it-matters">The sediment story</a> and <a href="/resources/evidence-water-quality-issues-warning-signs">the evidence story</a> both point in the same direction: the tank is often part of the mechanism.</p>

<div class="article-divider"><span>Why the source gets blamed first</span></div>

<p>Iron and manganese sound like treatment words. Operators think about oxidation, filtration, and source water chemistry. Storage-side problems are easier to miss because a reservoir can look structurally acceptable from outside while still holding corroding internals, settled deposits, or low-turnover zones that periodically release colour into supply.</p>

<p>That is why "brown water" is not a diagnosis. It is only a symptom. The real question is whether the material is entering storage or being created there.</p>

<figure>
  <img src="${BASE}/iron-manganese-corroding-fitting.png" alt="Corroding internal tank fitting with orange-brown staining inside a potable water tank"/>
  <figcaption><strong>The tank can become the source.</strong> Corroding submerged fittings and staining concentrated around them are strong clues that the storage asset is generating contamination internally.</figcaption>
</figure>

<div class="article-divider"><span>How the tank creates the problem</span></div>

<h3>Corroding steel and submerged metalwork</h3>
<p>Internal steel components, degraded coatings, and inappropriate permanently immersed fittings can shed corrosion product into the stored water. Once that process starts, the tank is no longer acting as a passive container.</p>

<h3>Wrong material in the wrong duty</h3>
<p>Some internals and screen arrangements are simply unsuited to permanent immersion. In potable service, immersed materials should be selected for corrosion performance and compliance with <strong>AS 4020</strong>, not just convenience or legacy practice.</p>

<h3>Settled deposits that get remobilised</h3>
<p>Iron- and manganese-rich sediment can sit quietly on the floor until water levels change, outlet hydraulics pull through a dead zone, or maintenance activity disturbs the deposit. That is why the complaint often appears suddenly even though the deposit has been there for a long time.</p>

<h3>Stagnant zones and disinfectant loss</h3>
<p>Poor turnover creates areas where oxidised material settles, chlorine residual falls, and biological processes become more active. In those zones, iron and manganese bacteria may contribute to slime, staining, and black deposits that look like source-water colour but are being sustained by the storage environment.</p>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Internal evidence</th>
      <th>What it usually means</th>
      <th>Why it changes the diagnosis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orange-brown staining near corroding steel or fittings</td>
      <td>Active iron-related corrosion inside the tank</td>
      <td>Points to tank-generated contamination</td>
    </tr>
    <tr>
      <td>Black soft deposits on the floor or in corners</td>
      <td>Stagnant zones, biological activity, or metal-rich sediment</td>
      <td>Suggests storage-side conditions are part of the problem</td>
    </tr>
    <tr>
      <td>Deposits concentrated around outlet areas</td>
      <td>Material is being mobilised into supply during drawdown</td>
      <td>Explains intermittent complaints</td>
    </tr>
    <tr>
      <td>Sediment banding and poor wall cleanliness</td>
      <td>Weak cycling and repeated settling</td>
      <td>Indicates the tank environment is enabling the build-up</td>
    </tr>
    <tr>
      <td>Clear plant water but recurring complaints behind one tank</td>
      <td>The problem is isolated to the storage asset</td>
      <td>Narrows the root cause quickly</td>
    </tr>
  </tbody>
</table>

<div class="article-pull-stat">
  <span class="stat-num">5</span>
  <span class="stat-label">Five common storage-side pathways can create or release iron and manganese after the water has already entered the tank.</span>
</div>

<blockquote class="article-quotable">
  <p>When the same storage asset keeps sitting behind brown or black water complaints, the tank is no longer just the place where the evidence settles. It is part of the mechanism.</p>
</blockquote>

<div class="article-divider"><span>What to inspect first</span></div>

<h3>Check the floor deposits</h3>
<p>Colour, texture, and distribution matter. A broad even dusting tells a different story from isolated black sludge or concentrated orange-brown deposits at fittings and low points.</p>

<h3>Check submerged materials</h3>
<p>Inspect outlet screens, bolts, brackets, ladders, pipe penetrations, and other immersed details for corrosion or poor specification. Materials that are acceptable above water are not automatically acceptable underwater for years.</p>

<h3>Check turnover evidence</h3>
<p>Wall banding, waterline staining, and signs that the tank is not drawing down properly support the conclusion that the hydraulic regime is helping the problem form and persist.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${BASE}/iron-manganese-black-deposit.png" alt="Black soft deposits settled on the floor of a potable water tank"/>
    <figcaption><strong>Deposit character matters.</strong> Soft black deposits can point to stagnant zones, biological activity, or remobilisable metal-rich sediment.</figcaption>
  </figure>
  <figure>
    <img src="${BASE}/iron-manganese-outlet-corrosion.png" alt="Corroded outlet zone inside a water storage tank with staining and deposit build-up"/>
    <figcaption><strong>Look at the outlet zone.</strong> Local corrosion and deposit concentration around the outlet often explain why complaints appear during drawdown events.</figcaption>
  </figure>
</div>

<div class="article-divider"><span>What the fix looks like</span></div>

<p>The right response is usually straightforward in sequence, even if the repair scope varies from tank to tank: clean and remove the deposit, inspect the exposed condition, replace or redesign any corroding immersed components, review turnover and operating levels, disinfect and flush the tank before returning it to service, then re-test after the correction rather than after the clean alone.</p>

<p>Treating the issue as a plant-only chemistry problem usually leaves the real source in service. Treating it as a cleaning-only problem removes the evidence but not the cause. The efficient path is to combine both cleaning and condition assessment while the tank is open and visible.</p>

<div class="article-faq-item">
  <p class="faq-q">Can a water storage tank itself cause iron and manganese problems?</p>
  <p class="faq-a">Yes. Corroding internals, poor material selection, settled deposits, stagnant zones, and biological activity can all cause iron- and manganese-related contamination to form or be released inside the tank after the water has entered storage.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do you tell whether brown water is coming from the source or the tank?</p>
  <p class="faq-a">Look for internal evidence and system pattern. If one specific tank sits behind recurring complaints, and internal inspection finds corroding fittings, black deposits, orange-brown sediment, or poor turnover evidence, the storage asset is likely part of the cause.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can sediment on the tank floor release iron and manganese later?</p>
  <p class="faq-a">Yes. Deposits can remain settled until water levels change, outlet hydraulics disturb them, or maintenance work mobilises them. That is why discolouration complaints often appear intermittent rather than constant.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Are galvanised components a risk inside potable water tanks?</p>
  <p class="faq-a">They can be if they are permanently immersed or used in duties they were not suited for. In potable service, immersed materials should be selected for corrosion performance and compliance with <strong>AS 4020</strong>, not just convenience or legacy practice.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the best fix if the tank is the source?</p>
  <p class="faq-a">The best fix is a combined clean and condition assessment, followed by replacement of corroding components and correction of the operating conditions that allowed the deposit to form. Disinfect and flush the tank before returning it to service, then re-test after the correction. Treating it as a plant-only issue usually leaves the real source in service.</p>
</div>

<div class="article-cta">
  <p>If one storage asset keeps sitting behind brown or black water complaints, stop adjusting assumptions and inspect the tank itself.</p>
  <a href="/contact" class="cta-btn">Request an internal tank assessment</a>
</div>`

// ─── POST RECORDS ──────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'sediment-in-your-tank-what-it-is-where-it-comes-from-why-it-matters',
    title: 'Sediment in Your Tank: What It Is, Where It Comes From, Why It Matters',
    excerpt: 'Sediment in a water tank is not just dirt on the floor. Learn where it comes from, what it tells you, and when it becomes a cleaning and water quality problem.',
    cover_image_url: `${BASE}/sediment-tank-hero.jpg`,
    content: sedimentContent,
    read_time: '5 min read',
    status: 'published',
    seo_title: 'Sediment in Your Water Tank: What It Means | PC Water',
    seo_description: 'Sediment in a water tank is not just dirt on the floor. Learn where it comes from, what it tells you, and when it becomes a cleaning and water quality problem.',
    published_at: '2026-06-16T09:00:00.000Z',
    is_update: false,
  },
  {
    slug: 'when-iron-and-manganese-come-from-inside-the-tank-not-the-source',
    title: 'When Iron and Manganese Come From Inside the Tank, Not the Source',
    excerpt: 'Brown or black water does not always start at the source. Learn how iron and manganese can come from inside the tank, and what evidence proves it.',
    cover_image_url: `${BASE}/iron-manganese-tank-hero.png`,
    content: ironManganeseContent,
    read_time: '4 min read',
    status: 'published',
    seo_title: 'Iron and Manganese from Inside the Tank | PC Water',
    seo_description: 'Brown or black water does not always start at the source. Learn how iron and manganese can come from inside the tank, and what evidence proves it.',
    published_at: '2026-06-17T09:00:00.000Z',
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
