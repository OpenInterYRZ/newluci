import type {MetadataRoute} from 'next';
import {getAllSlugs} from '@/lib/blog';

const baseUrl = 'https://luci.ai';

const pages = [
  '',
  '/features/memories',
  '/features/chat',
  '/features/integrations',
  '/use-cases',
  '/use-cases/managers',
  '/use-cases/knowledge-workers',
  '/use-cases/founders',
  '/use-cases/investors',
  '/use-cases/creators',
  '/use-cases/sales-leaders',
  '/use-cases/privacy-first',
  '/pricing',
  '/download',
  '/privacy-policy',
  '/terms-of-service',
  '/careers',
  '/contact-sales',
  '/changelog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const blogListingEntry = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
  };

  const slugs = getAllSlugs();
  const blogPostEntries = slugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...pageEntries, blogListingEntry, ...blogPostEntries];
}
