import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'
const basePath = isGitHubPages ? '/pc-water' : ''

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
