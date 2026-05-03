import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://happymom7080.com';
  const locales = ['ko', 'en'];
  const paths = ['', '/about', '/services', '/pricing', '/testimonials', '/faq', '/guide', '/contact'];

  const sitemaps = locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    }))
  );

  return sitemaps;
}
