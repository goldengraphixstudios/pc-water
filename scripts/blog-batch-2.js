/**
 * blog-batch-2.js — authors + integrates 5 more blog posts.
 *
 * Single source of truth for the batch. Two modes:
 *   node scripts/blog-batch-2.js static   -> prints TS entries for
 *                                             lib/cms/static-content.ts (SSG fallback)
 *   node scripts/blog-batch-2.js          -> uploads images + upserts posts to Supabase
 *
 * Images are reused from public/posts (already in the repo).
 */

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

// ── POSTS ─────────────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'rov-inspection-vs-manned-entry-choosing-the-right-method',
    title: 'ROV Inspection vs Manned Entry: Choosing the Right Method for Your Tank',
    excerpt:
      'Not every tank inspection needs a diver in the water. Here is how ROV, drone and manned-entry inspection compare — and how to pick the right method for your asset, budget and risk profile.',
    coverImage: 'corrosion-rov-inspection.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-01T09:00:00.000Z',
    seoTitle: 'ROV vs Manned Entry Tank Inspection | PC Water',
    seoDescription:
      'ROV, drone and manned-entry inspection each answer different questions about a water tank. A practical guide to choosing the right method for your asset.',
    tags: [
      ['tag-tank-inspection-rov', 'Tank Inspection', 'tank-inspection'],
      ['tag-technology-rov', 'Technology', 'technology'],
      ['tag-compliance-rov', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  For decades, inspecting the inside of a water tank meant draining it, or sending a diver in. Today an ROV can cover the same ground without taking the asset offline — but that does not make manned entry obsolete. The right choice depends on what you actually need to find out.
</p>

<p>Asset owners increasingly ask for ROV inspection by default, assuming it is simply the modern replacement for manned entry. It is not a replacement — it is a different tool with different strengths. Knowing when each one is the right call saves money and, more importantly, gets you an inspection that actually answers the question you are asking.</p>

<div class="article-divider"><span>What an ROV inspection is good at</span></div>

<h3>Inspecting a live, in-service tank</h3>
<p>An ROV goes in through the access hatch while the tank stays full and connected to the network. There is no outage, no lost storage capacity, and no disruption to supply — the single biggest reason ROV inspection has become the default first step for potable and fire water tanks that cannot be taken offline without a service impact.</p>

<h3>Covering large or complex assets efficiently</h3>
<p>A remotely operated vehicle with HD camera and lighting can systematically cover a large reservoir floor, walls and roofline faster than a diver working on limited bottom time, and it records continuous video evidence rather than a verbal report after the fact.</p>

<h3>Working in conditions unsuitable for a diver</h3>
<p>Confined access, low headroom, contaminated or chemically treated water, and tanks with internal obstructions can all rule out manned entry on safety grounds. An ROV extends inspection into assets a diver simply should not enter.</p>

<figure>
  <img src="${BASE}/corrosion-rov-inspection.jpg" alt="Remotely operated vehicle (ROV) conducting an underwater inspection inside a steel water storage tank"/>
  <figcaption><strong>Eyes inside, without an outage.</strong> ROV inspection lets a tank stay in service while its internal condition is documented on video.</figcaption>
</figure>

<div class="article-divider"><span>Where manned entry still wins</span></div>

<p>Video tells you what something looks like. It does not tell you how it feels, sounds, or measures under a probe. Where an inspection needs hands-on assessment — sounding a plate for hidden thinning, taking an ultrasonic thickness reading at a specific point, physically testing a weld or a liner seam, or recovering a sample — a trained diver or confined-space entrant working to a documented method is still the right tool. Manned entry is also usually required once a tank is already drained for maintenance, where there is no outage cost left to avoid.</p>

<blockquote class="article-quotable">
  <p>ROV and manned entry are not competing methods — they are sequential ones. The ROV tells you where to look closely; manned entry, where it is needed, tells you exactly what is happening there.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">0</span>
  <span class="stat-label">The number of days a well-planned ROV inspection typically takes a potable or fire tank out of service</span>
</div>

<div class="article-divider"><span>Choosing the right method</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Situation</th>
      <th>Better fit</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Tank must stay in service, no outage available</td><td>ROV inspection</td></tr>
    <tr><td>Routine condition survey, large asset</td><td>ROV inspection</td></tr>
    <tr><td>Suspected localised pitting needs thickness testing</td><td>Manned or confined-space entry</td></tr>
    <tr><td>Tank already drained for maintenance</td><td>Manned entry</td></tr>
    <tr><td>Liner seam or weld needs a physical test</td><td>Manned entry</td></tr>
    <tr><td>Water quality or access unsafe for a diver</td><td>ROV inspection</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is an ROV inspection as accurate as a diver going in?</p>
  <p class="faq-a">For visual condition assessment — corrosion, coating failure, sediment, structural damage — a good ROV inspection with HD video is highly reliable and gives a permanent record. Where hands-on measurement is needed, such as ultrasonic thickness testing at a specific point, manned or confined-space entry is still the more accurate method.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can an ROV inspect a fire water tank without affecting compliance cover?</p>
  <p class="faq-a">Yes — that is one of the main reasons ROV inspection is used for fire tanks. It allows the tank's condition to be assessed and documented without draining it, so the required firefighting water volume stays available throughout the inspection.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do I need to choose one method or the other?</p>
  <p class="faq-a">Not necessarily. Many asset owners use ROV inspection as the routine, low-disruption survey, and only call for manned or confined-space entry when the ROV footage flags something that needs a hands-on measurement or physical test.</p>
</div>

<div class="article-cta">
  <p>Not sure which inspection method fits your tank, your schedule and your compliance obligations? Our engineers can recommend the right approach before you commit to either.</p>
  <a href="/contact" class="cta-btn">Discuss your inspection options</a>
</div>`,
  },
  {
    slug: 'modular-tanks-in-remote-australia-transport-access-and-assembly',
    title: 'Modular Tanks in Remote Australia: Transport, Access and Assembly Realities',
    excerpt:
      'A modular water tank looks simple on a spec sheet. Getting it to a remote site, through the access it actually has, and assembled before the wet season is a different problem entirely.',
    coverImage: 'harsh-env-drone.jpg',
    readTime: '7 min read',
    publishedAt: '2026-08-01T13:00:00.000Z',
    seoTitle: 'Modular Water Tanks for Remote Sites | PC Water',
    seoDescription:
      'Transport, access and assembly are what actually determine whether a modular tank project succeeds in remote Australia. A practical planning guide.',
    tags: [
      ['tag-remote-modular', 'Remote Projects', 'remote-projects'],
      ['tag-tank-installation-modular', 'Tank Installation', 'tank-installation'],
      ['tag-remote-community-modular', 'Remote Community', 'remote-community'],
    ],
    content: `<p class="article-lead">
  On paper, a modular tank is the obvious answer for a remote site: panels instead of a single monolithic vessel, no need for heavy plant to form a shape on site, faster assembly than an equivalent poured or welded tank. In practice, the project succeeds or fails on three things that never appear on the tank's spec sheet — transport, access and the assembly window.
</p>

<div class="article-divider"><span>Transport: the constraint that sets everything else</span></div>

<p>Panel dimensions, pallet weight and load configuration have to be worked backward from what can actually reach the site — not the other way around. Remote routes often carry axle-weight limits, seasonal road closures, single-lane bridges and unsealed sections that rule out standard freight configurations. A modular system chosen for a metro job can be entirely the wrong specification for a site four hours past the last sealed road.</p>

<h3>Freight sequencing matters as much as freight capacity</h3>
<p>Panels, roof structure, liner, fittings and fixings often travel from different suppliers on different schedules. If the sequencing is wrong, a crew can arrive on site with panels but no fixings, or a liner that needs to go in before weather it will not get.</p>

<div class="article-divider"><span>Access: what the site can actually take</span></div>

<h3>Ground-bearing capacity and pad preparation</h3>
<p>A modular tank still needs a prepared, level, adequately bearing pad — and on a remote site, that pad often has to be built with whatever plant can be mobilised there, not what would be used on an urban job. Civil works are frequently the long-lead item, not the tank itself.</p>

<h3>Site access for assembly plant</h3>
<p>Craneage, EWPs and lifting equipment all need their own access and standing area, which is a different footprint from the tank pad. On a constrained or sloped remote site, working out where assembly plant can actually stand is a planning task in its own right, done well before panels arrive.</p>

<figure>
  <img src="${BASE}/harsh-env-drone.jpg" alt="Drone aerial view of a remote water infrastructure site used for logistics and access planning"/>
  <figcaption><strong>Planned from above, first.</strong> Aerial and site survey work identifies access constraints, laydown areas and civil requirements before freight is ever booked.</figcaption>
</figure>

<div class="article-divider"><span>Assembly: racing the season, not just the schedule</span></div>

<p>Remote assembly windows are frequently dictated by weather, not by project management preference — wet-season road closures, extreme heat affecting liner installation, or a narrow dry window are all real constraints on when panels can go up and a liner can be fitted. A program built around an ideal sequence, without margin for freight delay or a missed weather window, is a program that slips.</p>

<blockquote class="article-quotable">
  <p>The tank is rarely the hard part of a remote modular project. Getting the right freight to the right access point in the right window, in that order, is where the project is actually won or lost.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The variables that determine a remote modular tank program before a single panel is fabricated — transport, access and the assembly weather window</span>
</div>

<div class="article-divider"><span>What to lock in before you commit to a modular tank</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Question</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>What is the heaviest, widest load the route can actually carry?</td><td>Sets the panel and pallet configuration before design is finalised</td></tr>
    <tr><td>Is there a seasonal road or river closure on the route?</td><td>Can remove weeks or months from the usable delivery window</td></tr>
    <tr><td>What plant is available on site for pad preparation?</td><td>Civil works are often the true critical path, not the tank build</td></tr>
    <tr><td>Where does assembly plant stand, separate from the tank pad?</td><td>Craneage and EWP access is a distinct footprint requirement</td></tr>
    <tr><td>What is the realistic assembly window before weather turns?</td><td>Drives freight and start-date sequencing back from that date</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Are modular tanks always faster than a poured or welded tank on a remote site?</p>
  <p class="faq-a">Usually, once freight and civil works are properly sequenced — but not automatically. If access constraints force multiple smaller freight movements, or civil works become the critical path, the time saving on assembly itself can be eroded. Planning transport and access first is what protects the schedule advantage.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the biggest cause of delay on remote modular tank projects?</p>
  <p class="faq-a">Freight and access issues discovered after design and fabrication are already committed — a route that cannot take the planned load, a seasonal closure that was not factored into the program, or a site that cannot support assembly plant where expected. These are avoidable with early site and route assessment.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do modular tanks need less civil works than other tank types?</p>
  <p class="faq-a">No — a modular tank still requires a properly engineered, prepared and level bearing pad. What changes is the tank construction method, not the civil works requirement underneath it.</p>
</div>

<div class="article-cta">
  <p>Planning a remote tank project? We coordinate transport, access and assembly as one program, not three separate problems.</p>
  <a href="/contact" class="cta-btn">Discuss your remote project</a>
</div>`,
  },
  {
    slug: 'reading-a-tank-inspection-report-what-the-findings-actually-mean',
    title: 'Reading a Tank Inspection Report: What the Findings Actually Mean',
    excerpt:
      'A tank inspection report is only useful if you can translate its findings into a decision. Here is how to read condition ratings, defect notes and recommendations the way an engineer does.',
    coverImage: 'ticking-inspection.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-01T17:00:00.000Z',
    seoTitle: 'How to Read a Water Tank Inspection Report | PC Water',
    seoDescription:
      'Condition ratings, defect notes and recommendations — a practical guide to reading a water tank inspection report and turning findings into a decision.',
    tags: [
      ['tag-tank-inspection-report', 'Tank Inspection', 'tank-inspection'],
      ['tag-asset-management-report', 'Asset Management', 'asset-management'],
      ['tag-compliance-report', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  An inspection report can run to dozens of pages of photographs, condition ratings and technical notes — and still leave an asset owner unsure what to actually do next. The report is not the deliverable. The decision it supports is. Here is how to read one the way the engineer who wrote it intended.
</p>

<div class="article-divider"><span>Start with the condition rating, not the photos</span></div>

<p>Most inspection reports score the asset, or its components, against a defined condition scale — commonly something like a 1-to-5 rating from "as new" through to "failed / immediate action required." The rating is the report's headline conclusion. Photographs and narrative notes exist to justify that rating, not to replace it. If a report has no clear overall rating, or if the rating and the narrative do not obviously agree, that is worth querying before acting on either.</p>

<h3>Component ratings versus an overall rating</h3>
<p>A well-structured report usually rates the roof, walls, floor, coating, fittings and appurtenances separately, then rolls those up into an overall asset condition. A single poor-condition component — a failed roof seal, for example — can and should drag down the overall rating even if the tank shell itself is sound. Read the component breakdown, not just the summary line.</p>

<figure>
  <img src="${BASE}/ticking-inspection.jpg" alt="Engineer reviewing findings during a water storage tank condition inspection"/>
  <figcaption><strong>The rating is the conclusion.</strong> Photographs and defect notes exist to support the condition rating — not to stand in for it.</figcaption>
</figure>

<div class="article-divider"><span>Understanding defect language</span></div>

<h3>Severity, not just presence</h3>
<p>A report noting "coating disbondment observed" and one noting "coating disbondment, widespread, substrate corrosion visible" describe the same defect type at very different severities. Look for the qualifiers — extent, depth, whether the defect is active or historical — not just whether a defect was found at all.</p>

<h3>"Monitor" versus "action required"</h3>
<p>Competent reports distinguish between defects to note and re-check at the next inspection cycle, and defects that require intervention before then. Confusing the two is the most common way an asset owner under-reacts to a report — treating an "action required" item as routine because it appeared alongside several "monitor" items in the same section.</p>

<blockquote class="article-quotable">
  <p>A good inspection report does not just describe what was found. It tells you, in plain terms, what happens if nothing is done — and by when that stops being an acceptable answer.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">1</span>
  <span class="stat-label">The number of sections in a properly structured report that should tell you what to do next — the recommendations section, which every other section exists to support</span>
</div>

<div class="article-divider"><span>What to check before filing the report away</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>What to look for</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Overall condition rating</td><td>A clear rating against a defined scale, not just descriptive text</td></tr>
    <tr><td>Component-level breakdown</td><td>Roof, walls, floor, coating and fittings rated individually</td></tr>
    <tr><td>Defect severity language</td><td>Extent, depth and whether active or historical, not just presence</td></tr>
    <tr><td>Priority or timeframe on recommendations</td><td>Distinguishes "monitor at next inspection" from "action required now"</td></tr>
    <tr><td>Comparison to the previous inspection</td><td>Shows whether a defect is stable, new, or has worsened</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">What is the most important part of a tank inspection report?</p>
  <p class="faq-a">The recommendations section and the overall condition rating. Everything else — photographs, defect notes, component ratings — exists to support and justify those two conclusions. If those two elements are unclear or missing, the report has not done its job regardless of how detailed the rest of it is.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do I know if a defect needs urgent action or can wait until the next inspection?</p>
  <p class="faq-a">A properly written report will say so directly, usually with a timeframe or priority rating attached to each recommendation. If a report lists defects without indicating urgency, that is a gap worth raising with the inspector rather than guessing at the priority yourself.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Should I compare a new report against the previous inspection?</p>
  <p class="faq-a">Yes — trend is often more informative than a single snapshot. A defect that has stayed stable across two inspection cycles carries a different urgency to the same defect that has visibly worsened, and that comparison is only possible if the previous report is reviewed alongside the current one.</p>
</div>

<div class="article-cta">
  <p>Received an inspection report you would like a second opinion on, or planning your next inspection? Our engineers can walk you through the findings and what they mean for your asset.</p>
  <a href="/contact" class="cta-btn">Talk to our engineers</a>
</div>`,
  },
  {
    slug: 'fire-tank-volume-and-draw-down-getting-the-numbers-right',
    title: 'Fire Tank Volume and Draw-Down: Getting the Numbers Right for AS2419',
    excerpt:
      'A fire water tank that looks full can still fail its purpose if the usable volume, draw-down point and pump suction arrangement are not right. Here is what the numbers actually need to add up to.',
    coverImage: 'fire-tank-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-02T09:00:00.000Z',
    seoTitle: 'Fire Tank Volume and Draw-Down Explained | PC Water',
    seoDescription:
      'Usable volume, draw-down point and pump suction all determine whether a fire water tank actually delivers what AS2419 requires. A practical explainer.',
    tags: [
      ['tag-fire-compliance-volume', 'Fire Compliance', 'fire-compliance'],
      ['tag-compliance-volume', 'Compliance', 'compliance'],
      ['tag-fire-contractors-volume', 'Fire Contractors', 'fire-contractors'],
    ],
    content: `<p class="article-lead">
  A fire water tank's nameplate capacity and its usable firefighting volume are not the same number — and the gap between them is exactly where compliance failures hide. A tank can be structurally sound, full, and still not deliver the volume a fire system was designed around.
</p>

<p>AS2419 (fire hydrant systems) and the fire engineering behind a site's water supply are built on a specific usable volume, drawn from a specific point in the tank, through a suction arrangement sized to deliver it at the required rate. Any one of those three elements being wrong makes the tank's total capacity partly irrelevant to what the fire system can actually access.</p>

<div class="article-divider"><span>Usable volume is not total volume</span></div>

<h3>Why the numbers differ</h3>
<p>A tank's nameplate or as-built volume includes water below the level a pump can practically draw from, and often a nominal freeboard allowance at the top. The usable firefighting volume is what is actually available between the pump's minimum suction level and the tank's normal operating level — routinely less than the headline capacity, sometimes significantly so on tanks with a high or poorly positioned suction point.</p>

<h3>Sediment eats into usable volume quietly</h3>
<p>Sediment accumulation on the tank floor raises the effective floor level without changing the tank's nameplate capacity, silently reducing usable volume year on year. A tank that was correctly sized when commissioned can fall short of its required draw-down purely through years of undetected sediment build-up.</p>

<figure>
  <img src="${BASE}/fire-tank-hero.jpg" alt="Fire water storage tank supplying a hydrant and sprinkler system"/>
  <figcaption><strong>Full is not the same as usable.</strong> A fire tank's compliance depends on the volume it can actually deliver from its suction point, not its total capacity.</figcaption>
</figure>

<div class="article-divider"><span>The suction arrangement matters as much as the volume</span></div>

<p>Pump suction needs a minimum submergence to draw water without entraining air, and a clear path free of sediment or debris around the suction point. A correctly calculated usable volume is only deliverable if the suction arrangement can actually access it at the required flow rate — an undersized or poorly positioned suction line can effectively strand volume the calculation assumed was available.</p>

<blockquote class="article-quotable">
  <p>A fire tank is not being asked "how much water do you hold." It is being asked "how much water can you deliver, from where, at what rate, when it matters." Those are different questions with different answers.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The variables that determine deliverable fire water volume — usable capacity, draw-down point, and suction arrangement — not the tank's nameplate size alone</span>
</div>

<div class="article-divider"><span>What a proper draw-down review checks</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Usable volume versus nameplate/as-built volume</td><td>The compliance figure is usable volume, not total capacity</td></tr>
    <tr><td>Sediment depth at the suction point</td><td>Reduces effective floor level and usable draw-down over time</td></tr>
    <tr><td>Suction line submergence and positioning</td><td>Insufficient submergence risks air entrainment under draw</td></tr>
    <tr><td>Design flow rate versus suction capacity</td><td>Volume is only useful if it can be delivered at the required rate</td></tr>
    <tr><td>Baseline records against current condition</td><td>Confirms whether the as-commissioned figures still hold</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Why is my fire tank's usable volume less than its total capacity?</p>
  <p class="faq-a">Usable volume is measured between the pump's minimum suction level and normal operating level, which excludes the water below suction reach and any freeboard allowance. Sediment build-up on the floor also reduces usable volume over time without changing the tank's nameplate capacity.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do I know if sediment is affecting my fire tank's compliance?</p>
  <p class="faq-a">A condition inspection that measures sediment depth against the suction point's position is the reliable way to check. Sediment accumulation is gradual and not visible from outside the tank, which is why it is one of the more commonly missed causes of a fire tank falling short of its designed draw-down volume.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is fire tank volume checked as part of a standard AS1851 service?</p>
  <p class="faq-a">Routine AS1851 servicing typically confirms the tank is at its operating level, but a full usable-volume and draw-down review — including sediment depth at the suction point — is a more detailed assessment that should be scheduled periodically, particularly for tanks that have not had one since commissioning.</p>
</div>

<div class="article-cta">
  <p>Not certain your fire tank can actually deliver its designed draw-down volume? A condition and draw-down review will confirm it.</p>
  <a href="/contact" class="cta-btn">Request a fire tank review</a>
</div>`,
  },
  {
    slug: 'water-chemistry-and-disinfection-residual-why-it-matters-in-storage',
    title: 'Water Chemistry and Disinfection Residual: Why It Matters Inside the Tank',
    excerpt:
      'Water leaving a treatment plant compliant does not stay that way automatically. What happens to disinfection residual and water chemistry inside a storage tank — and why it is the storage asset’s job to protect it.',
    coverImage: 'water-food-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-02T15:00:00.000Z',
    seoTitle: 'Disinfection Residual in Water Storage Tanks | PC Water',
    seoDescription:
      'Disinfection residual decays inside storage, not just in the network. A practical explanation of water chemistry inside a tank and why storage design and condition matter.',
    tags: [
      ['tag-potable-water-chem', 'Potable Water', 'potable-water'],
      ['tag-water-quality-chem', 'Water Quality', 'water-quality'],
      ['tag-compliance-chem', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  Disinfection residual is treated as a treatment-plant number, but it decays wherever the water sits — and a storage tank, by design, is where water sits longest. A tank in poor condition or with the wrong retention time can undo work the treatment process already did.
</p>

<div class="article-divider"><span>Residual decay does not stop at the plant gate</span></div>

<p>Chlorine or chloramine residual continues to react and decay for as long as water is in contact with pipe walls, tank surfaces, sediment and any organic material present — which means the storage tank is an active part of the disinfection story, not a passive holding vessel downstream of it. Longer retention time in storage means more decay before that water reaches a tap.</p>

<h3>Sediment and biofilm consume residual</h3>
<p>Sediment on a tank floor and biofilm on internal surfaces both exert a disinfectant demand — they consume residual chemically and biologically as water moves past them, faster than clean internal surfaces would. A tank with years of accumulated sediment is quietly working against the treatment process every day it goes uncleaned.</p>

<figure>
  <img src="${BASE}/water-food-hero.jpg" alt="Water storage tank supplying treated potable water to a distribution network"/>
  <figcaption><strong>Storage is part of the treatment train.</strong> What happens to water chemistry inside the tank affects what reaches the tap, regardless of how well the plant performed.</figcaption>
</figure>

<div class="article-divider"><span>Retention time is a design and operations question</span></div>

<h3>Short-circuiting and dead zones</h3>
<p>A tank's inlet and outlet positioning determines whether water moves through it evenly or "short-circuits" — taking a fast path from inlet to outlet while leaving pockets of older, more stagnant water elsewhere in the tank. Those stagnant zones lose residual faster and can develop water-quality issues even while the bulk of the tank tests within range.</p>

<h3>Turnover versus tank sizing</h3>
<p>A tank oversized for its demand holds water longer than necessary, giving residual more time to decay before use. Matching storage volume to actual demand — and understanding turnover rate, not just peak capacity — is as much a water-quality decision as it is a supply-planning one.</p>

<blockquote class="article-quotable">
  <p>Treatment gets the water to standard. Storage decides how much of that standard survives to the tap. A tank's condition and hydraulics are a water-chemistry variable, whether or not anyone is tracking them as one.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The internal tank factors that most directly accelerate residual decay — accumulated sediment and biofilm on internal surfaces</span>
</div>

<div class="article-divider"><span>What to check if residual is dropping in storage</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>What it tells you</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sediment depth on the tank floor</td><td>Accumulated sediment exerts disinfectant demand and consumes residual</td></tr>
    <tr><td>Internal surface condition and biofilm presence</td><td>Biofilm on walls and fittings consumes residual continuously</td></tr>
    <tr><td>Inlet/outlet configuration</td><td>Poor positioning causes short-circuiting and stagnant dead zones</td></tr>
    <tr><td>Tank turnover rate versus demand</td><td>Oversized storage increases retention time and residual decay</td></tr>
    <tr><td>Residual testing at multiple points, not just the outlet</td><td>Reveals stagnant zones an outlet-only sample would miss</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Why does my water test compliant at the treatment plant but show low residual downstream?</p>
  <p class="faq-a">Residual decays continuously as water sits in storage and moves through the network — it is not a fixed value from the plant. Sediment, biofilm, long retention time or short-circuiting inside a storage tank are common causes of residual dropping further than expected before it reaches customers.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can cleaning a tank actually improve water quality readings?</p>
  <p class="faq-a">Yes. Removing sediment and biofilm reduces the disinfectant demand those deposits exert, which helps residual last longer through storage and distribution. It is one of the more direct, measurable water-quality improvements a maintenance program can deliver.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is tank size itself a water-quality issue?</p>
  <p class="faq-a">It can be. A tank sized well above actual demand increases retention time, giving disinfection residual more time to decay before the water is used. Matching storage sizing and inlet/outlet configuration to real demand is part of protecting water quality, not just a capacity decision.</p>
</div>

<div class="article-cta">
  <p>Seeing residual or water-quality results you cannot explain from the treatment side? The answer is often inside the storage tank.</p>
  <a href="/contact" class="cta-btn">Talk to our water treatment team</a>
</div>`,
  },
]

// ── IMAGE UPLOAD LIST (unique images referenced) ────────────────────────────────
const imageFiles = [
  'corrosion-rov-inspection.jpg',
  'harsh-env-drone.jpg',
  'ticking-inspection.jpg',
  'fire-tank-hero.jpg',
  'water-food-hero.jpg',
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
