import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'localhost',
    'localhost:3000',
    '127.0.0.1',
    '127.0.0.1:3000',
    '0.0.0.0',
    '0.0.0.0:3000',
  ],
  async rewrites() {
    const rawBackendUrl = process.env.BACKEND_API_URL || 'http://127.0.0.1:8000';
    const backendUrl = rawBackendUrl.replace(/\/+$/, '');
    return [
      {
        source: '/backend-api/:path*',
        destination: `${backendUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
