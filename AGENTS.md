# Agent notes (AGENTS.md; CLAUDE.md is a symlink to this file)

## Writing blog posts

Before adding or editing anything in `src/content/articles/`, read **[docs/WRITING-A-POST.md](docs/WRITING-A-POST.md)**. It is the authoritative reference (front-matter schema, the 9 category slugs, trailing-slash URLs, post structure, sources, `AffiliateLink` usage, trust rules such as byline "Andrew" only and no "reviewed by Andrew", and the pre-publish checklist). `npx astro build` must pass.

## Publishing pace (standing rule, 2026-10-28)

The 2026-10-28 Search Console review found a young domain with about 468 sitemap URLs and most inspected pages still "Discovered - currently not indexed" or unknown to Google. Crawl attention sits on a handful of hubs and seasonal guides. Until that backlog clears, **deepen existing indexed or near-indexed posts** (contextual internal links, fresher CRA notes, tables, and Q&A) instead of publishing large batches of new thin guides. Do not mass-publish doorway pages to force indexing.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
