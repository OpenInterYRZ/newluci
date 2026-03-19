import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogPage from '@/components/pages/blog/BlogPage';

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore the latest updates, tutorials, and insights on AI agents, video understanding, and productivity from the LUCI team.',
  openGraph: {
    title: 'LUCI Blog — AI Agent Insights & Updates',
    description:
      'Explore the latest updates, tutorials, and insights on AI agents, video understanding, and productivity from the LUCI team.',
    url: '/blog',
  },
  twitter: {
    title: 'LUCI Blog — AI Agent Insights & Updates',
    description:
      'Explore the latest updates, tutorials, and insights on AI agents, video understanding, and productivity from the LUCI team.',
  },
  alternates: {
    canonical: '/blog',
  },
};

const blogJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'LUCI Blog',
    description:
      'Updates, tutorials, and insights on AI agents, video understanding, and productivity.',
    url: 'https://luci.ai/blog',
    publisher: {
      '@type': 'Organization',
      name: 'LUCI',
      url: 'https://luci.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://luci.ai/logo.png',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://luci.ai',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://luci.ai/blog',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LUCI',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'macOS',
    description:
      'An all-purpose AI agent that understands video, builds persistent memory, and automates execution.',
    url: 'https://luci.ai',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  },
];

export default async function Page({ searchParams }: Props) {
  const { page } = await searchParams;

  const allPosts = getAllPosts();
  const currentPage = Math.max(1, Number(page) || 1);
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const posts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      {blogJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BlogPage
        posts={posts}
        allPosts={allPosts}
        currentPage={currentPage}
        totalPages={totalPages}
        translations={{ noPosts: 'No posts yet. Check back soon!' }}
      />
    </>
  );
}
