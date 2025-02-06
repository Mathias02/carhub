/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    
    images: {
        domains: ["localhost"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'localhost',
            port: '4000',
            pathname: '/cars/',
          },
        ],
      },
};

export default nextConfig;
