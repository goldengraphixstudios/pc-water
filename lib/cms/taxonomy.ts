/**
 * Editorial taxonomy for the Articles & Insights library.
 *
 * Faceted classification, publishing-house style:
 *   - CATEGORY  one per article, mutually exclusive. Drives sections, hub
 *               pages, breadcrumbs and URLs. This is the "section" a story
 *               lives in.
 *   - TOPIC     many per article. Cross-cutting themes used for discovery
 *               and filtering. Never used for primary navigation.
 *   - REGION    optional. Geographic facet for regionally-scoped articles.
 *   - FORMAT    one per article. What kind of read it is.
 *
 * Articles are classified by slug in ARTICLE_CLASSIFICATION below. Anything
 * not explicitly classified falls back to a keyword-derived category so the
 * library never breaks when new posts are published ahead of curation.
 */

import type { CmsPost } from './types'

// ─────────────────────────────────────────────────────────────────────────
// Facet: CATEGORY (primary section — one per article)
// ─────────────────────────────────────────────────────────────────────────

export type CategorySlug =
  | 'corrosion-coatings'
  | 'inspection-testing'
  | 'cleaning-sediment'
  | 'water-quality'
  | 'fire-water'
  | 'tank-design'
  | 'repair-lifecycle'
  | 'project-delivery'
  | 'asset-management'
  | 'regional'

export interface ArticleCategory {
  slug: CategorySlug
  name: string
  shortName: string
  tagline: string
  /** Pillar-page intro shown on the category hub. 2 paragraphs. */
  intro: string[]
  accent: string
}

export const CATEGORIES: ArticleCategory[] = [
  {
    slug: 'corrosion-coatings',
    name: 'Corrosion & Coatings',
    shortName: 'Corrosion',
    tagline: 'How steel and concrete degrade — and what actually stops it.',
    intro: [
      'Corrosion is the single largest driver of water tank deterioration in Australia, and it rarely announces itself early. By the time a coating failure is visible from the outside, the mechanism behind it has usually been running for years.',
      'These articles cover how to read the failure modes, how coating systems and cathodic protection actually protect steel, and where concrete and steel assets deteriorate through fundamentally different processes that need different responses.',
    ],
    accent: '#b45309',
  },
  {
    slug: 'inspection-testing',
    name: 'Inspection & Testing',
    shortName: 'Inspection',
    tagline: 'Knowing the real condition of an asset, not assuming it.',
    intro: [
      'An asset you have not inspected is an asset in unknown condition. The difference between a managed tank and a liability is almost always whether its condition is documented, current, and acted on.',
      'These articles cover inspection methods from ROV survey through to hands-on entry and non-destructive weld testing, how to read what an inspection report is actually telling you, and the safety requirements that govern access.',
    ],
    accent: '#2a72ad',
  },
  {
    slug: 'cleaning-sediment',
    name: 'Cleaning & Sediment',
    shortName: 'Cleaning',
    tagline: 'What accumulates inside a tank, and how it gets removed.',
    intro: [
      'Sediment accumulates in every water storage asset. It reduces usable volume, shelters biological growth, consumes disinfection residual, and eventually becomes a compliance problem rather than a housekeeping one.',
      'These articles cover how sediment forms, how much is too much, how tanks are cleaned without being taken offline, and what happens to everything that comes out.',
    ],
    accent: '#0f766e',
  },
  {
    slug: 'water-quality',
    name: 'Water Quality & Contamination',
    shortName: 'Water Quality',
    tagline: 'How stored water degrades between treatment and the tap.',
    intro: [
      'Water that leaves a treatment plant compliant does not stay that way automatically. Storage sits between treatment and use, and it is where a surprising share of water quality problems actually originate.',
      'These articles cover contamination pathways that have nothing to do with source water, the biological and chemical processes that occur inside storage, and the standards that govern materials in contact with drinking water.',
    ],
    accent: '#3e91ce',
  },
  {
    slug: 'fire-water',
    name: 'Fire Water Systems',
    shortName: 'Fire Water',
    tagline: 'AS2304, AS1851, and storage that has to work on the worst day.',
    intro: [
      'Fire water storage is judged on a single question: can it deliver the required volume, at the required rate, at the moment it is needed. Everything in the compliance framework exists to answer that question with evidence rather than assumption.',
      'These articles cover AS1851 service levels, usable volume and draw-down calculations, the most common causes of fire tank compliance failure, and static water supply requirements for bushfire-prone properties.',
    ],
    accent: '#b91c1c',
  },
  {
    slug: 'tank-design',
    name: 'Tank Design & Installation',
    shortName: 'Design',
    tagline: 'Getting the specification right before anything is built.',
    intro: [
      'Most expensive tank problems trace back to a decision made before construction started — a foundation sized on assumption, a shape chosen by default, or a structural load case that was never checked against the actual site.',
      'These articles cover configuration and shape trade-offs, foundation and civil works, structural loading from wind and seismic events, roof types, and the commissioning steps that turn a finished structure into a verified asset.',
    ],
    accent: '#30505b',
  },
  {
    slug: 'repair-lifecycle',
    name: 'Repair, Relining & Lifecycle',
    shortName: 'Lifecycle',
    tagline: 'Extending asset life, and knowing when not to.',
    intro: [
      'Every ageing tank eventually presents the same question: repair it, reline it, or replace it. Answered well, relining can add decades to a structurally sound asset at a fraction of replacement cost. Answered badly, it defers a problem at full price.',
      'These articles cover RPVC liner systems, the lifecycle economics behind reline-versus-replace decisions, how to handle an emergency failure safely, and what proper decommissioning involves at end of life.',
    ],
    accent: '#7c3aed',
  },
  {
    slug: 'project-delivery',
    name: 'Project Delivery & Procurement',
    shortName: 'Delivery',
    tagline: 'How water infrastructure projects succeed or stall.',
    intro: [
      'Water infrastructure projects rarely fail on the engineering. They fail in the gaps between contracts, in specifications written around assumed conditions, and in freight and access constraints discovered after design was locked in.',
      'These articles cover tender and specification preparation, the case for single-point accountability across civil, supply and commissioning, and the logistics realities of delivering into remote Australia.',
    ],
    accent: '#065f46',
  },
  {
    slug: 'asset-management',
    name: 'Asset Management & Risk',
    shortName: 'Asset Mgmt',
    tagline: 'Registers, warranties, insurance and defensible decisions.',
    intro: [
      'Asset management is what turns a collection of tanks into a portfolio you can make defensible decisions about. It is also what determines whether a warranty claim succeeds, an insurance claim holds up, or a deferred repair was reasonable.',
      'These articles cover condition-based asset registers, monitoring and telemetry, warranty and insurance positions, pre-purchase due diligence, and sector-specific compliance obligations.',
    ],
    accent: '#1e3a5f',
  },
  {
    slug: 'regional',
    name: 'Regional Insights',
    shortName: 'Regional',
    tagline: 'Water infrastructure realities city by city, across Australia.',
    intro: [
      'Water infrastructure is not a national problem with one answer. Cyclone loading in Townsville, flood exposure in Rockhampton, frost at elevation in Ballarat and freight constraints out of Darwin all change what a correct specification looks like.',
      'These articles cover the climate, industry and infrastructure context that shapes water storage decisions in specific Australian regions.',
    ],
    accent: '#0891b2',
  },
]

export const CATEGORY_BY_SLUG: Record<string, ArticleCategory> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
)

// ─────────────────────────────────────────────────────────────────────────
// Facet: TOPIC (cross-cutting themes — many per article)
// ─────────────────────────────────────────────────────────────────────────

export type TopicSlug =
  | 'standards-compliance'
  | 'potable-water'
  | 'fire-protection'
  | 'government-council'
  | 'mining-resources'
  | 'industrial'
  | 'commercial-buildings'
  | 'remote-regional'
  | 'safety-whs'
  | 'cost-lifecycle'
  | 'monitoring-technology'
  | 'structural-engineering'

export interface ArticleTopic {
  slug: TopicSlug
  name: string
  description: string
}

export const TOPICS: ArticleTopic[] = [
  { slug: 'standards-compliance', name: 'Standards & Compliance', description: 'Australian Standards, certification and regulatory obligations for water storage assets.' },
  { slug: 'potable-water', name: 'Potable Water', description: 'Drinking water storage — quality, materials certification and contamination control.' },
  { slug: 'fire-protection', name: 'Fire Protection', description: 'Fire water storage, hydrant supply and fire system compliance.' },
  { slug: 'government-council', name: 'Government & Council', description: 'Local government asset management, reporting obligations and procurement.' },
  { slug: 'mining-resources', name: 'Mining & Resources', description: 'Water storage for mining and resources operations and their licence conditions.' },
  { slug: 'industrial', name: 'Industrial Facilities', description: 'Process water, cooling water and industrial-scale storage requirements.' },
  { slug: 'commercial-buildings', name: 'Commercial Buildings', description: 'Water storage for commercial developments, builders and facility managers.' },
  { slug: 'remote-regional', name: 'Remote & Regional', description: 'Delivery, logistics and water security beyond the metro network.' },
  { slug: 'safety-whs', name: 'Safety & WHS', description: 'Confined space entry, working at height and safe access to water assets.' },
  { slug: 'cost-lifecycle', name: 'Cost & Lifecycle', description: 'Lifecycle economics, warranty, insurance and capital planning.' },
  { slug: 'monitoring-technology', name: 'Monitoring & Technology', description: 'ROV inspection, level monitoring, SCADA and inspection technology.' },
  { slug: 'structural-engineering', name: 'Structural Engineering', description: 'Loading, foundations, anchorage and structural design of storage assets.' },
]

export const TOPIC_BY_SLUG: Record<string, ArticleTopic> = Object.fromEntries(
  TOPICS.map((t) => [t.slug, t]),
)

// ─────────────────────────────────────────────────────────────────────────
// Facet: REGION (optional geographic scope)
// ─────────────────────────────────────────────────────────────────────────

export type RegionSlug = 'qld' | 'nsw' | 'vic' | 'sa' | 'wa' | 'nt' | 'tas'

export interface ArticleRegion {
  slug: RegionSlug
  name: string
  shortName: string
  description: string
}

export const REGIONS: ArticleRegion[] = [
  { slug: 'qld', name: 'Queensland', shortName: 'QLD', description: 'Cyclone loading, monsoon inflow, flood exposure and heavy industry water storage across Queensland.' },
  { slug: 'nsw', name: 'New South Wales', shortName: 'NSW', description: 'Riverina agriculture, Central West drought resilience and regional water security across New South Wales.' },
  { slug: 'vic', name: 'Victoria', shortName: 'VIC', description: 'Goldfields water security, cool-climate design and industrial port water infrastructure across Victoria.' },
  { slug: 'sa', name: 'South Australia', shortName: 'SA', description: 'Rainwater harvesting and reservoir-dependent supply in Australia’s driest capital and its regions.' },
  { slug: 'wa', name: 'Western Australia', shortName: 'WA', description: 'Remote goldfields water security and mining-scale storage across Western Australia.' },
  { slug: 'nt', name: 'Northern Territory', shortName: 'NT', description: 'Monsoon-cyclone climate, remote logistics and defence-sector water storage across the Top End.' },
  { slug: 'tas', name: 'Tasmania', shortName: 'TAS', description: 'Flood history, cool-climate considerations and agricultural water storage across Tasmania.' },
]

export const REGION_BY_SLUG: Record<string, ArticleRegion> = Object.fromEntries(
  REGIONS.map((r) => [r.slug, r]),
)

// ─────────────────────────────────────────────────────────────────────────
// Facet: FORMAT (what kind of read)
// ─────────────────────────────────────────────────────────────────────────

export type FormatSlug = 'explainer' | 'guide' | 'comparison' | 'standards' | 'regional'

export interface ArticleFormat {
  slug: FormatSlug
  name: string
  label: string
}

export const FORMATS: ArticleFormat[] = [
  { slug: 'explainer', name: 'Explainer', label: 'Explainer' },
  { slug: 'guide', name: 'Practical Guide', label: 'Guide' },
  { slug: 'comparison', name: 'Comparison', label: 'Comparison' },
  { slug: 'standards', name: 'Standards & Compliance', label: 'Standards' },
  { slug: 'regional', name: 'Regional Guide', label: 'Regional' },
]

export const FORMAT_BY_SLUG: Record<string, ArticleFormat> = Object.fromEntries(
  FORMATS.map((f) => [f.slug, f]),
)

// ─────────────────────────────────────────────────────────────────────────
// Classification — hand-curated, keyed by article slug
// ─────────────────────────────────────────────────────────────────────────

export interface Classification {
  category: CategorySlug
  format: FormatSlug
  topics: TopicSlug[]
  region?: RegionSlug
  /** Present = editorially featured. Lower number = more prominent. */
  feature?: number
}

export const ARTICLE_CLASSIFICATION: Record<string, Classification> = {
  // ── Corrosion & Coatings ──
  'corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it': {
    category: 'corrosion-coatings', format: 'explainer', topics: ['cost-lifecycle'], feature: 5,
  },
  'how-to-read-a-tank-coating-failure': {
    category: 'corrosion-coatings', format: 'guide', topics: ['structural-engineering'], feature: 3,
  },
  'cathodic-protection-for-steel-water-tanks-does-your-tank-need-it': {
    category: 'corrosion-coatings', format: 'explainer', topics: ['structural-engineering', 'cost-lifecycle'],
  },
  'concrete-reservoir-spalling-vs-steel-tank-corrosion-whats-different': {
    category: 'corrosion-coatings', format: 'comparison', topics: ['structural-engineering'],
  },
  'water-tank-coating-systems-compared-epoxy-polyurethane-and-zinc-rich-primers': {
    category: 'corrosion-coatings', format: 'comparison', topics: ['standards-compliance', 'cost-lifecycle'],
  },
  'vapour-corrosion-inhibitors-and-internal-atmosphere-control-in-partially-full-tanks': {
    category: 'corrosion-coatings', format: 'explainer', topics: ['structural-engineering'],
  },

  // ── Inspection & Testing ──
  'is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing': {
    category: 'inspection-testing', format: 'explainer', topics: ['cost-lifecycle'],
  },
  'what-a-professional-tank-inspection-actually-covers': {
    category: 'inspection-testing', format: 'guide', topics: ['standards-compliance', 'monitoring-technology'], feature: 1,
  },
  'rov-inspection-vs-manned-entry-choosing-the-right-method': {
    category: 'inspection-testing', format: 'comparison', topics: ['monitoring-technology', 'safety-whs'], feature: 4,
  },
  'reading-a-tank-inspection-report-what-the-findings-actually-mean': {
    category: 'inspection-testing', format: 'guide', topics: ['cost-lifecycle'],
  },
  'confined-space-entry-requirements-for-water-tank-work-a-safety-primer': {
    category: 'inspection-testing', format: 'standards', topics: ['safety-whs', 'standards-compliance'],
  },
  'weld-inspection-and-ndt-for-steel-water-tanks-what-gets-checked-and-why': {
    category: 'inspection-testing', format: 'explainer', topics: ['structural-engineering', 'standards-compliance'],
  },
  'water-tank-access-ladders-platforms-and-fall-protection-whs-requirements-explained': {
    category: 'inspection-testing', format: 'standards', topics: ['safety-whs', 'standards-compliance'],
  },

  // ── Cleaning & Sediment ──
  'how-we-clean-a-water-tank-diver-vacuuming-method': {
    category: 'cleaning-sediment', format: 'explainer', topics: ['potable-water'],
  },
  'sediment-in-your-tank-what-it-is-where-it-comes-from-why-it-matters': {
    category: 'cleaning-sediment', format: 'explainer', topics: ['potable-water'],
  },
  'how-often-should-a-water-tank-be-cleaned': {
    category: 'cleaning-sediment', format: 'guide', topics: ['standards-compliance', 'potable-water'], feature: 6,
  },
  'what-5-15mm-of-sediment-actually-looks-like': {
    category: 'cleaning-sediment', format: 'explainer', topics: ['potable-water'],
  },
  'sediment-disposal-what-happens-to-everything-that-comes-out-of-your-tank': {
    category: 'cleaning-sediment', format: 'guide', topics: ['standards-compliance'],
  },
  'when-cleaning-is-not-just-cleaning': {
    category: 'cleaning-sediment', format: 'explainer', topics: ['monitoring-technology'],
  },
  'turbidity-spikes-after-tank-cleaning-whats-normal-and-whats-a-red-flag': {
    category: 'cleaning-sediment', format: 'explainer', topics: ['potable-water', 'standards-compliance'],
  },

  // ── Water Quality & Contamination ──
  'water-is-food-your-tank-is-the-crockery': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  '5-contamination-risks-not-source-water': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  'evidence-water-quality-issues-warning-signs': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  'the-open-overflow-wildlife-drain-point': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  'birds-are-the-most-common-body-found-inside-australian-tanks': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  'vandalism-and-your-water-tank-the-damage-that-goes-unreported': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water', 'cost-lifecycle'],
  },
  'when-iron-and-manganese-come-from-inside-the-tank-not-the-source': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  'tank-roof-and-hatch-overlooked-contamination-entry-point': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  'water-chemistry-and-disinfection-residual-why-it-matters-in-storage': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'], feature: 7,
  },
  'iron-bacteria-in-water-tanks-the-slime-thats-quietly-corroding-your-asset': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },
  'as4020-certification-what-it-actually-certifies-on-a-potable-water-tank': {
    category: 'water-quality', format: 'standards', topics: ['standards-compliance', 'potable-water'],
  },
  'backflow-prevention-and-cross-connection-control-for-water-storage-tanks': {
    category: 'water-quality', format: 'explainer', topics: ['standards-compliance', 'potable-water'],
  },
  'legionella-risk-in-water-storage-tanks-what-actually-drives-it-and-how-its-controlled': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water', 'standards-compliance'], feature: 2,
  },
  'does-tank-colour-affect-water-temperature-and-algae-growth': {
    category: 'water-quality', format: 'explainer', topics: ['potable-water'],
  },

  // ── Fire Water Systems ──
  'why-your-fire-tank-might-fail-compliance-and-how-to-fix-it-fast': {
    category: 'fire-water', format: 'guide', topics: ['fire-protection', 'standards-compliance'],
  },
  'fire-water-tank-as1851-service-levels-explained': {
    category: 'fire-water', format: 'standards', topics: ['fire-protection', 'standards-compliance'], feature: 8,
  },
  'fire-tank-volume-and-draw-down-getting-the-numbers-right': {
    category: 'fire-water', format: 'standards', topics: ['fire-protection', 'standards-compliance'],
  },
  'water-storage-for-bushfire-prone-properties-static-water-supply-explained': {
    category: 'fire-water', format: 'standards', topics: ['fire-protection', 'remote-regional'],
  },

  // ── Tank Design & Installation ──
  'water-storage-in-harsh-environments-what-you-need-to-know': {
    category: 'tank-design', format: 'guide', topics: ['remote-regional', 'structural-engineering'],
  },
  'foundation-and-civil-works-why-tank-failures-start-below-ground': {
    category: 'tank-design', format: 'explainer', topics: ['structural-engineering'],
  },
  'custom-tank-design-when-a-standard-size-doesnt-fit-your-site': {
    category: 'tank-design', format: 'guide', topics: ['structural-engineering', 'commercial-buildings'],
  },
  'rainwater-harvesting-vs-reticulated-backup-storage-choosing-the-right-system': {
    category: 'tank-design', format: 'comparison', topics: ['potable-water', 'remote-regional'],
  },
  'seismic-and-wind-loading-on-water-tanks-why-structural-design-doesnt-stop-at-the-walls': {
    category: 'tank-design', format: 'explainer', topics: ['structural-engineering', 'standards-compliance'],
  },
  'industrial-process-water-storage-when-potable-grade-isnt-the-right-specification': {
    category: 'tank-design', format: 'explainer', topics: ['industrial', 'standards-compliance'],
  },
  'water-tank-freeboard-and-overflow-sizing-getting-the-numbers-right-for-storm-events': {
    category: 'tank-design', format: 'guide', topics: ['structural-engineering'],
  },
  'potable-water-tank-commissioning-disinfection-and-testing-before-handover': {
    category: 'tank-design', format: 'guide', topics: ['potable-water', 'standards-compliance'],
  },
  'water-tank-roof-types-compared-fixed-floating-and-geodesic-domes': {
    category: 'tank-design', format: 'comparison', topics: ['structural-engineering'],
  },
  'elevated-tank-vs-ground-level-tank-vs-reservoir-choosing-the-right-configuration': {
    category: 'tank-design', format: 'comparison', topics: ['structural-engineering'],
  },
  'tank-diameter-vs-height-the-structural-and-cost-trade-offs-behind-tank-shape': {
    category: 'tank-design', format: 'comparison', topics: ['structural-engineering', 'cost-lifecycle'],
  },
  'wind-uplift-on-empty-water-tanks-why-an-empty-tank-is-more-vulnerable-than-a-full-one': {
    category: 'tank-design', format: 'explainer', topics: ['structural-engineering'],
  },
  'water-tank-insulation-and-temperature-control-when-its-actually-needed': {
    category: 'tank-design', format: 'guide', topics: ['remote-regional'],
  },

  // ── Repair, Relining & Lifecycle ──
  'how-rpvc-liners-extend-the-life-of-aging-water-tanks': {
    category: 'repair-lifecycle', format: 'explainer', topics: ['cost-lifecycle'],
  },
  'reline-or-replace-ageing-steel-tank-lifecycle-cost': {
    category: 'repair-lifecycle', format: 'comparison', topics: ['cost-lifecycle'], feature: 9,
  },
  'water-tank-decommissioning-what-proper-removal-and-site-remediation-involves': {
    category: 'repair-lifecycle', format: 'guide', topics: ['standards-compliance', 'cost-lifecycle'],
  },
  'emergency-water-tank-repair-what-temporary-fixes-are-safe-and-what-should-wait': {
    category: 'repair-lifecycle', format: 'guide', topics: ['safety-whs', 'cost-lifecycle'],
  },
  'planning-a-water-tank-shutdown-for-relining-refurbishment-and-return-to-service': {
    category: 'repair-lifecycle', format: 'guide', topics: ['cost-lifecycle', 'safety-whs'],
  },

  // ── Project Delivery & Procurement ──
  'modular-tanks-in-remote-australia-transport-access-and-assembly': {
    category: 'project-delivery', format: 'guide', topics: ['remote-regional'],
  },
  'tender-and-procurement-for-water-infrastructure-what-councils-get-wrong': {
    category: 'project-delivery', format: 'guide', topics: ['government-council', 'cost-lifecycle'], feature: 10,
  },
  'builder-contractor-partnerships-getting-water-storage-right-on-a-new-build': {
    category: 'project-delivery', format: 'guide', topics: ['commercial-buildings'],
  },
  'project-managed-water-infrastructure-why-one-point-of-accountability-matters': {
    category: 'project-delivery', format: 'explainer', topics: ['government-council', 'cost-lifecycle'],
  },

  // ── Asset Management & Risk ──
  'from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance': {
    category: 'asset-management', format: 'explainer', topics: ['industrial', 'government-council'],
  },
  'water-tank-warranty-claims-what-voids-cover-and-what-doesnt': {
    category: 'asset-management', format: 'guide', topics: ['cost-lifecycle'],
  },
  'mining-and-resources-water-storage-compliance-beyond-standard-as-requirements': {
    category: 'asset-management', format: 'standards', topics: ['mining-resources', 'standards-compliance'],
  },
  'water-tank-level-monitoring-and-scada-integration-what-to-specify': {
    category: 'asset-management', format: 'guide', topics: ['monitoring-technology', 'industrial'],
  },
  'water-tank-insurance-and-risk-what-insurers-actually-look-for-after-a-claim': {
    category: 'asset-management', format: 'guide', topics: ['cost-lifecycle'],
  },
  'data-centre-and-critical-facility-water-storage-redundancy-requirements-explained': {
    category: 'asset-management', format: 'explainer', topics: ['industrial', 'fire-protection'],
  },
  'government-and-council-water-asset-management-reporting-under-budget-pressure': {
    category: 'asset-management', format: 'guide', topics: ['government-council', 'cost-lifecycle'],
  },
  'remote-community-water-security-redundancy-planning-beyond-a-single-tank': {
    category: 'asset-management', format: 'guide', topics: ['remote-regional', 'government-council'],
  },
  'building-a-water-asset-register-what-councils-and-facility-managers-should-track': {
    category: 'asset-management', format: 'guide', topics: ['government-council', 'monitoring-technology'],
  },
  'pre-purchase-water-tank-due-diligence-what-to-check-before-buying-a-property': {
    category: 'asset-management', format: 'guide', topics: ['commercial-buildings', 'cost-lifecycle'],
  },

  // ── Regional Insights ──
  'water-storage-and-tank-services-in-toowoomba-darling-downs-water-security': {
    category: 'regional', format: 'regional', topics: ['remote-regional'], region: 'qld',
  },
  'water-storage-and-tank-services-in-townsville-cyclone-and-monsoon-resilience': {
    category: 'regional', format: 'regional', topics: ['structural-engineering', 'remote-regional'], region: 'qld',
  },
  'water-storage-and-tank-services-in-rockhampton-flood-prone-site-considerations': {
    category: 'regional', format: 'regional', topics: ['structural-engineering'], region: 'qld',
  },
  'water-storage-and-tank-services-in-mackay-cyclone-region-and-sugar-industry-process-water': {
    category: 'regional', format: 'regional', topics: ['industrial'], region: 'qld',
  },
  'water-storage-and-tank-services-in-cairns-tropical-climate-and-reef-sensitive-compliance': {
    category: 'regional', format: 'regional', topics: ['standards-compliance'], region: 'qld',
  },
  'water-storage-and-tank-services-in-gladstone-industrial-process-water-for-a-heavy-industry-port': {
    category: 'regional', format: 'regional', topics: ['industrial'], region: 'qld',
  },
  'water-storage-and-tank-services-in-adelaide-rainwater-and-mains-security-in-a-dry-capital': {
    category: 'regional', format: 'regional', topics: ['potable-water'], region: 'sa',
  },
  'water-storage-and-tank-services-in-wagga-wagga-riverina-agricultural-water-security': {
    category: 'regional', format: 'regional', topics: ['remote-regional'], region: 'nsw',
  },
  'water-storage-and-tank-services-in-dubbo-central-west-nsw-drought-resilient-storage': {
    category: 'regional', format: 'regional', topics: ['government-council', 'remote-regional'], region: 'nsw',
  },
  'water-storage-and-tank-services-in-bendigo-goldfields-water-security-planning': {
    category: 'regional', format: 'regional', topics: ['remote-regional'], region: 'vic',
  },
  'water-storage-and-tank-services-in-ballarat-cool-climate-tank-design-considerations': {
    category: 'regional', format: 'regional', topics: ['structural-engineering'], region: 'vic',
  },
  'water-storage-and-tank-services-in-geelong-industrial-port-water-infrastructure': {
    category: 'regional', format: 'regional', topics: ['industrial', 'commercial-buildings'], region: 'vic',
  },
  'water-storage-and-tank-services-in-darwin-tropical-remote-and-defence-sector-water-storage': {
    category: 'regional', format: 'regional', topics: ['remote-regional', 'industrial'], region: 'nt',
  },
  'water-storage-and-tank-services-in-kalgoorlie-remote-goldfields-water-security': {
    category: 'regional', format: 'regional', topics: ['mining-resources', 'remote-regional'], region: 'wa',
  },
  'water-storage-and-tank-services-in-launceston-flood-history-and-cool-climate-storage': {
    category: 'regional', format: 'regional', topics: ['structural-engineering'], region: 'tas',
  },
}

// ─────────────────────────────────────────────────────────────────────────
// Fallback classification for posts published ahead of curation
// ─────────────────────────────────────────────────────────────────────────

const FALLBACK_RULES: Array<{ match: RegExp; category: CategorySlug; format?: FormatSlug }> = [
  { match: /corros|coating|cathodic|spalling|rust|galvani/i, category: 'corrosion-coatings' },
  { match: /inspect|ndt|weld|rov|confined space|survey/i, category: 'inspection-testing' },
  { match: /clean|sediment|turbidity|desilt/i, category: 'cleaning-sediment' },
  { match: /water quality|contaminat|legionella|potable|bacteria|algae|disinfect|backflow/i, category: 'water-quality' },
  { match: /fire|as1851|as2304|bushfire|hydrant/i, category: 'fire-water' },
  { match: /reline|relining|rpvc|liner|replace|decommission|repair/i, category: 'repair-lifecycle' },
  { match: /tender|procure|project.manag|builder|contractor|delivery|logistics/i, category: 'project-delivery' },
  { match: /asset regist|warrant|insur|due diligence|monitor|scada|asset manage/i, category: 'asset-management' },
  { match: /design|foundation|structur|roof|freeboard|seismic|wind|installation|commission|insulat/i, category: 'tank-design' },
]

function deriveClassification(post: CmsPost): Classification {
  const haystack = `${post.title} ${post.excerpt} ${post.tags.map((t) => t.name).join(' ')}`

  // Regional posts are strongly signalled by title pattern.
  const regionMatch = /services in ([a-z\s]+)/i.exec(post.title)
  if (regionMatch) {
    return { category: 'regional', format: 'regional', topics: ['remote-regional'] }
  }

  for (const rule of FALLBACK_RULES) {
    if (rule.match.test(haystack)) {
      return { category: rule.category, format: rule.format ?? 'explainer', topics: [] }
    }
  }
  return { category: 'asset-management', format: 'explainer', topics: [] }
}

// ─────────────────────────────────────────────────────────────────────────
// Enriched article model + helpers
// ─────────────────────────────────────────────────────────────────────────

export interface EnrichedArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImageUrl: string | null
  readTime: string | null
  publishedAt: string | null
  category: ArticleCategory
  format: ArticleFormat
  topics: ArticleTopic[]
  region: ArticleRegion | null
  feature: number | null
  /** Lowercased haystack used by client-side search. */
  searchText: string
}

export function enrichArticle(post: CmsPost): EnrichedArticle {
  const raw = ARTICLE_CLASSIFICATION[post.slug] ?? deriveClassification(post)
  const category = CATEGORY_BY_SLUG[raw.category] ?? CATEGORIES[0]
  const format = FORMAT_BY_SLUG[raw.format] ?? FORMATS[0]
  const topics = (raw.topics ?? []).map((t) => TOPIC_BY_SLUG[t]).filter(Boolean)
  const region = raw.region ? REGION_BY_SLUG[raw.region] ?? null : null

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    coverImageUrl: post.coverImageUrl,
    readTime: post.readTime,
    publishedAt: post.publishedAt,
    category,
    format,
    topics,
    region,
    feature: raw.feature ?? null,
    searchText: [
      post.title,
      post.excerpt,
      category.name,
      format.name,
      topics.map((t) => t.name).join(' '),
      region?.name ?? '',
      post.tags.map((t) => t.name).join(' '),
    ]
      .join(' ')
      .toLowerCase(),
  }
}

export function enrichArticles(posts: CmsPost[]): EnrichedArticle[] {
  return posts.map(enrichArticle)
}

/** Newest first. Articles without a date sort last. */
export function sortByNewest(articles: EnrichedArticle[]): EnrichedArticle[] {
  return [...articles].sort((a, b) => {
    const at = a.publishedAt ? Date.parse(a.publishedAt) : 0
    const bt = b.publishedAt ? Date.parse(b.publishedAt) : 0
    return bt - at
  })
}

/** Editorially featured articles, most prominent first. */
export function getFeatured(articles: EnrichedArticle[], limit = 5): EnrichedArticle[] {
  return articles
    .filter((a) => a.feature !== null)
    .sort((a, b) => (a.feature as number) - (b.feature as number))
    .slice(0, limit)
}

export function countByCategory(articles: EnrichedArticle[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const a of articles) counts[a.category.slug] = (counts[a.category.slug] ?? 0) + 1
  return counts
}

export function countByRegion(articles: EnrichedArticle[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const a of articles) if (a.region) counts[a.region.slug] = (counts[a.region.slug] ?? 0) + 1
  return counts
}

export function countByTopic(articles: EnrichedArticle[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const a of articles) for (const t of a.topics) counts[t.slug] = (counts[t.slug] ?? 0) + 1
  return counts
}
