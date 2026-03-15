import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  const dateFormatted = new Date(post.frontmatter.date).toLocaleDateString(
    'en',
    { year: 'numeric', month: 'short', day: 'numeric' }
  );

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {post.frontmatter.image && (
        <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.frontmatter.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2 py-0.5 rounded-full bg-grey-0 text-text-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-serif font-normal text-xl text-text-0 mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.frontmatter.title}
      </h3>
      <p className="text-sm text-text-2 mb-4 line-clamp-2">
        {post.frontmatter.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-text-3">
        <time dateTime={post.frontmatter.date}>{dateFormatted}</time>
        <span className="w-1 h-1 rounded-full bg-text-3" />
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
