/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://localhost', '127.0.0.1', 'https://clownfish-app-hrroz.ondigitalocean.app', 'https://hammerhead-app-ko42k.ondigitalocean.app', 'clownfish-app-hrroz.ondigitalocean.app', 'res.cloudinary.com']
  },
  output: 'standalone',
  reactStrictMode: true
};

module.exports = nextConfig;
