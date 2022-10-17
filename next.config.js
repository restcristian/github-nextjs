/** @type {import('next').NextConfig} */


const images = {
    domains: ['avatars.githubusercontent.com'],
};

const nextConfig = {
  images,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
