/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // 301s from the retired WordPress site's routes so links and SEO equity
    // don't dead-end. Remove an entry ONLY if that old slug is re-added as a
    // real route (a leftover redirect silently intercepts the new page).
    return [
      { source: '/storage', destination: '/services', permanent: true },
      { source: '/buildings', destination: '/services', permanent: true },
      { source: '/reviews', destination: '/', permanent: true },
      { source: '/photos', destination: '/gallery', permanent: true },
      { source: '/cartoons', destination: '/', permanent: true },
    ]
  },
  async headers() {
    // Security headers on every route (Strykora 2026 standard). CSP is left out
    // on purpose — a strict policy needs per-site testing against inline styles,
    // fonts, and Vercel Analytics; add it once validated.
    const securityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ]
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

module.exports = nextConfig
