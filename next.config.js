/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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