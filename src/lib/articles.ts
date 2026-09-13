import { getCollection } from 'astro:content';

export async function getPublishedArticles() {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return articles
    .map((entry) => ({
      ...entry,
      slug: entry.id.replace(/\.mdx?$/, ''),
    }))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function relatedArticles(
  all: Awaited<ReturnType<typeof getPublishedArticles>>,
  currentId: string,
  limit = 2
) {
  const current = all.find((a) => a.id === currentId);
  if (!current) return all.filter((a) => a.id !== currentId).slice(0, limit);

  const scored = all
    .filter((a) => a.id !== currentId)
    .map((a) => {
      const sharedTags = (a.data.tags || []).filter((t) =>
        (current.data.tags || []).includes(t)
      ).length;
      const sameCategory = a.data.category === current.data.category ? 1 : 0;
      return { a, score: sharedTags * 2 + sameCategory };
    })
    .sort((x, y) => y.score - x.score || y.a.data.pubDate.valueOf() - x.a.data.pubDate.valueOf());

  return scored.slice(0, limit).map((s) => s.a);
}
