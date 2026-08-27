import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily disabled - may cause issues on Vercel
  // reactCompiler: true,
  async rewrites() {
    const supportAdminUrl = process.env.SUPPORT_ADMIN_URL;
    if (!supportAdminUrl) return [];
    return [
      {
        source: '/admin/support-system',
        destination: `${supportAdminUrl}/admin/support-system`,
      },
      {
        source: '/admin/support-system/:path+',
        destination: `${supportAdminUrl}/admin/support-system/:path+`,
      },
    ];
  },
  // Produktsidan vilande tills vidare (företaget tonas ner). Slå på igen
  // genom att ta bort denna redirect.
  async redirects() {
    return [
      {
        source: '/produkter',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
