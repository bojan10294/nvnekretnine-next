/** @type {import('next').NextConfig} */
// Netlify's IPX/Lambda layer can fail to load sharp/libvips (libvips-cpp.so.42).
// Cloudinary URLs already support on-the-fly transforms; skip /_next/image on Netlify.
const isNetlify = process.env.NETLIFY === 'true';

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
    unoptimized: isNetlify,
  },
  output: 'standalone',
  reactStrictMode: true
};

module.exports = nextConfig;
