/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ['cdn.weatherapi.com'],
  },
};

module.exports = nextConfig;
