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
  // Applänkar för Mesa 11 (vänlänkar /buraco/v/… öppnar appen): Android och iOS hämtar filerna i
  // /.well-known/ och kräver JSON. apple-app-site-association har ingen filändelse.
  async headers() {
    return [
      {
        source: '/.well-known/:file(assetlinks.json|apple-app-site-association)',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
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
      // Spelet heter Glimmerbaggen: de gamla adresserna /gravspelet/… (i version 1.0 av appen, i
      // butikerna och i kontomejlen) skickas vidare till /glimmerbaggen/…
      {
        source: '/gravspelet',
        destination: '/glimmerbaggen',
        permanent: true,
      },
      {
        source: '/gravspelet/:path*',
        destination: '/glimmerbaggen/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
