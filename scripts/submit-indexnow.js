const https = require('https');

// List of 41 pages to submit to IndexNow
// These are all fixed pages (OG tags, descriptions, titles, links, etc.)
const urlsToSubmit = [
  'https://pcwater.com.au/',
  'https://pcwater.com.au/services',
  'https://pcwater.com.au/services/builder-contractor-partnerships',
  'https://pcwater.com.au/services/custom-tank-design',
  'https://pcwater.com.au/services/fire-water-tanks',
  'https://pcwater.com.au/services/foundation-civil-integration',
  'https://pcwater.com.au/services/project-managed-water-infrastructure',
  'https://pcwater.com.au/services/remote-area-delivery',
  'https://pcwater.com.au/services/rpvc-liner-systems',
  'https://pcwater.com.au/services/tank-installation',
  'https://pcwater.com.au/services/tank-maintenance-upgrades',
  'https://pcwater.com.au/services/tender-procurement-support',
  'https://pcwater.com.au/services/water-treatment-solutions',
  'https://pcwater.com.au/industries',
  'https://pcwater.com.au/industries/commercial-fire-compliance',
  'https://pcwater.com.au/industries/government-councils',
  'https://pcwater.com.au/industries/industrial-facilities',
  'https://pcwater.com.au/industries/mining-resources',
  'https://pcwater.com.au/industries/remote-regional-communities',
  'https://pcwater.com.au/projects',
  'https://pcwater.com.au/projects/albury-tank-agricultural-storage',
  'https://pcwater.com.au/projects/clarence-valley-rural-fire-service',
  'https://pcwater.com.au/projects/doomadgee-2ml-remote-community',
  'https://pcwater.com.au/projects/hobart-compliance-specialist-tanks',
  'https://pcwater.com.au/projects/kybrook-farm-polyurethane-lined',
  'https://pcwater.com.au/resources',
  'https://pcwater.com.au/resources/corrosion-killing-your-storage-tanks',
  'https://pcwater.com.au/resources/from-mines-to-hospitals',
  'https://pcwater.com.au/resources/optimising-tank-placement-remote-sites',
  'https://pcwater.com.au/resources/rpvc-liner-systems-harsh-climates',
  'https://pcwater.com.au/resources/understanding-tank-polyurethane-lining',
  'https://pcwater.com.au/resources/water-storage-harsh-environments',
  'https://pcwater.com.au/tools/compliance-checker',
  'https://pcwater.com.au/tools/repair-reline',
  'https://pcwater.com.au/contact',
  'https://pcwater.com.au/about',
];

// IndexNow API key (placeholder - this should be set as an environment variable)
const indexnowKey = process.env.INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY_HERE';

if (indexnowKey === 'YOUR_INDEXNOW_KEY_HERE') {
  console.error('ERROR: INDEXNOW_KEY environment variable not set.');
  console.error('Set it to your IndexNow key before running this script.');
  console.error('\nExample: export INDEXNOW_KEY="your-key-here"');
  process.exit(1);
}

const payload = JSON.stringify({
  host: 'pcwater.com.au',
  key: indexnowKey,
  keyLocation: 'https://pcwater.com.au/.well-known/indexnow',
  urlList: urlsToSubmit,
});

const postOptions = {
  host: 'api.indexnow.org',
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': payload.length,
  },
};

console.log(`\n📤 Submitting ${urlsToSubmit.length} URLs to IndexNow API...`);
console.log(`Host: ${postOptions.host}`);
console.log(`Key Location: https://pcwater.com.au/.well-known/indexnow\n`);

const req = https.request(postOptions, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ SUCCESS: All URLs submitted to IndexNow!');
      console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
      console.log(`\nResponse: ${data}`);
    } else {
      console.error(`❌ ERROR: IndexNow submission failed.`);
      console.error(`Status: ${res.statusCode} ${res.statusMessage}`);
      console.error(`Response: ${data}`);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ ERROR: Request failed:', error.message);
  process.exit(1);
});

req.write(payload);
req.end();
