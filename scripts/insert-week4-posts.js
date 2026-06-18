/**
 * insert-week4-posts.js
 * Uploads images and inserts/updates Week 3.2 (Open Overflow), Week 4.1 (Birds),
 * and Week 4.2 (Vandalism) blog posts into Supabase.
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SECRET_KEY || ''
)

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'
const IMG_SOURCE_DIR = 'C:\\Users\\My PC\\Downloads\\pcwater-blogs-new'

const IMAGES_TO_UPLOAD = [
  // Birds (Week 4.1)
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.1 - Birds in Australian Tanks', 'birds-tanks-hero.png'), storageName: 'birds-tanks-hero.png' },
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.1 - Birds in Australian Tanks', 'birds-tank-vent-gap.png'), storageName: 'birds-tank-vent-gap.png' },
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.1 - Birds in Australian Tanks', 'birds-tank-feather-evidence.png'), storageName: 'birds-tank-feather-evidence.png' },
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.1 - Birds in Australian Tanks', 'birds-tank-damaged-mesh.png'), storageName: 'birds-tank-damaged-mesh.png' },
  // Vandalism (Week 4.2)
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.2 - Water Tank Vandalism', 'vandalism-tank-hero.png'), storageName: 'vandalism-tank-hero.png' },
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.2 - Water Tank Vandalism', 'vandalism-damaged-hatchv.png'), storageName: 'vandalism-damaged-hatch.png' },
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.2 - Water Tank Vandalism', 'vandalism-broken-lock.png'), storageName: 'vandalism-broken-lock.png' },
  { localPath: path.join(IMG_SOURCE_DIR, 'Week 4.2 - Water Tank Vandalism', 'vandalism-damaged-vent.png'), storageName: 'vandalism-damaged-vent.png' },
]

// ─── UPDATED Open Overflow (Week 3.2) ─────────────────────────────────────────
const openOverflowContent = `<p class="article-lead">
  The overflow drain is a critical safeguard — it stops your tank from being overpressured. But for most of the year, the open end sitting in the grass isn't releasing water. It's providing shelter.
</p>

<p>One of the most overlooked animal entry pathways sits at ground level, away from the tank, pointing at a paddock: the overflow drain point. The overflow pipe itself is essential — it prevents structural overpressure when a tank reaches capacity, routing excess water to a drain or soakage area. The riser climbs from the tank's high-water mark to an outlet positioned some distance from the tank perimeter. And the drain end? It sits open, waiting for the next overflow event — which, in most potable water systems, might not happen for months.</p>

<div class="article-divider"><span>The problem with open ends</span></div>

<p>A dry, dark, sheltered pipe sitting in an Australian paddock is not just infrastructure. To the local wildlife, it's a burrow. A snake smells water. A rabbit follows the scent. A feral cat investigates the opening. The overflow riser runs straight up into the tank interior — and once an animal climbs it, the confined space they find at the top offers no route back.</p>

<p>They drown. The carcass contaminates the stored water. And unless the tank is on a regular inspection cycle, no one knows until the distribution system starts delivering the evidence.</p>

<div class="article-pull-stat">
  <span class="stat-num">#1</span>
  <span class="stat-label">Birds are the most common animal body found inside Australian water storage tanks — but they're not the only ones.</span>
</div>

<div class="article-divider"><span>The four access pathways</span></div>

<p>The overflow drain is the most overlooked route. But it's not the only one. Animal entry into water storage tanks happens through four distinct pathways, and in most cases more than one is active at a time.</p>

<p><strong>1. The overflow drain point</strong> — An open-ended drain pipe with no valve. Overflow events are rare. Between events, the pipe is dry and hospitable. Rabbits, cats, and snakes are the most common entrants — small enough to fit the pipe diameter, drawn in by the smell of water. A flapper valve eliminates this risk entirely.</p>

<p><strong>2. Vandal-damaged or unsealed access hatches</strong> — Vandal activity can leave hatches open or damage locking mechanisms. On inground tanks especially, an open hatch can admit larger animals — possums, goannas, and in rare cases feral foxes. Regular hatch audits are not optional maintenance; they're the line between a secure asset and an exposed one.</p>

<p><strong>3. Deteriorated vent mesh and roof edge flashings</strong> — Smaller birds don't require much space. Unsealed roof edge flashings and damaged or poorly installed vent mesh are the primary entry routes for small birds seeking protected nesting areas. Birds can enter freely, nest within the tank, and — when they can't find their way back out — die there. The nesting material alone constitutes a contamination risk.</p>

<p><strong>4. Overhanging trees and surrounding bushland</strong> — Proximity to bushland increases the pressure on all of the above. Overhanging trees provide a physical bridge from ground-level habitat to roof-level entry points. Keeping vegetation cut back from the tank perimeter is passive exclusion management.</p>

<blockquote class="article-quotable">
  <p>The overflow drain is designed to release water once or twice a year. For the other 363 days, the open end sitting in the grass isn't managing hydraulic pressure — it's managing shelter demand. A flapper valve resolves both functions. Without one, you're managing only the first.</p>
</blockquote>

<div class="article-pull-stat">
  <span class="stat-num">&lt;$500</span>
  <span class="stat-label">Typical cost of a flapper valve and installation — compare to a contamination response event that can run to tens of thousands</span>
</div>

<div class="article-divider"><span>What prevention actually looks like</span></div>

<p>When our divers go into a tank, animal remains are one of the more common findings — particularly small birds near the roof structure and larger animals on the floor. The presence of remains is a direct indicator of an access failure. And in every case, the evidence trail leads back to one of the four pathways above.</p>

<p>The good news: all four are rectifiable. And the cost of rectification is a fraction of the cost of a confirmed contamination event.</p>

<p><strong>Fit a flapper valve to the overflow drain end.</strong> A flapper valve — also called a check valve or duck-bill valve — is a one-way seal that opens under flow pressure during an overflow event and stays closed otherwise. It is the single most cost-effective animal exclusion measure available for an overflow drain point. If your overflow drain ends are open, this is the first thing to address.</p>

<p><strong>Inspect and upgrade vent mesh.</strong> Vent mesh deteriorates. Corrosion eats through it; physical damage distorts it; poor installation leaves gaps around the edges. Any mesh with holes, missing sections, or inadequate gauge for the local fauna should be replaced. Fine mesh that keeps insects out will also keep small birds out.</p>

<p><strong>Audit hatch condition and locking.</strong> A hatch that can be opened by hand — by a person or a determined large mammal — is not a secure closure. Tamper-resistant latches and proper sealing around the hatch frame should be standard on any potable water asset. Hatch condition should be recorded at every inspection.</p>

<p><strong>Clear vegetation from the tank perimeter.</strong> Overhanging branches, long grass around the overflow drain, and dense scrub against the tank wall all increase the likelihood of animal contact with entry points. A maintained perimeter is passive exclusion.</p>

<table style="width:100%;border-collapse:collapse;margin:32px 0;font-size:14px;">
  <thead>
    <tr style="background:#0d1b2a;">
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Exclusion measure</th>
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Target entry pathway</th>
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Flapper valve on all overflow drain ends</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Overflow riser — small mammals, snakes, frogs</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;">High</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Vegetation cleared from tank perimeter</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">All ground-level and roof-level pathways</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;">High</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Vent mesh inspected and replaced where damaged</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Vent openings — small birds, insects</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;">High</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Roof edge flashings sealed</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Roof-level gaps — small birds</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Medium</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Access hatches locked and properly sealed</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Hatch openings — larger animals, vandal access</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;">High</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Vandal damage inspection at each site visit</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">All pathways — hatches, vents, flashings</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Ongoing</td>
    </tr>
  </tbody>
</table>

<p>The obligation to maintain water quality from storage to tap is established in the Australian Drinking Water Guidelines (NHMRC) and supported by <strong>AS/NZS 4766</strong>. Any inspection finding of an open overflow drain point, damaged vent mesh, or compromised hatch should be flagged as a rectification item in the asset's formal condition report — not deferred to the next scheduled maintenance cycle.</p>

<div class="article-faq-item">
  <p class="faq-q">How do animals get into water storage tanks through the overflow pipe?</p>
  <p class="faq-a">The overflow drain point is typically an open-ended pipe situated away from the tank. Because overflow events are rare, the pipe stays dry most of the time — making it a sheltered, attractive space for native wildlife. Small animals including rabbits, cats, snakes, and frogs can smell stored water, enter the open end, climb the overflow riser, and fall into the tank with no means of escape. They then drown and contaminate the stored water.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is a flapper valve and why should it be fitted to overflow drain points?</p>
  <p class="faq-a">A flapper valve is a simple one-way seal fitted to the end of an overflow pipe. It opens under flow pressure during an overflow event and stays closed at all other times, preventing animal entry. It is one of the most cost-effective measures for protecting potable water storage from wildlife contamination — the valve itself is inexpensive, and the surrounding area should also be kept clear of vegetation.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What types of animals are most commonly found inside Australian water tanks?</p>
  <p class="faq-a">Birds are the most common bodies found inside tanks. Small birds seek protected nesting spaces and can enter through unsealed roof edge flashings or damaged vent mesh. Snakes, frogs, rabbits, and feral cats are also regularly found — typically entering through open overflow drain points. On inground tanks with significant structural breaches, larger animals including possums and goannas have been recorded.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How do I know if an animal has entered my water storage tank?</p>
  <p class="faq-a">The earliest indicators are often changes in water quality — unusual turbidity, odour, or taste in the distribution system. During internal inspections, divers or technicians may find animal remains on the tank floor, nesting material near roof structures, or physical damage to vent mesh and flashings. Any confirmed animal entry should be treated as a contamination event requiring immediate response under the Australian Drinking Water Guidelines (NHMRC).</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is an open overflow drain a compliance issue under Australian standards?</p>
  <p class="faq-a">Open overflow drain points that allow animal or debris entry are inconsistent with the duty to maintain water quality from storage to tap, established in the Australian Drinking Water Guidelines (NHMRC) and supported by <strong>AS/NZS 4766</strong>. While no single clause mandates a specific valve type, any inspection finding of an open overflow drain point should be flagged as a rectification item in the asset's condition assessment report.</p>
</div>

<div class="article-cta">
  <p>PC Water Infrastructure conducts overflow drain and access pathway audits as part of every tank inspection program across Australia — identifying animal entry points before they become contamination events.</p>
  <a href="/contact" class="cta-btn">Request a pathway audit</a>
</div>`

// ─── Week 4.1 — Birds in Australian Tanks ─────────────────────────────────────
const birdsContent = `<p class="article-lead">
  When a bird turns up inside a potable water tank, the finding is not random wildlife. It is evidence that a roof-level exclusion barrier has failed.
</p>

<p>In <a href="/resources/evidence-water-quality-issues-warning-signs">our earlier post on reading contamination evidence</a>, we made the point that the tank records what has been happening long before a complaint reaches the operator. Bird remains are one of the clearest examples. They tell you the problem is not at the treatment plant and not out in the reticulation. The problem is the tank itself.</p>

<p>We've also covered the ground-level wildlife pathway in <a href="/resources/the-open-overflow-wildlife-drain-point">The Open Overflow</a>. Birds are different. They usually enter from above — through damaged vent mesh, unsealed roof edge flashings, ridge gaps, or a hatch that was left insecure after inspection, maintenance, or vandal activity.</p>

<div class="article-divider"><span>Why birds show up so often</span></div>

<p>Birds do not need a large breach. A small opening near a vent, roof seam, or hatch perimeter is enough. Potable water tanks also offer what birds seek: shade, shelter from weather, and a quiet perch point away from predators. Once they enter the roof space or tank interior, many cannot orient themselves to escape. Smooth internal walls and dark confined spaces work against them.</p>

<p>That is why birds are the most common animal remains found inside Australian tanks. Not because they are the only animals trying to get in, but because small roof-level failures are common and birds can exploit them quickly.</p>

<figure>
  <img src="${BASE}/birds-tank-vent-gap.png" alt="Damaged roof vent mesh on a water storage tank creating a bird entry gap" style="width:100%;display:block;border-radius:10px;aspect-ratio:16/9;object-fit:cover;"/>
  <figcaption><strong>Small opening, major consequence.</strong> Birds do not need a large breach. A damaged vent screen or roof gap is enough to turn a sanitary tank into an entry point.</figcaption>
</figure>

<div class="article-pull-stat">
  <span class="stat-num">#1</span>
  <span class="stat-label">Birds are the most common bodies found inside Australian water storage tanks because the most common exclusion failures happen at roof level.</span>
</div>

<div class="article-divider"><span>What bird evidence actually tells you</span></div>

<p>A bird inside the tank is not just a contamination finding. It is a structural clue. The type of evidence narrows the likely pathway:</p>

<p><strong>Feathers at the waterline</strong> — Feathers floating at the top water line indicate active or recent entry. An inspector should move immediately to the vent openings, roof edge flashings, ridge capping, and hatch seals.</p>

<p><strong>Nesting material on roof framing</strong> — Twigs, grass, and down near roof members indicate birds are not just getting in, they are attempting to occupy the space. That usually means the opening has existed for some time.</p>

<p><strong>Droppings around hatches or vent zones</strong> — Bird fouling concentrated near a hatch cover or vent screen often shows the exact perch point being used. It can also indicate a hatch that is not draining or sealing correctly, allowing both biological matter and stormwater to track inward.</p>

<p><strong>A carcass on the floor</strong> — At that point the issue has progressed from exclusion failure to confirmed contamination event. The response needs to deal with both: remove the contamination and close the pathway that allowed it.</p>

<blockquote class="article-quotable">
  <p>A bird in a water tank is never just a bird. It is proof that the roof, hatch, or vent barrier stopped being a barrier.</p>
</blockquote>

<div class="article-divider"><span>The risk is bigger than the carcass</span></div>

<p>Asset owners sometimes think the problem begins and ends with the body itself. It does not. Feathers, faeces, nesting material, microbial load, and the likelihood of repeat entry all matter. If one bird got in, the pathway is still open for the next one.</p>

<p>That is why the response should not be limited to clean-up. It should include a roof-level exclusion audit, repair of all damaged screens and seals, and confirmation that the hatch and surrounding platform area remain weather-tight. The practical expectation from the Australian Drinking Water Guidelines (NHMRC), supported by <strong>AS/NZS 4766</strong> where relevant, is simple: the stored water must be protected from external contamination.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${BASE}/birds-tank-feather-evidence.png" alt="Feathers floating at the waterline inside a potable water storage tank"/>
    <figcaption><strong>Waterline evidence.</strong> Feathers and light biological debris at the surface tell an inspector that the entry pathway is active or was active very recently.</figcaption>
  </figure>
  <figure>
    <img src="${BASE}/birds-tank-damaged-mesh.png" alt="Corroded vent mesh on a water tank with visible tears and gaps"/>
    <figcaption><strong>Failed exclusion screen.</strong> Once fine mesh is torn, corroded, or poorly fixed to its frame, birds can exploit the gap surprisingly quickly.</figcaption>
  </figure>
</div>

<table style="width:100%;border-collapse:collapse;margin:32px 0;font-size:14px;">
  <thead>
    <tr style="background:#0d1b2a;">
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Finding</th>
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Most likely pathway</th>
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">First action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Feathers at waterline</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Vent screen failure or roof gap</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Inspect all vents, ridge capping, and flashings</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Nesting material on roof members</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Longstanding roof-level opening</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Identify opening, remove material, reseal entry point</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Droppings near hatch perimeter</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Hatch perch point or poor hatch drainage</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Check hatch seal, drainage path, and cover seating</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Bird carcass on floor</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Confirmed active entry</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Treat as contamination event and complete exclusion audit</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Damaged vent mesh visible from outside</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Direct roof-level ingress route</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Replace with correctly fixed fine mesh immediately</td>
    </tr>
  </tbody>
</table>

<p>The fix is usually straightforward. Replace damaged vent mesh. Seal roof edge flashings and ridge gaps. Confirm hatches close squarely and drain correctly. Review any recent contractor work that involved opening the tank. And if the site has a history of tampering, inspect for vandal damage as well. One unresolved access point can keep reintroducing the same problem.</p>

<p>This is also why bird findings sit so high on the priority list in <a href="/resources/5-contamination-risks-not-source-water">our broader contamination risk framework</a>. They are direct evidence of storage-side failure, not an abstract possibility.</p>

<div class="article-faq-item">
  <p class="faq-q">Why are birds the most common bodies found inside Australian water tanks?</p>
  <p class="faq-a">Birds only need a very small roof-level opening to gain entry. Damaged vent mesh, unsealed roof edge flashings, ridge gaps, and poorly secured hatches give them access to sheltered spaces inside the tank. Once inside, smooth walls, darkness, and limited orientation cues mean many birds cannot find their way back out. That is why bird remains are such a common internal finding.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What does a bird found inside a potable water tank tell an inspector?</p>
  <p class="faq-a">It tells the inspector there has been a roof, hatch, or ventilation barrier failure. A bird in the tank is not random bad luck. It is structural evidence. Feathers at the waterline, nesting material on roof framing, droppings near hatches, and damaged vent screens all narrow the investigation to specific entry pathways.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">Is the contamination risk only the bird carcass itself?</p>
  <p class="faq-a">No. The carcass is only one part of the risk. Feathers, faeces, nesting material, and ongoing access by additional birds all represent contamination pathways. Any confirmed bird entry should be treated as a water quality event under the Australian Drinking Water Guidelines (NHMRC), with the structural access point identified and rectified.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What standards apply when birds are entering a water tank?</p>
  <p class="faq-a">The duty to maintain sanitary integrity from storage to tap is established by the Australian Drinking Water Guidelines (NHMRC) and supported by <strong>AS/NZS 4766</strong> where applicable. The practical requirement is straightforward: if birds can get in, the tank exclusion barrier is not performing and the defect needs rectification.</p>
</div>

<div class="article-cta">
  <p>If feathers, nesting material, or bird remains have ever been found in your tank, the question is not whether the barrier failed. The question is where.</p>
  <a href="/contact" class="cta-btn">Request a tank inspection</a>
</div>`

// ─── Week 4.2 — Vandalism ─────────────────────────────────────────────────────
const vandalismContent = `<p class="article-lead">
  The most expensive part of a vandal event is usually not the damage you can see. It is the contamination pathway left open after no one realises the sanitary barrier has been broken.
</p>

<p>In <a href="/resources/5-contamination-risks-not-source-water">our earlier contamination post</a>, we listed vandalism as one of the five major risks that come from the storage asset itself, not the source water. That point matters because vandalism rarely ends when the person leaves site. A forced hatch, torn vent screen, or broken lock can leave a tank exposed for days or weeks before the next visit.</p>

<p>By the time <a href="/resources/evidence-water-quality-issues-warning-signs">water quality symptoms appear</a>, the visible act of vandalism may already be over. What remains is the secondary damage: dust, leaf litter, insects, birds, stormwater, or rubbish entering a vessel that was previously sealed.</p>

<div class="article-divider"><span>What unreported vandalism looks like</span></div>

<p>Most people imagine spray paint, graffiti, or obvious impact damage. Those things happen. But the more serious findings are often smaller and easier to miss:</p>

<p><strong>Forced hatch dogs, hinges, or lock points</strong> — If a hatch has been levered, twisted, or slammed closed after being forced open, it may still appear shut while no longer sealing properly. A hatch that looks closed is not necessarily secure.</p>

<p><strong>Torn or peeled-back vent mesh</strong> — Once the screen is broken, the tank no longer has an effective exclusion barrier. Dust, insects, and small birds can continue entering long after the vandal event. This applies equally to ventilation mesh in fascia walls — a distinct entry point from roof vents that is easily overlooked during a cursory external check.</p>

<p><strong>Foreign material on the roof or inside the tank</strong> — Rocks, rubbish, drink containers, and loose debris are direct evidence of interference. They also tell you the event was not limited to external damage. Something or someone reached the tank opening.</p>

<figure>
  <img src="${BASE}/vandalism-damaged-hatch.png" alt="Water tank hatch showing pry marks and damaged latch hardware after vandalism" style="width:100%;display:block;border-radius:10px;aspect-ratio:16/9;object-fit:cover;"/>
  <figcaption><strong>Closed does not mean sealed.</strong> A vandalised hatch may sit back in place while its locking, seating, or gasket integrity has already been compromised.</figcaption>
</figure>

<div class="article-pull-stat">
  <span class="stat-num">3</span>
  <span class="stat-label">One vandal event can create three separate risks at once: contamination, repeat unauthorised access, and unsafe access hardware for the next worker who attends site.</span>
</div>

<blockquote class="article-quotable">
  <p>The visible damage is rarely the full story. What matters is whether the hatch, vent, roof, or access system still performs the function it was meant to perform after the event.</p>
</blockquote>

<div class="article-divider"><span>Why the real damage is delayed</span></div>

<p>On remote sites, the lag between event and discovery can be long — a security event can quickly become the same kind of animal-entry problem described in <a href="/resources/the-open-overflow-wildlife-drain-point">The Open Overflow</a>, only arriving through a different route. That is why a vandal-prone tank should never be managed on the same inspection assumptions as a low-risk urban asset with regular operator presence.</p>

<p>Proactive measures — alarmed hatches, CCTV, or a defined minimum inspection frequency — materially reduce the exposure window on remote sites. The shorter the time to detection, the lower the contamination consequence.</p>

<p>There is also a worker safety dimension. If ladders, cages, handrails, or hatch surrounds have been tampered with, the next person climbing onto the tank could be stepping onto damaged access hardware. Safe access components need repair consistent with <strong>AS 1657</strong> — while hatches, vents, and closures need restoration of the sanitary barrier expected for potable water storage.</p>

<div class="article-divider"><span>What to inspect after every suspected event</span></div>

<p><strong>Secure the sanitary barrier first</strong> — Check hatch seating, locking points, gaskets, vent screens, flashings, and any roof penetrations. If any closure is compromised, treat it as an active contamination pathway until proven otherwise.</p>

<p><strong>Inspect for internal evidence</strong> — If there are signs the tank was opened, look for rocks, rubbish, feathers, fresh debris, or waterline contamination indicators. Depending on the tank and the breach, an internal inspection may be warranted to confirm what entered the stored water.</p>

<p><strong>Check access hardware and approach areas</strong> — Look at ladders, cages, platforms, handrails, and hatch approach areas, not just the tank opening itself. A vandalised tank can be both a hygiene failure and a fall hazard. Handrails, aerials, and telemetry cabinets around the hatch area are also faecal accumulation surfaces — bird perching on damaged or disturbed hardware can introduce contamination to the hatch surround even without direct tank entry.</p>

<p><strong>Check overflow drain ends and roof penetrations</strong> — Overflow drain openings and roof penetrations can become secondary entry routes when the tank is left unsecured after a vandal event. Inspect all open overflow drain ends and fit a flapper valve if one is not already in place. Check all flashings and penetrations for displacement or damage.</p>

<div class="article-photo-grid">
  <figure>
    <img src="${BASE}/vandalism-broken-lock.png" alt="Broken padlock on a water tank access point indicating unauthorised entry"/>
    <figcaption><strong>Access control failure.</strong> A broken lock is not just a security issue. It means the sanitary barrier has to be assumed compromised until checked.</figcaption>
  </figure>
  <figure>
    <img src="${BASE}/vandalism-damaged-vent.png" alt="Damaged vent screen on a water tank allowing debris and animal ingress"/>
    <figcaption><strong>Secondary contamination route.</strong> Once a vent screen is peeled back or torn, the tank remains exposed long after the initial event.</figcaption>
  </figure>
</div>

<table style="width:100%;border-collapse:collapse;margin:32px 0;font-size:14px;">
  <thead>
    <tr style="background:#0d1b2a;">
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Damage found</th>
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Hidden consequence</th>
      <th style="padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;">Response now</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Forced or bent hatch</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Closure may no longer seal, even if shut</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Verify seating, gasket condition, and locking integrity</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Broken or missing lock</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Repeat unauthorised access risk</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Replace lock and inspect for evidence of opening</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Damaged vent mesh</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Ongoing dust, insect, and bird ingress</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Replace screen and inspect surrounding framing</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Rocks or rubbish inside tank area</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Likely direct internal interference</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Escalate to an internal inspection</td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Damaged ladder, cage, or handrail</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Worker fall risk at next attendance</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Repair safe access elements consistent with <strong>AS 1657</strong></td>
    </tr>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Evidence of roof traffic or displaced flashings</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Stormwater and debris entry pathway</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">Inspect all penetrations and reseal as required</td>
    </tr>
  </tbody>
</table>

<p>The objective after vandalism is not cosmetic restoration. It is to re-establish the two functions the asset must provide: sanitary protection of the stored water and safe access for the people who maintain it. The ADWG sets the water quality expectation. Practical asset management means treating every suspected breach as a potential contamination pathway until inspection proves otherwise.</p>

<div class="article-faq-item">
  <p class="faq-q">Does a vandalism event trigger formal notification to the water authority or regulator?</p>
  <p class="faq-a">It depends on the nature of the breach and the applicable drinking water framework. If there is evidence the sanitary barrier was compromised, many state and territory frameworks — including conditions under local water service licences — require operators to notify the relevant authority within a specified timeframe. The ADWG provides guidance on when a contamination event should be reported. Check your service contract, operating licence, or drinking water quality management plan for the obligations that apply to your supply.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">How long can a vandalised tank remain exposed before contamination occurs?</p>
  <p class="faq-a">There is no fixed timeframe — it depends on the nature of the breach, the local environment, and site activity. A forced hatch in a remote location with active wildlife can result in animal entry within days. The practical approach is to treat any confirmed or suspected breach as an active contamination pathway and attend the site as quickly as the risk assessment demands.</p>
</div>

<div class="article-faq-item">
  <p class="faq-q">What is the difference between a contamination response and a routine post-vandalism inspection?</p>
  <p class="faq-a">A routine post-vandalism inspection confirms that the sanitary barrier is intact and re-establishes the asset's baseline condition. A contamination response is triggered when there is evidence the stored water has been directly affected — a confirmed open hatch, foreign material inside the tank, or water quality indicators in the distribution system. Contamination responses typically require sampling, possible water withdrawal, and formal reporting to the water authority.</p>
</div>

<div class="article-cta">
  <p>If a tank has been tampered with, the right question is not how bad it looks from the fence line. It is what the damage has left open.</p>
  <a href="/contact" class="cta-btn">Book a tank security and contamination audit</a>
</div>`

// ─── POST RECORDS ──────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'the-open-overflow-wildlife-drain-point',
    title: 'The Open Overflow: How Wildlife Gets In Through Your Drain Point',
    excerpt: 'The overflow drain is one of the most overlooked animal entry points in water storage. Here\'s how wildlife gets in, why they can\'t get out, and what a flapper valve costs versus what a contamination event costs.',
    cover_image_url: `${BASE}/harsh-env-drone.png`,
    content: openOverflowContent,
    read_time: '5 min read',
    status: 'published',
    seo_title: 'How Wildlife Gets Into Water Tanks Through the Overflow Drain | PC Water',
    seo_description: 'The overflow drain is the most overlooked animal entry point in water storage. Here\'s how wildlife gets in, why they can\'t get out, and what a flapper valve costs versus a contamination event.',
    published_at: '2026-05-22T09:00:00.000Z',
    is_update: true,
  },
  {
    slug: 'birds-are-the-most-common-body-found-inside-australian-tanks',
    title: 'Birds Are the Most Common Body Found Inside Australian Tanks',
    excerpt: 'When birds turn up inside a potable water tank, the problem is not random wildlife. It is a roof, hatch, or vent exclusion failure that needs investigation.',
    cover_image_url: `${BASE}/birds-tanks-hero.png`,
    content: birdsContent,
    read_time: '4 min read',
    status: 'published',
    seo_title: 'Birds Inside Australian Water Tanks: Exclusion Failures Explained | PC Water',
    seo_description: 'Bird remains, feathers, and nesting material are structural evidence of roof-level exclusion failures in Australian water storage tanks. Here\'s what to fix first.',
    published_at: '2026-06-09T09:00:00.000Z',
    is_update: false,
  },
  {
    slug: 'vandalism-and-your-water-tank-the-damage-that-goes-unreported',
    title: 'Vandalism and Your Water Tank: The Damage That Goes Unreported',
    excerpt: 'The real cost of vandalism is rarely the visible damage. It is the contamination pathway, hatch failure, and security weakness left behind after no one notices.',
    cover_image_url: `${BASE}/vandalism-tank-hero.png`,
    content: vandalismContent,
    read_time: '4 min read',
    status: 'published',
    seo_title: 'Water Tank Vandalism: Hidden Contamination Risks Explained | PC Water',
    seo_description: 'The real cost of water tank vandalism is rarely the visible damage. Forced hatches, broken locks, and torn vent screens leave contamination pathways open for weeks.',
    published_at: '2026-06-09T09:00:00.000Z',
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
        contentType: 'image/png',
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
  console.log('\n📝 Inserting/updating posts in Supabase...')
  for (const post of posts) {
    const { is_update, ...postData } = post

    if (is_update) {
      // Update existing
      const { error } = await sb
        .from('cms_posts')
        .update({
          content: postData.content,
          excerpt: postData.excerpt,
          seo_title: postData.seo_title,
          seo_description: postData.seo_description,
          updated_at: new Date().toISOString(),
        })
        .eq('slug', postData.slug)
      if (error) {
        console.error(`  ✗ Failed to update "${postData.slug}": ${error.message}`)
      } else {
        console.log(`  ✓ Updated: ${postData.slug}`)
      }
    } else {
      // Insert new (upsert)
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
        console.log(`  ✓ Inserted/upserted: ${postData.slug}`)
      }
    }
  }
}

;(async () => {
  await uploadImages()
  await upsertPosts()
  console.log('\n✅ Done!')
})()
