/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.moralis.io',
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
    ],
  },
}

export default nextConfig
