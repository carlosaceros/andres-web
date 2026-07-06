const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/aprende/:slug*/',
        destination: '/es/blog/:slug*/',
        permanent: true,
      },
      {
        source: '/aprende/:slug*',
        destination: '/es/blog/:slug*/',
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = withNextIntl(nextConfig);