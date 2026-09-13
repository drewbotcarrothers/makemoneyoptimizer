import type { APIRoute } from 'astro';
import { getPublishedArticles } from '../lib/articles';
import { SITE } from '../lib/site';

export const GET: APIRoute = async () => {
  const articles = await getPublishedArticles();
  const items = articles
    .map((a) => {
      const link = `${SITE.url}/side-hustles/${a.slug}`;
      return `
    <item>
      <title><![CDATA[${a.data.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${a.data.pubDate.toUTCString()}</pubDate>
      <description><![CDATA[${a.data.description}]]></description>
      <category>${a.data.category}</category>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name}</title>
    <link>${SITE.url}</link>
    <description>${SITE.description}</description>
    <language>en-ca</language>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
