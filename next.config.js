/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.shopify.com',
      'cdn.shopifycdn.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.shopify.com',
      },
      {
        protocol: 'https',
        hostname: '**.shopifycdn.net',
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['gray-matter']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('gray-matter')
    }
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false
      }
    }
    return config
  }
}

module.exports = nextConfig 