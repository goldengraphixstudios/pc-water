const fs = require('fs');
const path = require('path');

// Service and industry pages that have OG incomplete flags
// They need explicit openGraph blocks with title and url
const pagesToFix = [
  'app/services/builder-contractor-partnerships/page.tsx',
  'app/services/custom-tank-design/page.tsx',
  'app/services/foundation-civil-integration/page.tsx',
  'app/services/project-managed-water-infrastructure/page.tsx',
  'app/services/remote-area-delivery/page.tsx',
  'app/services/rpvc-liner-systems/page.tsx',
  'app/services/tank-installation/page.tsx',
  'app/services/tank-maintenance-upgrades/page.tsx',
  'app/services/tender-procurement-support/page.tsx',
  'app/services/water-treatment-solutions/page.tsx',
  'app/services/fire-water-tanks/page.tsx',
  'app/industries/commercial-fire-compliance/page.tsx',
  'app/industries/government-councils/page.tsx',
  'app/industries/industrial-facilities/page.tsx',
  'app/industries/mining-resources/page.tsx',
  'app/industries/remote-regional-communities/page.tsx',
];

// Map of file to { pageTitle, pageUrl } for constructing og blocks
const pageData = {
  'app/services/builder-contractor-partnerships/page.tsx': {
    title: 'Builder & Contractor Water Infrastructure Partnerships',
    url: '/services/builder-contractor-partnerships',
  },
  'app/services/custom-tank-design/page.tsx': {
    title: 'Custom Tank Design & Engineering',
    url: '/services/custom-tank-design',
  },
  'app/services/foundation-civil-integration/page.tsx': {
    title: 'Tank Foundation & Civil Integration',
    url: '/services/foundation-civil-integration',
  },
  'app/services/project-managed-water-infrastructure/page.tsx': {
    title: 'Project Managed Water Infrastructure',
    url: '/services/project-managed-water-infrastructure',
  },
  'app/services/remote-area-delivery/page.tsx': {
    title: 'Remote Area Water Infrastructure Delivery',
    url: '/services/remote-area-delivery',
  },
  'app/services/rpvc-liner-systems/page.tsx': {
    title: 'RPVC Liner Systems Australia',
    url: '/services/rpvc-liner-systems',
  },
  'app/services/tank-installation/page.tsx': {
    title: 'Water Tank Installation Australia',
    url: '/services/tank-installation',
  },
  'app/services/tank-maintenance-upgrades/page.tsx': {
    title: 'Water Tank Maintenance & Upgrades Australia',
    url: '/services/tank-maintenance-upgrades',
  },
  'app/services/tender-procurement-support/page.tsx': {
    title: 'Water Infrastructure Tender & Procurement Support',
    url: '/services/tender-procurement-support',
  },
  'app/services/water-treatment-solutions/page.tsx': {
    title: 'Water Treatment Solutions Australia',
    url: '/services/water-treatment-solutions',
  },
  'app/services/fire-water-tanks/page.tsx': {
    title: 'Fire Water Tank Solutions Australia',
    url: '/services/fire-water-tanks',
  },
  'app/industries/commercial-fire-compliance/page.tsx': {
    title: 'Fire Water Tank Solutions for Commercial Properties',
    url: '/industries/commercial-fire-compliance',
  },
  'app/industries/government-councils/page.tsx': {
    title: 'Water Storage Solutions for Government & Councils',
    url: '/industries/government-councils',
  },
  'app/industries/industrial-facilities/page.tsx': {
    title: 'Industrial Water Storage Solutions',
    url: '/industries/industrial-facilities',
  },
  'app/industries/mining-resources/page.tsx': {
    title: 'Water Storage for Mining & Resources',
    url: '/industries/mining-resources',
  },
  'app/industries/remote-regional-communities/page.tsx': {
    title: 'Water Storage for Remote & Regional Communities',
    url: '/industries/remote-regional-communities',
  },
};

let fixed = 0;

for (const file of pagesToFix) {
  if (!pageData[file]) continue;

  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');

  const { title, url } = pageData[file];

  // Extract the description from the metadata
  const descriptionMatch = content.match(/description:\s*[\'\`]((?:[^\'`]|\\')*?)[\'\`]/s);
  let description = 'Engineered water storage solutions for Australia';
  if (descriptionMatch) {
    description = descriptionMatch[1]
      .replace(/'/g, "\\'")
      .replace(/\n\s*/g, ' ')
      .trim();
  }

  // Pattern to find where to insert: before the closing } of metadata block
  // Match multiline: alternates block ending with }, followed by closing }
  // Account for both Unix (\n) and Windows (\r\n) line endings
  const pattern = /(  alternates: \{[\r\n]+    canonical: '[^']+',[\r\n]+  \},[\r\n]+)(})/;

  if (!pattern.test(content)) {
    console.log(`SKIP (no pattern): ${file}`);
    continue;
  }

  const ogBlock = `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: '${title}',
    description: '${description}',
    url: 'https://pcwater.com.au${url}',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'PC Water Infrastructure — Engineered Water Asset Solutions',
      },
    ],
  },`;

  const replacement = (match, alternates, closeBrace) => alternates + '\n' + ogBlock + '\n' + closeBrace;
  const newContent = content.replace(pattern, replacement);

  if (newContent === content) {
    console.log(`SKIP (no replace): ${file}`);
    continue;
  }

  fs.writeFileSync(fullPath, newContent, 'utf8');
  console.log(`FIXED OG block: ${file}`);
  fixed++;
}

console.log(`\nTotal OG blocks fixed: ${fixed}`);
