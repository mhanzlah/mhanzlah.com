import { Link } from './link';

type Content = { intro: string; bio: string };

type Experience = {
  role: string;
  company: Link;
  startDate: string;
  endDate: string;
  description?: string[];
};

type Education = {
  instititue: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string[];
};

type Skill = {
  name: string;
  description: string;
};

export type AboutMe = {
  name: string;
  content: Content;
  lastUpdated: string;
  emailAddress: string;
  socials: Link[];
  now: string[];
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
};
