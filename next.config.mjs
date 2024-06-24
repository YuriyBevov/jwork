import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.dirname('styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
        pathname: '/assets/images/**',
      },
    ],
  },
};

export default nextConfig;
