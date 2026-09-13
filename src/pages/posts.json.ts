import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');
  const posts = articles
    .map((a) => ({
      title: a.data.title,
      description: a.data.description,
      slug: a.id,
      url: `https://makemoneyoptimizer.com/side-hustles/${a.id}`,
      pubDate: a.data.pubDate,
      category: a.data.category,
      tags: a.data.tags ?? [],
      featured: a.data.featured ?? false,
      sample: a.data.sample ?? false,
    }))
    .sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));

  return new Response(JSON.stringify({ site: 'https://makemoneyoptimizer.com', posts }, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
