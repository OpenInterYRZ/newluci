import type {MetadataRoute} from 'next';
import {getAllSlugs} from '@/lib/blog';

const baseUrl = 'https://luci.com';

const pages = [
  '',
  '/privacy-policy',
  '/terms-of-service',
  '/careers',
  '/pricing',
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
