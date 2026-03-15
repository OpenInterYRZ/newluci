'use client';

import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import Footer from '@/components/Footer';
import type { BlogPost } from '@/lib/blog';

interface BlogPageProps {
  posts: BlogPost[];
  allPosts: BlogPost[];
  currentPage: number;
  totalPages: number;
  translations: {
    noPosts: string;
  };
}

export default function BlogPage({
  posts,
  allPosts,
  currentPage,
  totalPages,
  translations: t,
}: BlogPageProps) {
  const latestPosts = currentPage === 1 ? allPosts.slice(0, 4) : [];
  const featuredPost = latestPosts[0];
  const sidePosts = latestPosts.slice(1);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <header className="mb-12">
          <p className="text-sm text-text-2 mb-2">News &amp; Blogs</p>
          <h1 className="font-serif font-normal text-5xl sm:text-6xl lg:text-7xl text-text-0">
            Latest Articles
          </h1>
        </header>

        {featuredPost && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 mb-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto"
            >
              {featuredPost.frontmatter.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={featuredPost.frontmatter.image}
                  alt={featuredPost.frontmatter.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-grey-1" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                {featuredPost.frontmatter.tags[0] && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/90 text-white w-fit mb-4 uppercase tracking-wide">
                    {featuredPost.frontmatter.tags[0]}
                  </span>
                )}
                <h2 className="font-serif font-normal text-2xl sm:text-3xl text-white leading-tight mb-3">
                  {featuredPost.frontmatter.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs text-white font-semibold">
                    {featuredPost.frontmatter.author.charAt(0)}
                  </div>
                  <span>by {featuredPost.frontmatter.author}</span>
                  <span className="text-white/40">—</span>
                  <time dateTime={featuredPost.frontmatter.date}>
                    {new Date(featuredPost.frontmatter.date).toLocaleDateString('en', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>
            </Link>

            <div className="flex flex-col justify-center gap-6">
              {sidePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center gap-4"
                >
                  {post.frontmatter.image ? (
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-lg bg-grey-1 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
                      Article
                    </p>
                    <h3 className="text-sm font-medium text-text-0 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {post.frontmatter.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {posts.length === 0 ? (
          <p className="text-text-2 text-center">{t.noPosts}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <a
                key={p}
                href={`?page=${p}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  p === currentPage
                    ? 'bg-primary text-white'
                    : 'bg-grey-0 text-text-1 hover:bg-grey-1'
                }`}
              >
                {p}
              </a>
            ))}
          </nav>
        )}
      </section>
      <Footer />
    </>
  );
}
