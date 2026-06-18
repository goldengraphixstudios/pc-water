/**
 * bulletproof-seo.js
 * Comprehensive SEO audit fix for pcwater.com.au
 * Fixes:
 *  1. Meta descriptions > 160 chars (17 pages)
 *  2. Missing OpenGraph blocks (10 pages)
 *  3. Twitter card metadata in layout
 *  4. OG in projects[slug] dynamic metadata
 *  5. BreadcrumbJsonLd missing in custom-tank-design
 *  6. Sitemap lastModified updated to today
 */

const fs = require('fs');
const path = require('path');

let changes = 0;
function fix(file, label, search, replace) {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');
  if (!content.includes(search)) {
    console.log(`  SKIP (not found): ${label} in ${file}`);
    return false;
  }
  const newContent = content.replace(search, replace);
  if (newContent === content) {
    console.log(`  SKIP (no change): ${label} in ${file}`);
    return false;
  }
  fs.writeFileSync(fullPath, newContent, 'utf8');
  console.log(`  ✓ FIXED: ${label} in ${file}`);
  changes++;
  return true;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. META DESCRIPTIONS > 160 CHARS
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[1] Fixing meta descriptions > 160 chars...');

// services/page.tsx (181 chars)
fix('app/services/page.tsx', 'description',
  'PC Water Infrastructure combines PC Tanks (tank design & supply) and PC Water Solutions (project delivery & asset management) for a complete end-to-end water infrastructure service.',
  'End-to-end water infrastructure services across Australia. Tank design, installation, RPVC liners, fire compliance, remote delivery, and asset management.'
);

// services/custom-tank-design/page.tsx (182 chars)
fix('app/services/custom-tank-design/page.tsx', 'description',
  'Purpose-built water storage tanks engineered to AS2304 & AS4020 for any capacity, site, and use case. Structural design, material selection, and custom configuration.',
  'Custom water storage tanks engineered to AS2304 and AS4020. Structural design, material selection, and tailored configuration for any capacity and site.'
);

// services/foundation-civil-integration/page.tsx (173 chars)
fix('app/services/foundation-civil-integration/page.tsx', 'description',
  'Engineered concrete foundations and civil integration for tanks of all sizes. Geotechnical assessment, civil contractor coordination, and structural compliance documentation.',
  'Engineered tank foundations and civil integration across Australia. Geotechnical assessment, civil coordination, and structural compliance documentation.'
);

// services/tank-inspection-technology/page.tsx (189 chars)
fix('app/services/tank-inspection-technology/page.tsx', 'description',
  'ROV and UAV tank inspection technology for water storage assets across Australia. Assess condition without costly dewatering and support compliance, maintenance, and refurbishment planning.',
  'ROV and UAV tank inspection across Australia. Assess condition without dewatering to support AS1851 compliance, maintenance planning, and refurbishment decisions.'
);

// services/tank-installation/page.tsx (172 chars)
fix('app/services/tank-installation/page.tsx', 'description',
  'End-to-end tank installation with certified crews, national reach, and rigorous commissioning protocols. From ground-up builds to drop-in replacements across Australia.',
  'End-to-end water tank installation with certified crews across Australia. Ground-up builds and drop-in replacements with rigorous commissioning protocols.'
);

// services/rpvc-liner-systems/page.tsx (167 chars)
fix('app/services/rpvc-liner-systems/page.tsx', 'description',
  'RPVC liner systems for aging water tanks across Australia. Extend asset life, restore compliance, and eliminate corrosion — without the cost of full replacement.',
  'RPVC liner systems for aging water tanks across Australia. Extend asset life, restore compliance, and eliminate corrosion without full tank replacement.'
);

// services/tender-procurement-support/page.tsx (176 chars)
fix('app/services/tender-procurement-support/page.tsx', 'description',
  'Specialist procurement and tendering support for councils, government agencies, and large-scale industrial clients. Compliant tender documentation and procurement management.',
  'Tender and procurement support for councils, government agencies, and industrial clients. Compliant documentation, specification development, and bid management.'
);

// services/builder-contractor-partnerships/page.tsx (173 chars)
fix('app/services/builder-contractor-partnerships/page.tsx', 'description',
  'Reliable water storage subcontract partnerships for builders, civil contractors, and developers. AS2304-compliant tanks, on-time delivery, and full documentation support.',
  'Water storage subcontract partnerships for builders, contractors, and developers. AS2304-compliant tanks, on-time delivery, and full documentation support.'
);

// services/remote-area-delivery/page.tsx (181 chars)
fix('app/services/remote-area-delivery/page.tsx', 'description',
  'Specialist water infrastructure delivery for remote and regional Australia. FIFO crews, Indigenous community engagement, and remote logistics expertise.',
  'Water infrastructure delivery for remote and regional Australia. FIFO crews, Indigenous community engagement, and specialist remote logistics expertise.'
);

// industries/commercial-fire-compliance/page.tsx (168 chars)
fix('app/industries/commercial-fire-compliance/page.tsx', 'description',
  'AS2304 fire water storage and AS1851 annual inspection compliance for commercial properties. Pump system integration, compliance documentation, and ongoing maintenance.',
  'AS2304 fire water storage and AS1851 annual inspection for commercial properties. Pump integration, compliance documentation, and ongoing maintenance.'
);

// industries/government-councils/page.tsx (167 chars)
fix('app/industries/government-councils/page.tsx', 'description',
  'Compliant, accountable water storage for government and council assets. Tender-ready documentation, budget-conscious delivery, and community-focused outcomes.',
  'Compliant water storage for government and council assets. Tender-ready documentation, budget-conscious delivery, and community-focused outcomes.'
);

// industries/industrial-facilities/page.tsx (175 chars)
fix('app/industries/industrial-facilities/page.tsx', 'description',
  'Process water reliability and fire suppression compliance for industrial facilities across Australia. Engineered water storage built to handle industrial demands.',
  'Process water reliability and fire suppression compliance for industrial facilities across Australia. Water storage engineered for industrial demands.'
);

// industries/mining-resources/page.tsx (166 chars)
fix('app/industries/mining-resources/page.tsx', 'description',
  'Robust water storage for remote mining operations. Harsh environment engineering, FIFO crew capability, and full AS2304 and AS1851 compliance across Australia.',
  'Robust water storage for remote mining operations. Harsh environment engineering, FIFO capability, and full AS2304 and AS1851 compliance across Australia.'
);

// industries/remote-regional-communities/page.tsx (173 chars)
fix('app/industries/remote-regional-communities/page.tsx', 'description',
  'Safe water access for remote and Indigenous communities. Specialist logistics, FIFO crews, cultural sensitivity, and community-led project delivery across Australia.',
  'Safe water access for remote and Indigenous communities. Specialist logistics, FIFO crews, cultural engagement, and community-led project delivery.'
);

// services/water-treatment-solutions/page.tsx (164 chars)
fix('app/services/water-treatment-solutions/page.tsx', 'description',
  'Water treatment solutions across Australia covering potable water infrastructure from raw water intake through to ADWG-compliant, SCADA-controlled distribution.',
  'Water treatment solutions across Australia. Potable water infrastructure from raw water intake to ADWG-compliant, SCADA-controlled distribution.'
);

// services/fire-water-tanks/page.tsx (161)
fix('app/services/fire-water-tanks/page.tsx', 'description',
  'AS2304-compliant fire water tank solutions across Australia including design, installation, relining and AS1851 annual inspection. BCA and NCC-compliant.',
  'AS2304-compliant fire water tank solutions across Australia. Design, installation, relining, and AS1851 annual inspection to BCA and NCC requirements.'
);

// services/tank-maintenance-upgrades/page.tsx (161)
fix('app/services/tank-maintenance-upgrades/page.tsx', 'description',
  'Planned and reactive maintenance, structural upgrades, corrosion treatment, and RPVC relining for water storage assets across Australia. Keep your tanks compliant.',
  'Planned and reactive maintenance, structural upgrades, corrosion treatment, and RPVC relining for water storage assets across Australia. Stay compliant.'
);

// ─────────────────────────────────────────────────────────────────────────────
// 2. ADD TWITTER CARD METADATA TO LAYOUT
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[2] Adding Twitter card metadata to layout...');
fix('app/layout.tsx', 'twitter card',
  `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'PC Water Infrastructure — Engineered Water Asset Solutions',
      },
    ],
  },`,
  `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'PC Water Infrastructure — Engineered Water Asset Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pcwaterinfra',
    creator: '@pcwaterinfra',
    images: ['/hero.png'],
  },`
);

// ─────────────────────────────────────────────────────────────────────────────
// 3. ADD OG BLOCKS TO PAGES MISSING THEM
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[3] Adding OpenGraph blocks to pages missing them...');

const ogPages = [
  {
    file: 'app/about/page.tsx',
    canonical: "canonical: '/about'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'About PC Water Infrastructure',
    description: 'Australian-owned water storage specialists since 2013. 20+ years combined expertise, zero injury record, and nationwide coverage across every sector.',
    url: 'https://pcwater.com.au/about',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/commitment/page.tsx',
    canonical: "canonical: '/commitment'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Safety, Quality & Compliance Commitment',
    description: 'PC Water Infrastructure commitment to safety, quality, sustainability, and community. SQE policies, engineering standards, and Indigenous engagement.',
    url: 'https://pcwater.com.au/commitment',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/contact/page.tsx',
    canonical: "canonical: '/contact'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Contact PC Water Infrastructure',
    description: 'Contact PC Water Infrastructure to discuss your water storage project. Phone: 1300 029 804. Email: contact@pcwater.com.au.',
    url: 'https://pcwater.com.au/contact',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/industries/page.tsx',
    canonical: "canonical: '/industries'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Infrastructure Industries We Serve',
    description: 'PC Water Infrastructure delivers water storage solutions to government, mining, industrial, commercial, and remote community sectors across Australia.',
    url: 'https://pcwater.com.au/industries',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/page.tsx',
    canonical: "canonical: '/'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Engineered Water Infrastructure Solutions Australia | PC Water',
    description: 'Engineered water infrastructure, tank inspection, fire water compliance, RPVC liners, and water treatment solutions across Australia.',
    url: 'https://pcwater.com.au',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/projects/page.tsx',
    canonical: "canonical: '/projects'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Infrastructure Projects',
    description: 'Water storage infrastructure delivered across government, mining, industrial, and remote community sectors across Australia.',
    url: 'https://pcwater.com.au/projects',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/resources/page.tsx',
    canonical: "canonical: '/resources'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Resources & Insights',
    description: 'Insights and guides on water storage engineering, tank maintenance, fire water compliance, RPVC liners, and remote project delivery across Australia.',
    url: 'https://pcwater.com.au/resources',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/services/page.tsx',
    canonical: "canonical: '/services'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Water Infrastructure Services Australia',
    description: 'End-to-end water infrastructure services across Australia. Tank design, installation, RPVC liners, fire compliance, remote delivery, and asset management.',
    url: 'https://pcwater.com.au/services',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/services/tank-inspection-technology/page.tsx',
    canonical: "canonical: '/services/tank-inspection-technology'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Tank Inspection Technology Australia',
    description: 'ROV and UAV tank inspection across Australia. Assess condition without dewatering to support AS1851 compliance, maintenance planning, and refurbishment decisions.',
    url: 'https://pcwater.com.au/services/tank-inspection-technology',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
  {
    file: 'app/tools/page.tsx',
    canonical: "canonical: '/tools'",
    og: `  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
    title: 'Free Water Tank Tools — Compliance & Decision Checkers',
    description: 'Free online tools: check your water tank compliance risk and decide whether to repair, reline, or replace an aging tank. Built for asset owners.',
    url: 'https://pcwater.com.au/tools',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] },`,
  },
];

for (const page of ogPages) {
  const fullPath = path.join(process.cwd(), page.file);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Handle both formats:
  // 1. "canonical: '/path' }," with closing brace on same line (tools page)
  // 2. "canonical: '/path',\n  }," multi-line
  const singleLinePattern = new RegExp(`(alternates: \\{ canonical: '${page.canonical.replace("canonical: '", '').replace("'", '')}' \\},)\\s*(})`);
  const multiLinePattern = new RegExp(`(  alternates: \\{[\\r\\n]+    ${page.canonical.replace('/', '\\/').replace('.', '\\.')},?[\\r\\n]+  \\},?)[\\r\\n]+(})`);

  let matched = false;

  // Try multi-line pattern first
  if (multiLinePattern.test(content)) {
    const newContent = content.replace(multiLinePattern, (m, alts, close) => {
      const altsCleaned = alts.endsWith(',') ? alts : alts + ',';
      return altsCleaned + '\n' + page.og + '\n' + close;
    });
    if (newContent !== content) {
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`  ✓ FIXED OG: ${page.file}`);
      changes++;
      matched = true;
    }
  }

  if (!matched) {
    console.log(`  SKIP (no pattern): ${page.file}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. ADD OG TO PROJECTS[SLUG] DYNAMIC METADATA
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[4] Adding OG + Twitter to projects[slug] generateMetadata...');
fix('app/projects/[slug]/page.tsx', 'OG + Twitter in generateMetadata',
  `  return {
    title: project.seoTitle ? { absolute: project.seoTitle } : project.title,
    description: project.seoDescription || project.summary,
    alternates: {
      canonical: \`/projects/\${slug}\`,
    },
  }`,
  `  const siteUrlBase = process.env.SITE_URL || 'https://pcwater.com.au'
  return {
    title: project.seoTitle ? { absolute: project.seoTitle } : project.title,
    description: project.seoDescription || project.summary,
    alternates: {
      canonical: \`/projects/\${slug}\`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      siteName: 'PC Water Infrastructure',
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.summary || '',
      url: \`\${siteUrlBase}/projects/\${slug}\`,
      images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
    },
    twitter: { card: 'summary_large_image', images: ['/hero.png'] },
  }`
);

// ─────────────────────────────────────────────────────────────────────────────
// 5. ADD BREADCRUMB TO custom-tank-design (imported but not rendered)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[5] Adding BreadcrumbJsonLd render to custom-tank-design...');
fix('app/services/custom-tank-design/page.tsx', 'BreadcrumbJsonLd render',
  `  return (
    <>
      {/* Hero */}`,
  `  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: \`\${siteUrl}/services\` },
          { name: 'Custom Tank Design & Engineering', url: \`\${siteUrl}/services/custom-tank-design\` },
        ]}
      />
      {/* Hero */}`
);

// Check if siteUrl is defined in that file
const customTankFile = path.join(process.cwd(), 'app/services/custom-tank-design/page.tsx');
let customTankContent = fs.readFileSync(customTankFile, 'utf8');
if (!customTankContent.includes('const siteUrl')) {
  // Need to add it after the metadata block
  const fixed = customTankContent.replace(
    `}\n\nconst faqs`,
    `}\n\nconst siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'\n\nconst faqs`
  );
  if (fixed !== customTankContent) {
    fs.writeFileSync(customTankFile, fixed, 'utf8');
    console.log('  ✓ FIXED: Added siteUrl to custom-tank-design');
    changes++;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. ADD CANONICAL + NOINDEX TO THANK-YOU PAGE
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[6] Adding canonical + noindex to thank-you page...');
fix('app/thank-you/page.tsx', 'canonical + noindex',
  `export const metadata: Metadata = {
  title: 'Thank You — Enquiry Received',
  description: 'Your enquiry has been received. The PC Water Infrastructure team will respond within one business day.',
}`,
  `export const metadata: Metadata = {
  title: 'Thank You — Enquiry Received',
  description: 'Your enquiry has been received. The PC Water Infrastructure team will respond within one business day.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/thank-you' },
}`
);

// ─────────────────────────────────────────────────────────────────────────────
// 7. UPDATE SITEMAP LASTMODIFIED TO TODAY
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[7] Updating sitemap lastModified date...');
fix('app/sitemap.ts', 'lastModified date',
  "const lastModified = new Date('2026-05-25T00:00:00.000Z')",
  "const lastModified = new Date('2026-06-02T00:00:00.000Z')"
);

// ─────────────────────────────────────────────────────────────────────────────
// 8. ADD TWITTER CARD TO EXISTING SERVICE/INDUSTRY OG BLOCKS
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n[8] Adding Twitter card to service & industry pages...');
const serviceIndustryPages = [
  'app/services/builder-contractor-partnerships/page.tsx',
  'app/services/custom-tank-design/page.tsx',
  'app/services/fire-water-tanks/page.tsx',
  'app/services/foundation-civil-integration/page.tsx',
  'app/services/project-managed-water-infrastructure/page.tsx',
  'app/services/remote-area-delivery/page.tsx',
  'app/services/rpvc-liner-systems/page.tsx',
  'app/services/tank-installation/page.tsx',
  'app/services/tank-maintenance-upgrades/page.tsx',
  'app/services/tender-procurement-support/page.tsx',
  'app/services/water-treatment-solutions/page.tsx',
  'app/industries/commercial-fire-compliance/page.tsx',
  'app/industries/government-councils/page.tsx',
  'app/industries/industrial-facilities/page.tsx',
  'app/industries/mining-resources/page.tsx',
  'app/industries/remote-regional-communities/page.tsx',
  'app/tools/repair-reline-replace/page.tsx',
  'app/tools/tank-compliance-checker/page.tsx',
];

for (const file of serviceIndustryPages) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) continue;
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes('twitter:') || content.includes('twitter: {')) continue;

  // Insert Twitter card after the openGraph closing block
  const ogEndPattern = /(\s{2}\},\s*\n)(})/;
  if (ogEndPattern.test(content) && content.includes('openGraph:')) {
    // Find the last }  that closes the metadata object
    const twitterCard = `  twitter: { card: 'summary_large_image' as const, images: ['/hero.png'] },\n`;
    // We need to find the closing of the metadata export object
    // Find the openGraph block and add twitter after its closing brace
    const newContent = content.replace(
      /(\s*openGraph:\s*\{[\s\S]*?\},\s*\n)(})/,
      (m, ogBlock, close) => ogBlock + twitterCard + close
    );
    if (newContent !== content) {
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`  ✓ FIXED Twitter card: ${file}`);
      changes++;
    } else {
      console.log(`  SKIP (no match): ${file}`);
    }
  } else {
    console.log(`  SKIP (no OG end): ${file}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY
// ─────────────────────────────────────────────────────────────────────────────
console.log(`\n${'='.repeat(60)}`);
console.log(`TOTAL CHANGES MADE: ${changes}`);
console.log('='.repeat(60));
