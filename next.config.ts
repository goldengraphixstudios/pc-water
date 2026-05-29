import path from 'node:path'
import { fileURLToPath } from 'node:url'

import type { NextConfig } from 'next'

const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'
const basePath = isGitHubPages ? '/pc-water' : ''
const configDir = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  basePath,
  turbopack: {
    root: configDir,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old /about-us URL that Google crawled — redirect permanently to /about
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },
    ]
  },
}

export default nextConfig
