# Make Money Optimizer — Content & Growth Notes

## Audience

Canadians earning (or exploring) extra income through **online and offline side hustles**.

## Tone

- Practical, clear, trustworthy
- No fake earnings, no “guaranteed income,” no scammy gold-rush vibes
- Canadian-friendly: CRA/admin pointers at a high level, local marketplaces, CAD mindset
- Disclose affiliates; separate education from promotion

## Content categories

### 1. Side Hustles (primary collection)

Idea-focused articles: what the hustle is, who it fits, costs, risks, starter plan.

Examples (v1 samples):

- Freelance writing
- Marketplace reselling
- Gig / delivery work
- Online tutoring (also tagged as guide)

Future ideas: virtual assistance, photography for local businesses, snow/lawn seasonal work, craft fairs, pet sitting, bilingual customer support.

### 2. Guides

Process and decision frameworks: how to evaluate an idea, track costs, set boundaries, package services.

### 3. Trust / policy pages

About, Contact, Affiliate Disclosure, Privacy, Terms — keep visible in footer for retention and SEO trust.

### 4. Hubs

- `/side-hustles` — full index + tag chips
- `/guides` — filtered guide landing + links back to hustles

## Sample articles (v1)

All marked `sample: true` in frontmatter:

| Slug | Category | Angle |
|------|----------|-------|
| `freelance-writing-canada` | side-hustle | Niches, clients, admin basics |
| `reselling-marketplace-canada` | side-hustle | Sourcing, fees, ethics |
| `gig-delivery-canada` | side-hustle | Real costs, safety, pilot plan |
| `online-tutoring-canada` | guide | Setup, boundaries, pilot |

## Future monetization hooks

### Ads

- Placeholder components: `AdSlot` (`data-ad-slot`) on home, hubs, and articles.
- Prefer fewer, well-placed units (below hero, in-article) to protect Core Web Vitals and trust.
- Update Privacy Policy before enabling ad cookies/networks.

### Affiliates

- Disclosure page + footer note already present.
- When adding product/tool links: label in-copy, prefer Canadian-relevant tools, never invent results.
- Track with UTM + affiliate dashboards later.

### Digital ebooks / products

- Natural lead-ins: “starter checklists,” tax-record templates, niche pitch swipe files.
- Soft CTA via newsletter stub (`Newsletter` component) — wire to ConvertKit/Buttondown/etc. later.
- Landing pages can live under `/guides` or a future `/resources` route.

## SEO notes

- **Titles:** `[Primary topic] for Canadians` / benefit + audience; layout appends `| Make Money Optimizer` when needed.
- **Meta descriptions:** ~150–160 chars, Canadian angle, no hype claims.
- **Canonical:** every page via `BaseHead`; `site` set in `astro.config.mjs`.
- **OG + Twitter:** title, description, image (`/og-default.svg`).
- **Sitemap:** `@astrojs/sitemap` → `/sitemap-index.xml`; linked from `robots.txt`.
- **robots.txt:** allow all + sitemap URL.
- **JSON-LD:** Organization + WebSite on all pages; Article on article pages; CollectionPage on hubs.
- **RSS:** `/rss.xml` for content discovery.
- **Internal linking:** articles cross-link; hubs link to each other; related/next-read blocks on articles.
- **URLs:** clean slugs under `/side-hustles/[slug]`; `trailingSlash: 'never'`.
- **CWV-friendly:** minimal JS (mobile nav only), single CSS file with tokens, SVG icons/images with intrinsic dimensions, static HTML output.

## Retention notes

- **Above the fold:** home hero answers what/why + dual CTAs (hustles / guides).
- **Sticky header** with clear primary nav for exploration.
- **Category hubs** + tag chips encourage multi-article sessions.
- **Related articles** + “next reads” on every article.
- **Newsletter stub** in footer-adjacent sections and end-of-article (disabled inputs until provider wired).
- **Trust signals:** Canadian focus, sample labeling, affiliate disclosure, About/Contact always reachable.
- **Avoid bounce walls:** no fake countdowns, no forced popups in v1.

## Editorial checklist (per article)

1. Canadian angle or CA admin note  
2. Who it fits / doesn’t fit  
3. Costs & trade-offs  
4. Ethical boundaries  
5. Internal links to 1–2 related pieces  
6. No guaranteed income language  
7. Frontmatter: title, description, category, tags, dates, `sample`/`featured` as needed  

## Ad slot inventory (placeholders)

| Location | Component usage |
|----------|-----------------|
| Home below hero | `AdSlot` |
| Side hustles hub | `AdSlot` |
| Guides hub | `AdSlot` |
| Article top / mid | `AdSlot` in `ArticleLayout` |

## AI agent discovery

- `/llms.txt` — site purpose, key URLs, citation guidance for agents
- `/posts.json` — machine-readable article index
- `/rss.xml` — feed for readers and tools
