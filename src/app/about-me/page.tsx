import Section from '@/components/ui/section';
import { Metadata } from 'next';
import Link from 'next/link';

import { aboutMe } from '@/data/about-me';
import Markdown from '@/components/ui/markdown';

export const metadata: Metadata = {
  title: 'About Me',
};

export default function AboutMe() {
  const lastUpdated = new Date(aboutMe.lastUpdated).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <Section heading="h1" title="About Me" className="mb-8">
        <Markdown>{aboutMe.content.bio}</Markdown>
      </Section>
      <Section
        title="Contact"
        headingClassName="border-b border-gray-200 dark:border-gray-700 pb-3"
        className="mb-8"
      >
        <div>
          <p className="pb-4">Send me an email to say hi, or connect via the socials.</p>
          <ul className="list-inside list-disc marker:text-gray-300 dark:marker:text-gray-600">
            <li>
              Email: <span className="underline">{aboutMe.emailAddress}</span>
            </li>
            {aboutMe.socials.map((social) => (
              <li key={social.title}>
                <Link
                  href={social.href}
                  className="border-foreground border-b"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  {social.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section
        title="What I'm Doing Now"
        className="mb-8"
        headingClassName="border-b border-gray-200 dark:border-gray-700 pb-3"
      >
        <p className="mb-4 italic">Updated {lastUpdated}</p>
        <ul className="list-inside list-disc marker:text-gray-300 dark:marker:text-gray-600">
          {aboutMe.now.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section
        title="Miscellaneous"
        headingClassName="border-b border-gray-200 dark:border-gray-700 pb-3"
      >
        <ul className="list-inside list-disc marker:text-gray-300 dark:marker:text-gray-600">
          <li>
            <Link href="/resume" className="border-foreground border-b">
              Resume
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
