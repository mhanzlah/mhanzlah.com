import { Link } from './link';

type Content = { intro: string; bio: string };

export type AboutMe = {
  content: Content;
  lastUpdated: string;
  emailAddress: string;
  socials: Link[];
  now: string[];
};
