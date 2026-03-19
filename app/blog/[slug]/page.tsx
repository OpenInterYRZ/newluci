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

  const baseUrl = 'https://luci.ai';

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
    twitter: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      ...(post.frontmatter.image && {
        images: [`${baseUrl}${post.frontmatter.image}`],
      }),
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  const wordCount = post.content.split(/\s+/).length;

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    url: `https://luci.ai/blog/${slug}`,
    wordCount,
    author: {
      '@type': 'Person',
      name: post.frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LUCI',
      url: 'https://luci.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://luci.ai/logo.png',
      },
    },
    ...(post.frontmatter.image && {
      image: `https://luci.ai${post.frontmatter.image}`,
    }),
    ...(post.frontmatter.tags && {
      keywords: post.frontmatter.tags.join(', '),
      articleSection: post.frontmatter.tags[0],
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://luci.ai/blog/${slug}`,
    },
    inLanguage: 'en',
  };

  const breadcrumbJsonLd = {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.frontmatter.title,
        item: `https://luci.ai/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogLayout post={post} headings={headings}>
        <MDXRemote source={post.content} components={getMdxComponents()} />
      </BlogLayout>
    </>
  );
}
