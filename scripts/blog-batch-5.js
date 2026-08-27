/**
 * blog-batch-5.js — authors + integrates 10 more blog posts.
 *
 * Single source of truth for the batch. Two modes:
 *   node scripts/blog-batch-5.js static   -> prints TS entries for
 *                                             lib/cms/static-content.ts (SSG fallback)
 *   node scripts/blog-batch-5.js          -> uploads images + upserts posts to Supabase
 *
 * Images are reused from public/posts (already in the repo).
 */

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

// ── POSTS ─────────────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'government-and-council-water-asset-management-reporting-under-budget-pressure',
    title: 'Government and Council Water Asset Management: Reporting Obligations Under Budget Pressure',
    excerpt:
      'Councils manage ageing water storage assets against reporting obligations and constrained budgets at the same time. Here is how well-run asset management programs reconcile the two.',
    coverImage: 'sector-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-12T13:00:00.000Z',
    seoTitle: 'Council Water Asset Management Explained | PC Water',
    seoDescription:
      'Reporting obligations, ageing infrastructure and constrained budgets all shape how councils manage water storage assets. A practical explanation of what a sound program looks like.',
    tags: [
      ['tag-government-asset-mgmt', 'Government', 'government'],
      ['tag-asset-management-council', 'Asset Management', 'asset-management'],
      ['tag-compliance-council', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  A council's water storage assets are typically older, more numerous, and more geographically spread than a single commercial site's — and the reporting obligations attached to them do not shrink because the budget did. Reconciling those two pressures is the core challenge of council water asset management.
</p>

<p>Local governments carry statutory reporting obligations around asset condition, financial sustainability and levels of service, often to state regulators as well as their own ratepayers. Meeting those obligations on a portfolio of ageing tanks, with a maintenance budget that rarely grows in step with the asset base, requires a genuinely prioritised program — not an attempt to inspect and maintain everything equally.</p>

<div class="article-divider"><span>What good council asset management actually prioritises</span></div>

<h3>Condition-based prioritisation, not age-based prioritisation</h3>
<p>Two tanks of the same age can be in very different condition depending on water chemistry, exposure and prior maintenance. A program that schedules intervention purely by installation date, rather than actual condition data, risks over-servicing sound assets while under-servicing ones that are quietly deteriorating faster.</p>

<h3>Risk-weighted scheduling</h3>
<p>Not every tank carries the same consequence if it fails — a sole water supply to a small community carries a different risk weighting to a redundant, backed-up urban supply. Councils that weight their inspection and maintenance schedule by consequence, not just condition, get more protection for the same budget.</p>

<figure>
  <img src="${BASE}/sector-hero.jpg" alt="Council-owned water storage infrastructure managed under an asset management program"/>
  <figcaption><strong>The portfolio view matters as much as any single asset.</strong> Council water asset management succeeds or fails on how well the whole portfolio is prioritised, not on any one tank's condition alone.</figcaption>
</figure>

<div class="article-divider"><span>Making reporting obligations work for the program, not against it</span></div>

<p>Condition and financial sustainability reporting is often treated as a compliance burden layered on top of asset management, when the same condition data collected for a report is exactly what should be driving maintenance prioritisation. Councils that build a single, consistent condition dataset — used for both internal prioritisation and external reporting — get more value from every inspection dollar spent than those running separate processes for each.</p>

<figure>
  <img src="${BASE}/sector-inspection.jpg" alt="Condition inspection being carried out on a council water storage tank as part of an asset management program"/>
  <figcaption><strong>One inspection, two purposes.</strong> Condition data collected for asset management can directly support statutory reporting, rather than requiring a separate exercise.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A constrained budget does not excuse a council from its reporting obligations, but it does demand that every dollar spent on inspection and maintenance does double duty — informing the asset register and supporting the statutory report from the same data.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The purposes a single, well-structured condition inspection can serve at once — internal maintenance prioritisation and external statutory reporting</span>
</div>

<div class="article-divider"><span>Building a defensible, budget-realistic program</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Element</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Condition-based, not age-based, prioritisation</td><td>Targets budget at assets that actually need it, not just older ones</td></tr>
    <tr><td>Risk-weighted scheduling by consequence of failure</td><td>Protects the highest-consequence assets within a constrained budget</td></tr>
    <tr><td>Single condition dataset for reporting and maintenance</td><td>Avoids duplicated inspection effort and inconsistent records</td></tr>
    <tr><td>Multi-year forward maintenance plan</td><td>Supports defensible budget submissions with clear justification</td></tr>
    <tr><td>Documented decision rationale for deferred works</td><td>Protects the council if a deferred asset is later questioned</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">How should a council prioritise water tank maintenance across a large portfolio on a limited budget?</p>
  <p class="faq-a">By combining current condition data with a consequence-of-failure weighting for each asset, rather than scheduling by age or a fixed rotation. This directs limited budget toward the assets where deterioration and consequence combine to create the greatest actual risk.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can the same inspection data be used for both asset management and statutory reporting?</p>
  <p class="faq-a">Yes, provided the inspection is structured to capture the data both purposes require from the outset. Building this alignment in from the start avoids running separate, duplicated inspection processes for internal maintenance planning and external reporting.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What should a council do if it cannot afford to address every identified defect immediately?</p>
  <p class="faq-a">Document the decision rationale — the risk assessment, the reason for deferral, and the planned timeframe for future action. A documented, risk-based deferral decision is defensible; an undocumented one is not, particularly if the deferred asset later fails.</p>
</div>

<div class="article-cta">
  <p>Managing a portfolio of council water assets on a constrained budget? A condition-based, risk-weighted program gets more protection from the same spend.</p>
  <a href="/contact" class="cta-btn">Discuss your asset management program</a>
</div>`,
  },
  {
    slug: 'water-tank-coating-systems-compared-epoxy-polyurethane-and-zinc-rich-primers',
    title: 'Water Tank Coating Systems Compared: Epoxy, Polyurethane and Zinc-Rich Primers',
    excerpt:
      'Not every coating system suits every tank. Here is how epoxy, polyurethane and zinc-rich primer systems actually differ, and what should drive the choice between them.',
    coverImage: 'corrosion-coating-comparison.jpg',
    readTime: '7 min read',
    publishedAt: '2026-08-12T17:00:00.000Z',
    seoTitle: 'Water Tank Coating Systems Explained | PC Water',
    seoDescription:
      'Epoxy, polyurethane and zinc-rich primer coating systems protect steel water tanks differently. A practical comparison of how each performs and where each fits.',
    tags: [
      ['tag-tank-maintenance-coatings', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-corrosion-coatings', 'Corrosion', 'corrosion'],
      ['tag-tank-inspection-coatings', 'Tank Inspection', 'tank-inspection'],
    ],
    content: `<p class="article-lead">
  Specifying a coating system by brand name, without understanding the underlying chemistry, is how the wrong product ends up on the wrong tank. Epoxy, polyurethane and zinc-rich primer systems each protect steel differently, and each is genuinely better suited to different service conditions.
</p>

<div class="article-divider"><span>How the main systems actually work</span></div>

<h3>Epoxy coatings</h3>
<p>Epoxies form a dense, chemically resistant film with strong adhesion to properly prepared steel, making them a common choice for potable water tank interiors where chemical resistance and a smooth, cleanable surface matter. Their main limitation is UV stability — epoxies chalk and degrade under prolonged sun exposure, which is why they are typically used internally or paired with a UV-stable topcoat externally.</p>

<h3>Polyurethane coatings</h3>
<p>Polyurethanes offer strong UV resistance and gloss retention, making them a common external topcoat choice, often applied over an epoxy or zinc-rich primer system to combine chemical resistance underneath with weathering performance on the surface. Polyurethane alone over bare steel, without a compatible primer, does not deliver the same corrosion protection as a full system.</p>

<h3>Zinc-rich primers</h3>
<p>Zinc-rich primers work differently to barrier coatings like epoxy and polyurethane — the zinc provides a degree of galvanic (sacrificial) protection to the steel beneath, similar in principle to cathodic protection, in addition to the physical barrier the film provides. This makes them particularly effective at protecting against corrosion creeping from scratches or damage in the coating film, a common failure point for barrier-only systems.</p>

<figure>
  <img src="${BASE}/corrosion-coating-comparison.jpg" alt="Comparison of different coating systems applied to steel water tank surfaces"/>
  <figcaption><strong>Different chemistry, different protection mechanism.</strong> Barrier coatings and galvanic primers protect steel in fundamentally different ways — and a full system often combines both.</figcaption>
</figure>

<div class="article-divider"><span>Why the full system matters more than any single product</span></div>

<p>A common specification error is choosing a high-performance topcoat while under-specifying the primer, or vice versa — the two layers need to be compatible and each doing the job it is suited to. A zinc-rich primer providing galvanic protection at scratches, with an epoxy intermediate coat for chemical resistance, and a polyurethane topcoat for UV and weathering, is a genuinely different (and generally more durable) system than any one of those products used alone.</p>

<figure>
  <img src="${BASE}/corrosion-hero.jpg" alt="Steel water tank surface showing the layered protection of a multi-coat coating system"/>
  <figcaption><strong>The system is the specification, not the product.</strong> Coating performance depends on how primer, intermediate and topcoat layers work together, not any single layer in isolation.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Asking "which coating is best" is the wrong question. The right question is which combination of primer, intermediate and topcoat suits this tank's exposure, chemical environment and maintenance access — because the system, not any single product, determines how long the protection actually lasts.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The layers in a well-specified coating system that each do a different job — a galvanic or barrier primer, a chemically resistant intermediate coat, and a UV-stable topcoat</span>
</div>

<div class="article-divider"><span>Matching a coating system to the application</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Condition</th>
      <th>Relevant consideration</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Potable water contact surface</td><td>Requires AS4020-certified coating suitable for drinking water contact</td></tr>
    <tr><td>External surface with high UV exposure</td><td>Polyurethane topcoat for gloss and UV retention</td></tr>
    <tr><td>High mechanical damage risk (fittings, walkways)</td><td>Zinc-rich primer for galvanic protection at scratches</td></tr>
    <tr><td>Aggressive internal chemical exposure</td><td>Epoxy intermediate coat for chemical resistance</td></tr>
    <tr><td>Limited future recoat access</td><td>Favour a more durable, higher-build system upfront</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is epoxy or polyurethane the better coating for a water tank?</p>
  <p class="faq-a">They are usually not competing choices — epoxy is common for internal, chemically resistant surfaces, while polyurethane is common as an external, UV-stable topcoat, often over an epoxy or zinc-rich primer. Which is appropriate depends on where on the tank the coating is being applied and what it needs to resist.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What does a zinc-rich primer actually protect against that other coatings don't?</p>
  <p class="faq-a">It provides galvanic (sacrificial) protection at points where the coating film is scratched or damaged, continuing to protect the exposed steel even where the barrier itself has failed locally. Barrier coatings like plain epoxy or polyurethane do not offer this protection once the film is breached.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can I mix coating brands across the primer, intermediate and topcoat layers?</p>
  <p class="faq-a">Compatibility between layers matters more than brand consistency, but manufacturers generally test and warrant their own multi-coat systems as a set. Mixing brands without confirming chemical compatibility risks adhesion failure between coats, so this should be checked before specification.</p>
</div>

<div class="article-cta">
  <p>Specifying or reviewing a coating system for a water tank? Getting the right combination of primer, intermediate and topcoat matters more than any single product choice.</p>
  <a href="/contact" class="cta-btn">Discuss your coating specification</a>
</div>`,
  },
  {
    slug: 'industrial-process-water-storage-when-potable-grade-isnt-the-right-specification',
    title: 'Industrial Process Water Storage: When Potable-Grade Isn’t the Right Specification',
    excerpt:
      'Specifying every industrial water tank to potable standards seems like the safe default. It is often the wrong one — and the more expensive one. Here is how to specify process water storage correctly.',
    coverImage: 'harsh-env-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-13T09:00:00.000Z',
    seoTitle: 'Industrial Process Water Storage Explained | PC Water',
    seoDescription:
      'Process water storage often needs a different specification to potable storage — sometimes more resistant, sometimes simpler. A practical guide to specifying industrial process water tanks correctly.',
    tags: [
      ['tag-industrial-facilities-process', 'Industrial Facilities', 'industrial-facilities'],
      ['tag-water-treatment-process', 'Water Treatment Solutions', 'water-treatment'],
      ['tag-custom-tank-process', 'Custom Tank Design', 'custom-tank-design'],
    ],
    content: `<p class="article-lead">
  Defaulting every industrial water tank to potable-grade specification feels like the conservative choice. In practice, it can specify the wrong protection entirely — potable-grade materials are chosen for drinking water compatibility, not for resisting the specific chemical or thermal environment an industrial process actually presents.
</p>

<div class="article-divider"><span>Where potable-grade specification falls short for process water</span></div>

<h3>Chemical compatibility is a different question</h3>
<p>AS4020 certification confirms a material is safe in contact with drinking water — it says nothing about how that material performs against process chemicals, elevated temperatures, or high-solids process streams a potable specification was never tested against. A liner or coating chosen for potable compatibility can fail prematurely in a process application it was never designed to resist.</p>

<h3>Process water sometimes needs less, not more</h3>
<p>Not every process stream requires the corrosion and chemical resistance potable-grade materials provide — some process water storage (non-contact cooling water, for example) can be specified more simply and cost-effectively once it is clear the water quality requirements are genuinely lower than drinking water standards. Over-specifying every tank to potable grade is not a safety margin; it is an unnecessary cost with no corresponding benefit.</p>

<figure>
  <img src="${BASE}/harsh-env-hero.jpg" alt="Industrial process water storage tank at a manufacturing or resources facility"/>
  <figcaption><strong>Specify to the actual process, not a default.</strong> Process water storage requirements depend on the specific chemical and thermal environment, not a blanket potable standard.</figcaption>
</figure>

<div class="article-divider"><span>Getting the specification right starts with the process data</span></div>

<p>Correct specification starts with actual process water chemistry, temperature range, and solids content — not an assumption carried over from a potable water project. Where a process stream is genuinely more aggressive than drinking water (higher temperature, specific chemical exposure, high turbidity), the storage tank needs materials and coatings specified against that actual environment, which may mean a more resistant — and different — specification than a potable tank, not a lesser one.</p>

<figure>
  <img src="${BASE}/sector-hero.jpg" alt="Water storage infrastructure serving an industrial process at a manufacturing facility"/>
  <figcaption><strong>Two tanks, two specifications.</strong> A potable supply tank and a process water tank on the same site can — and often should — have entirely different material specifications.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Potable-grade is not a synonym for "high quality" in every context. It is a specific specification for a specific purpose — drinking water compatibility. Process water needs its own specification, worked out from what the process actually demands.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The directions a process water specification can diverge from potable-grade — sometimes needing more chemical resistance, sometimes needing less</span>
</div>

<div class="article-divider"><span>Specifying process water storage correctly</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Consideration</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Actual process water chemistry and temperature</td><td>Determines real material compatibility requirements, not a default assumption</td></tr>
    <tr><td>Whether the stream needs potable-grade contact materials at all</td><td>Avoids unnecessary cost where drinking water compatibility is not required</td></tr>
    <tr><td>Solids content and abrasion potential</td><td>Affects liner and coating wear resistance requirements</td></tr>
    <tr><td>Compatibility testing against actual process fluid</td><td>Confirms material performance beyond generic chemical resistance charts</td></tr>
    <tr><td>Separation from any adjacent potable systems</td><td>Prevents cross-connection risk between differently specified systems</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is it ever wrong to over-specify a tank to potable-grade materials?</p>
  <p class="faq-a">It is not unsafe, but it is often an unnecessary cost where the water quality requirement is genuinely lower than drinking water standards, and it can also be the wrong technical choice where the process environment is more chemically aggressive than a potable specification was designed to resist.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can the same coating be used for both potable and process water tanks on one site?</p>
  <p class="faq-a">Sometimes, but it should be confirmed rather than assumed. A coating certified for potable contact is not automatically validated against a specific process chemical environment, and each application should be specified against its own actual requirements.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What information is needed to specify a process water tank correctly?</p>
  <p class="faq-a">The actual process fluid chemistry, expected temperature range, solids or particulate content, and any relevant regulatory or internal quality requirements for that specific stream — not a specification carried over from an unrelated potable water project on the same site.</p>
</div>

<div class="article-cta">
  <p>Specifying process water storage for an industrial site? Getting the material specification right against the actual process saves both cost and premature failure risk.</p>
  <a href="/contact" class="cta-btn">Discuss your process water storage needs</a>
</div>`,
  },
  {
    slug: 'weld-inspection-and-ndt-for-steel-water-tanks-what-gets-checked-and-why',
    title: 'Weld Inspection and NDT for Steel Water Tanks: What Gets Checked and Why',
    excerpt:
      'A weld can look perfect on the surface and still hide a defect that compromises the tank. Here is what non-destructive testing actually checks, and why visual inspection alone is not enough.',
    coverImage: 'corrosion-rov-inspection.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-13T15:00:00.000Z',
    seoTitle: 'Weld Inspection and NDT for Water Tanks | PC Water',
    seoDescription:
      'Visual inspection cannot detect subsurface weld defects. A practical explanation of the non-destructive testing methods used to verify weld integrity on steel water tanks.',
    tags: [
      ['tag-tank-inspection-ndt', 'Tank Inspection', 'tank-inspection'],
      ['tag-tank-installation-ndt', 'Tank Installation', 'tank-installation'],
      ['tag-compliance-ndt', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  A weld's surface appearance tells you almost nothing about what is happening beneath it. Porosity, incomplete fusion and internal cracking can all sit invisibly under a smooth, cosmetically sound weld cap — which is exactly why steel tank welds are verified with non-destructive testing, not eyesight alone.
</p>

<div class="article-divider"><span>What visual inspection can and cannot tell you</span></div>

<h3>What a visual check reliably catches</h3>
<p>Visual inspection is genuinely useful for surface-breaking defects — undercut, surface porosity, obvious cracking, and profile issues like excessive reinforcement or poor fit-up. It is a legitimate first-line check, and most weld defects that do occur are surface-visible.</p>

<h3>What it structurally cannot catch</h3>
<p>Subsurface defects — internal porosity, slag inclusions, lack of fusion between weld passes, or internal cracking — are invisible to the naked eye by definition. A weld with a perfect surface finish can still contain a subsurface defect large enough to compromise its structural integrity, particularly under the cyclic pressure loading a tank wall experiences as water level changes.</p>

<figure>
  <img src="${BASE}/corrosion-rov-inspection.jpg" alt="Close inspection of a steel water tank weld seam for defects"/>
  <figcaption><strong>The surface is only half the story.</strong> A weld's visible finish does not confirm what is happening at the fusion line beneath it.</figcaption>
</figure>

<div class="article-divider"><span>The main NDT methods used on tank welds</span></div>

<h3>Ultrasonic testing (UT)</h3>
<p>Sound waves passed through the weld detect internal discontinuities by reading how the wave reflects back — a widely used method for finding subsurface defects like lack of fusion or internal porosity without damaging the weld.</p>

<h3>Magnetic particle inspection (MPI)</h3>
<p>Effective for detecting surface and near-surface defects in ferromagnetic steel by revealing where magnetic field lines are disrupted by a flaw — often used as a complementary check alongside visual inspection for fine surface cracking not obvious to the eye.</p>

<h3>Radiographic testing (RT)</h3>
<p>X-ray or gamma-ray imaging of a weld reveals internal defects as density variations on film or a digital detector — a highly reliable method for critical welds, though it requires more site controls (radiation safety exclusion zones) than UT or MPI.</p>

<blockquote class="article-quotable">
  <p>A weld that has not been tested is not a weld with no defects — it is a weld with unknown defects. NDT does not create quality; it verifies it, and that verification is what a visual inspection alone cannot provide.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The main non-destructive testing methods used to verify steel tank welds beyond visual inspection — ultrasonic, magnetic particle, and radiographic testing</span>
</div>

<div class="article-divider"><span>What a proper weld quality program includes</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Element</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Visual inspection of every weld</td><td>Catches surface-visible defects as the first line of quality control</td></tr>
    <tr><td>NDT applied to a defined percentage or all critical welds</td><td>Verifies subsurface integrity that visual inspection cannot assess</td></tr>
    <tr><td>Qualified welding procedures and welders</td><td>Reduces the likelihood of defects occurring in the first place</td></tr>
    <tr><td>Documented NDT results retained with as-built records</td><td>Provides evidence of weld quality for the tank's service life</td></tr>
    <tr><td>Defined acceptance criteria against a recognised standard</td><td>Ensures any detected defect is assessed consistently, not subjectively</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is NDT required on every weld in a steel water tank?</p>
  <p class="faq-a">Requirements vary by the applicable design standard and the criticality of the specific weld, but most tank fabrication specifications require NDT on a defined percentage of welds, or all critical welds, rather than visual inspection alone across the board.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can NDT be performed after a tank is already in service, not just during fabrication?</p>
  <p class="faq-a">Yes — ultrasonic testing in particular can be used during in-service inspection to check weld and plate condition without requiring the tank to be taken apart, making it a useful tool for periodic condition assessment as well as initial fabrication quality control.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What happens if NDT finds a defect in a weld?</p>
  <p class="faq-a">The defect is assessed against defined acceptance criteria from the applicable standard. Defects within acceptable limits may be recorded and monitored; defects exceeding those limits typically require repair — cutting out and re-welding the affected section — followed by re-testing to confirm the repair meets the required standard.</p>
</div>

<div class="article-cta">
  <p>Verifying weld quality on a new tank fabrication or an existing asset? NDT gives you evidence, not just an assumption of quality.</p>
  <a href="/contact" class="cta-btn">Discuss weld inspection and NDT</a>
</div>`,
  },
  {
    slug: 'water-tank-freeboard-and-overflow-sizing-getting-the-numbers-right-for-storm-events',
    title: 'Water Tank Freeboard and Overflow Sizing: Getting the Numbers Right for Storm Events',
    excerpt:
      'Freeboard and overflow capacity are two of the least visible numbers in a tank design — and two of the most consequential when a storm event actually tests them.',
    coverImage: 'sediment-tank-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-14T09:00:00.000Z',
    seoTitle: 'Water Tank Freeboard and Overflow Sizing | PC Water',
    seoDescription:
      'Freeboard allowance and overflow pipe sizing determine whether a tank handles a storm inflow event safely. A practical explanation of getting these design numbers right.',
    tags: [
      ['tag-custom-tank-freeboard', 'Custom Tank Design', 'custom-tank-design'],
      ['tag-foundation-civil-freeboard', 'Foundation & Civil', 'foundation-civil'],
      ['tag-compliance-freeboard', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  Freeboard and overflow sizing rarely get discussed until a storm event floods a site that "shouldn't" have flooded. Both numbers are set at design stage, largely invisible in day-to-day operation, and entirely dependent on getting the inflow assumptions right the first time.
</p>

<div class="article-divider"><span>Freeboard: the margin that absorbs the unexpected</span></div>

<h3>What freeboard is actually for</h3>
<p>Freeboard is the air gap maintained between a tank's normal maximum operating level and the top of its walls or roof structure — a deliberate margin that absorbs surge, wave action from seismic or wind-induced sloshing, and short-term inflow spikes without the tank overtopping. It is not wasted capacity; it is a safety margin built into the structure.</p>

<h3>Why undersized freeboard is a quiet risk</h3>
<p>A tank designed with minimal freeboard to maximise usable storage volume looks efficient on a drawing, but it removes the margin that protects against overtopping during exactly the events — storms, seismic activity, sudden inflow surges — that the tank most needs to handle safely. Freeboard is one of the design parameters most tempting to shave for extra capacity, and one of the least forgiving to get wrong.</p>

<figure>
  <img src="${BASE}/sediment-tank-hero.jpg" alt="Water storage tank showing freeboard margin between operating level and tank top"/>
  <figcaption><strong>The gap that is not wasted space.</strong> Freeboard exists specifically to absorb the surge and inflow spikes a storm event or seismic activity can introduce.</figcaption>
</figure>

<div class="article-divider"><span>Overflow sizing: the last line of defence</span></div>

<p>An overflow pipe needs to be sized against a realistic worst-case inflow scenario — not the tank's normal fill rate — because its entire purpose is to safely discharge water the tank cannot otherwise accommodate during an abnormal event. An undersized overflow can be overwhelmed by a genuine storm inflow spike, at which point the tank overtops uncontrolled, often at points not designed to handle that flow — roof edges, hatch seals, wall joints — with far more consequence than a properly sized, controlled overflow discharge.</p>

<figure>
  <img src="${BASE}/water-food-hero.jpg" alt="Water storage tank with overflow pipe designed to safely discharge excess inflow during storm events"/>
  <figcaption><strong>A properly sized overflow is a controlled failure mode.</strong> It exists so that excess water leaves the tank in a planned, safe way rather than an uncontrolled one.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Freeboard and overflow sizing are both about planning for the event you hope never happens. Getting them right costs a small amount of theoretical capacity at design stage. Getting them wrong costs uncontrolled overtopping at exactly the moment the tank is under the most stress.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The design parameters that determine whether a tank handles a storm inflow event safely — freeboard margin, and overflow pipe capacity</span>
</div>

<div class="article-divider"><span>What to confirm on freeboard and overflow design</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Freeboard margin against the applicable design standard</td><td>Confirms adequate allowance for surge and sloshing, not just static level</td></tr>
    <tr><td>Overflow pipe sized against a realistic worst-case inflow</td><td>Ensures the overflow can actually handle a genuine storm event</td></tr>
    <tr><td>Overflow discharge point and downstream capacity</td><td>Confirms the discharged water is directed safely, not creating a new hazard</td></tr>
    <tr><td>Overflow screening intact and unobstructed</td><td>A blocked or damaged screen can defeat the overflow's function entirely</td></tr>
    <tr><td>As-built freeboard confirmed against design intent</td><td>Verifies construction matched the design assumption, not just the drawing</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is freeboard just wasted tank capacity?</p>
  <p class="faq-a">No — it is a deliberate safety margin designed to absorb surge, sloshing and short-term inflow spikes without the tank overtopping. Reducing freeboard to maximise usable volume removes exactly the margin the tank needs during the events it is most important to handle safely.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How is an overflow pipe correctly sized?</p>
  <p class="faq-a">Against a realistic worst-case inflow scenario for the specific site and inlet configuration, not the tank's normal operating fill rate. This calculation should be confirmed at design stage, and re-checked if the tank's inlet arrangement or supply source changes after commissioning.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can an existing tank's overflow be checked for adequate sizing?</p>
  <p class="faq-a">Yes — a review comparing the existing overflow capacity against a realistic worst-case inflow scenario for that specific site can confirm whether the original design remains adequate, particularly if supply conditions or inlet configuration have changed since the tank was commissioned.</p>
</div>

<div class="article-cta">
  <p>Reviewing freeboard or overflow adequacy on an existing tank, or specifying a new one? Getting these numbers right protects the asset when a storm event actually tests it.</p>
  <a href="/contact" class="cta-btn">Discuss your tank design parameters</a>
</div>`,
  },
  {
    slug: 'remote-community-water-security-redundancy-planning-beyond-a-single-tank',
    title: 'Remote Community Water Security: Redundancy Planning Beyond a Single Tank',
    excerpt:
      'A single tank, however well maintained, is a single point of failure for a remote community with no easy backup supply. Here is what genuine water security redundancy looks like.',
    coverImage: 'harsh-env-drone.jpg',
    readTime: '7 min read',
    publishedAt: '2026-08-14T15:00:00.000Z',
    seoTitle: 'Remote Community Water Security Redundancy | PC Water',
    seoDescription:
      'A remote community relying on a single water tank has no backup if that tank fails. A practical explanation of redundancy planning for genuine water security.',
    tags: [
      ['tag-remote-community-security', 'Remote Community', 'remote-community'],
      ['tag-remote-projects-security', 'Remote Projects', 'remote-projects'],
      ['tag-project-managed-security', 'Project Delivery', 'project-managed'],
    ],
    content: `<p class="article-lead">
  For a metro community, a single water tank failure is an inconvenience buffered by a wider network. For a remote community relying on that tank as its primary or sole storage, the same failure is a genuine water security event — and the difference is entirely in whether redundancy was planned for.
</p>

<div class="article-divider"><span>Why a single tank is a fragile foundation for water security</span></div>

<h3>No network to buffer a failure</h3>
<p>A remote community's water storage is frequently not backed by the interconnected network redundancy a metro supply relies on — if the single tank needs to be taken offline for cleaning, repair, or fails unexpectedly, there is often no alternative source to bridge the gap. What is a manageable, planned maintenance outage in a networked system becomes a genuine supply interruption in an isolated one.</p>

<h3>Access constraints compound the risk</h3>
<p>Remote sites often face significant delay in mobilising repair crews, parts or replacement equipment — a failure that would be resolved within hours in a metro area can take days or weeks to address on a site with limited access, seasonal road closures, or long freight lead times. The consequence of a given failure is amplified by how long it takes to fix it.</p>

<figure>
  <img src="${BASE}/harsh-env-drone.jpg" alt="Aerial view of a remote community water storage site with limited redundancy"/>
  <figcaption><strong>Isolation changes the risk calculation.</strong> The same tank failure that is a minor event in a networked metro supply can be a genuine crisis in an isolated remote community.</figcaption>
</figure>

<div class="article-divider"><span>What genuine redundancy planning looks like</span></div>

<p>Redundancy for a remote community does not necessarily mean duplicating every asset — it means identifying the specific single points of failure in the current supply chain and addressing the highest-consequence ones first. This can include a second, independently operable storage tank, a backup treatment or supply pathway, pre-positioned critical spare parts on site rather than ordered on failure, and a documented contingency plan for a supply interruption of a defined duration.</p>

<figure>
  <img src="${BASE}/harsh-env-hero.jpg" alt="Remote community water infrastructure with redundant storage and supply planning"/>
  <figcaption><strong>Redundancy is planned before it is needed.</strong> The value of a backup storage or supply pathway is realised only if it was already in place when the primary system failed.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Water security for a remote community is not measured by how good the tank is on a normal day. It is measured by what happens to the community's water supply on the day that tank fails — and whether anything was planned for that day.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The factors that make a single tank failure more consequential in a remote community than a networked metro supply — no buffering network, and longer repair mobilisation time</span>
</div>

<div class="article-divider"><span>Assessing water security for a remote community</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Question</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Is there a single tank with no independent backup?</td><td>Identifies the primary single point of failure in the supply chain</td></tr>
    <tr><td>How long would repair mobilisation realistically take?</td><td>Determines how long a community would go without supply during a failure</td></tr>
    <tr><td>Are critical spare parts pre-positioned on site?</td><td>Reduces repair delay caused by freight lead time on a remote site</td></tr>
    <tr><td>Is there a documented contingency plan for supply interruption?</td><td>Confirms a response is planned, not improvised, if the primary system fails</td></tr>
    <tr><td>Can the tank be taken offline for maintenance without a supply gap?</td><td>Reveals whether routine maintenance itself creates a water security risk</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Does every remote community need a second, fully redundant water tank?</p>
  <p class="faq-a">Not necessarily a full duplicate — the right level of redundancy depends on the community's size, the consequence of a supply interruption, and what other mitigations (spare parts, contingency plans, alternative sources) are already in place. A risk assessment specific to the site is the right starting point.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the most cost-effective first step toward better water security for a remote site?</p>
  <p class="faq-a">Often a documented contingency plan and pre-positioned critical spare parts, since these address the mobilisation-delay problem directly and are typically far less expensive than a duplicate storage or treatment system, while still meaningfully reducing the consequence of a failure.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can routine maintenance itself create a water security gap for a remote community?</p>
  <p class="faq-a">Yes, if the tank has no backup and must be taken offline to be cleaned or repaired. This is a strong argument for redundancy even in the absence of an unplanned failure — planned maintenance should not be a source of supply risk in its own right.</p>
</div>

<div class="article-cta">
  <p>Assessing water security for a remote community or site? Identifying the real single points of failure is the first step toward genuine redundancy.</p>
  <a href="/contact" class="cta-btn">Discuss remote water security planning</a>
</div>`,
  },
  {
    slug: 'potable-water-tank-commissioning-disinfection-and-testing-before-handover',
    title: 'Potable Water Tank Commissioning: The Disinfection and Testing Steps Before Handover',
    excerpt:
      'A newly installed or relined tank is not ready for potable water the moment construction finishes. Here is what proper commissioning actually involves before handover.',
    coverImage: 'water-food-hatch.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-15T09:00:00.000Z',
    seoTitle: 'Potable Water Tank Commissioning Explained | PC Water',
    seoDescription:
      'Disinfection, flushing and water quality testing are all required before a new or relined potable water tank can be safely handed over. A practical commissioning guide.',
    tags: [
      ['tag-tank-installation-commissioning', 'Tank Installation', 'tank-installation'],
      ['tag-potable-water-commissioning', 'Potable Water', 'potable-water'],
      ['tag-compliance-commissioning', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  Finishing construction and being ready to supply drinking water are two different milestones. A tank fresh off installation, or freshly relined, still carries construction residue, new-material off-gassing potential, and an unproven microbiological baseline — all of which commissioning exists to address before the tank goes into potable service.
</p>

<div class="article-divider"><span>Why commissioning is not optional</span></div>

<h3>Construction residue and new-material effects</h3>
<p>Welding residue, dust, and manufacturing or installation debris are a normal byproduct of construction — not a defect, but something that must be physically removed before the tank holds drinking water. Some new materials, including certain liners and coatings, can also require an initial curing or off-gassing period, and flushing period, before water quality stabilises to normal service levels.</p>

<h3>Disinfection establishes a safe microbiological baseline</h3>
<p>A newly constructed or relined tank has no established microbiological history — disinfection (commonly chlorination to a specified concentration and contact time) is the standard method for establishing a safe baseline before the tank is connected to the potable network, consistent with AS/NZS 3500 and related guidance.</p>

<figure>
  <img src="${BASE}/water-food-hatch.jpg" alt="Access hatch on a newly commissioned potable water storage tank"/>
  <figcaption><strong>Ready to hold water is not the same as ready to supply it.</strong> Commissioning bridges the gap between construction completion and safe potable service.</figcaption>
</figure>

<div class="article-divider"><span>The commissioning sequence</span></div>

<h3>Clean, disinfect, flush</h3>
<p>The tank interior is cleaned of construction debris, disinfected to the specified chlorine concentration and contact time, then flushed and refilled with potable-quality water — a sequence, not a single step, and skipping or shortening any part of it undermines the whole process.</p>

<h3>Water quality testing before handover</h3>
<p>Samples are tested against the relevant water quality parameters — typically including microbiological indicators, disinfection residual, and turbidity — before the tank is confirmed ready for service. Handover without confirmed test results is handing over an assumption, not a verified outcome.</p>

<figure>
  <img src="${BASE}/rpvc-inline.jpg" alt="Newly installed RPVC liner system inside a water tank ahead of disinfection and commissioning"/>
  <figcaption><strong>The liner is finished; the tank is not yet.</strong> Commissioning applies to relined tanks just as much as newly built ones — the liner's completion is not the same as the tank's readiness for service.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Commissioning is the step that turns a finished structure into a verified water asset. A tank handed over without documented disinfection and water quality results is handed over on trust, not on evidence.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The sequential steps proper commissioning requires before potable handover — cleaning, disinfection to specification, and verified water quality testing</span>
</div>

<div class="article-divider"><span>What handover documentation should confirm</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Item</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Cleaning of construction debris confirmed</td><td>Removes physical residue before disinfection begins</td></tr>
    <tr><td>Disinfection concentration and contact time recorded</td><td>Verifies the disinfection process met the specified standard</td></tr>
    <tr><td>Flushing completed before final sampling</td><td>Removes disinfection byproducts and residual chemicals before service</td></tr>
    <tr><td>Water quality test results against relevant parameters</td><td>Provides objective evidence the tank is safe for potable service</td></tr>
    <tr><td>Commissioning records retained with as-built documentation</td><td>Supports future compliance review and asset history</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Does a relined tank need the same commissioning process as a brand-new tank?</p>
  <p class="faq-a">Yes. A relined tank has a new internal surface in contact with potable water, and the same cleaning, disinfection and testing sequence applies before it is returned to service, regardless of whether the surrounding structure is new or existing.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What water quality parameters are typically tested before handover?</p>
  <p class="faq-a">Commonly microbiological indicators, disinfection residual, and turbidity, though the specific parameters and acceptance criteria should be confirmed against the applicable standard and any project-specific requirements before commissioning begins.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a tank be connected to the network before commissioning is complete?</p>
  <p class="faq-a">No — connecting a tank to a potable network before disinfection and water quality testing are confirmed risks introducing construction residue, disinfection byproducts, or an unverified microbiological risk into the wider supply. Commissioning should be fully completed and documented before connection.</p>
</div>

<div class="article-cta">
  <p>Commissioning a new or relined potable water tank? A properly sequenced and documented process protects both water quality and your compliance position.</p>
  <a href="/contact" class="cta-btn">Discuss tank commissioning</a>
</div>`,
  },
  {
    slug: 'water-tank-roof-types-compared-fixed-floating-and-geodesic-domes',
    title: 'Water Tank Roof Types Compared: Fixed, Floating and Geodesic Domes',
    excerpt:
      'A tank roof does more than keep the weather out. Fixed, floating and geodesic dome roof types each suit different tank sizes, exposures and maintenance approaches.',
    coverImage: 'sector-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-15T15:00:00.000Z',
    seoTitle: 'Water Tank Roof Types Compared | PC Water',
    seoDescription:
      'Fixed roofs, floating roofs and geodesic domes each offer different structural, maintenance and contamination-control advantages on a water storage tank. A practical comparison.',
    tags: [
      ['tag-custom-tank-roof', 'Custom Tank Design', 'custom-tank-design'],
      ['tag-tank-installation-roof', 'Tank Installation', 'tank-installation'],
      ['tag-tank-maintenance-roof-type', 'Tank Maintenance', 'tank-maintenance'],
    ],
    content: `<p class="article-lead">
  Roof type is one of the more consequential decisions in a tank's design, affecting structural load, contamination risk, and how the tank is inspected and maintained for its entire service life — yet it is frequently treated as a secondary detail behind wall material and capacity.
</p>

<div class="article-divider"><span>The main roof types and how they differ</span></div>

<h3>Fixed roofs</h3>
<p>A conventional fixed roof — flat, low-slope, or coned — is structurally simple, well understood, and suits the majority of potable and fire water tank applications. Its main design considerations are snow, wind and internal pressure loading, and providing adequate access, venting and hatch provision for inspection and maintenance.</p>

<h3>Floating roofs</h3>
<p>A floating roof rests directly on the stored liquid surface and rises and falls with the water level, primarily used to minimise vapour space and evaporation losses — a consideration more common in fuel and chemical storage than typical water storage, but occasionally relevant for large open reservoirs where evaporation and surface contamination are significant concerns.</p>

<h3>Geodesic dome roofs</h3>
<p>A geodesic dome — a lightweight, triangulated structural lattice — is a common retrofit and new-build option for open or ageing reservoirs, converting an open or poorly covered water body into an enclosed, contamination-resistant structure without the weight and cost of a full conventional roof span. It is particularly well suited to large-diameter reservoirs where a conventional fixed roof would require heavy internal support structure.</p>

<figure>
  <img src="${BASE}/sector-hero.jpg" alt="Water storage tank with a geodesic dome roof structure"/>
  <figcaption><strong>Different geometry, different structural answer.</strong> A geodesic dome spans large diameters without the internal support columns a conventional fixed roof would require.</figcaption>
</figure>

<div class="article-divider"><span>Contamination control is a roof decision, not just a hatch decision</span></div>

<p>An open or poorly sealed reservoir is exposed to windblown debris, bird and animal contamination, and algae growth from sunlight penetration — risks a properly designed and sealed roof, of any type, is specifically intended to eliminate. Converting an open reservoir to a covered one (commonly via a geodesic dome retrofit) is one of the more impactful water-quality improvements available for an older open storage asset, independent of any other maintenance work.</p>

<figure>
  <img src="${BASE}/water-food-hero.jpg" alt="Enclosed water storage tank roof protecting stored potable water from contamination"/>
  <figcaption><strong>Enclosure is protection, not just weatherproofing.</strong> A properly sealed roof of any type removes the sunlight, debris and wildlife access that drive contamination in open reservoirs.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>The right roof type is not about which one looks most modern — it is about matching the structural span, the maintenance access requirement, and the contamination risk profile to the specific tank. An open reservoir converted to a properly enclosed one is often a bigger water-quality win than any amount of internal cleaning.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The roof types most commonly specified on water storage tanks, each suited to a different combination of span, exposure and maintenance need — fixed, floating, and geodesic dome</span>
</div>

<div class="article-divider"><span>Choosing a roof type</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Situation</th>
      <th>Likely fit</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Standard-diameter potable or fire tank</td><td>Fixed roof — well understood, structurally straightforward</td></tr>
    <tr><td>Large-diameter reservoir, avoiding internal support columns</td><td>Geodesic dome — spans large areas without heavy internal structure</td></tr>
    <tr><td>Existing open reservoir needing contamination control</td><td>Geodesic dome retrofit — enclosing without full reconstruction</td></tr>
    <tr><td>Large open reservoir with significant evaporation concerns</td><td>Floating roof — reduces vapour space and evaporation loss</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Can an existing open reservoir be retrofitted with a roof without rebuilding the tank?</p>
  <p class="faq-a">Yes — a geodesic dome retrofit is a common approach specifically because it can enclose a large existing reservoir without requiring internal support structure or a full tank rebuild, making it one of the more practical ways to improve contamination control on an older open asset.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do floating roofs suit typical potable water storage?</p>
  <p class="faq-a">They are less common in typical potable applications and more associated with fuel and chemical storage where evaporation control is the primary driver. For most potable water tanks, a fixed roof or geodesic dome is the more usual specification.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does roof type affect how a tank is inspected and maintained?</p>
  <p class="faq-a">Yes — access provision, hatch placement and internal support structure all vary by roof type, which affects how straightforward routine inspection and maintenance are over the tank's service life. This should be considered at design stage, not left as an afterthought once the roof type is chosen for other reasons.</p>
</div>

<div class="article-cta">
  <p>Specifying a new tank roof, or considering enclosing an existing open reservoir? The right roof type depends on span, exposure and maintenance access, not just cost.</p>
  <a href="/contact" class="cta-btn">Discuss your roof design options</a>
</div>`,
  },
  {
    slug: 'vapour-corrosion-inhibitors-and-internal-atmosphere-control-in-partially-full-tanks',
    title: 'Vapour Corrosion Inhibitors and Internal Atmosphere Control in Partially Full Tanks',
    excerpt:
      'The corrosion above the waterline is often worse than below it. Here is why the vapour space in a partially full tank is a distinct corrosion risk, and how it is managed.',
    coverImage: 'corrosion-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-16T09:00:00.000Z',
    seoTitle: 'Vapour Space Corrosion in Water Tanks Explained | PC Water',
    seoDescription:
      'The area above the waterline in a partially full tank corrodes differently to the submerged steel below it. A practical explanation of vapour space corrosion and how it is controlled.',
    tags: [
      ['tag-corrosion-vapour', 'Corrosion', 'corrosion'],
      ['tag-tank-maintenance-vapour', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-tank-inspection-vapour', 'Tank Inspection', 'tank-inspection'],
    ],
    content: `<p class="article-lead">
  It is a counterintuitive finding on many tank inspections: the steel above the waterline, which never actually touches the stored water, is often more heavily corroded than the submerged steel below it. The vapour space is a distinct corrosion environment, and it needs to be managed as one.
</p>

<div class="article-divider"><span>Why the vapour space corrodes differently</span></div>

<h3>Condensation cycles concentrate corrosive conditions</h3>
<p>As a tank's water level rises and falls, and as ambient temperature fluctuates day to night, moisture condenses and evaporates repeatedly on the steel surface above the waterline. This wet-dry cycling, combined with oxygen readily available in the vapour space (unlike the more oxygen-limited submerged zone in some conditions), creates a corrosion environment that can be more aggressive than constant submersion.</p>

<h3>Coating performance differs above and below the waterline</h3>
<p>A coating system performing well under constant submersion can behave differently under the vapour space's cyclic wetting and drying, and under any residual disinfection gas exposure in a treated potable tank. Coating specification that does not account for this difference can leave the vapour zone under-protected relative to the submerged zone, even where the same product is applied throughout.</p>

<figure>
  <img src="${BASE}/corrosion-hero.jpg" alt="Corrosion visible in the vapour space above the waterline inside a steel water tank"/>
  <figcaption><strong>Above the waterline, not below it.</strong> Vapour space corrosion is frequently more advanced than corrosion on the submerged steel of the same tank.</figcaption>
</figure>

<div class="article-divider"><span>How vapour space corrosion is managed</span></div>

<h3>Vapour corrosion inhibitors (VCIs)</h3>
<p>Vapour-phase corrosion inhibitors release a protective vapour that forms a molecular-level protective layer on exposed metal surfaces, including areas a liquid-phase treatment cannot easily reach — a targeted way to protect the vapour space specifically, sometimes used alongside a conventional coating system rather than as a replacement for one.</p>

<h3>Roof and ventilation design</h3>
<p>Controlling how much moisture-laden air exchanges through the vapour space via vent design, and minimising unnecessary temperature cycling where practical, both reduce the frequency and severity of the condensation cycling that drives vapour space corrosion in the first place.</p>

<blockquote class="article-quotable">
  <p>A tank inspection that only checks the waterline down is checking the easier half of the problem. The vapour space above it experiences a genuinely different, and often more aggressive, corrosion environment — and it deserves its own line of attention in both inspection and specification.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The corrosion environments inside a partially full tank that need separate consideration — the constantly submerged zone, and the cyclically wet vapour space above it</span>
</div>

<div class="article-divider"><span>What to check for vapour space condition</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Coating condition specifically above the waterline</td><td>Vapour space coating performance can differ from the submerged zone</td></tr>
    <tr><td>Corrosion pattern on roof structure and upper walls</td><td>Often the first area to show wet-dry cycling corrosion damage</td></tr>
    <tr><td>Ventilation and vent condition</td><td>Affects moisture exchange rate driving the condensation cycle</td></tr>
    <tr><td>Whether a vapour corrosion inhibitor is in use or warranted</td><td>A targeted option for protecting the vapour space specifically</td></tr>
    <tr><td>Operating level pattern (fixed vs frequently varying)</td><td>Frequent level cycling increases the wet-dry area subject to corrosion</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Why is corrosion above the waterline sometimes worse than below it?</p>
  <p class="faq-a">The vapour space experiences repeated wet-dry condensation cycling and generally greater oxygen availability than the constantly submerged zone, both of which can accelerate corrosion compared to steady, constant submersion. It is a genuinely different corrosion environment, not a lesser one.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do vapour corrosion inhibitors replace the need for a coating system?</p>
  <p class="faq-a">Not typically — they are more commonly used as a targeted, complementary protection for the vapour space, sometimes alongside a conventional coating system, rather than as a wholesale replacement for coating the tank's internal surfaces.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Should a tank inspection specifically assess the vapour space separately from the submerged zone?</p>
  <p class="faq-a">Yes — because the two zones can be in meaningfully different condition, a thorough inspection should assess and report on them separately rather than giving a single overall corrosion rating that could mask a vapour-space-specific problem.</p>
</div>

<div class="article-cta">
  <p>Concerned about corrosion above the waterline in your tank, or specifying protection for a new one? Vapour space condition deserves its own assessment.</p>
  <a href="/contact" class="cta-btn">Request a vapour space condition check</a>
</div>`,
  },
  {
    slug: 'building-a-water-asset-register-what-councils-and-facility-managers-should-track',
    title: 'Building a Water Asset Register: What Councils and Facility Managers Should Track',
    excerpt:
      'A water asset register that only lists what tanks exist is a directory, not a management tool. Here is what a genuinely useful register actually tracks.',
    coverImage: 'ticking-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-16T15:00:00.000Z',
    seoTitle: 'Water Asset Register: What to Track | PC Water',
    seoDescription:
      'A useful water asset register tracks condition history, maintenance records and risk data, not just a list of tanks. A practical guide for councils and facility managers.',
    tags: [
      ['tag-asset-management-register', 'Asset Management', 'asset-management'],
      ['tag-government-register', 'Government', 'government'],
      ['tag-tank-inspection-register', 'Tank Inspection', 'tank-inspection'],
    ],
    content: `<p class="article-lead">
  Many organisations have a spreadsheet listing their water tanks — location, capacity, installation date. Fewer have an asset register that actually supports a decision about which tank needs attention next. The difference is what data is tracked beyond the basic inventory.
</p>

<div class="article-divider"><span>Beyond the inventory: what a working register tracks</span></div>

<h3>Condition history, not just current status</h3>
<p>A single current condition rating tells you where an asset stands today. A tracked condition history — ratings from successive inspections over time — tells you the rate of deterioration, which is what actually predicts when an asset will need intervention, not just whether it currently needs one.</p>

<h3>Maintenance and intervention records linked to the asset</h3>
<p>Every clean, coating renewal, repair or liner installation should be logged against the specific asset, building a maintenance history that informs future decisions — recoating intervals, expected remaining liner life, whether a recurring issue is actually being resolved or just repeatedly patched.</p>

<h3>Risk and consequence classification</h3>
<p>Tracking each asset's consequence of failure (sole supply versus redundant, potable versus non-potable, population served) alongside its condition allows genuine risk-based prioritisation across a portfolio, rather than treating every asset as equally important by default.</p>

<figure>
  <img src="${BASE}/ticking-hero.jpg" alt="Water tank being assessed as part of an asset register condition tracking program"/>
  <figcaption><strong>The register is only as useful as its history.</strong> A single snapshot of current condition cannot predict deterioration rate the way a tracked history can.</figcaption>
</figure>

<div class="article-divider"><span>Making the register a decision-support tool, not just a record</span></div>

<p>A register that is updated only when something changes drastically will always lag reality. A register that is updated systematically at every inspection and maintenance event — with condition, findings and actions consistently logged — becomes a genuine decision-support tool: it can flag which assets are deteriorating faster than expected, which are overdue for a scheduled intervention, and where budget should be prioritised across a portfolio.</p>

<figure>
  <img src="${BASE}/sector-inspection.jpg" alt="Inspector recording condition data during a water tank inspection for an asset register"/>
  <figcaption><strong>Every inspection is a data point, not just a report.</strong> Consistently logged inspection data compounds into a genuinely predictive asset register over time.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>An asset register that only tells you what you own is an inventory. An asset register that tells you what needs attention next, and why, is a management tool — and the difference between the two is entirely in what data gets tracked and how consistently.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The data layers that turn a basic tank inventory into a genuine decision-support register — condition history, linked maintenance records, and risk classification</span>
</div>

<div class="article-divider"><span>What to include in a water asset register</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Data field</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Asset identification, location and specification</td><td>The basic inventory layer every register starts with</td></tr>
    <tr><td>Condition rating history across successive inspections</td><td>Reveals deterioration rate, not just current status</td></tr>
    <tr><td>Maintenance and intervention records, linked to the asset</td><td>Informs future decisions on recoating cycles and remaining life</td></tr>
    <tr><td>Consequence-of-failure classification</td><td>Supports risk-based prioritisation across a portfolio</td></tr>
    <tr><td>Warranty and compliance documentation references</td><td>Keeps critical records accessible when they are actually needed</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">What is the minimum useful data for a water asset register?</p>
  <p class="faq-a">Beyond basic inventory details, a condition rating history and linked maintenance records are the two additions that turn a static list into a tool that can actually support prioritisation decisions. Risk classification is the next most valuable addition once those two are in place.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often should a water asset register be updated?</p>
  <p class="faq-a">At every inspection and maintenance event, not on a fixed separate schedule. Updating the register as part of the standard workflow for each inspection or intervention is what keeps the data current and reliable over time.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can an existing basic asset list be upgraded into a fuller register without starting over?</p>
  <p class="faq-a">Yes — historical inspection and maintenance records can often be retrospectively added to an existing inventory, and going forward, a consistent data structure can be adopted for every future inspection. The register improves incrementally as more structured data is added.</p>
</div>

<div class="article-cta">
  <p>Looking to build or improve a water asset register for your portfolio? A structured approach to condition and maintenance data makes it a genuine decision-support tool.</p>
  <a href="/contact" class="cta-btn">Discuss your asset register</a>
</div>`,
  },
]

// ── IMAGE UPLOAD LIST (unique images referenced) ────────────────────────────────
const imageFiles = [
  'sector-hero.jpg',
  'sector-inspection.jpg',
  'corrosion-coating-comparison.jpg',
  'corrosion-hero.jpg',
  'harsh-env-hero.jpg',
  'corrosion-rov-inspection.jpg',
  'sediment-tank-hero.jpg',
  'water-food-hero.jpg',
  'harsh-env-drone.jpg',
  'water-food-hatch.jpg',
  'rpvc-inline.jpg',
  'ticking-hero.jpg',
]

// ── STATIC MODE: print TS entries for lib/cms/static-content.ts ─────────────────
function toStatic() {
  const staticId = (t) => 'post-' + t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
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

// ── INSERT MODE: upload images + upsert posts to Supabase ────────────────────────
async function insert() {
  const { createClient } = require('@supabase/supabase-js')
  const fs = require('fs')
  const path = require('path')
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.SUPABASE_SECRET_KEY || '')
  const POSTS_DIR = path.join(process.cwd(), 'public', 'posts')

  console.log('\n📸 Uploading images...')
  for (const name of imageFiles) {
    const localPath = path.join(POSTS_DIR, name)
    if (!fs.existsSync(localPath)) {
      console.warn(`  ⚠ missing ${name}`)
      continue
    }
    const buf = fs.readFileSync(localPath)
    const ct = name.endsWith('.png') ? 'image/png' : 'image/jpeg'
    const { error } = await sb.storage.from('cms-media').upload(`posts/${name}`, buf, { contentType: ct, upsert: true })
    console.log(error ? `  ✗ ${name}: ${error.message}` : `  ✓ ${name}`)
  }

  console.log('\n📝 Upserting posts...')
  for (const p of posts) {
    const { error } = await sb.from('cms_posts').upsert(
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
    )
    console.log(error ? `  ✗ ${p.slug}: ${error.message}` : `  ✓ ${p.slug}`)
  }
  console.log('\n✅ Done!')
}

if (process.argv[2] === 'static') {
  toStatic()
} else {
  insert().catch((e) => {
    console.error(e)
    process.exit(1)
  })
}
