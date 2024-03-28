/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      //Rewrites all API requests to the Express server
      {
        source: "/ap1/v1/:path*",
        destination: "http://localhost:5001/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
