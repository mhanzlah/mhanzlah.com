import { AboutMe } from '@/types/about-me';

export const aboutMe: AboutMe = {
  name: 'Muhammad Hanzla',
  content: {
    intro: `AI student building practical full-stack systems & machine learning projects.`,
    bio: `
Hey, I'm Hanzla! Welcome to my corner of the internet.

I'm a BS Artificial Intelligence student at The Islamia University of Bahawalpur, with a strong focus on building **full-stack web applications** and **AI-powered systems**. I enjoy turning ideas into real, working products, from designing responsive frontends and scalable backends to experimenting with machine learning models that add intelligence to applications.

Most of my time goes into exploring modern web technologies, building personal projects, and understanding how software works end-to-end under the hood. I'm especially interested in the intersection of full-stack development and AI, where practical products meet real-world intelligence.

If you want to stay updated, you can subscribe to the [RSS feed](/rss.xml). I'm not always actively posting, but I'm consistently building, so there's usually something new to explore here.

`,
  },
  lastUpdated: '2026-06-09',
  emailAddress: 'sayhi.hanzla@gmail.com',
  socials: [
    { title: 'GitHub', href: 'https://github.com/mhanzlah', hrefDisplay: 'mhanzlah' },
    {
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/mhanzlah',
      hrefDisplay: 'mhanzlah',
    },
  ],
  now: ["Pursuing my Bachelor's degree in Artificial Intelligence", 'Tweaking this website'],
  experiences: [
    {
      role: 'Web Developer Intern',
      company: {
        href: 'https://www.linkedin.com/company/care-iub/',
        title: 'CARE',
      },
      startDate: 'July 2024',
      endDate: 'October 2024',
      description: [
        'Built interactive dashboards with charts for an energy monitoring system using Laravel.',
        'Contributed to both frontend and backend development across assigned modules in a team environment.',
        'Collaborated with the development team throughout the project lifecycle, participating in shared codebase and coordinated delivery.',
      ],
    },
    // {
    //   role: 'AI Backend Engineering Intern',
    //   company: {
    //     href: 'https://flyrank.ai',
    //     title: 'FlyRank AI',
    //   },
    //   startDate: 'July 2026',
    //   endDate: 'September 2026',
    //   description: [],
    // },
  ],
  educations: [
    {
      instititue: 'The Islamia University of Bahawalpur',
      degree: 'Bachelors of Science in Artificial Intelligence',
      startDate: 'August 2023',
      endDate: 'June 2027',
      description: [
        'Relevant coursework in Programming Fundamentals, Object Oriented Programming, Data Structures and Algorithms, Machine Learning, and Web Programming.',
      ],
    },
  ],
  skills: [
    {
      name: 'Languages',
      description: 'JavaScript, TypeScript, Python, HTML, CSS, SQL, PHP, Go, C++',
    },
    {
      name: 'Frameworks/Libraries',
      description: 'React, Tailwind, Express.js, Node.js, Next.js, Django, FastAPI, Laravel',
    },
    { name: 'Databases', description: 'MySQL, PostgreSQL, MongoDB' },
    { name: 'Tools', description: 'Git/GitHub, Docker, Linux' },
    {
      name: 'Soft skills',
      description:
        'Problem Solving, Team Collaboration, Communication, Time Management, Attention to Detail',
    },
  ],
};
