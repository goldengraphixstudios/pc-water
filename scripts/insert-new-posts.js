/**
 * insert-new-posts.js
 * Converts 4 new blog drafts to site format and inserts into Supabase cms_posts.
 * Also updates lib/cms/static-content.ts as fallback.
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SECRET_KEY || ''
)

// ─── WEEK 2.1 — Diver Vacuuming (with YouTube embed) ─────────────────────────
const post21 = {
  title: 'How We Clean a Water Tank: The Diver Vacuuming Method',
  slug: 'how-we-clean-a-water-tank-diver-vacuuming-method',
  excerpt: 'A specialist diver descends while your taps keep running. This is exactly how we clean a water storage tank without taking it offline — and how often it actually needs to happen.',
  cover_image_url: 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/ticking-inspection.jpg',
  read_time: '4 min read',
  status: 'published',
  seo_title: 'How We Clean a Water Tank: The Diver Vacuuming Method | PC Water Infrastructure',
  seo_description: 'A diver descends while your taps keep running. Diver vacuuming, cleaning intervals by tank type, and what sediment levels mean for water quality and cost.',
  published_at: '2026-05-01T09:00:00.000Z',
  content: `<p class="article-lead">
  Most people have never thought about how a water tank gets cleaned. The answer might surprise you: a specialist diver goes in while the tank is still full — and your taps keep running the whole time.
</p>

<p>This is diver vacuuming — the method that replaced the old drain-and-sweep approach and became the standard for potable water storage tank cleaning in Australia. No service disruption. No confined-space entry for the crew outside. And critically, the tank stays online.</p>

<figure class="article-video-embed" style="margin:40px 0;border-radius:12px;overflow:hidden;">
  <iframe width="100%" style="aspect-ratio:16/9;display:block;" src="https://www.youtube.com/embed/5mIIj7CTKh4" title="Diver Vacuuming Sediment from a Water Reservoir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <figcaption style="background:#f9fafb;padding:10px 16px;font-size:12.5px;color:#6b7280;border-top:1px solid #e5e7eb;">Diver vacuuming sediment from the floor of a concrete reservoir — tank remains online and in service throughout.</figcaption>
</figure>

<p>The diver works in a dry suit and full-face mask — not for their safety, but for the water's. This is probably the only type of diving where the water is more at risk from the diver than the diver is from the environment. Every piece of equipment that enters a potable tank is dedicated to that tank, disinfected, and strictly controlled.</p>

<div class="article-divider"><span>How it works — step by step</span></div>

<div class="article-steps" style="margin:36px 0;display:flex;flex-direction:column;gap:12px;">
  <div class="article-step" style="display:flex;gap:16px;align-items:flex-start;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 20px;">
    <div class="article-step-num" style="background:#0d1b2a;color:#3e91ce;font-size:16px;font-weight:700;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">1</div>
    <div>
      <strong style="display:block;margin-bottom:4px;">Tank stays full — or nearly full</strong>
      <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.55;">The pump primes over the top when the tank is at least 80% capacity. Deeper tanks can be partially reduced using a scour plug method instead.</p>
    </div>
  </div>
  <div class="article-step" style="display:flex;gap:16px;align-items:flex-start;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 20px;">
    <div class="article-step-num" style="background:#0d1b2a;color:#3e91ce;font-size:16px;font-weight:700;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</div>
    <div>
      <strong style="display:block;margin-bottom:4px;">Diver maps the vacuum pattern</strong>
      <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.55;">Every tank has a different internal layout — posts, pipework, ladder platforms. A systematic pattern ensures no sediment is left in the hard-to-reach zones.</p>
    </div>
  </div>
  <div class="article-step" style="display:flex;gap:16px;align-items:flex-start;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 20px;">
    <div class="article-step-num" style="background:#0d1b2a;color:#3e91ce;font-size:16px;font-weight:700;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">3</div>
    <div>
      <strong style="display:block;margin-bottom:4px;">Sediment is captured, not disturbed</strong>
      <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.55;">Three vacuum head sizes handle different sediment types — sticky, loose, and fine. Sediment exits via hose to a settling tank outside. It never re-enters the supply.</p>
    </div>
  </div>
  <div class="article-step" style="display:flex;gap:16px;align-items:flex-start;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 20px;">
    <div class="article-step-num" style="background:#0d1b2a;color:#3e91ce;font-size:16px;font-weight:700;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">4</div>
    <div>
      <strong style="display:block;margin-bottom:4px;">Cleaning doubles as inspection</strong>
      <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.55;">The few hours onsite are often the only human contact a storage tank receives in its operational life. Cleaning and condition assessment happen in one visit.</p>
    </div>
  </div>
</div>

<div class="article-divider"><span>Cleaning intervals by tank type</span></div>

<div class="article-pull-stat">
  <span class="stat-num">15mm</span>
  <span class="stat-label">The sediment threshold — keep loads below this and every downstream job becomes faster, cheaper, and lower risk</span>
</div>

<p>Keep sediment loadings small — 5 to 15mm — and everything becomes more manageable: disposal, disinfection, water quality. Let it build, and every job downstream gets harder and more expensive.</p>

<blockquote class="article-quotable">
  <p>Diver vacuuming allows a water storage tank to be cleaned without taking it offline. A specialist diver enters the full tank in a dry suit and full-face mask — using dedicated, disinfected equipment — and removes sediment via a vacuum system that exits the tank without re-entering the water supply. Keeping sediment loads below 15mm is the difference between a routine clean and an emergency remediation.</p>
</blockquote>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">What is diver vacuuming in water tank cleaning?</p>
  <p class="faq-a">Diver vacuuming is the standard method for cleaning potable water storage tanks in Australia. A specialist diver enters the tank in a dry suit and full-face mask, using a vacuum system to remove sediment from the floor while the tank remains full and in service. Water supply is not interrupted at any point during the process.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a water storage tank be cleaned while it is still in service?</p>
  <p class="faq-a">Yes. Diver vacuuming is specifically designed for in-service cleaning. The tank stays online and water supply continues uninterrupted throughout the entire process. This makes it the preferred method for utilities and councils who cannot afford service disruption.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often should a potable water storage tank be cleaned?</p>
  <p class="faq-a">Cleaning intervals depend on water source and tank type. Clear water storage at a treatment plant typically requires cleaning every 6–12 months. Standard distribution tanks range from 4–6 years. Bore water tanks with high iron or manganese content should be cleaned every 2–4 years to prevent sediment from becoming a water quality problem.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How long does it take to clean a water storage tank?</p>
  <p class="faq-a">Duration depends on tank size, internal geometry, and sediment load. A straightforward mid-sized reservoir may take 4–8 hours on site. Tanks with significant sediment accumulation, complex internal layouts, or restricted hatch access may require a return visit. Keeping sediment levels below 15mm between cleans significantly reduces time and cost per visit.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the difference between a water tank inspection and a water tank clean?</p>
  <p class="faq-a">Cleaning removes physical contamination — sediment, silt, and biological matter — from the tank interior. An inspection assesses the structural and surface condition: wall coatings, roof structure, access hardware, and compliance status under relevant Australian Standards. Both can often be combined in a single site visit, which reduces overall cost and disruption.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure provides potable water tank cleaning and condition assessment across Australia, including diver vacuuming, ROV inspection, and combined clean-and-assess site visits.</p>
  <a href="/contact" class="cta-btn">Book a tank clean</a>
</div>`,
}

// ─── WEEK 2.2 — 5 Contamination Risks ────────────────────────────────────────
const post22 = {
  title: '5 Contamination Risks That Have Nothing To Do With the Source Water',
  slug: '5-contamination-risks-not-source-water',
  excerpt: 'Most water quality failures get blamed on the source. But when a trained inspector reads the evidence inside the tank, the trail almost always leads somewhere else — to the vessel itself.',
  cover_image_url: 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/corrosion-rov-inspection.jpg',
  read_time: '6 min read',
  status: 'published',
  seo_title: '5 Water Tank Contamination Risks That Aren\'t About Source Water | PC Water',
  seo_description: 'Most water quality failures get blamed on the source. But five contamination risks exist entirely within the storage asset — and none are visible at the tap until it\'s too late.',
  published_at: '2026-05-08T09:00:00.000Z',
  content: `<p class="article-lead">
  Most water quality failures get blamed on the treatment process or the source catchment. But when a diver goes in to investigate, the evidence trail almost always leads somewhere else — to the asset itself.
</p>

<p>We've covered in a previous post that <a href="/resources/water-is-food-your-tank-is-the-crockery">water is food and the tank is the crockery</a>. It doesn't matter how carefully the water was treated at the plant if the vessel holding it after treatment is compromised. And the contamination doesn't announce itself at the tap until it's been building for some time.</p>

<p>A trained inspector doesn't start by testing the water. They start by reading what's inside the tank — the physical evidence left by each contamination pathway. The Aquasafe framework identifies ten distinct indicators that a tank interior reveals to an inspector who knows what to look for. We've taken those ten and grouped them into the five contamination risks that asset owners need to understand first.</p>

<div class="article-pull-stat">
  <span class="stat-num">10</span>
  <span class="stat-label">Distinct contamination indicators a trained inspector reads from a tank interior — before a single water quality test is run.</span>
</div>

<div class="article-divider"><span>Risk 1 — Open overflow drain points and animal entry</span></div>

<p>Birds are the most common animal body found inside Australian water storage tanks. Snakes, frogs, rabbits, and feral cats follow. In almost all cases, they entered through one of three places: an open overflow drain point, a damaged access hatch, or deteriorated vent mesh.</p>

<p>Overflow events are rare, which means the drain pipe runs dry most of the time — and a dry pipe in a paddock is a sheltered habitat to Australian wildlife. Without a flapper valve fitted to the drain end, it is an open invitation. What makes this risk particularly insidious is that the entry point is often metres away from the tank and easy to forget about entirely.</p>

<p>When our divers descend, animal remains are one of the most consistent findings — particularly small birds near the roof structure and larger animals on the floor. The water shows no obvious signs of contamination above a certain threshold; by then, it's already in the distribution system.</p>

<div class="article-divider"><span>Risk 2 — Vandalism and compromised hatch security</span></div>

<p>Vandal activity is more common around water storage assets than most asset owners expect — particularly on inground tanks and tanks at the edge of urban areas. Rocks and rubbish found inside a tank during inspection are the most unambiguous indicator: they didn't fall in by accident.</p>

<p>Beyond deliberate contamination, vandalism to hatches and roof vents has secondary effects. A hatch left open after a vandal event exposes the tank to the full range of animal entry risks. A destroyed vent mesh leaves fine particulates, insects, and small birds with unimpeded access. Neither risk resolves itself — the exposure continues until a site visit identifies and rectifies the damage.</p>

<div class="article-divider"><span>Risk 3 — Environmental debris and airborne contamination</span></div>

<p>Leaf debris and grass litter found inside a tank tell two stories simultaneously. First, the vent mesh screen material is too coarse — it's admitting organic matter that should be filtered out. Second, the mowing or maintenance contractors working near the tank don't understand how close they are to a potable water asset.</p>

<p>In Australian conditions, the airborne contamination risk extends well beyond leaf litter. Dust accumulation inside tanks — particularly in agricultural regions, near unsealed roads, and in areas subject to land burning — can be significant. Unsealed roof ridge capping is a related pathway. Fine mesh that keeps out insects will also keep out fine particulates. Coarse mesh that merely keeps out birds is not adequate protection in environments with real airborne loads.</p>

<div class="article-divider"><span>Risk 4 — Sediment accumulation and mixing failures</span></div>

<p>Sediment on the floor of a tank is an expected finding after years of service. The question is what type of sediment, how much, and where it's concentrated — because the answers point to different sources with different consequences.</p>

<p>Sediment on the <em>walls</em> — not the floor — indicates the tank has experienced fluctuating water levels over time, with settled material left behind as the level drops. This typically means the tank is not being cycled or mixed effectively. Water that stratifies and sits still allows suspended particles to settle and accumulate. Tanks that barely cycle don't clear this material naturally.</p>

<p>Black sediment or floc carry-over points to treatment plant operational issues where fine treatment chemicals weren't fully removed before the treated water entered storage. This is the one contamination risk on this list that <em>does</em> originate upstream — but the evidence of it lives in the tank, not the plant.</p>

<div class="article-divider"><span>Risk 5 — Contractor and maintenance activity</span></div>

<p>Roof construction debris is the last item in the Aquasafe evidence framework — and the one that most surprises asset owners when it's raised. Contractors performing legitimate work on or around a tank — roof repairs, vent upgrades, access hatch replacements — are working directly above the water stored below. Construction debris, fasteners, drilling swarf, and sealant residue all have a path into the tank if the work isn't managed correctly.</p>

<p>The common factor is induction. Contractors who haven't been briefed on potable water protocols for the asset they're working on don't understand that dust, debris, and uncapped openings are water quality risks. Any construction or maintenance work on a potable water storage tank should include contractor induction before work starts and a post-works internal inspection before the asset is returned to service.</p>

<blockquote class="article-quotable">
  <p>Following the evidence trail will assist in determining the source of the contamination to ensure the consumers are not exposed to unsafe water. A lot of water quality issues can be identified — and often solved — by a fresh eyes approach to inspecting assets.</p>
</blockquote>

<p>All five risks sit entirely within the storage asset. None of them are visible from the tap until the contamination load is significant. And none of them can be identified by testing the incoming source water — because the source water isn't the problem.</p>

<p>Under the Australian Drinking Water Guidelines (NHMRC), the obligation to protect water quality extends from treatment through storage to distribution. An asset that hasn't been internally inspected in several years is not a compliant asset — regardless of how clean the source water is.</p>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">Can water be contaminated if it comes from a clean treated source?</p>
  <p class="faq-a">Yes. Treated water that enters storage in excellent condition can be re-contaminated by the vessel holding it. Animal entry, environmental debris, sediment accumulation, maintenance activity, and vandalism all represent contamination pathways that exist entirely within the storage asset — independent of source water quality.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do animals get into water storage tanks?</p>
  <p class="faq-a">The three most common animal entry points are open overflow drain pipes (which run dry most of the year and provide a sheltered habitat for wildlife), damaged access hatches, and deteriorated vent mesh on roof penetrations. Flapper valves on overflow drain ends and fine mesh on all vents prevent the majority of animal entry events.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What does sediment on the walls of a water tank indicate?</p>
  <p class="faq-a">Sediment banding on tank walls — rather than the floor — typically indicates the tank has experienced inadequate cycling, with water levels fluctuating and material settling at historical waterlines. This points to operational mixing and turnover issues rather than a source water problem.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What should happen before contractors work on a potable water tank?</p>
  <p class="faq-a">Any contractor performing work on or immediately adjacent to a potable water storage tank should be inducted on potable water asset protocols before work commences. A post-works internal inspection should be completed before the tank is returned to service. These two steps eliminate the majority of construction-related contamination events.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure provides independent inspection and condition assessment for potable water storage assets across Australia — identifying contamination pathways before they become water quality events.</p>
  <a href="/contact" class="cta-btn">Request an inspection</a>
</div>`,
}

// ─── WEEK 2.3 — Evidence of Water Quality Issues ─────────────────────────────
const post23 = {
  title: 'The Tank Is Already Telling You — How to Read the Evidence of Water Quality Issues',
  slug: 'evidence-water-quality-issues-warning-signs',
  excerpt: 'Water quality inspectors don\'t just test water — they read the tank. Every piece of physical evidence inside a storage tank is a clue, and every clue points somewhere specific.',
  cover_image_url: 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/corrosion-coating-comparison.jpg',
  read_time: '5 min read',
  status: 'published',
  seo_title: 'How to Read Water Quality Warning Signs in a Storage Tank | PC Water',
  seo_description: 'Every piece of physical evidence inside a water storage tank is a clue — floating debris, sediment, staining, and animal remains each point to a specific contamination source.',
  published_at: '2026-05-15T09:00:00.000Z',
  content: `<p class="article-lead">
  Water quality inspectors don't just test water — they read the tank. Every piece of physical evidence inside a storage tank is a clue, and every clue points somewhere specific.
</p>

<p>This is the practical skill that separates a compliance tick-box inspection from one that actually protects water quality. A diver who enters a tank sees a complete picture of what has been happening to the water held inside it — often for years before the inspection ever occurred.</p>

<div class="article-divider"><span>Start at the waterline</span></div>

<p>The waterline is the first place an experienced inspector looks. Staining at the waterline tells you the tank has experienced historical water level fluctuation — the minerals and organic matter that were suspended in the water at different fill levels left a trace as the water receded. Multiple stain bands at different heights means the water level has cycled repeatedly. A single heavy band suggests a significant drawdown event at some point.</p>

<p>Floating debris on the water surface — leaf material, insect bodies, or organic matter — is typically evidence of inadequate vent mesh protection. The material isn't entering through the water inlet; it's entering through a vent or gap in the roof structure that the incoming air stream carries it through.</p>

<div class="article-divider"><span>The full evidence guide</span></div>

<div class="article-pull-stat">
  <span class="stat-num">8+</span>
  <span class="stat-label">Distinct evidence categories an experienced inspector reads from a storage tank interior — each pointing to a specific contamination source</span>
</div>

<p><strong>Animal remains</strong> — The entry pathway almost always involves the overflow drain, a damaged hatch, or deteriorated vent mesh. The specific location in the tank gives additional information: small birds near the roof indicate entry through a roof penetration; larger animals on the floor typically entered through the access hatch or a floor-level fitting.</p>

<p><strong>Debris on the floor</strong> — Rocks or construction material on the floor are unambiguous: this is vandalism or contractor debris. Organic material — leaf litter, grass clippings, bark — points to inadequate vent mesh or a gap in the roof structure. Fine dust accumulation points to a coarse mesh that is admitting airborne particulates.</p>

<p><strong>Sediment type and location</strong> — Fine grey sediment uniformly distributed across the floor is normal operational accumulation. Black sediment or floc carry-over points to a treatment plant operational issue. Sediment concentrated near the inlet indicates high-velocity inlet turbulence. Sediment on the walls rather than the floor indicates inadequate cycling — the tank is stratifying rather than mixing.</p>

<div class="article-divider"><span>What the animals tell you</span></div>

<p>An animal carcass found inside a storage tank is one of the most actionable findings an inspection can produce — because the location of the carcass tells you which access pathway failed, and closing that pathway prevents the next event.</p>

<p>A bird found in the water near the roof of the tank entered through a roof penetration: an open vent, a gap in the ridge capping, or a damaged hatch. A frog found on the floor almost certainly entered through the overflow drain pipe during a wet period when the overflow was active, then couldn't get back out when conditions dried. A rabbit or feral cat found on the floor entered through the access hatch — most likely during a period when the hatch was left open or the lock was damaged.</p>

<p>None of these events are unusual in Australian conditions. All of them are preventable with the right hardware fitted and maintained.</p>

<div class="article-divider"><span>What the sediment tells you</span></div>

<p>Sediment reading is perhaps the most nuanced skill in tank inspection, because different sediment types indicate completely different upstream problems.</p>

<p>Standard grey-brown silt sediment accumulating uniformly on the tank floor is expected. This is the normal product of particulate matter settling out of the water column over time — and it's why tanks need periodic cleaning to stay below the 15mm threshold that keeps water quality and disposal costs manageable.</p>

<p>Black sediment is a different matter. Black sediment in a potable water tank is typically iron and manganese precipitates, or decomposing organic matter. The former points to a source water chemistry issue or a treatment process that isn't fully oxidising dissolved metals. The latter points to biological activity that is using the settled organic matter as a food source.</p>

<blockquote class="article-quotable">
  <p>The tank is not a passive vessel — it's a record of everything that has happened to the water inside it. A diver with the right training reads that record as clearly as a doctor reads an X-ray. The difference is that the doctor's patient can describe their symptoms. The tank can't. The evidence is the only voice it has.</p>
</blockquote>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">What does floating debris inside a water storage tank indicate?</p>
  <p class="faq-a">Floating debris — leaf material, insect bodies, or organic matter — on the water surface typically indicates that vent mesh protection is inadequate. The material is entering through roof vents or gaps in the roof structure that admit airborne particulates. Upgrading to finer mesh on all vents and sealing roof edge flashings resolves the majority of floating debris findings.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What type of sediment points to a treatment plant problem rather than a storage problem?</p>
  <p class="faq-a">Black sediment or fine floc material found in a storage tank often points upstream — to iron and manganese that wasn't fully oxidised during treatment, or to treatment chemical carry-over. Standard grey-brown silt is normal operational accumulation. The distinction matters because the remediation for each is completely different: one requires cleaning the tank, the other requires reviewing the upstream process.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do you trace the source of contamination in a water storage tank?</p>
  <p class="faq-a">An experienced inspector reads the physical evidence in the tank — the location of animal remains, the distribution and type of sediment, staining patterns on the walls, the condition of roof vents and access hatches — and maps each piece of evidence to a specific entry pathway or upstream cause. This is why internal tank inspection by a trained specialist provides far more information than a water quality test alone.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What does leaf litter inside a water storage tank tell you?</p>
  <p class="faq-a">Leaf litter and grass clippings found inside a tank indicate that vent mesh is too coarse — allowing organic matter through that should be filtered — and typically also that maintenance contractors working near the tank haven't been inducted on potable water asset protocols. Both issues are straightforward to resolve but require a formal inspection to identify.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What does sediment on the walls of a water tank mean?</p>
  <p class="faq-a">Sediment banding on walls rather than the floor indicates historical water level fluctuation combined with inadequate tank cycling. The minerals and organic matter suspended in the water settled at the waterline as the level dropped, leaving a physical record. Multiple banding levels indicate repeated drawdown events. The underlying cause is typically inadequate operational cycling or mixing — the tank isn't turning over its contents regularly enough to keep particulates in suspension.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure provides specialist inspection and condition assessment for water storage assets across Australia — reading the evidence inside the tank before it becomes a water quality event.</p>
  <a href="/contact" class="cta-btn">Request an inspection</a>
</div>`,
}

// ─── WEEK 3.2 — The Open Overflow ────────────────────────────────────────────
const post32 = {
  title: 'The Open Overflow: How Wildlife Gets In Through Your Drain Point',
  slug: 'the-open-overflow-wildlife-drain-point',
  excerpt: 'The overflow drain is a critical safeguard — it stops your tank from being overpressured. But for most of the year, the open end sitting in the grass isn\'t releasing water. It\'s providing shelter.',
  cover_image_url: 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/harsh-env-drone.jpg',
  read_time: '5 min read',
  status: 'published',
  seo_title: 'How Wildlife Gets Into Water Tanks Through the Overflow Drain | PC Water',
  seo_description: 'The overflow drain is the most overlooked animal entry point in water storage. Here\'s how wildlife gets in, why they can\'t get out, and what a flapper valve costs versus a contamination event.',
  published_at: '2026-05-22T09:00:00.000Z',
  content: `<p class="article-lead">
  The overflow drain is a critical safeguard — it stops your tank from being overpressured. But for most of the year, the open end sitting in the grass isn't releasing water. It's providing shelter.
</p>

<p>This is one of the most consistent findings in our tank inspection work across Australia: an open overflow drain end, running from the base of the tank out to a point metres away in the surrounding vegetation. No screen. No valve. No protection. Just a pipe that runs dry 95% of the year and provides exactly the kind of dark, sheltered habitat that Australian wildlife seeks out.</p>

<div class="article-divider"><span>The problem with open ends</span></div>

<p>The mechanics of animal entry through overflow drains are straightforward once you understand the conditions. The pipe runs dry during most of the year — which is exactly when it becomes a habitat. Small animals, particularly frogs, birds, and small marsupials, enter the pipe during dry conditions seeking shelter. During an overflow event — when the tank fills to capacity and water rushes through — they're trapped by the current and end up inside the tank. Once inside a full concrete reservoir, most animals cannot exit the way they entered.</p>

<p>The contamination event that follows isn't immediate. A small animal carcass in a large reservoir doesn't create an acute water quality failure on day one. The problem is what happens over the following weeks and months as biological decomposition proceeds and disinfection residuals are consumed managing the biological load.</p>

<div class="article-divider"><span>The four access pathways</span></div>

<p><strong>1. The overflow drain point</strong> — The most common and least managed entry pathway. The open end of the overflow pipe is typically located in grass or gravel at a distance from the tank, making it easy to overlook during routine site visits. A hinged flapper valve fitted to the drain end costs a fraction of a contamination response and prevents virtually all animal entry through this pathway.</p>

<p><strong>2. Vandal-damaged or unsealed access hatches</strong> — The access hatch is the largest opening in any tank. A hatch that doesn't seal correctly — whether through vandal damage, wear on the gasket, or a locking mechanism that's been left open — is an entry point for any animal capable of fitting through the gap. Regular hatch condition audits should be a standard item in every inspection program.</p>

<p><strong>3. Deteriorated vent mesh and roof edge flashings</strong> — Every tank has ventilation penetrations that allow the tank to breathe as water levels rise and fall. The mesh protecting these penetrations degrades over time — particularly in UV-exposed Australian conditions. Fine wire mesh allows ventilation while excluding insects, birds, and small animals. Coarse mesh keeps out larger animals only. Unsealed roof edge flashings provide gaps that don't need mesh protection because they're not supposed to exist.</p>

<p><strong>4. Overhanging trees and surrounding bushland</strong> — This pathway is indirect but real. Overhanging branches provide access to tank roofs for possums, rats, and other climbing animals. Once on the roof, they have direct access to any unsealed penetration. A vegetation management zone of 3–5 metres around the tank perimeter eliminates this pathway while also reducing leaf litter accumulation in vent mesh.</p>

<div class="article-pull-stat">
  <span class="stat-num">&lt;$500</span>
  <span class="stat-label">Typical cost of a flapper valve and installation. Compare to a contamination response event that can run to tens of thousands.</span>
</div>

<blockquote class="article-quotable">
  <p>The overflow drain is designed to release water once or twice a year. For the other 363 days, the open end sitting in the grass isn't managing hydraulic pressure — it's managing shelter demand. A flapper valve resolves both functions. Without one, you're managing only the first.</p>
</blockquote>

<div class="article-divider"><span>What prevention actually looks like</span></div>

<p><strong>Fit a flapper valve to the overflow drain end.</strong> A hinged flapper valve opens under water pressure during overflow events and closes when the flow stops. It allows the overflow function to operate normally while preventing animal access during dry periods. This is the highest-return single action available for reducing animal entry risk in Australian water storage assets.</p>

<p><strong>Inspect and upgrade vent mesh.</strong> All ventilation penetrations should have fine stainless steel mesh — not coarse galvanised wire — covering the full opening with no gaps at the edges. Mesh condition should be checked at every site visit and replaced on condition rather than waiting for the next formal inspection.</p>

<p><strong>Audit hatch condition and locking.</strong> The access hatch gasket, hinges, and locking mechanism should be checked for condition and function at every inspection. A hatch that closes but doesn't seal properly provides no protection against small animal entry, and a hatch with a non-functioning lock provides no protection against vandal access.</p>

<p><strong>Clear vegetation from the tank perimeter.</strong> A 3–5 metre vegetation management zone around the tank removes the bridge between surrounding bushland and the tank roof. This reduces both the climbing animal pathway and the leaf litter loading on vent mesh.</p>

<div class="article-divider"><span>Frequently asked questions</span></div>

<div class="article-faq-item">
  <p class="faq-q">How do animals get into water storage tanks through the overflow pipe?</p>
  <p class="faq-a">Animals enter the overflow drain pipe during dry conditions when it provides shelter. During an overflow event — when the tank fills to capacity and water rushes through — they're carried into the tank by the current. Once inside a full reservoir, most animals cannot exit the way they entered. A hinged flapper valve fitted to the drain end prevents entry during dry periods while allowing the overflow function to operate normally.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is a flapper valve and why should it be fitted to overflow drain points?</p>
  <p class="faq-a">A flapper valve is a hinged plate fitted to the open end of an overflow drain pipe. It opens under water pressure during overflow events and closes when flow stops — preventing animal access during the dry periods when the pipe isn't actively overflowing. It's the single most cost-effective action available for reducing animal entry risk in water storage assets, typically costing less than $500 installed.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What types of animals are most commonly found inside Australian water tanks?</p>
  <p class="faq-a">Birds are the most common animal body found inside Australian water storage tanks, followed by frogs, snakes, rabbits, and small marsupials. The specific animal found often indicates which entry pathway failed: small birds near the roof suggest vent or roof penetration entry; frogs on the floor typically indicate overflow drain entry; larger mammals typically indicate hatch or vandal-access events.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do I know if an animal has entered my water storage tank?</p>
  <p class="faq-a">External indicators include unexplained changes in water taste, odour, or turbidity, elevated biological indicators in routine water quality testing, and visible evidence of animal activity near overflow drain ends, hatches, or roof vents. However, most animal entry events in large tanks don't produce obvious external indicators until contamination levels are already significant — which is why internal inspection is the only reliable detection method.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is an open overflow drain a compliance issue under Australian standards?</p>
  <p class="faq-a">Yes. AS/NZS 4766 and related water storage guidelines require that overflow pipes be protected against animal entry. An open overflow drain end without a protective valve or screen is a non-compliant condition under these standards and represents a documented contamination pathway. Insurers and water authorities increasingly treat open overflow drain ends as a managed risk item in asset condition assessments.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure conducts overflow drain and access pathway audits as part of every tank inspection program across Australia — identifying animal entry points before they become contamination events.</p>
  <a href="/contact" class="cta-btn">Request a pathway audit</a>
</div>`,
}

// ─── INSERT INTO SUPABASE ─────────────────────────────────────────────────────
async function run() {
  const posts = [post21, post22, post23, post32]

  for (const post of posts) {
    console.log(`\nInserting: ${post.slug}`)

    // Check if already exists
    const { data: existing } = await sb
      .from('cms_posts')
      .select('id')
      .eq('slug', post.slug)
      .single()

    if (existing) {
      console.log(`  → Updating existing post...`)
      const { error } = await sb
        .from('cms_posts')
        .update({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          cover_image_url: post.cover_image_url,
          read_time: post.read_time,
          status: post.status,
          seo_title: post.seo_title,
          seo_description: post.seo_description,
          published_at: post.published_at,
          updated_at: new Date().toISOString(),
        })
        .eq('slug', post.slug)

      if (error) console.error(`  ✗ Update error:`, error.message)
      else console.log(`  ✓ Updated successfully`)
    } else {
      console.log(`  → Inserting new post...`)
      const { error } = await sb.from('cms_posts').insert({
        ...post,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })

      if (error) console.error(`  ✗ Insert error:`, error.message)
      else console.log(`  ✓ Inserted successfully`)
    }
  }

  console.log('\n✅ All done!')
}

run().catch(console.error)
