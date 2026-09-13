# Make Money Optimizer

Practical side hustle and extra-income guidance for Canadians.  
**Domain:** [makemoneyoptimizer.com](https://makemoneyoptimizer.com)

Stack: **Astro + TypeScript + MDX**, static output suitable for Hostinger.

## Requirements

- Node.js **22.12+** (see `package.json` `engines`)
- npm 10+

## Setup

```bash
cd makemoneyoptimizer
npm install
```

## Local development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

## Build & preview

```bash
npm run build
npm run preview
```

Static files are emitted to `dist/`.

## Project map

| Path | Purpose |
|------|---------|
| `src/pages/` | Routes (Home, About, hubs, legal, contact) |
| `src/content/articles/` | MDX articles (side hustles & guides) |
| `src/components/` | Header, Footer, cards, ad/newsletter stubs |
| `src/layouts/` | Base + article layouts (SEO, JSON-LD) |
| `src/styles/global.css` | Design tokens + responsive styles |
| `public/` | `robots.txt`, favicon, OG image |
| `CONTENT.md` | Categories, monetization, SEO & retention notes |

## Hostinger static deploy (makemoneyoptimizer.com)

1. Run `npm run build` locally (or in CI).
2. Upload **contents** of `dist/` to your Hostinger site root (`public_html` or the domain’s document root).
3. Point the domain **makemoneyoptimizer.com** (and `www` if used) to that hosting account.
4. Enable **HTTPS** in Hostinger (Let’s Encrypt).
5. Confirm:
   - Homepage loads
   - `/side-hustles`, article URLs, `/guides`, legal pages
   - `/robots.txt` and `/sitemap-index.xml`
   - `/rss.xml`
6. Optional: set up a host-level redirect from `www` → apex (or vice versa) to match the canonical host in `astro.config.mjs` (`site: 'https://makemoneyoptimizer.com'`).

### Notes for Hostinger

- Build uses `format: 'directory'` so routes become folders with `index.html` (clean `/about`, `/side-hustles/...` URLs).
- A starter `public/.htaccess` is included for Apache (extensionless `.html` fallback if needed). Confirm HTTPS and domain in the Hostinger panel.
- No Node server is required at runtime; pure static hosting is enough.
- Before enabling ads/affiliates/newsletter collection, update Privacy/Terms and wire real providers.
- After upload, smoke-test `/sitemap-index.xml`, `/robots.txt`, and `/rss.xml`.

## Scripts

| Script | Command |
|--------|---------|
| `dev` | `astro dev` |
| `build` | `astro build` |
| `preview` | `astro preview` |

## Brand tone

Practical, clear, trustworthy. No fake earnings. No “guaranteed income.” Canadian-friendly angles.

## License

Content and code for the Make Money Optimizer project — all rights reserved unless otherwise noted.
