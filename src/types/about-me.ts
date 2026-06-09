import { Link } from './link';

export type AboutMe = {
  content: { intro: string; bio: string };
  lastUpdated: string;
  emailAddress: string;
  socials: Link[];
  now: string[];
};
