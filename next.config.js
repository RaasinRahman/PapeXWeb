/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external domains here
    dangerouslyAllowSVG: true,
    remotePatterns: []
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
};

module.exports = nextConfig; 