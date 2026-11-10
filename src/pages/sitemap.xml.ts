import type { APIRoute } from 'astro';
import { routes, pathFor, type View } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const urls = (['en', 'zh'] as const).flatMap((locale) =>
    (Object.keys(routes) as View[]).map(
      (view) => `<url><loc>${new URL(pathFor(view, locale), site)}</loc></url>`,
    ),
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    },
  );
};
