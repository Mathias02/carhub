/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
      return [
        {
          source: "/api/cars/:path*",
          destination: "https://serverpart.vercel.app/api/cars",
        },
      ];
    },

  };

export default nextConfig;
