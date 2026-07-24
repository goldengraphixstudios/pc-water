// Typed configuration for the two direct-response campaign funnels.
// Content only — no JSX — so these objects stay serializable across the
// server/client boundary. Icons are resolved by string key inside components.
//
// Factual guardrails: every project claim below is drawn from the published
// project records in lib/cms/static-content.ts. Do not add testimonials,
// certifications, response times, statistics or outcomes that are not
// supported there. Permitted brand claims: Australia-wide delivery,
// engineering-led delivery, and a one-business-day response.

export type CampaignId = 'tank-remediation' | 'remote-water-infrastructure'

export interface CampaignImage {
  src: string
  alt: string
}

export interface GridItem {
  /** Optional icon key resolved in CampaignIcon. */
  icon?: string
  title: string
  body: string
}

export interface ProcessStep {
  title: string
  body: string
}

export interface ProofProject {
  name: string
  location: string
  scope: string
  body: string
  image: CampaignImage
  /** Factual status label, e.g. "Ongoing project". Omit for completed work. */
  status?: string
}

export interface FaqItem {
  q: string
  a: string
}

export type SectionVariant = 'grid' | 'pathways' | 'sectors'

export interface CampaignSectionBlock {
  id: string
  eyebrow?: string
  heading: string
  intro?: string
  variant: SectionVariant
  items: GridItem[]
  note?: string
}

export type FieldType = 'text' | 'textarea' | 'select' | 'cards' | 'radio'

export interface FieldConfig {
  name: string
  label: string
  type: FieldType
  required?: boolean
  options?: string[]
  placeholder?: string
  helper?: string
  /** Force full-width in the two-column grid. */
  fullWidth?: boolean
}

export interface FormStep {
  heading: string
  intro?: string
  fields: FieldConfig[]
}

export interface FormConfig {
  /**
   * Qualification steps (campaign-specific). Kept short so the form fits inside
   * the hero on desktop and stays fast to complete on mobile.
   */
  steps: FormStep[]
  /** Final contact step — shared shape across both campaigns. */
  contact: FormStep
  submitLabel: string
}

export interface CampaignConfig {
  id: CampaignId
  route: string
  metaTitle: string
  metaDescription: string
  phone: string
  phoneDisplay: string
  /** Short CTA used in the compact header and mobile bar. */
  ctaShort: string
  hero: {
    eyebrow: string
    headline: string
    sub: string
    primaryCta: string
    secondaryCta: string
    image: CampaignImage
    formHeading: string
    formIntro: string
  }
  trust: GridItem[]
  sections: CampaignSectionBlock[]
  proof: {
    eyebrow: string
    heading: string
    intro: string
    projects: ProofProject[]
    note?: string
  }
  process: {
    eyebrow: string
    heading: string
    intro?: string
    steps: ProcessStep[]
  }
  faq: {
    eyebrow: string
    heading: string
    items: FaqItem[]
  }
  finalCta: {
    heading: string
    sub: string
    primaryCta: string
  }
  form: FormConfig
}

// ── Shared step-2 contact fields (identical across both funnels) ──────────────
const contactFields: FieldConfig[] = [
  { name: 'firstName', label: 'First name', type: 'text', required: true },
  { name: 'lastName', label: 'Last name', type: 'text', required: true },
  { name: 'company', label: 'Company / organisation', type: 'text', required: true },
  { name: 'jobRole', label: 'Job role', type: 'text', placeholder: 'e.g. Asset Manager, Council Engineer' },
  { name: 'email', label: 'Work email', type: 'text', required: true, placeholder: 'name@organisation.com.au' },
  { name: 'phone', label: 'Phone', type: 'text', required: true, placeholder: '0400 000 000' },
  {
    name: 'preferredContactMethod',
    label: 'Preferred contact method',
    type: 'select',
    options: ['Email', 'Phone', 'Either'],
  },
]

// ══════════════════════════════════════════════════════════════════════════════
// CAMPAIGN 1 — TANK REMEDIATION
// ══════════════════════════════════════════════════════════════════════════════
export const tankRemediationConfig: CampaignConfig = {
  id: 'tank-remediation',
  route: '/campaigns/tank-remediation',
  metaTitle: 'Water Tank Repair, Relining or Replacement | PC Water',
  metaDescription:
    'Leaking, corroded or deteriorating water tank? Request a project-specific remediation proposal covering repair, RPVC relining, upgrades or replacement.',
  phone: '1300029804',
  phoneDisplay: '1300 029 804',
  ctaShort: 'Request Proposal',
  hero: {
    eyebrow: 'TANK REPAIR, RELINING AND REPLACEMENT',
    headline:
      'Your Water Tank Is Showing Warning Signs. Fix the Asset Before It Becomes an Operational Failure.',
    sub: 'PC Water Infrastructure assesses deteriorating water storage assets and develops a practical repair, relining, upgrade or replacement pathway based on the tank, site and operational requirements.',
    primaryCta: 'Request a Tank Remediation Proposal',
    secondaryCta: 'Call 1300 029 804',
    image: {
      src: '/projects/hobart-01.jpg',
      alt: 'Industrial water storage tanks maintained by PC Water Infrastructure',
    },
    formHeading: 'Request a Tank Remediation Proposal',
    formIntro: 'Tell us about the asset. We reply within one business day.',
  },
  trust: [
    { icon: 'engineering', title: 'Engineering-led delivery', body: 'Assessment-first, not a fixed sales script.' },
    { icon: 'pathways', title: 'Repair, reline or replace', body: 'Three pathways — matched to the asset.' },
    { icon: 'sectors', title: 'Industrial, council & remote', body: 'Experience across demanding sites.' },
    { icon: 'australia', title: 'Australia-wide delivery', body: 'Metro, regional and remote projects.' },
  ],
  sections: [
    {
      id: 'warning-signs',
      eyebrow: 'IS YOUR ASSET AT RISK?',
      heading: 'The Warning Signs That a Tank Needs Intervention',
      intro:
        'Storage assets rarely fail without notice. These are the indicators that a tank should be assessed before deterioration becomes an operational or compliance failure.',
      variant: 'grid',
      items: [
        { icon: 'leak', title: 'Active leaks', body: 'Visible weeping, damp patches or measurable loss of stored volume.' },
        { icon: 'corrosion', title: 'Corrosion', body: 'Rust, pitting or scaling on internal surfaces, fittings or the shell.' },
        { icon: 'liner', title: 'Liner deterioration', body: 'Cracking, blistering, delamination or failed liner seams.' },
        { icon: 'structure', title: 'Structural concerns', body: 'Movement, deformation, failing supports or compromised foundations.' },
        { icon: 'water', title: 'Water-quality concerns', body: 'Discolouration, sediment or contamination affecting stored water.' },
        { icon: 'maintenance', title: 'Recurring maintenance', body: 'Repeated call-outs and patch repairs that keep returning.' },
        { icon: 'clock', title: 'Uncertain service life', body: 'No clear picture of how much usable life the asset has left.' },
      ],
      note: 'If one or more of these apply, an assessment establishes the real condition before any pathway is recommended.',
    },
    {
      id: 'pathways',
      eyebrow: 'THREE POSSIBLE PATHWAYS',
      heading: 'Repair, Reline or Replace — Decided by the Asset, Not Assumed',
      intro:
        'The right pathway depends on the tank, the site and the operational requirements. We assess first, then recommend. No pathway is promised before the assessment is done.',
      variant: 'pathways',
      items: [
        {
          icon: 'repair',
          title: 'Repair',
          body: 'Targeted rectification where the structure is sound and the issue is localised — restoring integrity without full intervention.',
        },
        {
          icon: 'reline',
          title: 'Reline',
          body: 'RPVC liner installation to restore a compliant, watertight internal membrane where the shell remains structurally sound — often a fraction of replacement cost.',
        },
        {
          icon: 'replace',
          title: 'Replace',
          body: 'Where remediation is no longer viable, a designed replacement asset engineered for the site and its service requirements.',
        },
      ],
      note: 'Which pathway suits your asset is confirmed at assessment — not assumed from a photo or a phone call.',
    },
    {
      id: 'buyers',
      eyebrow: 'WHO WE WORK WITH',
      heading: 'Built for the Teams Accountable for the Asset',
      variant: 'sectors',
      items: [
        { icon: 'council', title: 'Councils & local government', body: 'Municipal reservoirs and potable storage.' },
        { icon: 'mining', title: 'Mining & resources', body: 'Process, potable and site water storage.' },
        { icon: 'industrial', title: 'Industrial facilities', body: 'Corrosive and high-demand environments.' },
        { icon: 'commercial', title: 'Commercial sites', body: 'Fire and process water compliance.' },
        { icon: 'utility', title: 'Utilities', body: 'Networked and elevated storage assets.' },
        { icon: 'owner', title: 'Asset owners & managers', body: 'Portfolios needing a defensible plan.' },
      ],
    },
  ],
  proof: {
    eyebrow: 'PROJECT PROOF',
    heading: 'Remediation Delivered on Real Assets',
    intro:
      'A sample of completed remediation and refurbishment projects across municipal, commercial and industrial storage.',
    projects: [
      {
        name: 'Albury Reservoir Reline',
        location: 'Albury, NSW · AlburyCity Council',
        scope: '600kL reservoir RPVC reline and full refurbishment — AS4020 compliance',
        body: 'An aging 600kL municipal reservoir had reached the point where corrosion and liner deterioration created potable-water compliance risk. Assessment confirmed the shell remained sound, so an RPVC reline and refurbishment restored AS4020 compliance — at a fraction of replacement cost.',
        image: { src: '/projects/albury-06.jpg', alt: 'Albury 600kL reservoir RPVC reline and refurbishment' },
      },
      {
        name: 'Clarence Road Liner Replacement',
        location: '107 Clarence Road · Commercial',
        scope: '2 × tank RPVC liner replacement — compliance restoration',
        body: 'Two commercial water storage tanks had reached liner end-of-life, creating compliance risk. Both tanks were inspected, relined by specialist RPVC welders, integrity-tested and returned to service — avoiding the cost of full tank replacement.',
        image: { src: '/projects/clarence-01.jpg', alt: 'Clarence Road commercial tank RPVC liner replacement' },
      },
      {
        name: 'Hobart Nyrstar Industrial',
        location: 'Hobart, TAS · Nyrstar',
        scope: '2 × industrial tanks — specialist coatings for a zinc-processing environment',
        body: 'A zinc-smelter environment demands corrosion-resistant specification. Two industrial tanks were delivered with materials, coatings and fittings selected for the aggressive processing atmosphere — demonstrating capability on demanding industrial sites.',
        image: { src: '/projects/hobart-01.jpg', alt: 'Industrial tanks for the Nyrstar Hobart zinc smelter' },
      },
    ],
  },
  process: {
    eyebrow: 'WHAT HAPPENS NEXT',
    heading: 'A Clear Path From Enquiry to Delivery',
    steps: [
      { title: 'Submit asset details', body: 'Share the condition, application and site through the form.' },
      { title: 'Initial project review', body: 'Our team reviews the information and responds within one business day.' },
      { title: 'Scope clarification', body: 'We confirm the details, constraints and any information still needed.' },
      { title: 'Recommended pathway', body: 'Following assessment, repair, reline or replacement is recommended.' },
      { title: 'Proposal', body: 'A project-specific proposal covering scope, approach and delivery.' },
      { title: 'Delivery planning', body: 'On acceptance, we plan mobilisation and delivery around your operations.' },
    ],
  },
  faq: {
    eyebrow: 'BEFORE YOU ENQUIRE',
    heading: 'Tank Remediation — Common Questions',
    items: [
      {
        q: 'What information do you need to get started?',
        a: 'The tank type and application, an approximate capacity, the location, the condition issues you are seeing, and any urgency. Photos help but are not required to start — the form captures enough for an initial review.',
      },
      {
        q: 'Can you assess a tank that is still in operation?',
        a: 'Yes. Many assessments and remediation approaches are planned around keeping the asset in service or minimising downtime. Where a tank must be taken offline, that is planned around your operations.',
      },
      {
        q: 'Do you deliver in regional and remote areas?',
        a: 'Yes — PC Water Infrastructure delivers Australia-wide, including regional and remote sites, with logistics and access planned into the project.',
      },
      {
        q: 'Should I repair, reline or replace my tank?',
        a: 'That depends on the asset. Repair suits sound structures with localised issues, relining restores a compliant membrane where the shell is sound, and replacement applies where remediation is no longer viable. The pathway is confirmed at assessment, not assumed beforehand.',
      },
      {
        q: 'What happens after I submit the form?',
        a: 'Your details go to our project team for an initial review. We respond within one business day to confirm scope, request anything further, and outline the next step toward a proposal.',
      },
    ],
  },
  finalCta: {
    heading: 'Fix the Asset Before It Becomes an Operational Failure.',
    sub: 'Request a project-specific remediation proposal. We reply within one business day.',
    primaryCta: 'Request a Tank Remediation Proposal',
  },
  form: {
    steps: [
      {
        heading: 'What’s happening with the tank?',
        intro: 'A quick picture of the issue — this shapes the assessment.',
        fields: [
          {
            name: 'conditionIssues',
            label: 'What condition issues are you seeing?',
            type: 'cards',
            required: true,
            helper: 'Select all that apply.',
            options: [
              'Active leak',
              'Corrosion',
              'Liner deterioration',
              'Structural concern',
              'Water-quality concern',
              'Recurring maintenance',
              'Unknown condition',
            ],
            fullWidth: true,
          },
          {
            name: 'suspectedPathway',
            label: 'What pathway do you suspect you need?',
            type: 'radio',
            options: ['Repair', 'Reline', 'Replace', 'Unsure'],
            fullWidth: true,
          },
        ],
      },
      {
        heading: 'About the asset',
        intro: 'The tank, the site and how urgent it is.',
        fields: [
          { name: 'tankApplication', label: 'Tank application', type: 'text', placeholder: 'e.g. Potable, fire, process' },
          { name: 'approximateCapacity', label: 'Approximate capacity', type: 'text', placeholder: 'e.g. 600kL, 2ML' },
          { name: 'projectLocation', label: 'Project location', type: 'text', required: true, placeholder: 'Town / region, state' },
          {
            name: 'urgency',
            label: 'Urgency',
            type: 'select',
            options: ['Active failure — urgent', 'Deteriorating — within 3 months', 'Planning — 3–12 months', 'Assessing options'],
          },
          {
            name: 'projectDetails',
            label: 'Project details',
            type: 'textarea',
            placeholder: 'Describe the tank, the issue, access constraints and anything relevant.',
            fullWidth: true,
          },
        ],
      },
    ],
    contact: {
      heading: 'Where should we send the proposal?',
      intro: 'Your details — we reply within one business day.',
      fields: contactFields,
    },
    submitLabel: 'Request My Remediation Proposal',
  },
}

// ══════════════════════════════════════════════════════════════════════════════
// CAMPAIGN 2 — REMOTE WATER INFRASTRUCTURE
// ══════════════════════════════════════════════════════════════════════════════
export const remoteWaterConfig: CampaignConfig = {
  id: 'remote-water-infrastructure',
  route: '/campaigns/remote-water-infrastructure',
  metaTitle: 'Remote Water Infrastructure Delivery Australia | PC Water',
  metaDescription:
    'Planning water storage or treatment infrastructure in remote Australia? Discuss an end-to-end delivery strategy with PC Water Infrastructure.',
  phone: '1300029804',
  phoneDisplay: '1300 029 804',
  ctaShort: 'Discuss Project',
  hero: {
    eyebrow: 'REMOTE AND REGIONAL PROJECT DELIVERY',
    headline: 'Remote Water Infrastructure, Delivered With One Accountable Team.',
    sub: 'From project planning and civil integration to storage, treatment, installation and commissioning, PC Water Infrastructure coordinates critical water projects in locations where logistics, access and delivery certainty matter.',
    primaryCta: 'Discuss Your Remote Project',
    secondaryCta: 'Call 1300 029 804',
    image: {
      src: '/projects/doomadgee-02.jpg',
      alt: 'PC Water Infrastructure delivering the ongoing Doomadgee 2ML reservoir in remote Queensland',
    },
    formHeading: 'Discuss Your Remote Project',
    formIntro: 'Tell us about the project. We reply within one business day.',
  },
  trust: [
    { icon: 'remote', title: 'Remote project experience', body: 'Delivery where access is the challenge.' },
    { icon: 'coordinated', title: 'Coordinated delivery', body: 'One accountable team, end to end.' },
    { icon: 'reservoir', title: '2ML Doomadgee project', body: 'Ongoing remote reservoir delivery.' },
    { icon: 'australia', title: 'Australia-wide capability', body: 'Regional and remote across the country.' },
  ],
  sections: [
    {
      id: 'risks',
      eyebrow: 'WHY REMOTE IS DIFFERENT',
      heading: 'The Risks That Derail Remote Water Projects',
      intro:
        'In remote and regional delivery, the engineering is rarely the hardest part. These are the factors that determine whether a project lands on time and on budget.',
      variant: 'grid',
      items: [
        { icon: 'freight', title: 'Freight & logistics', body: 'Moving materials and plant across long, unsealed distances.' },
        { icon: 'access', title: 'Site access', body: 'Constrained access, remote sites and limited local support.' },
        { icon: 'season', title: 'Wet-season scheduling', body: 'Delivery windows dictated by seasonal road closures.' },
        { icon: 'workforce', title: 'Workforce mobilisation', body: 'Getting the right crew to site — and keeping them productive.' },
        { icon: 'civil', title: 'Civil conditions', body: 'Earthworks and foundations in challenging local soils.' },
        { icon: 'materials', title: 'Material coordination', body: 'Pre-positioning to avoid gaps that stall a remote program.' },
        { icon: 'stakeholder', title: 'Stakeholder communication', body: 'Aligning community, council and government throughout.' },
      ],
      note: 'A coordinated delivery approach is built to absorb these risks rather than discover them mid-project.',
    },
    {
      id: 'scope',
      eyebrow: 'END-TO-END DELIVERY',
      heading: 'One Team Across the Whole Water Project',
      intro:
        'Coordinating the full scope under one accountable team removes the gaps that appear when remote work is split across disconnected suppliers.',
      variant: 'grid',
      items: [
        { icon: 'planning', title: 'Project planning', body: 'Delivery strategy, sequencing and logistics from the outset.' },
        { icon: 'design', title: 'Tank design', body: 'Storage engineered for the site and its service requirements.' },
        { icon: 'civil', title: 'Civil & foundation integration', body: 'Earthworks and foundations engineered to local conditions.' },
        { icon: 'supply', title: 'Tank supply', body: 'Manufacture and supply coordinated to the delivery window.' },
        { icon: 'install', title: 'Installation', body: 'On-site installation planned around access and crew logistics.' },
        { icon: 'treatment', title: 'Treatment integration', body: 'Water treatment integrated into the storage system.' },
        { icon: 'upgrade', title: 'Upgrades', body: 'Extending or upgrading existing remote assets.' },
        { icon: 'commission', title: 'Commissioning coordination', body: 'Coordinated handover toward reliable operation.' },
      ],
    },
    {
      id: 'sectors',
      eyebrow: 'WHO WE WORK WITH',
      heading: 'Delivering for Remote and Regional Australia',
      variant: 'sectors',
      items: [
        { icon: 'remoteCommunity', title: 'Remote communities', body: 'Safe, reliable community water supply.' },
        { icon: 'government', title: 'Government', body: 'Funded remote infrastructure programs.' },
        { icon: 'council', title: 'Councils', body: 'Regional storage and treatment assets.' },
        { icon: 'mining', title: 'Mining & resources', body: 'Site water storage and delivery.' },
        { icon: 'industrial', title: 'Industrial facilities', body: 'Process and potable water in remote operations.' },
        { icon: 'contractor', title: 'Contractors', body: 'Water scope delivered as a coordinated package.' },
      ],
    },
    {
      id: 'accountability',
      eyebrow: 'WHY ONE TEAM',
      heading: 'One Accountable Team, Not a Chain of Suppliers',
      intro:
        'Remote projects fail in the gaps between suppliers. Coordinating design, civil, supply, installation and commissioning under one team keeps accountability in one place.',
      variant: 'pathways',
      items: [
        { icon: 'single', title: 'Single point of accountability', body: 'One team responsible across the project — not a chain passing responsibility along.' },
        { icon: 'sequence', title: 'Coordinated sequencing', body: 'Design, civil, supply and installation sequenced together around the delivery window.' },
        { icon: 'logistics', title: 'Logistics built in', body: 'Freight, access and workforce planning treated as core delivery, not an afterthought.' },
      ],
      note: 'Coordinated delivery reduces the handover gaps that stall remote projects — it does not remove the realities of remote work, which we plan for openly.',
    },
  ],
  proof: {
    eyebrow: 'PROJECT PROOF',
    heading: 'Doomadgee 2ML Reservoir — Remote Delivery in Progress',
    intro:
      'Doomadgee is a remote community in Queensland’s Gulf Country, roughly 200km south of the Gulf of Carpentaria. PC Water Infrastructure is delivering a 2ML ground-level tank as part of the community’s water treatment plant infrastructure — one of the most logistically complex deliveries in our portfolio.',
    projects: [
      {
        name: 'Doomadgee 2ML Reservoir',
        location: 'Doomadgee, QLD (Remote) · National Water Grid Fund & QLD Government',
        scope: '2ML ground-level tank — water treatment plant storage',
        status: 'Ongoing project',
        body: 'All materials, plant and crew are transported hundreds of kilometres on unsealed roads that close in the wet season. Construction is scheduled within the dry-season window with materials pre-positioned ahead of wet-season risk, and civil earthworks engineered to the site’s soil conditions. Earthworks are complete and steel bar placement is underway; once commissioned, the tank will add the storage capacity the community’s water treatment plant needs.',
        image: { src: '/projects/doomadgee-01.jpg', alt: 'Doomadgee 2ML reservoir site — civil earthworks and construction in progress' },
      },
      {
        name: 'Civil earthworks & foundation',
        location: 'Doomadgee, QLD (Remote)',
        scope: 'Engineered earthworks in challenging soil conditions',
        status: 'Ongoing project',
        body: 'Earthworks for a 2ML ground-level tank were engineered around the local soil conditions — the foundation stage that determines the integrity of the finished asset.',
        image: { src: '/projects/doomadgee-04.jpg', alt: 'Engineered civil earthworks for the Doomadgee 2ML reservoir foundation' },
      },
      {
        name: 'Remote logistics & mobilisation',
        location: 'Doomadgee, QLD (Remote)',
        scope: 'Dry-season delivery window · pre-positioned materials',
        status: 'Ongoing project',
        body: 'Delivery is coordinated around seasonal access — crew, plant and materials mobilised within the dry-season window, with community and government representatives engaged throughout.',
        image: { src: '/projects/doomadgee-07.jpg', alt: 'Remote site mobilisation and materials at the Doomadgee reservoir project' },
      },
    ],
    note: 'The Doomadgee 2ML Reservoir is an ongoing project delivered with the Australian Government (National Water Grid Fund) and the Queensland Government.',
  },
  process: {
    eyebrow: 'WHAT HAPPENS NEXT',
    heading: 'From Project Brief to Mobilisation',
    steps: [
      { title: 'Submit project brief', body: 'Share the project type, sector, location and stage through the form.' },
      { title: 'Scope review', body: 'Our team reviews the brief and responds within one business day.' },
      { title: 'Site & logistics clarification', body: 'We work through access, seasonal windows and site constraints.' },
      { title: 'Delivery strategy', body: 'A coordinated approach across design, civil, supply and installation.' },
      { title: 'Proposal', body: 'A project-specific proposal covering scope, approach and delivery.' },
      { title: 'Mobilisation planning', body: 'On acceptance, we plan mobilisation around the delivery window.' },
    ],
  },
  faq: {
    eyebrow: 'BEFORE YOU ENQUIRE',
    heading: 'Remote Water Infrastructure — Common Questions',
    items: [
      {
        q: 'We’re at an early planning stage — is it too soon to talk?',
        a: 'No. Early is the best time for a remote project. Involving delivery thinking during planning is where logistics, access and seasonal windows can still shape the approach and reduce risk.',
      },
      {
        q: 'How do you handle remote access and seasonal constraints?',
        a: 'Access and seasonal windows are planned into the project from the start — scheduling within dry-season windows where relevant, pre-positioning materials, and coordinating crew mobilisation around the constraints of the site.',
      },
      {
        q: 'What project information do you need?',
        a: 'The project type, sector, location, water application, an estimated capacity, the stage you are at, and any access or timeline constraints. The form captures enough for an initial review — detailed documents can follow.',
      },
      {
        q: 'We already have designs or a spec — can you work with those?',
        a: 'Yes. We can work from existing designs and specifications, or provide design as part of a coordinated delivery scope — whichever suits where your project is up to.',
      },
      {
        q: 'Do you partner with head contractors?',
        a: 'Yes. We deliver water scope as a coordinated package within larger programs and partner with contractors where the water infrastructure is one part of a broader project.',
      },
      {
        q: 'What are the next steps after I submit?',
        a: 'Your brief goes to our project team for review. We respond within one business day to clarify scope and logistics and outline the path toward a delivery strategy and proposal.',
      },
    ],
  },
  finalCta: {
    heading: 'Remote Water Infrastructure, Delivered With One Accountable Team.',
    sub: 'Discuss an end-to-end delivery strategy for your remote project. We reply within one business day.',
    primaryCta: 'Discuss Your Remote Project',
  },
  form: {
    steps: [
      {
        heading: 'What are you planning?',
        intro: 'The type of project and who it’s for.',
        fields: [
          {
            name: 'projectType',
            label: 'Project type',
            type: 'cards',
            required: true,
            helper: 'Select the closest match.',
            options: [
              'New water storage',
              'Reservoir replacement',
              'Water-treatment infrastructure',
              'Tank relining or upgrade',
              'Capacity expansion',
              'Civil and foundation works',
              'Tender or contractor support',
              'Unsure / requires scoping',
            ],
            fullWidth: true,
          },
          {
            name: 'sector',
            label: 'Sector',
            type: 'select',
            options: ['Remote community', 'Government', 'Council', 'Mining & resources', 'Industrial', 'Contractor', 'Other'],
          },
        ],
      },
      {
        heading: 'Scope & site',
        intro: 'Where it is and what it needs to do.',
        fields: [
          { name: 'projectLocation', label: 'Project location', type: 'text', required: true, placeholder: 'Town / region, state' },
          { name: 'waterApplication', label: 'Water application', type: 'text', placeholder: 'e.g. Potable, treatment, process' },
          { name: 'estimatedCapacity', label: 'Estimated capacity', type: 'text', placeholder: 'e.g. 500kL, 2ML' },
          {
            name: 'projectStage',
            label: 'Project stage',
            type: 'select',
            options: ['Early planning', 'Feasibility / scoping', 'Design phase', 'Ready to deliver', 'Tender / procurement'],
          },
        ],
      },
      {
        heading: 'Timeline & logistics',
        intro: 'When you’re aiming for, and the access realities.',
        fields: [
          { name: 'targetTimeline', label: 'Target timeline', type: 'text', placeholder: 'e.g. Next dry season, 6–12 months' },
          { name: 'accessConstraints', label: 'Access constraints', type: 'text', placeholder: 'e.g. Unsealed roads, wet-season closure' },
          {
            name: 'projectDetails',
            label: 'Project details',
            type: 'textarea',
            placeholder: 'Describe the project, site, logistics and anything relevant.',
            fullWidth: true,
          },
        ],
      },
    ],
    contact: {
      heading: 'Where should we send the strategy?',
      intro: 'Your details — we reply within one business day.',
      fields: contactFields,
    },
    submitLabel: 'Discuss My Remote Project',
  },
}

export const campaignConfigs: Record<CampaignId, CampaignConfig> = {
  'tank-remediation': tankRemediationConfig,
  'remote-water-infrastructure': remoteWaterConfig,
}
