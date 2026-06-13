export type ProjectLink = {
  title: string;
  href: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description?: string[];
  year: number;
  links: ProjectLink[];
  featured?: boolean;
  onCV?: boolean;
};
