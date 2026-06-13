import { type Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'mhanzlah.com',
    subtitle: 'The source of this website',
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
    subtitle: 'A blogs sharing website',
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
    onCV: true,
    description: [
      'Developed a full-stack blogging platform with complete CRUD functionality for posts.',
      'Implemented secure JWT-based authentication with protected routes across the application.',
      'Built a user profile system allowing each user to view and manage their own blog posts.',
      'Integrated a responsive frontend with dynamic post rendering and seamless page navigation.',
    ],
  },
  {
    title: 'Yecommerce',
    subtitle: 'An e-commerce shop',
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
    onCV: true,
    description: [
      'Building a full-stack e-commerce platform supporting both guest and authenticated order placement via COD.',
      'Implemented secure authentication alongside complete product CRUD with user-submitted reviews.',
      'Integrated real-time order status notifications keeping users updated across placed, pending, and shipped states.',
    ],
  },
  {
    title: 'Anonymous Chess',
    subtitle: 'Web-based chess',
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
    onCV: true,
    description: [
      'Built a real-time multiplayer chess game with WebSocket connections for live move synchronization between two players.',
      'Implemented an anonymous matchmaking system that pairs available players into live game sessions, with spectator support for additional users.',
      'Developing in-game chat functionality to enable communication between matched players during active games.',
    ],
  },
  {
    title: 'Code Crafter',
    subtitle: 'An extension for React & Vite',
    year: 2024,
    links: [{ title: 'Source', href: 'https://github.com/mhanzlah/code-crafter' }],
  },
  {
    title: 'Express Builder',
    subtitle: 'An extension for express.js',
    year: 2024,
    links: [{ title: 'Source', href: 'https://github.com/mhanzlah/express-builder' }],
  },
  {
    title: 'Sidcup',
    subtitle: 'A simple website',
    year: 2024,
    links: [
      { title: 'Demo', href: 'https://mhanzlah.github.io/sidcup' },
      { title: 'Source', href: 'https://github.com/mhanzlah/sidcup' },
    ],
  },
];
