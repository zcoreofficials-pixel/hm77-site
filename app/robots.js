export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/go', '/play'],
    },
    sitemap: 'https://hm-77.com/sitemap.xml',
  }
}
