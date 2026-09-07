const fs = require('fs');
const path = require('path');

const env = process.argv[2] || 'development';

// Configuration based on environment
const config = {
  development: {
    baseUrl: 'http://localhost:3001',
    outputPath: './public/sitemap.xml'
  },
  production: {
    baseUrl: 'https://your-domain.com', // Update with your actual domain
    outputPath: './public/sitemap.xml'
  }
};

const { baseUrl, outputPath } = config[env];

// Define your routes
const routes = [
  { url: '/home', changefreq: 'daily', priority: '1.0' },
  { url: '/project', changefreq: 'weekly', priority: '0.8' },
  // Add more routes as needed
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to file
fs.writeFileSync(path.resolve(outputPath), sitemap);

console.log(`✅ Sitemap generated for ${env} environment at ${outputPath}`);
