/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      'clownfish-app-hrroz.ondigitalocean.app',
      'hammerhead-app-ko42k.ondigitalocean.app',
      'nvnekretnine.rs',
      'res.cloudinary.com',
    ],
  },
  output: 'standalone',
  reactStrictMode: true
};

module.exports = nextConfig;
