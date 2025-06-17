/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/app-ads.txt',
        destination: 'https://daro.so/app-ads.txt',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
