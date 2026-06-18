const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const QUALITY_JPEG = 80;
const QUALITY_WEBP = 80;
const QUALITY_PNG = 80;

let totalSaved = 0;
let totalFiles = 0;
let skipped = 0;

function getAllImages(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...getAllImages(fullPath));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = fs.statSync(filePath).size;

  // Skip tiny files (< 20KB — not worth processing)
  if (originalSize < 20480) {
    skipped++;
    return;
  }

  try {
    let buffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      buffer = await sharp(filePath)
        .jpeg({ quality: QUALITY_JPEG, progressive: true, mozjpeg: true })
        .toBuffer();
    } else if (ext === '.png') {
      buffer = await sharp(filePath)
        .png({ quality: QUALITY_PNG, compressionLevel: 9 })
        .toBuffer();
    } else if (ext === '.webp') {
      buffer = await sharp(filePath)
        .webp({ quality: QUALITY_WEBP })
        .toBuffer();
    } else {
      skipped++;
      return;
    }

    const newSize = buffer.length;
    const saved = originalSize - newSize;

    // Only write if we actually saved space
    if (saved > 0) {
      fs.writeFileSync(filePath, buffer);
      totalSaved += saved;
      totalFiles++;
      const pct = ((saved / originalSize) * 100).toFixed(1);
      console.log(`COMPRESSED ${pct}% saved (${(originalSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB): ${path.relative(process.cwd(), filePath)}`);
    } else {
      skipped++;
    }
  } catch (err) {
    console.log('ERROR: ' + filePath + ' — ' + err.message);
    skipped++;
  }
}

async function main() {
  console.log('Scanning public/ for images...\n');
  const images = getAllImages(publicDir);
  console.log('Found ' + images.length + ' images\n');

  for (const img of images) {
    await compressImage(img);
  }

  console.log('\n=== DONE ===');
  console.log('Files compressed: ' + totalFiles);
  console.log('Files skipped: ' + skipped);
  console.log('Total saved: ' + (totalSaved / 1024 / 1024).toFixed(2) + ' MB');
}

main().catch(console.error);
