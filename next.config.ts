/** @type {import('next').NextConfig} */
module.exports = {
  images: { formats: ["image/avif", "image/webp"] },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
