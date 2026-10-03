# Agent notes (AGENTS.md; CLAUDE.md is a symlink to this file)

## Writing blog posts

Before adding or editing anything in `src/content/articles/`, read **[docs/WRITING-A-POST.md](docs/WRITING-A-POST.md)**. It is the authoritative reference (front-matter schema, the 9 category slugs, trailing-slash URLs, post structure, sources, `AffiliateLink` usage, trust rules such as byline "Andrew" only and no "reviewed by Andrew", and the pre-publish checklist). `npx astro build` must pass.

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
