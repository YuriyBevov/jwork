import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.dirname('styles')],
    cascade: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https', // Протокол для img.dmclk.ru
        hostname: 'img.dmclk.ru', // Домен img.dmclk.ru
        pathname: '/**', // Разрешить любые пути изображений с этого домена
      },
    ],
  },
};

export default nextConfig;
