import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogPage from '@/components/pages/blog/BlogPage';

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: 'Blog | LUCI',
  description: 'Updates, tutorials, and insights from the LUCI team.',
};

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
    <BlogPage
      posts={posts}
      allPosts={allPosts}
      currentPage={currentPage}
      totalPages={totalPages}
      translations={{ noPosts: 'No posts yet. Check back soon!' }}
    />
  );
}
