/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    
    images: {
        domains: ["localhost"],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '4000',
            pathname: '/cars/',
          },
        ],
      },
};

export default nextConfig;
