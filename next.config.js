/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external domains here
    dangerouslyAllowSVG: true,
    remotePatterns: [],
    unoptimized: true,
  },
  // Configure webpack to handle files from outside the public directory
  webpack: (config, { isServer }) => {
    // Add a rule for image files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
  eslint: {
    // Don't run ESLint during build, we'll handle it separately
    ignoreDuringBuilds: true,
  },
  // Disable image optimization
  experimental: {
    // Add any experimental features here
  },
  // Force a trailingSlash to help with relative paths
  trailingSlash: true,
};

module.exports = nextConfig; 