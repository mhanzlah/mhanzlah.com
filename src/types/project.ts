export type ProjectLink = {
  title: string;
  href: string;
};

export type Project = {
  title: string;
  subtitle: string;
  year: number;
  links: ProjectLink[];
  featured?: boolean;
};
