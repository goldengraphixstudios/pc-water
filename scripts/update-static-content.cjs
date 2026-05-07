/**
 * update-static-content.cjs
 * Replaces plain-text content in static-content.ts with rich HTML from blog-content-output.json
 */

const fs = require('fs')
const path = require('path')

const output = JSON.parse(fs.readFileSync(path.join(__dirname, 'blog-content-output.json'), 'utf-8'))
const staticContentPath = path.join(__dirname, '..', 'lib', 'cms', 'static-content.ts')
let source = fs.readFileSync(staticContentPath, 'utf-8')

const articleMappings = [
  { slug: 'water-is-food-your-tank-is-the-crockery', htmlKey: 'wif' },
  { slug: 'from-mines-to-hospitals-what-every-sector-gets-wrong-about-tank-maintenance', htmlKey: 'mines' },
  { slug: 'why-your-fire-tank-might-fail-compliance-and-how-to-fix-it-fast', htmlKey: 'fire' },
  { slug: 'is-your-water-tank-a-ticking-time-bomb-5-signs-your-tank-is-failing', htmlKey: 'bomb' },
  { slug: 'corrosion-is-killing-your-storage-tanks-and-heres-how-to-stop-it', htmlKey: 'corrosion' },
  { slug: 'how-rpvc-liners-extend-the-life-of-aging-water-tanks', htmlKey: 'rpvc' },
  { slug: 'water-storage-in-harsh-environments-what-you-need-to-know', htmlKey: 'harsh' },
]

let changeCount = 0

for (const mapping of articleMappings) {
  const html = output[mapping.htmlKey].html
  const jsonContent = JSON.stringify(html)

  // Find where this slug appears in the file
  const slugPattern = "'" + mapping.slug + "'"
  const slugIdx = source.indexOf(slugPattern)
  if (slugIdx === -1) {
    console.error('Could not find slug:', mapping.slug)
    continue
  }

  // Find the next 'content:' field after this slug
  const contentLabel = 'content:'
  const contentStart = source.indexOf(contentLabel, slugIdx)
  if (contentStart === -1) {
    console.error('Could not find content field for:', mapping.slug)
    continue
  }

  // Find value start (skip whitespace after 'content:')
  let i = contentStart + contentLabel.length
  while (i < source.length && (source[i] === ' ' || source[i] === '\n' || source[i] === '\r')) i++

  const quoteChar = source[i]
  let valueEnd = i + 1

  if (quoteChar === "'") {
    // single-quoted string with potential backslash escapes
    while (valueEnd < source.length) {
      const ch = source[valueEnd]
      if (ch === '\\') { valueEnd += 2; continue }
      if (ch === "'") { valueEnd++; break }
      valueEnd++
    }
  } else if (quoteChar === '"') {
    while (valueEnd < source.length) {
      const ch = source[valueEnd]
      if (ch === '\\') { valueEnd += 2; continue }
      if (ch === '"') { valueEnd++; break }
      valueEnd++
    }
  } else if (quoteChar === '`') {
    // template literal — handle ${ ... } blocks
    let depth = 0
    while (valueEnd < source.length) {
      const ch = source[valueEnd]
      if (ch === '\\') { valueEnd += 2; continue }
      if (ch === '$' && source[valueEnd + 1] === '{') { depth++; valueEnd += 2; continue }
      if (ch === '}' && depth > 0) { depth--; valueEnd++; continue }
      if (ch === '`' && depth === 0) { valueEnd++; break }
      valueEnd++
    }
  } else {
    console.error('Unexpected quote char:', JSON.stringify(quoteChar), 'for slug:', mapping.slug)
    continue
  }

  const oldSegment = source.substring(contentStart, valueEnd)
  const newSegment = 'content:\n      ' + jsonContent
  source = source.substring(0, contentStart) + newSegment + source.substring(valueEnd)
  changeCount++
  console.log('Replaced content for:', mapping.slug, '(new HTML:', html.length, 'chars)')
}

if (changeCount > 0) {
  fs.writeFileSync(staticContentPath, source)
  console.log('\nWritten updated static-content.ts with', changeCount, 'replacements')
} else {
  console.log('No changes made')
}
