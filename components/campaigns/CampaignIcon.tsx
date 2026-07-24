// Line icons for the campaign funnels. Every glyph is drawn centred in the
// 24×24 grid with a consistent ~14px optical bounding box and a single 1.5
// stroke weight, so they render evenly inside the icon tiles. Server component.

const G = {
  droplet: 'M12 4c3 3.6 5 6.3 5 8.6a5 5 0 1 1-10 0C7 10.3 9 7.6 12 4Z',
  beaker: 'M9 4h6M10 4v4.8L5.8 16.5A1.6 1.6 0 0 0 7.2 19h9.6a1.6 1.6 0 0 0 1.4-2.5L14 8.8V4M8 14.5h8',
  warning: 'M12 4.5 3 19.5h18L12 4.5ZM12 10.5v4M12 17.4h.01',
  shield: 'M12 3.5 18 6v5.2c0 3.6-2.5 6.9-6 8-3.5-1.1-6-4.4-6-8V6l6-2.5Z',
  shieldCheck: 'M12 3.5 18 6v5.2c0 3.6-2.5 6.9-6 8-3.5-1.1-6-4.4-6-8V6l6-2.5ZM9.5 11.8 11.3 13.5 14.5 10',
  building: 'M5 20V8.5L12 4l7 4.5V20M4 20h16M9.5 20v-4h5v4M9 11h.01M15 11h.01M9 14h.01M15 14h.01',
  storefront: 'M5 9 6.5 4.5h11L19 9M5 9v10h14V9M5 9h14M9.5 19v-5h5v5',
  factory: 'M4 20V10.5l5 3v-3l5 3V6h6v14H4ZM8 16h.01M12 16h.01M16 16h.01',
  hardhat: 'M5 15a7 7 0 0 1 14 0M4 18h16M10 8.5V6.8A1.8 1.8 0 0 1 11.8 5h.4A1.8 1.8 0 0 1 14 6.8v1.7',
  truck: 'M3 7.5h10.5v8H3zM13.5 10.5H17l3 3v2h-6.5M6.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  mapRoute: 'M9 5 4 7v12l5-2 6 2 5-2V5l-5 2-6-2Zm0 0v12m6-10v12',
  calendar: 'M5 6.5h14v13H5zM5 10.5h14M9 4.5v3M15 4.5v3M8.5 14h.01M12 14h.01M15.5 14h.01',
  users: 'M9.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 19a5.5 5.5 0 0 1 11 0M16 5.4a3 3 0 0 1 0 5.9M17 19a5.5 5.5 0 0 0-1-3.2',
  clipboard:
    'M9 5H7.5A1.5 1.5 0 0 0 6 6.5v12A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 16.5 5H15M9 5a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 15 5M9 5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5M9.5 12l1.5 1.5 3.5-3.5',
  gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4',
  cube: 'M12 3.5 4.5 7.5v9L12 20.5l7.5-4v-9L12 3.5Zm0 0v17M4.5 7.5 12 11.5l7.5-4',
  refresh: 'M4 5.5v4.5h4.5M20 18.5V14h-4.5M19.5 9.5A8 8 0 0 0 6 6M4.5 14.5A8 8 0 0 0 18 18',
  arrowUp: 'M12 20V6M6.5 11.5 12 6l5.5 5.5M6 4h12',
  link: 'M9 15l6-6M10.8 7.2 12 6a3 3 0 1 1 4.2 4.2L15 11.4M13.2 16.8 12 18a3 3 0 1 1-4.2-4.2L9 12.6',
  globe: 'M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM3.5 12h17M12 3.5c2.3 2.4 3.4 5.6 3.4 8.5S14.3 18.1 12 20.5C9.7 18.1 8.6 14.9 8.6 12 8.6 9.1 9.7 5.9 12 3.5Z',
  pin: 'M12 20.5c-3.7-4.2-6.5-7.1-6.5-10.3a6.5 6.5 0 0 1 13 0c0 3.2-2.8 6.1-6.5 10.3ZM12 12.7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  grid: 'M5 5h5.5v5.5H5zM13.5 5H19v5.5h-5.5zM5 13.5h5.5V19H5zM13.5 13.5H19V19h-5.5z',
  panels: 'M4.5 6.5h15v11h-15zM4.5 11h15M11 6.5v11',
  layers: 'M12 4 4 8l8 4 8-4-8-4ZM4 12l8 4 8-4M4 16l8 4 8-4',
  crane: 'M6 20.5V5.5A1 1 0 0 1 7 4.5h8.5L13.5 8H16v12.5M6 20.5h11M9 20.5v-7h4v7',
  branch: 'M6 4.5v5A2.5 2.5 0 0 0 8.5 12h6a2.5 2.5 0 0 1 2.5 2.5v5M6 4.5H4.5m1.5 0h1.5M17 19.5h-1.5m1.5 0H19',
  clock: 'M12 7.5v4.5l3 1.8M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z',
  wrench: 'M14.8 6.4a3.6 3.6 0 0 0-4.9 4.4l-5.3 5.3a1.6 1.6 0 0 0 2.3 2.3l5.3-5.3a3.6 3.6 0 0 0 4.4-4.9l-2.2 2.2-1.7-.3-.3-1.7 2.4-2Z',
  bolt: 'M13 3.5 6 13h4.5l-1 7.5L17 11h-4.5l1-7.5Z',
  chat: 'M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.4A8 8 0 1 1 20 12Z',
  check: 'M8.5 12.5 11 15l4.5-5M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z',
} as const

// Map every content key used across both campaigns to a balanced glyph.
const ICONS: Record<string, keyof typeof G> = {
  // trust strips
  engineering: 'gear',
  pathways: 'branch',
  sectors: 'grid',
  australia: 'globe',
  remote: 'pin',
  coordinated: 'link',
  reservoir: 'panels',
  // tank — warning signs
  leak: 'droplet',
  corrosion: 'warning',
  liner: 'panels',
  structure: 'shield',
  water: 'beaker',
  maintenance: 'wrench',
  clock: 'clock',
  // tank — pathways
  repair: 'wrench',
  reline: 'panels',
  replace: 'refresh',
  // tank — buyers
  council: 'building',
  mining: 'hardhat',
  industrial: 'factory',
  commercial: 'storefront',
  utility: 'bolt',
  owner: 'users',
  // remote — risks
  freight: 'truck',
  access: 'mapRoute',
  season: 'calendar',
  workforce: 'users',
  civil: 'layers',
  materials: 'cube',
  stakeholder: 'chat',
  // remote — delivery scope
  planning: 'clipboard',
  design: 'gear',
  supply: 'truck',
  install: 'crane',
  treatment: 'beaker',
  upgrade: 'arrowUp',
  commission: 'check',
  // remote — sectors
  remoteCommunity: 'pin',
  government: 'building',
  contractor: 'hardhat',
  // remote — accountability
  single: 'shieldCheck',
  sequence: 'link',
  logistics: 'truck',
}

export default function CampaignIcon({
  name,
  className = 'h-5 w-5',
}: {
  name?: string
  className?: string
}) {
  const glyph = name ? ICONS[name] : undefined
  const d = glyph ? G[glyph] : G.check
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
