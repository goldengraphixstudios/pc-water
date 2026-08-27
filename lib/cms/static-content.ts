import { slugify } from '@/lib/cms/utils'
import type { CmsPost, CmsProject } from '@/lib/cms/types'

function staticId(prefix: string, value: string) {
  return `${prefix}-${slugify(value)}`
}

const BASE = 'https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts'

export const fallbackPosts: CmsPost[] = [
  {
    id: staticId('post', 'Water Is Food Your Tank Is The Crockery'),
    title: 'Water is Food: Your Tank is the Crockery',
    slug: 'water-is-food-your-tank-is-the-crockery',
    excerpt:
      'Water is food — literally. We pipe it into people\'s homes 24 hours a day, which means the vessel it\'s stored in matters as much as the source.',
    content:
      "<p class=\"article-lead\">\n  Water is food. Not metaphorically — literally. We pipe it into people's homes and serve it up 24 hours a day. Which means the vessel it's stored in matters as much as what's in it.\n</p>\n\n<p>Think of it this way: your water treatment plant is the kitchen. The distribution system is the crockery. Anyone who's watched <em>Ramsay's Kitchen Nightmares</em> knows that a brilliant kitchen can still send people to hospital if the plates are dirty. The same logic applies to every storage tank in Australia.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/water-food-hero.jpg\" alt=\"Wide shot of water storage tank exterior showing roof and access hatch condition\"/>\n  <figcaption><strong>Water storage tank exterior.</strong> Roof condition, access hatch integrity, and external corrosion are key indicators assessed during a formal tank inspection.</figcaption>\n</figure>\n\n<p>Across Australia, there are thousands of potable water storage tanks that have never been properly assessed. Tanks with cracked roofs where birds roost and leave waste behind. Tanks with corroded walls leaching iron into treated drinking water. Tanks whose liners failed years ago, silently.</p>\n\n<p>The difference between a dirty plate and a dirty tank? You can see the plate. Most Australians have no idea what condition the vessel holding their drinking water is in — and in many cases, neither do the asset owners.</p>\n\n<div class=\"article-divider\"><span>The cost of looking away</span></div>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/water-food-damaged-roof.png\" alt=\"Damaged roof access hatch — common animal entry point for water storage tanks\"/>\n    <figcaption>Damaged roof access — a common animal entry point</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/water-food-biological.png\" alt=\"Biological matter found inside a neglected water storage tank\"/>\n    <figcaption>Biological matter found inside a neglected tank</figcaption>\n  </figure>\n</div>\n\n<p>Proactive maintenance isn't expensive — deferred maintenance is. A tank that receives regular inspection and cleaning costs a fraction of one that requires emergency remediation or full replacement. The restaurants that make their customers sick don't stay in business long. The water industry works the same way.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">5×</span>\n  <span class=\"stat-label\">The estimated cost difference between timely rehabilitation and full tank replacement</span>\n</div>\n\n<p>The question isn't whether your tank is at risk. It's whether you know the condition it's in right now — and whether that would hold up if someone looked inside.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>In Australia, potable water storage tanks sit between the treatment plant and the tap — but unlike the plant itself, many are never formally inspected. A tank with a cracked roof or failed liner can silently re-contaminate treated water over months or years. Proactive inspection and maintenance is not optional infrastructure spending; it is the last line of defence before the tap.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>Frequently asked questions</span></div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Why is water stored in tanks if it has already been treated?</p>\n  <p class=\"faq-a\">Treated water needs to be held close to where it is used — treatment plants cannot pump on demand around the clock. Storage tanks are the buffer between treatment and distribution. Their condition directly affects the quality of water that reaches the tap.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Can a water storage tank contaminate drinking water?</p>\n  <p class=\"faq-a\">Yes. A tank with a damaged roof, corroded lining, or cracked access hatch can allow animal entry, sediment accumulation, and chemical leaching into treated drinking water. PC Water Infrastructure inspects and assesses tanks against <strong>AS4020</strong> compliance criteria to identify exactly these failure modes.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How often does a water storage tank need to be inspected in Australia?</p>\n  <p class=\"faq-a\">For fire water storage tanks, <strong>AS1851-2012</strong> mandates routine inspection at defined intervals. For potable storage tanks, most Australian water authorities target inspection cycles of 1–4 years depending on tank size, condition history, and risk rating.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What are the early warning signs that a water storage tank needs attention?</p>\n  <p class=\"faq-a\">Common indicators include discoloured water, taste or odour changes, visible external corrosion, access hatches that no longer seal properly, and evidence of roof damage or animal activity near inlet or overflow points. Many failures are internal and cannot be identified without a formal inspection.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What is the difference between a potable water tank and a fire water tank?</p>\n  <p class=\"faq-a\">A potable water tank must meet <strong>AS4020</strong>, which governs materials in contact with drinking water. A fire water tank is designed to hold non-potable water under <strong>AS2304</strong>. The two are not interchangeable — inspection, lining, and maintenance requirements differ significantly between the two standards.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure provides inspection, cleaning, and condition assessment for water storage assets across Australia — potable, fire, and industrial.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request an inspection</a>\n</div>",
    coverImageUrl: `${BASE}/water-food-hero.jpg`,
    readTime: '2 min read',
    status: 'published',
    seoTitle: 'Water is Food: Your Tank is the Crockery | PC Water',
    seoDescription: 'Water is food — and your storage tank is what it\'s served on. A short, sharp look at why the vessel matters as much as the source.',
    publishedAt: '2026-04-14T09:00:00.000Z',
    createdAt: '2026-04-14T09:00:00.000Z',
    updatedAt: '2026-04-14T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-maintenance-wf', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-potable-water', name: 'Potable Water', slug: 'potable-water' },
      { id: 'tag-compliance-wf', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'From Mines To Hospitals'),
    title: 'From Mines to Hospitals: What Every Sector Gets Wrong About Tank Maintenance',
    slug: 'from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance',
    excerpt:
      'Every industry depends on water storage — and every sector repeats the same maintenance mistakes. Five critical errors that shorten tank life, compromise water quality, and create compliance risk.',
    content:
      "<p class=\"article-lead\">\n  Every industry depends on water storage in one way or another. From the massive tanks keeping mine sites operational, to the potable water reserves that safeguard hospitals and schools, tanks are the silent backbone of commercial, industrial, and public facilities.\n</p>\n\n<p>Yet across sectors, the same critical mistakes are repeated time and time again. These errors shorten tank life, compromise water quality, and create unnecessary risks to safety, compliance, and budgets.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/sector-hero.jpg\" alt=\"Large industrial water storage tank in operational facility\"/>\n  <figcaption><strong>Industrial water storage infrastructure.</strong> Every sector depends on tanks — and every sector repeats the same maintenance mistakes.</figcaption>\n</figure>\n\n<blockquote class=\"article-quotable\">\n  <p>The Australian water industry applies a useful benchmark to stored water: treat it like a food-grade product — with the same standards applied to milk, wine, and grain storage. You wouldn't leave an unlocked milk vat uninspected for a decade. But that is effectively what happens with thousands of water storage assets across the country every year.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>Mistake 1 — Treating tanks as static assets</span></div>\n\n<p>Too often, organisations view tanks as once-off investments. Install them, fill them, forget about them. The reality is that tanks are not static assets — they are systems made up of multiple interacting layers, each of which degrades on a different schedule. When a tank is neglected, these layers don't all fail at once — they fail quietly and at different rates, making the deterioration hard to detect until it becomes severe.</p>\n\n<div class=\"article-divider\"><span>Mistake 2 — Paper compliance over real inspection</span></div>\n\n<p>Standards like AS 1851 require routine inspection and documented service logs. Yet across hospitals, schools, councils, and commercial buildings, inspection schedules are routinely skipped — and when regulators or insurers request proof, the paperwork is missing. Two practices separate effective inspection programs from paper exercises: sequential photography at fixed reference points, and fresh eyes from an independent inspector who hasn't normalised the gradual decline.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/sector-inline-inspection.png\" alt=\"Professional inspector conducting formal tank inspection with documentation\"/>\n    <figcaption>Independent inspection with sequential photography — the standard that separates paper compliance from real risk management</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/sector-inline-maintenance.png\" alt=\"Planned maintenance program for water storage infrastructure\"/>\n    <figcaption>Planned maintenance versus reactive emergency response — a consistent cost and safety difference</figcaption>\n  </figure>\n</div>\n\n<div class=\"article-divider\"><span>Mistake 3 — One-size-fits-all maintenance</span></div>\n\n<p>Every sector faces unique environmental and operational stresses. Mining tanks are not hospital tanks. Neither should be maintained like one. Mining environments suffer from high-dust ventilation failures, dissimilar metal corrosion, and temperature cycling on RPVC liners. Hospital platforms and hatch areas are the most common contamination entry point — not the water source itself. Agriculture faces UV degradation and seasonal fluctuation stress on liner seams.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">ROL</span>\n  <span class=\"stat-label\">Running on Luck — what engineers call tanks without active inspection programs</span>\n</div>\n\n<div class=\"article-divider\"><span>Mistake 4 — Off-spec repairs and mismatched materials</span></div>\n\n<p>Quick fixes, mismatched materials, and off-spec repairs create the appearance of rectification while the real problem continues beneath the surface. The single most important factor in coating performance is not the coating — it is surface preparation. A coating applied over contaminated or inadequately profiled steel will fail years ahead of schedule regardless of the product specification.</p>\n\n<div class=\"article-divider\"><span>Mistake 5 — Reactive-only maintenance culture</span></div>\n\n<p>The most expensive maintenance decision is always the one made after the failure. Waiting until a problem becomes visible is the default mode for many organisations, despite the well-understood cost premium of reactive repair over planned maintenance. Tanks without active inspection programs are not on a maintenance schedule — they are running on luck.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>Avoiding these mistakes requires discipline around a small number of well-understood maintenance activities, applied consistently: independent professional inspection every 1–4 years, sequential photography at every inspection, cleaning and desludging every 4–6 years for treated water, annual overflow pipe and outlet screen verification.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>Sector-specific guidance</span></div>\n\n<p>For mining and resource operations, cathodic protection systems require the same scheduled attention as the tanks themselves — anode replacement cycles of 8–15 years must be built into the maintenance register, not discovered during an emergency inspection.</p>\n\n<p>For public facilities, overflow pipework provides a warm, sheltered habitat for vermin. Animal carcasses entering tanks through unsealed overflow pipes are a documented contamination source in the Australian water industry.</p>\n\n<p>Water stagnation in low-turnover zones creates conditions where bacteria breed and disinfection residuals deplete. SCADA-integrated flow monitoring can detect abnormal turnover rates remotely before conditions deteriorate to the point requiring emergency intervention.</p>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How often should industrial water storage tanks be inspected?</p>\n  <p class=\"faq-a\">An independent inspection on a 1–4 year cycle, calibrated to the tank's condition and environment, is the single highest-return maintenance action available to asset owners. Mining and high-exposure environments typically require more frequent inspection than sheltered urban installations.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What is the cost difference between planned maintenance and emergency repair?</p>\n  <p class=\"faq-a\">Industry experience consistently shows a 3–5 times cost multiplier between timely rehabilitation and emergency remediation or full replacement. The same tank identified at the right point in the deterioration cycle presents far smaller remediation scope than one assessed after pitting has penetrated the steel.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What unique risks do mining environments create for water storage tanks?</p>\n  <p class=\"faq-a\">Mining environments suffer from high-dust ventilation failures, dissimilar metal corrosion from mixed materials, temperature cycling stress on RPVC liners, and aggressive water chemistry from mineral-laden groundwater. Cathodic protection anode replacement cycles of 8–15 years must be actively managed, not discovered during emergency inspection.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure deploys ROV and UAV inspection capability capable of assessing tanks without full dewatering, reducing operational disruption while providing the condition data needed to make informed decisions.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request a sector assessment</a>\n</div>",
    coverImageUrl: `${BASE}/sector-hero.jpg`,
    readTime: '9 min read',
    status: 'published',
    seoTitle: 'Tank Maintenance Mistakes Every Sector Makes | PC Water',
    seoDescription:
      'Every sector depends on water storage and every sector repeats the same maintenance mistakes. Discover the five critical errors costing asset owners.',
    publishedAt: '2026-04-01T09:00:00.000Z',
    createdAt: '2026-04-01T09:00:00.000Z',
    updatedAt: '2026-04-01T09:00:00.000Z',
    tags: [
      { id: 'tag-maintenance', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-asset-mgmt-mh', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-compliance-mh', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Why Your Fire Tank Might Fail Compliance'),
    title: 'Why Your Fire Tank Might Fail Compliance — And How to Fix It Fast',
    slug: 'why-your-fire-tank-might-fail-compliance-and-how-to-fix-it-fast',
    excerpt:
      'Many Australian fire tanks fail AS 2304 and AS 1851 compliance without owners realising. Understand the common causes, real costs, and how to get back to compliance fast.',
    content:
      "<p class=\"article-lead\">\n  When it comes to fire safety, cutting corners is not an option. Yet across Australia, countless facilities are running fire protection systems that don't meet compliance standards — often without realising it.\n</p>\n\n<p>Two standards govern fire water storage tanks in Australia. <strong>AS 2304</strong> covers the design, fabrication, and installation of water storage tanks specifically for fire protection — including capacity, materials, fittings, and access. <strong>AS 1851</strong> governs the routine service of fixed fire protection systems, mandating inspection intervals, testing requirements, and documented maintenance records. Together, these two standards define what a compliant fire tank looks like at installation, and what keeping it compliant requires throughout its operational life.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/fire-tank-hero.png\" alt=\"Fire water storage tank exterior at industrial facility\"/>\n  <figcaption><strong>Fire water storage tank.</strong> External condition, access provisions, and fitting integrity are all assessed against AS 2304 requirements during a compliance inspection.</figcaption>\n</figure>\n\n<div class=\"article-divider\"><span>Why fire tanks fail compliance</span></div>\n\n<p>Fire tanks fail compliance for a consistent set of reasons. Tank capacity is insufficient for the calculated demand — particularly common where hazard classifications have changed since original installation. Fittings, pipework, and valves are degraded, corroded, or incompatible with current standards. Internal coatings and liners have deteriorated beyond the acceptable condition threshold for AS 2304 materials. Inspection and service records are incomplete, missing mandatory test results, or have lapsed beyond the required intervals under AS 1851.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/fire-tank-internal-inspection.png\" alt=\"Internal inspection of fire water storage tank showing coating condition\"/>\n    <figcaption>Internal inspection — coating condition and sediment accumulation are key compliance indicators</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/fire-tank-access-hatch.png\" alt=\"Fire tank access hatch showing seal condition\"/>\n    <figcaption>Access hatch integrity — a common failure point under AS 2304 inspection criteria</figcaption>\n  </figure>\n</div>\n\n<p>Physical failure modes include corrosion of inlet and outlet pipework, blocked strainers, seized valves, and damaged access hatches that compromise the integrity of stored water. In tanks that have been out of routine service for several cycles, sediment accumulation and biofilm growth add contamination risk to the structural concerns.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">3–5×</span>\n  <span class=\"stat-label\">Cost multiplier between timely maintenance and emergency remediation or full replacement</span>\n</div>\n\n<blockquote class=\"article-quotable\">\n  <p>The cost of non-compliance extends beyond regulatory penalties. Insurance claims may be denied where fire protection systems are found non-compliant at the time of a loss event. Principal contractor liability under building and fire codes can attach where compliance documentation is absent.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>The path back to compliance</span></div>\n\n<p>The fastest path back to compliance starts with an independent inspection and a documented deficiency register. Once the gaps are identified, the decision becomes commercial rather than speculative: repair, reline, upgrade, or replace. For tanks where the structure remains sound, internal relining under AS 2304-compliant materials is consistently the most cost-effective remediation pathway.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/fire-tank-corroded-internal.png\" alt=\"Corroded fire tank internal — common failure mode requiring remediation\"/>\n    <figcaption>Internal corrosion — a structural and water quality concern requiring documented remediation</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/fire-tank-rpvc-liner.png\" alt=\"RPVC liner installation inside a fire water storage tank\"/>\n    <figcaption>RPVC liner installation restores compliance and eliminates ongoing corrosion</figcaption>\n  </figure>\n</div>\n\n<p>Prevention is simpler than remediation. A compliant maintenance program under AS 1851 — with documented inspection records, test results, and deficiency tracking — keeps fire tanks in the window where issues are addressable at routine maintenance cost, not emergency remediation cost.</p>\n\n<div class=\"article-divider\"><span>Frequently asked questions</span></div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What is AS 2304 and who does it apply to?</p>\n  <p class=\"faq-a\">AS 2304 is the Australian Standard governing the design, construction, and installation of water tanks used for fire protection systems. It applies to any facility with a dedicated fire water tank — including commercial, industrial, mining, healthcare, and government sites.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How often does a fire tank need to be inspected under AS 1851?</p>\n  <p class=\"faq-a\">AS 1851 requires monthly visual checks, annual internal inspections, and five-year structural integrity assessments. Independent specialist inspections should occur every 1–4 years depending on the tank's condition, operating environment, and risk profile. All inspections must be formally documented and records retained.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Can an existing non-compliant fire tank be upgraded, or does it need to be replaced?</p>\n  <p class=\"faq-a\">Many non-compliant tanks can be brought up to standard through targeted retrofits — adding compliant access hatches, installing an RPVC liner, replacing corroded fittings, and upgrading outlet configurations. Full replacement is usually a last resort.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What documentation is required to prove fire tank compliance?</p>\n  <p class=\"faq-a\">You need documented records of every inspection, test, and maintenance activity as required by AS 1851. This includes monthly visual check logs, annual internal inspection reports, five-year structural assessment reports, and records of any modifications or remedial works.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure provides inspection, condition assessment, and remediation for fire water storage tanks across Australia — including RPVC relining, pipework replacement, valve servicing, and full compliance documentation.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Arrange a compliance inspection</a>\n</div>",
    coverImageUrl: `${BASE}/fire-tank-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: 'Fire Water Tank Compliance Failures | PC Water',
    seoDescription:
      'Many Australian fire tanks fail AS 2304 and AS 1851 compliance without owners realising. Understand the common causes, real costs, and how to fix issues fast.',
    publishedAt: '2026-04-03T09:00:00.000Z',
    createdAt: '2026-04-03T09:00:00.000Z',
    updatedAt: '2026-04-03T09:00:00.000Z',
    tags: [
      { id: 'tag-fire-compliance', name: 'Fire Compliance', slug: 'fire-compliance' },
      { id: 'tag-compliance-fc', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-tank-maintenance-fc', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'Is Your Water Tank A Ticking Time Bomb'),
    title: 'Is Your Water Tank a Ticking Time Bomb? 5 Signs Your Tank Is Failing',
    slug: 'is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing',
    excerpt:
      'Most tank failures give warning signs long before catastrophic failure. Five proven indicators that your water storage asset needs immediate professional attention.',
    content:
      "<p class=\"article-lead\">\n  Water tanks are the unsung heroes of countless industries, homes, and facilities — quietly ensuring water is stored and ready whenever it's needed. Steel, concrete, and polyethylene tanks all face the same reality: they degrade over time, and when they fail, the consequences are costly, disruptive, and sometimes dangerous.\n</p>\n\n<p>The Australian water industry has a useful benchmark for how stored water should be treated: like a food-grade product. You wouldn't leave an unlocked milk vat uninspected for a decade. Yet that is effectively what happens with thousands of water storage assets across the country. The warning signs are there — but only if you know what to look for.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/ticking-hero.jpg\" alt=\"Aging elevated water storage tank showing visible signs of deterioration\"/>\n  <figcaption><strong>Aging elevated water storage tank.</strong> Age alone is a risk factor, not a guarantee of failure — but material degradation timelines are well understood.</figcaption>\n</figure>\n\n<div class=\"article-divider\"><span>Warning sign 1 — Visible corrosion</span></div>\n\n<p>Visible corrosion is the most obvious sign — but it is rarely limited to what you can see on the surface. Rust streaks running down external walls, around fittings, or near overflow outlets signal surface corrosion. Inside the tank, brown, reddish, or cloudy water indicates internal steel components are breaking down. Blisters and bubbles beneath a coating are caused by sub-film corrosion — pitting that concentrates attack into small, deep zones that compromise structural integrity faster than surface rust.</p>\n\n<div class=\"article-divider\"><span>Warning sign 2 — Odour or colour changes in water</span></div>\n\n<p>Unusual odours or changes in water colour, taste, or clarity are direct indicators of contamination in the stored water. A tank with a damaged roof, corroded lining, or cracked access hatch can allow animal entry, sediment accumulation, and chemical leaching into treated drinking water. Hydrogen sulphide odour signals bacterial activity — particularly sulphate-reducing bacteria that attack the tank substrate at the molecular level, creating pitting that is often invisible until significant material loss has occurred.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/ticking-site-inspection.png\" alt=\"Professional site inspection of water storage tank condition\"/>\n    <figcaption>Site inspection identifies deterioration that is invisible from the outside — corrosion, liner failure, and sediment accumulation</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/ticking-corroded-leak.png\" alt=\"Close-up of corroded tank wall with visible leak point\"/>\n    <figcaption>Corroded tank wall with active leak — a failure mode that develops over years before becoming externally visible</figcaption>\n  </figure>\n</div>\n\n<div class=\"article-divider\"><span>Warning sign 3 — Leakage and moisture</span></div>\n\n<p>Leakage or damp patches around the tank base, at seams, or near foundation joints are a sign of structural compromise. If your tank is losing water without a visible external leak, internal corrosion may have created perforations. Even minor pitting can cause slow losses that go unnoticed for months. Moisture at the tank base — particularly near seams, welds, or where the tank meets the foundation slab — signals a potential breach.</p>\n\n<div class=\"article-divider\"><span>Warning sign 4 — Pressure or flow anomalies</span></div>\n\n<p>Inconsistent water pressure or unexpected flow variations can indicate partial blockages, valve issues, or sediment accumulation reducing effective storage volume. In fire water tanks under AS2304, pressure capacity is a compliance parameter — unexplained pressure loss triggers mandatory inspection under AS1851. Sediment that has accumulated on the tank floor reduces the available volume, affecting both pressure performance and system reliability during peak demand events.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">3–5×</span>\n  <span class=\"stat-label\">Cost multiplier between timely rehabilitation and emergency remediation or full replacement</span>\n</div>\n\n<div class=\"article-divider\"><span>Warning sign 5 — Age past major maintenance thresholds</span></div>\n\n<p>Tank age alone is a risk factor, not a guarantee of failure — but material degradation timelines are well understood. Epoxy internal coatings on steel tanks have a service life of 10–15 years from application before recoating becomes necessary. Polyethylene tanks under sustained UV exposure in Australian climates degrade faster than the same tanks in sheltered environments. RPVC liner seams under temperature cycling develop micro-tears at predictable rates. If your tank is approaching or past these thresholds without a condition assessment on record, the risk profile is material.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>A tank inspection at the right point in the deterioration cycle typically identifies rectification options at a fraction of the cost of the same tank identified later — after pitting has penetrated the steel, after liner seams have opened, after the roof access has allowed sustained contamination. The difference is consistently 3–5 times the remediation cost.</p>\n</blockquote>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What are the most common early warning signs of water tank failure?</p>\n  <p class=\"faq-a\">The five key warning signs are visible corrosion (rust streaks, blistered coating), changes in water colour, taste or odour, moisture or leakage at the tank base or seams, unexplained pressure or flow variations, and age past major maintenance thresholds (typically 10–15 years for epoxy-coated steel, faster in harsh environments).</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Can a water tank be inspected without taking it out of service?</p>\n  <p class=\"faq-a\">Yes. PC Water Infrastructure deploys ROV and UAV inspection capability capable of assessing tanks without full dewatering, reducing operational disruption while providing the condition data needed to make informed maintenance decisions — wall thickness readings, coating condition mapping, and penetration seal assessment.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">At what age should a steel water tank have a condition assessment?</p>\n  <p class=\"faq-a\">Epoxy internal coatings on steel tanks have a service life of 10–15 years from application. An independent condition assessment should be completed before this threshold — and if the tank is past 15 years without a formal inspection on record, an assessment is a priority. Ultrasonic wall thickness gauging should be included for any steel tank over 15 years old.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure deploys ROV and UAV inspection capability capable of assessing tanks without full dewatering. When you know exactly what condition your tank is in, every subsequent maintenance decision becomes commercial rather than speculative.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request a tank inspection</a>\n</div>",
    coverImageUrl: `${BASE}/ticking-hero.jpg`,
    readTime: '5 min read',
    status: 'published',
    seoTitle: 'Is Your Water Tank Failing? 5 Signs to Watch | PC Water',
    seoDescription:
      'Five proven warning signs your water tank is failing — corrosion, contamination, leaks, pressure loss, and age. What Australian asset owners must do before failure strikes.',
    publishedAt: '2026-04-05T09:00:00.000Z',
    createdAt: '2026-04-05T09:00:00.000Z',
    updatedAt: '2026-04-05T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-maintenance-tb', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-compliance-tb', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-asset-management-tb', name: 'Asset Management', slug: 'asset-management' },
    ],
  },
  {
    id: staticId('post', 'Corrosion Is Killing Your Storage Tanks'),
    title: 'Corrosion Is Killing Your Storage Tanks — And Here\'s How to Stop It',
    slug: 'corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it',
    excerpt:
      'Corrosion is the single most preventable cause of water tank failure in Australia. Learn to detect it early, choose the right coating system, and extend asset life without full replacement.',
    content:
      "<p class=\"article-lead\">\n  Corrosion is the single most preventable cause of water tank failure across mining, industrial, and government infrastructure in Australia. When oxygen, moisture, or aggressive water chemistry contacts unprotected steel, degradation starts immediately — and accelerates without intervention.\n</p>\n\n<p>The good news: with the right inspection programme, protective coating system, and lining strategy, most tanks can be extended well beyond their original design life without full replacement.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/corrosion-hero.jpg\" alt=\"Rust streaks and surface pitting on water storage tank exterior wall\"/>\n  <figcaption><strong>External corrosion.</strong> Rust streaks and surface pitting are visible indicators of a larger internal problem — the external wall reflects what is happening beneath the coating surface.</figcaption>\n</figure>\n\n<div class=\"article-divider\"><span>Understanding corrosion mechanisms</span></div>\n\n<p>Poor pH control, aggressive chlorination, and elevated chloride concentrations all accelerate internal corrosion. Tanks storing water with a pH below 7 are particularly at risk — acidic conditions strip protective oxide layers and attack base metal directly. A common but underappreciated source of localised corrosion is the interface between pipework and the tank structure. Ductile iron pipework passing through concrete walls creates a galvanic cell where dissimilar metals meet — accelerating corrosion at the contact point.</p>\n\n<p>Certain bacteria — particularly sulphate-reducing bacteria — metabolise sulphur compounds and produce hydrogen sulphide as a byproduct. This attacks the tank substrate at the molecular level, creating pitting that is often invisible until significant material loss has occurred. A single pinhole in an otherwise intact epoxy coating can produce more corrosion damage than an equivalent area of completely bare steel, because electrochemical current concentrates at the defect.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>A single pinhole in an otherwise intact epoxy coating can produce more corrosion damage than an equivalent area of completely bare steel, because electrochemical current concentrates at the defect. This is why coating holiday detection is critical at every inspection cycle.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>How to detect corrosion early</span></div>\n\n<p>Rust streaks running down external walls, around fittings, or near overflow outlets signal surface corrosion. Inside the tank, brown, reddish, or cloudy water indicates internal steel components are breaking down. Blisters and bubbles beneath a coating are caused by sub-film corrosion — pitting that concentrates attack into small, deep zones that compromise structural integrity faster than surface rust.</p>\n\n<p>Ultrasonic thickness gauging measures remaining wall steel. If measurements fall below original specification, corrosion is actively consuming material. Significant thinning reduces pressure capacity and collapse resistance — particularly critical for fire tanks operating under AS2304. Pair visual checks with professional inspections on a 1–4 year cycle, more frequently in coastal, mining, or high-chloride conditions.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/corrosion-coating-comparison.png\" alt=\"Corroded steel tank wall versus freshly epoxy-coated wall comparison\"/>\n    <figcaption>Corroded steel versus freshly coated wall — the critical difference is surface preparation, not just the coating system itself</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/corrosion-rov-inspection.png\" alt=\"ROV conducting underwater internal tank inspection\"/>\n    <figcaption>ROV internal inspection — wall thickness readings without dewatering, reducing operational disruption</figcaption>\n  </figure>\n</div>\n\n<div class=\"article-divider\"><span>Choosing the right coating system</span></div>\n\n<p>The single most important factor in coating system performance is not the coating — it is surface preparation. A high-quality epoxy system applied to a poorly prepared surface will fail within 2–3 years. A mid-grade epoxy applied over a correctly blasted, clean substrate will last 15 years or more. For immersed applications, coatings must be matched to the specific liquid stored. Potable water tanks require coatings compliant with AS4020, whilst wastewater or chemical storage tanks require chemical resistance data matched to the stored substance.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">15 yrs</span>\n  <span class=\"stat-label\">Service life of a correctly applied epoxy coating on properly blast-cleaned steel — versus 2–3 years on a poorly prepared surface</span>\n</div>\n\n<div class=\"article-divider\"><span>RPVC liners and cathodic protection</span></div>\n\n<p>RPVC liners and Glass Reinforced Plastic liners are the most cost-effective life-extension solution for ageing steel and concrete tanks. The liner creates a physical barrier between the stored water and the tank substrate — eliminating direct contact and halting internal corrosion entirely. PC Water Infrastructure has installed RPVC liners across town reservoirs for the Northern Peninsula Area Regional Council, health facilities, and mine sites including projects for Rio Tinto, BHP, and Veolia.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/corrosion-rpvc-liner.png\" alt=\"Workers installing RPVC liner inside a large concrete reservoir\"/>\n  <figcaption><strong>RPVC liner installation.</strong> The liner eliminates direct contact between stored water and the tank substrate, halting corrosion entirely and restoring compliance.</figcaption>\n</figure>\n\n<p>Cathodic protection works by making the tank's steel structure the cathode in an electrochemical circuit, preventing oxidation. Timing is critical — installed too early it provides little benefit, installed too late it cannot recover lost material. The best outcomes occur when cathodic protection is incorporated into a maintenance programme alongside a quality coating system, deployed at the point where coating holiday density starts to increase during routine inspection cycles.</p>\n\n<div class=\"article-divider\"><span>A practical corrosion prevention checklist</span></div>\n\n<ul>\n  <li>Annual visual inspection of accessible external surfaces</li>\n  <li>Professional internal inspection every 1–4 years calibrated to condition</li>\n  <li>Ultrasonic wall thickness gauging at each inspection for steel tanks over 15 years</li>\n  <li>Coating system renewal before holiday density exceeds 5% of surface area</li>\n  <li>Cathodic protection anode replacement on schedule</li>\n  <li>Outlet screen replacement from galvanised to HDPE at first internal renovation</li>\n</ul>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What causes microbiologically influenced corrosion (MIC) in water tanks?</p>\n  <p class=\"faq-a\">Sulphate-reducing bacteria metabolise sulphur compounds and produce hydrogen sulphide as a byproduct, attacking the tank substrate at the molecular level. MIC creates pitting that is often invisible until significant material loss has occurred, and is not detectable through visual inspection alone — ultrasonic wall thickness gauging is required.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How often should a steel water tank's internal coating be renewed?</p>\n  <p class=\"faq-a\">Epoxy internal coatings on steel tanks have a service life of 10–15 years from application before recoating becomes necessary. The trigger for recoating should be coating condition data from professional inspection — not a fixed calendar date. Coating renewal before holiday density exceeds 5% of surface area is the standard benchmark.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Does corrosion automatically mean a tank needs to be replaced?</p>\n  <p class=\"faq-a\">No. Corrosion does not automatically mean replacement. Refurbishment typically costs 30–60% of full replacement and can add 20–30 years to an asset's service life. RPVC liners, cathodic protection systems, and targeted steel repair are all alternatives to replacement for tanks where the structural shell remains sound.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure deploys ROV and UAV underwater drones and diving inspection teams capable of assessing tanks without full dewatering, minimising operational disruption.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request a corrosion assessment</a>\n</div>",
    coverImageUrl: `${BASE}/corrosion-hero.jpg`,
    readTime: '7 min read',
    status: 'published',
    seoTitle: 'Corrosion Is Killing Your Storage Tanks | PC Water',
    seoDescription:
      'Corrosion is the leading cause of premature tank failure in Australia. Learn to detect it early, choose the right coating, and extend asset life without full replacement.',
    publishedAt: '2026-04-07T09:00:00.000Z',
    createdAt: '2026-04-07T09:00:00.000Z',
    updatedAt: '2026-04-07T09:00:00.000Z',
    tags: [
      { id: 'tag-corrosion', name: 'Corrosion', slug: 'corrosion' },
      { id: 'tag-rpvc-liners', name: 'RPVC Liners', slug: 'rpvc-liners' },
      { id: 'tag-asset-management', name: 'Asset Management', slug: 'asset-management' },
    ],
  },
  {
    id: staticId('post', 'How RPVC Liners Extend The Life Of Aging Water Tanks'),
    title: 'How RPVC Liners Extend the Life of Aging Water Tanks',
    slug: 'how-rpvc-liners-extend-the-life-of-aging-water-tanks',
    excerpt:
      'Aging water storage tanks don\'t always need replacing. RPVC liners extend tank service life by 10–20 years at a fraction of replacement cost — while meeting AS2304 and AS1851 compliance requirements.',
    content:
      "<p class=\"article-lead\">\n  Aging water storage tanks are reaching the end of their service life across Australia. RPVC liners offer a proven third path — extending service life by 10 to 20 years at a fraction of replacement cost, while restoring compliance with AS2304, AS1851, and AS4020 requirements.\n</p>\n\n<p>For asset owners managing concrete and steel tanks approaching the end of viable internal coating cycles, RPVC lining is the decision worth understanding in detail.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/rpvc-hero.jpg\" alt=\"Interior of aging reservoir during RPVC liner installation\"/>\n  <figcaption><strong>RPVC liner installation in progress.</strong> The liner creates a complete physical barrier between stored water and the tank substrate, eliminating direct contact and halting internal corrosion.</figcaption>\n</figure>\n\n<div class=\"article-divider\"><span>The case for RPVC lining</span></div>\n\n<p>Mining operations, remote communities, and municipal utilities all face the same pattern: internal corrosion progressing unchecked, AS1851 inspection cycles revealing escalating deficiency counts, and a growing gap between the tank's current condition and what compliance requires. The choice appears to be full replacement at high cost, or ongoing reactive repair that never addresses the root cause. RPVC lining is a third option that asset owners frequently underutilise.</p>\n\n<p>An RPVC liner is a rigid polyvinyl chloride membrane installed inside an existing tank, bonded to the internal wall surface and sealed at all penetrations. It creates a complete physical barrier between the stored water and the tank substrate — ending direct contact between water and the corroding surface. Unlike internal coatings, which require blast-clean, application, and reapplication cycles, a correctly installed RPVC liner is a one-time installation with a design life that typically exceeds 20 years.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">30–50%</span>\n  <span class=\"stat-label\">Cost of RPVC relining compared to full tank replacement, with significantly lower operational disruption</span>\n</div>\n\n<div class=\"article-divider\"><span>Why RPVC stops the core problem</span></div>\n\n<p>Corrosion is not just a structural problem — it is a water quality problem. Internal corrosion in steel tanks introduces iron, zinc, and other metal compounds into stored water. In potable water tanks governed by AS4020, these contamination pathways create direct compliance failures. In fire water tanks under AS2304, corrosion reduces the structural integrity of the vessel and the reliability of the system under demand. RPVC lining eliminates both pathways simultaneously.</p>\n\n<p>The case for RPVC liners rests on four factors:</p>\n<ul>\n  <li><strong>Cost:</strong> relining consistently costs 30–50% of full tank replacement, with significantly lower disruption to site operations</li>\n  <li><strong>Compliance:</strong> RPVC materials used in potable water applications are AS4020 certified, restoring the tank's compliance status without a new asset</li>\n  <li><strong>Service life:</strong> design life of 20+ years from installation, with no recoating cycles</li>\n  <li><strong>Speed:</strong> a typically sized water tank can be lined within 2–5 days of dewatering and internal preparation, versus weeks for replacement</li>\n</ul>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/rpvc-completed-liner.png\" alt=\"Completed RPVC liner installation inside a large concrete reservoir\"/>\n  <figcaption><strong>Completed RPVC liner installation.</strong> A correctly executed installation leaves no unsupported liner sections, no voids behind the membrane, and no unsealed penetration points.</figcaption>\n</figure>\n\n<blockquote class=\"article-quotable\">\n  <p>PC Water Infrastructure completed RPVC liner installations for six town reservoirs for the Northern Peninsula Area Regional Council in Far North Queensland — a remote, high-humidity environment with aggressive water chemistry. The alternative — replacement — would have required significantly longer lead times and substantially higher capital expenditure.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>When RPVC makes the most difference</span></div>\n\n<p>RPVC liners make the most difference in three scenarios:</p>\n<ul>\n  <li>Steel tanks where the structural shell remains sound but internal coatings have failed beyond economic reapplication</li>\n  <li>Concrete tanks where joint sealant failures and surface carbonation have created contamination pathways</li>\n  <li>Older bolted steel panel tanks where individual panel replacements are no longer cost-effective but the bolt pattern structure remains intact</li>\n</ul>\n\n<p>In each case, the liner works with the existing structure rather than replacing it.</p>\n\n<div class=\"article-divider\"><span>The installation process</span></div>\n\n<p>The installation process follows a consistent sequence: dewatering and confined space preparation to AS2865; surface blast-cleaning to Sa2.5 standard; primer application to the prepared substrate; RPVC sheet installation and bonding; sealing of all penetrations including inlet, outlet, overflow, and scour connections; final inspection and pressure testing.</p>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How long does an RPVC liner last?</p>\n  <p class=\"faq-a\">A correctly installed RPVC liner has a design life that typically exceeds 20 years. Unlike epoxy internal coatings — which require reapplication cycles every 10–15 years — an RPVC liner is a one-time installation that eliminates ongoing recoating costs.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Does RPVC lining meet AS4020 for potable water?</p>\n  <p class=\"faq-a\">Yes. RPVC materials used in potable water applications are AS4020 certified, restoring the tank's compliance status for drinking water storage without requiring a new asset. This makes RPVC the preferred solution for aging potable water tanks approaching end of coating life.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What condition does a tank need to be in for RPVC relining?</p>\n  <p class=\"faq-a\">The structural shell must remain sound enough to support a liner installation. An independent condition inspection determines whether the shell is suitable, identifies the penetration configuration, and provides the deficiency register that informs the relining scope. Tanks with significant structural pitting may require targeted steel repair before lining.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How does RPVC relining compare to full tank replacement?</p>\n  <p class=\"faq-a\">Relining consistently costs 30–50% of full tank replacement, with significantly lower operational disruption. A typically sized water tank can be lined within 2–5 days of dewatering and internal preparation, versus weeks for replacement and the associated civil and connection works.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>For an accurate assessment of whether your tank is a candidate for RPVC relining, the starting point is always an independent condition inspection.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request a relining assessment</a>\n</div>",
    coverImageUrl: `${BASE}/rpvc-hero.jpg`,
    readTime: '5 min read',
    status: 'published',
    seoTitle: 'How RPVC Liners Extend Aging Water Tank Life | PC Water',
    seoDescription:
      'Aging water storage tanks don\'t always need replacing. RPVC liners extend tank service life by 10–20 years at a fraction of replacement cost.',
    publishedAt: '2026-04-09T09:00:00.000Z',
    createdAt: '2026-04-09T09:00:00.000Z',
    updatedAt: '2026-04-09T09:00:00.000Z',
    tags: [
      { id: 'tag-rpvc-liners-2', name: 'RPVC Liners', slug: 'rpvc-liners' },
      { id: 'tag-tank-maintenance-rpvc', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-asset-management-rpvc', name: 'Asset Management', slug: 'asset-management' },
    ],
  },
  {
    id: staticId('post', 'Water Storage In Harsh Environments'),
    title: 'Water Storage in Harsh Environments: What You Need to Know',
    slug: 'water-storage-in-harsh-environments-what-you-need-to-know',
    excerpt:
      'Mining zones, island communities, remote outback — water storage in harsh Australian environments demands more than standard design. Here\'s what actually works in the field.',
    content:
      "<p class=\"article-lead\">\n  When most people think about water tanks, they picture something simple. But in mining zones, remote communities, and harsh climates across Australia and the Pacific, water storage is one of the most technically demanding infrastructure challenges a project can face.\n</p>\n\n<p>The environment exposes every weak specification decision quickly — and the cost of failure is measured not just in dollars, but in operational shutdowns and community water security.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/harsh-env-hero.jpg\" alt=\"Remote water storage tank in harsh Australian environment\"/>\n  <figcaption><strong>Remote water storage infrastructure.</strong> In remote locations, there is no local trade supplier, no quick callout, and no redundancy if the primary storage fails.</figcaption>\n</figure>\n\n<div class=\"article-divider\"><span>What harsh environments reveal</span></div>\n\n<p>Harsh environments expose weaknesses that controlled conditions would never reveal. UV degradation on polyethylene tanks in Australian climates significantly reduces service life compared to manufacturer expectations derived from temperate environment testing. High-dust conditions in mining zones cause turbine ventilation units to seize, leaving tanks fully open to vermin and contamination. Temperature cycling in remote outback environments — where ambient temperatures swing 40 degrees between day and night — stresses liner seams, joint sealants, and base fittings at rates that standard design cycles do not account for.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/harsh-env-corrosion.png\" alt=\"Internal corrosion in a water storage tank exposed to harsh conditions\"/>\n    <figcaption>Internal corrosion accelerated by coastal chloride exposure and aggressive water chemistry</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/harsh-env-drone.png\" alt=\"Drone conducting external inspection of remote water storage tank\"/>\n    <figcaption>Drone inspection of external tank condition — reducing access risk in remote locations</figcaption>\n  </figure>\n</div>\n\n<p>Coastal and island environments introduce salt-laden air and elevated chloride exposure. In these conditions, standard galvanised components corrode within seasons. Dissimilar metal connections corrode at accelerated rates. Roof fixings and access ladder brackets that would last decades in a temperate environment become replacement items within years. Material specification in these environments must account for the actual exposure profile, not the generic Australian standard.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">40°C</span>\n  <span class=\"stat-label\">Day-to-night temperature swing in remote outback environments — stressing liner seams and fittings beyond standard design assumptions</span>\n</div>\n\n<div class=\"article-divider\"><span>Inspection without full dewatering</span></div>\n\n<p>Inspection in remote environments presents its own challenge. Full dewatering is not always operationally viable — the tank cannot be taken out of service for the duration required by a conventional inspection approach. PC Water Infrastructure deploys ROV and UAV inspection technology capable of assessing tank internal and external condition without dewatering, providing the same condition data that a drained inspection would deliver, without the operational disruption.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/harsh-env-rov.png\" alt=\"ROV conducting underwater internal inspection of water storage tank\"/>\n    <figcaption>ROV internal inspection — wall thickness readings and coating condition mapping without dewatering</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/harsh-env-modular.png\" alt=\"Aerial view of modular water storage installation at remote site\"/>\n    <figcaption>Remote site installation — logistics planning and community-aware delivery scheduling are critical to project success</figcaption>\n  </figure>\n</div>\n\n<blockquote class=\"article-quotable\">\n  <p>The Northern Peninsula Area Regional Council reservoir relining program — six town water reservoirs across a remote Far North Queensland region — demonstrates how a structured, multi-asset mobilisation approach delivers better outcomes than individual reactive responses. Assessing all six assets under a single inspection program, then executing relining under a single mobilised trade team, achieved cost efficiencies and quality consistency that individual site responses could not have matched.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>Design principles for harsh conditions</span></div>\n\n<p>The design principles that separate tanks that perform in harsh conditions from those that fail early are consistent:</p>\n<ul>\n  <li>Material selection matched to the actual exposure profile</li>\n  <li>Coating and liner systems rated for the temperature range and water chemistry of the specific site</li>\n  <li>Structural design accounting for the access and maintenance constraints of the location</li>\n  <li>Commissioning that includes a documented baseline condition assessment — so the first inspection has a reference point to compare against</li>\n</ul>\n\n<p>For new installations in remote or harsh environments, the procurement decision is as important as the engineering. A tank specified correctly for the environment and installed with the right materials and quality controls will cost more at procurement than a standard specification. The difference is recovered many times over in extended service life, reduced maintenance frequency, and avoided emergency remediation costs — especially in remote locations where every mobilisation carries a significant logistics cost.</p>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What makes coastal and island environments particularly challenging for water tanks?</p>\n  <p class=\"faq-a\">Salt-laden air and elevated chloride exposure accelerate corrosion of standard galvanised components, dissimilar metal connections, and roof fixings at rates that would not occur in temperate environments. Material specification must account for the actual exposure profile — stainless steel or HDPE alternatives are often required where galvanised components would be standard elsewhere.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Can a tank be inspected without taking it offline in a remote location?</p>\n  <p class=\"faq-a\">Yes. PC Water Infrastructure deploys ROV (remotely operated vehicle) and UAV drone inspection technology capable of assessing tank internal and external condition without dewatering. This provides wall thickness readings, coating condition mapping, and penetration seal assessment without the operational disruption of full dewatering.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What tank materials perform best in high-UV Australian outback environments?</p>\n  <p class=\"faq-a\">Steel tanks with RPVC liners or high-performance epoxy coatings outperform polyethylene in sustained high-UV environments, where UV degradation significantly reduces polyethylene service life below manufacturer expectations. Stainless steel and fibreglass tanks eliminate most corrosion risk at source and perform well in high-UV, high-temperature environments.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure has delivered water storage infrastructure in remote Far North Queensland, island communities, mining operations, and harsh outback environments across Australia.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Discuss your remote project</a>\n</div>",
    coverImageUrl: `${BASE}/harsh-env-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: 'Water Storage in Harsh Environments | PC Water',
    seoDescription:
      'Mining zones, island communities, remote outback — water storage in harsh Australian environments demands more than standard design.',
    publishedAt: '2026-04-11T09:00:00.000Z',
    createdAt: '2026-04-11T09:00:00.000Z',
    updatedAt: '2026-04-11T09:00:00.000Z',
    tags: [
      { id: 'tag-remote-projects', name: 'Remote Projects', slug: 'remote-projects' },
      { id: 'tag-asset-management-he', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-tank-maintenance-he', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'How We Clean A Water Tank Diver Vacuuming'),
    title: 'How We Clean a Water Tank: The Diver Vacuuming Method',
    slug: 'how-we-clean-a-water-tank-diver-vacuuming-method',
    excerpt:
      'A specialist diver descends while your taps keep running. This is exactly how we clean a water storage tank without taking it offline — and how often it actually needs to happen.',
    content:
      "<p class=\"article-lead\">\n  Most people have never thought about how a water tank gets cleaned. The answer might surprise you: a specialist diver goes in while the tank is still full — and your taps keep running the whole time.\n</p>\n\n<p>This is diver vacuuming — the method that replaced the old drain-and-sweep approach and became the standard for potable water storage tank cleaning in Australia. No service disruption. No confined-space entry for the crew outside. And critically, the tank stays online.</p>\n\n<figure class=\"article-video-embed\" style=\"margin:40px 0;border-radius:12px;overflow:hidden;\">\n  <iframe width=\"100%\" style=\"aspect-ratio:16/9;display:block;\" src=\"https://www.youtube.com/embed/5mIIj7CTKh4\" title=\"Diver Vacuuming Sediment from a Water Reservoir\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n  <figcaption style=\"background:#f9fafb;padding:10px 16px;font-size:12.5px;color:#6b7280;border-top:1px solid #e5e7eb;\">Diver vacuuming sediment from the floor of a concrete reservoir — tank remains online and in service throughout.</figcaption>\n</figure>\n\n<p>The diver works in a dry suit and full-face mask — not for their safety, but for the water's. Every piece of equipment that enters a potable tank is dedicated to that tank, disinfected, and strictly controlled.</p>\n\n<div class=\"article-divider\"><span>How it works — step by step</span></div>\n\n<p>The process follows a consistent four-step pattern regardless of tank size. The tank stays full (or nearly full) so the vacuum pump can prime over the top. The diver maps a systematic vacuum pattern covering the full floor including hard-to-reach zones around posts and pipework. Three vacuum head sizes handle different sediment types — sticky, loose, and fine — and all sediment exits via hose to a settling tank outside. It never re-enters the supply. And the few hours spent onsite are typically the only human contact the tank receives in years — so cleaning and condition assessment happen in one visit.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>Diver vacuuming allows a water storage tank to be cleaned without taking it offline. A specialist diver enters the full tank in a dry suit and full-face mask — using dedicated, disinfected equipment — and removes sediment via a vacuum system that exits the tank without re-entering the water supply. Keeping sediment loads below 15mm is the difference between a routine clean and an emergency remediation.</p>\n</blockquote>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">15mm</span>\n  <span class=\"stat-label\">The sediment threshold — keep loads below this and every downstream job becomes faster, cheaper, and lower risk</span>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What is diver vacuuming in water tank cleaning?</p>\n  <p class=\"faq-a\">Diver vacuuming is the standard method for cleaning potable water storage tanks in Australia. A specialist diver enters the tank in a dry suit and full-face mask, using a vacuum system to remove sediment from the floor while the tank remains full and in service. Water supply is not interrupted at any point during the process.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Can a water storage tank be cleaned while it is still in service?</p>\n  <p class=\"faq-a\">Yes. Diver vacuuming is specifically designed for in-service cleaning. The tank stays online and water supply continues uninterrupted throughout the entire process. This makes it the preferred method for utilities and councils who cannot afford service disruption.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How often should a potable water storage tank be cleaned?</p>\n  <p class=\"faq-a\">Cleaning intervals depend on water source and tank type. Clear water storage at a treatment plant typically requires cleaning every 6–12 months. Standard distribution tanks range from 4–6 years. Bore water tanks with high iron or manganese content should be cleaned every 2–4 years.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure provides potable water tank cleaning and condition assessment across Australia, including diver vacuuming, ROV inspection, and combined clean-and-assess site visits.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Book a tank clean</a>\n</div>",
    coverImageUrl: `${BASE}/water-food-diver.png`,
    readTime: '4 min read',
    status: 'published',
    seoTitle: 'How We Clean a Water Tank: The Diver Vacuuming Method | PC Water',
    seoDescription:
      'A diver descends while your taps keep running. Diver vacuuming, cleaning intervals by tank type, and what sediment levels mean for water quality and cost.',
    publishedAt: '2026-05-01T09:00:00.000Z',
    createdAt: '2026-05-01T09:00:00.000Z',
    updatedAt: '2026-05-01T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-cleaning', name: 'Tank Cleaning', slug: 'tank-cleaning' },
      { id: 'tag-potable-water-dv', name: 'Potable Water', slug: 'potable-water' },
      { id: 'tag-tank-maintenance-dv', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', '5 Contamination Risks Not Source Water'),
    title: '5 Contamination Risks That Have Nothing To Do With the Source Water',
    slug: '5-contamination-risks-not-source-water',
    excerpt:
      'Most water quality failures get blamed on the source. But when a trained inspector reads the evidence inside the tank, the trail almost always leads somewhere else — to the vessel itself.',
    content:
      "<p class=\"article-lead\">\n  Most water quality failures get blamed on the treatment process or the source catchment. But when a diver goes in to investigate, the evidence trail almost always leads somewhere else — to the asset itself.\n</p>\n\n<p>A trained inspector doesn't start by testing the water. They start by reading what's inside the tank — the physical evidence left by each contamination pathway.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">10</span>\n  <span class=\"stat-label\">Distinct contamination indicators a trained inspector reads from a tank interior — before a single water quality test is run.</span>\n</div>\n\n<div class=\"article-divider\"><span>Risk 1 — Open overflow drain points and animal entry</span></div>\n\n<p>Birds are the most common animal body found inside Australian water storage tanks. Snakes, frogs, rabbits, and feral cats follow. In almost all cases, they entered through one of three places: an open overflow drain point, a damaged access hatch, or deteriorated vent mesh. Without a flapper valve fitted to the drain end, it is an open invitation.</p>\n\n<div class=\"article-divider\"><span>Risk 2 — Vandalism and compromised hatch security</span></div>\n\n<p>Rocks and rubbish found inside a tank during inspection are the most unambiguous indicator of vandalism: they didn't fall in by accident. A hatch left open after a vandal event exposes the tank to the full range of animal entry risks. Neither risk resolves itself — the exposure continues until a site visit identifies and rectifies the damage.</p>\n\n<div class=\"article-divider\"><span>Risk 3 — Environmental debris and airborne contamination</span></div>\n\n<p>Leaf debris and grass litter inside a tank tell two stories: the vent mesh is too coarse, and maintenance contractors don't understand they're working near a potable water asset. In Australian conditions, dust accumulation inside tanks — particularly in agricultural regions and near unsealed roads — can be significant.</p>\n\n<div class=\"article-divider\"><span>Risk 4 — Sediment accumulation and mixing failures</span></div>\n\n<p>Sediment on the <em>walls</em> — not the floor — indicates inadequate cycling. Water that stratifies and sits still allows suspended particles to settle at the waterline. Black sediment or floc carry-over points to treatment plant operational issues — the one contamination risk on this list that originates upstream, but whose evidence lives in the tank.</p>\n\n<div class=\"article-divider\"><span>Risk 5 — Contractor and maintenance activity</span></div>\n\n<p>Contractors performing legitimate work above a tank are working directly above the water stored below. Construction debris, fasteners, drilling swarf, and sealant residue all have a path into the tank if work isn't managed correctly. Any construction on a potable water tank should include contractor induction and a post-works internal inspection before the asset is returned to service.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>Following the evidence trail will assist in determining the source of the contamination to ensure the consumers are not exposed to unsafe water. A lot of water quality issues can be identified — and often solved — by a fresh eyes approach to inspecting assets.</p>\n</blockquote>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Can water be contaminated if it comes from a clean treated source?</p>\n  <p class=\"faq-a\">Yes. Treated water that enters storage in excellent condition can be re-contaminated by the vessel holding it. Animal entry, environmental debris, sediment accumulation, maintenance activity, and vandalism all represent contamination pathways that exist entirely within the storage asset — independent of source water quality.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What does sediment on the walls of a water tank indicate?</p>\n  <p class=\"faq-a\">Sediment banding on walls rather than the floor indicates historical water level fluctuation combined with inadequate tank cycling. The minerals and organic matter suspended in the water settled at the waterline as the level dropped, leaving a physical record of historical drawdown events.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure provides independent inspection and condition assessment for potable water storage assets across Australia — identifying contamination pathways before they become water quality events.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request an inspection</a>\n</div>",
    coverImageUrl: `${BASE}/corrosion-rov-inspection.png`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: '5 Water Tank Contamination Risks | PC Water',
    seoDescription:
      'Most water quality failures get blamed on the source. But five contamination risks exist entirely within the storage asset — and none are visible at the tap until it\'s too late.',
    publishedAt: '2026-05-08T09:00:00.000Z',
    createdAt: '2026-05-08T09:00:00.000Z',
    updatedAt: '2026-05-08T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-inspection-cr', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-compliance-cr', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Evidence Water Quality Issues Warning Signs'),
    title: 'The Tank Is Already Telling You — How to Read the Evidence of Water Quality Issues',
    slug: 'evidence-water-quality-issues-warning-signs',
    excerpt:
      'Water quality inspectors don\'t just test water — they read the tank. Every piece of physical evidence inside a storage tank is a clue, and every clue points somewhere specific.',
    content:
      "<p class=\"article-lead\">\n  Water quality inspectors don't just test water — they read the tank. Every piece of physical evidence inside a storage tank is a clue, and every clue points somewhere specific.\n</p>\n\n<p>This is the practical skill that separates a compliance tick-box inspection from one that actually protects water quality. A diver who enters a tank sees a complete picture of what has been happening to the water held inside it — often for years before the inspection ever occurred.</p>\n\n<div class=\"article-divider\"><span>Start at the waterline</span></div>\n\n<p>The waterline is the first place an experienced inspector looks. Staining at the waterline tells you the tank has experienced historical water level fluctuation — minerals and organic matter left behind as the water receded. Multiple stain bands at different heights means the water level has cycled repeatedly. Floating debris on the water surface is typically evidence of inadequate vent mesh protection.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">8+</span>\n  <span class=\"stat-label\">Distinct evidence categories an experienced inspector reads from a storage tank interior — each pointing to a specific contamination source</span>\n</div>\n\n<div class=\"article-divider\"><span>What the animals tell you</span></div>\n\n<p>An animal carcass found inside a tank tells you which access pathway failed. A bird near the roof entered through a roof penetration. A frog on the floor entered through the overflow drain pipe during an overflow event, then couldn't get back out. A rabbit or feral cat on the floor entered through the access hatch — most likely when the hatch was left open or the lock was damaged. All of these events are preventable with the right hardware fitted and maintained.</p>\n\n<div class=\"article-divider\"><span>What the sediment tells you</span></div>\n\n<p>Standard grey-brown silt accumulating uniformly on the floor is normal operational accumulation. Black sediment is a different matter — typically iron and manganese precipitates, or decomposing organic matter pointing to biological activity. Sediment concentrated near the inlet indicates high-velocity turbulence. Sediment on walls rather than the floor indicates inadequate cycling.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>The tank is not a passive vessel — it's a record of everything that has happened to the water inside it. A diver with the right training reads that record as clearly as a doctor reads an X-ray. The difference is that the doctor's patient can describe their symptoms. The tank can't. The evidence is the only voice it has.</p>\n</blockquote>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What does floating debris inside a water storage tank indicate?</p>\n  <p class=\"faq-a\">Floating debris on the water surface typically indicates that vent mesh protection is inadequate. The material is entering through roof vents or gaps in the roof structure that admit airborne particulates. Upgrading to finer mesh on all vents and sealing roof edge flashings resolves the majority of floating debris findings.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What does sediment on the walls of a water tank mean?</p>\n  <p class=\"faq-a\">Sediment banding on walls indicates historical water level fluctuation combined with inadequate tank cycling. The minerals and organic matter suspended in the water settled at the waterline as the level dropped, leaving a physical record. Multiple banding levels indicate repeated drawdown events.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How do you trace the source of contamination in a water storage tank?</p>\n  <p class=\"faq-a\">An experienced inspector reads the physical evidence in the tank — the location of animal remains, the distribution and type of sediment, staining patterns on the walls, the condition of roof vents and access hatches — and maps each piece of evidence to a specific entry pathway or upstream cause.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure provides specialist inspection and condition assessment for water storage assets across Australia — reading the evidence inside the tank before it becomes a water quality event.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request an inspection</a>\n</div>",
    coverImageUrl: `${BASE}/ticking-site-inspection.png`,
    readTime: '5 min read',
    status: 'published',
    seoTitle: 'How to Read Water Quality Warning Signs in a Storage Tank | PC Water',
    seoDescription:
      'Every piece of physical evidence inside a water storage tank is a clue — floating debris, sediment, staining, and animal remains each point to a specific contamination source.',
    publishedAt: '2026-05-15T09:00:00.000Z',
    createdAt: '2026-05-15T09:00:00.000Z',
    updatedAt: '2026-05-15T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-ev', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-inspection-ev', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-potable-water-ev', name: 'Potable Water', slug: 'potable-water' },
    ],
  },
  {
    id: staticId('post', 'The Open Overflow Wildlife Drain Point'),
    title: 'The Open Overflow: How Wildlife Gets In Through Your Drain Point',
    slug: 'the-open-overflow-wildlife-drain-point',
    excerpt:
      'The overflow drain is one of the most overlooked animal entry points in water storage. Here\'s how wildlife gets in, why they can\'t get out, and what a flapper valve costs versus what a contamination event costs.',
    content:
      "<p class=\"article-lead\">\n  The overflow drain is a critical safeguard — it stops your tank from being overpressured. But for most of the year, the open end sitting in the grass isn't releasing water. It's providing shelter.\n</p>\n\n<p>One of the most overlooked animal entry pathways sits at ground level, away from the tank, pointing at a paddock: the overflow drain point. The overflow pipe itself is essential — it prevents structural overpressure when a tank reaches capacity, routing excess water to a drain or soakage area. The riser climbs from the tank's high-water mark to an outlet positioned some distance from the tank perimeter. And the drain end? It sits open, waiting for the next overflow event — which, in most potable water systems, might not happen for months.</p>\n\n<div class=\"article-divider\"><span>The problem with open ends</span></div>\n\n<p>A dry, dark, sheltered pipe sitting in an Australian paddock is not just infrastructure. To the local wildlife, it's a burrow. A snake smells water. A rabbit follows the scent. A feral cat investigates the opening. The overflow riser runs straight up into the tank interior — and once an animal climbs it, the confined space they find at the top offers no route back.</p>\n\n<p>They drown. The carcass contaminates the stored water. And unless the tank is on a regular inspection cycle, no one knows until the distribution system starts delivering the evidence.</p>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">#1</span>\n  <span class=\"stat-label\">Birds are the most common animal body found inside Australian water storage tanks — but they're not the only ones.</span>\n</div>\n\n<div class=\"article-divider\"><span>The four access pathways</span></div>\n\n<p>The overflow drain is the most overlooked route. But it's not the only one. Animal entry into water storage tanks happens through four distinct pathways, and in most cases more than one is active at a time.</p>\n\n<p><strong>1. The overflow drain point</strong> — An open-ended drain pipe with no valve. Overflow events are rare. Between events, the pipe is dry and hospitable. Rabbits, cats, and snakes are the most common entrants — small enough to fit the pipe diameter, drawn in by the smell of water. A flapper valve eliminates this risk entirely.</p>\n\n<p><strong>2. Vandal-damaged or unsealed access hatches</strong> — Vandal activity can leave hatches open or damage locking mechanisms. On inground tanks especially, an open hatch can admit larger animals — possums, goannas, and in rare cases feral foxes. Regular hatch audits are not optional maintenance; they're the line between a secure asset and an exposed one.</p>\n\n<p><strong>3. Deteriorated vent mesh and roof edge flashings</strong> — Smaller birds don't require much space. Unsealed roof edge flashings and damaged or poorly installed vent mesh are the primary entry routes for small birds seeking protected nesting areas. Birds can enter freely, nest within the tank, and — when they can't find their way back out — die there. The nesting material alone constitutes a contamination risk.</p>\n\n<p><strong>4. Overhanging trees and surrounding bushland</strong> — Proximity to bushland increases the pressure on all of the above. Overhanging trees provide a physical bridge from ground-level habitat to roof-level entry points. Keeping vegetation cut back from the tank perimeter is passive exclusion management.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>The overflow drain is designed to release water once or twice a year. For the other 363 days, the open end sitting in the grass isn't managing hydraulic pressure — it's managing shelter demand. A flapper valve resolves both functions. Without one, you're managing only the first.</p>\n</blockquote>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">&lt;$500</span>\n  <span class=\"stat-label\">Typical cost of a flapper valve and installation — compare to a contamination response event that can run to tens of thousands</span>\n</div>\n\n<div class=\"article-divider\"><span>What prevention actually looks like</span></div>\n\n<p>When our divers go into a tank, animal remains are one of the more common findings — particularly small birds near the roof structure and larger animals on the floor. The presence of remains is a direct indicator of an access failure. And in every case, the evidence trail leads back to one of the four pathways above.</p>\n\n<p><strong>Fit a flapper valve to the overflow drain end.</strong> A flapper valve — also called a check valve or duck-bill valve — is a one-way seal that opens under flow pressure during an overflow event and stays closed otherwise. It is the single most cost-effective animal exclusion measure available for an overflow drain point. If your overflow drain ends are open, this is the first thing to address.</p>\n\n<p><strong>Inspect and upgrade vent mesh.</strong> Vent mesh deteriorates. Corrosion eats through it; physical damage distorts it; poor installation leaves gaps around the edges. Any mesh with holes, missing sections, or inadequate gauge for the local fauna should be replaced. Fine mesh that keeps insects out will also keep small birds out.</p>\n\n<p><strong>Audit hatch condition and locking.</strong> A hatch that can be opened by hand — by a person or a determined large mammal — is not a secure closure. Tamper-resistant latches and proper sealing around the hatch frame should be standard on any potable water asset. Hatch condition should be recorded at every inspection.</p>\n\n<p><strong>Clear vegetation from the tank perimeter.</strong> Overhanging branches, long grass around the overflow drain, and dense scrub against the tank wall all increase the likelihood of animal contact with entry points. A maintained perimeter is passive exclusion.</p>\n\n<table style=\"width:100%;border-collapse:collapse;margin:32px 0;font-size:14px;\">\n  <thead>\n    <tr style=\"background:#0d1b2a;\">\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Exclusion measure</th>\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Target entry pathway</th>\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Priority</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Flapper valve on all overflow drain ends</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Overflow riser — small mammals, snakes, frogs</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;\">High</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Vegetation cleared from tank perimeter</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">All ground-level and roof-level pathways</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;\">High</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Vent mesh inspected and replaced where damaged</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Vent openings — small birds, insects</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;\">High</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Roof edge flashings sealed</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Roof-level gaps — small birds</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Medium</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Access hatches locked and properly sealed</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Hatch openings — larger animals, vandal access</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;font-weight:600;\">High</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>The obligation to maintain water quality from storage to tap is established in the Australian Drinking Water Guidelines (NHMRC) and supported by <strong>AS/NZS 4766</strong>. Any inspection finding of an open overflow drain point, damaged vent mesh, or compromised hatch should be flagged as a rectification item in the asset's formal condition report — not deferred to the next scheduled maintenance cycle.</p>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How do animals get into water storage tanks through the overflow pipe?</p>\n  <p class=\"faq-a\">The overflow drain point is typically an open-ended pipe situated away from the tank. Because overflow events are rare, the pipe stays dry most of the time — making it a sheltered, attractive space for native wildlife. Small animals including rabbits, cats, snakes, and frogs can smell stored water, enter the open end, climb the overflow riser, and fall into the tank with no means of escape. They then drown and contaminate the stored water.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What is a flapper valve and why should it be fitted to overflow drain points?</p>\n  <p class=\"faq-a\">A flapper valve is a simple one-way seal fitted to the end of an overflow pipe. It opens under flow pressure during an overflow event and stays closed at all other times, preventing animal entry. It is one of the most cost-effective measures for protecting potable water storage from wildlife contamination — the valve itself is inexpensive, and the surrounding area should also be kept clear of vegetation.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What types of animals are most commonly found inside Australian water tanks?</p>\n  <p class=\"faq-a\">Birds are the most common bodies found inside tanks. Small birds seek protected nesting spaces and can enter through unsealed roof edge flashings or damaged vent mesh. Snakes, frogs, rabbits, and feral cats are also regularly found — typically entering through open overflow drain points. On inground tanks with significant structural breaches, larger animals including possums and goannas have been recorded.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How do I know if an animal has entered my water storage tank?</p>\n  <p class=\"faq-a\">The earliest indicators are often changes in water quality — unusual turbidity, odour, or taste in the distribution system. During internal inspections, divers or technicians may find animal remains on the tank floor, nesting material near roof structures, or physical damage to vent mesh and flashings. Any confirmed animal entry should be treated as a contamination event requiring immediate response under the Australian Drinking Water Guidelines (NHMRC).</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Is an open overflow drain a compliance issue under Australian standards?</p>\n  <p class=\"faq-a\">Open overflow drain points that allow animal or debris entry are inconsistent with the duty to maintain water quality from storage to tap, established in the Australian Drinking Water Guidelines (NHMRC) and supported by <strong>AS/NZS 4766</strong>. While no single clause mandates a specific valve type, any inspection finding of an open overflow drain point should be flagged as a rectification item in the asset's condition assessment report.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>PC Water Infrastructure conducts overflow drain and access pathway audits as part of every tank inspection program across Australia — identifying animal entry points before they become contamination events.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request a pathway audit</a>\n</div>",
    coverImageUrl: `${BASE}/harsh-env-drone.png`,
    readTime: '5 min read',
    status: 'published',
    seoTitle: 'Wildlife Entry Through Tank Overflow Drain | PC Water',
    seoDescription:
      'The overflow drain is the most overlooked animal entry point in water storage. Here\'s how wildlife gets in, why they can\'t get out, and what a flapper valve costs versus a contamination event.',
    publishedAt: '2026-05-22T09:00:00.000Z',
    createdAt: '2026-05-22T09:00:00.000Z',
    updatedAt: '2026-06-09T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-oo', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-maintenance-oo', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-compliance-oo', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Birds Are The Most Common Body Found Inside Australian Tanks'),
    title: 'Birds Are the Most Common Body Found Inside Australian Tanks',
    slug: 'birds-are-the-most-common-body-found-inside-australian-tanks',
    excerpt:
      'When birds turn up inside a potable water tank, the problem is not random wildlife. It is a roof, hatch, or vent exclusion failure that needs investigation.',
    content:
      "<p class=\"article-lead\">\n  When a bird turns up inside a potable water tank, the finding is not random wildlife. It is evidence that a roof-level exclusion barrier has failed.\n</p>\n\n<p>In <a href=\"/resources/evidence-water-quality-issues-warning-signs\">our earlier post on reading contamination evidence</a>, we made the point that the tank records what has been happening long before a complaint reaches the operator. Bird remains are one of the clearest examples. They tell you the problem is not at the treatment plant and not out in the reticulation. The problem is the tank itself.</p>\n\n<p>We've also covered the ground-level wildlife pathway in <a href=\"/resources/the-open-overflow-wildlife-drain-point\">The Open Overflow</a>. Birds are different. They usually enter from above — through damaged vent mesh, unsealed roof edge flashings, ridge gaps, or a hatch that was left insecure after inspection, maintenance, or vandal activity.</p>\n\n<div class=\"article-divider\"><span>Why birds show up so often</span></div>\n\n<p>Birds do not need a large breach. A small opening near a vent, roof seam, or hatch perimeter is enough. Potable water tanks also offer what birds seek: shade, shelter from weather, and a quiet perch point away from predators. Once they enter the roof space or tank interior, many cannot orient themselves to escape. Smooth internal walls and dark confined spaces work against them.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/birds-tank-vent-gap.png\" alt=\"Damaged roof vent mesh on a water storage tank creating a bird entry gap\" style=\"width:100%;display:block;border-radius:10px;aspect-ratio:16/9;object-fit:cover;\"/>\n  <figcaption><strong>Small opening, major consequence.</strong> Birds do not need a large breach. A damaged vent screen or roof gap is enough to turn a sanitary tank into an entry point.</figcaption>\n</figure>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">#1</span>\n  <span class=\"stat-label\">Birds are the most common bodies found inside Australian water storage tanks because the most common exclusion failures happen at roof level.</span>\n</div>\n\n<div class=\"article-divider\"><span>What bird evidence actually tells you</span></div>\n\n<p>A bird inside the tank is not just a contamination finding. It is a structural clue. The type of evidence narrows the likely pathway:</p>\n\n<p><strong>Feathers at the waterline</strong> — Feathers floating at the top water line indicate active or recent entry. An inspector should move immediately to the vent openings, roof edge flashings, ridge capping, and hatch seals.</p>\n\n<p><strong>Nesting material on roof framing</strong> — Twigs, grass, and down near roof members indicate birds are not just getting in, they are attempting to occupy the space. That usually means the opening has existed for some time.</p>\n\n<p><strong>Droppings around hatches or vent zones</strong> — Bird fouling concentrated near a hatch cover or vent screen often shows the exact perch point being used.</p>\n\n<p><strong>A carcass on the floor</strong> — At that point the issue has progressed from exclusion failure to confirmed contamination event. The response needs to deal with both: remove the contamination and close the pathway that allowed it.</p>\n\n<blockquote class=\"article-quotable\">\n  <p>A bird in a water tank is never just a bird. It is proof that the roof, hatch, or vent barrier stopped being a barrier.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>The risk is bigger than the carcass</span></div>\n\n<p>Asset owners sometimes think the problem begins and ends with the body itself. It does not. Feathers, faeces, nesting material, microbial load, and the likelihood of repeat entry all matter. If one bird got in, the pathway is still open for the next one.</p>\n\n<p>That is why the response should not be limited to clean-up. It should include a roof-level exclusion audit, repair of all damaged screens and seals, and confirmation that the hatch and surrounding platform area remain weather-tight. The practical expectation from the Australian Drinking Water Guidelines (NHMRC), supported by <strong>AS/NZS 4766</strong> where relevant, is simple: the stored water must be protected from external contamination.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/birds-tank-feather-evidence.png\" alt=\"Feathers floating at the waterline inside a potable water storage tank\"/>\n    <figcaption><strong>Waterline evidence.</strong> Feathers and light biological debris at the surface tell an inspector that the entry pathway is active or was active very recently.</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/birds-tank-damaged-mesh.png\" alt=\"Corroded vent mesh on a water tank with visible tears and gaps\"/>\n    <figcaption><strong>Failed exclusion screen.</strong> Once fine mesh is torn, corroded, or poorly fixed to its frame, birds can exploit the gap surprisingly quickly.</figcaption>\n  </figure>\n</div>\n\n<table style=\"width:100%;border-collapse:collapse;margin:32px 0;font-size:14px;\">\n  <thead>\n    <tr style=\"background:#0d1b2a;\">\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Finding</th>\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Most likely pathway</th>\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">First action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Feathers at waterline</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Vent screen failure or roof gap</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Inspect all vents, ridge capping, and flashings</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Nesting material on roof members</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Longstanding roof-level opening</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Identify opening, remove material, reseal entry point</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Droppings near hatch perimeter</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Hatch perch point or poor hatch drainage</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Check hatch seal, drainage path, and cover seating</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Bird carcass on floor</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Confirmed active entry</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Treat as contamination event and complete exclusion audit</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Damaged vent mesh visible from outside</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Direct roof-level ingress route</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Replace with correctly fixed fine mesh immediately</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>The fix is usually straightforward. Replace damaged vent mesh. Seal roof edge flashings and ridge gaps. Confirm hatches close squarely and drain correctly. Review any recent contractor work that involved opening the tank. One unresolved access point can keep reintroducing the same problem.</p>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Why are birds the most common bodies found inside Australian water tanks?</p>\n  <p class=\"faq-a\">Birds only need a very small roof-level opening to gain entry. Damaged vent mesh, unsealed roof edge flashings, ridge gaps, and poorly secured hatches give them access to sheltered spaces inside the tank. Once inside, smooth walls, darkness, and limited orientation cues mean many birds cannot find their way back out. That is why bird remains are such a common internal finding.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What does a bird found inside a potable water tank tell an inspector?</p>\n  <p class=\"faq-a\">It tells the inspector there has been a roof, hatch, or ventilation barrier failure. A bird in the tank is not random bad luck. It is structural evidence. Feathers at the waterline, nesting material on roof framing, droppings near hatches, and damaged vent screens all narrow the investigation to specific entry pathways.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Is the contamination risk only the bird carcass itself?</p>\n  <p class=\"faq-a\">No. The carcass is only one part of the risk. Feathers, faeces, nesting material, and ongoing access by additional birds all represent contamination pathways. Any confirmed bird entry should be treated as a water quality event under the Australian Drinking Water Guidelines (NHMRC), with the structural access point identified and rectified.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What standards apply when birds are entering a water tank?</p>\n  <p class=\"faq-a\">The duty to maintain sanitary integrity from storage to tap is established by the Australian Drinking Water Guidelines (NHMRC) and supported by <strong>AS/NZS 4766</strong> where applicable. The practical requirement is straightforward: if birds can get in, the tank exclusion barrier is not performing and the defect needs rectification.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>If feathers, nesting material, or bird remains have ever been found in your tank, the question is not whether the barrier failed. The question is where.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Request a tank inspection</a>\n</div>",
    coverImageUrl: `${BASE}/birds-tanks-hero.png`,
    readTime: '4 min read',
    status: 'published',
    seoTitle: 'Birds Inside Australian Water Tanks | PC Water',
    seoDescription:
      'Bird remains, feathers, and nesting material are structural evidence of roof-level exclusion failures in Australian water storage tanks. Here\'s what to fix first.',
    publishedAt: '2026-06-09T09:00:00.000Z',
    createdAt: '2026-06-09T09:00:00.000Z',
    updatedAt: '2026-06-09T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-birds', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-inspection-birds', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-compliance-birds', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Vandalism And Your Water Tank The Damage That Goes Unreported'),
    title: 'Vandalism and Your Water Tank: The Damage That Goes Unreported',
    slug: 'vandalism-and-your-water-tank-the-damage-that-goes-unreported',
    excerpt:
      'The real cost of vandalism is rarely the visible damage. It is the contamination pathway, hatch failure, and security weakness left behind after no one notices.',
    content:
      "<p class=\"article-lead\">\n  The most expensive part of a vandal event is usually not the damage you can see. It is the contamination pathway left open after no one realises the sanitary barrier has been broken.\n</p>\n\n<p>In <a href=\"/resources/5-contamination-risks-not-source-water\">our earlier contamination post</a>, we listed vandalism as one of the five major risks that come from the storage asset itself, not the source water. A forced hatch, torn vent screen, or broken lock can leave a tank exposed for days or weeks before the next visit.</p>\n\n<p>By the time <a href=\"/resources/evidence-water-quality-issues-warning-signs\">water quality symptoms appear</a>, the visible act of vandalism may already be over. What remains is the secondary damage: dust, leaf litter, insects, birds, stormwater, or rubbish entering a vessel that was previously sealed.</p>\n\n<div class=\"article-divider\"><span>What unreported vandalism looks like</span></div>\n\n<p>Most people imagine spray paint, graffiti, or obvious impact damage. Those things happen. But the more serious findings are often smaller and easier to miss:</p>\n\n<p><strong>Forced hatch dogs, hinges, or lock points</strong> — If a hatch has been levered, twisted, or slammed closed after being forced open, it may still appear shut while no longer sealing properly. A hatch that looks closed is not necessarily secure.</p>\n\n<p><strong>Torn or peeled-back vent mesh</strong> — Once the screen is broken, the tank no longer has an effective exclusion barrier. Dust, insects, and small birds can continue entering long after the vandal event.</p>\n\n<p><strong>Foreign material on the roof or inside the tank</strong> — Rocks, rubbish, drink containers, and loose debris are direct evidence of interference. They also tell you the event was not limited to external damage.</p>\n\n<figure>\n  <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/vandalism-damaged-hatch.png\" alt=\"Water tank hatch showing pry marks and damaged latch hardware after vandalism\" style=\"width:100%;display:block;border-radius:10px;aspect-ratio:16/9;object-fit:cover;\"/>\n  <figcaption><strong>Closed does not mean sealed.</strong> A vandalised hatch may sit back in place while its locking, seating, or gasket integrity has already been compromised.</figcaption>\n</figure>\n\n<div class=\"article-pull-stat\">\n  <span class=\"stat-num\">3</span>\n  <span class=\"stat-label\">One vandal event can create three separate risks at once: contamination, repeat unauthorised access, and unsafe access hardware for the next worker who attends site.</span>\n</div>\n\n<blockquote class=\"article-quotable\">\n  <p>The visible damage is rarely the full story. What matters is whether the hatch, vent, roof, or access system still performs the function it was meant to perform after the event.</p>\n</blockquote>\n\n<div class=\"article-divider\"><span>Why the real damage is delayed</span></div>\n\n<p>On remote sites, the lag between event and discovery can be long — a security event can quickly become the same kind of animal-entry problem described in <a href=\"/resources/the-open-overflow-wildlife-drain-point\">The Open Overflow</a>, only arriving through a different route.</p>\n\n<p>Proactive measures — alarmed hatches, CCTV, or a defined minimum inspection frequency — materially reduce the exposure window on remote sites. The shorter the time to detection, the lower the contamination consequence.</p>\n\n<p>There is also a worker safety dimension. If ladders, cages, handrails, or hatch surrounds have been tampered with, the next person climbing onto the tank could be stepping onto damaged access hardware. Safe access components need repair consistent with <strong>AS 1657</strong> — while hatches, vents, and closures need restoration of the sanitary barrier expected for potable water storage.</p>\n\n<div class=\"article-divider\"><span>What to inspect after every suspected event</span></div>\n\n<p><strong>Secure the sanitary barrier first</strong> — Check hatch seating, locking points, gaskets, vent screens, flashings, and any roof penetrations. If any closure is compromised, treat it as an active contamination pathway until proven otherwise.</p>\n\n<p><strong>Inspect for internal evidence</strong> — If there are signs the tank was opened, look for rocks, rubbish, feathers, fresh debris, or waterline contamination indicators. An internal inspection may be warranted to confirm what entered the stored water.</p>\n\n<p><strong>Check access hardware and approach areas</strong> — Look at ladders, cages, platforms, handrails, and hatch approach areas. A vandalised tank can be both a hygiene failure and a fall hazard.</p>\n\n<p><strong>Check overflow drain ends and roof penetrations</strong> — Overflow drain openings and roof penetrations can become secondary entry routes when the tank is left unsecured. Inspect all open overflow drain ends and fit a flapper valve if one is not already in place.</p>\n\n<div class=\"article-photo-grid\">\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/vandalism-broken-lock.png\" alt=\"Broken padlock on a water tank access point indicating unauthorised entry\"/>\n    <figcaption><strong>Access control failure.</strong> A broken lock is not just a security issue. It means the sanitary barrier has to be assumed compromised until checked.</figcaption>\n  </figure>\n  <figure>\n    <img src=\"https://mhggidgfivmdgkjerejn.supabase.co/storage/v1/object/public/cms-media/posts/vandalism-damaged-vent.png\" alt=\"Damaged vent screen on a water tank allowing debris and animal ingress\"/>\n    <figcaption><strong>Secondary contamination route.</strong> Once a vent screen is peeled back or torn, the tank remains exposed long after the initial event.</figcaption>\n  </figure>\n</div>\n\n<table style=\"width:100%;border-collapse:collapse;margin:32px 0;font-size:14px;\">\n  <thead>\n    <tr style=\"background:#0d1b2a;\">\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Damage found</th>\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Hidden consequence</th>\n      <th style=\"padding:12px 16px;text-align:left;font-weight:600;font-size:13px;color:#fff;\">Response now</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Forced or bent hatch</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Closure may no longer seal, even if shut</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Verify seating, gasket condition, and locking integrity</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Broken or missing lock</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Repeat unauthorised access risk</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Replace lock and inspect for evidence of opening</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Damaged vent mesh</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Ongoing dust, insect, and bird ingress</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Replace screen and inspect surrounding framing</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Rocks or rubbish inside tank area</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Likely direct internal interference</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Escalate to an internal inspection</td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Damaged ladder, cage, or handrail</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Worker fall risk at next attendance</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Repair safe access elements consistent with <strong>AS 1657</strong></td>\n    </tr>\n    <tr>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Evidence of roof traffic or displaced flashings</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Stormwater and debris entry pathway</td>\n      <td style=\"padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;\">Inspect all penetrations and reseal as required</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>The objective after vandalism is not cosmetic restoration. It is to re-establish the two functions the asset must provide: sanitary protection of the stored water and safe access for the people who maintain it. The ADWG sets the water quality expectation. Practical asset management means treating every suspected breach as a potential contamination pathway until inspection proves otherwise.</p>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">Does a vandalism event trigger formal notification to the water authority or regulator?</p>\n  <p class=\"faq-a\">It depends on the nature of the breach and the applicable drinking water framework. If there is evidence the sanitary barrier was compromised, many state and territory frameworks — including conditions under local water service licences — require operators to notify the relevant authority within a specified timeframe. The ADWG provides guidance on when a contamination event should be reported. Check your service contract, operating licence, or drinking water quality management plan for the obligations that apply to your supply.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">How long can a vandalised tank remain exposed before contamination occurs?</p>\n  <p class=\"faq-a\">There is no fixed timeframe — it depends on the nature of the breach, the local environment, and site activity. A forced hatch in a remote location with active wildlife can result in animal entry within days. The practical approach is to treat any confirmed or suspected breach as an active contamination pathway and attend the site as quickly as the risk assessment demands.</p>\n</div>\n\n<div class=\"article-faq-item\">\n  <p class=\"faq-q\">What is the difference between a contamination response and a routine post-vandalism inspection?</p>\n  <p class=\"faq-a\">A routine post-vandalism inspection confirms that the sanitary barrier is intact and re-establishes the asset's baseline condition. A contamination response is triggered when there is evidence the stored water has been directly affected — a confirmed open hatch, foreign material inside the tank, or water quality indicators in the distribution system. Contamination responses typically require sampling, possible water withdrawal, and formal reporting to the water authority.</p>\n</div>\n\n<div class=\"article-cta\">\n  <p>If a tank has been tampered with, the right question is not how bad it looks from the fence line. It is what the damage has left open.</p>\n  <a href=\"/contact\" class=\"cta-btn\">Book a tank security and contamination audit</a>\n</div>",
    coverImageUrl: `${BASE}/vandalism-tank-hero.png`,
    readTime: '4 min read',
    status: 'published',
    seoTitle: 'Water Tank Vandalism: Hidden Contamination Risks | PC Water',
    seoDescription:
      'The real cost of water tank vandalism is rarely the visible damage. Forced hatches, broken locks, and torn vent screens leave contamination pathways open for weeks.',
    publishedAt: '2026-06-09T09:00:00.000Z',
    createdAt: '2026-06-09T09:00:00.000Z',
    updatedAt: '2026-06-09T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-vand', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-maintenance-vand', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-compliance-vand', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Sediment In Your Tank What It Is Where It Comes From Why It Matters'),
    title: 'Sediment in Your Tank: What It Is, Where It Comes From, Why It Matters',
    slug: 'sediment-in-your-tank-what-it-is-where-it-comes-from-why-it-matters',
    excerpt:
      'Sediment in a water tank is not just dirt on the floor. Learn where it comes from, what it tells you, and when it becomes a cleaning and water quality problem.',
    content: `<p class="article-lead">
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
</div>`,
    coverImageUrl: `${BASE}/sediment-tank-hero.jpg`,
    readTime: '5 min read',
    status: 'published',
    seoTitle: 'Sediment in Your Water Tank: What It Means | PC Water',
    seoDescription:
      'Sediment in a water tank is not just dirt on the floor. Learn where it comes from, what it tells you, and when it becomes a cleaning and water quality problem.',
    publishedAt: '2026-06-16T09:00:00.000Z',
    createdAt: '2026-06-16T09:00:00.000Z',
    updatedAt: '2026-06-16T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-sed', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-maintenance-sed', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-potable-water-sed', name: 'Potable Water', slug: 'potable-water' },
    ],
  },
  {
    id: staticId('post', 'When Iron And Manganese Come From Inside The Tank Not The Source'),
    title: 'When Iron and Manganese Come From Inside the Tank, Not the Source',
    slug: 'when-iron-and-manganese-come-from-inside-the-tank-not-the-source',
    excerpt:
      'Brown or black water does not always start at the source. Learn how iron and manganese can come from inside the tank, and what evidence proves it.',
    content: `<p class="article-lead">
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
</div>`,
    coverImageUrl: `${BASE}/iron-manganese-tank-hero.png`,
    readTime: '4 min read',
    status: 'published',
    seoTitle: 'Iron and Manganese from Inside the Tank | PC Water',
    seoDescription:
      'Brown or black water does not always start at the source. Learn how iron and manganese can come from inside the tank, and what evidence proves it.',
    publishedAt: '2026-06-17T09:00:00.000Z',
    createdAt: '2026-06-17T09:00:00.000Z',
    updatedAt: '2026-06-17T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-im', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-maintenance-im', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-corrosion-im', name: 'Corrosion', slug: 'corrosion' },
    ],
  },
  {
    id: staticId('post', 'How Often Should A Water Tank Be Cleaned'),
    title: 'How Often Should a Water Tank Be Cleaned? The Actual Answer',
    slug: 'how-often-should-a-water-tank-be-cleaned',
    excerpt:
      'No single interval fits every tank. The real answer depends on source water, tank type, and inspection findings - an evidence-based framework for Australian asset owners.',
    content: `<p class="article-lead">
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
</div>`,
    coverImageUrl: `${BASE}/vandalism-tank-hero.png`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: 'How Often Should a Water Tank Be Cleaned? | PC Water',
    seoDescription:
      'No single interval fits every tank. The real answer depends on source water, tank type, and inspection findings. An evidence-based framework for Australian asset owners.',
    publishedAt: '2026-06-23T09:00:00.000Z',
    createdAt: '2026-06-23T09:00:00.000Z',
    updatedAt: '2026-06-23T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-maintenance-clean', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-compliance-clean', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-tank-cleaning-clean', name: 'Tank Cleaning', slug: 'tank-cleaning' },
    ],
  },
  {
    id: staticId('post', 'What 5 15mm Of Sediment Actually Looks Like'),
    title: 'What 5-15mm of Sediment Actually Looks Like - and Why That Number Matters',
    slug: 'what-5-15mm-of-sediment-actually-looks-like',
    excerpt:
      'Not all tank sediment is equal. What 5 to 15mm looks like, how it is measured, and why this specific depth range triggers action under the ADWG and AS 4020.',
    content: `<p class="article-lead">
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
</div>`,
    coverImageUrl: `${BASE}/sediment-tank-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: 'What 5-15mm of Sediment Actually Looks Like | PC Water',
    seoDescription:
      'Not all tank sediment is equal. Learn what 5 to 15mm of sediment looks like, how it is measured, and why this specific depth range triggers action under the ADWG and AS 4020.',
    publishedAt: '2026-06-25T09:00:00.000Z',
    createdAt: '2026-06-25T09:00:00.000Z',
    updatedAt: '2026-06-25T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-sed2', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-maintenance-sed2', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-compliance-sed2', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Sediment Disposal What Happens To Everything'),
    title: 'Sediment Disposal: What Happens to Everything That Comes Out of Your Tank',
    slug: 'sediment-disposal-what-happens-to-everything-that-comes-out-of-your-tank',
    excerpt:
      'When a water tank is cleaned, the sediment and wastewater must go somewhere. Two extraction methods, four disposal options, and what every asset owner should confirm before scheduling a clean.',
    content: `<p class="article-lead">
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
</div>`,
    coverImageUrl: `${BASE}/sediment-disposal-pond.jpg`,
    readTime: '2 min read',
    status: 'published',
    seoTitle: 'Sediment Disposal: What Happens to Everything That Comes Out of Your Tank | PC Water',
    seoDescription:
      'When a water tank is cleaned, the sediment and wastewater must go somewhere. This guide explains the two main extraction methods and disposal options - and what every asset owner should confirm before scheduling a clean.',
    publishedAt: '2026-07-03T09:00:00.000Z',
    createdAt: '2026-07-03T09:00:00.000Z',
    updatedAt: '2026-07-03T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-cleaning-sd1', name: 'Tank Cleaning', slug: 'tank-cleaning' },
      { id: 'tag-compliance-sd1', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-tank-maintenance-sd1', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'When Cleaning Is Not Just Cleaning'),
    title: 'When Cleaning Is Not Just Cleaning: Recognising When a Tank Needs More',
    slug: 'when-cleaning-is-not-just-cleaning',
    excerpt:
      'A tank clean is the best inspection opportunity you will get. Here is what a trained assessor looks for - and what gets missed when the cleaning crew is the only set of eyes on your asset.',
    content: `<p class="article-lead">
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
</div>`,
    coverImageUrl: `${BASE}/cleaning-inspection-hero.jpg`,
    readTime: '3 min read',
    status: 'published',
    seoTitle: 'When Cleaning Is Not Just Cleaning: Recognising When a Tank Needs More | PC Water',
    seoDescription:
      'A tank clean is the best inspection opportunity you will get. Here is what a trained assessor looks for - and what gets missed when the cleaning crew is the only set of eyes on your asset.',
    publishedAt: '2026-07-10T09:00:00.000Z',
    createdAt: '2026-07-10T09:00:00.000Z',
    updatedAt: '2026-07-10T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-maintenance-wcc', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-tank-cleaning-wcc', name: 'Tank Cleaning', slug: 'tank-cleaning' },
      { id: 'tag-compliance-wcc', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'How to Read a Tank Coating Failure: Blistering, Delamination'),
    title: "How to Read a Tank Coating Failure: Blistering, Delamination and Undercutting",
    slug: 'how-to-read-a-tank-coating-failure',
    excerpt:
      "Coating failure on a steel tank is not one thing — it is a diagnosis. Learn to read blistering, delamination, undercutting and holidays, and what each one tells you about the asset underneath.",
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
    coverImageUrl: `${BASE}/corrosion-coating-comparison.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "How to Read a Tank Coating Failure | PC Water",
    seoDescription:
      "Blistering, delamination, undercutting, holidays and chalking each mean something different on a steel water tank. A practical guide to reading coating failure and what it signals.",
    publishedAt: '2026-07-21T09:00:00.000Z',
    createdAt: '2026-07-21T09:00:00.000Z',
    updatedAt: '2026-07-21T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-maintenance-coat', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-corrosion-coat', name: 'Corrosion', slug: 'corrosion' },
      { id: 'tag-compliance-coat', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Fire Water Tank Compliance: The AS1851 Service Levels, Expla'),
    title: "Fire Water Tank Compliance: The AS1851 Service Levels, Explained",
    slug: 'fire-water-tank-as1851-service-levels-explained',
    excerpt:
      "AS1851 sets the routine service regime for fire protection water storage. Here is what the routine service intervals actually require — and the records building owners must keep to stay compliant.",
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
    coverImageUrl: `${BASE}/fire-tank-inspection.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Fire Water Tank AS1851 Service Levels Explained | PC Water",
    seoDescription:
      "What AS1851 routine servicing requires for fire water storage tanks — the service intervals, what gets checked, and the maintenance records building owners must keep.",
    publishedAt: '2026-07-22T09:00:00.000Z',
    createdAt: '2026-07-22T09:00:00.000Z',
    updatedAt: '2026-07-22T09:00:00.000Z',
    tags: [
      { id: 'tag-fire-compliance-as1851', name: 'Fire Compliance', slug: 'fire-compliance' },
      { id: 'tag-compliance-as1851', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-tank-maintenance-as1851', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'Reline or Replace? The Real Lifecycle Cost of an Ageing Stee'),
    title: "Reline or Replace? The Real Lifecycle Cost of an Ageing Steel Tank",
    slug: 'reline-or-replace-ageing-steel-tank-lifecycle-cost',
    excerpt:
      "When a steel tank starts failing, the instinct is to replace it. Often, RPVC relining restores compliance and adds decades of life for a fraction of the cost. Here is how to weigh reline versus replace.",
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
    coverImageUrl: `${BASE}/rpvc-inline.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Reline or Replace an Ageing Steel Water Tank? | PC Water",
    seoDescription:
      "RPVC relining can restore an ageing steel tank to compliance and add 20+ years for a fraction of replacement cost. How to weigh reline versus replace — structure, failure type, and downtime.",
    publishedAt: '2026-07-23T09:00:00.000Z',
    createdAt: '2026-07-23T09:00:00.000Z',
    updatedAt: '2026-07-23T09:00:00.000Z',
    tags: [
      { id: 'tag-rpvc-reline-decide', name: 'RPVC Liners', slug: 'rpvc-liners' },
      { id: 'tag-tank-maintenance-reline-decide', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-refurbish-reline-decide', name: 'Refurbish', slug: 'refurbish' },
    ],
  },
  {
    id: staticId('post', 'What a Professional Tank Inspection Actually Covers (And Why'),
    title: "What a Professional Tank Inspection Actually Covers (And Why a Visual Check Isn't Enough)",
    slug: 'what-a-professional-tank-inspection-actually-covers',
    excerpt:
      "A walk-around is not an inspection. Here is the full scope a trained assessor covers — structure, coatings, cathodic protection, ventilation, pipe configuration — and the ROV and drone methods that make it possible without dewatering.",
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
    coverImageUrl: `${BASE}/sector-inspection.jpg`,
    readTime: '7 min read',
    status: 'published',
    seoTitle: "What a Professional Tank Inspection Actually Covers | PC Water",
    seoDescription:
      "The full scope of a professional water tank inspection — structure, coatings, cathodic protection, ventilation, pipe configuration and sediment — and the ROV/UAV methods that assess without dewatering.",
    publishedAt: '2026-07-24T09:00:00.000Z',
    createdAt: '2026-07-24T09:00:00.000Z',
    updatedAt: '2026-07-24T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-inspection-scope', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-asset-management-scope', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-compliance-scope', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'The Roof and Hatch: The Most Overlooked Contamination Entry '),
    title: "The Roof and Hatch: The Most Overlooked Contamination Entry Point on Your Tank",
    slug: 'tank-roof-and-hatch-overlooked-contamination-entry-point',
    excerpt:
      "Most potable tank contamination does not come from the source water — it comes through the roof, the hatch and the vent. Here is what to check on top of your tank, and why treated water re-contaminates.",
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
    coverImageUrl: `${BASE}/water-food-hatch.jpg`,
    readTime: '5 min read',
    status: 'published',
    seoTitle: "The Roof and Hatch: Overlooked Tank Contamination Entry | PC Water",
    seoDescription:
      "Potable water tank contamination usually enters through the roof, hatch and vent — not the source water. What to check on top of your tank to keep treated water safe.",
    publishedAt: '2026-07-25T09:00:00.000Z',
    createdAt: '2026-07-25T09:00:00.000Z',
    updatedAt: '2026-07-25T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-roof', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-compliance-roof', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-tank-maintenance-roof', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'ROV Inspection vs Manned Entry: Choosing the Right Method fo'),
    title: "ROV Inspection vs Manned Entry: Choosing the Right Method for Your Tank",
    slug: 'rov-inspection-vs-manned-entry-choosing-the-right-method',
    excerpt:
      "Not every tank inspection needs a diver in the water. Here is how ROV, drone and manned-entry inspection compare — and how to pick the right method for your asset, budget and risk profile.",
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
    coverImageUrl: `${BASE}/corrosion-rov-inspection.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "ROV vs Manned Entry Tank Inspection | PC Water",
    seoDescription:
      "ROV, drone and manned-entry inspection each answer different questions about a water tank. A practical guide to choosing the right method for your asset.",
    publishedAt: '2026-08-14T09:00:00.000Z',
    createdAt: '2026-08-14T09:00:00.000Z',
    updatedAt: '2026-08-14T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-inspection-rov', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-technology-rov', name: 'Technology', slug: 'technology' },
      { id: 'tag-compliance-rov', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Modular Tanks in Remote Australia: Transport, Access and Ass'),
    title: "Modular Tanks in Remote Australia: Transport, Access and Assembly Realities",
    slug: 'modular-tanks-in-remote-australia-transport-access-and-assembly',
    excerpt:
      "A modular water tank looks simple on a spec sheet. Getting it to a remote site, through the access it actually has, and assembled before the wet season is a different problem entirely.",
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
    coverImageUrl: `${BASE}/harsh-env-drone.jpg`,
    readTime: '7 min read',
    status: 'published',
    seoTitle: "Modular Water Tanks for Remote Sites | PC Water",
    seoDescription:
      "Transport, access and assembly are what actually determine whether a modular tank project succeeds in remote Australia. A practical planning guide.",
    publishedAt: '2026-08-15T09:00:00.000Z',
    createdAt: '2026-08-15T09:00:00.000Z',
    updatedAt: '2026-08-15T09:00:00.000Z',
    tags: [
      { id: 'tag-remote-modular', name: 'Remote Projects', slug: 'remote-projects' },
      { id: 'tag-tank-installation-modular', name: 'Tank Installation', slug: 'tank-installation' },
      { id: 'tag-remote-community-modular', name: 'Remote Community', slug: 'remote-community' },
    ],
  },
  {
    id: staticId('post', 'Reading a Tank Inspection Report: What the Findings Actually'),
    title: "Reading a Tank Inspection Report: What the Findings Actually Mean",
    slug: 'reading-a-tank-inspection-report-what-the-findings-actually-mean',
    excerpt:
      "A tank inspection report is only useful if you can translate its findings into a decision. Here is how to read condition ratings, defect notes and recommendations the way an engineer does.",
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
    coverImageUrl: `${BASE}/ticking-inspection.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "How to Read a Water Tank Inspection Report | PC Water",
    seoDescription:
      "Condition ratings, defect notes and recommendations — a practical guide to reading a water tank inspection report and turning findings into a decision.",
    publishedAt: '2026-08-16T09:00:00.000Z',
    createdAt: '2026-08-16T09:00:00.000Z',
    updatedAt: '2026-08-16T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-inspection-report', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-asset-management-report', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-compliance-report', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Fire Tank Volume and Draw-Down: Getting the Numbers Right fo'),
    title: "Fire Tank Volume and Draw-Down: Getting the Numbers Right for AS2419",
    slug: 'fire-tank-volume-and-draw-down-getting-the-numbers-right',
    excerpt:
      "A fire water tank that looks full can still fail its purpose if the usable volume, draw-down point and pump suction arrangement are not right. Here is what the numbers actually need to add up to.",
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
    coverImageUrl: `${BASE}/fire-tank-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Fire Tank Volume and Draw-Down Explained | PC Water",
    seoDescription:
      "Usable volume, draw-down point and pump suction all determine whether a fire water tank actually delivers what AS2419 requires. A practical explainer.",
    publishedAt: '2026-08-17T09:00:00.000Z',
    createdAt: '2026-08-17T09:00:00.000Z',
    updatedAt: '2026-08-17T09:00:00.000Z',
    tags: [
      { id: 'tag-fire-compliance-volume', name: 'Fire Compliance', slug: 'fire-compliance' },
      { id: 'tag-compliance-volume', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-fire-contractors-volume', name: 'Fire Contractors', slug: 'fire-contractors' },
    ],
  },
  {
    id: staticId('post', 'Water Chemistry and Disinfection Residual: Why It Matters In'),
    title: "Water Chemistry and Disinfection Residual: Why It Matters Inside the Tank",
    slug: 'water-chemistry-and-disinfection-residual-why-it-matters-in-storage',
    excerpt:
      "Water leaving a treatment plant compliant does not stay that way automatically. What happens to disinfection residual and water chemistry inside a storage tank — and why it is the storage asset’s job to protect it.",
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
    coverImageUrl: `${BASE}/water-food-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Disinfection Residual in Water Storage Tanks | PC Water",
    seoDescription:
      "Disinfection residual decays inside storage, not just in the network. A practical explanation of water chemistry inside a tank and why storage design and condition matter.",
    publishedAt: '2026-08-18T09:00:00.000Z',
    createdAt: '2026-08-18T09:00:00.000Z',
    updatedAt: '2026-08-18T09:00:00.000Z',
    tags: [
      { id: 'tag-potable-water-chem', name: 'Potable Water', slug: 'potable-water' },
      { id: 'tag-water-quality-chem', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-compliance-chem', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Foundation and Civil Works: Why Tank Failures Often Start Be'),
    title: "Foundation and Civil Works: Why Tank Failures Often Start Below Ground",
    slug: 'foundation-and-civil-works-why-tank-failures-start-below-ground',
    excerpt:
      "A tank rarely fails because of the tank alone. Uneven settlement, poor drainage and an undersized pad quietly set up structural problems years before they show on the surface.",
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
    coverImageUrl: `${BASE}/corrosion-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Tank Foundations and Civil Works Explained | PC Water",
    seoDescription:
      "Uneven settlement, drainage and pad sizing determine whether a water tank stays sound for decades or develops structural problems early. A practical explainer.",
    publishedAt: '2026-08-20T09:00:00.000Z',
    createdAt: '2026-08-20T09:00:00.000Z',
    updatedAt: '2026-08-20T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-installation-found', name: 'Tank Installation', slug: 'tank-installation' },
      { id: 'tag-asset-management-found', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-tank-maintenance-found', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'Custom Tank Design: When a Standard Size Doesn’t Fit Your Si'),
    title: "Custom Tank Design: When a Standard Size Doesn’t Fit Your Site",
    slug: 'custom-tank-design-when-a-standard-size-doesnt-fit-your-site',
    excerpt:
      "Not every site can take a standard tank footprint, height or capacity. Here is when custom design earns its cost — and what actually drives that decision.",
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
    coverImageUrl: `${BASE}/sector-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Custom Water Tank Design Explained | PC Water",
    seoDescription:
      "Site footprint, height restrictions and unusual capacity needs can rule out a standard tank. A practical guide to when custom tank design is worth it.",
    publishedAt: '2026-08-21T09:00:00.000Z',
    createdAt: '2026-08-21T09:00:00.000Z',
    updatedAt: '2026-08-21T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-installation-custom', name: 'Tank Installation', slug: 'tank-installation' },
      { id: 'tag-project-managed-custom', name: 'Project Delivery', slug: 'project-managed' },
      { id: 'tag-commercial-custom', name: 'Commercial', slug: 'commercial' },
    ],
  },
  {
    id: staticId('post', 'Tender and Procurement for Water Infrastructure: What Counci'),
    title: "Tender and Procurement for Water Infrastructure: What Councils Get Wrong",
    slug: 'tender-and-procurement-for-water-infrastructure-what-councils-get-wrong',
    excerpt:
      "A tender specification written too generically invites the wrong bids and the wrong outcomes. Here is where water infrastructure tenders most often go off track — and how to fix it before bids close.",
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
    coverImageUrl: `${BASE}/sector-inspection.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Infrastructure Tender and Procurement Guide | PC Water",
    seoDescription:
      "Generic specifications, unclear scope boundaries and missing condition data are common tender pitfalls in water infrastructure procurement. A practical guide for councils and asset owners.",
    publishedAt: '2026-08-22T09:00:00.000Z',
    createdAt: '2026-08-22T09:00:00.000Z',
    updatedAt: '2026-08-22T09:00:00.000Z',
    tags: [
      { id: 'tag-government-tender', name: 'Government', slug: 'government' },
      { id: 'tag-project-managed-tender', name: 'Project Delivery', slug: 'project-managed' },
      { id: 'tag-compliance-tender', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Cathodic Protection for Steel Water Tanks: Does Your Tank Ne'),
    title: "Cathodic Protection for Steel Water Tanks: Does Your Tank Need It?",
    slug: 'cathodic-protection-for-steel-water-tanks-does-your-tank-need-it',
    excerpt:
      "Cathodic protection is standard on some steel tanks and absent on others, and the difference is not random. Here is what it actually does and when it earns its place.",
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
    coverImageUrl: `${BASE}/cleaning-inspection-corrosion.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Cathodic Protection for Water Tanks Explained | PC Water",
    seoDescription:
      "Cathodic protection slows corrosion at the metal itself, not just the coating. A practical explanation of how it works and when a steel water tank needs it.",
    publishedAt: '2026-08-23T09:00:00.000Z',
    createdAt: '2026-08-23T09:00:00.000Z',
    updatedAt: '2026-08-23T09:00:00.000Z',
    tags: [
      { id: 'tag-corrosion-cathodic', name: 'Corrosion', slug: 'corrosion' },
      { id: 'tag-tank-maintenance-cathodic', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-tank-inspection-cathodic', name: 'Tank Inspection', slug: 'tank-inspection' },
    ],
  },
  {
    id: staticId('post', 'Confined Space Entry Requirements for Water Tank Work: A Saf'),
    title: "Confined Space Entry Requirements for Water Tank Work: A Safety Primer",
    slug: 'confined-space-entry-requirements-for-water-tank-work-a-safety-primer',
    excerpt:
      "Manned entry into a water tank is confined space work by definition — and treating it otherwise is how serious incidents happen. What the requirements actually cover.",
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
    coverImageUrl: `${BASE}/ticking-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Confined Space Entry for Water Tanks | PC Water",
    seoDescription:
      "Atmospheric testing, permits, ventilation and rescue planning are not optional extras for water tank entry — they are the requirements. A practical safety primer.",
    publishedAt: '2026-08-24T09:00:00.000Z',
    createdAt: '2026-08-24T09:00:00.000Z',
    updatedAt: '2026-08-24T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-inspection-confined', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-compliance-confined', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-tank-maintenance-confined', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'Builder and Contractor Partnerships: Getting Water Storage R'),
    title: "Builder and Contractor Partnerships: Getting Water Storage Right the First Time",
    slug: 'builder-contractor-partnerships-getting-water-storage-right-on-a-new-build',
    excerpt:
      "Water storage is rarely the headline item on a new build, which is exactly why it goes wrong when it is treated as an afterthought. What a good builder-contractor partnership actually looks like.",
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
    coverImageUrl: `${BASE}/rpvc-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Builder and Contractor Water Storage Partnerships | PC Water",
    seoDescription:
      "Water storage requirements are easy to under-specify on a new build. A practical look at what a strong builder-contractor partnership on water infrastructure actually delivers.",
    publishedAt: '2026-08-25T09:00:00.000Z',
    createdAt: '2026-08-25T09:00:00.000Z',
    updatedAt: '2026-08-25T09:00:00.000Z',
    tags: [
      { id: 'tag-commercial-builder', name: 'Commercial', slug: 'commercial' },
      { id: 'tag-project-managed-builder', name: 'Project Delivery', slug: 'project-managed' },
      { id: 'tag-tank-installation-builder', name: 'Tank Installation', slug: 'tank-installation' },
    ],
  },
  {
    id: staticId('post', 'Concrete Reservoir Spalling vs Steel Tank Corrosion: What’s '),
    title: "Concrete Reservoir Spalling vs Steel Tank Corrosion: What’s Different",
    slug: 'concrete-reservoir-spalling-vs-steel-tank-corrosion-whats-different',
    excerpt:
      "Concrete reservoirs fail differently to steel tanks, and treating one like the other leads to the wrong diagnosis. Here is how spalling actually happens and why it is not just \"concrete corrosion.\"",
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
    coverImageUrl: `${BASE}/cleaning-inspection-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Concrete Reservoir Spalling Explained | PC Water",
    seoDescription:
      "Spalling in a concrete reservoir is driven by reinforcement corrosion, not the same mechanism as steel tank wall corrosion. A practical explanation of the difference and what it means for repair.",
    publishedAt: '2026-08-26T09:00:00.000Z',
    createdAt: '2026-08-26T09:00:00.000Z',
    updatedAt: '2026-08-26T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-maintenance-spalling', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-asset-management-spalling', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-tank-inspection-spalling', name: 'Tank Inspection', slug: 'tank-inspection' },
    ],
  },
  {
    id: staticId('post', 'Turbidity Spikes After Tank Cleaning: What’s Normal and What'),
    title: "Turbidity Spikes After Tank Cleaning: What’s Normal and What’s a Red Flag",
    slug: 'turbidity-spikes-after-tank-cleaning-whats-normal-and-whats-a-red-flag',
    excerpt:
      "A turbidity spike right after a tank clean can look alarming — but a temporary rise is expected. Here is how to tell normal post-clean turbidity from a sign something went wrong.",
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
    coverImageUrl: `${BASE}/tank-interior-sediment.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Turbidity After Water Tank Cleaning Explained | PC Water",
    seoDescription:
      "A short-lived turbidity spike after tank cleaning is normal. A practical guide to what to expect, how long it should last, and when a spike signals a real problem.",
    publishedAt: '2026-08-27T09:00:00.000Z',
    createdAt: '2026-08-27T09:00:00.000Z',
    updatedAt: '2026-08-27T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-turbidity', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-tank-cleaning-turbidity', name: 'Tank Cleaning', slug: 'tank-cleaning' },
      { id: 'tag-compliance-turbidity', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Project-Managed Water Infrastructure: Why One Point of Accou'),
    title: "Project-Managed Water Infrastructure: Why One Point of Accountability Matters",
    slug: 'project-managed-water-infrastructure-why-one-point-of-accountability-matters',
    excerpt:
      "Splitting a water infrastructure project across civil, tank supply, liner and commissioning contractors seems efficient on paper. In practice, it is where accountability — and the project — gets lost.",
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
    coverImageUrl: `${BASE}/harsh-env-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Project-Managed Water Infrastructure Delivery | PC Water",
    seoDescription:
      "Multiple contractors on a water infrastructure project without a single point of accountability is where delays, disputes and defects hide. A practical explanation of project-managed delivery.",
    publishedAt: '2026-08-28T09:00:00.000Z',
    createdAt: '2026-08-28T09:00:00.000Z',
    updatedAt: '2026-08-28T09:00:00.000Z',
    tags: [
      { id: 'tag-project-managed-accountability', name: 'Project Delivery', slug: 'project-managed' },
      { id: 'tag-remote-projects-accountability', name: 'Remote Projects', slug: 'remote-projects' },
      { id: 'tag-government-accountability', name: 'Government', slug: 'government' },
    ],
  },
  {
    id: staticId('post', 'Iron Bacteria in Water Tanks: The Slime That’s Quietly Corro'),
    title: "Iron Bacteria in Water Tanks: The Slime That’s Quietly Corroding Your Asset",
    slug: 'iron-bacteria-in-water-tanks-the-slime-thats-quietly-corroding-your-asset',
    excerpt:
      "A reddish-brown slime inside a tank is not just an unpleasant find during cleaning. Iron bacteria colonies can accelerate corrosion and taint water quality long before anyone notices them.",
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
    coverImageUrl: `${BASE}/iron-bacteria-fouling.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Iron Bacteria in Water Tanks Explained | PC Water",
    seoDescription:
      "Iron bacteria form slime colonies that accelerate localised corrosion and cause discolouration and odour in water storage tanks. What causes it and how it is managed.",
    publishedAt: '2026-08-29T09:00:00.000Z',
    createdAt: '2026-08-29T09:00:00.000Z',
    updatedAt: '2026-08-29T09:00:00.000Z',
    tags: [
      { id: 'tag-water-quality-bacteria', name: 'Water Quality', slug: 'water-quality' },
      { id: 'tag-corrosion-bacteria', name: 'Corrosion', slug: 'corrosion' },
      { id: 'tag-potable-water-bacteria', name: 'Potable Water', slug: 'potable-water' },
    ],
  },
  {
    id: staticId('post', 'Water Tank Warranty Claims: What Voids Cover and What Doesn’'),
    title: "Water Tank Warranty Claims: What Voids Cover and What Doesn’t",
    slug: 'water-tank-warranty-claims-what-voids-cover-and-what-doesnt',
    excerpt:
      "A tank warranty reads simply until you actually need to claim on it. Here is what typically triggers a valid claim, and what quietly voids cover before you ever get there.",
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
    coverImageUrl: `${BASE}/corrosion-coating-comparison.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Tank Warranty Claims Explained | PC Water",
    seoDescription:
      "Maintenance gaps, unapproved modifications and missing records are common reasons water tank warranty claims are refused. A practical guide to what actually protects your cover.",
    publishedAt: '2026-08-30T09:00:00.000Z',
    createdAt: '2026-08-30T09:00:00.000Z',
    updatedAt: '2026-08-30T09:00:00.000Z',
    tags: [
      { id: 'tag-asset-management-warranty', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-tank-maintenance-warranty', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-compliance-warranty', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Mining and Resources Water Storage: Compliance Beyond the St'),
    title: "Mining and Resources Water Storage: Compliance Beyond the Standard AS Requirements",
    slug: 'mining-and-resources-water-storage-compliance-beyond-standard-as-requirements',
    excerpt:
      "Mining and resources sites carry water compliance obligations most standard tank guidance does not cover — process water separation, site-specific risk assessments and regulator reporting among them.",
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
    coverImageUrl: `${BASE}/harsh-env-drone.jpg`,
    readTime: '7 min read',
    status: 'published',
    seoTitle: "Mining Water Storage Compliance Australia | PC Water",
    seoDescription:
      "Mining and resources water storage carries compliance obligations beyond standard Australian Standards — process separation, site risk assessment and regulator reporting explained.",
    publishedAt: '2026-08-31T09:00:00.000Z',
    createdAt: '2026-08-31T09:00:00.000Z',
    updatedAt: '2026-08-31T09:00:00.000Z',
    tags: [
      { id: 'tag-mining-resources', name: 'Mining & Resources', slug: 'mining-resources' },
      { id: 'tag-compliance-mining', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-remote-projects-mining', name: 'Remote Projects', slug: 'remote-projects' },
    ],
  },
  {
    id: staticId('post', 'Water Storage for Bushfire-Prone Properties: Static Water Su'),
    title: "Water Storage for Bushfire-Prone Properties: Static Water Supply Requirements Explained",
    slug: 'water-storage-for-bushfire-prone-properties-static-water-supply-explained',
    excerpt:
      "A static water supply tank for bushfire protection has specific requirements that a standard rainwater or potable tank does not meet by default. What actually needs to be right.",
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
    coverImageUrl: `${BASE}/fire-tank-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Bushfire Static Water Supply Tanks Explained | PC Water",
    seoDescription:
      "Static water supply requirements for bushfire-prone properties cover volume, fitting standards and accessibility — not just having a tank on site. A practical explainer.",
    publishedAt: '2026-09-01T09:00:00.000Z',
    createdAt: '2026-09-01T09:00:00.000Z',
    updatedAt: '2026-09-01T09:00:00.000Z',
    tags: [
      { id: 'tag-fire-compliance-bushfire', name: 'Fire Compliance', slug: 'fire-compliance' },
      { id: 'tag-remote-community-bushfire', name: 'Remote Community', slug: 'remote-community' },
      { id: 'tag-tank-installation-bushfire', name: 'Tank Installation', slug: 'tank-installation' },
    ],
  },
  {
    id: staticId('post', 'Water Tank Level Monitoring and SCADA Integration: What to S'),
    title: "Water Tank Level Monitoring and SCADA Integration: What to Specify",
    slug: 'water-tank-level-monitoring-and-scada-integration-what-to-specify',
    excerpt:
      "A level sensor bolted onto a tank is not the same as a monitoring system that actually tells an operator what they need to know, when they need to know it. What good specification looks like.",
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
    coverImageUrl: `${BASE}/rov-sediment-measurement.png`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Tank Level Monitoring and SCADA Explained | PC Water",
    seoDescription:
      "Sensor type, alarm thresholds and communication reliability all determine whether a tank monitoring system actually works when it matters. A specification guide.",
    publishedAt: '2026-09-02T09:00:00.000Z',
    createdAt: '2026-09-02T09:00:00.000Z',
    updatedAt: '2026-09-02T09:00:00.000Z',
    tags: [
      { id: 'tag-technology-scada', name: 'Technology', slug: 'technology' },
      { id: 'tag-tank-inspection-scada', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-asset-management-scada', name: 'Asset Management', slug: 'asset-management' },
    ],
  },
  {
    id: staticId('post', 'Rainwater Harvesting Tanks vs Reticulated Backup Storage: Ch'),
    title: "Rainwater Harvesting Tanks vs Reticulated Backup Storage: Choosing the Right System",
    slug: 'rainwater-harvesting-vs-reticulated-backup-storage-choosing-the-right-system',
    excerpt:
      "Both systems store water for when you need it, but they solve different problems. Confusing the two leads to storage that is sized and configured for the wrong purpose.",
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
    coverImageUrl: `${BASE}/water-food-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Rainwater Harvesting vs Backup Water Storage | PC Water",
    seoDescription:
      "Rainwater harvesting tanks and reticulated backup storage answer different needs. A practical guide to which system — or combination — fits your situation.",
    publishedAt: '2026-09-03T09:00:00.000Z',
    createdAt: '2026-09-03T09:00:00.000Z',
    updatedAt: '2026-09-03T09:00:00.000Z',
    tags: [
      { id: 'tag-potable-water-rainwater', name: 'Potable Water', slug: 'potable-water' },
      { id: 'tag-remote-community-rainwater', name: 'Remote Community', slug: 'remote-community' },
      { id: 'tag-tank-installation-rainwater', name: 'Tank Installation', slug: 'tank-installation' },
    ],
  },
  {
    id: staticId('post', 'Water Tank Decommissioning: What Proper Removal and Site Rem'),
    title: "Water Tank Decommissioning: What Proper Removal and Site Remediation Involves",
    slug: 'water-tank-decommissioning-what-proper-removal-and-site-remediation-involves',
    excerpt:
      "Taking a water tank out of service is not as simple as draining it and walking away. Residual contamination, structural hazards and site remediation all need to be managed properly.",
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
    coverImageUrl: `${BASE}/sediment-tank-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Tank Decommissioning and Removal | PC Water",
    seoDescription:
      "Decommissioning a water tank properly means managing residual sediment, structural hazards and site remediation — not just draining and demolishing. A practical guide.",
    publishedAt: '2026-09-04T09:00:00.000Z',
    createdAt: '2026-09-04T09:00:00.000Z',
    updatedAt: '2026-09-04T09:00:00.000Z',
    tags: [
      { id: 'tag-asset-management-decommission', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-tank-maintenance-decommission', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-compliance-decommission', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'AS4020 Certification: What It Actually Certifies on a Potabl'),
    title: "AS4020 Certification: What It Actually Certifies on a Potable Water Tank",
    slug: 'as4020-certification-what-it-actually-certifies-on-a-potable-water-tank',
    excerpt:
      "AS4020 certification is often quoted as a blanket assurance of safety. What it actually certifies is narrower and more specific — and knowing the difference matters.",
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
    coverImageUrl: `${BASE}/rpvc-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "AS4020 Certification for Water Tanks Explained | PC Water",
    seoDescription:
      "AS4020 certifies that a product does not adversely affect drinking water quality — it does not certify structural design or installation. A practical explanation.",
    publishedAt: '2026-09-05T09:00:00.000Z',
    createdAt: '2026-09-05T09:00:00.000Z',
    updatedAt: '2026-09-05T09:00:00.000Z',
    tags: [
      { id: 'tag-compliance-as4020', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-potable-water-as4020', name: 'Potable Water', slug: 'potable-water' },
      { id: 'tag-tank-installation-as4020', name: 'Tank Installation', slug: 'tank-installation' },
    ],
  },
  {
    id: staticId('post', 'Water Tank Insurance and Risk: What Insurers Actually Look F'),
    title: "Water Tank Insurance and Risk: What Insurers Actually Look For After a Claim",
    slug: 'water-tank-insurance-and-risk-what-insurers-actually-look-for-after-a-claim',
    excerpt:
      "A tank failure that triggers an insurance claim gets scrutinised for maintenance history and foreseeability, not just cause. Here is what that scrutiny actually looks for.",
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
    coverImageUrl: `${BASE}/ticking-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Tank Insurance Claims and Risk | PC Water",
    seoDescription:
      "Maintenance history, foreseeability and documented inspections all affect how a water tank insurance claim is assessed. A practical look at what insurers examine.",
    publishedAt: '2026-09-06T09:00:00.000Z',
    createdAt: '2026-09-06T09:00:00.000Z',
    updatedAt: '2026-09-06T09:00:00.000Z',
    tags: [
      { id: 'tag-asset-management-insurance', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-compliance-insurance', name: 'Compliance', slug: 'compliance' },
      { id: 'tag-tank-maintenance-insurance', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'Seismic and Wind Loading on Water Tanks: Why Structural Desi'),
    title: "Seismic and Wind Loading on Water Tanks: Why Structural Design Doesn’t Stop at the Walls",
    slug: 'seismic-and-wind-loading-on-water-tanks-why-structural-design-doesnt-stop-at-the-walls',
    excerpt:
      "A tank wall thick enough to hold water is not automatically thick enough to survive the dynamic forces of an earthquake or extreme wind event. What that additional design layer covers.",
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
    coverImageUrl: `${BASE}/corrosion-hero.jpg`,
    readTime: '7 min read',
    status: 'published',
    seoTitle: "Seismic and Wind Loading on Water Tanks | PC Water",
    seoDescription:
      "Sloshing loads, anchorage and foundation interaction are structural considerations beyond a tank wall's ability to simply hold water. A practical explanation of seismic and wind design.",
    publishedAt: '2026-09-07T09:00:00.000Z',
    createdAt: '2026-09-07T09:00:00.000Z',
    updatedAt: '2026-09-07T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-installation-seismic', name: 'Tank Installation', slug: 'tank-installation' },
      { id: 'tag-custom-tank-seismic', name: 'Custom Tank Design', slug: 'custom-tank-design' },
      { id: 'tag-asset-management-seismic', name: 'Asset Management', slug: 'asset-management' },
    ],
  },
  {
    id: staticId('post', 'Data Centre and Critical Facility Water Storage: Redundancy '),
    title: "Data Centre and Critical Facility Water Storage: Redundancy Requirements Explained",
    slug: 'data-centre-and-critical-facility-water-storage-redundancy-requirements-explained',
    excerpt:
      "Cooling water and fire water storage for a data centre or critical facility cannot tolerate a single point of failure. What genuine redundancy actually requires.",
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
    coverImageUrl: `${BASE}/sector-inspection.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Data Centre Water Storage Redundancy | PC Water",
    seoDescription:
      "Cooling water continuity and fire compliance both demand genuine redundancy in a data centre or critical facility's water storage. A practical explanation of what that requires.",
    publishedAt: '2026-09-08T09:00:00.000Z',
    createdAt: '2026-09-08T09:00:00.000Z',
    updatedAt: '2026-09-08T09:00:00.000Z',
    tags: [
      { id: 'tag-industrial-facilities-datacentre', name: 'Industrial Facilities', slug: 'industrial-facilities' },
      { id: 'tag-project-managed-datacentre', name: 'Project Delivery', slug: 'project-managed' },
      { id: 'tag-fire-compliance-datacentre', name: 'Fire Compliance', slug: 'fire-compliance' },
    ],
  },
  {
    id: staticId('post', 'Government and Council Water Asset Management: Reporting Obl'),
    title: "Government and Council Water Asset Management: Reporting Obligations Under Budget Pressure",
    slug: 'government-and-council-water-asset-management-reporting-under-budget-pressure',
    excerpt:
      "Councils manage ageing water storage assets against reporting obligations and constrained budgets at the same time. Here is how well-run asset management programs reconcile the two.",
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
    coverImageUrl: `${BASE}/sector-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Council Water Asset Management Explained | PC Water",
    seoDescription:
      "Reporting obligations, ageing infrastructure and constrained budgets all shape how councils manage water storage assets. A practical explanation of what a sound program looks like.",
    publishedAt: '2026-09-09T09:00:00.000Z',
    createdAt: '2026-09-09T09:00:00.000Z',
    updatedAt: '2026-09-09T09:00:00.000Z',
    tags: [
      { id: 'tag-government-asset-mgmt', name: 'Government', slug: 'government' },
      { id: 'tag-asset-management-council', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-compliance-council', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Water Tank Coating Systems Compared: Epoxy, Polyurethane and'),
    title: "Water Tank Coating Systems Compared: Epoxy, Polyurethane and Zinc-Rich Primers",
    slug: 'water-tank-coating-systems-compared-epoxy-polyurethane-and-zinc-rich-primers',
    excerpt:
      "Not every coating system suits every tank. Here is how epoxy, polyurethane and zinc-rich primer systems actually differ, and what should drive the choice between them.",
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
    coverImageUrl: `${BASE}/corrosion-coating-comparison.jpg`,
    readTime: '7 min read',
    status: 'published',
    seoTitle: "Water Tank Coating Systems Explained | PC Water",
    seoDescription:
      "Epoxy, polyurethane and zinc-rich primer coating systems protect steel water tanks differently. A practical comparison of how each performs and where each fits.",
    publishedAt: '2026-09-10T09:00:00.000Z',
    createdAt: '2026-09-10T09:00:00.000Z',
    updatedAt: '2026-09-10T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-maintenance-coatings', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-corrosion-coatings', name: 'Corrosion', slug: 'corrosion' },
      { id: 'tag-tank-inspection-coatings', name: 'Tank Inspection', slug: 'tank-inspection' },
    ],
  },
  {
    id: staticId('post', 'Industrial Process Water Storage: When Potable-Grade Isn’t t'),
    title: "Industrial Process Water Storage: When Potable-Grade Isn’t the Right Specification",
    slug: 'industrial-process-water-storage-when-potable-grade-isnt-the-right-specification',
    excerpt:
      "Specifying every industrial water tank to potable standards seems like the safe default. It is often the wrong one — and the more expensive one. Here is how to specify process water storage correctly.",
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
    coverImageUrl: `${BASE}/harsh-env-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Industrial Process Water Storage Explained | PC Water",
    seoDescription:
      "Process water storage often needs a different specification to potable storage — sometimes more resistant, sometimes simpler. A practical guide to specifying industrial process water tanks correctly.",
    publishedAt: '2026-09-11T09:00:00.000Z',
    createdAt: '2026-09-11T09:00:00.000Z',
    updatedAt: '2026-09-11T09:00:00.000Z',
    tags: [
      { id: 'tag-industrial-facilities-process', name: 'Industrial Facilities', slug: 'industrial-facilities' },
      { id: 'tag-water-treatment-process', name: 'Water Treatment Solutions', slug: 'water-treatment' },
      { id: 'tag-custom-tank-process', name: 'Custom Tank Design', slug: 'custom-tank-design' },
    ],
  },
  {
    id: staticId('post', 'Weld Inspection and NDT for Steel Water Tanks: What Gets Che'),
    title: "Weld Inspection and NDT for Steel Water Tanks: What Gets Checked and Why",
    slug: 'weld-inspection-and-ndt-for-steel-water-tanks-what-gets-checked-and-why',
    excerpt:
      "A weld can look perfect on the surface and still hide a defect that compromises the tank. Here is what non-destructive testing actually checks, and why visual inspection alone is not enough.",
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
    coverImageUrl: `${BASE}/corrosion-rov-inspection.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Weld Inspection and NDT for Water Tanks | PC Water",
    seoDescription:
      "Visual inspection cannot detect subsurface weld defects. A practical explanation of the non-destructive testing methods used to verify weld integrity on steel water tanks.",
    publishedAt: '2026-09-12T09:00:00.000Z',
    createdAt: '2026-09-12T09:00:00.000Z',
    updatedAt: '2026-09-12T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-inspection-ndt', name: 'Tank Inspection', slug: 'tank-inspection' },
      { id: 'tag-tank-installation-ndt', name: 'Tank Installation', slug: 'tank-installation' },
      { id: 'tag-compliance-ndt', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Water Tank Freeboard and Overflow Sizing: Getting the Number'),
    title: "Water Tank Freeboard and Overflow Sizing: Getting the Numbers Right for Storm Events",
    slug: 'water-tank-freeboard-and-overflow-sizing-getting-the-numbers-right-for-storm-events',
    excerpt:
      "Freeboard and overflow capacity are two of the least visible numbers in a tank design — and two of the most consequential when a storm event actually tests them.",
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
    coverImageUrl: `${BASE}/sediment-tank-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Tank Freeboard and Overflow Sizing | PC Water",
    seoDescription:
      "Freeboard allowance and overflow pipe sizing determine whether a tank handles a storm inflow event safely. A practical explanation of getting these design numbers right.",
    publishedAt: '2026-09-13T09:00:00.000Z',
    createdAt: '2026-09-13T09:00:00.000Z',
    updatedAt: '2026-09-13T09:00:00.000Z',
    tags: [
      { id: 'tag-custom-tank-freeboard', name: 'Custom Tank Design', slug: 'custom-tank-design' },
      { id: 'tag-foundation-civil-freeboard', name: 'Foundation & Civil', slug: 'foundation-civil' },
      { id: 'tag-compliance-freeboard', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Remote Community Water Security: Redundancy Planning Beyond '),
    title: "Remote Community Water Security: Redundancy Planning Beyond a Single Tank",
    slug: 'remote-community-water-security-redundancy-planning-beyond-a-single-tank',
    excerpt:
      "A single tank, however well maintained, is a single point of failure for a remote community with no easy backup supply. Here is what genuine water security redundancy looks like.",
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
    coverImageUrl: `${BASE}/harsh-env-drone.jpg`,
    readTime: '7 min read',
    status: 'published',
    seoTitle: "Remote Community Water Security Redundancy | PC Water",
    seoDescription:
      "A remote community relying on a single water tank has no backup if that tank fails. A practical explanation of redundancy planning for genuine water security.",
    publishedAt: '2026-09-14T09:00:00.000Z',
    createdAt: '2026-09-14T09:00:00.000Z',
    updatedAt: '2026-09-14T09:00:00.000Z',
    tags: [
      { id: 'tag-remote-community-security', name: 'Remote Community', slug: 'remote-community' },
      { id: 'tag-remote-projects-security', name: 'Remote Projects', slug: 'remote-projects' },
      { id: 'tag-project-managed-security', name: 'Project Delivery', slug: 'project-managed' },
    ],
  },
  {
    id: staticId('post', 'Potable Water Tank Commissioning: The Disinfection and Testi'),
    title: "Potable Water Tank Commissioning: The Disinfection and Testing Steps Before Handover",
    slug: 'potable-water-tank-commissioning-disinfection-and-testing-before-handover',
    excerpt:
      "A newly installed or relined tank is not ready for potable water the moment construction finishes. Here is what proper commissioning actually involves before handover.",
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
    coverImageUrl: `${BASE}/water-food-hatch.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Potable Water Tank Commissioning Explained | PC Water",
    seoDescription:
      "Disinfection, flushing and water quality testing are all required before a new or relined potable water tank can be safely handed over. A practical commissioning guide.",
    publishedAt: '2026-09-15T09:00:00.000Z',
    createdAt: '2026-09-15T09:00:00.000Z',
    updatedAt: '2026-09-15T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-installation-commissioning', name: 'Tank Installation', slug: 'tank-installation' },
      { id: 'tag-potable-water-commissioning', name: 'Potable Water', slug: 'potable-water' },
      { id: 'tag-compliance-commissioning', name: 'Compliance', slug: 'compliance' },
    ],
  },
  {
    id: staticId('post', 'Water Tank Roof Types Compared: Fixed, Floating and Geodesic'),
    title: "Water Tank Roof Types Compared: Fixed, Floating and Geodesic Domes",
    slug: 'water-tank-roof-types-compared-fixed-floating-and-geodesic-domes',
    excerpt:
      "A tank roof does more than keep the weather out. Fixed, floating and geodesic dome roof types each suit different tank sizes, exposures and maintenance approaches.",
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
    coverImageUrl: `${BASE}/sector-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Tank Roof Types Compared | PC Water",
    seoDescription:
      "Fixed roofs, floating roofs and geodesic domes each offer different structural, maintenance and contamination-control advantages on a water storage tank. A practical comparison.",
    publishedAt: '2026-09-16T09:00:00.000Z',
    createdAt: '2026-09-16T09:00:00.000Z',
    updatedAt: '2026-09-16T09:00:00.000Z',
    tags: [
      { id: 'tag-custom-tank-roof', name: 'Custom Tank Design', slug: 'custom-tank-design' },
      { id: 'tag-tank-installation-roof', name: 'Tank Installation', slug: 'tank-installation' },
      { id: 'tag-tank-maintenance-roof-type', name: 'Tank Maintenance', slug: 'tank-maintenance' },
    ],
  },
  {
    id: staticId('post', 'Vapour Corrosion Inhibitors and Internal Atmosphere Control '),
    title: "Vapour Corrosion Inhibitors and Internal Atmosphere Control in Partially Full Tanks",
    slug: 'vapour-corrosion-inhibitors-and-internal-atmosphere-control-in-partially-full-tanks',
    excerpt:
      "The corrosion above the waterline is often worse than below it. Here is why the vapour space in a partially full tank is a distinct corrosion risk, and how it is managed.",
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
    coverImageUrl: `${BASE}/corrosion-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Vapour Space Corrosion in Water Tanks Explained | PC Water",
    seoDescription:
      "The area above the waterline in a partially full tank corrodes differently to the submerged steel below it. A practical explanation of vapour space corrosion and how it is controlled.",
    publishedAt: '2026-09-17T09:00:00.000Z',
    createdAt: '2026-09-17T09:00:00.000Z',
    updatedAt: '2026-09-17T09:00:00.000Z',
    tags: [
      { id: 'tag-corrosion-vapour', name: 'Corrosion', slug: 'corrosion' },
      { id: 'tag-tank-maintenance-vapour', name: 'Tank Maintenance', slug: 'tank-maintenance' },
      { id: 'tag-tank-inspection-vapour', name: 'Tank Inspection', slug: 'tank-inspection' },
    ],
  },
  {
    id: staticId('post', 'Building a Water Asset Register: What Councils and Facility '),
    title: "Building a Water Asset Register: What Councils and Facility Managers Should Track",
    slug: 'building-a-water-asset-register-what-councils-and-facility-managers-should-track',
    excerpt:
      "A water asset register that only lists what tanks exist is a directory, not a management tool. Here is what a genuinely useful register actually tracks.",
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
    coverImageUrl: `${BASE}/ticking-hero.jpg`,
    readTime: '6 min read',
    status: 'published',
    seoTitle: "Water Asset Register: What to Track | PC Water",
    seoDescription:
      "A useful water asset register tracks condition history, maintenance records and risk data, not just a list of tanks. A practical guide for councils and facility managers.",
    publishedAt: '2026-09-18T09:00:00.000Z',
    createdAt: '2026-09-18T09:00:00.000Z',
    updatedAt: '2026-09-18T09:00:00.000Z',
    tags: [
      { id: 'tag-asset-management-register', name: 'Asset Management', slug: 'asset-management' },
      { id: 'tag-government-register', name: 'Government', slug: 'government' },
      { id: 'tag-tank-inspection-register', name: 'Tank Inspection', slug: 'tank-inspection' },
    ],
  },
]

export const fallbackProjects: CmsProject[] = [
  {
    id: staticId('project', 'Borumba Hydro Scheme'),
    title: 'Borumba Hydro Scheme',
    slug: 'borumba-hydro',
    summary: 'The Borumba Hydro Scheme is a major renewable energy infrastructure project in Queensland. PC Water Infrastructure was engaged to design and install two 521KL tanks serving dual purposes — potable water storage and effluent containment — as part of the broader scheme infrastructure.',
    content:
      'The remote site location at Borumba Dam required careful project planning, remote logistics coordination, and engineering design that accounted for site accessibility, environmental conditions, and the stringent potable water standards required for one of the two tanks. The project was delivered on schedule, contributing critical water infrastructure to support the Borumba Hydro scheme operations.\n\n## The Challenge\n\nDelivering a dual-purpose tank system to a remote dam site with strict potable water engineering requirements presented multiple challenges. The design had to simultaneously meet AS4020 potable water compliance for one tank and engineering requirements for effluent storage in the other — while being constructable in a remote, access-constrained environment on a defined program.\n\n## The Solution\n\nPC Water Infrastructure developed a custom dual-purpose tank design certified by RPEQ engineers. The potable water tank was designed to AS4020 standards with RPVC liner system, while the effluent storage tank was engineered for its specific containment requirements. Civil integration and remote logistics were managed by PC Water Infrastructure as a single-point delivery package.\n\n## The Outcome\n\nBoth tanks were delivered on schedule and to specification, providing critical water infrastructure for the Borumba Hydro scheme. The dual-purpose design met all compliance requirements and has been integrated successfully into the scheme\'s ongoing operations.',
    sector: 'Hydro Energy / Government',
    location: 'Borumba Dam, Queensland',
    scope: '2 × 521KL tanks — potable water and effluent storage, AS4020 compliant',
    clientOrganisation: 'Hydra Dynamics Pty LTD',
    contractValue: '$260,000.00',
    heroImageUrl: 'https://goldengraphixstudios.github.io/pc-water/projects/borumba-hero.jpg',
    galleryUrls: [
      'https://goldengraphixstudios.github.io/pc-water/projects/borumba-01.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/borumba-02.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/borumba-03.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/borumba-04.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/borumba-05.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/borumba-06.jpg',
    ],
    status: 'published',
    featured: true,
    publishedAt: '2026-04-01T09:00:00.000Z',
    createdAt: '2026-04-01T09:00:00.000Z',
    updatedAt: '2026-04-01T09:00:00.000Z',
    seoTitle: 'Borumba Hydro Scheme Water Infrastructure | PC Water',
    seoDescription: 'PC Water Infrastructure designed and installed two 521kL tanks — potable and effluent storage — at the remote Borumba Dam hydro scheme site in Queensland.',
    tags: [{ id: 'tag-government', name: 'Government', slug: 'government' }],
  },
  {
    id: staticId('project', 'Hobart Nyrstar Industrial'),
    title: 'Hobart Nyrstar Industrial',
    slug: 'hobart-nyrstar',
    summary: "Nyrstar operates one of the world's largest zinc smelters in Hobart, Tasmania. PC Water Infrastructure was engaged to supply and install two industrial tanks for the facility — a demanding industrial environment characterised by chemical exposure, corrosive atmospheres, and stringent operational requirements.",
    content:
      "The zinc processing environment at the Hobart facility creates highly aggressive conditions for water storage infrastructure. Standard tank specification is insufficient for this type of environment — materials, coatings, and fittings all need to be specifically selected for compatibility with the chemical environment and resistance to accelerated corrosion.\n\n## The Challenge\n\nDelivering water storage tanks to an active industrial facility with complex operational requirements and a corrosive chemical environment demanded careful engineering. The tanks needed to withstand the specific environmental conditions of the Nyrstar zinc processing operations while meeting the facility's operational and safety requirements.\n\n## The Solution\n\nPC Water Infrastructure designed and installed two industrial tanks with materials and coatings specifically selected for the Nyrstar operating environment. Corrosion-resistant steel grades, specialist protective coating systems, and chemically compatible fittings were specified to ensure longevity in the aggressive industrial environment.\n\n## The Outcome\n\nBoth tanks were delivered to specification, meeting the facility's operational requirements and the specific engineering demands of the Nyrstar zinc processing environment. The project demonstrates PC Water Infrastructure's capability to deliver specialist industrial tank solutions in complex, demanding facilities.",
    sector: 'Industrial / Refurbish',
    location: 'Hobart, Tasmania',
    scope: '2 × industrial tanks — specialist coatings for zinc processing environment',
    clientOrganisation: 'Nyrstar',
    contractValue: '$450,000',
    heroImageUrl: 'https://goldengraphixstudios.github.io/pc-water/projects/hobart-01.jpg',
    galleryUrls: [
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-01.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-02.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-03.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-04.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-06.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-07.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-08.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-09.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/hobart-10.jpg',
    ],
    status: 'published',
    featured: true,
    publishedAt: '2026-04-02T09:00:00.000Z',
    createdAt: '2026-04-02T09:00:00.000Z',
    updatedAt: '2026-04-02T09:00:00.000Z',
    seoTitle: 'Nyrstar Hobart Industrial Tank Installation | PC Water',
    seoDescription: 'Two industrial water tanks for the Nyrstar zinc smelter in Hobart, Tasmania — specialist corrosion-resistant engineering for a harsh processing environment.',
    tags: [{ id: 'tag-refurbish', name: 'Refurbish', slug: 'refurbish' }],
  },
  {
    id: staticId('project', 'Doomadgee 2ML Reservoir'),
    title: 'Doomadgee 2ML Reservoir',
    slug: 'doomadgee-wtp',
    summary: "Doomadgee is a remote Indigenous community in Queensland's Gulf Country — the traditional homeland of the Gangalidda, Waanyi, Garrawa and Yunjulla peoples — located approximately 200 kilometres south of the Gulf of Carpentaria. PC Water Infrastructure was engaged to deliver a 2-megalitre ground-level tank as part of the community's water treatment plant infrastructure, providing the storage capacity needed to ensure reliable, safe water supply to the community.",
    content:
      "This project represents one of the most logistically complex deliveries in PC Water Infrastructure's portfolio — combining extreme remoteness, significant civil earthworks in challenging soil conditions, and the responsibility of delivering infrastructure that would directly impact community health and wellbeing.\n\n## The Challenge\n\nDoomadgee's remote location means all materials, equipment, and crew must be transported hundreds of kilometres on unsealed roads that become inaccessible during the wet season. The earthworks required for a 2ML ground-level tank in the local soil conditions presented additional engineering and construction challenges. Working in an Indigenous community required cultural sensitivity and genuine engagement with community representatives throughout the project.\n\n## The Solution\n\nPC Water Infrastructure coordinated a comprehensive remote project delivery plan — scheduling construction activities within the dry season window, pre-positioning materials ahead of wet season risk, and engaging with community and government representatives to ensure the project proceeded with community support. Civil earthworks were engineered to address the site's specific soil conditions.\n\n## The Outcome\n\nThe 2ML ground-level tank structure has now been built on site, including the external access system. The broader project remains ongoing as work progresses toward final completion and commissioning. Once commissioned, the tank will provide the Doomadgee community with the additional water storage capacity needed to support the water treatment plant's operations.\n\nThis ongoing project represents an important step toward strengthening safe and reliable water access for one of Australia's most remote communities — an outcome PC Water Infrastructure is proud to be contributing to.",
      sector: 'Remote Community / Government',
      location: 'Doomadgee, QLD (Remote)',
      scope: '2ML ground-level tank — water treatment plant storage',
      projectStatus: 'Ongoing',
      clientOrganisation: 'Australian Government, through the National Water Grid Fund, and the Queensland Government\n\nDepartment of Local Government, Water and Volunteers (DLGWV)',
      contractValue: '$3,000,000',
      servicesDelivered: [
        'Remote Area Project Delivery',
        'Custom Tank Design & Engineering',
        'Foundation & Civil Integration',
        'Professional Tank Installation',
      ],
      heroImageUrl: '/projects/doomadgee-completed-tank-hero.jpg',
    galleryUrls: [
      '/projects/doomadgee-tank-complete-01.jpg',
      '/projects/doomadgee-tank-complete-02.jpg',
      '/projects/doomadgee-tank-complete-03.jpg',
      '/projects/doomadgee-tank-complete-04.jpg',
      '/projects/doomadgee-tank-complete-05.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-01.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-02.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-03.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-04.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-05.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-06.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-07.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-08.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-09.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/doomadgee-10.jpg',
    ],
    status: 'published',
    featured: true,
    seoTitle: 'Doomadgee 2ML Reservoir | PC Water',
    seoDescription: 'PC Water delivering a 2ML ground-level tank for Doomadgee Council in remote Queensland — supporting the community water treatment plant.',
    publishedAt: '2026-04-03T09:00:00.000Z',
    createdAt: '2026-04-03T09:00:00.000Z',
    updatedAt: '2026-08-13T07:15:00.000Z',
    tags: [
      { id: 'tag-government-2', name: 'Government', slug: 'government' },
      { id: 'tag-remote-community', name: 'Remote Community', slug: 'remote-community' },
    ],
  },
  {
    id: staticId('project', 'Albury Reservoir Reline'),
    title: 'Albury Reservoir Reline',
    slug: 'albury-reservoir',
    summary: 'An aging 600kL municipal reservoir in Albury, New South Wales had reached a point where corrosion and liner deterioration created compliance risk for potable water storage. PC Water Infrastructure was engaged to deliver a complete reline and refurbishment — restoring the reservoir to AS4020 potable water compliance and extending its service life by decades.',
    content:
      "Rather than recommending reservoir replacement — which would have been significantly more expensive and disruptive — PC Water Infrastructure's assessment identified that the underlying structure remained sound and that RPVC liner installation combined with targeted refurbishment would fully restore the asset.\n\n## The Challenge\n\nThe reservoir's original liner had deteriorated to a point where potable water compliance could not be maintained. Corrosion of internal surfaces posed contamination risk, and the asset required urgent intervention. The challenge was to deliver a cost-effective solution that restored compliance without the time and cost of full asset replacement.\n\n## The Solution\n\nPC Water Infrastructure conducted a structural assessment confirming the reservoir shell remained sound. An RPVC liner installation program was developed — the tank was taken offline, the interior cleaned and prepared, and specialist RPVC welders installed a new AS4020-compliant membrane lining. Full refurbishment of fittings and access infrastructure was completed alongside the liner installation.\n\n## The Outcome\n\nThe Albury reservoir was returned to service in AS4020 potable water compliance, with an asset life extended by an estimated 20-plus years. The total cost of the liner and refurbishment was a fraction of reservoir replacement — demonstrating the significant value of targeted RPVC liner investment over asset replacement for sound structures.",
    sector: 'Municipal / Government',
    location: 'Albury, NSW',
    scope: '600kL reservoir RPVC reline and full refurbishment — AS4020 compliance',
    clientOrganisation: 'AlburyCity Council',
    contractValue: '$96,500.00',
    heroImageUrl: 'https://goldengraphixstudios.github.io/pc-water/projects/albury-06.jpg',
    galleryUrls: [
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-06.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-01.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-02.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-03.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-04.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-05.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-07.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-08.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-09.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/albury-10.jpg',
    ],
    status: 'published',
    featured: false,
    seoTitle: 'Albury Reservoir RPVC Reline | PC Water',
    seoDescription: 'RPVC liner installation and full refurbishment of a 600kL Albury NSW reservoir — restoring AS4020 potable water compliance and extending asset life by 20+ years',
    publishedAt: '2026-04-04T09:00:00.000Z',
    createdAt: '2026-04-04T09:00:00.000Z',
    updatedAt: '2026-04-04T09:00:00.000Z',
    tags: [
      { id: 'tag-government-3', name: 'Government', slug: 'government' },
      { id: 'tag-rpvc-liners-project', name: 'RPVC Liners', slug: 'rpvc-liners' },
      { id: 'tag-tank-liners', name: 'Tank Liners', slug: 'tank-liners' },
      { id: 'tag-refurbish-2', name: 'Refurbish', slug: 'refurbish' },
    ],
  },
  {
    id: staticId('project', 'Kybrook Farm Pine Creek NT'),
    title: 'Kybrook Farm Elevated Tank Replacement',
    slug: 'kybrook-nt',
    summary: "Kybrook Farm in Pine Creek, Northern Territory required the removal and replacement of an elevated potable water tank. PC Tanks delivered a complete remove-and-replace solution — dismantling the existing asset and installing a new fully sealed 316 stainless steel 90kL elevated tank for McMahon Services, supporting Power and Water Corporation infrastructure in the Northern Territory.",
    content:
      "This project was delivered in a remote NT location, requiring careful coordination of transport, site access, crane activities, installation sequencing, and construction planning. The outcome was a new compliant potable water asset designed for long-term durability in harsh regional conditions.\n\n## The Challenge\n\nThe existing elevated tank had reached the point where replacement was the most practical path forward. The project required the safe removal of the old tank and installation of a new elevated potable water tank in a remote operating environment, with close attention to logistics, access, and construction efficiency.\n\n## The Solution\n\nPC Tanks delivered a full replacement scope including dismantling the existing tank, design, manufacture, supply, delivery, and installation of a new 90kL elevated stainless steel potable water tank. The replacement tank was built as a fully sealed 316 stainless steel system with compliant access infrastructure and associated fittings suited to the project requirements.\n\n## The Outcome\n\nThe Kybrook tank replacement was completed in May 2026, providing a new elevated potable water storage asset for the site. The finished installation delivered a durable, fully sealed stainless steel solution tailored to remote Northern Territory conditions and restored the site with a modern replacement asset ready for ongoing service.",
    sector: 'Utilities / Government',
    location: 'Kybrook Farm, Pine Creek, NT',
    scope: '1 × 90kL elevated potable water tank replacement — 316 stainless steel',
    clientOrganisation: 'McMahon Services Australia (NT)',
    contractValue: '$240,000.00',
    heroImageUrl: 'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-01.jpg',
    galleryUrls: [
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-01.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-02.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-03.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-04.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-05.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-06.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-07.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-08.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-09.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/kybrook-10.jpg',
    ],
    status: 'published',
    featured: true,
    seoTitle: 'Kybrook Farm Elevated Tank Replacement — Pine Creek NT | PC Water',
    seoDescription: '90kL stainless steel elevated potable water tank replacement at Kybrook Farm, Pine Creek NT — remote Northern Territory delivery by PC Water Infrastructure.',
    publishedAt: '2026-05-07T09:00:00.000Z',
    createdAt: '2026-05-07T09:00:00.000Z',
    updatedAt: '2026-05-07T09:00:00.000Z',
    tags: [
      { id: 'tag-tank-install-kybrook', name: 'Professional Tank Installation', slug: 'tank-installation' },
    ],
  },
  {
    id: staticId('project', 'Clarence Road Liner Replacement'),
    title: 'Clarence Road Liner Replacement',
    slug: 'clarence-road-liner',
    summary: 'Two water storage tanks at 107 Clarence Road had reached a point of liner failure — deteriorated liners created compliance risk and potential contamination of stored water. PC Water Infrastructure was engaged to assess the tanks and deliver RPVC liner replacement to restore both tanks to compliant, operational condition.',
    content:
      "The project is a representative example of a common maintenance need for commercial and industrial tank owners — liner deterioration that, if addressed proactively, can be resolved efficiently and cost-effectively through RPVC liner replacement rather than full tank replacement.\n\n## The Challenge\n\nBoth tanks had liners that had reached end of service life — showing deterioration, potential integrity failure, and compliance risk. The tanks needed to be taken offline, assessed, and returned to service as quickly as possible to minimise operational disruption.\n\n## The Solution\n\nPC Water Infrastructure conducted an internal inspection of both tanks to confirm structural condition and determine liner specification. RPVC liner replacement was completed by specialist welders — both tanks were cleaned, prepared, lined, and integrity-tested before return to service. Full compliance documentation was provided with handover.\n\n## The Outcome\n\nBoth tanks were returned to service with new RPVC liners in compliance with applicable standards. The liner replacement extended the service life of both assets, avoided the cost of full tank replacement, and restored compliance for the client.",
    sector: 'Commercial',
    location: '107 Clarence Road',
    scope: '2 × tank RPVC liner replacement — compliance restoration',
    clientOrganisation: 'SAVVE Developments & Construction',
    contractValue: '$55,000.00',
    heroImageUrl: 'https://goldengraphixstudios.github.io/pc-water/projects/clarence-01.jpg',
    galleryUrls: [
      'https://goldengraphixstudios.github.io/pc-water/projects/clarence-01.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/clarence-02.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/clarence-03.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/clarence-04.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/clarence-05.jpg',
      'https://goldengraphixstudios.github.io/pc-water/projects/clarence-06.jpg',
    ],
    status: 'published',
    featured: false,
    seoTitle: 'Clarence Road RPVC Liner Replacement | PC Water',
    seoDescription: 'RPVC liner replacement for two commercial water storage tanks at 107 Clarence Road — restoring compliance and avoiding full asset replacement.',
    publishedAt: '2026-04-05T09:00:00.000Z',
    createdAt: '2026-04-05T09:00:00.000Z',
    updatedAt: '2026-04-05T09:00:00.000Z',
    tags: [
      { id: 'tag-commercial', name: 'Commercial', slug: 'commercial' },
      { id: 'tag-fire-contractors', name: 'Fire Contractors', slug: 'fire-contractors' },
      { id: 'tag-rpvc-liners-project-2', name: 'RPVC Liners', slug: 'rpvc-liners' },
      { id: 'tag-tank-liners-2', name: 'Tank Liners', slug: 'tank-liners' },
    ],
  },
]
