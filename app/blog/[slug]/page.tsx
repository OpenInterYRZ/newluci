import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs, extractHeadings } from '@/lib/blog';
import { getMdxComponents } from '@/components/blog/MdxComponents';
import BlogLayout from '@/components/blog/BlogLayout';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const baseUrl = 'https://luci.com';

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
      ...(post.frontmatter.image && {
        images: [{ url: `${baseUrl}${post.frontmatter.image}` }],
      }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: {
      '@type': 'Organization',
      name: post.frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LUCI',
      url: 'https://luci.com',
    },
    ...(post.frontmatter.image && {
      image: `https://luci.com${post.frontmatter.image}`,
    }),
    inLanguage: 'en',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLayout post={post} headings={headings}>
        <MDXRemote source={post.content} components={getMdxComponents()} />
      </BlogLayout>
    </>
  );
}
