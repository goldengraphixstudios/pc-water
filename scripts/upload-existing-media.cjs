const fs = require('fs')
const path = require('path')

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return
  }

  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim()
    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

function getArgValue(flag) {
  const index = process.argv.indexOf(flag)
  if (index === -1) {
    return null
  }

  return process.argv[index + 1] ?? null
}

function detectContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case '.png':
      return 'image/png'
    case '.webp':
      return 'image/webp'
    case '.svg':
      return 'image/svg+xml'
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    default:
      return 'application/octet-stream'
  }
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..')
  loadEnvFile(path.join(projectRoot, '.env.local'))
  loadEnvFile(path.join(projectRoot, '.env'))

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const email = getArgValue('--email')
  const password = getArgValue('--password')

  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  if (!email || !password) {
    throw new Error('Usage: node scripts/upload-existing-media.cjs --email you@example.com --password your-password')
  }

  const { createClient } = await import('@supabase/supabase-js')
  const supabase = createClient(url, anonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (authError || !authData.session) {
    throw new Error(authError?.message ?? 'Failed to authenticate with Supabase.')
  }

  const publicDir = path.join(projectRoot, 'public')
  const uploads = [
    {
      localPath: path.join(publicDir, 'logo-pacific-water-group.png'),
      bucketPath: 'brand/logo-pacific-water-group.png',
      updateProjects: false,
    },
    {
      localPath: path.join(publicDir, 'hero.png'),
      bucketPath: 'brand/hero.png',
      updateProjects: false,
    },
    ...[
      'albury-01.jpg',
      'borumba-01.jpg',
      'borumba-02.jpg',
      'borumba-03.jpg',
      'clarence-01.jpg',
      'clarence-02.jpg',
      'clarence-03.jpg',
      'doomadgee-04.jpg',
      'doomadgee-05.jpg',
      'doomadgee-06.jpg',
      'hobart-01.jpg',
      'hobart-02.jpg',
      'hobart-03.jpg',
    ].map((fileName) => ({
      localPath: path.join(publicDir, 'projects', fileName),
      bucketPath: `projects/${fileName}`,
      updateProjects: true,
    })),
  ]

  const uploadedMap = new Map()

  for (const item of uploads) {
    if (!fs.existsSync(item.localPath)) {
      throw new Error(`Missing local file: ${item.localPath}`)
    }

    const fileBuffer = fs.readFileSync(item.localPath)
    const contentType = detectContentType(item.localPath)

    const { error: uploadError } = await supabase.storage
      .from('cms-media')
      .upload(item.bucketPath, fileBuffer, {
        contentType,
        upsert: true,
      })

    if (uploadError) {
      throw new Error(`Upload failed for ${item.bucketPath}: ${uploadError.message}`)
    }

    const { data: publicUrlData } = supabase.storage.from('cms-media').getPublicUrl(item.bucketPath)
    uploadedMap.set(`/${item.bucketPath.replace(/^projects\//, 'projects/')}`, publicUrlData.publicUrl)
    uploadedMap.set(`/projects/${path.basename(item.bucketPath)}`, publicUrlData.publicUrl)
    uploadedMap.set(path.basename(item.bucketPath), publicUrlData.publicUrl)
  }

  const projectUpdates = [
    {
      slug: 'borumba-hydro',
      hero: '/projects/borumba-01.jpg',
      gallery: ['/projects/borumba-01.jpg', '/projects/borumba-02.jpg', '/projects/borumba-03.jpg'],
    },
    {
      slug: 'hobart-nyrstar',
      hero: '/projects/hobart-01.jpg',
      gallery: ['/projects/hobart-01.jpg', '/projects/hobart-02.jpg', '/projects/hobart-03.jpg'],
    },
    {
      slug: 'doomadgee-wtp',
      hero: '/projects/doomadgee-04.jpg',
      gallery: ['/projects/doomadgee-04.jpg', '/projects/doomadgee-05.jpg', '/projects/doomadgee-06.jpg'],
    },
    {
      slug: 'albury-reservoir',
      hero: '/projects/albury-01.jpg',
      gallery: ['/projects/albury-01.jpg'],
    },
    {
      slug: 'clarence-road-liner',
      hero: '/projects/clarence-01.jpg',
      gallery: ['/projects/clarence-01.jpg', '/projects/clarence-02.jpg', '/projects/clarence-03.jpg'],
    },
  ]

  for (const project of projectUpdates) {
    const heroUrl = uploadedMap.get(project.hero)
    const galleryUrls = project.gallery.map((url) => uploadedMap.get(url)).filter(Boolean)

    const { error: updateError } = await supabase
      .from('cms_projects')
      .update({
        hero_image_url: heroUrl ?? null,
        gallery_urls: galleryUrls,
      })
      .eq('slug', project.slug)

    if (updateError) {
      throw new Error(`Failed to update project ${project.slug}: ${updateError.message}`)
    }
  }

  console.log(`Uploaded ${uploads.length} files and updated ${projectUpdates.length} projects.`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
