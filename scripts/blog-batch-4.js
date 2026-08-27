/**
 * blog-batch-4.js — authors + integrates 10 more blog posts.
 *
 * Single source of truth for the batch. Two modes:
 *   node scripts/blog-batch-4.js static   -> prints TS entries for
 *                                             lib/cms/static-content.ts (SSG fallback)
 *   node scripts/blog-batch-4.js          -> uploads images + upserts posts to Supabase
 *
 * Images are reused from public/posts (already in the repo).
 */

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

// ── POSTS ─────────────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'water-tank-warranty-claims-what-voids-cover-and-what-doesnt',
    title: 'Water Tank Warranty Claims: What Voids Cover and What Doesn’t',
    excerpt:
      'A tank warranty reads simply until you actually need to claim on it. Here is what typically triggers a valid claim, and what quietly voids cover before you ever get there.',
    coverImage: 'corrosion-coating-comparison.jpg',
    readTime: '6 min read',
    publishedAt: '2026-08-30T09:00:00.000Z',
    seoTitle: 'Water Tank Warranty Claims Explained | PC Water',
    seoDescription:
      'Maintenance gaps, unapproved modifications and missing records are common reasons water tank warranty claims are refused. A practical guide to what actually protects your cover.',
    tags: [
      ['tag-asset-management-warranty', 'Asset Management', 'asset-management'],
      ['tag-tank-maintenance-warranty', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-compliance-warranty', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  A tank warranty feels like a straightforward promise at the point of purchase. The gap between that promise and an actual paid claim is usually maintenance records, not fine print — and that gap is invisible until the day a defect shows up and the claim gets tested.
</p>

<p>Manufacturer and installer warranties on water tanks are conditional, not unconditional. They cover defects in material and workmanship under normal use and proper maintenance — and it is that last qualifier, proper maintenance, that decides more disputed claims than the defect itself.</p>

<div class="article-divider"><span>What typically voids a warranty before a claim is even assessed</span></div>

<h3>Missed or undocumented maintenance</h3>
<p>Most tank warranties are conditional on a defined maintenance schedule — inspection intervals, cleaning frequency, coating recoat cycles. A warranty holder who cannot produce records showing that schedule was followed is in a materially weaker position than one who can, regardless of what actually caused the defect.</p>

<h3>Unapproved modifications or repairs</h3>
<p>Fittings, penetrations or repairs carried out by a party other than the manufacturer or an approved contractor can void warranty on the affected component, and sometimes on the tank as a whole, even where the modification appears unrelated to the eventual defect.</p>

<h3>Operating outside specified conditions</h3>
<p>A tank operated beyond its specified water chemistry range, temperature range, or structural loading (including sediment loading it was never designed to carry) can have its warranty voided on the basis that the failure occurred outside the conditions the warranty was written for.</p>

<figure>
  <img src="${BASE}/corrosion-coating-comparison.jpg" alt="Comparison of coating condition used to support a water tank warranty claim assessment"/>
  <figcaption><strong>The claim is assessed against a condition, not a promise.</strong> Documented maintenance history is what turns a warranty from a marketing statement into an enforceable claim.</figcaption>
</figure>

<div class="article-divider"><span>What actually strengthens a claim</span></div>

<p>A warranty claim moves faster and succeeds more often when the holder can produce a complete maintenance and inspection history, evidence the tank was operated within its specified conditions, and documentation that any modifications were carried out by an approved party. None of this guarantees a claim succeeds — but its absence is one of the most common reasons a legitimate defect ends up disputed rather than simply repaired.</p>

<figure>
  <img src="${BASE}/rpvc-inline.jpg" alt="RPVC liner installation records used to support ongoing water tank warranty compliance"/>
  <figcaption><strong>Keep the paper trail as carefully as the asset.</strong> Installation certificates, inspection reports and maintenance logs are what a warranty claim is actually assessed against.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A warranty is not a guarantee that nothing will go wrong. It is a conditional promise that the condition can be proven — and the proof has to exist before the defect does, not after.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The most common reasons a warranty claim is disputed — missing maintenance records, unapproved modifications, and out-of-specification operation</span>
</div>

<div class="article-divider"><span>Protecting your warranty position</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Practice</th>
      <th>Why it matters for a future claim</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Keep every inspection and maintenance record</td><td>The primary evidence a warranty provider will request</td></tr>
    <tr><td>Use approved contractors for repairs and modifications</td><td>Unapproved work is a common, avoidable reason for a voided claim</td></tr>
    <tr><td>Confirm the tank is operated within its specified conditions</td><td>Establishes the failure occurred within warranty scope</td></tr>
    <tr><td>Read the warranty's maintenance schedule at handover</td><td>Confirms exactly what is required to keep cover valid</td></tr>
    <tr><td>Report suspected defects promptly</td><td>Delayed reporting can itself be grounds to dispute a claim</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Does a missed inspection automatically void a warranty?</p>
  <p class="faq-a">Not necessarily automatically, but it weakens the claim significantly. Warranty providers assess claims against the maintenance schedule specified in the warranty terms, and a documented gap gives them grounds to argue the defect resulted from inadequate maintenance rather than a covered fault.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can I use my own contractor for tank maintenance without voiding the warranty?</p>
  <p class="faq-a">It depends on the specific warranty terms — some require an approved contractor for the work to count toward warranty compliance, while others simply require the work be documented to a defined standard. Checking this before engaging a contractor is worth the few minutes it takes.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What should I do the moment I suspect a warrantable defect?</p>
  <p class="faq-a">Document it — photographs, date, description — and report it to the warranty provider promptly rather than waiting to see if it worsens. Prompt reporting with clear documentation is one of the strongest things a claimant can do to support a smooth claim outcome.</p>
</div>

<div class="article-cta">
  <p>Unsure whether your maintenance history would support a warranty claim if you needed one? Worth confirming before you need to find out.</p>
  <a href="/contact" class="cta-btn">Review your maintenance records with us</a>
</div>`,
  },
  {
    slug: 'mining-and-resources-water-storage-compliance-beyond-standard-as-requirements',
    title: 'Mining and Resources Water Storage: Compliance Beyond the Standard AS Requirements',
    excerpt:
      'Mining and resources sites carry water compliance obligations most standard tank guidance does not cover — process water separation, site-specific risk assessments and regulator reporting among them.',
    coverImage: 'harsh-env-drone.jpg',
    readTime: '7 min read',
    publishedAt: '2026-08-31T09:00:00.000Z',
    seoTitle: 'Mining Water Storage Compliance Australia | PC Water',
    seoDescription:
      'Mining and resources water storage carries compliance obligations beyond standard Australian Standards — process separation, site risk assessment and regulator reporting explained.',
    tags: [
      ['tag-mining-resources', 'Mining & Resources', 'mining-resources'],
      ['tag-compliance-mining', 'Compliance', 'compliance'],
      ['tag-remote-projects-mining', 'Remote Projects', 'remote-projects'],
    ],
    content: `<p class="article-lead">
  A mine site's water storage compliance obligations do not stop at AS2304 or AS4020. Site-specific licence conditions, process water separation requirements, and regulator reporting sit on top of the standard framework — and treating a mining site's tanks like a standard commercial installation misses that layer entirely.
</p>

<div class="article-divider"><span>Where mining compliance goes beyond standard requirements</span></div>

<h3>Process water and potable water must stay genuinely separate</h3>
<p>Mine sites frequently operate multiple water systems — potable, process, dust suppression, fire — often supplied from different sources with very different quality requirements. Cross-connection risk between these systems is a specific compliance and safety concern that a standard commercial or residential tank installation rarely has to consider, and it needs to be actively designed against, not assumed away.</p>

<h3>Site-specific environmental licence conditions</h3>
<p>Most mining operations hold an environmental authority or licence with conditions specific to that site — often including water storage, containment and discharge requirements that go beyond generic Australian Standards. Compliance on a mine site means meeting the licence conditions specifically, not just the general standard.</p>

<h3>Regulator reporting obligations</h3>
<p>Water storage and quality data on a mining site is frequently subject to reporting obligations to state mining or environmental regulators — obligations that a standard commercial tank owner simply does not have. Tank monitoring and record-keeping needs to be structured to support that reporting, not bolted on afterward.</p>

<figure>
  <img src="${BASE}/harsh-env-drone.jpg" alt="Aerial view of water storage infrastructure at a remote mining and resources site"/>
  <figcaption><strong>More systems, more separation requirements.</strong> Mining sites typically run several parallel water systems that each carry their own compliance obligations.</figcaption>
</figure>

<div class="article-divider"><span>Remote and harsh-environment factors compound the compliance picture</span></div>

<p>Many mining and resources sites are also remote, which means the harsh-environment factors — extreme temperature swings, dust ingress, limited access for maintenance — sit on top of the compliance obligations rather than replacing them. A tank that meets AS2304 on paper still needs to be maintainable under those site conditions to actually stay compliant over its service life, not just at commissioning.</p>

<figure>
  <img src="${BASE}/harsh-env-hero.jpg" alt="Water storage tank installation at a remote resources site in harsh environmental conditions"/>
  <figcaption><strong>Compliance has to survive the environment it's in.</strong> A tank specified correctly on paper still needs to be maintainable under real site conditions to stay compliant.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>Mining water compliance is not a stricter version of standard tank compliance — it is an additional layer, built on licence conditions and reporting obligations that are specific to that site and that mine's approvals. Assuming the standard framework covers it is how gaps get missed.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The compliance layers a mining site's water storage typically needs to satisfy at once — Australian Standards, site environmental licence conditions, and regulator reporting</span>
</div>

<div class="article-divider"><span>What to confirm on a mining or resources site</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Cross-connection risk between potable, process and other systems</td><td>A safety and compliance risk specific to multi-system mining sites</td></tr>
    <tr><td>Site environmental licence conditions for water storage</td><td>Often more specific and stringent than general Australian Standards</td></tr>
    <tr><td>Regulator reporting requirements for water quality and storage</td><td>Determines what monitoring and record-keeping the site must maintain</td></tr>
    <tr><td>Maintenance access under real site conditions</td><td>Compliance depends on the tank remaining maintainable over its service life</td></tr>
    <tr><td>Water source separation and containment design</td><td>Prevents contamination between systems with very different quality needs</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Is AS2304 or AS4020 compliance enough for a mine site's water storage?</p>
  <p class="faq-a">It is a necessary baseline, but usually not sufficient on its own. Most mining operations carry site-specific environmental licence conditions and regulator reporting obligations that sit on top of the general Australian Standards, and these need to be confirmed and designed for separately.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Why is cross-connection risk a bigger issue on mining sites?</p>
  <p class="faq-a">Because mine sites typically operate several parallel water systems — potable, process, dust suppression, fire — often from different sources and with different quality requirements. The more systems on one site, the more points at which an accidental cross-connection could contaminate a system that needs to remain protected.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Who is responsible for confirming licence conditions are being met for water storage?</p>
  <p class="faq-a">Ultimately the site operator, but the water infrastructure design and maintenance program should be built to actively support those licence conditions rather than assuming a standard installation will automatically satisfy them. This is best confirmed at design stage, working from the site's actual licence documentation.</p>
</div>

<div class="article-cta">
  <p>Managing water storage compliance on a mining or resources site? We work to the site-specific requirements, not just the general standard.</p>
  <a href="/contact" class="cta-btn">Discuss your site's compliance requirements</a>
</div>`,
  },
  {
    slug: 'water-storage-for-bushfire-prone-properties-static-water-supply-explained',
    title: 'Water Storage for Bushfire-Prone Properties: Static Water Supply Requirements Explained',
    excerpt:
      'A static water supply tank for bushfire protection has specific requirements that a standard rainwater or potable tank does not meet by default. What actually needs to be right.',
    coverImage: 'fire-tank-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-09-01T09:00:00.000Z',
    seoTitle: 'Bushfire Static Water Supply Tanks Explained | PC Water',
    seoDescription:
      'Static water supply requirements for bushfire-prone properties cover volume, fitting standards and accessibility — not just having a tank on site. A practical explainer.',
    tags: [
      ['tag-fire-compliance-bushfire', 'Fire Compliance', 'fire-compliance'],
      ['tag-remote-community-bushfire', 'Remote Community', 'remote-community'],
      ['tag-tank-installation-bushfire', 'Tank Installation', 'tank-installation'],
    ],
    content: `<p class="article-lead">
  Having a water tank on a bushfire-prone property is not the same as having a compliant static water supply. Fire authorities specify minimum volume, fitting types and accessibility requirements precisely because a tank that cannot be reliably accessed and drawn from under fire conditions provides false confidence, not real protection.
</p>

<div class="article-divider"><span>What a compliant static water supply actually requires</span></div>

<h3>Minimum dedicated volume</h3>
<p>Building and planning requirements for bushfire-prone areas typically specify a minimum volume of water that must be available specifically for firefighting purposes — separate from, or a defined reserved portion of, any general household or stock water storage. A tank that is regularly drawn down for domestic use below that reserved level does not meet the intent of the requirement even if its nameplate capacity looks adequate on paper.</p>

<h3>Fire brigade-compatible fittings</h3>
<p>The outlet needs a fitting compatible with the fire service's equipment — typically a specified coupling type and size positioned for a pump to connect and draw water under emergency conditions, not a standard domestic tap or garden fitting that firefighting equipment cannot connect to.</p>

<h3>All-weather access for a fire appliance</h3>
<p>The tank needs to be positioned and the surrounding access maintained so that a fire appliance can reach it and draw water even under the access-degrading conditions a bushfire event itself can create — overgrown vegetation, damaged fencing, or approach tracks that are only ever tested when it is too late to fix them.</p>

<figure>
  <img src="${BASE}/fire-tank-hero.jpg" alt="Static water supply tank for bushfire protection with a fire brigade-compatible outlet fitting"/>
  <figcaption><strong>The right fitting, in the right place.</strong> A static water supply tank needs an outlet fire appliances can actually connect to and draw from under emergency conditions.</figcaption>
</figure>

<div class="article-divider"><span>Why "we have a tank" is not the same as compliant</span></div>

<p>Many rural and bushfire-prone properties already have substantial water storage for domestic or stock purposes — and property owners reasonably assume that storage doubles as bushfire protection. Without the reserved volume, correct fitting and maintained access specifically confirmed, that assumption is often wrong, and it is precisely the assumption that gets tested during an actual fire event rather than during a routine check.</p>

<figure>
  <img src="${BASE}/fire-tank-corroded.jpg" alt="Neglected static water supply tank showing corrosion that could compromise bushfire water availability"/>
  <figcaption><strong>Condition matters as much as volume.</strong> A tank that has not been inspected can fail to deliver its reserved volume exactly when it is needed most.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A static water supply is only as good as the moment it is actually needed — which is the worst possible time to discover the fitting is wrong, the access is blocked, or the reserved volume was quietly drawn down months ago.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The elements that make a tank an actual compliant static water supply — reserved volume, the right outlet fitting, and maintained appliance access</span>
</div>

<div class="article-divider"><span>Checking your static water supply</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Reserved firefighting volume confirmed and protected from domestic drawdown</td><td>The tank must actually hold the required volume when needed, not on paper only</td></tr>
    <tr><td>Correct fire brigade coupling fitted and accessible</td><td>Fire appliances cannot draw water through an incompatible fitting</td></tr>
    <tr><td>Clear, maintained access for a fire appliance</td><td>Access can degrade in exactly the conditions that make the supply necessary</td></tr>
    <tr><td>Tank structural and coating condition inspected</td><td>A failing tank may not hold its rated volume when it matters most</td></tr>
    <tr><td>Signage identifying the static water supply location</td><td>Helps fire crews locate the supply quickly under pressure</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Can my existing rainwater tank be used as a bushfire static water supply?</p>
  <p class="faq-a">Potentially, but it needs to meet the specific requirements — reserved volume, correct fire brigade fitting and appliance access — rather than simply being assumed adequate because it holds water. A compliance check against your local fire authority's requirements will confirm what, if anything, needs to change.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How much water is typically required for a bushfire static water supply?</p>
  <p class="faq-a">Requirements vary by state, local council and the property's specific bushfire risk rating, so the figure needs to be confirmed against the applicable planning and building requirements for your property rather than assumed from a general rule of thumb.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Who checks that a static water supply is actually compliant?</p>
  <p class="faq-a">This is typically confirmed at building approval stage for new developments, but existing properties benefit from a periodic compliance check, particularly if the tank's condition, fittings or site access have changed since it was last assessed.</p>
</div>

<div class="article-cta">
  <p>Not certain your property's water storage meets bushfire static water supply requirements? A compliance check will confirm exactly what's needed.</p>
  <a href="/contact" class="cta-btn">Request a static water supply assessment</a>
</div>`,
  },
  {
    slug: 'water-tank-level-monitoring-and-scada-integration-what-to-specify',
    title: 'Water Tank Level Monitoring and SCADA Integration: What to Specify',
    excerpt:
      'A level sensor bolted onto a tank is not the same as a monitoring system that actually tells an operator what they need to know, when they need to know it. What good specification looks like.',
    coverImage: 'rov-sediment-measurement.png',
    readTime: '6 min read',
    publishedAt: '2026-09-02T09:00:00.000Z',
    seoTitle: 'Water Tank Level Monitoring and SCADA Explained | PC Water',
    seoDescription:
      'Sensor type, alarm thresholds and communication reliability all determine whether a tank monitoring system actually works when it matters. A specification guide.',
    tags: [
      ['tag-technology-scada', 'Technology', 'technology'],
      ['tag-tank-inspection-scada', 'Tank Inspection', 'tank-inspection'],
      ['tag-asset-management-scada', 'Asset Management', 'asset-management'],
    ],
    content: `<p class="article-lead">
  Level monitoring sounds like a simple problem — measure the water, report the number. In practice, sensor choice, alarm logic and communication reliability determine whether a monitoring system gives an operator genuine early warning, or a false sense of visibility that fails exactly when a real event occurs.
</p>

<div class="article-divider"><span>Sensor type matters more than most specifications acknowledge</span></div>

<h3>Matching the sensor to the tank and the water</h3>
<p>Ultrasonic, radar, hydrostatic pressure and float-based sensors each have different failure modes and different suitability depending on tank geometry, internal obstructions, and water condition. A sensor chosen without regard to the specific tank — turbulence at the inlet, condensation inside the headspace, fittings that could obstruct an ultrasonic beam — can produce readings that look plausible while being systematically wrong.</p>

<h3>Redundancy for critical assets</h3>
<p>A fire tank or a sole potable supply for a community is a poor candidate for single-sensor monitoring with no independent check. A secondary sensor, or a simple physical level indicator as a manual cross-check, protects against the monitoring system itself becoming a single point of failure.</p>

<figure>
  <img src="${BASE}/rov-sediment-measurement.png" alt="Water level and sediment measurement equipment used in a monitored water storage tank"/>
  <figcaption><strong>Measurement is only useful if it is trustworthy.</strong> Sensor choice and placement determine whether monitoring data reflects real tank conditions.</figcaption>
</figure>

<div class="article-divider"><span>Alarm logic and communication are where systems actually earn their value</span></div>

<h3>Alarm thresholds that mean something</h3>
<p>A monitoring system with a single low-level alarm set arbitrarily close to empty gives an operator almost no time to respond. Properly specified alarm logic includes multiple thresholds — an early warning level that allows planned response, and a critical level that demands immediate action — rather than one late alarm that arrives too close to a real supply failure.</p>

<h3>Communication reliability, especially on remote sites</h3>
<p>A monitoring system is only as good as its ability to actually get an alarm to someone. On remote sites, cellular or satellite communication reliability, backup power for the monitoring equipment itself, and a clear escalation path if a report is missed all need to be specified — not assumed to work because a demonstration worked once on a good connection day.</p>

<figure>
  <img src="${BASE}/corrosion-rov-inspection.jpg" alt="Remote inspection technology used alongside level monitoring to assess water tank condition"/>
  <figcaption><strong>Monitoring complements inspection, it does not replace it.</strong> Level data tells you volume; it does not tell you condition — both are needed for a complete asset picture.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A monitoring system that reports a plausible number is not the same as one that reports a trustworthy number. The difference is entirely in the sensor selection, the alarm logic, and whether the communication path has been tested under the conditions it will actually operate in — not in the dashboard.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The specification decisions that actually determine monitoring reliability — sensor type matched to the tank, tiered alarm thresholds, and tested communication reliability</span>
</div>

<div class="article-divider"><span>Specifying a tank monitoring system</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Consideration</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Sensor type matched to tank geometry and water condition</td><td>The wrong sensor for the conditions can produce plausible but wrong readings</td></tr>
    <tr><td>Multiple, tiered alarm thresholds</td><td>Gives operators time to respond before a critical level is reached</td></tr>
    <tr><td>Redundancy for critical or sole-supply assets</td><td>Prevents the monitoring system itself becoming a single point of failure</td></tr>
    <tr><td>Communication reliability under actual site conditions</td><td>An alarm that cannot be delivered provides no protection</td></tr>
    <tr><td>Backup power for the monitoring equipment</td><td>A power outage should not also mean losing visibility of tank level</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Which type of level sensor is best for a water tank?</p>
  <p class="faq-a">There is no universally "best" sensor — the right choice depends on the tank's geometry, internal obstructions, and the water's condition. A sensor that works well on a clean, still potable tank may not suit a tank with turbulent inflow or heavy sediment, which is why the sensor should be specified against the specific tank, not chosen generically.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do critical water tanks need more than one level sensor?</p>
  <p class="faq-a">For high-consequence assets — fire tanks, sole community potable supplies — redundancy is worth the additional cost, since it protects against the monitoring system itself failing silently and leaving an operator with no visibility at exactly the wrong moment.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can level monitoring replace physical tank inspection?</p>
  <p class="faq-a">No. Level monitoring reports volume, not condition — it will not detect corrosion, sediment build-up or coating failure. It is a complement to periodic physical inspection, not a substitute for it.</p>
</div>

<div class="article-cta">
  <p>Specifying or troubleshooting a tank level monitoring system? We can help make sure it actually delivers reliable visibility, not just a plausible-looking dashboard.</p>
  <a href="/contact" class="cta-btn">Talk to our team about monitoring</a>
</div>`,
  },
  {
    slug: 'rainwater-harvesting-vs-reticulated-backup-storage-choosing-the-right-system',
    title: 'Rainwater Harvesting Tanks vs Reticulated Backup Storage: Choosing the Right System',
    excerpt:
      'Both systems store water for when you need it, but they solve different problems. Confusing the two leads to storage that is sized and configured for the wrong purpose.',
    coverImage: 'water-food-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-09-03T09:00:00.000Z',
    seoTitle: 'Rainwater Harvesting vs Backup Water Storage | PC Water',
    seoDescription:
      'Rainwater harvesting tanks and reticulated backup storage answer different needs. A practical guide to which system — or combination — fits your situation.',
    tags: [
      ['tag-potable-water-rainwater', 'Potable Water', 'potable-water'],
      ['tag-remote-community-rainwater', 'Remote Community', 'remote-community'],
      ['tag-tank-installation-rainwater', 'Tank Installation', 'tank-installation'],
    ],
    content: `<p class="article-lead">
  Rainwater harvesting and reticulated backup storage both involve a tank, and both are commonly described as "water storage" — but they are solving fundamentally different problems, sized against different demand patterns, and specified against different risks.
</p>

<div class="article-divider"><span>What each system is actually for</span></div>

<h3>Rainwater harvesting: supplementing or replacing a primary supply</h3>
<p>A rainwater harvesting system captures and stores roof runoff to reduce or replace reliance on a reticulated main supply, typically sized against roof catchment area, expected rainfall pattern, and the demand it needs to offset. Its reliability depends on rainfall — a dry period reduces the system's contribution regardless of tank size.</p>

<h3>Reticulated backup storage: continuity when the main supply fails</h3>
<p>Backup storage exists to bridge a gap when the primary reticulated supply is interrupted — a mains failure, a scheduled outage, or an emergency event. It is sized against expected demand during an outage of a defined duration, not against rainfall, and its value depends entirely on that stored volume being available and protected, independent of weather.</p>

<figure>
  <img src="${BASE}/water-food-hero.jpg" alt="Water storage tank supplying a property's potable water needs"/>
  <figcaption><strong>Same shape, different job.</strong> A rainwater harvesting tank and a backup storage tank can look identical while serving entirely different purposes in a property's water strategy.</figcaption>
</figure>

<div class="article-divider"><span>Where confusing the two goes wrong</span></div>

<h3>Sizing against the wrong demand pattern</h3>
<p>A rainwater tank sized purely against average annual rainfall will not necessarily provide the guaranteed volume backup storage needs to deliver during an outage — the two sizing calculations are answering different questions and should not be substituted for each other.</p>

<h3>Assuming one system covers both risks</h3>
<p>A property relying solely on rainwater harvesting has no protection against a prolonged dry period; a property relying solely on reticulated supply with no backup has no protection against a mains outage. Many sites — particularly remote or regional ones — genuinely need both, configured to work together rather than as substitutes for each other.</p>

<figure>
  <img src="${BASE}/sector-hero.jpg" alt="Combined water storage system serving both rainwater harvesting and backup supply functions"/>
  <figcaption><strong>Often the answer is both, working together.</strong> A properly configured system can harvest rainwater as the primary offset while reserving a defined backup volume for supply interruption.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>The question is not "rainwater tank or backup tank" — it is what specific risk each part of your water strategy is meant to cover. Get that clear first, and the sizing and configuration follow naturally.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The distinct risks a property's water storage strategy needs to consider separately — rainfall variability, and reticulated supply interruption</span>
</div>

<div class="article-divider"><span>Choosing the right system for your situation</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Situation</th>
      <th>Likely fit</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Reduce reliance on mains supply, no outage protection needed</td><td>Rainwater harvesting, sized to roof catchment and demand offset</td></tr>
    <tr><td>Protect against mains outages, reliable rainfall not assumed</td><td>Reticulated backup storage, sized to outage duration and demand</td></tr>
    <tr><td>Remote or regional site with both rainfall variability and outage risk</td><td>Combined system, configured with a clearly reserved backup volume</td></tr>
    <tr><td>Fire compliance requirement alongside general water strategy</td><td>Dedicated, separately reserved fire volume — not shared with general backup</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Can one tank serve as both a rainwater harvesting system and a backup water supply?</p>
  <p class="faq-a">It can, but only if it is specifically designed to — with a reserved minimum volume protected from general use, separate from the portion drawn down for everyday demand. Without that reservation, a single tank tends to end up providing neither function reliably.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How is backup storage volume calculated, if not from rainfall data?</p>
  <p class="faq-a">It is calculated from expected demand during a defined outage duration — how much water the property or site needs per day, multiplied by how many days of interruption the storage needs to bridge. This is a demand-and-duration calculation, independent of local rainfall patterns.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is rainwater harvesting a reliable water source on its own for a remote property?</p>
  <p class="faq-a">It depends heavily on local rainfall reliability and the property's demand. In areas with variable or seasonal rainfall, rainwater harvesting is often best paired with a backup or supplementary source rather than relied on exclusively, particularly for essential or continuous demand.</p>
</div>

<div class="article-cta">
  <p>Not sure whether your property needs rainwater harvesting, backup storage, or both? We can help size a system against your actual risk.</p>
  <a href="/contact" class="cta-btn">Discuss your water storage strategy</a>
</div>`,
  },
  {
    slug: 'water-tank-decommissioning-what-proper-removal-and-site-remediation-involves',
    title: 'Water Tank Decommissioning: What Proper Removal and Site Remediation Involves',
    excerpt:
      'Taking a water tank out of service is not as simple as draining it and walking away. Residual contamination, structural hazards and site remediation all need to be managed properly.',
    coverImage: 'sediment-tank-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-09-04T09:00:00.000Z',
    seoTitle: 'Water Tank Decommissioning and Removal | PC Water',
    seoDescription:
      'Decommissioning a water tank properly means managing residual sediment, structural hazards and site remediation — not just draining and demolishing. A practical guide.',
    tags: [
      ['tag-asset-management-decommission', 'Asset Management', 'asset-management'],
      ['tag-tank-maintenance-decommission', 'Tank Maintenance', 'tank-maintenance'],
      ['tag-compliance-decommission', 'Compliance', 'compliance'],
    ],
    content: `<p class="article-lead">
  A tank being taken out of service is often the least-planned event in its entire life cycle. Design, installation and maintenance are usually well documented; decommissioning is too often treated as "drain it and pull it out" — which is exactly how avoidable contamination, safety and disposal problems occur.
</p>

<div class="article-divider"><span>What proper decommissioning actually manages</span></div>

<h3>Residual sediment and water quality hazards</h3>
<p>Years of accumulated sediment, and any residual disinfection chemicals, need to be identified, sampled where appropriate, and disposed of correctly — not simply flushed to stormwater or left in situ on the assumption that an empty tank is a clean tank.</p>

<h3>Structural and confined space hazards during removal</h3>
<p>A tank being decommissioned is still, until the moment it is fully removed, a structure with confined space characteristics and potential structural instability once cutting or dismantling begins. Decommissioning work needs the same safety planning as any other confined space or demolition task — it is not exempt because the tank is "finished."</p>

<h3>Site remediation once the tank is gone</h3>
<p>Removing the tank often reveals the condition of the pad, foundation and surrounding ground beneath it — including any contamination from historical leaks, or ground conditions that need remediation before the site can be repurposed. Assuming the site is clear simply because the tank is gone can leave a genuine problem unaddressed.</p>

<figure>
  <img src="${BASE}/sediment-tank-hero.jpg" alt="Water storage tank being prepared for decommissioning and removal"/>
  <figcaption><strong>Decommissioning starts with what's inside, not just the shell.</strong> Residual sediment and water quality hazards need to be managed before removal work begins.</figcaption>
</figure>

<div class="article-divider"><span>Why this matters even for a tank "just being replaced"</span></div>

<p>Where an old tank is being replaced by a new one on the same site, it is tempting to treat the old tank's removal as a simple logistics step ahead of the new installation. The ground beneath the old tank is exactly where the new tank's foundation will need to perform — so any contamination, settlement or structural issue revealed during decommissioning is directly relevant to the new installation's success, not just historical housekeeping.</p>

<figure>
  <img src="${BASE}/tank-interior-sediment.jpg" alt="Sediment accumulation inside a water tank ahead of decommissioning and removal"/>
  <figcaption><strong>What's inside becomes a disposal question.</strong> Accumulated sediment and residual chemicals need proper characterisation and disposal, not just removal.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A tank's decommissioning is the last chance to manage its accumulated history responsibly — the sediment, the residual chemicals, the ground beneath it. Skipping that step does not make the history disappear; it just defers the problem to whoever inherits the site next.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The elements a properly managed decommissioning addresses — residual contents, structural and confined space safety, and site condition beneath the tank</span>
</div>

<div class="article-divider"><span>Before decommissioning a water tank</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Step</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Characterise and properly dispose of residual sediment</td><td>Prevents contamination from years of accumulated deposits</td></tr>
    <tr><td>Apply confined space and demolition safety planning</td><td>The tank remains hazardous until fully and safely removed</td></tr>
    <tr><td>Inspect the foundation and ground once the tank is removed</td><td>Reveals settlement or contamination that needs remediation</td></tr>
    <tr><td>Confirm disposal pathway for tank materials</td><td>Steel, concrete and liner materials may have different disposal requirements</td></tr>
    <tr><td>Document the decommissioning for site records</td><td>Supports future site history and any subsequent land use planning</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Do I need a specialist to decommission a water tank, or can it just be drained and demolished?</p>
  <p class="faq-a">Proper decommissioning involves characterising and disposing of residual contents correctly, managing confined space and structural hazards during removal, and assessing the site once the tank is gone — tasks that benefit from the same expertise used to install or maintain the tank, not a general demolition approach alone.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is site remediation always needed after removing an old tank?</p>
  <p class="faq-a">Not always, but it should always be checked. Foundation settlement or historical contamination beneath a tank is not visible until the tank is removed, and confirming ground condition at that point protects both the site's future use and any new installation planned for the same location.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What happens to the sediment removed during tank decommissioning?</p>
  <p class="faq-a">It needs to be characterised and disposed of through an appropriate, compliant pathway — the same consideration that applies to sediment removed during a routine tank clean, just at a larger, one-off scale for a full decommissioning.</p>
</div>

<div class="article-cta">
  <p>Planning to decommission or replace an ageing tank? Proper decommissioning protects the site for whatever comes next.</p>
  <a href="/contact" class="cta-btn">Discuss tank decommissioning</a>
</div>`,
  },
  {
    slug: 'as4020-certification-what-it-actually-certifies-on-a-potable-water-tank',
    title: 'AS4020 Certification: What It Actually Certifies on a Potable Water Tank',
    excerpt:
      'AS4020 certification is often quoted as a blanket assurance of safety. What it actually certifies is narrower and more specific — and knowing the difference matters.',
    coverImage: 'rpvc-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-09-05T09:00:00.000Z',
    seoTitle: 'AS4020 Certification for Water Tanks Explained | PC Water',
    seoDescription:
      'AS4020 certifies that a product does not adversely affect drinking water quality — it does not certify structural design or installation. A practical explanation.',
    tags: [
      ['tag-compliance-as4020', 'Compliance', 'compliance'],
      ['tag-potable-water-as4020', 'Potable Water', 'potable-water'],
      ['tag-tank-installation-as4020', 'Tank Installation', 'tank-installation'],
    ],
    content: `<p class="article-lead">
  AS4020 certification appears on tank spec sheets, liner products and fittings as a kind of universal reassurance. What it specifically certifies — that a product in contact with drinking water does not leach harmful substances or otherwise degrade water quality — is narrower than the blanket assurance it is often assumed to provide.
</p>

<div class="article-divider"><span>What AS4020 actually tests and certifies</span></div>

<h3>Product contact with potable water, not the whole system</h3>
<p>AS4020 (Testing of products for use in contact with drinking water) certifies that a specific product or material — a liner, a coating, a fitting, a sealant — meets defined criteria for chemical migration and does not introduce contaminants or unacceptable taste, odour or colour into potable water. It is a materials and product certification, not a certification of an installed system's overall safety or performance.</p>

<h3>What it does not certify</h3>
<p>AS4020 certification of a liner or coating product says nothing about whether that product was correctly installed, whether the tank's structural design is adequate, or whether the completed installation meets AS2304's requirements for potable water storage structures. A perfectly certified product, installed incorrectly, does not deliver a compliant tank.</p>

<figure>
  <img src="${BASE}/rpvc-hero.jpg" alt="RPVC liner material certified to AS4020 for contact with potable drinking water"/>
  <figcaption><strong>The certification is on the product, not the project.</strong> AS4020 confirms a material is safe in contact with drinking water — installation quality is a separate matter entirely.</figcaption>
</figure>

<div class="article-divider"><span>Why this distinction matters in practice</span></div>

<p>A tank owner or specifier who treats "AS4020 certified" as equivalent to "fully compliant potable water tank" can miss the fact that structural adequacy, correct installation, and ongoing maintenance are all separate requirements that AS4020 does not touch. Confirming AS4020 certification on the materials used is necessary, but it is one part of a compliance picture that also depends on structural design standards and installation quality.</p>

<figure>
  <img src="${BASE}/water-food-hatch.jpg" alt="Correctly installed access hatch on a potable water storage tank"/>
  <figcaption><strong>Installation quality sits outside AS4020.</strong> A certified fitting installed incorrectly does not deliver the protection the certification implies.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>AS4020 answers one specific question: does this product harm drinking water quality on contact? It does not answer whether the tank was built right, sized right, or maintained right — and treating the certification as if it does is a common and consequential misreading.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">1</span>
  <span class="stat-label">The specific question AS4020 certification answers — whether a product affects drinking water quality on contact — out of the many questions a fully compliant tank installation needs to answer</span>
</div>

<div class="article-divider"><span>Building a complete compliance picture</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Requirement</th>
      <th>What it covers</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>AS4020 certification</td><td>Materials and products in contact with drinking water do not degrade its quality</td></tr>
    <tr><td>AS2304 (or applicable structural standard)</td><td>Structural design and construction of the potable water storage tank itself</td></tr>
    <tr><td>Correct installation by a qualified contractor</td><td>Ensures certified products actually deliver their intended protection in service</td></tr>
    <tr><td>Ongoing inspection and maintenance</td><td>Confirms the installation continues to protect water quality over time</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">If a liner is AS4020 certified, does that mean my tank is fully compliant?</p>
  <p class="faq-a">Not on its own. AS4020 certifies that the liner material itself does not adversely affect drinking water quality — it does not certify the tank's structural design, the quality of the liner's installation, or ongoing maintenance, all of which are separate requirements for a fully compliant potable water tank.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do all fittings and coatings used in a potable tank need AS4020 certification?</p>
  <p class="faq-a">Any product in direct contact with the stored drinking water should carry appropriate certification for that contact — this includes liners, internal coatings, seals and fittings. It is worth confirming certification for each product individually rather than assuming one certified component covers the whole system.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How can I confirm a product's AS4020 certification is genuine and current?</p>
  <p class="faq-a">Certification should be traceable to a specific product, batch or formulation and issued by a recognised certifying body — ask the supplier or installer to provide current certification documentation rather than relying on a general claim of compliance on marketing material.</p>
</div>

<div class="article-cta">
  <p>Confirming compliance on a potable water tank project? We can help make sure both the materials and the installation meet what's actually required.</p>
  <a href="/contact" class="cta-btn">Talk to us about compliance</a>
</div>`,
  },
  {
    slug: 'water-tank-insurance-and-risk-what-insurers-actually-look-for-after-a-claim',
    title: 'Water Tank Insurance and Risk: What Insurers Actually Look For After a Claim',
    excerpt:
      'A tank failure that triggers an insurance claim gets scrutinised for maintenance history and foreseeability, not just cause. Here is what that scrutiny actually looks for.',
    coverImage: 'ticking-hero.jpg',
    readTime: '6 min read',
    publishedAt: '2026-09-06T09:00:00.000Z',
    seoTitle: 'Water Tank Insurance Claims and Risk | PC Water',
    seoDescription:
      'Maintenance history, foreseeability and documented inspections all affect how a water tank insurance claim is assessed. A practical look at what insurers examine.',
    tags: [
      ['tag-asset-management-insurance', 'Asset Management', 'asset-management'],
      ['tag-compliance-insurance', 'Compliance', 'compliance'],
      ['tag-tank-maintenance-insurance', 'Tank Maintenance', 'tank-maintenance'],
    ],
    content: `<p class="article-lead">
  When a water tank fails and triggers property damage, business interruption or liability, the insurance claim that follows is rarely assessed on cause alone. Insurers and their loss adjusters look closely at whether the failure was foreseeable — and whether reasonable maintenance would have caught it first.
</p>

<div class="article-divider"><span>What "foreseeability" means in a tank failure claim</span></div>

<h3>Was the defect something a routine inspection should have found?</h3>
<p>A sudden, genuinely unforeseeable failure is treated very differently to one that a documented, competent inspection regime would have identified in advance. If a failure traces back to a defect — advanced corrosion, a known coating failure, accumulated sediment affecting structural loading — that a routine inspection would reasonably have caught, insurers can and do argue the loss was foreseeable and preventable, affecting how the claim is assessed.</p>

<h3>Maintenance history as the primary evidence</h3>
<p>Loss adjusters typically request maintenance and inspection records early in a claim. A documented history of regular, competent inspection strongly supports the position that the failure was not a result of neglect. A gap in that history — or no records at all — puts the claimant in a materially weaker position, regardless of the actual cause of the failure.</p>

<figure>
  <img src="${BASE}/ticking-hero.jpg" alt="Water tank inspection records used to support an insurance claim assessment"/>
  <figcaption><strong>The records are the first thing requested.</strong> A documented inspection history is central evidence in how a tank failure insurance claim is assessed.</figcaption>
</figure>

<div class="article-divider"><span>Where this connects to everyday asset management</span></div>

<p>The practical implication is straightforward: the inspection and maintenance regime that protects a tank's condition and compliance is the same regime that protects an insurance position if something does go wrong. Treating inspection as a compliance box-tick, rather than as an ongoing, well-documented practice, weakens both — and the gap is usually only discovered during a claim, when it is too late to fix.</p>

<figure>
  <img src="${BASE}/cleaning-inspection-corrosion.jpg" alt="Corrosion identified during a routine water tank inspection, the kind of finding that supports future claim assessments"/>
  <figcaption><strong>Documented findings work in your favour later.</strong> A recorded defect, tracked and managed, is very different from an undocumented one discovered only after failure.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>An insurer is not asking "did the tank fail." They are asking "should this have been caught first." A documented inspection history is the only evidence that reliably answers that question in the asset owner's favour.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The two things a tank failure insurance claim is typically assessed against — whether the failure was foreseeable, and whether reasonable maintenance was documented</span>
</div>

<div class="article-divider"><span>Protecting your position before a claim is ever needed</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Practice</th>
      <th>Why it matters for a future claim</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Maintain a documented, regular inspection schedule</td><td>The primary evidence that a failure was not foreseeable and preventable</td></tr>
    <tr><td>Act on findings from inspection reports, not just file them</td><td>An unaddressed known defect can undermine a future claim significantly</td></tr>
    <tr><td>Keep records for the tank's full service life, not just recent years</td><td>Long-term maintenance history strengthens the overall claim position</td></tr>
    <tr><td>Confirm insurance policy conditions around maintenance</td><td>Some policies have explicit maintenance conditions attached to cover</td></tr>
    <tr><td>Report and document incidents or near-misses promptly</td><td>Demonstrates active, ongoing asset management to any future assessor</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Can an insurance claim be refused because of poor tank maintenance?</p>
  <p class="faq-a">It can be significantly weakened or disputed if the insurer or loss adjuster determines the failure was foreseeable and would have been caught by reasonable, documented inspection. This is one of the main reasons ongoing inspection records matter well beyond day-to-day compliance.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does having a known, documented defect on record hurt an insurance claim?</p>
  <p class="faq-a">Not necessarily — a documented defect that was appropriately assessed and had a managed response plan is very different, in an insurer's eyes, from an undocumented failure with no evidence it was ever identified. What matters is whether the response to a known finding was reasonable, not whether a defect existed at all.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Should insurance requirements influence how often a tank is inspected?</p>
  <p class="faq-a">It is worth checking your policy's specific conditions, but generally, an inspection regime that meets good asset management practice will also meet or exceed what most insurers expect to see. Building the inspection schedule around actual risk and compliance requirements is a sound approach either way.</p>
</div>

<div class="article-cta">
  <p>Want your maintenance program to actually protect your insurance position, not just your compliance obligations? We can help build a documented inspection regime that does both.</p>
  <a href="/contact" class="cta-btn">Discuss your inspection program</a>
</div>`,
  },
  {
    slug: 'seismic-and-wind-loading-on-water-tanks-why-structural-design-doesnt-stop-at-the-walls',
    title: 'Seismic and Wind Loading on Water Tanks: Why Structural Design Doesn’t Stop at the Walls',
    excerpt:
      'A tank wall thick enough to hold water is not automatically thick enough to survive the dynamic forces of an earthquake or extreme wind event. What that additional design layer covers.',
    coverImage: 'corrosion-hero.jpg',
    readTime: '7 min read',
    publishedAt: '2026-09-07T09:00:00.000Z',
    seoTitle: 'Seismic and Wind Loading on Water Tanks | PC Water',
    seoDescription:
      "Sloshing loads, anchorage and foundation interaction are structural considerations beyond a tank wall's ability to simply hold water. A practical explanation of seismic and wind design.",
    tags: [
      ['tag-tank-installation-seismic', 'Tank Installation', 'tank-installation'],
      ['tag-custom-tank-seismic', 'Custom Tank Design', 'custom-tank-design'],
      ['tag-asset-management-seismic', 'Asset Management', 'asset-management'],
    ],
    content: `<p class="article-lead">
  A tank wall designed to hold a static volume of water is solving a different structural problem to a tank wall designed to survive an earthquake or a design wind event. The dynamic forces involved — sloshing, base shear, overturning moment — require their own analysis, and skipping it is not automatically covered by a wall that is "thick enough."
</p>

<div class="article-divider"><span>What dynamic loading actually adds to the design problem</span></div>

<h3>Sloshing loads during seismic events</h3>
<p>An earthquake does not just shake a tank — it sets the contained water in motion, and that sloshing water exerts dynamic pressure on the tank walls and roof structure that is entirely separate from the static hydrostatic pressure the walls hold under normal conditions. A tank designed only for static loading can be structurally inadequate for the additional dynamic forces sloshing introduces during a seismic event.</p>

<h3>Base shear and overturning moment</h3>
<p>Seismic and extreme wind loading both introduce lateral forces that a tank's anchorage and foundation need to resist — the tendency of the structure to slide (base shear) or tip (overturning moment). This is why anchorage and foundation design are inseparable from tank structural design in seismic or high-wind zones, not an afterthought bolted on once the tank shape is finalised.</p>

<figure>
  <img src="${BASE}/corrosion-hero.jpg" alt="Steel water tank designed with structural anchorage for seismic and wind loading resistance"/>
  <figcaption><strong>Anchorage is part of the structural design, not an add-on.</strong> Resisting base shear and overturning forces depends on how the tank is fixed to its foundation, not just the tank shell itself.</figcaption>
</figure>

<div class="article-divider"><span>Why this is easy to overlook</span></div>

<p>Standard tank products are typically engineered against a defined design load case that may or may not reflect the seismic or wind zone of a specific site. A tank that performs perfectly on a low-risk site can be genuinely under-designed if installed, without site-specific review, on a site with higher seismic activity or extreme wind exposure — a gap that is invisible until an actual event tests it.</p>

<figure>
  <img src="${BASE}/sediment-wall-banding.png" alt="Internal wall structure of a water tank designed to withstand dynamic loading conditions"/>
  <figcaption><strong>The wall does more than hold water.</strong> Structural design for dynamic loading affects wall thickness, bracing and connection detailing beyond what static containment alone would require.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A tank that holds water perfectly well on a calm day tells you nothing about how it performs during the one event its structural design was actually meant to survive. That answer only comes from site-specific seismic and wind analysis, not from the tank's everyday performance.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">The dynamic structural factors static tank design does not automatically cover — sloshing loads, base shear, and overturning moment</span>
</div>

<div class="article-divider"><span>What to confirm for a site's structural adequacy</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Site-specific seismic and wind design category</td><td>Determines the actual loading the tank needs to be designed against</td></tr>
    <tr><td>Sloshing load analysis for seismic-prone sites</td><td>A separate dynamic force not captured by static hydrostatic design</td></tr>
    <tr><td>Anchorage and foundation connection design</td><td>Resists base shear and overturning forces during dynamic events</td></tr>
    <tr><td>Standard product design case versus actual site conditions</td><td>Confirms whether a standard tank is genuinely adequate for the site</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Do all water tanks in Australia need seismic design consideration?</p>
  <p class="faq-a">Requirements vary by location and the relevant design standard's seismic hazard classification for that site. Even in lower seismic hazard areas, it is worth confirming what design category applies rather than assuming a standard product's design case automatically covers the site.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is wind loading only a concern for tall or exposed tanks?</p>
  <p class="faq-a">Wind loading affects tanks of many sizes and configurations, particularly when empty or at low water levels, since an empty or partially full tank behaves differently under wind load than a full one. Site exposure and local wind design category both need to be factored into the structural design, not just tank height.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can an existing tank be assessed for seismic and wind adequacy after installation?</p>
  <p class="faq-a">Yes — a structural review against the site's actual seismic and wind design category can confirm whether an existing installation's anchorage and structural design are adequate, and identify remedial works if a gap is found. This is worth doing particularly for older tanks or sites where the original design basis is unclear.</p>
</div>

<div class="article-cta">
  <p>Specifying a new tank or reviewing an existing one for a seismic or high-wind site? Structural adequacy needs to be confirmed against the actual site conditions.</p>
  <a href="/contact" class="cta-btn">Discuss structural design for your site</a>
</div>`,
  },
  {
    slug: 'data-centre-and-critical-facility-water-storage-redundancy-requirements-explained',
    title: 'Data Centre and Critical Facility Water Storage: Redundancy Requirements Explained',
    excerpt:
      'Cooling water and fire water storage for a data centre or critical facility cannot tolerate a single point of failure. What genuine redundancy actually requires.',
    coverImage: 'sector-inspection.jpg',
    readTime: '6 min read',
    publishedAt: '2026-09-08T09:00:00.000Z',
    seoTitle: 'Data Centre Water Storage Redundancy | PC Water',
    seoDescription:
      "Cooling water continuity and fire compliance both demand genuine redundancy in a data centre or critical facility's water storage. A practical explanation of what that requires.",
    tags: [
      ['tag-industrial-facilities-datacentre', 'Industrial Facilities', 'industrial-facilities'],
      ['tag-project-managed-datacentre', 'Project Delivery', 'project-managed'],
      ['tag-fire-compliance-datacentre', 'Fire Compliance', 'fire-compliance'],
    ],
    content: `<p class="article-lead">
  A data centre or critical facility treats power, cooling and connectivity as redundant systems by default — N+1 or better is the norm, not an upgrade. Water storage supporting cooling and fire systems is frequently specified with far less rigour, despite carrying the same consequence if it fails at the wrong moment.
</p>

<div class="article-divider"><span>Where water storage redundancy actually matters</span></div>

<h3>Cooling water continuity</h3>
<p>Facilities relying on water-based cooling — evaporative cooling towers, chilled water systems with water-cooled chillers — depend on a continuous, reliable water supply to maintain thermal conditions critical equipment needs to keep operating. A single storage tank with no redundant supply path or reserve capacity is a single point of failure in a system that is otherwise designed with none.</p>

<h3>Fire water storage sized and maintained to the facility's actual risk</h3>
<p>A data centre's fire risk profile and the value of continuous operation typically justify fire water storage sized and maintained more rigorously than a standard commercial building — including confirmed usable volume, draw-down capability, and inspection frequency proportional to the consequence of an undetected shortfall.</p>

<figure>
  <img src="${BASE}/sector-inspection.jpg" alt="Water storage tank inspection at a critical industrial or data centre facility"/>
  <figcaption><strong>The same rigour applied to power should apply to water.</strong> Critical facilities already treat power and cooling redundancy seriously — water storage supporting those systems deserves the same discipline.</figcaption>
</figure>

<div class="article-divider"><span>What genuine redundancy requires</span></div>

<p>Redundancy is not simply "a bigger tank." It typically means multiple, independently isolable storage or supply paths so that maintenance, an inspection, or a single tank failure does not interrupt cooling or compromise fire compliance. It also means monitoring and alarm systems sensitive enough to detect a developing supply issue well before it becomes a critical shortfall — consistent with how the rest of a critical facility's infrastructure is typically specified.</p>

<figure>
  <img src="${BASE}/rov-sediment-measurement.png" alt="Monitoring equipment used to track water storage levels at a critical facility"/>
  <figcaption><strong>Visibility is part of redundancy.</strong> A redundant storage system still needs monitoring sensitive enough to catch a developing issue before it becomes a critical failure.</figcaption>
</figure>

<blockquote class="article-quotable">
  <p>A facility that treats power redundancy as non-negotiable and water storage redundancy as optional has a genuine gap in its risk profile — one that only becomes visible during the outage nobody planned for.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">2</span>
  <span class="stat-label">The critical functions data centre water storage typically supports that cannot tolerate a single point of failure — cooling continuity and fire compliance</span>
</div>

<div class="article-divider"><span>Assessing water storage redundancy at a critical facility</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Check</th>
      <th>Why it matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Multiple independently isolable storage or supply paths</td><td>Prevents a single tank issue from interrupting cooling or fire compliance</td></tr>
    <tr><td>Fire water usable volume and draw-down confirmed</td><td>Sized and verified against the facility's actual risk profile, not a generic minimum</td></tr>
    <tr><td>Inspection frequency proportional to consequence</td><td>A critical facility justifies more frequent inspection than a standard commercial site</td></tr>
    <tr><td>Sensitive, redundant monitoring and alarming</td><td>Detects a developing issue before it becomes a critical shortfall</td></tr>
    <tr><td>Maintenance planning that does not require full shutdown</td><td>Redundant paths allow inspection and maintenance without interrupting service</td></tr>
  </tbody>
</table>

<div class="article-faq-item">
  <p class="faq-q">Why does a data centre need more than one water storage tank?</p>
  <p class="faq-a">A single tank represents a single point of failure — if it needs maintenance, develops an issue, or fails, there is no alternative supply path for cooling or fire systems. Multiple, independently isolable tanks or supply paths allow one to be serviced or fail without interrupting the facility's critical functions.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Should fire water storage at a data centre be inspected more often than a standard commercial building?</p>
  <p class="faq-a">Given the consequence of an undetected shortfall at a facility valuing continuous operation highly, more frequent inspection than the standard minimum is a reasonable and common approach — proportional to the facility's actual risk profile rather than the general baseline requirement.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Does water storage redundancy need to match the facility's power redundancy rating (e.g. N+1, 2N)?</p>
  <p class="faq-a">It is a reasonable design principle to apply the same redundancy philosophy across critical systems, including water storage supporting cooling and fire compliance, even though the specific redundancy level may be assessed and justified independently for water infrastructure.</p>
</div>

<div class="article-cta">
  <p>Assessing water storage redundancy for a data centre or critical facility? We can review your current setup against the same rigour applied to your other critical systems.</p>
  <a href="/contact" class="cta-btn">Discuss critical facility water storage</a>
</div>`,
  },
]

// ── IMAGE UPLOAD LIST (unique images referenced) ────────────────────────────────
const imageFiles = [
  'corrosion-coating-comparison.jpg',
  'rpvc-inline.jpg',
  'harsh-env-drone.jpg',
  'harsh-env-hero.jpg',
  'fire-tank-hero.jpg',
  'fire-tank-corroded.jpg',
  'rov-sediment-measurement.png',
  'corrosion-rov-inspection.jpg',
  'water-food-hero.jpg',
  'sector-hero.jpg',
  'sediment-tank-hero.jpg',
  'tank-interior-sediment.jpg',
  'rpvc-hero.jpg',
  'water-food-hatch.jpg',
  'ticking-hero.jpg',
  'cleaning-inspection-corrosion.jpg',
  'corrosion-hero.jpg',
  'sediment-wall-banding.png',
  'sector-inspection.jpg',
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
