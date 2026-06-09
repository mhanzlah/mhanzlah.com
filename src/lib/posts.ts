import { existsSync, readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

export function getPost(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  if (!existsSync(filePath)) return null;

  const raw = readFileSync(filePath, 'utf-8');

  const { data, content } = matter(raw);

  return { slug, frontmatter: data, content };
}

export function getPosts() {
  return readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.replace(/\.md$/, '');
      return getPost(slug);
    })
    .sort(
      (a, b) => new Date(b?.frontmatter.date).getTime() - new Date(a?.frontmatter.date).getTime()
    );
}

export function getPostSlugs() {
  return readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
