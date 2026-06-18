const fs = require('fs');
const path = require('path');

let totalFixed = 0;

function fix(file, oldText, newText, label) {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(oldText)) {
    content = content.replace(oldText, newText);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`FIXED [${label}] (${oldText.length}->${newText.length}): ${file}`);
    totalFixed++;
    return true;
  }
  console.log(`SKIP  [${label}]: ${file}`);
  return false;
}

// ─── 1. TOOL PAGE META DESCRIPTIONS (never touched before) ───────────────────

fix(
  'app/tools/repair-reline-replace/page.tsx',
  'Free decision tool for aging water tanks. Answer questions on tank use, age, structural condition, corrosion, and liner condition to find out whether to repair, reline with RPVC, or replace — plus your recommended next step.',
  'Free decision tool for aging water tanks — answer questions on condition, age, and corrosion to find out whether to repair, reline with RPVC, or replace.',
  'repair-reline desc'
);

fix(
  'app/tools/tank-compliance-checker/page.tsx',
  'Free online tank compliance checker for Australian water tanks. Answer a few questions on tank type, age, inspection history, and condition to get an instant compliance-risk indication and your recommended next step.',
  'Free online tank compliance checker for Australian water tanks. Answer questions on tank type, age, inspection history, and condition to get an instant compliance-risk indication.',
  'compliance-checker desc'
);

// ─── 2. ADD OG:IMAGE TO TOOL PAGES (missing from their explicit openGraph block) ─

fix(
  'app/tools/repair-reline-replace/page.tsx',
  `  openGraph: {
    title: 'Repair, Reline or Replace? Water Tank Decision Tool',
    description:
      'Answer a few questions about your aging tank and get a practical guidance path — repair, reline, replace, or inspect first.',
    url: \`\${siteUrl}/tools/repair-reline-replace\`,
    type: 'website',
  },`,
  `  openGraph: {
    title: 'Repair, Reline or Replace? Water Tank Decision Tool',
    description:
      'Answer a few questions about your aging tank and get a practical guidance path — repair, reline, replace, or inspect first.',
    url: \`\${siteUrl}/tools/repair-reline-replace\`,
    type: 'website',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },`,
  'repair-reline og:image'
);

fix(
  'app/tools/tank-compliance-checker/page.tsx',
  `  openGraph: {
    title: 'Tank Compliance Checker — Free Water Tank Risk Assessment',
    description:
      'Answer a few questions and get a fast indication of your water tank’s likely compliance risk, plus a clear next step.',
    url: \`\${siteUrl}/tools/tank-compliance-checker\`,
    type: 'website',
  },`,
  `  openGraph: {
    title: 'Tank Compliance Checker — Free Water Tank Risk Assessment',
    description:
      'Answer a few questions and get a fast indication of your water tank’s likely compliance risk, plus a clear next step.',
    url: \`\${siteUrl}/tools/tank-compliance-checker\`,
    type: 'website',
    images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'PC Water Infrastructure — Engineered Water Asset Solutions' }],
  },`,
  'compliance-checker og:image'
);

// ─── 3. REMAINING TOO-LONG PAGE DESCRIPTIONS (161-168 chars) ─────────────────

fix(
  'app/services/fire-water-tanks/page.tsx',
  'AS2304-compliant fire water tank solutions across Australia including design, installation, pump integration, inspection support, and AS1851 compliance guidance.',
  'AS2304-compliant fire water tank solutions across Australia — design, installation, pump integration, inspection support, and AS1851 compliance guidance.',
  'fire-water-tanks desc'
);

fix(
  'app/services/tank-maintenance-upgrades/page.tsx',
  'Planned and reactive maintenance, structural upgrades, corrosion treatment, and lifecycle extension for steel and concrete water storage assets across Australia.',
  'Planned and reactive maintenance, structural upgrades, corrosion treatment, and lifecycle extension for steel and concrete water storage assets.',
  'tank-maintenance desc'
);

fix(
  'app/industries/industrial-facilities/page.tsx',
  'Process water reliability and fire suppression compliance for industrial facilities. Tank design, inspection, RPVC liners, and maintenance for industrial assets.',
  'Process water reliability and fire suppression compliance for industrial facilities. Tank design, inspection, RPVC liners, and maintenance.',
  'industrial-facilities desc'
);

fix(
  'app/projects/page.tsx',
  'PC Water Infrastructure project portfolio — water storage infrastructure delivered across government, mining, industrial, and remote community sectors across Australia.',
  'Water storage infrastructure delivered across government, mining, industrial, and remote community sectors across Australia.',
  'projects page desc'
);

fix(
  'app/resources/page.tsx',
  'Insights, guides, and resources on water storage engineering, tank maintenance, fire water compliance, RPVC liners, and remote project delivery across Australia.',
  'Insights, guides, and resources on water storage engineering, tank maintenance, fire water compliance, RPVC liners, and remote project delivery.',
  'resources page desc'
);

// ─── 4. PROJECT SEO DESCRIPTIONS IN STATIC CONTENT (too long) ────────────────

fix(
  'lib/cms/static-content.ts',
  'PC Tanks delivered a 90kL elevated 316 stainless steel potable water tank replacement at Kybrook Farm, Pine Creek NT for McMahon Services and Power and Water Corporation.',
  '90kL stainless steel elevated potable water tank replacement at Kybrook Farm, Pine Creek NT — remote Northern Territory delivery by PC Water Infrastructure.',
  'kybrook seoDesc'
);

fix(
  'lib/cms/static-content.ts',
  'PC Water Infrastructure supplied and installed two industrial water tanks at the Nyrstar zinc smelter in Hobart, Tasmania — engineered for a corrosive chemical environment.',
  'Two industrial water tanks for the Nyrstar zinc smelter in Hobart, Tasmania — specialist corrosion-resistant engineering for a harsh processing environment.',
  'hobart seoDesc'
);

fix(
  'lib/cms/static-content.ts',
  'PC Water Infrastructure is delivering a 2ML ground-level water storage tank for the Doomadgee Aboriginal Shire Council in remote Queensland, supporting the community water treatment plant.',
  'PC Water delivering a 2ML ground-level tank for Doomadgee Council in remote Queensland — supporting the community water treatment plant.',
  'doomadgee seoDesc'
);

fix(
  'lib/cms/static-content.ts',
  'PC Water Infrastructure delivered RPVC liner installation and full refurbishment of a 600kL municipal reservoir in Albury NSW, restoring AS4020 potable water compliance and extending asset life by 20+ years.',
  'RPVC liner installation and full refurbishment of a 600kL Albury NSW reservoir — restoring AS4020 potable water compliance and extending asset life by 20+ years.',
  'albury seoDesc'
);

fix(
  'lib/cms/static-content.ts',
  'PC Water Infrastructure replaced deteriorated liners in two commercial water storage tanks at 107 Clarence Road, restoring compliance with RPVC liner installation and avoiding full asset replacement.',
  'RPVC liner replacement for two commercial water storage tanks at 107 Clarence Road — restoring compliance and avoiding full asset replacement.',
  'clarence seoDesc'
);

// ─── 5. FROM-MINES RESOURCE SEO DESCRIPTION (162 chars) ──────────────────────

fix(
  'lib/cms/static-content.ts',
  'Every sector depends on water storage and every sector repeats the same maintenance mistakes. Discover the five critical errors costing asset owners in Australia.',
  'Every sector depends on water storage and every sector repeats the same maintenance mistakes. Discover the five critical errors costing asset owners.',
  'from-mines seoDesc'
);

console.log(`\nTotal fixed: ${totalFixed}`);
