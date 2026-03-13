import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily disabled - may cause issues on Vercel
  // reactCompiler: true,
  async rewrites() {
    const supportAdminUrl = process.env.SUPPORT_ADMIN_URL;
    if (!supportAdminUrl) return [];
    return [
      {
        source: '/admin/support-system/:path*',
        destination: `${supportAdminUrl}/admin/support-system/:path*`,
      },
    ];
  },
};

export default nextConfig;
