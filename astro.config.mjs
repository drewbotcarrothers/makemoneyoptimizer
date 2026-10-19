// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

const SITE = 'https://makemoneyoptimizer.com';

// Sitemap <lastmod>: taken from each article's own front matter (updatedDate, else pubDate).
// Listing pages (home, /side-hustles/, category pages) get the newest date of the articles they list.
// Pages without a content date (legal, about, contact) get no lastmod rather than a made-up one.
const ARTICLES_DIR = new URL('./src/content/articles/', import.meta.url);
const articleDates = new Map(); // slug -> { date, category }
for (const file of readdirSync(ARTICLES_DIR)) {
  if (!/\.mdx?$/.test(file)) continue;
  const fm = readFileSync(new URL(file, ARTICLES_DIR), 'utf8').split(/^---\s*$/m)[1] ?? '';
  const field = (name) => fm.match(new RegExp(`^${name}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, 'm'))?.[1];
  if (/^draft:\s*true/m.test(fm)) continue;
  const date = field('updatedDate') ?? field('pubDate');
  if (!date) continue;
  const category = fm.match(/^category:\s*["']?([a-z0-9-]+)/m)?.[1];
  articleDates.set(file.replace(/\.mdx?$/, ''), { date, category });
}
const newest = (filter) =>
  [...articleDates.values()].filter(filter).map((a) => a.date).sort().at(-1);

function lastmodFor(url) {
  const path = new URL(url).pathname;
  const article = path.match(/^\/side-hustles\/([^/]+)\/$/)?.[1];
  if (article && articleDates.has(article)) return articleDates.get(article).date;
  const category = path.match(/^\/side-hustles\/category\/([^/]+)\/$/)?.[1];
  if (category) return newest((a) => a.category === category);
  if (path === '/' || path === '/side-hustles/') return newest(() => true);
  return undefined;
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        if (lastmod) item.lastmod = new Date(`${lastmod}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
  build: {
    // directory → /about/index.html; Apache serves it at /about/ (trailingSlash: 'always'
    // keeps canonical URLs identical to the served URL, so no 301 to the slash version)
    format: 'directory',
  },
});
