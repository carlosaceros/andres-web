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
      // Legacy /aprende/* → /es/blog/*
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
      // Legacy procedure pages (404 fix)
      {
        source: '/lipofilling-celulas-madre-bogota/',
        destination: '/es/procedimientos/lipofilling-celulas-madre/',
        permanent: true,
      },
      {
        source: '/lipofilling-celulas-madre-bogota',
        destination: '/es/procedimientos/lipofilling-celulas-madre/',
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = withNextIntl(nextConfig);