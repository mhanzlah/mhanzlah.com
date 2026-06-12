import Section from '@/components/ui/section';
import { Metadata } from 'next';

import { projects } from '@/data/projects';

import ProjectCard from '@/components/ui/project-card';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <div>
      <Section parent={true} title="Projects">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
