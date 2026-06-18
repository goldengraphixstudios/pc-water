const fs = require('fs');
const path = require('path');

// Hero images that need descriptive alt text
// Pattern: alt="" fill priority -> alt="[description]" fill priority
// Or: alt="" fill -> alt="[description]" fill
const fixes = [
  [
    'app/about/page.tsx',
    'src="/heroes/about.jpg"\n          alt=""\n          fill\n          priority',
    'src="/heroes/about.jpg"\n          alt="PC Water Infrastructure team delivering water storage infrastructure across Australia"\n          fill\n          priority'
  ],
  [
    'app/commitment/page.tsx',
    'src="/heroes/commitment.jpg"\n          alt=""\n          fill\n          priority',
    'src="/heroes/commitment.jpg"\n          alt="PC Water Infrastructure — safety, quality and compliance on every project site"\n          fill\n          priority'
  ],
  [
    'app/contact/page.tsx',
    'src="/heroes/contact.jpg"\n          alt=""\n          fill\n          priority',
    'src="/heroes/contact.jpg"\n          alt="PC Water Infrastructure — contact our team to discuss your water infrastructure project"\n          fill\n          priority'
  ],
  [
    'app/industries/commercial-fire-compliance/page.tsx',
    'src="/heroes/commercial-fire-compliance.jpg" alt="" fill priority',
    'src="/heroes/commercial-fire-compliance.jpg" alt="Commercial building fire water storage tank and pump system" fill priority'
  ],
  [
    'app/industries/government-councils/page.tsx',
    'src="/heroes/government-councils.jpg" alt="" fill priority',
    'src="/heroes/government-councils.jpg" alt="Municipal water reservoir infrastructure for government and council assets" fill priority'
  ],
  [
    'app/industries/industrial-facilities/page.tsx',
    'src="/heroes/industrial-facilities.jpg" alt="" fill priority',
    'src="/heroes/industrial-facilities.jpg" alt="Industrial water storage tanks at an Australian industrial facility" fill priority'
  ],
  [
    'app/industries/mining-resources/page.tsx',
    'src="/heroes/mining-resources.jpg" alt="" fill priority',
    'src="/heroes/mining-resources.jpg" alt="Water storage infrastructure at a remote Australian mining operation" fill priority'
  ],
  [
    'app/industries/remote-regional-communities/page.tsx',
    'src="/heroes/remote-regional-communities.jpg" alt="" fill priority',
    'src="/heroes/remote-regional-communities.jpg" alt="Remote water infrastructure delivery for an Australian Indigenous community" fill priority'
  ],
];

// Single-line hero image fixes for service pages (they use multi-line format)
const serviceHeroFixes = [
  [
    'app/services/builder-contractor-partnerships/page.tsx',
    '/heroes/builder-contractor-partnerships.jpg',
    'Builder and contractor water infrastructure partnership — professional subcontract delivery'
  ],
  [
    'app/services/custom-tank-design/page.tsx',
    '/heroes/custom-tank-design.jpg',
    'Custom engineered water storage tank design and installation'
  ],
  [
    'app/services/fire-water-tanks/page.tsx',
    '/heroes/fire-water-tanks.jpg',
    'Fire water storage tank system with pump integration and AS2304 compliance'
  ],
  [
    'app/services/foundation-civil-integration/page.tsx',
    '/heroes/foundation-civil-integration.jpg',
    'Concrete foundation and civil integration works for water storage tank installation'
  ],
  [
    'app/services/project-managed-water-infrastructure/page.tsx',
    '/heroes/project-managed-water-infrastructure.jpg',
    'Project managed water infrastructure delivery at a remote Australian site'
  ],
  [
    'app/services/remote-area-delivery/page.tsx',
    '/heroes/remote-area-delivery.jpg',
    'Remote water infrastructure delivery by FIFO crews in regional Australia'
  ],
  [
    'app/services/rpvc-liner-systems/page.tsx',
    '/heroes/rpvc-liner-systems.jpg',
    'RPVC liner installation inside a water storage tank — extending asset life'
  ],
  [
    'app/services/tank-inspection-technology/page.tsx',
    '/heroes/tank-inspection-technology.jpg',
    'ROV tank inspection technology assessing internal water storage tank condition'
  ],
  [
    'app/services/tank-installation/page.tsx',
    '/heroes/tank-installation.jpg',
    'Professional water storage tank installation on an Australian project site'
  ],
  [
    'app/services/tank-maintenance-upgrades/page.tsx',
    '/heroes/tank-maintenance-upgrades.jpg',
    'Water storage tank maintenance and upgrade works in progress'
  ],
  [
    'app/services/tender-procurement-support/page.tsx',
    '/heroes/tender-procurement-support.jpg',
    'Water infrastructure tender and procurement support documentation review'
  ],
  [
    'app/services/water-treatment-solutions/page.tsx',
    '/heroes/water-treatment-solutions.jpg',
    'Water treatment infrastructure and storage solutions across Australia'
  ],
];

// Index/listing page heroes
const listingHeroFixes = [
  [
    'app/industries/page.tsx',
    '/heroes/industries.jpg',
    'Water infrastructure across Australian industries — government, mining, industrial, and remote communities'
  ],
  [
    'app/resources/page.tsx',
    '/heroes/resources.jpg',
    'Water storage engineering resources, guides, and technical articles'
  ],
  [
    'app/services/page.tsx',
    '/heroes/services.jpg',
    'PC Water Infrastructure services — water storage design, installation, inspection, and delivery'
  ],
];

let changed = 0;

// Fix multi-line hero alt text
for (const [file, oldText, newText] of fixes) {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(oldText)) {
    content = content.replace(oldText, newText);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('FIXED alt: ' + file);
    changed++;
  } else {
    console.log('SKIP (not found): ' + file);
  }
}

// Fix service page hero images — they use multi-line with alt="" on its own line
// Pattern: src="/heroes/X.jpg"\n          alt=""\n
for (const [file, heroSrc, altText] of serviceHeroFixes) {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');
  // Match the src with alt="" on next line
  const oldPattern = heroSrc + '"\n          alt=""\n';
  const newPattern = heroSrc + '"\n          alt="' + altText + '"\n';
  if (content.includes(oldPattern)) {
    content = content.replace(oldPattern, newPattern);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('FIXED service alt: ' + file);
    changed++;
  } else {
    // Try inline pattern
    const oldInline = 'src="' + heroSrc + '" alt=""';
    const newInline = 'src="' + heroSrc + '" alt="' + altText + '"';
    if (content.includes(oldInline)) {
      content = content.replace(oldInline, newInline);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log('FIXED service alt (inline): ' + file);
      changed++;
    } else {
      console.log('SKIP service (not found): ' + file);
    }
  }
}

// Fix listing page heroes
for (const [file, heroSrc, altText] of listingHeroFixes) {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');
  const oldPattern = heroSrc + '"\n          alt=""\n';
  const newPattern = heroSrc + '"\n          alt="' + altText + '"\n';
  if (content.includes(oldPattern)) {
    content = content.replace(oldPattern, newPattern);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('FIXED listing alt: ' + file);
    changed++;
  } else {
    const oldInline = 'src="' + heroSrc + '" alt=""';
    const newInline = 'src="' + heroSrc + '" alt="' + altText + '"';
    if (content.includes(oldInline)) {
      content = content.replace(oldInline, newInline);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log('FIXED listing alt (inline): ' + file);
      changed++;
    } else {
      console.log('SKIP listing (not found): ' + file);
    }
  }
}

console.log('\nTotal alt text fixed: ' + changed);
