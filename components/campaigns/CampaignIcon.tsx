// Restrained monochrome line icons used as small accents beside real content.
// Server component — no client JS. Unknown keys fall back to a neutral dot.

const P = {
  // pathway / action
  repair:
    'M10.3 4.3c.4-1.8 2.9-1.8 3.3 0a1.7 1.7 0 002.6 1.1c1.5-1 3.3.8 2.4 2.4a1.7 1.7 0 001 2.5c1.8.5 1.8 3 0 3.4a1.7 1.7 0 00-1 2.6c.9 1.5-.9 3.3-2.4 2.4a1.7 1.7 0 00-2.6 1c-.4 1.8-2.9 1.8-3.3 0a1.7 1.7 0 00-2.6-1c-1.5.9-3.3-.9-2.4-2.4a1.7 1.7 0 00-1-2.6c-1.8-.4-1.8-2.9 0-3.4a1.7 1.7 0 001-2.5c-.9-1.6.9-3.4 2.4-2.4 1 .6 2.3.1 2.6-1.1zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
  reline: 'M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM7 6v12M17 6v12',
  replace: 'M4 4v6h6M20 20v-6h-6M20 9a8 8 0 00-14-3M4 15a8 8 0 0014 3',
  // condition / warning
  leak: 'M12 3s6 6 6 10a6 6 0 11-12 0c0-4 6-10 6-10z',
  corrosion: 'M4 20h16M6 20l2-5 3 3 3-6 2 4 2-3v7M4 8h4M14 5h4',
  liner: 'M4 6h16v12H4zM4 10h16M9 6v12',
  structure: 'M12 3l8 5v8l-8 5-8-5V8l8-5zM12 3v18M4 8l8 5 8-5',
  water: 'M12 3s6 6 6 10a6 6 0 11-12 0c0-4 6-10 6-10zM9 14a3 3 0 003 3',
  maintenance:
    'M14.7 6.3a4 4 0 00-5.4 5.3L4 17v3h3l5.4-5.3a4 4 0 005.3-5.4l-2.6 2.6-2.3-.4-.4-2.3 2.6-2.6z',
  clock: 'M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  // sectors / buyers
  council: 'M12 3l9 5H3l9-5zM4 8h16v11H4zM8 10v7M12 10v7M16 10v7M3 19h18',
  government: 'M12 3l9 5H3l9-5zM4 8h16v11H4zM8 10v7M12 10v7M16 10v7M3 19h18',
  utility: 'M12 3l9 5H3l9-5zM4 8h16v11H4zM8 10v7M12 10v7M16 10v7M3 19h18',
  commercial: 'M4 21V7l8-4 8 4v14M4 21h16M9 21v-5h6v5M8 11h.01M12 11h.01M16 11h.01',
  mining: 'M4 15a8 8 0 0116 0H4zM2 18h20M6 18v1.5a1 1 0 001 1h10a1 1 0 001-1V18M12 7V4M9 9.5L7.5 8M15 9.5L16.5 8',
  contractor: 'M4 15a8 8 0 0116 0H4zM2 18h20M6 18v1.5a1 1 0 001 1h10a1 1 0 001-1V18M12 7V4M9 9.5L7.5 8M15 9.5L16.5 8',
  industrial: 'M3 21V9l6 4V9l6 4V4h4v17H3zM3 21h18',
  owner: 'M17 20h5v-2a3 3 0 00-5.4-1.9M17 20H7m10 0v-2c0-.7-.1-1.3-.4-1.9M7 20H2v-2a3 3 0 015.4-1.9M7 20v-2c0-.7.1-1.3.4-1.9a5 5 0 019.2 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  remoteCommunity: 'M3 21V11l9-6 9 6v10M9 21v-6h6v6M3 21h18',
  // trust / capability
  engineering:
    'M14.7 6.3a4 4 0 00-5.4 5.3L4 17v3h3l5.4-5.3a4 4 0 005.3-5.4l-2.6 2.6-2.3-.4-.4-2.3 2.6-2.6z',
  pathways: 'M6 3v6a3 3 0 003 3h6a3 3 0 013 3v6M6 3H3m3 0h3M18 21h-3m3 0h3',
  sectors: 'M4 5h7v7H4zM13 5h7v4h-7zM13 12h7v7h-7zM4 15h7v4H4z',
  australia: 'M3 12h2a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2M8 4v1.5A2.5 2.5 0 0010.5 8H11a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1M12 21a9 9 0 100-18 9 9 0 000 18z',
  remote: 'M12 21C7 15.5 4 12.4 4 9a8 8 0 0116 0c0 3.4-3 6.5-8 12zM15 9a3 3 0 11-6 0 3 3 0 016 0z',
  coordinated: 'M12 3a4 4 0 100 8 4 4 0 000-8zM4 21a8 8 0 0116 0M12 11v4M8 15l-2 3M16 15l2 3',
  reservoir: 'M4 6h16v12H4zM4 12c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 4 0',
  // remote risks
  freight: 'M1 7h13v9H1zM14 10h4l3 3v3h-7M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  access: 'M9 20l-5.5-2V5L9 7m0 13l6-2m-6 2V7m6 11l5.5 2V7l-5.5-2m0 13V5m0 0L9 7',
  season: 'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4M12 8a4 4 0 100 8 4 4 0 000-8z',
  workforce:
    'M17 20h5v-2a3 3 0 00-5.4-1.9M17 20H7m10 0v-2c0-.7-.1-1.3-.4-1.9M7 20H2v-2a3 3 0 015.4-1.9M7 20v-2c0-.7.1-1.3.4-1.9a5 5 0 019.2 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  civil: 'M3 20h18M5 20v-6l4-3 4 3M13 20V8l6-4v16M17 8v.01M17 12v.01M17 16v.01',
  materials: 'M4 8l8-4 8 4-8 4-8-4zM4 8v8l8 4 8-4V8M12 12v8',
  stakeholder: 'M8 10a3 3 0 100-6 3 3 0 000 6zM2 20a6 6 0 0112 0M17 11a3 3 0 100-6M16 20a6 6 0 015-9.7',
  // delivery scope
  planning: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l1.5 1.5L13 11m-4 6h5',
  design:
    'M10.3 4.3c.4-1.8 2.9-1.8 3.3 0a1.7 1.7 0 002.6 1.1c1.5-1 3.3.8 2.4 2.4a1.7 1.7 0 001 2.5c1.8.5 1.8 3 0 3.4a1.7 1.7 0 00-1 2.6c.9 1.5-.9 3.3-2.4 2.4a1.7 1.7 0 00-2.6 1c-.4 1.8-2.9 1.8-3.3 0a1.7 1.7 0 00-2.6-1c-1.5.9-3.3-.9-2.4-2.4a1.7 1.7 0 00-1-2.6c-1.8-.4-1.8-2.9 0-3.4a1.7 1.7 0 001-2.5c-.9-1.6.9-3.4 2.4-2.4 1 .6 2.3.1 2.6-1.1zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
  supply: 'M4 8l8-4 8 4-8 4-8-4zM4 8v8l8 4 8-4V8M12 12v8',
  install: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 21V10h6v11M9 14h6',
  treatment: 'M3 21V9l6 4V9l6 4V4h4v17H3zM3 21h18M7 6h.01',
  upgrade: 'M12 20V8M6 14l6-6 6 6M4 4h16',
  commission: 'M9 12l2 2 4-4M12 3a9 9 0 100 18 9 9 0 000-18z',
  // accountability
  single: 'M12 3a9 9 0 100 18 9 9 0 000-18zM9 12l2 2 4-4',
  sequence: 'M6 3v6a3 3 0 003 3h6a3 3 0 013 3v6M6 3H3m3 0h3M18 21h-3m3 0h3',
  logistics: 'M1 7h13v9H1zM14 10h4l3 3v3h-7M5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
} as const

export default function CampaignIcon({
  name,
  className = 'w-5 h-5',
}: {
  name?: string
  className?: string
}) {
  const d = (name && P[name as keyof typeof P]) || 'M12 12h.01'
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
