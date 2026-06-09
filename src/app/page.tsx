import Section from '@/components/ui/section';
import Link from 'next/link';

import { projects } from '@/data/projects';

import ProjectCard from '@/components/ui/project-card';

export default function Home() {
  return (
    <div className="my-10">
      <Section heading="h1" title="Hey, I'm Hanzla!" className="mb-8">
        <div className="mb-2">
          <p>I'm a software engineer to be.</p>
          <div className="mt-4">
            <Link href="/about-me" className="border-foreground border-b">
              About Me
            </Link>
          </div>
        </div>
      </Section>
      <Section title="Writing" className="mb-8">
        <div className="mb-2">No posts yet.</div>
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
