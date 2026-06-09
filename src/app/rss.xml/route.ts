import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

const SITE_URL = 'https://mhanzlah.vercel.app';

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const files = fs.readdirSync(POSTS_DIR);

  const posts = files.map((file) => {
    const filePath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');

    const { data } = matter(raw);

    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      slug: file.replace('.md', ''),
    };
  });

  const rssItems = posts
    .map(
      (post) => `
        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${SITE_URL}/posts/${post.slug}</link>
            <description>${escapeXml(post.excerpt)}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="utf-8" ?>
<rss version="2.0">
    <channel>
        <title>Muhammad Hanzla | RSS feed</title>
        <link>${SITE_URL}</link>
        <description>Personal blog RSS feed</description>
        ${rssItems}
    </channel>
</rss>`;

  return new Response(rss, { headers: { 'Content-type': 'application/rss+xml' } });
}
