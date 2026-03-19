import type { BlogPost, Heading } from '@/lib/blog';
import { getAllPosts } from '@/lib/blog';
import TableOfContents from './TableOfContents';
import BlogCard from './BlogCard';
import CtaBanner from '@/components/CTA/CtaBanner';


interface BlogLayoutProps {
  post: BlogPost;
  headings: Heading[];
  children: React.ReactNode;
}

export default function BlogLayout({ post, headings, children }: BlogLayoutProps) {
  const dateFormatted = new Date(post.frontmatter.date).toLocaleDateString(
    'en',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const authorInitial = post.frontmatter.author.charAt(0).toUpperCase();

  // Get latest posts excluding current
  const latestPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        {/* Title block */}
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center pt-32">
          <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-text-0 leading-tight mb-6">
            {post.frontmatter.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm text-text-2 mb-10">
            <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
              {authorInitial}
            </div>
            <span className="font-medium text-text-1">by {post.frontmatter.author}</span>
          </div>
        </div>

        {/* Cover image — below title, above content */}
        {post.frontmatter.image && (
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        )}

        {/* Content + TOC */}
        <div className="relative max-w-[720px] mx-auto px-4 sm:px-6 pb-20">
          {headings.length > 0 && (
            <aside className="hidden xl:block absolute left-full ml-16 top-0 w-56">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}
          <div className="min-w-0">{children}</div>
        </div>
      </article>

      {/* CTA banner */}
      <CtaBanner />

      {/* Latest articles */}
      {latestPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="font-serif font-normal text-2xl sm:text-3xl text-text-0 mb-10 text-center">
            Latest articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}


    </>
  );
}
