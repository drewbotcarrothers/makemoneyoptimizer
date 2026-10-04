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
| `docs/WRITING-A-POST.md` | **How to write a blog post**: file/slug, front matter, structure, affiliates, trust rules, checklist |

## Writing a post

Start with **[docs/WRITING-A-POST.md](docs/WRITING-A-POST.md)**, the authoritative reference for adding or editing an article (front-matter fields, the 9 categories, post structure, sources, affiliate and trust rules, pre-publish checklist, and IndexNow after deploy).

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

## Free tax checklist (lead magnet)

The checklist content lives in `src/lib/tax-checklist.ts` (items + canada.ca sources) and renders at
`/free-side-hustle-tax-checklist/`. The PDF in `public/downloads/canadian-side-hustle-tax-checklist.pdf` is a print of
that page (print CSS hides the site chrome). After editing the checklist, regenerate the PDF:

```bash
npm run build && npx astro preview --port 4321 &
google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/downloads/canadian-side-hustle-tax-checklist.pdf \
  http://localhost:4321/free-side-hustle-tax-checklist/
npm run build   # so dist/ picks up the new PDF
```

Re-check the CPP figures, tax brackets, and filing dates against the cited canada.ca pages every January and update
`CHECKED_ON`. There is no email capture yet; the CTA (`src/components/TaxChecklistCta.astro`) links straight to the
page and the PDF.

## Scripts

| Script | Command |
|--------|---------|
| `dev` | `astro dev` |
| `build` | `astro build` |
| `preview` | `astro preview` |
| `indexnow` | `node scripts/indexnow.mjs` |

## IndexNow (after you deploy)

IndexNow tells participating search engines which URLs changed. The build does **not** submit anything.

1. Run `npm run build`.
2. Upload the contents of `dist/` to Hostinger, including the key file
   `4f67fb08e1e97facded63108c0e87d08.txt` (it is copied from `public/` during the build).
3. Confirm `https://makemoneyoptimizer.com/4f67fb08e1e97facded63108c0e87d08.txt` loads and shows the key.
4. From the project directory, run `npm run indexnow`.

The script reads `dist/sitemap-index.xml` (and the sitemap files it lists), collects the page URLs, and POSTs them to `https://api.indexnow.org/indexnow`. Run it again after later deploys when you want those URLs recrawled.

## Brand tone

Practical, clear, trustworthy. No fake earnings. No “guaranteed income.” Canadian-friendly angles.

## License

Content and code for the Make Money Optimizer project — all rights reserved unless otherwise noted.
