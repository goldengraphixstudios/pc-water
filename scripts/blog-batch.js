/**
 * blog-batch.js — authors + integrates 5 new blog posts.
 *
 * Single source of truth for the batch. Two modes:
 *   node scripts/blog-batch.js static   -> prints TS entries for
 *                                           lib/cms/static-content.ts (SSG fallback)
 *   node scripts/blog-batch.js          -> uploads images + upserts posts to Supabase
 *
 * Images are reused from public/posts (already in the repo).
 */

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

// ── POSTS ─────────────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'how-to-read-a-tank-coating-failure',
    title: 'How to Read a Tank Coating Failure: Blistering, Delamination and Undercutting',
    excerpt:
      'Coating failure on a steel tank is not one thing — it is a diagnosis. Learn to read blistering, delamination, undercutting and holidays, and what each one tells you about the asset underneath.',
    coverImage: 'corrosion-coating-comparison.jpg',
    readTime: '6 min read',
    publishedAt: '2026-07-21T09:00:00.000Z',
    seoTitle: 'How to Read a Tank Coating Failure | PC Water',
    seoDescription:
      'Blistering, delamination, undercutting, holidays and chalking each mean something different on a steel water tank. A practical guide to reading coating failure and what it signals.',
    tags: [
      ['tag-tank-maintenance-coat', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-corrosion-coat', 'Corrosion', 'corrosion'],
      ['tag-compliance-coat', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  A failing coating is not a single problem with a single cause. The way a coating fails — where it lifts, how it blisters, whether it undercuts from an edge — is diagnostic. Read it correctly and you can tell whether you are looking at a surface issue, a preparation failure, or a structural warning.
</p>

<p>Protective coatings are the first line of defence for steel water storage. When they fail, the substrate corrodes, water quality is put at risk, and the clock starts on more expensive intervention. But two tanks with "coating failure" can need completely different responses. This is how to tell them apart.</p>

<div class="article-divider"><span>The failure modes you will actually see</span></div>

<h3>Blistering</h3>
<p>Raised bubbles under the coating film, ranging from pinhead to coin-sized. Blistering is usually osmotic — moisture or soluble salts trapped beneath the film draw water through the coating and lift it. It points to contamination on the steel at the time of application, or a coating applied over an inadequately cleaned surface. Blisters that break become active corrosion sites.</p>

<h3>Delamination and disbondment</h3>
<p>Whole sheets of coating losing adhesion and peeling away from the substrate. Where blistering is localised, disbondment is systemic — it usually indicates a preparation failure across an area: poor surface profile, contamination, or an incompatible coating over an old system. Disbonded coating is no longer protecting anything, even where it still looks intact.</p>

<h3>Undercutting and filiform corrosion</h3>
<p>Corrosion that creeps sideways underneath the coating from a scratch, edge, or holiday — often as fine thread-like lines. Undercutting is the reason a small mechanical nick becomes a large delaminated patch: once the substrate corrodes under the film, the corrosion product wedges the coating off from below.</p>

<h3>Holidays and pinholes</h3>
<p>Tiny gaps in the film — missed spots, pinholes, or thin areas — that expose bare steel. Individually trivial, collectively they are where corrosion initiates. Holiday detection is a standard part of any competent coating inspection precisely because the naked eye misses them.</p>

<h3>Chalking</h3>
<p>A powdery surface and loss of gloss as the binder degrades, typically from UV on external surfaces. Chalking alone is often cosmetic, but it signals the coating is nearing the end of its protective life and thinning toward the substrate.</p>

<figure>
  <img src="${BASE}/corrosion-coating-comparison.jpg" alt="Comparison of intact protective coating against a failed, corroded coating on a steel water tank surface"/>
  <figcaption><strong>Two surfaces, two futures.</strong> An intact coating system versus a failed one on the same class of asset — the difference between a maintenance interval and an intervention.</figcaption>
</figure>

<div class="article-divider"><span>Why edges, welds and bolt lines fail first</span></div>

<p>Coating film is always thinnest where the geometry is sharpest — cut edges, weld seams, bolt heads, and corners. Surface tension pulls wet coating away from an edge as it cures, leaving it under-protected exactly where mechanical and corrosive stress is highest. When you inspect a tank, the edges and seams tell you how the coating will age long before the flat panels do.</p>

<blockquote class="article-quotable">
  <p>The single biggest determinant of coating life is not the coating — it is the surface preparation beneath it. A premium product applied over contaminated or poorly profiled steel will fail years ahead of a modest product applied correctly.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">80%+</span>
  <span class="stat-label">The share of premature coating failures the protective-coatings industry attributes to surface preparation and application, not product selection</span>
</div>

<div class="article-divider"><span>When a coating failure means it is time to reline</span></div>

<p>Not every coating failure is a recoat. Where disbondment is widespread, where undercutting has already pitted the substrate, or where the tank cannot practically be dried and prepared for a fresh coating in service, an <strong>RPVC liner system</strong> is often the more durable answer — a new, watertight internal membrane that restores compliance without depending on the condition of the original coated surface.</p>

<figure>
  <img src="${BASE}/corrosion-rpvc-liner.jpg" alt="RPVC liner system installed inside a steel water tank to restore a watertight, compliant internal surface"/>
  <figcaption><strong>Past the point of recoating.</strong> Where the original coating has disbonded and the substrate is pitting, an RPVC liner restores a compliant internal surface independent of the failed coating.</figcaption>
</figure>

<div class="article-divider"><span>What an assessor records</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Observation</th>
      <th>What it usually means</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Localised blistering</td><td>Contamination or salts under the film — monitor and spot-repair before blisters break</td></tr>
    <tr><td>Widespread disbondment</td><td>Preparation failure across an area — the coating is no longer protecting; plan remediation</td></tr>
    <tr><td>Undercutting from edges / scratches</td><td>Substrate corroding beneath the film — small defects are becoming large ones</td></tr>
    <tr><td>Holidays / pinholes</td><td>Bare-steel initiation points — detect and seal before they spread</td></tr>
    <tr><td>Chalking with film thinning</td><td>Coating nearing end of protective life — schedule recoat or reline</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is coating blistering always a problem?</p>
  <p class="faq-a">Intact, unbroken blisters are a warning rather than an emergency — they indicate contamination or moisture under the film. Once a blister breaks, it exposes bare steel and becomes an active corrosion site. Localised blistering can often be spot-repaired; widespread blistering usually points to an application or preparation problem across the surface.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can you just recoat over a failing coating?</p>
  <p class="faq-a">Only where the existing coating is sound and compatible. Coating over disbonded, contaminated, or incompatible film simply traps the problem underneath — the new coat fails with the old one. Where the substrate is pitting or the old system has broadly disbonded, relining is generally more durable than recoating.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Why do coatings fail at welds and edges first?</p>
  <p class="faq-a">Wet coating pulls away from sharp geometry as it cures, so the film is always thinnest at cut edges, welds, bolt heads and corners — exactly where corrosive and mechanical stress is highest. Competent application uses stripe coating on these details for that reason.</p>
</div>

<div class="article-cta">
  <p>Not sure whether your tank needs a recoat, a targeted repair, or a reline? A condition assessment reads the coating failure for what it is — and gives you a defensible next step.</p>
  <a href="/contact" class="cta-btn">Request a condition assessment</a>
</div>`,
  },

  {
    slug: 'fire-water-tank-as1851-service-levels-explained',
    title: 'Fire Water Tank Compliance: The AS1851 Service Levels, Explained',
    excerpt:
      'AS1851 sets the routine service regime for fire protection water storage. Here is what the routine service intervals actually require — and the records building owners must keep to stay compliant.',
    coverImage: 'fire-tank-inspection.jpg',
    readTime: '6 min read',
    publishedAt: '2026-07-22T09:00:00.000Z',
    seoTitle: 'Fire Water Tank AS1851 Service Levels Explained | PC Water',
    seoDescription:
      'What AS1851 routine servicing requires for fire water storage tanks — the service intervals, what gets checked, and the maintenance records building owners must keep.',
    tags: [
      ['tag-fire-compliance-as1851', 'Fire Compliance', 'fire-compliance'],
      ['tag-compliance-as1851', 'Compliance', 'compliance'],
      ['tag-tank-maintenance-as1851', 'Tank Maintenance', 'tank-maintenance'],
    ],
    content: `<p class="article-lead">
  A fire water tank only has to work once — on the worst day. AS1851 exists to make sure it will. But the standard is a service regime, not a one-off certificate, and the gap most building owners fall into is not the inspection itself — it is the records.
</p>

<p><strong>AS1851</strong> — Routine service of fire protection systems and equipment — governs the ongoing maintenance of fire protection assets in Australia, including the water storage that feeds fire pumps, hydrants and sprinkler systems. It defines what must be checked, how often, and what has to be recorded. Here is how the routine service regime applies to fire water storage.</p>

<div class="article-divider"><span>A regime, not a single inspection</span></div>

<p>AS1851 structures servicing as recurring routines at set intervals. In practice, for fire water storage that means a layered schedule — frequent, lightweight checks backed by less frequent, more thorough ones:</p>

<h3>Frequent routine checks (monthly / six-monthly)</h3>
<p>Quick verifications that the asset is in its ready state: water level and supply, valve positions, the condition of visible fittings, and that nothing has physically compromised the tank or its connections since the last check. These are about catching the obvious — an isolated valve, a dropped level, visible damage — before it matters.</p>

<h3>Annual routine service</h3>
<p>A more comprehensive service: a closer examination of the tank, fittings, level indication and supply arrangements, with the results formally recorded. This is the interval most owners associate with "the fire inspection".</p>

<h3>Comprehensive service (typically five-yearly)</h3>
<p>The deep service — internal condition assessment, coating and corrosion evaluation, sediment and fitting checks — the level of scrutiny that actually tells you whether the stored water asset will still be sound over the next cycle. This is where problems that were invisible from the outside get found.</p>

<figure>
  <img src="${BASE}/fire-tank-inspection.jpg" alt="Inspection of a fire water storage tank as part of an AS1851 routine service"/>
  <figcaption><strong>Ready-state, verified.</strong> AS1851 routine servicing confirms a fire water tank is in its ready state — and records that it is, which is the part that holds up under scrutiny.</figcaption>
</figure>

<div class="article-divider"><span>The part owners miss: the baseline and the records</span></div>

<p>AS1851 servicing is measured against a <strong>baseline data record</strong> — the documented "correct" state of the system. Without a baseline, a service technician has nothing to measure against, and "compliant" becomes an opinion. Establishing and maintaining that baseline, then keeping the routine service records that show the regime has been followed, is where compliance is actually won or lost.</p>

<blockquote class="article-quotable">
  <p>When an insurer, certifier or regulator asks for proof, they are not asking whether the tank looks fine today. They are asking for the record that shows it has been serviced to schedule — and that is the document most often missing.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">5 yr</span>
  <span class="stat-label">The typical outer interval for comprehensive fire-water-tank servicing under AS1851 — the check that finds internal problems the routine checks cannot</span>
</div>

<div class="article-divider"><span>Why a tank that is never used is the higher risk</span></div>

<p>Fire water storage is, by design, rarely drawn down. That is exactly why it deteriorates quietly — stagnant water, sediment accumulation, internal corrosion and coating decline all progress without anyone noticing, because nothing about day-to-day operation reveals them. A fire tank that has sat full and untouched for years is not "low maintenance"; it is an unverified asset.</p>

<figure>
  <img src="${BASE}/fire-tank-corroded.jpg" alt="Internal corrosion found inside a fire water storage tank during a comprehensive AS1851 service"/>
  <figcaption><strong>Found only on the inside.</strong> Internal corrosion in a fire tank that passed every external check — the reason the comprehensive service interval exists.</figcaption>
</figure>

<div class="article-divider"><span>The compliance checklist for owners</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>A documented baseline data record</td><td>Everything is serviced against it — without it, "compliant" cannot be demonstrated</td></tr>
    <tr><td>Routine service records kept to schedule</td><td>The evidence insurers, certifiers and regulators actually request</td></tr>
    <tr><td>Comprehensive (internal) service at interval</td><td>Finds internal corrosion, sediment and coating failure the routine checks miss</td></tr>
    <tr><td>Defects logged and rectified</td><td>An unactioned defect on record is worse than no record at all</td></tr>
    <tr><td>Competent, records-issuing service provider</td><td>The service is only worth the documentation it produces</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">How often does a fire water tank need to be serviced under AS1851?</p>
  <p class="faq-a">AS1851 uses a layered schedule of routine services — frequent lightweight checks (monthly and six-monthly), an annual routine service, and a comprehensive service at a longer interval (commonly five-yearly) that includes internal condition assessment. Your specific schedule depends on the system and any applicable jurisdictional requirements, so confirm the exact intervals for your asset.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do fire water tanks really need internal inspection if they look fine outside?</p>
  <p class="faq-a">Yes. Fire tanks are rarely drawn down, so internal corrosion, sediment and coating deterioration progress unseen. External checks confirm the ready state; the comprehensive internal service is what verifies the stored asset will still perform. A tank can pass every external check and be failing on the inside.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What records do I need to prove fire tank compliance?</p>
  <p class="faq-a">A baseline data record defining the system's correct state, plus the routine service records showing the AS1851 schedule has been followed and any defects logged and rectified. When compliance is questioned, it is these documents — not the condition of the tank on the day — that demonstrate it.</p>
</div>

<div class="article-cta">
  <p>Not certain your fire water storage is being serviced and recorded to AS1851? We inspect, service and document fire tanks so your compliance holds up when it is questioned.</p>
  <a href="/contact" class="cta-btn">Request a fire tank compliance review</a>
</div>`,
  },

  {
    slug: 'reline-or-replace-ageing-steel-tank-lifecycle-cost',
    title: 'Reline or Replace? The Real Lifecycle Cost of an Ageing Steel Tank',
    excerpt:
      'When a steel tank starts failing, the instinct is to replace it. Often, RPVC relining restores compliance and adds decades of life for a fraction of the cost. Here is how to weigh reline versus replace.',
    coverImage: 'rpvc-inline.jpg',
    readTime: '6 min read',
    publishedAt: '2026-07-23T09:00:00.000Z',
    seoTitle: 'Reline or Replace an Ageing Steel Water Tank? | PC Water',
    seoDescription:
      'RPVC relining can restore an ageing steel tank to compliance and add 20+ years for a fraction of replacement cost. How to weigh reline versus replace — structure, failure type, and downtime.',
    tags: [
      ['tag-rpvc-reline-decide', 'RPVC Liners', 'rpvc-liners'],
      ['tag-tank-maintenance-reline-decide', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-refurbish-reline-decide', 'Refurbish', 'refurbish'],
    ],
    content: `<p class="article-lead">
  When a steel tank fails an inspection, the first quote many asset owners reach for is a replacement. It is the intuitive answer — the old one is worn out, put in a new one. But for a large share of ageing tanks, replacement is the most expensive way to solve a problem that relining would solve for a fraction of the cost.
</p>

<p>The reline-or-replace decision is not about the age of the tank. It is about three specific questions, and the answers determine which path actually delivers the longer, cheaper asset life.</p>

<div class="article-divider"><span>The three questions that decide it</span></div>

<h3>1. Is the shell structurally sound?</h3>
<p>This is the pivotal question. If the tank's structure — the shell, the floor, the supports — remains fundamentally intact, the asset is a candidate for relining. If the structure itself is compromised (major section loss, failed supports, deformation), no liner will fix that, and replacement moves up the list. A structural assessment answers this before any pathway is chosen.</p>

<h3>2. Is the failure at the surface or in the structure?</h3>
<p>Corroded internal surfaces, a deteriorated coating, a failed original liner — these are surface problems on a sound structure, and surface problems are exactly what relining addresses. A new watertight <strong>RPVC membrane</strong> restores a compliant internal surface independent of the condition of the corroded steel behind it.</p>

<h3>3. What is your tolerance for downtime and disruption?</h3>
<p>Replacement means removing an asset, potentially re-doing civil and foundation work, and a longer out-of-service window. Relining takes the tank offline, prepares the interior, and installs a new membrane — typically a shorter, less disruptive intervention. On a critical or hard-to-replace asset, that difference matters as much as the dollars.</p>

<figure>
  <img src="${BASE}/rpvc-inline.jpg" alt="RPVC liner being installed inside an ageing steel water tank to restore compliance"/>
  <figcaption><strong>A new surface on a sound shell.</strong> Relining restores a compliant, watertight interior where the structure remains intact — without the cost and disruption of full replacement.</figcaption>
</figure>

<div class="article-divider"><span>The lifecycle maths</span></div>

<p>Where the structure is sound, relining commonly extends usable asset life by <strong>20 or more years</strong> at a cost that is a fraction of full replacement. That is the crux of the economic case: you are not buying a slightly cheaper tank — you are avoiding the entire capital, civil, and downtime cost of replacing a structure that did not need replacing.</p>

<blockquote class="article-quotable">
  <p>Replacing a structurally sound tank because its internal surface has failed is like demolishing a sound building because it needs repainting. The structure is the expensive part — and it is the part relining lets you keep.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">20+ yrs</span>
  <span class="stat-label">Typical asset-life extension from RPVC relining a structurally sound tank — for a fraction of replacement cost</span>
</div>

<div class="article-divider"><span>When replacement is the right call</span></div>

<p>Relining is not always the answer, and a good assessor will tell you when it is not. Replacement is genuinely warranted where the structure has significant section loss or has failed, where the tank is undersized for current demand, where capacity needs to change, or where the geometry cannot accommodate a durable liner. The goal is not to reline everything — it is to match the intervention to the asset.</p>

<figure>
  <img src="${BASE}/corrosion-rpvc-liner.jpg" alt="Corroded steel tank interior alongside a newly installed RPVC liner surface"/>
  <figcaption><strong>Assessment first, pathway second.</strong> The corroded surface on the left and the restored liner on the right are the same tank — the decision hinged on the shell being sound.</figcaption>
</figure>

<div class="article-divider"><span>Reline vs replace, at a glance</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Situation</th>
      <th>Likely pathway</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sound shell, corroded surface or failed liner</td><td>Reline — restore the surface, keep the structure</td></tr>
    <tr><td>Deteriorated coating on an intact structure</td><td>Reline or recoat, depending on coating condition</td></tr>
    <tr><td>Significant structural section loss or failed supports</td><td>Replace — no liner fixes a failed structure</td></tr>
    <tr><td>Capacity no longer meets demand</td><td>Replace or augment — sizing is a structural decision</td></tr>
    <tr><td>Uncertain condition</td><td>Assess first — the pathway follows the findings</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is relining always cheaper than replacing a tank?</p>
  <p class="faq-a">When the structure is sound, relining is typically a fraction of the cost of replacement and far less disruptive, because it keeps the expensive structural asset and only restores the internal surface. Where the structure itself has failed, relining is not appropriate — and that is the case where replacement is justified.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How long does an RPVC liner last?</p>
  <p class="faq-a">On a sound, well-prepared structure an RPVC liner system commonly extends usable asset life by 20 or more years, restoring compliance for potable, process or fire storage. Actual life depends on the water chemistry, operating conditions and installation quality.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do I know whether my tank can be relined?</p>
  <p class="faq-a">It comes down to whether the structure is sound and whether the failure is at the surface rather than structural. A structural and condition assessment answers both — and determines the right pathway before any commitment is made.</p>
</div>

<div class="article-cta">
  <p>Facing a replacement quote on an ageing tank? An assessment can tell you whether relining would restore it for a fraction of the cost — before you spend the capital.</p>
  <a href="/contact" class="cta-btn">Get a reline-or-replace assessment</a>
</div>`,
  },

  {
    slug: 'what-a-professional-tank-inspection-actually-covers',
    title: "What a Professional Tank Inspection Actually Covers (And Why a Visual Check Isn't Enough)",
    excerpt:
      'A walk-around is not an inspection. Here is the full scope a trained assessor covers — structure, coatings, cathodic protection, ventilation, pipe configuration — and the ROV and drone methods that make it possible without dewatering.',
    coverImage: 'sector-inspection.jpg',
    readTime: '7 min read',
    publishedAt: '2026-07-24T09:00:00.000Z',
    seoTitle: 'What a Professional Tank Inspection Actually Covers | PC Water',
    seoDescription:
      'The full scope of a professional water tank inspection — structure, coatings, cathodic protection, ventilation, pipe configuration and sediment — and the ROV/UAV methods that assess without dewatering.',
    tags: [
      ['tag-tank-inspection-scope', 'Tank Inspection', 'tank-inspection'],
      ['tag-asset-management-scope', 'Asset Management', 'asset-management'],
      ['tag-compliance-scope', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  "We had it inspected" can mean two very different things. It can mean a trained assessor evaluated the structure, the coatings, the fittings and the water quality risk — or it can mean someone opened the hatch, looked in, and signed a form. Only one of those tells you the condition of your asset.
</p>

<p>A professional tank inspection is a defined scope, not a look. Here is what that scope actually covers — and why each part exists.</p>

<div class="article-divider"><span>It starts before anyone opens the hatch</span></div>

<p>A competent assessor reads the exterior and site first. A compromised perimeter, a damaged or unsecured hatch, bird activity around the roof or overflow, downpipes discharging onto the roof rather than to drainage — these are contamination and security findings that never require going inside the tank, and they are missed by anyone who skips straight to the interior.</p>

<div class="article-divider"><span>The internal scope</span></div>

<h3>Structure</h3>
<p>The shell, floor, roof and supports — checked for corrosion, section loss, spalling (in concrete), cracking at load-bearing points, and the condition of roof support posts, which can corrode through at the waterline while appearing intact from above. Structural findings determine whether the asset is sound and which remediation pathways are even possible.</p>

<h3>Coatings and linings</h3>
<p>Internal coatings and liners assessed for blistering, disbondment, undercutting and holidays — the failure modes that decide whether the surface is still protecting the steel, or whether recoating or relining is due.</p>

<h3>Cathodic protection</h3>
<p>Where fitted, the CP system is evaluated — sacrificial anode depletion, continuity, and whether the substrate is actually being protected at coating defects. A depleted or disconnected CP system is a silent failure that accelerates corrosion everywhere the coating is imperfect.</p>

<h3>Ventilation and screens</h3>
<p>Vent mesh, screens and roof penetrations checked for integrity — the difference between a sealed potable environment and an open invitation to birds, vermin and airborne contamination.</p>

<h3>Pipe configuration</h3>
<p>Inlet and outlet arrangement assessed for short-circuiting (water entering and leaving without mixing, leaving stagnation zones), outlets drawing sediment, and overflow terminations that let contamination back in. These are design issues invisible without internal access.</p>

<h3>Sediment</h3>
<p>Depth and character of floor sediment — not just how much, but what it is, because sediment distribution is diagnostic of how the tank is actually operating.</p>

<figure>
  <img src="${BASE}/sector-inspection.jpg" alt="Trained assessor conducting a professional condition inspection of a water storage tank"/>
  <figcaption><strong>Scope, not a glance.</strong> A professional inspection evaluates structure, coatings, cathodic protection, ventilation, pipe configuration and sediment against a defined checklist — and records the evidence.</figcaption>
</figure>

<div class="article-divider"><span>Assessing without taking the tank offline</span></div>

<p>The reason many tanks go years without a real inspection is the assumption that it means dewatering and downtime. It does not. <strong>ROV (Remotely Operated Vehicle)</strong> inspection assesses the interior while the tank stays in service and at level, producing a photographic record at multiple floor and wall positions. <strong>UAV (drone)</strong> inspection triages roof and external conditions and hard-to-access areas before committing crew. Together they make a full condition assessment possible without draining a critical asset.</p>

<blockquote class="article-quotable">
  <p>The value of an inspection is not the visit — it is the record. A dated, photographic condition report at defined positions is what lets you plan maintenance, defend compliance, and compare the asset against itself next cycle.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">0</span>
  <span class="stat-label">Dewatering events required for an ROV condition assessment — the asset stays in service while it is inspected</span>
</div>

<div class="article-divider"><span>What a real report contains</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Report element</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Structural condition with photographic evidence</td><td>Establishes whether the asset is sound and what is possible</td></tr>
    <tr><td>Coating / liner condition by failure mode</td><td>Decides recoat, reline or monitor</td></tr>
    <tr><td>Cathodic protection status</td><td>Catches a silent accelerator of corrosion</td></tr>
    <tr><td>Ventilation, screens and pipe configuration</td><td>Surfaces water-quality and contamination risks</td></tr>
    <tr><td>Sediment depth and character</td><td>Reveals how the tank is operating, not just that it needs cleaning</td></tr>
    <tr><td>Prioritised recommendations</td><td>Turns findings into a defensible maintenance plan</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Isn't a visual check enough for a water tank?</p>
  <p class="faq-a">A visual walk-around catches only what is obvious from the outside. It cannot assess internal structure, coating failure modes, cathodic protection, pipe configuration or sediment — the findings that actually determine asset condition and water-quality risk. A professional inspection covers a defined scope and records the evidence.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a tank be inspected without draining it?</p>
  <p class="faq-a">Yes. ROV inspection assesses the interior while the tank remains in service and at level, and produces a photographic record. Drone inspection triages roof and external conditions. Between them, a full condition assessment is possible without dewatering — which is why in-service assets can and should be inspected on a cycle.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often should a water tank be professionally inspected?</p>
  <p class="faq-a">It depends on the asset, its service and its history, but most storage tanks benefit from inspection on a defined cycle rather than only when a problem appears. Fire and potable assets in particular deteriorate quietly, so a scheduled inspection is the cheapest way to avoid discovering a failure at the worst time.</p>
</div>

<div class="article-cta">
  <p>When was your tank last actually assessed — not just glanced at? A professional condition inspection, in service via ROV, gives you a photographic record and a defensible plan.</p>
  <a href="/contact" class="cta-btn">Book a professional tank inspection</a>
</div>`,
  },

  {
    slug: 'tank-roof-and-hatch-overlooked-contamination-entry-point',
    title: 'The Roof and Hatch: The Most Overlooked Contamination Entry Point on Your Tank',
    excerpt:
      'Most potable tank contamination does not come from the source water — it comes through the roof, the hatch and the vent. Here is what to check on top of your tank, and why treated water re-contaminates.',
    coverImage: 'water-food-hatch.jpg',
    readTime: '5 min read',
    publishedAt: '2026-07-25T09:00:00.000Z',
    seoTitle: 'The Roof and Hatch: Overlooked Tank Contamination Entry | PC Water',
    seoDescription:
      'Potable water tank contamination usually enters through the roof, hatch and vent — not the source water. What to check on top of your tank to keep treated water safe.',
    tags: [
      ['tag-water-quality-roof', 'Water Quality', 'water-quality'],
      ['tag-compliance-roof', 'Compliance', 'compliance'],
      ['tag-tank-maintenance-roof', 'Tank Maintenance', 'tank-maintenance'],
    ],
    content: `<p class="article-lead">
  Treated water enters your tank clean. Whether it leaves that way depends less on the treatment plant than on the top of the tank — the hatch, the vent and the roof penetrations that most asset owners never inspect. The source water is rarely the problem. The lid usually is.
</p>

<p>Once water has been treated to standard, the storage tank is the last barrier before the tap. And the most common way that barrier is breached is not through the walls or the floor — it is through the openings on top.</p>

<div class="article-divider"><span>The entry points on top of a tank</span></div>

<h3>The access hatch</h3>
<p>An access hatch that does not seal — a warped lid, a failed gasket, a missing lock — is a direct opening into the potable environment. Rain runoff, insects, vermin and airborne debris all enter through a hatch that no longer closes properly. A compromised hatch combined with a compromised perimeter is a contamination event waiting to happen, not a maintenance nicety.</p>

<h3>The vent and its mesh</h3>
<p>Tanks breathe as levels rise and fall, and the vent is where that air exchanges. Its mesh screen is the barrier that lets air in but keeps insects, birds and vermin out. A torn, corroded or missing vent screen turns a necessary opening into an unguarded one — and vents are exactly the kind of small fitting that gets overlooked for years.</p>

<h3>Roof penetrations</h3>
<p>Every pipe, fitting and cable that passes through the roof is a potential path if it is not sealed. Unsealed penetrations admit water and contamination directly into the stored supply.</p>

<h3>Overflow and downpipes</h3>
<p>An overflow pipe without a screened, sealed termination is an open door for vermin — and downpipes that discharge onto the roof rather than to external drainage wash roof contamination straight back toward the tank's openings.</p>

<figure>
  <img src="${BASE}/water-food-hatch.jpg" alt="Damaged access hatch on a water storage tank — a common contamination entry point"/>
  <figcaption><strong>The last barrier, breached.</strong> A hatch that no longer seals is a direct opening into the potable environment — one of the most common and most overlooked contamination pathways.</figcaption>
</figure>

<div class="article-divider"><span>Why treated water re-contaminates</span></div>

<p>It is counterintuitive: water that met every standard leaving the plant can fail at the tap because the storage asset re-introduced contamination downstream of treatment. Bird activity around an unscreened vent or open overflow is a documented contamination source in Australian water storage. Biological matter entering through a failed opening does not just add contaminants — it consumes the disinfection residual that was supposed to protect the water, compounding the problem.</p>

<figure>
  <img src="${BASE}/water-food-biological.jpg" alt="Biological matter found inside a potable water tank that entered through a compromised roof opening"/>
  <figcaption><strong>It got in through the top.</strong> Biological matter inside a potable tank — the kind of contamination that enters through a failed hatch, vent or overflow, not through the treated supply.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>The treatment plant is the kitchen; the storage tank is the plate the water is served on. A spotless kitchen still makes people sick if the plate is dirty — and the plate is dirtied through the lid.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">The lid</span>
  <span class="stat-label">Where most potable-tank contamination enters — the hatch, vent and roof penetrations, not the source water</span>
</div>

<div class="article-divider"><span>What to check on top of your tank</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>What a failure means</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Access hatch seals and locks</td><td>An unsealed hatch is a direct opening for runoff, insects and vermin</td></tr>
    <tr><td>Vent mesh intact</td><td>A torn or missing screen admits birds, insects and airborne debris</td></tr>
    <tr><td>Roof penetrations sealed</td><td>Unsealed fittings let water and contamination straight in</td></tr>
    <tr><td>Overflow screened and terminated</td><td>An open overflow is a documented vermin entry point</td></tr>
    <tr><td>Downpipes drain away from the tank</td><td>Roof runoff should never be directed toward the tank's openings</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">If my water is treated, how can it be contaminated in the tank?</p>
  <p class="faq-a">Because the tank sits between treatment and the tap, and its openings — hatch, vent, roof penetrations and overflow — can admit contamination downstream of treatment. Water that met every standard leaving the plant can fail at the tap because a failed opening let birds, vermin, insects or runoff into the stored supply and consumed the disinfection residual.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the most common tank contamination entry point?</p>
  <p class="faq-a">The openings on top of the tank — most often an access hatch that no longer seals, a torn or missing vent screen, or an unscreened overflow. These small, overlooked fittings are a far more common contamination pathway than the walls, the floor or the source water.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often should the roof and fittings be checked?</p>
  <p class="faq-a">Roof, hatch, vent and overflow condition should be part of every routine tank inspection, because these are the fittings most exposed to weather and wildlife and the ones most likely to fail quietly. A scheduled inspection is the reliable way to catch a failed seal or torn screen before it becomes a water-quality event.</p>
</div>

<div class="article-cta">
  <p>When did anyone last check the top of your tank? A condition inspection covers the hatch, vent, roof and overflow — the openings where contamination actually gets in.</p>
  <a href="/contact" class="cta-btn">Request a tank inspection</a>
</div>`,
  },
]

// ── IMAGE UPLOAD LIST (unique images referenced) ────────────────────────────────
const imageFiles = [
  'corrosion-coating-comparison.jpg',
  'corrosion-rpvc-liner.jpg',
  'fire-tank-inspection.jpg',
  'fire-tank-corroded.jpg',
  'rpvc-inline.jpg',
  'sector-inspection.jpg',
  'water-food-hatch.jpg',
  'water-food-biological.jpg',
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
