import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'PerplexityBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://happymom7080.com/sitemap.xml',
  };
}
