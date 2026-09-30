/**
 * Submit the built sitemap to IndexNow.
 * Run after a production deploy, once the key file is live:
 *   https://makemoneyoptimizer.com/4f67fb08e1e97facded63108c0e87d08.txt
 *
 * This script is not part of `astro build` and does not run during the build.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const HOST = 'makemoneyoptimizer.com';
const KEY = '4f67fb08e1e97facded63108c0e87d08';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const DIST = resolve('dist');

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
}

function readSitemap(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing ${filePath}. Run npm run build first.`);
  }
  return readFileSync(filePath, 'utf8');
}

const indexPath = resolve(DIST, 'sitemap-index.xml');
const indexXml = readSitemap(indexPath);
const sitemapUrls = extractLocs(indexXml).filter((url) => url.endsWith('.xml'));
const childFiles = sitemapUrls.length
  ? sitemapUrls.map((url) => {
      const name = url.slice(url.lastIndexOf('/') + 1);
      return resolve(DIST, name);
    })
  : [indexPath];

const urls = [...new Set(childFiles.flatMap((file) => extractLocs(readSitemap(file))))].filter(
  (url) => url.startsWith(`https://${HOST}`) && !url.endsWith('.xml'),
);

if (urls.length === 0) {
  console.error('No page URLs found in the built sitemap.');
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
};

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

const text = await response.text();
console.log(`IndexNow ${response.status} ${response.statusText} — ${urls.length} URL(s)`);
if (text) console.log(text);
if (!response.ok) process.exit(1);
