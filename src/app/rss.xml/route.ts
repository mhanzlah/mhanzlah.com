import { getPosts } from '@/lib/posts';

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
  const posts = getPosts();

  const rssItems = posts
    .map(
      (p) => `
        <item>
            <title>${escapeXml(p.frontmatter.title)}</title>
            <link>${SITE_URL}/posts/${p.frontmatter.slug}</link>
            <description>${escapeXml(p.frontmatter.excerpt)}</description>
            <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
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
