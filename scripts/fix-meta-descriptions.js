const fs = require('fs');
const path = require('path');

const fixes = [
  [
    'app/services/builder-contractor-partnerships/page.tsx',
    'Reliable water storage subcontract partnerships for builders, civil contractors, and project managers. National reach, compliance documentation, and flexible scope delivery.',
    'Reliable water storage subcontract partnerships for builders and civil contractors. National reach, compliance documentation, and flexible scope delivery.'
  ],
  [
    'app/services/custom-tank-design/page.tsx',
    'Purpose-built water storage tanks engineered to AS2304 & AS4020 for any capacity, site condition, or application. RPEQ-certified engineers, structural engineering, civil integration.',
    'Purpose-built water storage tanks engineered to AS2304 & AS4020 for any capacity and site condition. RPEQ-certified engineers, structural engineering, civil integration.'
  ],
  [
    'app/services/foundation-civil-integration/page.tsx',
    'Engineered concrete foundations and civil integration for tanks of all sizes. Geotechnical assessment, civil contractor coordination, and structural compliance for any site.',
    'Engineered concrete foundations and civil integration for tanks of all sizes. Geotechnical assessment, civil coordination, and structural compliance for any site.'
  ],
  [
    'app/services/remote-area-delivery/page.tsx',
    'Specialist water infrastructure delivery for remote and regional Australia. FIFO crews, Indigenous community engagement, harsh environment materials, and remote logistics expertise.',
    'Specialist water infrastructure delivery for remote and regional Australia. FIFO crews, Indigenous community engagement, and remote logistics expertise.'
  ],
  [
    'app/services/rpvc-liner-systems/page.tsx',
    'RPVC liner systems for aging water tanks across Australia. Extend asset life, restore potable water compliance, reduce corrosion risk, and avoid full tank replacement.',
    'RPVC liner systems for aging water tanks across Australia. Extend asset life, restore potable compliance, and avoid full tank replacement.'
  ],
  [
    'app/services/tank-inspection-technology/page.tsx',
    'ROV and UAV tank inspection technology for water storage assets across Australia. Assess condition without costly dewatering and support compliance, maintenance, and refurbishment planning.',
    'ROV and UAV tank inspection for water storage assets across Australia. Assess condition without dewatering, supporting compliance and maintenance planning.'
  ],
  [
    'app/services/tank-installation/page.tsx',
    'End-to-end tank installation with certified crews, national reach, and rigorous safety standards. Site preparation, structural erection, commissioning, JSA/SWMS compliance.',
    'End-to-end tank installation with certified crews and national reach. Site preparation, structural erection, commissioning, and SWMS compliance.'
  ],
  [
    'app/services/tender-procurement-support/page.tsx',
    'Specialist procurement and tendering support for councils, government agencies, and major contractors. Capability statements, specification support, tender response assistance.',
    'Specialist procurement and tendering support for councils, government, and major contractors. Capability statements, specification support, tender assistance.'
  ],
  [
    'app/services/water-treatment-solutions/page.tsx',
    'Water treatment solutions across Australia covering potable water infrastructure, intake, filtration, disinfection, automation, and compliance-led project delivery.',
    'Water treatment solutions across Australia — potable water infrastructure, filtration, disinfection, automation, and compliance-led project delivery.'
  ],
  [
    'app/services/page.tsx',
    'PC Water Infrastructure combines PC Tanks (tank design & supply) and PC Water Solutions (project delivery & asset management) for a complete end-to-end water infrastructure service.',
    'Complete water infrastructure from PC Tanks (tank design & supply) and PC Water Solutions (project delivery & asset management) across Australia.'
  ],
  [
    'app/industries/commercial-fire-compliance/page.tsx',
    'AS2304 fire water storage and AS1851 annual inspection compliance for commercial properties. Pump system integration, compliance documentation, and ongoing maintenance.',
    'AS2304 fire water storage and AS1851 annual inspection compliance for commercial properties. Pump integration, compliance documentation, ongoing maintenance.'
  ],
  [
    'app/industries/government-councils/page.tsx',
    'Compliant, accountable water storage for government and council assets. Tender-ready documentation, AS2304/AS1851 compliance, remote delivery, and procurement support.',
    'Compliant, accountable water storage for government and council assets. Tender-ready documentation, AS2304/AS1851 compliance, and procurement support.'
  ],
  [
    'app/industries/industrial-facilities/page.tsx',
    'Process water reliability and fire suppression compliance for industrial facilities. Tank design, inspection, RPVC liners, and maintenance for industrial water storage assets.',
    'Process water reliability and fire suppression compliance for industrial facilities. Tank design, inspection, RPVC liners, and maintenance for industrial assets.'
  ],
  [
    'app/industries/mining-resources/page.tsx',
    'Robust water storage for remote mining operations. Harsh environment engineering, AS2304 fire water compliance, RPVC liners, ROV inspection, and FIFO crew deployment.',
    'Robust water storage for remote mining operations. Harsh environment engineering, AS2304 fire water compliance, RPVC liners, and ROV inspection.'
  ],
  [
    'app/industries/remote-regional-communities/page.tsx',
    'Safe water access for remote and Indigenous communities. Specialist logistics, FIFO delivery, cultural sensitivity, and community engagement for remote water infrastructure.',
    'Safe water access for remote and Indigenous communities. Specialist logistics, FIFO delivery, cultural sensitivity, and community engagement.'
  ],
  [
    'app/about/page.tsx',
    'PC Water Infrastructure — Australian-owned water storage engineering specialists since 2013. 20+ years combined expertise, zero injury record, nationwide coverage.',
    'PC Water Infrastructure — Australian-owned water storage specialists since 2013. 20+ years combined expertise, zero injury record, nationwide coverage.'
  ],
  [
    'app/commitment/page.tsx',
    'PC Water Infrastructure commitment to safety, quality, sustainability, and community — including our SQE policies, engineering standards, and Indigenous engagement principles.',
    'PC Water Infrastructure commitment to safety, quality, sustainability, and community — SQE policies, engineering standards, and Indigenous engagement.'
  ],
  [
    'app/tools/page.tsx',
    "Free online tools from PC Water Infrastructure: check your water tank’s likely compliance risk, and decide whether to repair, reline, or replace an aging tank. Fast, practical, and built for asset owners.",
    'Free online tools: check your water tank compliance risk, and decide whether to repair, reline, or replace an aging tank. Built for asset owners.'
  ],
  [
    'app/projects/page.tsx',
    'PC Water Infrastructure project portfolio — water storage infrastructure delivered across government, mining, industrial, commercial, and remote community sectors across Australia.',
    'PC Water Infrastructure project portfolio — water storage infrastructure delivered across government, mining, industrial, and remote community sectors across Australia.'
  ],
];

let changed = 0;
for (const [file, oldText, newText] of fixes) {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(oldText)) {
    content = content.replace(oldText, newText);
    fs.writeFileSync(fullPath, content, 'utf8');
    const oldLen = [...oldText].length;
    const newLen = [...newText].length;
    console.log('FIXED (' + oldLen + '->' + newLen + '): ' + file);
    changed++;
  } else {
    console.log('SKIP (text not found): ' + file);
  }
}
console.log('\nTotal fixed: ' + changed + '/' + fixes.length);
