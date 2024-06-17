import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.dirname('styles')],
  },
};

export default nextConfig;
