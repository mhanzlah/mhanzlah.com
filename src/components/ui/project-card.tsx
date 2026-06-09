import Link from 'next/link';

import { type Project as ProjectType } from '@/types/project';

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, subtitle, year, links } = project;
  const sourceLink = links.find((link) => link.title === 'Source');

  return (
    <article className="rounded border border-gray-300 p-4 dark:border-gray-600">
      <div>
        <p className="font-mono text-sm text-gray-700 dark:text-gray-400">{year}</p>
      </div>
      <div>
        <h3>
          <Link
            href={sourceLink?.href || '#'}
            target="_blank"
            rel="noopener norefferer"
            className="hover:border-foreground border-b border-transparent font-sans font-semibold"
          >
            {title}
          </Link>
        </h3>
      </div>
      <div className="mb-2">
        <p className="text-base text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
      <div className="flex gap-4">
        {links.map(({ href, title }, _) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener norefferer"
            className="rounded border border-gray-300 px-3 py-1 text-sm font-bold hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500"
          >
            {title}
          </Link>
        ))}
      </div>
    </article>
  );
}
