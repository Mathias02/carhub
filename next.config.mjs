/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    
    images: {
        domains: ["localhost"],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '4000',
            pathname: '/cars/',
          },
        ],
      },
};

export default nextConfig;
