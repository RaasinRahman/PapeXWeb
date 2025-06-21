import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: false,
  },
  eslint: {
    // Don't run ESLint during build, we'll handle it separately
    ignoreDuringBuilds: true,
  },
  // Remove trailing slash to prevent routing issues
  trailingSlash: false,
};

export default nextConfig;
