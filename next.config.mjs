/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Enable compression
  compress: true,

  // Optimize images
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirects for common typos/variations
  async redirects() {
    return [
      {
        source: '/r-value',
        destination: '/what-is-r-value',
        permanent: true,
      },
      {
        source: '/calculator',
        destination: '/r-value-calculator',
        permanent: true,
      },
      {
        source: '/climate-zones',
        destination: '/climate-zone-map',
        permanent: true,
      },
    ]
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['react-markdown', 'remark-gfm'],
  },
}

export default nextConfig
