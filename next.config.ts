import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that trailing slashes are handled correctly for GH Pages
  trailingSlash: true,
};

export default nextConfig;
