// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://makemoneyoptimizer.com',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  build: {
    // directory → /about/index.html so Hostinger serves clean /about URLs
    format: 'directory',
  },
});
