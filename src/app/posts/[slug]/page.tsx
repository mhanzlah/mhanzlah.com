import Markdown from '@/components/ui/markdown';
import Section from '@/components/ui/section';
import { getPost } from '@/lib/posts';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) return <p>Not found</p>;

  return (
    <>
      <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
        {new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        })}
      </p>
      <Section parent={true} title={post.frontmatter.title}>
        <Markdown h2Border={true}>{post.content}</Markdown>
      </Section>
    </>
  );
}
