import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://happymom7080.com';
  const paths = ['', '/about', '/services', '/pricing', '/testimonials', '/faq', '/guide', '/contact'];

  // 한국어(기본 언어)는 접두사 없이 생성
  const koSitemaps = paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  // 영어는 /en 접두사 유지
  const enSitemaps = paths.map((path) => ({
    url: `${baseUrl}/en${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 0.9 : 0.7,
  }));

  return [...koSitemaps, ...enSitemaps];
}
