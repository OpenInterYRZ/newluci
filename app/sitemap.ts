import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import {getAllSlugs} from '@/lib/blog';

const baseUrl = 'https://luci.com';

const pages = [
  '',
  '/gradient-demo',
  '/light-demo',
  '/sre',
  '/privacy-policy',
  '/terms-of-service',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  );

  // Blog listing pages
  const blogListingEntries = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/blog`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/blog`])
      ),
    },
  }));

  // Individual blog post pages
  const slugs = getAllSlugs();
  const blogPostEntries = slugs.flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}/blog/${slug}`])
        ),
      },
    }))
  );

  return [...pageEntries, ...blogListingEntries, ...blogPostEntries];
}
