import Section from '@/components/ui/section';
import { aboutMe } from '@/data/about-me';
import { projects } from '@/data/projects';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: aboutMe.name,
};

export default function Resume() {
  const { name, socials, emailAddress, experiences, educations, skills } = aboutMe;

  return (
    <Section parent={true} title={name}>
      <div className="mb-8">
        <ul className="list-inside list-disc marker:text-gray-300 dark:marker:text-gray-600">
          <li>
            Email:{' '}
            <Link href={`mailto:${emailAddress}`} className="underline">
              {emailAddress}
            </Link>
          </li>
          {socials.map((social) => (
            <li key={social.title}>
              {social.title}:{' '}
              <Link
                href={social.href}
                className="border-foreground border-b"
                target="_blank"
                rel="noopener norefferer"
              >
                {social.hrefDisplay ?? social.href}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Section
        title="Experience"
        headingClassName="border-b border-gray-200 dark:border-gray-700 pb-3"
        className="mb-8"
      >
        <ul>
          {experiences.map((experience) => (
            <li key={`${experience.role}-${experience.company}`} className="not-last:mb-6">
              <h3 className="mb-4 text-xl font-medium md:text-2xl">{experience.role}</h3>
              <Link
                href={experience.company.href}
                className="border-foreground border-b font-medium"
              >
                {experience.company.title}
              </Link>
              <p className="mb-4 italic">
                {new Date(experience.startDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}{' '}
                -{' '}
                {new Date(experience.endDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <ul className="list-inside list-disc marker:text-gray-300 dark:marker:text-gray-600">
                {experience.description?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Projects"
        headingClassName="border-b border-gray-200 dark:border-gray-700 pb-3"
        className="mb-8"
      >
        <ul>
          {projects
            .filter((p) => p.onCV)
            .map((project) => {
              const demoLink = project.links.find((l) => l.title === 'Demo');

              return (
                <li key={project.title} className="not-last:mb-6">
                  <h3 className="mb-4 text-xl font-medium md:text-2xl">
                    <Link
                      href={demoLink?.href ?? '#'}
                      className="hover:border-foreground border-b border-transparent"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <ul className="list-inside list-disc marker:text-gray-300 dark:marker:text-gray-600">
                    {project.description?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
        </ul>
      </Section>

      <Section
        title="Education"
        headingClassName="border-b border-gray-200 dark:border-gray-700 pb-3"
        className="mb-8"
      >
        <ul>
          {educations.map((education) => (
            <li key={education.degree}>
              <h3 className="mb-4 text-xl font-medium md:text-2xl">{education.degree}</h3>
              <p className="font-semibold">{education.instititue}</p>
              <p className="italic">
                {new Date(education.startDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                })}{' '}
                -{' '}
                {new Date(education.endDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                })}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills" headingClassName="border-b border-gray-200 dark:border-gray-700 pb-3">
        <ul className="list-inside list-disc marker:text-gray-300 dark:marker:text-gray-600">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span className="font-bold">{skill.name}</span>: {skill.description}
            </li>
          ))}
        </ul>
      </Section>
    </Section>
  );
}
