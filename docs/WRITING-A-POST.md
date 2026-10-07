# Writing a blog post for makemoneyoptimizer.com

**This is the authoritative reference for adding or editing an article.** It is derived from the code
(`src/content.config.ts`, `src/lib/categories.ts`, `src/lib/articles.ts`, `src/layouts/ArticleLayout.astro`,
`src/components/*`, `astro.config.mjs`) and from the existing posts in `src/content/articles/`. If this file and
the code disagree, the code wins, and this file should be fixed in the same PR.

Related docs: [CONTENT.md](../CONTENT.md) (tone, SEO, editorial checklist),
[CONTENT-GENERATOR.md](./CONTENT-GENERATOR.md) (pillars × templates, what to write next),
[AFFILIATE-PROGRAMS.md](./AFFILIATE-PROGRAMS.md) and [AFFILIATES.md](../AFFILIATES.md) (program status),
[MONETIZATION.md](../MONETIZATION.md), [README.md](../README.md) (build, deploy, IndexNow).

---

## 1. Where the file goes and what the URL will be

- One file per post in **`src/content/articles/<slug>.mdx`**. Keep the folder flat (the loader is
  `glob('**/*.{md,mdx}')`, so a subfolder would leak into the URL). Every existing post is `.mdx`; use `.mdx`
  so you can import the components below.
- The **filename is the slug** (`src/lib/articles.ts` strips `.md`/`.mdx` from the entry id). There is no
  `slug` front-matter field.
- The post is served at **`/side-hustles/<slug>/`** (`src/pages/side-hustles/[slug].astro`). The canonical URL
  is `https://makemoneyoptimizer.com/side-hustles/<slug>/`.
- `astro.config.mjs` sets **`trailingSlash: 'always'`** and `build.format: 'directory'`. **Every internal
  link must end in `/`**: `[guide](/side-hustles/some-slug/)`, `/side-hustles/category/local-services/`,
  `/affiliate-disclosure/`. A link without the slash hits a redirect (or a 404 in dev).

### Slug naming

Lowercase, hyphenated, readable, and **ending in `-canada`** (every one of the existing posts does). Follow the
patterns already in use so sibling posts are predictable:

| Template (see CONTENT-GENERATOR.md) | Slug pattern | Example |
|---|---|---|
| T01 Beginner how-to | `<hustle>-side-hustle-canada` | `zapier-automation-side-hustle-canada` |
| T02 Cost & budget | `<hustle>-startup-costs-canada` | `zapier-automation-startup-costs-canada` |
| T04 First client / sale | `<hustle>-first-client-canada` (services), `<hustle>-first-sale-canada` (products/reselling/digital), `<hustle>-first-week-canada` (gig apps) | `ebook-publishing-first-sale-canada` |
| T07 Mistakes to avoid | `<hustle>-mistakes-canada` | `dog-walking-mistakes-canada` |
| T09 Pricing | `<hustle>-pricing-canada` | `house-cleaning-pricing-canada` |
| T13 30-day launch plan | `<hustle>-30-day-plan-canada` (listed in `EXTRA_MEMBERS` with role `plan`) | `dog-walking-30-day-plan-canada` |
| Tax / money topic | descriptive | `side-hustle-expense-deductions-canada` |

Do not rename a published file: the slug is the URL, and there is no redirect map.

---

## 2. Front matter

Schema: `src/content.config.ts`. The build fails if a required field is missing or a value is the wrong type.
**These are the only fields.** Do not add others (no `author`, `image`, `slug`, `faq`, `reviewedBy` …); Zod
strips unknown keys silently, so they would do nothing. The optional YouTube fields below are the opt-in for a
video on that post.

| Field | Type | Required? | Default | Notes |
|---|---|---|---|---|
| `title` | string | **Required** | — | The H1 and `<title>`. `BaseHead` appends ` \| Make Money Optimizer` automatically; don't add it. Match the search phrasing and name Canada, e.g. `"How to Start … in Canada (Step-by-Step)"`, `"How Much Does It Cost to Start … in Canada? (CAD Startup Budget)"`, `"How to Get Your First … Client in Canada"`. |
| `description` | string | **Required** | — | Meta description, OG/Twitter description, card text, RSS. Existing posts run **126–167 characters**; aim for ~150–160, Canadian angle, no hype. |
| `pubDate` | date (`YYYY-MM-DD`) | **Required** | — | Coerced with `z.coerce.date()`. Posts sort newest-first by this. |
| `updatedDate` | date | Optional | — | Set only when content materially changes. Drives "Updated …" and JSON-LD `dateModified`. |
| `updateNote` | string | Optional | — | Shown as `Updated <date>: <note>`; only rendered when `updatedDate` is also set. |
| `category` | enum | **Required** | — | Exactly one of the 9 slugs below (`CATEGORY_SLUGS` in `src/lib/categories.ts`). |
| `tags` | string[] | Optional | `[]` | Lowercase, hyphenated. Rendered as `#tag` chips linking to `/side-hustles/?tag=<tag>`; used (with category) to pick related posts. Reuse existing tags. |
| `sources` | `{title, url, publisher}[]` | Optional in schema, **required by policy** | `[]` | `url` must be a valid URL (build fails otherwise). Rendered by the layout as the "Which sources support this guide?" section. |
| `featured` | boolean | Optional | `false` | The homepage shows the 3 newest `featured: true` posts. Leave `false` unless asked. |
| `sample` | boolean | Optional | **`true`** | ⚠️ The schema default is `true`, which shows a "Sample article" badge. **Always write `sample: false`** for real posts (all current posts do). |
| `draft` | boolean | Optional | `false` | `true` hides the post from its page, hubs, related posts and RSS (`getPublishedArticles`). Note: `/posts.json` uses `getCollection` unfiltered, so drafts still appear there. Don't merge drafts to `main`. |
| `youtubeId` | string | Optional | — | 11-character YouTube id (`A-Za-z0-9_-`). Opt in to `VideoObject` JSON-LD. Place `<YouTubeEmbed id="…">` in the body with the same id. |
| `youtubeUploadDate` | string | Required if `youtubeId` is set | — | ISO 8601 datetime **with a numeric offset**, quoted so YAML does not coerce it. Example: `"2026-10-06T05:10:00-04:00"`. |
| `youtubeDuration` | string | Required if `youtubeId` is set | — | ISO 8601 duration, e.g. `PT8M16S`. |

### The 9 categories

| `category` | Hub URL | Covers |
|---|---|---|
| `gig-apps` | `/side-hustles/category/gig-apps/` | Delivery, rideshare, courier, grocery, odd-job apps |
| `local-services` | `/side-hustles/category/local-services/` | Snow, lawn, dog walking, cleaning, handyman, detailing, seasonal |
| `online-freelancing` | `/side-hustles/category/online-freelancing/` | Writing, design, bookkeeping, tutoring, ESL, VA |
| `digital-products` | `/side-hustles/category/digital-products/` | Printables, ebooks, Notion templates |
| `content-creation` | `/side-hustles/category/content-creation/` | YouTube, TikTok/Reels, newsletters, SEO blogging, UGC |
| `reselling-ecommerce` | `/side-hustles/category/reselling-ecommerce/` | Reselling, furniture flipping, Etsy, Shopify, POD, craft markets |
| `marketing-for-hire` | `/side-hustles/category/marketing-for-hire/` | Social media management, local SEO, affiliate marketing |
| `tech-ai` | `/side-hustles/category/tech-ai/` | No-code web design, site maintenance, Zapier, AI consulting |
| `taxes-money` | `/side-hustles/category/taxes-money/` | CRA reporting, GST/HST, deductions, records (also featured on `/guides/`) |

Adding a category means editing `src/lib/categories.ts` (slug + name/emoji/description/intro), not just the post.

### Copy-paste template

```mdx
---
title: "How to Start <Hustle> in Canada (Step-by-Step)"
description: "<~150–160 chars: what it is, who it suits, CAD costs, the Canadian rule to check. No income promises.>"
pubDate: 2026-10-02
# updatedDate: 2026-10-15
# updateNote: "Updated GST/HST section and sources"
category: local-services # gig-apps | local-services | online-freelancing | digital-products | content-creation | reselling-ecommerce | marketing-for-hire | tech-ai | taxes-money
tags: [local-services, seasonal]
featured: false
sample: false
sources:
  - title: "When to register for and start charging the GST/HST"
    url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html"
    publisher: "Canada Revenue Agency"
  - title: "Form T2125, Statement of Business or Professional Activities"
    url: "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2125.html"
    publisher: "Canada Revenue Agency"
---

import AffiliateLink from '../../components/AffiliateLink.astro';
import Faq from '../../components/Faq.astro';

<Answer-first opening paragraph: names the hustle and Canada, defines it, gives the CAD range, says who it suits.>

<Short second paragraph linking the sibling guides with trailing-slash URLs.>

## <Reader question with the hustle and Canada in it>?

<1–3 sentence answer that stands alone if quoted.>

### Step 1: <Action>

## What are the common mistakes …?

## Which tax rules apply to <hustle> in Canada?

This is not tax, legal, or insurance advice.

## Which guides sit next to <hustle> in Canada?

<Links to beginner guide / startup costs / first client siblings.>

<Faq
  items={[
    { question: "…?", answer: "…" },
    { question: "…?", answer: "…" },
    { question: "…?", answer: "…" },
    { question: "…?", answer: "…" },
  ]}
/>
```

Only import `AffiliateLink` if you use it. (MDX allows unused imports, and all existing posts import both.)

---

## 3. What the layout adds for you (don't write these in the MDX)

`ArticleLayout.astro` renders, in order:

1. Breadcrumbs (Home › Side Hustles › Category), "Sample article" badge if `sample` is true, the H1 from `title`.
2. Byline **"By Andrew"** (from `AUTHOR` in `src/lib/site.ts`, linking `/about/andrew/`) and the category link.
3. Published / Updated dates (+ `updateNote`).
4. AI-assistance note linking `/how-we-create-content/`.
5. Tag chips.
6. Ad slot (article top) → **your MDX body** → **Guide series box(es)** (see below) → **Sources** section (from `sources`) → **full `AffiliateDisclosure` block** (`id="affiliate-disclosure"`) at the **bottom of the article** (before the author box) → **Author box** → ad slot (article mid) → newsletter → **3 related posts** (same category scored first, then shared tags) with a "More in <Category>" link to the hub → trust note callout.
7. JSON-LD: `BlogPosting` (author Andrew, dates, keywords from `tags`, section from category) and `BreadcrumbList`. The `Faq` component adds `FAQPage` JSON-LD. When `youtubeId` is set, the layout also adds a `VideoObject` (name and description from the post, `thumbnailUrl`, `uploadDate`, `duration`, `embedUrl`, `contentUrl`). `<YouTubeEmbed>` does not emit schema.

So **do not** add in the body: an H1, a byline, dates, a "Sources" heading/list, an author bio, a "Related posts" block, a
guide-series list, an affiliate disclosure, ad slots, or JSON-LD.

### Guide series box (automatic)

`src/lib/series.ts` groups every post about one hustle into a series, and `GuideSeries.astro` renders a "Guide series"
box listing all siblings (Start here → Startup costs → First steps → 30-day plan → Pricing & pay → Mistakes to avoid → deep dives → comparisons →
seasonal spin-offs) on each of them. Membership is derived from the slug pattern in section 1, so a new
`<hustle>-side-hustle-canada` / `-startup-costs-canada` / `-first-client(s)|first-sale|first-week-canada` /
`-pricing-canada` / `-mistakes-canada` post joins its series with no extra work, **as long as `<hustle>` has a name in `SERIES_NAMES`**
(add one line there for a brand-new hustle). Off-pattern slugs (comparisons, seasonal posts, extra guides) go in
`EXTRA_MEMBERS`, which also lets a post sit in two series (e.g. `etsy-vs-shopify-canada`). Every `taxes-money`
post is automatically in the "Side hustle taxes in Canada" series, except pure admin how-tos listed in `NOT_TAX_SERIES`
(registering, banking, invoicing, contracts, insurance, bookkeeping tools), which sit only in the "Side hustle admin &
paperwork" (`business-admin`) series. The series box is navigation, not a substitute
for contextual links: still link siblings in the body (section 4).

---

## 4. Post structure

Follow the shape of the recent posts (e.g. `zapier-automation-side-hustle-canada.mdx`,
`zapier-automation-startup-costs-canada.mdx`, `zapier-automation-first-client-canada.mdx`,
`side-hustle-expense-deductions-canada.mdx`):

0. **Quick answer box (optional, used on the top posts).** Directly after the imports, a 3–4 bullet
   `<QuickAnswer>` summary (import `QuickAnswer from '../../components/QuickAnswer.astro'`). Leave blank lines
   inside the tags so the bullets render as Markdown. Every fact in it must already be in the body with its source;
   no new numbers. It can link 1–2 sibling posts.
1. **Answer first.** The first one or two sentences answer the title's question, name Canada, define the hustle,
   give the CAD range where relevant, and say who it suits. No "In this guide you'll learn…" openers.
2. **Sibling links right away.** A short paragraph pointing to the related beginner / cost / first-client post.
3. **Quick-facts table** (Markdown table) where useful, with a link beside every official number or rule.
4. **Question H2s.** Every `##` is a reader question that names the hustle and Canada (e.g. "Who does automation
   freelancing in Canada suit?"), followed immediately by a 1–3 sentence standalone answer. Use `### Step 1: …`
   H3s for steps (5+ steps for how-to posts), or `### Days 1 and 2: …` for plans. Don't skip heading levels.
5. **CAD budgets.** Money is in Canadian dollars. Shelf prices are "about $X–$Y", labelled as retail ranges to
   verify locally, not quotes. USD prices are stated as USD with an approximate CAD conversion, citing the Bank of
   Canada daily exchange rate and the date used.
6. **Worked examples are labelled.** Use a `### Illustrative example` heading (or "Illustrative example" in bold)
   and say it is a teaching sketch with assumed numbers, not a quote, forecast, average, or survey. Show the arithmetic.
7. **Comparison table** where two real options differ (lean vs equipped kit, per visit vs seasonal).
8. **Common mistakes** section.
9. **Canada tax section** for income-producing hustles (T2125, CPP, GST/HST small supplier, ITCs, provincial rates),
   each claim linked to CRA, plus "This is not tax, legal, or insurance advice."
10. **"Which guides sit next to …?"** H2 with 3–4 internal links.
11. **FAQ** via `<Faq items={[...]} />` as the last element. The component **throws (build fails) unless there are
    4–6 items**, renders its own H2 ("What are the common questions?"), and emits FAQPage JSON-LD. Answers are
    plain strings (no Markdown/links), must agree with the body, and should stand alone.

### Sources

- Every tax rule, rate, legal limit, fee, or platform requirement links a **primary source inline** (CRA,
  Government of Canada, the province, the platform's official Canadian page, the vendor's pricing page) **and** is
  listed in `sources` front matter.
- Only list sources you actually opened and that support a claim in the post. No placeholder, guessed, or
  hallucinated URLs. If a number could not be confirmed, say so and point to the page that publishes the live figure
  ("confirm the live rate").
- `publisher` is the organisation (e.g. "Canada Revenue Agency", "Bank of Canada", "Zapier").

### Internal linking

- Links use root-relative paths with a trailing slash: `/side-hustles/<slug>/`. Only link slugs that exist in
  `src/content/articles/` (check with `ls`), otherwise you ship a 404.
- Each post in a hustle cluster links its siblings: beginner guide (`-side-hustle-canada`) ↔ startup costs
  (`-startup-costs-canada`) ↔ first client/sale/week. Link 2–3 related hustles in nearby categories, and the
  relevant `taxes-money` guide where tax comes up.
- Every post should have **at least 3 contextual inbound links** from other posts' bodies (not counting the
  series box, related posts, or hubs). When you publish, add a sentence linking the new post from 2–3 existing
  siblings, usually in their "Which guides sit next to …?" section.
- The layout already links the category hub (byline and "More in <Category>"). Linking it in the body is optional;
  if you do, use `/side-hustles/category/<slug>/`.
- When you publish a new sibling, add a link to it from the existing posts in that cluster (CONTENT.md checklist item 9).
- Related posts at the bottom are automatic (category + shared `tags`), so pick tags deliberately.

---

## 5. Affiliate rules

- **Disclosure is handled by the layout.** Every post gets the full `AffiliateDisclosure` block at the
  **bottom of the article** only (after Sources, before the author box). There is **no** top-of-post affiliate
  note. **Do not import or place `<AffiliateDisclosure />` in MDX** (it would render twice and duplicate
  `id="affiliate-disclosure"`). The site footer and `/affiliate-disclosure/` page also disclose affiliates.
- **Affiliate links use `<AffiliateLink>`** only, never a raw merchant/tracking URL in Markdown:

  ```mdx
  <AffiliateLink program="freshbooks" label="FreshBooks" />
  <AffiliateLink program="amazon-ca" label="Shop tools on Amazon.ca" search="USB headset microphone" />
  ```

  `program` must be a key in `src/lib/affiliate-placeholders.ts` (the build type-checks it). Original keys:
  `amazon-ca`, `koho`, `freshbooks`, `wealthsimple-tax`, `turbotax-canada`, `shopify`, `canva`, `hostinger`,
  `gumroad`, `etsy`, `printful`. Added 2026-10-07 for comparisons and starter kits: `fiverr`, `wealthsimple`,
  `wave`, `quickbooks`, `hr-block`, `eq-bank`, `neo-financial`, `square`, `sumup`, `jobber`, `housecall-pro`,
  `calendly` (no affiliate program — plain link forever), `acuity`, `kit`, `beehiiv`, `wix`, `squarespace`,
  `namecheap`, `thinkific`, `teachable`, `podia`, `kajabi`, `payhip`, `zapier`, `make`, `descript`, `riverside`,
  `chit-chats`, `stallion-express`, `printify`, `ownr`, `vistaprint`, `grammarly`. Open the file for the current list.
  `search` is optional editorial context for Amazon.ca mentions; the live Amazon Associates entry link does not
  use it. Approved programs (currently `amazon-ca`) use the tracking href with
  `rel="sponsored nofollow noopener"` and `target="_blank"`. Unapproved programs render as ordinary merchant
  links (same label, no visible TODO marker, no sponsored attribute) — do not invent tracking URLs. When a
  program is approved, change the href and `approved` flag in `affiliate-placeholders.ts` only. Adding a new
  program means adding it there first.
- **Placement:** 1–3 affiliate links per post, inside the step or cost row where the reader is choosing that tool,
  never in the opening answer or as a footer dump. Affiliate status never changes the recommendation; mention free
  options and "you may not need this" honestly.
- **Ordinary (non-affiliate) external links** are plain Markdown links. Sources in the Sources section get
  `rel="noopener noreferrer"` from the component.
- Program status and fit: [AFFILIATES.md](../AFFILIATES.md), [docs/AFFILIATE-PROGRAMS.md](./AFFILIATE-PROGRAMS.md);
  content-moment → affiliate mapping in [CONTENT-GENERATOR.md](./CONTENT-GENERATOR.md#affiliate-mapping-quick-rules).

---

## 5a. Comparisons, starter kits & affiliate monetization

Comparison posts and "what you'll need" boxes are where readers choose a paid tool, so that is where affiliate
links belong. The rules in sections 5 and 6 still apply; this section adds the two components and how to use them.

### The two components

| Component | File | Use it for | Where it goes |
|---|---|---|---|
| `<ComparisonTable>` | `src/components/ComparisonTable.astro` | 2–5 paid tools/services that solve the same job (accounting apps, card readers, tax software, booking tools, hosts) | In a comparison or roundup post, right after the section that explains how you compared them. One or two per post. |
| `<StarterKit>` | `src/components/StarterKit.astro` | The handful of tools or gear a reader needs to start a hustle (software + physical kit) | Near the bottom of a how-to/pillar guide or a gear roundup, under its own question H2 (e.g. "What tools do you need to start … in Canada?"), before "Which guides sit next to…?" and the FAQ. Never at the top. |

```mdx
import ComparisonTable from '../../components/ComparisonTable.astro';
import StarterKit from '../../components/StarterKit.astro';

<ComparisonTable
  caption="FreshBooks vs Wave vs QuickBooks at a glance"
  checked="October 7, 2026"
  items={[
    {
      name: "Wave",
      program: "wave",
      bestFor: "Brand-new freelancers who want free invoicing",
      pricing: "Starter plan $0; Pro $X CAD/month",       // only if you opened the pricing page
      pricingUrl: "https://www.waveapps.com/pricing",    // and list it in `sources`
      canada: "Toronto-based; bills in CAD; GST/HST on invoices",
      pros: ["Free tier", "Unlimited invoices"],
      cons: ["Bank connections on paid plan only"],
    },
    // … 1–4 more rows
  ]}
/>

<StarterKit
  items={[
    { name: "Invoicing app", use: "Quotes, invoices with GST/HST, payment reminders", cost: "Free plan available", program: "wave", linkLabel: "Wave" },
    { name: "Label printer", use: "4×6 shipping labels", program: "amazon-ca", linkLabel: "Shop on Amazon.ca", search: "4x6 thermal label printer" },
    { name: "Business cards", use: "Leave-behinds at markets", optional: true, program: "vistaprint", linkLabel: "Vistaprint" },
  ]}
/>
```

- Both components link through `AffiliateLink`, so approved programs get `rel="sponsored nofollow noopener"` and
  unapproved ones render as plain merchant links. Neither renders a disclosure: the layout's bottom-of-post
  `AffiliateDisclosure` covers them. **No top-of-post affiliate note**, and don't import `AffiliateDisclosure`.
- `ComparisonTable` stacks into labelled cards on phones (≤720px); keep cells short (a phrase, 2–3 pros/cons).
- `StarterKit` renders no heading, so put it under a question H2 with a one- or two-sentence answer first.

### When to use which

- **Write a comparison post** when readers choose between 2–5 paid tools for a job our guides already send them to,
  and at least one has (or may get) an affiliate program. Slug: `<a>-vs-<b>[-vs-<c>]-canada` or
  `best-<tool-type>-<audience>-canada`. Check `ls src/content/articles | grep -- -vs-` and `rg -il "<tool>"
  src/content/articles` first so you extend an existing comparison instead of duplicating it.
- **Write an Amazon.ca gear roundup** for physical gear (pressure washers, label printers, ring lights). Our Amazon
  link is a single entry point (`https://link.amazon/B04lZw4kk`), not per-product, so write "what to look for +
  model types/specs + one or two `amazon-ca` links". No star ratings, no "best overall" claims based on testing.
- **Add a StarterKit** to a hustle guide only when the reader genuinely needs to buy or sign up for something
  to start. Skip it for gig apps where the app is free and the gear is a phone, and for pure tax/admin posts.
  3–6 items; mark nice-to-haves `optional: true`; include free options ("Free plan available", "Use what you own").

### Picking program keys

1. Use the key for the exact product the row describes (`wealthsimple-tax` for tax filing, `wealthsimple` for
   accounts/investing; `square` for Square POS, Appointments or Invoices; `shopify` for Shopify POS).
2. If the tool has no key, add one to `affiliate-placeholders.ts` first: `approved: false`, the plain official
   merchant homepage (no tracking parameters), and a `TODO-AFFILIATE` comment. Add it to the status tracker in
   [AFFILIATES.md](../AFFILIATES.md). Never invent or guess a tracking URL.
3. A tool with no program (e.g. `calendly`) still gets a key so the table can link it; leave it `approved: false`.
4. Physical gear uses `amazon-ca` with a descriptive `search` (editorial context only).

### Pricing and fee sourcing

- Every price, fee, rate, plan limit, or processing percentage comes from a page you **opened while writing**:
  the vendor's Canadian pricing page first, then its help centre. Put the URL in `pricingUrl`/`costUrl` **and**
  in the post's `sources`, and set `checked="<date>"` on the table.
- Say whether a price is CAD or USD. Convert USD only with the Bank of Canada daily rate and its date.
- If a page is geo-blocked, behind a login, or shows only "contact sales", write **"See current price"** or
  **"See site"** — never a remembered or estimated figure. Amazon.ca shelf prices change daily: use "See current
  price" in roundups.
- Promotional/intro prices must be labelled as such ("intro price, renews higher — check the renewal rate").
- Worked examples that combine prices (e.g. fees on a $100 sale) are labelled **Illustrative example**.

### Honesty rules for comparisons

- No "we tested", "hands-on", "in our experience", star ratings, or personal anecdotes. Compare published features,
  prices, Canadian availability, and fit for the reader's situation.
- Every comparison includes a free or cheaper option when one exists (spreadsheets, Canada Post, the free plan),
  and says when the reader doesn't need a paid tool yet.
- Affiliate status never changes the order, verdict, or pros/cons. Unapproved programs are written about exactly
  like approved ones.
- Cons must be real (pricing jumps, missing Canadian features, USD billing, lock-in). Don't write a con-free row.
- Name the decision rule ("pick X if…, Y if…") instead of a single winner.

### Disclosure placement

- The layout renders the full `AffiliateDisclosure` at the bottom of every article. That is the only disclosure.
  No banner, note, or "this post contains affiliate links" line at the top of the post or above a table.
- Programs with extra rules (e.g. Wealthsimple's affiliate guidelines) are handled when they are approved; check
  AFFILIATES.md before flipping `approved: true`.

### Internal linking between guides and comparison/roundup posts

- Every comparison/roundup links **2–4 hustle guides** that send readers to it (e.g. the card-reader comparison
  links the craft-market, farmers'-market and holiday-market guides) in the opening paragraphs and in "Which guides
  sit next to…?".
- Every guide with a StarterKit links the matching comparison or roundup in the sentence right before or after the
  box ("Compare the options in [Square vs SumUp vs Shopify POS](/side-hustles/…/)").
- Add new comparison slugs to `EXTRA_MEMBERS` in `src/lib/series.ts` when they clearly belong to one hustle series.
- `npm run check:links` must pass (every article needs inbound links from at least 2 other pages).

---

## 6. Trust rules (non-negotiable)

- **Byline is "Andrew" only**, and it comes from `src/lib/site.ts`. Never write the surname **"Carrothers"**
  anywhere on the site (it appears only in the GitHub org name, which is not site content).
- **Never claim "reviewed by Andrew"**, "fact-checked by Andrew", or similar. Andrew does not review each post (see
  `/how-we-create-content/`).
- **No personal anecdotes** in Andrew's voice ("When I started detailing…", "I tested…"), no invented case studies,
  quotes, testimonials, reader stories, or reviews.
- **No invented statistics or earnings.** No "you can make $X/month", averages, or survey-sounding numbers without a
  cited source. Use labelled illustrative arithmetic instead. No guaranteed-income language.
- **Canadian specifics only when sourced.** CRA rules (e.g. the GST/HST $30,000 small-supplier threshold, T2125,
  CPP for the self-employed, the taxi/ride-sharing GST/HST rule), provincial HST/PST rates, bylaws, and platform
  requirements must link the official page. Say "confirm locally" for municipal or provincial rules you can't pin down.
- Add "This is not tax, legal, or insurance advice." where the post discusses those topics.

---

## 7. Ads

Ad placement is the layout's job. `ArticleLayout` renders two `<AdSlot>` placeholders (article top, after the header;
article mid, after the author box). **Do not import or place `AdSlot` in MDX**; it isn't designed for in-body use.

---

## 8. Images

There is **no in-article image convention**: no post uses content images, and there is no `image` front-matter field. Every
article uses the site-wide OG image `/og-default.svg` in JSON-LD and social tags. Use tables and lists instead of
images. If a post ever genuinely needs one, put it in `public/` with explicit `width`/`height` and descriptive alt
text, and treat it as a code change to discuss in the PR.

A post may embed one of our own YouTube videos with `<YouTubeEmbed>` (`src/components/YouTubeEmbed.astro`). Import it
next to the other components, place it after the opening answer (not above it, and not as a top-of-post affiliate
note), and set `youtubeId`, `youtubeUploadDate`, and `youtubeDuration`. The component shows an i.ytimg.com thumbnail
and a play button, then swaps in a `youtube-nocookie.com` iframe on click. Give it a one-line caption, for example
`Prefer to watch? Here's the video version of this guide.`

---

## 9. Pre-publish checklist

- [ ] File is `src/content/articles/<slug>.mdx`; slug is lowercase, hyphenated, ends in `-canada`, follows the sibling pattern.
- [ ] Front matter: `title`, `description` (~150–160 chars), `pubDate`, `category` (one of the 9), `tags`, `sources`, **`sample: false`**, `featured: false` unless asked. No invented fields. A video uses only `youtubeId`, `youtubeUploadDate`, and `youtubeDuration`, and the embed id matches `youtubeId`.
- [ ] Opening sentences answer the title and name Canada. H2s are questions with a short standalone answer; steps are H3s.
- [ ] CAD figures are ranges or sourced; USD conversions cite the Bank of Canada rate and date; worked examples say **Illustrative**.
- [ ] Every rule/rate/fee links a primary source inline and is listed in `sources`. Every URL opened and checked.
- [ ] Internal links end in `/` and point to slugs that exist; siblings are linked both ways; the cluster's existing posts link the new one.
- [ ] Affiliate links only via `<AffiliateLink program="…">` with a valid program key; 1–3, placed at the decision point; no `<AffiliateDisclosure />` or `<AdSlot />` in the body.
- [ ] Comparison/roundup: `<ComparisonTable>`/`<StarterKit>` prices are sourced (`pricingUrl`/`costUrl` + `sources`) or say "See current price"; no "we tested"; a free option is mentioned; 2–4 guides link to it and it links back.
- [ ] `<Faq>` has 4–6 items consistent with the body.
- [ ] Trust: no "Carrothers", no "reviewed by Andrew", no anecdotes, no invented stats or earnings.
- [ ] `updatedDate` + `updateNote` set if materially editing an existing post.
- [ ] Quick checks:
  ```bash
  rg -n "Carrothers|reviewed by" src/content/articles/
  rg -n "\]\(/[^)]*[^/)]\)" src/content/articles/<slug>.mdx   # internal links missing a trailing slash
  rg -n "AffiliateDisclosure|AdSlot" src/content/articles/
  rg -in "reddit|subreddit|we tested|hands-on|casino|sportsbook" src/content/articles/<slug>.mdx
  ```
- [ ] **`npm run check:links`** passes after the build (no broken internal links; every article has 2+ inbound links).
- [ ] **`npx astro build` passes** (it validates the schema, the category enum, source URLs, and FAQ item counts), then spot-check `dist/side-hustles/<slug>/index.html` or `npm run preview`.

## 10. After deploy

1. `npm run build` and upload the contents of `dist/` to Hostinger (see README.md).
2. Confirm `https://makemoneyoptimizer.com/side-hustles/<slug>/` loads and appears in `/sitemap-index.xml`, `/rss.xml`, and its category hub.
3. Run **`npm run indexnow`** from the project root to submit the sitemap URLs to IndexNow (README.md → IndexNow).
