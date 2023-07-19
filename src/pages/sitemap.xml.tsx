import { NextApiResponse } from 'next';
import * as fs from 'fs';

import { PROJECTS } from '@/lib/constants';
import { getBaseUrlWithLocale } from '@/lib/utils';

const Sitemap = () => {
  return null;
};

const generateSitemap = (allPaths: any[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
  const baseUrl = getBaseUrlWithLocale();

  const staticPaths = fs
    .readdirSync('./src/pages/')
    .filter((staticPage) => {
      return !['api', '_app.tsx', '_document.tsx', '404.tsx', '500.tsx', 'sitemap.xml.tsx'].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const dynamicPaths = PROJECTS.map(({ id }) => `${baseUrl}/projects/${id}`);

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = generateSitemap(allPaths);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
