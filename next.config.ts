import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      type: 'asset/resource',
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.glb': {
        loaders: ['file-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
