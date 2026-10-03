// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://makemoneyoptimizer.com',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  build: {
    // directory → /about/index.html; Apache serves it at /about/ (trailingSlash: 'always'
    // keeps canonical URLs identical to the served URL, so no 301 to the slash version)
    format: 'directory',
  },
});
