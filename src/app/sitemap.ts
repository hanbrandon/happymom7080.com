import { MetadataRoute } from 'next';
import { BASE_URL, languageAlternates } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/about', '/services', '/pricing', '/testimonials', '/faq', '/guide', '/contact'];
  const lastModified = new Date();

  const koSitemaps = paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
    alternates: {
      languages: languageAlternates(path),
    },
  }));

  const enSitemaps = paths.map((path) => ({
    url: `${BASE_URL}/en${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 0.9 : 0.7,
    alternates: {
      languages: languageAlternates(path),
    },
  }));

  return [...koSitemaps, ...enSitemaps];
}
