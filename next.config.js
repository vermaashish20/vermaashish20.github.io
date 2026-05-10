/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that trailing slashes are handled correctly for GH Pages
  trailingSlash: true,
};

module.exports = nextConfig;
