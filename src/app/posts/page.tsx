import Section from '@/components/ui/section';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Posts',
};

export default function Posts() {
  const posts = getPosts();
  const groupedPosts = posts.reduce(
    (acc, post) => {
      const year = new Date(post?.frontmatter.date).getFullYear();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(post);

      return acc;
    },
    {} as Record<number, typeof posts>
  );

  const sortedYears = Object.keys(groupedPosts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Section parent={true} title="Posts">
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        sortedYears.map((year) => {
          const numPosts = groupedPosts[year].length;

          return (
            <div key={year} className="mb-6">
              <div className="mb-4 flex items-center gap-4">
                <h2 className="text-4xl font-bold">{year}</h2>
                <p className="rounded-full border p-1 text-xs">
                  <span className="font-bold">{numPosts}</span>{' '}
                  <span className="text-gray-600 dark:text-gray-300">
                    {numPosts > 1 ? 'posts' : 'post'}
                  </span>
                </p>
              </div>
              {groupedPosts[year].map(
                (p) =>
                  p && (
                    <Link
                      key={p.slug}
                      href={`/posts/${p.slug}`}
                      className="group mb-2 block rounded py-1 hover:bg-gray-200 dark:hover:bg-gray-900"
                    >
                      <p className="font-mono text-sm text-gray-600 group-hover:text-gray-700 dark:text-gray-400 group-hover:dark:text-gray-300">
                        {new Date(p.frontmatter.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: '2-digit',
                        })}
                      </p>
                      <p className="border-foreground w-max border-b font-medium">
                        {p.frontmatter.title}
                      </p>
                    </Link>
                  )
              )}
            </div>
          );
        })
      )}
    </Section>
  );
}
