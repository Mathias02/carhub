/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
      return [
        {
          source: "/api/cars/:path*",
          destination: "http://localhost:3200/api/cars/:path*",
        },
      ];
    },

  };

export default nextConfig;
