/**
 * blog-batch-3.js — authors + integrates 10 more blog posts.
 *
 * Single source of truth for the batch. Two modes:
 *   node scripts/blog-batch-3.js static   -> prints TS entries for
 *                                             lib/cms/static-content.ts (SSG fallback)
 *   node scripts/blog-batch-3.js          -> uploads images + upserts posts to Supabase
 *
 * Images are reused from public/posts (already in the repo).
 */

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

// ── POSTS ─────────────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'foundation-and-civil-works-why-tank-failures-start-below-ground',
    title: 'Foundation and Civil Works: Why Tank Failures Often Start Below Ground',
    excerpt:
      'A tank rarely fails because of the tank alone. Uneven settlement, poor drainage and an undersized pad quietly set up structural problems years before they show on the surface.',
    coverImage: 'corrosion-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-20T09:00:00.000Z',
    seoTitle: 'Tank Foundations and Civil Works Explained | PC Water',
    seoDescription:
      'Uneven settlement, drainage and pad sizing determine whether a water tank stays sound for decades or develops structural problems early. A practical explainer.',
    tags: [
      ['tag-tank-installation-found', 'Tank Installation', 'tank-installation'],
      ['tag-asset-management-found', 'Asset Management', 'asset-management'],
      ['tag-tank-maintenance-found', 'Tank Maintenance', 'tank-maintenance'],
    ],
    content: `<p class="article-lead">
  When a steel or concrete tank develops cracking, wall distortion or a leaking floor joint, the instinct is to inspect the tank. Often the real story is underneath it — in a foundation that was undersized, poorly drained, or never properly assessed for the ground it sits on.
</p>

<p>A tank is only as sound as what it is standing on. Differential settlement, water trapped under a slab, and inadequate bearing capacity all place loads on a tank structure it was never designed to carry — and because the damage starts below ground, it is frequently well advanced before it becomes visible above it.</p>

<div class="article-divider"><span>How a foundation problem becomes a tank problem</span></div>

<h3>Differential settlement</h3>
<p>Ground that settles unevenly beneath a tank pad twists and stresses the structure sitting on it. Steel tanks can develop wall distortion and joint stress; concrete tanks can crack at the points where settlement is most uneven. The tank is responding correctly to a foundation that moved — the defect is not really in the tank.</p>

<h3>Drainage around and beneath the pad</h3>
<p>Water that pools against a foundation or is not directed away from the pad softens the bearing ground over time, undermining the very support the tank depends on. Poor site drainage is one of the most common and most preventable causes of long-term foundation movement.</p>

<h3>Bearing capacity that was never properly assessed</h3>
<p>A pad sized on assumption rather than geotechnical assessment can be adequate for years before a wet season, nearby excavation, or simply accumulated settlement reveals it was marginal from the start. Getting this right at design stage is far cheaper than correcting it once a tank is in service.</p>

<figure>
  <img src="${BASE}/corrosion-hero.jpg" alt="Steel water tank showing structural stress consistent with foundation movement"/>
  <figcaption><strong>The tank tells the story of the ground.</strong> Wall distortion and joint stress on an otherwise sound tank often trace back to how the foundation beneath it has moved.</figcaption>
</figure>

<div class="article-divider"><span>Why this is easy to miss</span></div>

<p>Foundation movement is usually slow, and a tank's structure can absorb a surprising amount of differential movement before visible symptoms appear — a hairline crack, a slightly out-of-level roofline, a joint that has started to weep. By the time those signs are obvious, the underlying settlement has typically been progressing for a long time.</p>

<figure>
  <img src="${BASE}/sediment-tank-hero.jpg" alt="Water storage tank installed on an engineered concrete foundation pad"/>
  <figcaption><strong>Built once, relied on for decades.</strong> A properly engineered pad, correctly drained, is what allows the tank above it to perform for its full design life.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Nobody inspects a foundation for its own sake. They inspect it because the tank started telling them something was wrong — and by then, the ground has usually been moving for years.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The foundation factors behind most below-ground tank failures — differential settlement, poor drainage, and under-assessed bearing capacity</span>
</div>

<div class="article-divider"><span>What to check if you suspect a foundation issue</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>What it can reveal</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Level survey of the tank base or roofline</td><td>Detects uneven settlement before it is visible to the eye</td></tr>
    <tr><td>Drainage pattern around the pad</td><td>Pooling or poor fall away from the tank accelerates ground softening</td></tr>
    <tr><td>Crack pattern on concrete structures</td><td>Distribution and direction of cracking often points to settlement, not just age</td></tr>
    <tr><td>Original geotechnical assessment, if available</td><td>Confirms whether the pad was designed for actual site conditions</td></tr>
    <tr><td>Joint and seal condition at the tank base</td><td>Early sign of stress transferred from a moving foundation</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">How do I know if a tank problem is actually a foundation problem?</p>
  <p class="faq-a">Signs that point to the foundation rather than the tank itself include an uneven roofline, cracking that follows a settlement pattern rather than random ageing, or leaking specifically at the base joint. A level survey combined with a structural inspection is the reliable way to confirm it.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a foundation issue be fixed without replacing the tank?</p>
  <p class="faq-a">In many cases, yes — remedial ground works, drainage correction, or underpinning can address the foundation without requiring a full tank replacement, provided the issue is caught before structural damage to the tank itself becomes severe. This is exactly why early assessment matters.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is a geotechnical assessment necessary for every new tank installation?</p>
  <p class="faq-a">For any tank of meaningful size or on a site with uncertain ground conditions, yes. A geotechnical assessment is a small fraction of a project's cost compared to the cost of remediating a foundation issue after a tank has already been installed and is in service.</p>
</div>

<div class="article-cta">
  <p>Seeing movement, cracking or an uneven tank base? The cause is often below ground — and worth confirming before it is assumed to be a tank defect.</p>
  <a href="/contact" class="cta-btn">Request a structural assessment</a>
</div>`,
  },
  {
    slug: 'custom-tank-design-when-a-standard-size-doesnt-fit-your-site',
    title: 'Custom Tank Design: When a Standard Size Doesn’t Fit Your Site',
    excerpt:
      'Not every site can take a standard tank footprint, height or capacity. Here is when custom design earns its cost — and what actually drives that decision.',
    coverImage: 'sector-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-21T09:00:00.000Z',
    seoTitle: 'Custom Water Tank Design Explained | PC Water',
    seoDescription:
      'Site footprint, height restrictions and unusual capacity needs can rule out a standard tank. A practical guide to when custom tank design is worth it.',
    tags: [
      ['tag-tank-installation-custom', 'Tank Installation', 'tank-installation'],
      ['tag-project-managed-custom', 'Project Delivery', 'project-managed'],
      ['tag-commercial-custom', 'Commercial', 'commercial'],
    ],
    content: `<p class="article-lead">
  A standard tank range covers most sites well, which is exactly why it is standard. The sites that do not fit that range are not edge cases you can force a standard product onto — they need the design worked backward from the constraint, not forward from a catalogue.
</p>

<div class="article-divider"><span>The constraints that rule out a standard tank</span></div>

<h3>Footprint</h3>
<p>An irregular, tight or awkwardly shaped site — common on infill commercial sites, existing industrial plants, or heritage-constrained locations — often cannot accommodate the round or standard rectangular footprint a catalogue tank assumes. Custom design can reshape the storage solution to fit the available footprint rather than compromising the required capacity.</p>

<h3>Height restrictions</h3>
<p>Planning overlays, sightline requirements, or proximity to flight paths and infrastructure corridors can cap a structure's height well below what a standard tank of the required capacity would need. The answer is often not a smaller tank, but a wider, lower or differently proportioned custom design that keeps the same usable volume within the height available.</p>

<h3>Unusual capacity or flow requirements</h3>
<p>A site with an atypical demand profile — a large instantaneous fire flow requirement alongside modest daily potable demand, for example — can need a tank configured around two very different draw patterns rather than a single standard specification.</p>

<figure>
  <img src="${BASE}/sector-hero.jpg" alt="Custom-designed water storage tank fitted to an industrial site footprint"/>
  <figcaption><strong>Designed to the site, not the other way around.</strong> Custom tank design starts from the site's real constraints, not a standard product range.</figcaption>
</figure>

<div class="article-divider"><span>Where custom design earns its cost</span></div>

<p>Custom design is not automatically the right call — for a straightforward site, a standard tank is faster to procure, better understood by installers, and usually more cost-effective. Custom design earns its premium specifically where the site, capacity profile, or integration requirements genuinely cannot be met any other way, and forcing a standard product onto those sites would mean compromising on either capacity, compliance, or structural integrity.</p>

<figure>
  <img src="${BASE}/rpvc-hero.jpg" alt="Interior of a custom water tank fitted with an RPVC liner system"/>
  <figcaption><strong>Custom does not mean unproven.</strong> A bespoke tank shape or configuration still relies on the same proven materials and liner systems used across standard installations.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>The question is never "custom or standard" in the abstract. It is whether the site's real constraints — footprint, height, demand profile — can be met by an off-the-shelf specification. If they can, use it. If they cannot, forcing the fit costs more in the long run than designing for it upfront.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The most common drivers of a custom tank brief — constrained footprint, height restriction, and an unusual demand or flow profile</span>
</div>

<div class="article-divider"><span>Questions that reveal whether you need a custom design</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Question</th>
      <th>If yes, custom design is likely needed</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Is the available footprint irregular or significantly constrained?</td><td>A standard round or rectangular tank may not fit without compromise</td></tr>
    <tr><td>Is there a height restriction below what a standard tank of this capacity needs?</td><td>A wider, lower custom profile can preserve capacity within the height limit</td></tr>
    <tr><td>Does the site have two very different demand profiles (e.g. fire and potable)?</td><td>A single standard configuration may not serve both properly</td></tr>
    <tr><td>Does the tank need to integrate with existing structures or services?</td><td>Custom fittings and connections are often required</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is a custom tank always more expensive than a standard one?</p>
  <p class="faq-a">Generally yes, in upfront cost — but that comparison only makes sense where a standard tank is genuinely viable. Where site constraints rule out a standard product, the real comparison is custom design versus a compromised standard installation, and the custom option is often the more cost-effective one over the tank's service life.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does a custom tank still use standard materials and liner systems?</p>
  <p class="faq-a">Yes. Custom design typically changes the tank's shape, footprint or configuration to fit the site — it does not usually mean unproven materials. Coatings, liner systems and structural components are generally the same proven products used across standard installations.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How early should custom tank design be considered in a project?</p>
  <p class="faq-a">As early as possible — ideally before site works or civil design are finalised. Custom tank geometry affects the foundation, access requirements and integration with other services, so involving tank design early avoids costly rework later in the project.</p>
</div>

<div class="article-cta">
  <p>Standard tank ranges won't fit your site? Our engineers can assess the constraint and design around it.</p>
  <a href="/contact" class="cta-btn">Discuss a custom tank design</a>
</div>`,
  },
  {
    slug: 'tender-and-procurement-for-water-infrastructure-what-councils-get-wrong',
    title: 'Tender and Procurement for Water Infrastructure: What Councils Get Wrong',
    excerpt:
      'A tender specification written too generically invites the wrong bids and the wrong outcomes. Here is where water infrastructure tenders most often go off track — and how to fix it before bids close.',
    coverImage: 'sector-inspection.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-22T09:00:00.000Z',
    seoTitle: 'Water Infrastructure Tender and Procurement Guide | PC Water',
    seoDescription:
      'Generic specifications, unclear scope boundaries and missing condition data are common tender pitfalls in water infrastructure procurement. A practical guide for councils and asset owners.',
    tags: [
      ['tag-government-tender', 'Government', 'government'],
      ['tag-project-managed-tender', 'Project Delivery', 'project-managed'],
      ['tag-compliance-tender', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  A water infrastructure tender is only as good as the information behind it. Councils and asset owners that write a specification around assumed conditions, rather than confirmed ones, routinely end up with variations, disputes or a result that does not match what was actually needed.
</p>

<div class="article-divider"><span>Where specifications go wrong</span></div>

<h3>Scope written around assumed condition, not confirmed condition</h3>
<p>A tender for tank refurbishment, relining or maintenance that specifies a scope based on age or a desktop review — without a current condition inspection — is asking bidders to price against an unknown. The result is either inflated bids that price in risk, or under-priced bids that generate variations once the real condition is exposed.</p>

<h3>Unclear boundaries between base scope and provisional items</h3>
<p>Where civil works, access requirements, or discovery-dependent items (like unknown sediment volume or unforeseen structural repair) are not clearly separated from the fixed-price base scope, evaluating and comparing bids becomes unreliable — each bidder may have made different assumptions about what sits where.</p>

<h3>Compliance requirements stated too generically</h3>
<p>Referencing "relevant Australian Standards" without specifying which standards apply to which component, or omitting the specific service level required, leaves interpretation to the bidder — and different bidders will interpret it differently, undermining a fair comparison.</p>

<figure>
  <img src="${BASE}/sector-inspection.jpg" alt="Engineer conducting a condition inspection ahead of a water infrastructure tender"/>
  <figcaption><strong>Confirmed condition, not assumed condition.</strong> A pre-tender inspection turns an assumption-based specification into one bidders can price accurately.</figcaption>
</figure>

<div class="article-divider"><span>What a well-prepared tender does differently</span></div>

<p>A properly prepared water infrastructure tender is built on a current condition assessment, a clearly separated base scope and provisional schedule, and specific, named compliance requirements. That preparation cost is small relative to a single contract variation, and it is what allows genuinely comparable bids to come back — the entire point of running a tender in the first place.</p>

<figure>
  <img src="${BASE}/harsh-env-hero.jpg" alt="Remote water infrastructure asset requiring careful tender scope definition"/>
  <figcaption><strong>Remote and complex sites need more precision, not less.</strong> Access, freight and civil constraints should be defined in the tender, not discovered during the contract.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A tender specification is not a wish list — it is the document every bid, every comparison, and every eventual variation will be measured against. Ambiguity in that document does not disappear during the contract; it just becomes someone's dispute.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The most common gaps behind water infrastructure tender disputes — unconfirmed condition, blurred scope boundaries, and generic compliance references</span>
</div>

<div class="article-divider"><span>Before releasing a water infrastructure tender</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Current condition inspection completed</td><td>Lets bidders price against confirmed condition, not assumption</td></tr>
    <tr><td>Base scope and provisional items clearly separated</td><td>Enables a genuine, comparable evaluation across bids</td></tr>
    <tr><td>Named, specific Australian Standards referenced</td><td>Removes ambiguity in what compliance actually requires</td></tr>
    <tr><td>Site access, freight and civil constraints documented</td><td>Prevents unpriced surprises once the contract is underway</td></tr>
    <tr><td>Clear evaluation criteria published with the tender</td><td>Reduces the risk of a challenged or disputed award</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Should a condition inspection always precede a tank refurbishment tender?</p>
  <p class="faq-a">For any refurbishment, relining or significant maintenance scope, yes. Without current condition data, bidders are pricing against an assumption, which typically produces either inflated prices to cover risk or under-priced bids that generate variations once the actual condition is confirmed.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Why do water infrastructure contracts generate so many variations?</p>
  <p class="faq-a">Most variations trace back to scope that was not fully defined at tender stage — often because condition, site constraints or compliance requirements were assumed rather than confirmed. Addressing these at the specification stage is the most effective way to reduce variations later.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can an asset owner get help preparing a tender specification, not just responding to one?</p>
  <p class="faq-a">Yes — pre-tender condition assessment and specification support is a distinct service from delivering the resulting contract, and engaging it early is one of the more effective ways to improve tender outcomes and reduce disputes.</p>
</div>

<div class="article-cta">
  <p>Preparing a water infrastructure tender? A pre-tender condition assessment gives bidders — and you — a specification that holds up.</p>
  <a href="/contact" class="cta-btn">Discuss tender preparation support</a>
</div>`,
  },
  {
    slug: 'cathodic-protection-for-steel-water-tanks-does-your-tank-need-it',
    title: 'Cathodic Protection for Steel Water Tanks: Does Your Tank Need It?',
    excerpt:
      'Cathodic protection is standard on some steel tanks and absent on others, and the difference is not random. Here is what it actually does and when it earns its place.',
    coverImage: 'cleaning-inspection-corrosion.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-23T09:00:00.000Z',
    seoTitle: 'Cathodic Protection for Water Tanks Explained | PC Water',
    seoDescription:
      'Cathodic protection slows corrosion at the metal itself, not just the coating. A practical explanation of how it works and when a steel water tank needs it.',
    tags: [
      ['tag-corrosion-cathodic', 'Corrosion', 'corrosion'],
      ['tag-tank-maintenance-cathodic', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-tank-inspection-cathodic', 'Tank Inspection', 'tank-inspection'],
    ],
    content: `<p class="article-lead">
  A coating protects steel by keeping water off it. Cathodic protection takes a different approach entirely — it changes the electrochemistry at the steel surface so that even where the coating has failed, the underlying metal corrodes far more slowly, or not at all.
</p>

<div class="article-divider"><span>How cathodic protection actually works</span></div>

<h3>The basic principle</h3>
<p>Corrosion is an electrochemical process — steel loses metal ions to its environment through a flow of electrical current. Cathodic protection either introduces a more easily corroded sacrificial metal (an anode) that corrodes preferentially in place of the tank steel, or applies a controlled electrical current that suppresses the corrosion reaction at the tank surface. Either way, the steel itself becomes the protected, cathodic side of the reaction.</p>

<h3>Why it matters even with a good coating</h3>
<p>No coating system remains perfect indefinitely — holidays, mechanical damage and coating ageing all expose small areas of bare steel over time. On a coated tank without cathodic protection, those exposed spots corrode normally. On a coated tank with cathodic protection, the same exposed spots are still protected, because the protection works at the steel surface, independent of whether the coating above it is intact.</p>

<figure>
  <img src="${BASE}/cleaning-inspection-corrosion.jpg" alt="Localised corrosion on steel tank plate visible during an internal inspection"/>
  <figcaption><strong>Where coatings alone fall short.</strong> A holiday or mechanical damage in the coating exposes bare steel to corrosion — cathodic protection continues to protect that steel regardless.</figcaption>
</figure>

<div class="article-divider"><span>When it earns its place</span></div>

<p>Cathodic protection is most valuable on tanks where coating condition is difficult to maintain perfectly, where the water chemistry is aggressive, or where the consequence of localised corrosion — a fire tank, a critical potable supply, a tank with limited access for recoating — makes an additional layer of protection worthwhile. It is less commonly justified on smaller, easily accessed, low-consequence tanks where routine recoating on a normal maintenance cycle is a simpler and adequate answer.</p>

<figure>
  <img src="${BASE}/iron-manganese-corroding-fitting.png" alt="Corroded steel fitting inside a water storage tank showing localised metal loss"/>
  <figcaption><strong>Localised corrosion at a fitting.</strong> Cathodic protection is particularly effective at slowing corrosion at fittings and welds where coating coverage is hardest to guarantee.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A coating is a barrier that can fail. Cathodic protection is a second, independent line of defence that keeps working even after the barrier does — which is exactly why the two are usually specified together on tanks that cannot afford a corrosion surprise.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The layers of corrosion protection working together on a well-specified steel tank — the coating barrier, and cathodic protection at the steel itself</span>
</div>

<div class="article-divider"><span>Is cathodic protection right for your tank?</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Situation</th>
      <th>Cathodic protection is likely worthwhile</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>High-consequence asset (fire tank, critical potable supply)</td><td>Yes — reduces risk from localised coating failure between inspections</td></tr>
    <tr><td>Aggressive water chemistry or known corrosion history</td><td>Yes — supplements coating performance where it is under more stress</td></tr>
    <tr><td>Limited access for regular recoating</td><td>Yes — extends protection life between maintenance interventions</td></tr>
    <tr><td>Small, easily accessed, low-consequence tank</td><td>Often not required — routine recoating cycle may be sufficient</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Does cathodic protection replace the need for a coating?</p>
  <p class="faq-a">No — the two work together. The coating remains the primary barrier keeping water off the steel; cathodic protection provides ongoing protection at points where that barrier is compromised, whether through age, mechanical damage or coating holidays.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do I know if my tank already has cathodic protection installed?</p>
  <p class="faq-a">A tank with sacrificial anode protection will typically have visible anode fittings inside the tank; an impressed-current system will have a power supply and reference electrodes. If it is unclear from as-built records, a condition inspection can confirm whether a system is present and functioning.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does cathodic protection require ongoing maintenance?</p>
  <p class="faq-a">Yes. Sacrificial anodes deplete over time and need periodic replacement; impressed-current systems need their power supply and monitoring checked. Cathodic protection is not a set-and-forget system — its condition should be verified as part of routine tank inspection.</p>
</div>

<div class="article-cta">
  <p>Not sure whether your tank would benefit from cathodic protection, or whether an existing system is still working? Our engineers can assess it.</p>
  <a href="/contact" class="cta-btn">Request a corrosion protection assessment</a>
</div>`,
  },
  {
    slug: 'confined-space-entry-requirements-for-water-tank-work-a-safety-primer',
    title: 'Confined Space Entry Requirements for Water Tank Work: A Safety Primer',
    excerpt:
      'Manned entry into a water tank is confined space work by definition — and treating it otherwise is how serious incidents happen. What the requirements actually cover.',
    coverImage: 'ticking-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-24T09:00:00.000Z',
    seoTitle: 'Confined Space Entry for Water Tanks | PC Water',
    seoDescription:
      'Atmospheric testing, permits, ventilation and rescue planning are not optional extras for water tank entry — they are the requirements. A practical safety primer.',
    tags: [
      ['tag-tank-inspection-confined', 'Tank Inspection', 'tank-inspection'],
      ['tag-compliance-confined', 'Compliance', 'compliance'],
      ['tag-tank-maintenance-confined', 'Tank Maintenance', 'tank-maintenance'],
    ],
    content: `<p class="article-lead">
  A water tank looks benign compared to a chemical vessel or a sewer — which is exactly why confined space requirements are sometimes treated as a formality rather than the safety-critical process they are. An emptied or partially drained tank meets the legal and practical definition of a confined space, with all the same risks.
</p>

<div class="article-divider"><span>Why a water tank qualifies as a confined space</span></div>

<h3>Restricted entry and exit</h3>
<p>A tank accessed through a single hatch, with no alternative exit route, meets the core definition used across Australian work health and safety regulation — an enclosed or partially enclosed space not designed for continuous occupancy, with limited means of entry and exit.</p>

<h3>Atmospheric risk is real, not theoretical</h3>
<p>Decomposing organic matter, biofilm, or residual disinfection chemicals can deplete oxygen or generate hazardous gases inside a tank that has been closed up. A tank that looks clean and empty is not the same as a tank confirmed safe to breathe in — that confirmation only comes from atmospheric testing before entry.</p>

<figure>
  <img src="${BASE}/ticking-hero.jpg" alt="Access hatch on top of a water storage tank used for confined space entry"/>
  <figcaption><strong>One way in, one way out.</strong> A single hatch with no alternate exit is a defining feature of a confined space — and water tanks routinely meet that definition.</figcaption>
</figure>

<div class="article-divider"><span>What proper confined space entry actually involves</span></div>

<h3>Permit-to-work and atmospheric testing</h3>
<p>Entry should not proceed without a documented permit and atmospheric testing for oxygen level and hazardous gases, repeated periodically for the duration of the work — not tested once at the hatch and assumed constant.</p>

<h3>Ventilation and continuous monitoring</h3>
<p>Forced ventilation and continuous gas monitoring during occupied work reduce the risk of atmospheric conditions changing while someone is inside — a real risk in a tank being actively cleaned or where sediment is disturbed.</p>

<h3>Standby person and rescue plan</h3>
<p>A dedicated standby person outside the space, and a documented, practiced rescue plan, are not optional additions — they are the difference between an incident being a near miss and being fatal. Rescue cannot be improvised after entry has already begun.</p>

<figure>
  <img src="${BASE}/rov-sediment-measurement.png" alt="Remote inspection equipment used to reduce the need for confined space entry into a water tank"/>
  <figcaption><strong>The safest entry is sometimes no entry at all.</strong> ROV and remote inspection technology can eliminate confined space entry risk entirely for many routine inspection tasks.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>The controls exist because the risk is real, not because the paperwork demands it. A permit, a gas test and a standby person are the difference between a routine task and a fatality statistic — and that gap has been proven in incident reports, not just in theory.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">4</span>
  <span class="stat-label">The non-negotiable elements of safe tank entry — permit-to-work, atmospheric testing, ventilation, and a standby person with a rescue plan</span>
</div>

<div class="article-divider"><span>Before anyone enters a water tank</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Why it is not optional</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Documented confined space entry permit</td><td>Establishes accountability and confirms controls are in place before entry</td></tr>
    <tr><td>Atmospheric testing before and during entry</td><td>A tank that looks safe is not confirmed safe without testing</td></tr>
    <tr><td>Forced ventilation where required</td><td>Reduces the chance of hazardous atmosphere developing during work</td></tr>
    <tr><td>Trained standby person stationed outside</td><td>The only reliable way to trigger an effective rescue response</td></tr>
    <tr><td>Practiced, documented rescue plan</td><td>Rescue cannot be improvised safely once an incident has occurred</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is a water tank always classified as a confined space?</p>
  <p class="faq-a">Most water tanks meet the definition once someone needs to physically enter them — restricted entry/exit and the potential for a hazardous atmosphere are the defining features, and both are commonly present in water storage tanks regardless of how clean they appear.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can atmospheric testing be skipped if the tank was recently opened and looks fine?</p>
  <p class="faq-a">No. Visual appearance does not indicate oxygen level or the presence of hazardous gases. Atmospheric testing is a specific, instrument-based check that cannot be substituted with a visual assessment, regardless of how the tank looks or smells.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does ROV inspection eliminate the need for confined space entry procedures?</p>
  <p class="faq-a">For inspection tasks that can be completed by ROV, yes — it avoids the confined space risk entirely, which is one of its major safety advantages. Any task that still requires a person to physically enter the tank remains subject to full confined space entry requirements.</p>
</div>

<div class="article-cta">
  <p>Planning tank entry work? Confirming the right controls are in place before anyone goes near the hatch is the job that matters most.</p>
  <a href="/contact" class="cta-btn">Talk to our safety-qualified team</a>
</div>`,
  },
  {
    slug: 'builder-contractor-partnerships-getting-water-storage-right-on-a-new-build',
    title: 'Builder and Contractor Partnerships: Getting Water Storage Right the First Time',
    excerpt:
      'Water storage is rarely the headline item on a new build, which is exactly why it goes wrong when it is treated as an afterthought. What a good builder-contractor partnership actually looks like.',
    coverImage: 'rpvc-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-25T09:00:00.000Z',
    seoTitle: 'Builder and Contractor Water Storage Partnerships | PC Water',
    seoDescription:
      'Water storage requirements are easy to under-specify on a new build. A practical look at what a strong builder-contractor partnership on water infrastructure actually delivers.',
    tags: [
      ['tag-commercial-builder', 'Commercial', 'commercial'],
      ['tag-project-managed-builder', 'Project Delivery', 'project-managed'],
      ['tag-tank-installation-builder', 'Tank Installation', 'tank-installation'],
    ],
    content: `<p class="article-lead">
  On a new commercial or industrial build, water storage competes for attention with structure, services and finishes that are visible to every stakeholder walking the site. It is rarely the most visible line item — and that is precisely why it is one of the most common areas to be under-specified until it becomes a late-stage problem.
</p>

<div class="article-divider"><span>Where water storage gets under-specified on new builds</span></div>

<h3>Fire compliance sized late, not early</h3>
<p>Fire water storage requirements are a function of the building's final use, hydrant demand and fire engineering — all of which can shift during design development. A tank sized against an early assumption, rather than confirmed fire engineering, risks needing to be re-sized once those numbers are locked in, sometimes after civil works are already underway.</p>

<h3>Access and integration decided after the tank is already ordered</h3>
<p>Craneage access, pipe penetrations, electrical and control integration, and future maintenance access are all far easier and cheaper to plan for at design stage than to retrofit once the tank is on site and other trades have already built around it.</p>

<h3>Handover documentation treated as an afterthought</h3>
<p>A tank installed without complete as-built records, warranty documentation and a clear maintenance schedule leaves the building owner starting their asset management from a blank page — exactly the kind of gap that shows up years later during a compliance audit.</p>

<figure>
  <img src="${BASE}/rpvc-hero.jpg" alt="Water storage tank being installed as part of a new commercial building project"/>
  <figcaption><strong>Get it right once, on program.</strong> Water storage integrated early into a build's design and sequencing avoids late-stage rework and compliance gaps.</figcaption>
</figure>

<div class="article-divider"><span>What a strong partnership looks like</span></div>

<p>The builder-contractor relationships that work well share a pattern: water storage requirements are confirmed early against actual fire engineering and demand figures, access and integration are planned alongside other trades rather than after them, and complete documentation is handed over at practical completion — not chased down months later.</p>

<figure>
  <img src="${BASE}/sector-hero.jpg" alt="Completed water storage installation integrated into a new building's infrastructure"/>
  <figcaption><strong>Integrated, not bolted on.</strong> Water storage planned alongside the rest of the build avoids the access and sequencing conflicts that show up when it is treated as a late addition.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Water storage is infrastructure a building depends on for its entire operating life, sized against numbers that are usually finalised partway through design. Getting the sequencing and the specification right the first time is far cheaper than resizing or retrofitting later.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The recurring gaps on new builds — late fire sizing, late access planning, and incomplete handover documentation</span>
</div>

<div class="article-divider"><span>What to confirm early on a new build</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Item</th>
      <th>Why it needs to be settled early</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Confirmed fire engineering demand figures</td><td>Tank sizing based on assumption risks late-stage resizing</td></tr>
    <tr><td>Craneage and installation access sequencing</td><td>Coordinating with other trades avoids costly access conflicts</td></tr>
    <tr><td>Pipe, electrical and control integration points</td><td>Cheaper to design in than retrofit after installation</td></tr>
    <tr><td>Future maintenance access</td><td>A tank installed without service access creates an ongoing operating cost</td></tr>
    <tr><td>As-built and warranty documentation plan</td><td>Should be scoped upfront, not chased after handover</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">When should water storage be confirmed in a new build's program?</p>
  <p class="faq-a">As early as fire engineering and demand figures allow — ideally during design development, well before civil works commence. Locking in tank sizing and access requirements early avoids the cost and delay of resizing or reworking access once other trades are already sequenced around it.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Who is responsible for handover documentation on a new tank installation?</p>
  <p class="faq-a">This should be explicitly scoped in the contract rather than assumed. A clear expectation that as-built drawings, warranty information and a maintenance schedule will be provided at practical completion avoids the common gap where an owner is left chasing documentation after handover.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can water storage requirements change significantly during a build?</p>
  <p class="faq-a">Yes, particularly where fire engineering or the building's final use is still being finalised. This is exactly why early, ongoing coordination between the builder and the water infrastructure contractor matters — it allows sizing to be confirmed against final figures rather than early assumptions.</p>
</div>

<div class="article-cta">
  <p>Planning water storage for a new build? Getting it integrated into the program early avoids the rework that comes from treating it as an afterthought.</p>
  <a href="/contact" class="cta-btn">Discuss your build project</a>
</div>`,
  },
  {
    slug: 'concrete-reservoir-spalling-vs-steel-tank-corrosion-whats-different',
    title: 'Concrete Reservoir Spalling vs Steel Tank Corrosion: What’s Different',
    excerpt:
      'Concrete reservoirs fail differently to steel tanks, and treating one like the other leads to the wrong diagnosis. Here is how spalling actually happens and why it is not just "concrete corrosion."',
    coverImage: 'cleaning-inspection-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-26T09:00:00.000Z',
    seoTitle: 'Concrete Reservoir Spalling Explained | PC Water',
    seoDescription:
      'Spalling in a concrete reservoir is driven by reinforcement corrosion, not the same mechanism as steel tank wall corrosion. A practical explanation of the difference and what it means for repair.',
    tags: [
      ['tag-tank-maintenance-spalling', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-asset-management-spalling', 'Asset Management', 'asset-management'],
      ['tag-tank-inspection-spalling', 'Tank Inspection', 'tank-inspection'],
    ],
    content: `<p class="article-lead">
  Concrete does not corrode the way steel does — but a concrete reservoir can still fail through corrosion, because the steel reinforcement inside it can. Understanding that distinction is the difference between diagnosing spalling correctly and misreading it as simple concrete deterioration.
</p>

<div class="article-divider"><span>Why concrete spalls</span></div>

<h3>Reinforcement corrosion is the real driver</h3>
<p>When moisture and chloride or carbonation exposure reach the steel reinforcement inside concrete, that steel corrodes just as any embedded steel would. Corroding steel expands — rust occupies significantly more volume than the metal it replaces — and that expansion cracks and eventually pushes off the surrounding concrete cover. What looks like the concrete "failing" is usually the concrete being forced apart from within by corroding rebar.</p>

<h3>Carbonation and chloride ingress</h3>
<p>Concrete's natural alkalinity normally protects embedded steel from corrosion. Carbonation — the gradual reaction of atmospheric CO2 with the concrete — and chloride penetration both reduce that protection over time, eventually reaching the reinforcement and allowing corrosion to begin. This process is slow and invisible from the surface until spalling appears.</p>

<figure>
  <img src="${BASE}/cleaning-inspection-hero.jpg" alt="Concrete water reservoir showing spalling and exposed reinforcement"/>
  <figcaption><strong>The visible damage is the endpoint, not the start.</strong> By the time spalling is visible, reinforcement corrosion has usually been progressing for years beneath the surface.</figcaption>
</figure>

<div class="article-divider"><span>Why this matters for how you respond</span></div>

<p>A steel tank's corrosion is addressed by protecting or restoring the steel surface directly — coating, lining, or replacement. A concrete reservoir's spalling requires addressing the reinforcement corrosion driving it, which typically means removing affected concrete, treating or replacing corroded reinforcement, and reinstating cover with an appropriate repair system — a fundamentally different repair discipline to steel tank remediation, even though both are "water tank maintenance."</p>

<figure>
  <img src="${BASE}/cleaning-inspection-corrosion.jpg" alt="Close inspection of concrete reservoir surface identifying early signs of reinforcement corrosion"/>
  <figcaption><strong>Catching it before spalling appears.</strong> Fine cracking, rust staining and hollow-sounding concrete on inspection can flag reinforcement corrosion before it becomes visible spalling.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Spalling concrete is not the primary problem — it is a visible symptom of a problem happening to the steel hidden inside it. Repair that only addresses the visible concrete, without addressing the reinforcement corrosion, is treating the symptom and leaving the cause in place.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2x+</span>
  <span class="stat-label">Roughly the volume expansion of steel reinforcement as it corrodes to rust — the mechanical force that cracks and spalls the surrounding concrete</span>
</div>

<div class="article-divider"><span>Early signs worth acting on before spalling appears</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Sign</th>
      <th>What it can indicate</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Fine, map-pattern surface cracking</td><td>Can indicate early carbonation or chloride-related deterioration</td></tr>
    <tr><td>Rust staining on the concrete surface</td><td>A strong indicator that reinforcement corrosion has already begun</td></tr>
    <tr><td>Hollow sound when tapped ("delamination")</td><td>Concrete has separated from the reinforcement beneath, ahead of visible spalling</td></tr>
    <tr><td>Localised bulging or surface distortion</td><td>Expansive pressure from corroding steel pushing outward</td></tr>
    <tr><td>Age and exposure history of the structure</td><td>Older reservoirs with high chloride or carbonation exposure carry higher risk</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is spalling the same problem as steel tank corrosion?</p>
  <p class="faq-a">No. Spalling is driven by corrosion of the steel reinforcement embedded inside concrete, which expands and cracks the concrete around it. It is a related but mechanically different process to a steel tank's exposed wall or floor corroding directly, and it requires a different diagnostic and repair approach.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can spalling be repaired without addressing the reinforcement?</p>
  <p class="faq-a">A durable repair needs to address the corroded reinforcement — removing affected concrete, treating or replacing the steel, and reinstating proper cover. A surface-only patch over spalled concrete without addressing the underlying reinforcement corrosion typically fails again within a short period.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can spalling be detected before it becomes visible?</p>
  <p class="faq-a">Yes, in many cases. Delamination — where the concrete has separated internally but not yet visibly spalled — can often be detected by sounding the surface (tapping and listening for a hollow response) during a routine inspection, allowing repair before the damage becomes extensive.</p>
</div>

<div class="article-cta">
  <p>Noticing rust staining, cracking or hollow-sounding concrete on a reservoir? Catching reinforcement corrosion early is significantly cheaper than repairing it after spalling.</p>
  <a href="/contact" class="cta-btn">Request a concrete reservoir inspection</a>
</div>`,
  },
  {
    slug: 'turbidity-spikes-after-tank-cleaning-whats-normal-and-whats-a-red-flag',
    title: 'Turbidity Spikes After Tank Cleaning: What’s Normal and What’s a Red Flag',
    excerpt:
      'A turbidity spike right after a tank clean can look alarming — but a temporary rise is expected. Here is how to tell normal post-clean turbidity from a sign something went wrong.',
    coverImage: 'tank-interior-sediment.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-27T09:00:00.000Z',
    seoTitle: 'Turbidity After Water Tank Cleaning Explained | PC Water',
    seoDescription:
      'A short-lived turbidity spike after tank cleaning is normal. A practical guide to what to expect, how long it should last, and when a spike signals a real problem.',
    tags: [
      ['tag-water-quality-turbidity', 'Water Quality', 'water-quality'],
      ['tag-tank-cleaning-turbidity', 'Tank Cleaning', 'tank-cleaning'],
      ['tag-compliance-turbidity', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  Turbidity readings climbing right after a tank has just been cleaned feels backwards — the tank should be cleaner, not murkier. In the short term, that is exactly what a properly performed clean often looks like, and it is worth understanding why before assuming something has gone wrong.
</p>

<div class="article-divider"><span>Why turbidity rises briefly after cleaning</span></div>

<h3>Disturbed fine sediment</h3>
<p>Cleaning methods that agitate the tank floor — even careful diver vacuuming — inevitably stir fine particulate that has settled into corners, around fittings and along wall-floor junctions. That fine material takes some time to be drawn out through the outlet or to settle again, and in the interim it reads as elevated turbidity.</p>

<h3>Refill and mixing dynamics</h3>
<p>As a tank refills after cleaning, incoming water mixes with any remaining fine sediment and can temporarily increase turbidity at the outlet before the tank re-stratifies and stabilises. This is a normal hydraulic effect of the refill process, not necessarily a sign of a cleaning failure.</p>

<figure>
  <img src="${BASE}/tank-interior-sediment.jpg" alt="Interior of a water tank showing fine sediment being disturbed during cleaning"/>
  <figcaption><strong>Disturbance before clarity.</strong> Fine sediment stirred during cleaning is expected to briefly raise turbidity before it clears through the outlet or resettles.</figcaption>
</figure>

<div class="article-divider"><span>How long "normal" should last</span></div>

<p>A well-performed clean followed by a properly managed refill typically sees turbidity settle back to baseline within a short, defined period — the exact duration depends on tank size, refill rate and the cleaning method used, and a competent cleaning provider should be able to tell you what to expect for your specific tank before the work begins. What is not normal is turbidity that remains elevated well beyond that expected window, or that spikes again without an obvious refill or disturbance event.</p>

<figure>
  <img src="${BASE}/sediment-three-types.jpg" alt="Different types of sediment found during water tank cleaning, ranging from fine silt to coarse debris"/>
  <figcaption><strong>Not all sediment behaves the same.</strong> Fine silt clears faster than coarser material; the composition of what was removed affects how quickly turbidity should settle.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A brief turbidity spike after cleaning is the sediment leaving the system, not entering it. The red flag is not the spike itself — it is a spike that does not resolve within the expected window, or one that has no obvious cleaning-related cause.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">1</span>
  <span class="stat-label">The number of things a genuine post-clean turbidity spike should always do — resolve within the expected timeframe, not persist</span>
</div>

<div class="article-divider"><span>Normal versus red flag</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Observation</th>
      <th>Likely normal or worth investigating</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Turbidity rises during and immediately after cleaning</td><td>Normal — expected disturbance from the cleaning process</td></tr>
    <tr><td>Turbidity settles to baseline within the expected timeframe</td><td>Normal — confirms the sediment has cleared as expected</td></tr>
    <tr><td>Turbidity remains elevated well past the expected window</td><td>Worth investigating — may indicate incomplete removal or an outlet issue</td></tr>
    <tr><td>A new turbidity spike with no refill or disturbance event</td><td>Worth investigating — may indicate an unrelated contamination event</td></tr>
    <tr><td>Turbidity accompanied by discolouration or odour</td><td>Worth investigating promptly — may indicate a water quality issue beyond sediment</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">How long should turbidity stay elevated after a tank is cleaned?</p>
  <p class="faq-a">It varies by tank size, cleaning method and refill rate, but a competent cleaning provider should give you an expected timeframe before the work begins. Turbidity that has not returned to baseline within that stated window is worth investigating rather than assumed to still be settling.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does a turbidity spike after cleaning mean the clean was done poorly?</p>
  <p class="faq-a">Not necessarily — a brief spike is often a sign the cleaning process successfully disturbed and is removing sediment that was previously settled and undetected. A poorly performed clean is more likely to show as turbidity that does not resolve, or sediment that is later found to still be present on re-inspection.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Should water be tested after a tank cleaning event?</p>
  <p class="faq-a">Yes — turbidity and, where relevant, disinfection residual should be monitored following a clean until readings stabilise at baseline. This confirms the clean has achieved its intended result and provides an early warning if something other than expected sediment disturbance is occurring.</p>
</div>

<div class="article-cta">
  <p>Seeing turbidity readings that are not settling as expected after a clean? Worth a follow-up inspection to confirm what is actually happening inside the tank.</p>
  <a href="/contact" class="cta-btn">Request a follow-up inspection</a>
</div>`,
  },
  {
    slug: 'project-managed-water-infrastructure-why-one-point-of-accountability-matters',
    title: 'Project-Managed Water Infrastructure: Why One Point of Accountability Matters',
    excerpt:
      'Splitting a water infrastructure project across civil, tank supply, liner and commissioning contractors seems efficient on paper. In practice, it is where accountability — and the project — gets lost.',
    coverImage: 'harsh-env-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-28T09:00:00.000Z',
    seoTitle: 'Project-Managed Water Infrastructure Delivery | PC Water',
    seoDescription:
      'Multiple contractors on a water infrastructure project without a single point of accountability is where delays, disputes and defects hide. A practical explanation of project-managed delivery.',
    tags: [
      ['tag-project-managed-accountability', 'Project Delivery', 'project-managed'],
      ['tag-remote-projects-accountability', 'Remote Projects', 'remote-projects'],
      ['tag-government-accountability', 'Government', 'government'],
    ],
    content: `<p class="article-lead">
  A water infrastructure project touches civil works, tank supply, liner installation, pipework, electrical and commissioning — often five or six different specialisations. Procuring each separately can look like it saves money on paper. It is also exactly where delays and defects go unowned in practice.
</p>

<div class="article-divider"><span>What goes wrong when accountability is split</span></div>

<h3>The gaps between contracts</h3>
<p>When civil works, tank supply and commissioning are contracted separately, the interfaces between them — who confirms the pad is ready before the tank arrives, who is responsible if commissioning reveals an installation defect — are exactly where disputes happen. Each contractor is legitimately focused on their own scope; nobody is contractually responsible for the gaps between scopes.</p>

<h3>Program risk multiplies with each interface</h3>
<p>Every handover between contractors is a point where delay can be introduced and blame can be diffused. A civil delay pushes tank delivery; a tank delivery delay pushes commissioning — and with separate contracts, each contractor can reasonably point to the contractor before them, leaving the asset owner absorbing the cumulative delay.</p>

<figure>
  <img src="${BASE}/harsh-env-hero.jpg" alt="Remote water infrastructure project requiring coordination across multiple contractors"/>
  <figcaption><strong>More contractors, more interfaces.</strong> Each handover between separately contracted scopes is a point where delay and disputed responsibility can enter the project.</figcaption>
</figure>

<div class="article-divider"><span>What one point of accountability changes</span></div>

<p>Project-managed delivery — where a single contractor holds accountability across civil, tank supply, liner and commissioning — does not eliminate the specialisations involved, but it eliminates the ambiguity at the interfaces. If commissioning reveals a defect, there is one party responsible for resolving it, not a debate about whose scope it falls under. If the program slips, there is one party accountable for recovery, not several pointing at each other.</p>

<figure>
  <img src="${BASE}/sector-inspection.jpg" alt="Project-managed water infrastructure delivery with a single point of accountability across all trades"/>
  <figcaption><strong>One team, one outcome.</strong> A single accountable contractor coordinating specialist trades removes the interface disputes that separately procured contracts create.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Splitting a project into separate contracts distributes the work. It does not distribute the risk fairly — it concentrates the risk of interface failures onto the asset owner, who is the only party with visibility across every contract at once.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">1</span>
  <span class="stat-label">The number of parties that should be accountable for a project's outcome when things go wrong — not the number left arguing about whose scope it was</span>
</div>

<div class="article-divider"><span>Questions worth asking before splitting a project into separate contracts</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Question</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Who is responsible if a defect is found during commissioning?</td><td>With split contracts, this can become a dispute rather than a fix</td></tr>
    <tr><td>Who absorbs delay caused by an earlier contractor's schedule slip?</td><td>Separate contracts often leave this risk with the asset owner</td></tr>
    <tr><td>Who confirms readiness at each handover point?</td><td>Without a single accountable party, handover checks can be assumed rather than verified</td></tr>
    <tr><td>Is there a single program the asset owner can hold anyone to?</td><td>Multiple contractor programs rarely align without active coordination</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is project-managed delivery always more expensive than procuring trades separately?</p>
  <p class="faq-a">Not necessarily, once the cost of interface delays, disputes and defect resolution under separate contracts is accounted for. The apparent savings of separate procurement often do not materialise once program risk and dispute resolution costs are factored in.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does project-managed delivery mean one company does all the physical work?</p>
  <p class="faq-a">Not necessarily — specialist trades are often still subcontracted for civil works, electrical or other specific scopes. What changes is that one party holds overall accountability and coordinates those trades, rather than the asset owner managing separate contracts and interfaces directly.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is project-managed delivery only relevant for large or remote projects?</p>
  <p class="faq-a">It is most valuable where multiple trades and interfaces are involved and where the asset owner does not have the internal capacity to actively manage those interfaces — which includes many remote and regional projects, but also complex metro projects with multiple specialist scopes.</p>
</div>

<div class="article-cta">
  <p>Coordinating multiple contractors on a water infrastructure project, or want to avoid it altogether? A single accountable delivery model can remove that risk.</p>
  <a href="/contact" class="cta-btn">Discuss project-managed delivery</a>
</div>`,
  },
  {
    slug: 'iron-bacteria-in-water-tanks-the-slime-thats-quietly-corroding-your-asset',
    title: 'Iron Bacteria in Water Tanks: The Slime That’s Quietly Corroding Your Asset',
    excerpt:
      'A reddish-brown slime inside a tank is not just an unpleasant find during cleaning. Iron bacteria colonies can accelerate corrosion and taint water quality long before anyone notices them.',
    coverImage: 'iron-bacteria-fouling.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-29T09:00:00.000Z',
    seoTitle: 'Iron Bacteria in Water Tanks Explained | PC Water',
    seoDescription:
      'Iron bacteria form slime colonies that accelerate localised corrosion and cause discolouration and odour in water storage tanks. What causes it and how it is managed.',
    tags: [
      ['tag-water-quality-bacteria', 'Water Quality', 'water-quality'],
      ['tag-corrosion-bacteria', 'Corrosion', 'corrosion'],
      ['tag-potable-water-bacteria', 'Potable Water', 'potable-water'],
    ],
    content: `<p class="article-lead">
  Iron bacteria are not a corrosion product — they are living organisms that feed on dissolved iron and manganese, and the reddish-brown, slimy colonies they form inside a tank do more than look unpleasant. They actively accelerate localised corrosion and taint water quality wherever they establish themselves.
</p>

<div class="article-divider"><span>What iron bacteria actually are</span></div>

<h3>A biological process, not a chemical stain</h3>
<p>Iron bacteria metabolise dissolved iron and manganese in water, converting it to a solid, gelatinous deposit as a byproduct of their life cycle. Where iron corrosion products alone form a hard, adherent stain, an active iron bacteria colony forms a slimy, often foul-smelling mass that continues to grow as long as conditions support it.</p>

<h3>Why they accelerate corrosion</h3>
<p>Iron bacteria colonies create localised conditions beneath the slime — oxygen-depleted pockets and concentrated microbial activity — that promote a specific, aggressive form of corrosion called microbiologically influenced corrosion (MIC). This corrosion is often more localised and can progress faster than general uniform corrosion, precisely because the bacteria concentrate their activity at specific points on the metal surface.</p>

<figure>
  <img src="${BASE}/iron-bacteria-fouling.jpg" alt="Reddish-brown iron bacteria fouling on the interior surface of a water storage tank"/>
  <figcaption><strong>More than a stain.</strong> Iron bacteria colonies are living biofilm that concentrate corrosive activity at the metal surface beneath them.</figcaption>
</figure>

<div class="article-divider"><span>How it shows up before you see the slime directly</span></div>

<h3>Discolouration and odour</h3>
<p>Reddish-brown or black discolouration in the water, along with a musty, swampy or oily odour, are common early signs of an active iron bacteria population — often noticed at the tap well before anyone inspects inside the tank itself.</p>

<h3>Clogged fittings and reduced flow</h3>
<p>Iron bacteria slime can build up inside fittings, screens and valves, gradually restricting flow and increasing maintenance callouts for what looks like an unrelated mechanical issue.</p>

<figure>
  <img src="${BASE}/iron-manganese-black-deposit.png" alt="Black deposit consistent with iron and manganese bacterial fouling inside a water tank"/>
  <figcaption><strong>The deposit tells the story.</strong> Dark, gelatinous fouling like this is a strong indicator of active iron and manganese bacterial activity, not simple sediment.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Iron bacteria do not just discolour water — they build a living environment on the tank's metal surfaces that makes corrosion happen faster and more unpredictably than it otherwise would. Treating the discolouration without addressing the colony leaves the corrosion driver in place.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The compounding effects of an untreated iron bacteria colony — accelerated localised corrosion, and ongoing water quality and odour complaints</span>
</div>

<div class="article-divider"><span>What to check if iron bacteria is suspected</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>What it can reveal</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Colour and odour of water at multiple points in the system</td><td>Reddish-brown colour and musty odour are classic early indicators</td></tr>
    <tr><td>Internal tank surfaces during inspection or cleaning</td><td>Confirms whether slime fouling is present versus simple sediment</td></tr>
    <tr><td>Condition of fittings, screens and valves</td><td>Restricted flow can be a downstream symptom of bacterial fouling</td></tr>
    <tr><td>Localised pitting pattern during corrosion inspection</td><td>Distinct pitting concentrated under fouling deposits suggests MIC</td></tr>
    <tr><td>Source water iron and manganese levels</td><td>Higher source levels provide more fuel for bacterial colonisation</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is iron bacteria fouling a health risk?</p>
  <p class="faq-a">Iron bacteria themselves are not typically classified as a direct pathogenic risk, but the conditions that support their growth can also support other undesirable organisms, and the resulting discolouration, odour and taste make the water unacceptable for use even where it may still meet chemical standards. It should be treated as a water quality issue requiring remediation.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can iron bacteria be removed by a standard tank clean?</p>
  <p class="faq-a">Physical removal during cleaning addresses the visible colony, but iron bacteria can recur if the underlying conditions — dissolved iron and manganese levels, and any conducive surface conditions — are not also addressed. Persistent or recurring fouling often needs a water treatment response alongside physical cleaning.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does iron bacteria fouling mean my tank has a corrosion problem?</p>
  <p class="faq-a">Not automatically, but it significantly raises the risk. Because iron bacteria colonies promote localised, accelerated corrosion beneath them, a tank with confirmed iron bacteria fouling should have its internal surfaces inspected for pitting or corrosion at the affected locations.</p>
</div>

<div class="article-cta">
  <p>Seeing discolouration, odour, or slimy deposits in your water storage tank? It is worth confirming whether iron bacteria is involved before it accelerates corrosion further.</p>
  <a href="/contact" class="cta-btn">Request a water quality and tank inspection</a>
</div>`,
  },
]

// ── IMAGE UPLOAD LIST (unique images referenced) ────────────────────────────────
const imageFiles = [
  'corrosion-hero.jpg',
  'sediment-tank-hero.jpg',
  'sector-hero.jpg',
  'rpvc-hero.jpg',
  'sector-inspection.jpg',
  'harsh-env-hero.jpg',
  'cleaning-inspection-corrosion.jpg',
  'iron-manganese-corroding-fitting.png',
  'ticking-hero.jpg',
  'rov-sediment-measurement.png',
  'cleaning-inspection-hero.jpg',
  'tank-interior-sediment.jpg',
  'sediment-three-types.jpg',
  'iron-bacteria-fouling.jpg',
  'iron-manganese-black-deposit.png',
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
