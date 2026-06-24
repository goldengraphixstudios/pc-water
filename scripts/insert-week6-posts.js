/**
 * insert-week6-posts.js
 * Uploads images and inserts Week 6.1 (Cleaning Frequency) and Week 6.2
 * (Sediment Depth) blog posts into Supabase.
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SECRET_KEY || ''
)

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

const SRC_CLEAN = 'C:\\Users\\My PC\\Downloads\\new-blog-extract\\Week 6.1 - How Often Should a Water Tank Be Cleaned'
const SRC_SED = 'C:\\Users\\My PC\\Downloads\\new-blog-extract\\Week 6.2 - What 5-15mm of Sediment Actually Looks Like'

const IMAGES_TO_UPLOAD = [
  { localPath: path.join(SRC_CLEAN, '2. tank-interior-sediment.jpg'), storageName: 'tank-interior-sediment.jpg', contentType: 'image/jpeg' },
  { localPath: path.join(SRC_CLEAN, '3. iron-bacteria-fouling.jpg'),  storageName: 'iron-bacteria-fouling.jpg',  contentType: 'image/jpeg' },
  { localPath: path.join(SRC_SED, '2. sediment-three-types.jpg'),    storageName: 'sediment-three-types.jpg',   contentType: 'image/jpeg' },
  { localPath: path.join(SRC_SED, '3. rov-sediment-measurement.png'), storageName: 'rov-sediment-measurement.png', contentType: 'image/png' },
]

// ─── Week 6.1 — How Often Should a Water Tank Be Cleaned ────────────────────
const cleaningFrequencyContent = `<p class="article-lead">
  There is no single correct interval. Any contractor or maintenance guide that gives you a flat "every two years" answer without knowing your source water, tank type, or inspection history is giving you a compliance liability dressed up as a schedule. The honest answer is this: cleaning frequency should be driven by condition, not a calendar.
</p>

<p>This guide gives asset owners - councils, water authorities, property managers, and remote community operators - a practical framework for setting defensible, risk-appropriate cleaning intervals.</p>

<div class="article-divider"><span>Why a fixed schedule is the wrong mental model</span></div>

<p>Fixed-calendar cleaning is administratively convenient but technically flawed. It causes two predictable failure modes: over-cleaning assets that do not need it, which wastes budget and forces unnecessary service disruptions, and under-cleaning assets that do, which leads to water quality failures, regulatory non-compliance, and accelerated structural degradation.</p>

<p>The <strong>Australian Drinking Water Guidelines (ADWG)</strong> do not prescribe a universal cleaning frequency. Neither does <strong>AS 4020</strong>, which governs products in contact with drinking water, set a cleaning interval - it sets compliance thresholds for materials and water quality outcomes. What this means in practice is that the obligation sits with the asset owner to demonstrate that water quality is maintained. Cleaning frequency is one lever; inspection-informed decision-making is the framework.</p>

<blockquote class="article-quotable">
  <p>The question is not how often you clean - it is how you know when cleaning is needed. Inspection findings, not elapsed time, should drive that decision.</p>
</blockquote>

<figure>
  <img src="${BASE}/tank-interior-sediment.jpg" alt="Interior of a GRP panel water tank showing sediment accumulation on the floor and lower walls"/>
  <figcaption><strong>Inspection precedes cleaning.</strong> The internal condition - sediment, biofilm, coating state - is what tells you whether and when a clean is actually required.</figcaption>
</figure>

<div class="article-divider"><span>Typical cleaning intervals by tank type</span></div>

<p>These are evidence-based starting ranges, not hard rules. Treat them as default positions that inspection findings will adjust.</p>

<h3>Potable water distribution tanks (municipal / council-operated)</h3>
<p>Typical interval: 4 to 6 years when source water is treated reticulated supply, turnover is regular, and prior inspections show clean interiors. Councils operating these assets under state water authority oversight should confirm any jurisdiction-specific requirements - some Queensland and WA water authorities have their own guidance that narrows this range.</p>

<h3>Bore water tanks (iron, manganese, high TDS source water)</h3>
<p>Typical interval: 2 to 4 years, often shorter. Iron and manganese accumulate as sediment rapidly, and biological fouling such as iron bacteria can establish within 18 months in warm climates. Remote communities drawing from bores should plan inspections at 18 to 24 months minimum, regardless of cleaning cycle.</p>

<div class="article-pull-stat">
  <span class="stat-num">2 years</span>
  <span class="stat-label">Maximum recommended inspection gap for tanks on bore or untreated surface water supply</span>
</div>

<h3>Rainwater harvesting tanks</h3>
<p>Highly variable - driven by catchment contamination risk (bird activity, leaf litter, first-flush bypass function), tank capacity relative to demand, and climate. In high-rainfall tropical regions, tanks that cycle frequently stay cleaner. In dry inland areas with infrequent rainfall, stagnation accelerates biological growth and sediment accumulation. Inspect at 2 to 3 years; clean based on findings.</p>

<h3>Fire water storage tanks (AS 2304-compliant systems)</h3>
<p>Fire tank cleaning is governed by the service regime under <strong>AS 1851</strong>. Routine service inspections are required annually (Level 1) with more comprehensive inspections at five-year intervals (Level 5). Cleaning is triggered by inspection findings - sediment accumulation, biological growth, degraded coatings, or any condition that could impair system performance. A fire tank that is never drawn down (common in low-demand facilities) accumulates stagnation risk faster than one that cycles regularly. Do not assume a tank is clean because it has not been used.</p>

<div class="article-pull-stat">
  <span class="stat-num">5 years</span>
  <span class="stat-label">AS 1851 Level 5 service interval - the outer boundary for fire tank comprehensive inspection</span>
</div>

<h3>Steel tanks with protective coatings (epoxy or RPVC-lined)</h3>
<p>Coating condition drives cleaning decisions as much as water quality. A tank with an epoxy system showing disbondment, blistering, or holiday defects needs to be taken offline, inspected, cleaned, and recoated - irrespective of when it was last cleaned. Attempting to clean around a failing coating is a short-term measure that accelerates substrate corrosion.</p>

<div class="article-divider"><span>Risk factors that shorten the interval</span></div>

<p>If any of the following apply, your default interval should be compressed - not extended to the upper range:</p>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Risk factor</th>
      <th>Why it shortens the interval</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>High biological oxygen demand source water</td>
      <td>Bores, surface water, or harvested water carry organic load that fuels biofilm and sludge formation</td>
    </tr>
    <tr>
      <td>Tropical or warm ambient temperatures</td>
      <td>Biofilm and algae establish faster above 25°C - particularly relevant for Queensland and NT assets</td>
    </tr>
    <tr>
      <td>Low or intermittent demand</td>
      <td>Tanks sitting near full lose residual disinfection, enabling bacterial growth and taste/odour issues</td>
    </tr>
    <tr>
      <td>Known coating defects or corrosion history</td>
      <td>Structural deterioration accelerates in the presence of sediment and biological fouling</td>
    </tr>
    <tr>
      <td>Prior finding of sediment, biofilm, or discolouration</td>
      <td>The clearest trigger - findings from one cycle directly set the timeline for the next</td>
    </tr>
    <tr>
      <td>Ventilation issues or rooftop tanks</td>
      <td>Inadequate ventilation creates condensation and temperature differentials that promote biological activity</td>
    </tr>
    <tr>
      <td>Remote sites with infrequent monitoring</td>
      <td>Where water quality is not tested regularly, intervals should be tighter, not looser</td>
    </tr>
  </tbody>
</table>

<figure>
  <img src="${BASE}/iron-bacteria-fouling.jpg" alt="Orange-brown iron bacteria fouling on the internal wall of a bore-water supply tank"/>
  <figcaption><strong>Bore supplies foul fast.</strong> Iron-bacteria growth like this can establish within 18 months in warm climates, which is why bore-fed tanks sit at the short end of the interval range.</figcaption>
</figure>

<div class="article-divider"><span>Inspection and cleaning are not separate activities</span></div>

<p>This is the point most fixed-schedule programs miss. Inspection without cleaning is incomplete - you identify the problem but leave it in place. Cleaning without prior inspection is inefficient - you do not know what you are dealing with, and you may miss structural or coating issues that the cleaning process itself could exacerbate.</p>

<p>Best practice is to treat them as paired activities in a single mobilisation:</p>

<h3>1. Pre-clean inspection</h3>
<p>Establish the internal condition, identify coating defects, check sediment depth and character, and look for structural concerns before disturbing anything.</p>

<h3>2. Cleaning</h3>
<p>Apply the method appropriate to the findings - vacuum sediment removal, pressure washing, or ROV-assisted cleaning for tanks that cannot be taken offline.</p>

<h3>3. Post-clean inspection</h3>
<p>Confirm the interior is clean, document residual defects requiring follow-up, and establish the baseline for the next cycle.</p>

<h3>4. Condition report</h3>
<p>The output that sets the next cleaning interval - not the calendar.</p>

<p>Under <strong>AS 4020</strong>, any materials introduced during the cleaning process - products, tools, any surface treatments - must themselves be suitable for use in contact with drinking water. This is not a tick-box; using non-compliant products in a potable system is a water quality event.</p>

<div class="article-divider"><span>What good asset management looks like</span></div>

<p>Councils and water authorities operating large asset portfolios should be building cleaning intervals into their Asset Management Plans based on inspection findings and risk-tier classification - not applying a uniform schedule across all tanks. A 2 ML concrete reservoir on treated reticulated supply in a temperate climate is a different risk profile from a 50 kL GRP tank on a bore supply in Far North Queensland.</p>

<p>For facilities managers operating a single fire water tank or a building's potable supply tank, the principle is simpler: inspect first, then clean on findings. If you have no inspection history, the conservative default is to inspect now and use those findings to set your interval.</p>

<p>PC Water Infrastructure's inspection teams use ROV (Remotely Operated Vehicle) technology for tanks that cannot be taken offline and UAV drone triage for hard-to-access assets - both allow a condition assessment without the cost and disruption of a full dewatering. For tanks where inspection findings are ambiguous or where structural assessment is needed, a combined ROV and diver inspection delivers the highest confidence.</p>

<p>With 20+ years delivering water storage inspection, maintenance, and lining programs across Queensland, WA, and remote Northern Australia - including bore-water community supply and fire protection systems - the answer we consistently give asset owners is the same: let the tank tell you when it needs cleaning.</p>

<div class="article-faq-item">
  <p class="faq-q">How often does a potable water tank need to be cleaned in Australia?</p>
  <p class="faq-a">There is no mandatory universal interval under Australian standards, but the evidence-based default for a treated reticulated supply tank in good condition is 4 to 6 years, confirmed by inspection findings. Tanks on bore or untreated surface water should be inspected at 2 to 3 years and cleaned based on what is found. Your water authority may have jurisdiction-specific requirements that override this range.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Do fire water storage tanks need to be cleaned?</p>
  <p class="faq-a">Yes. Fire tanks serviced under <strong>AS 1851</strong> require annual routine inspections (Level 1) and comprehensive inspections at five-year intervals (Level 5). Cleaning is triggered by inspection findings such as sediment, biological fouling, or coating degradation - not a fixed calendar. A tank that rarely turns over water accumulates water quality and structural risks faster than active supply tanks.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What are the signs a water tank needs cleaning sooner than scheduled?</p>
  <p class="faq-a">Visible sediment or discolouration in the water, reduced water pressure from sediment blocking the outlet, taste or odour complaints, biological fouling identified at a prior inspection, coating defects or corrosion identified visually or by ROV, or a change in source water quality. Any of these should trigger an unscheduled inspection before the next cleaning.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can a water tank be inspected without emptying it?</p>
  <p class="faq-a">Yes. ROV (Remotely Operated Vehicle) inspection allows a full internal condition assessment while the tank remains in service and at operating level. This is particularly valuable for fire tanks, which cannot be taken offline for extended periods, and for large potable tanks where dewatering would disrupt supply. Drone inspection can also triage external and roof-level conditions before committing to a full internal inspection program.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What standard governs cleaning products used in potable water tanks?</p>
  <p class="faq-a"><strong>AS 4020</strong> governs the suitability of any product that contacts a potable supply, including cleaning agents and surface treatments. Using non-compliant products in a potable tank constitutes a water quality event. Always confirm the compliance status of any product with your cleaning contractor before proceeding.</p>
</div>

<div class="article-cta">
  <p>Stop guessing your cleaning interval. A condition-based inspection tells you exactly when each tank needs servicing - and gives you a defensible record for your asset management plan.</p>
  <a href="/contact" class="cta-btn">Set up a condition-based cleaning schedule</a>
</div>`

// ─── Week 6.2 — What 5-15mm of Sediment Actually Looks Like ──────────────────
const sedimentDepthContent = `<p class="article-lead">
  Most asset managers know sediment is bad. Few know exactly how bad 5 to 15mm of it actually is - or what it looks, feels, and smells like when you are standing at the outlet of a 500,000-litre potable storage tank. This post is about that gap.
</p>

<p>The 5 to 15mm band is not arbitrary. It is the practical action threshold that separates background dust from a water quality risk requiring immediate intervention. Here is how to recognise it, measure it, and understand what it means for your compliance obligations under the <strong>Australian Drinking Water Guidelines (ADWG)</strong> and <strong>AS 4020</strong>.</p>

<div class="article-divider"><span>The three types of sediment</span></div>

<p>Before you can assess depth, you need to know what you are looking at. Sediment in potable tanks is not a single substance. It falls into roughly three categories, each with distinct visual and sensory characteristics.</p>

<h3>Fine silicate silt (light grey to white)</h3>
<p>This is the most common sediment in concrete or GRP reservoirs. It looks like talcum powder - pale, almost chalky, and extremely fine. Below 5mm it sits in a thin, barely-visible film across the floor. When disturbed by a probe or ROV thruster wash, it lifts in a slow-rising cloud that hangs in suspension for minutes. Smell is minimal - faintly earthy at most. This type is largely inert at low depths but becomes a turbidity and disinfectant demand problem once it builds past the action threshold.</p>

<h3>Iron and manganese precipitate (orange-brown to dark rust)</h3>
<p>Common in steel tanks, older bolted panel systems, or any tank drawing water with elevated iron from the distribution network. Colour ranges from rust-orange to a deep brown-black depending on oxidation state. Texture under a probe is more granular than silt - slightly gritty, almost like wet river sand at the coarser end. It stains tank floors permanently and can strip residual chlorine rapidly. Even 3 to 4mm of iron-heavy precipitate around the outlet sump warrants attention.</p>

<h3>Biofilm-bound sludge (dark grey to black)</h3>
<p>The most serious category. Black or dark grey sediment with a greasy, almost gelatinous texture is a flag for anaerobic biological activity. The smell distinguishes it immediately - sulphurous, like rotten eggs, produced by sulphate-reducing bacteria working in the oxygen-depleted layer at the bottom of the tank. This is not background contamination. Black sludge at any measurable depth represents a microbial risk and requires urgent assessment under the ADWG guidance on microbial water quality.</p>

<figure>
  <img src="${BASE}/sediment-three-types.jpg" alt="Side-by-side comparison of silicate silt, iron precipitate, and black biofilm sludge sediment types"/>
  <figcaption><strong>Three deposits, three diagnoses.</strong> Pale silt, orange-brown iron precipitate, and black biofilm sludge each carry different water quality implications - depth alone never tells the whole story.</figcaption>
</figure>

<div class="article-divider"><span>Why 5mm is the lower bound</span></div>

<p>Below approximately 5mm, sediment in a well-operated potable tank is often characterised as background accumulation - the result of normal particulate settling over a standard 12 to 24 month inspection cycle. This does not mean it is acceptable indefinitely, but it is generally not generating the water quality outcomes that define a compliance risk.</p>

<p>At 5mm, the picture starts to change. That is roughly the depth at which sediment around the outlet sump begins to influence draw-down turbidity, the anaerobic micro-environment at the sediment-water interface becomes self-sustaining, and disinfectant demand from the sediment mass becomes measurable in residual chlorine monitoring.</p>

<div class="article-pull-stat">
  <span class="stat-num">5mm</span>
  <span class="stat-label">Minimum sediment depth at which outlet-zone turbidity and disinfectant demand effects become measurable in potable storage tanks</span>
</div>

<div class="article-divider"><span>Why 15mm is the upper bound</span></div>

<p>Fifteen millimetres represents the depth at which you have crossed from a water quality management issue into a structural and compliance issue. At this depth, an outlet mounted at standard floor clearance (typically 50 to 75mm above slab) is operating with sediment consuming 20 to 30% of that clearance space. The sediment mass is large enough to generate sustained biological oxygen demand. The ADWG turbidity guideline of <strong>1 NTU at the consumer tap</strong> becomes difficult to guarantee during any demand surge or hydraulic disturbance. And <strong>AS 4020</strong> materials compliance is effectively undermined - the tank floor coating or concrete surface cannot be assessed, maintained, or verified under a sediment layer of this depth.</p>

<div class="article-pull-stat">
  <span class="stat-num">15mm</span>
  <span class="stat-label">Sediment depth above which outlet clearance, ADWG turbidity limits, and AS 4020 floor-surface compliance are all simultaneously at risk</span>
</div>

<blockquote class="article-quotable">
  <p>Sediment does not just sit there. It chemically and biologically interacts with the water column above it - stripping disinfectant, generating turbidity on disturbance, and sheltering microbial populations from chlorine contact. By the time you can see it clearly on an ROV feed, you are already past the point where passive monitoring is enough.</p>
</blockquote>

<div class="article-divider"><span>How sediment depth is actually measured</span></div>

<p>Understanding the threshold is only useful if you can accurately measure against it. In practice, four methods are used - often in combination.</p>

<h3>Calibrated depth probe or sediment gauge</h3>
<p>A graduated rod or probe is lowered to the tank floor and the reading taken at the water surface. Reliable for concrete floors with consistent texture; less reliable where sediment compacts unevenly or where an outlet sump creates a local depth concentration. Readings should be taken at a minimum of five locations across the floor, including within 500mm of the outlet.</p>

<h3>ROV with calibrated reference markers</h3>
<p>A Remotely Operated Vehicle equipped with a laser scaling system or physical reference rods provides real-time visual depth assessment without dewatering. The ROV camera captures the sediment layer against a known reference - typically a painted marker on the tank wall at 10mm and 25mm intervals. This is the most accurate method for tanks that remain in service, and the only method that generates a photographic record at multiple floor positions.</p>

<h3>Diver observation and sampling</h3>
<p>Where ROV access is restricted by tank geometry or outlet configuration, a diver can physically assess sediment texture, take core samples, and produce a floor map. Core sampling is the only method that reliably distinguishes compacted silt from biofilm-bound sludge by visual and olfactory inspection of the vertical sediment profile.</p>

<h3>UAV / drone pre-inspection</h3>
<p>A drone pass through the tank hatch before dewatering or ROV deployment provides a broad floor overview and allows the inspection team to prioritise areas of concern before deploying more detailed measurement resources.</p>

<figure>
  <img src="${BASE}/rov-sediment-measurement.png" alt="ROV approaching the tank floor with a calibrated depth marker rod and sediment cloud lifting"/>
  <figcaption><strong>Measured, not guessed.</strong> An ROV with calibrated reference markers reads sediment depth against a known scale at multiple floor stations - and leaves a photographic record for the asset file.</figcaption>
</figure>

<div class="article-divider"><span>The compliance framework behind the numbers</span></div>

<p>Australia's regulatory context for potable tank sediment draws from three overlapping frameworks. The <strong>Australian Drinking Water Guidelines</strong> set the health outcome targets - 1 NTU turbidity at the point of supply, E. coli absence in 100 mL samples, and acceptable aesthetic limits for iron, manganese, and odour. Sediment is a direct pathway risk for all three.</p>

<p><strong>AS 4020</strong> - products in contact with drinking water - governs the materials in contact with stored potable water. A sediment layer of 10mm or more effectively removes the floor lining or concrete surface from compliance verification. You cannot confirm the surface beneath is intact, clean, and non-leaching while it is buried.</p>

<p>State water authority requirements vary but generally follow the ADWG as the baseline. In Queensland, drinking water service providers operate under the <em>Water Supply (Safety and Reliability) Act 2008</em>, which requires documented water quality management plans. Sediment accumulation that generates a water quality event is a reportable incident under that framework.</p>

<div class="article-divider"><span>What this means for your inspection cycle</span></div>

<p>If your potable storage tanks are on a 24-month inspection cycle without interim sediment monitoring, you are almost certainly operating blind on this question. Twelve months of normal operation in a concrete reservoir fed by a surface water source can generate 8 to 12mm of silt accumulation in a low-flow zone - well within the action band.</p>

<p>PC Water Infrastructure's ROV inspection service allows sediment depth mapping without taking a tank offline. The ROV floor survey produces a photographic record at multiple floor stations, with sediment depth referenced against calibrated markers and tied to outlet proximity. For a 500 kL to 2 ML reservoir, a typical ROV sediment assessment takes under four hours.</p>

<p>For remote assets - including community water schemes in Queensland and the Northern Territory - this matters especially. A tank that has been unmonitored for 18 to 24 months due to access constraints may have crossed the 15mm threshold without any visible water quality signal at the tap, because the sediment has not been disturbed. The problem is invisible until it is not.</p>

<p>With over 20 years inspecting and cleaning water storage infrastructure across Australia - from Pilbara mining camps to remote Indigenous community schemes like Doomadgee - we know what the floor of a neglected tank looks like. It rarely looks like the threshold you would act on. It usually looks like you left it one inspection cycle too long.</p>

<div class="article-divider"><span>When to act</span></div>

<table class="checklist-table">
  <thead>
    <tr>
      <th>Sediment depth</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Under 5mm</td>
      <td>Document and monitor at the next scheduled inspection.</td>
    </tr>
    <tr>
      <td>5 to 15mm</td>
      <td>Schedule cleaning and sediment removal. Conduct interim water quality testing if a demand surge or pressure event has occurred since the last inspection.</td>
    </tr>
    <tr>
      <td>Over 15mm</td>
      <td>Immediate action. Commission a full sediment removal, floor inspection, and ADWG-referenced water quality assessment. Do not defer.</td>
    </tr>
  </tbody>
</table>

<p>If you are unsure which category your tank falls into, a sediment depth assessment - using ROV without dewatering - is the fastest way to find out.</p>

<div class="article-faq-item">
  <p class="faq-q">What is the maximum allowable sediment depth in a potable water storage tank?</p>
  <p class="faq-a">There is no single national standard that prescribes a precise maximum sediment depth. However, the practical action threshold used by experienced inspection contractors in Australia is 5 to 15mm. Below 5mm, sediment is typically background accumulation. Between 5mm and 15mm, cleaning should be scheduled. Above 15mm, the sediment mass creates measurable turbidity risk, disinfectant demand, and potential microbial risk inconsistent with the Australian Drinking Water Guidelines' 1 NTU turbidity guideline and the materials compliance intent of <strong>AS 4020</strong>.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do you measure sediment in a water storage tank without draining it?</p>
  <p class="faq-a">The two primary methods for measuring sediment without dewatering are a calibrated depth probe lowered to the tank floor, and an ROV (Remotely Operated Vehicle) equipped with reference markers or a laser scaling system. ROV inspection is the most accurate method because it provides a photographic record at multiple floor locations, including outlet proximity, and is not affected by uneven sediment distribution that can skew single-point probe readings.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What does sediment in a water tank smell like?</p>
  <p class="faq-a">Sediment smell varies by type. Fine silicate silt typically has a faint earthy or mineral odour and is not strongly noticeable. Iron and manganese precipitate has a metallic quality. The most concerning sediment, dark grey or black biofilm-bound sludge, produces a distinctly sulphurous smell similar to rotten eggs. This is produced by sulphate-reducing bacteria operating in the anaerobic layer at the sediment-water interface and indicates biological activity that warrants urgent assessment.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Can sediment in a water tank affect chlorine levels?</p>
  <p class="faq-a">Yes. Sediment exerts a biochemical oxygen demand on the water column above it, which consumes residual chlorine. In a tank with 10 to 15mm of accumulated silt or organic sediment, chlorine residuals can drop measurably in the bottom third of the water column, the zone closest to the sediment layer. This effect is amplified during low-demand periods when water turnover is slow, and can contribute to the loss of disinfection residual at the point of supply, which is a water quality risk under the Australian Drinking Water Guidelines.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How often should potable water tanks be cleaned to prevent sediment build-up?</p>
  <p class="faq-a">Cleaning frequency depends on source water quality, tank turnover rate, and inlet configuration. As a general guide, most potable storage reservoirs on a reticulated network benefit from inspection every 12 to 24 months and cleaning when sediment depth reaches the 5 to 15mm action threshold. Tanks fed by surface water sources or with slow turnover may accumulate sediment more rapidly and require shorter intervals. An ROV sediment depth assessment at each inspection cycle is the most cost-effective way to calibrate your cleaning frequency to actual conditions rather than a fixed schedule.</p>
</div>

<div class="article-cta">
  <p>Not sure what is on your tank floor? An ROV sediment assessment measures depth against calibrated markers without dewatering - and gives you a written depth report for your asset management documentation.</p>
  <a href="/contact" class="cta-btn">Book an ROV sediment assessment</a>
</div>`

// ─── POST RECORDS ──────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'how-often-should-a-water-tank-be-cleaned',
    title: 'How Often Should a Water Tank Be Cleaned? The Actual Answer',
    excerpt: 'No single interval fits every tank. The real answer depends on source water, tank type, and inspection findings - an evidence-based framework for Australian asset owners.',
    cover_image_url: `${BASE}/vandalism-tank-hero.png`,
    content: cleaningFrequencyContent,
    read_time: '6 min read',
    status: 'published',
    seo_title: 'How Often Should a Water Tank Be Cleaned? | PC Water',
    seo_description: 'No single interval fits every tank. The real answer depends on source water, tank type, and inspection findings. An evidence-based framework for Australian asset owners.',
    published_at: '2026-06-23T09:00:00.000Z',
    is_update: false,
  },
  {
    slug: 'what-5-15mm-of-sediment-actually-looks-like',
    title: 'What 5-15mm of Sediment Actually Looks Like - and Why That Number Matters',
    excerpt: 'Not all tank sediment is equal. What 5 to 15mm looks like, how it is measured, and why this specific depth range triggers action under the ADWG and AS 4020.',
    cover_image_url: `${BASE}/sediment-tank-hero.jpg`,
    content: sedimentDepthContent,
    read_time: '6 min read',
    status: 'published',
    seo_title: 'What 5-15mm of Sediment Actually Looks Like | PC Water',
    seo_description: 'Not all tank sediment is equal. Learn what 5 to 15mm of sediment looks like, how it is measured, and why this specific depth range triggers action under the ADWG and AS 4020.',
    published_at: '2026-06-25T09:00:00.000Z',
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
