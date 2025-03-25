/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages needs this when the site is in a subdirectory
  // basePath: '/partner.ubq.fi',
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
