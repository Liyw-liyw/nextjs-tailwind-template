const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'experimental-serverless-trace',
  reactStrictMode: true,
  images: {
    domains: [
      'img.rarible.com',
      'rarible.mypinata.cloud',
      'img.cryptokitties.co'
    ]
  },
  i18n,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
