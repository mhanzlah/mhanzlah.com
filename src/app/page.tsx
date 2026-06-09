import Section from '@/components/ui/section';
import Link from 'next/link';

import { projects } from '@/data/projects';

import ProjectCard from '@/components/ui/project-card';
import Markdown from '@/components/ui/markdown';
import { aboutMe } from '@/data/about-me';
import { getPosts } from '@/lib/posts';

export default function Home() {
  const posts = getPosts().slice(0, 6);

  return (
    <div className="md:text-lg">
      <Section heading="h1" title="Hey, I'm Hanzla!" className="mb-8">
        <div className="mb-2">
          <Markdown>{aboutMe.content.intro}</Markdown>
          <div className="mt-4">
            <Link href="/about-me" className="border-foreground border-b">
              About Me
            </Link>
          </div>
        </div>
      </Section>
      <Section title="Posts" className="mb-8">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map(
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
          )
        )}
      </Section>
      <Section title="Projects">
        <div className="mb-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => p.featured)
            .slice(0, 6)
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </Section>
    </div>
  );
}
