import { type Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'mhanzlah.com',
    subtitle: 'Source of this site',
    year: 2026,
    links: [
      {
        title: 'Source',
        href: 'https://github.com/mhanzlah/mhanzlah.com',
      },
    ],
  },
  {
    title: 'Blogspot',
    subtitle: 'A minimal blogs sharing site',
    year: 2026,
    links: [
      {
        title: 'Demo',
        href: 'https://blogspott.vercel.app',
      },
      {
        title: 'Source',
        href: 'https://github.com/mhanzlah/blogspot',
      },
    ],
    featured: true,
  },
  {
    title: 'Yecommerce',
    subtitle: 'A simple e-commerce shop',
    year: 2026,
    links: [
      {
        title: 'Demo',
        href: 'https://yecommerce.vercel.app',
      },
      {
        title: 'Source',
        href: 'https://github.com/mhanzlah/yecommerce',
      },
    ],
    featured: true,
  },
  {
    title: 'Anonymous Chess',
    subtitle: 'Play chess with strangers',
    year: 2026,
    links: [
      {
        title: 'Demo',
        href: 'https://anychess.vercel.app',
      },
      {
        title: 'Source',
        href: 'https://github.com/mhanzlah/anychess',
      },
    ],
    featured: true,
  },
];
