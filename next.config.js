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
  }
}

module.exports = nextConfig 