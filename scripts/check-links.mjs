#!/usr/bin/env node
/**
 * Post-build link audit. Run after `npm run build`:  npm run check:links
 * - Every internal href in dist/ must resolve to a built page or file (and page links must end in "/").
 * - Every article (/side-hustles/<slug>/) must be linked from at least MIN_INBOUND other non-index pages.
 * Exits 1 on any failure.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const MIN_INBOUND = 2;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name === 'index.html') out.push(p);
  }
  return out;
}

const pages = new Map();
for (const file of walk(DIST)) {
  const rel = relative(DIST, file).replace(/index\.html$/, '');
  pages.set(`/${rel}`, readFileSync(file, 'utf8'));
}

const isIndex = (p) =>
  ['/', '/side-hustles/', '/side-hustles/categories/', '/guides/', '/start-here/'].includes(p) ||
  p.startsWith('/side-hustles/category/');
const posts = [...pages.keys()].filter((p) => p.startsWith('/side-hustles/') && !isIndex(p));

const inbound = new Map(posts.map((p) => [p, new Set()]));
const broken = [];
for (const [page, html] of pages) {
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (href.startsWith('//')) continue;
    const ok = pages.has(href) || (existsSync(join(DIST, href)) && statSync(join(DIST, href)).isFile());
    if (!ok) broken.push(`${page} -> ${href}`);
    if (inbound.has(href) && href !== page && !isIndex(page)) inbound.get(href).add(page);
  }
}

const weak = posts.filter((p) => inbound.get(p).size < MIN_INBOUND);
console.log(`Pages: ${pages.size}, articles: ${posts.length}`);
console.log(`Broken internal links: ${broken.length}`);
broken.slice(0, 50).forEach((b) => console.log(`  ${b}`));
console.log(`Articles linked from fewer than ${MIN_INBOUND} other non-index pages: ${weak.length}`);
weak.forEach((p) => console.log(`  ${p} (${inbound.get(p).size})`));
process.exit(broken.length || weak.length ? 1 : 0);
