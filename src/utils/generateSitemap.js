// Sitemap generation utility for MKT Rugs
// This should be run during build process or as a separate script

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.mktrugs.com';

// Define all your routes with their priorities and change frequencies
const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/about',
    priority: 0.9,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/products',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/gallery',
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/why-us',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/blog',
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/contact',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/enquiry',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  }
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const sitemapPath = path.join(__dirname, '../../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at:', sitemapPath);
}

// Generate sitemap if this file is run directly
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap, routes };