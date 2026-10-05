# Content Generator — 100 Pillars × 20 Templates

**Master system for Make Money Optimizer** (~2,000 deep how-to posts wired to affiliates).

Do **not** brainstorm titles first. Generate ideas with:

```
Pillar × Template × Keyword proof × Affiliate slot = Publishable post
```

| Math | Value |
|------|-------|
| Pillars | 100 |
| Templates | 20 |
| Theoretical capacity | **2,000** |
| Filter | Only ship posts that pass the depth checklist + have search proof |

Sheet-ready CSVs live in `/content-planning/`:

- `pillars-100.csv` (**canonical** pillar list)
- `templates-20.csv`
- `generator-sample-ideas.csv` (60 example titles from the first 3 High pillars × all 20 templates)
- `batch-1-outlines-50.csv` (top 10 High × T01/T02/T03/T04/T20)

**Writing the post itself?** Follow [WRITING-A-POST.md](./WRITING-A-POST.md), the authoritative reference for front matter, structure, sources, affiliate and trust rules, and the pre-publish checklist. This file decides *what* to write; that file says *how*.

Related: [WRITING-A-POST.md](./WRITING-A-POST.md), [AFFILIATE-PROGRAMS.md](./AFFILIATE-PROGRAMS.md), [MONETIZATION.md](../MONETIZATION.md), ideas sheet seed `online-side-hustle-ideas.csv`.

---

## Post template (use this shape)

Question title that matches how someone in Canada searches. The layout adds the byline (“By Andrew”), Published date, Updated date when `updatedDate` is set, and `updateNote` as “Updated [date]: [note]”.

1. **No in-body disclosure.** The article layout renders the full `AffiliateDisclosure` block once at the **bottom of the article** (after Sources, before the author box). Do not add a top-of-post affiliate note, and do not import or place `AffiliateDisclosure` in MDX. Use `AffiliateLink`; unapproved programs render as ordinary merchant links (no visible TODO marker).
2. **Direct answer** in the first one or two sentences: name Canada, define the hustle, and say who it suits. Do not open with “After this guide you can…”.
3. **Quick-facts table** with the figures a reader needs, and a source link on every rule or official number. Shelf prices stay labelled as ranges to verify locally.
4. **Question H2s**, each followed immediately by a 1–3 sentence answer that still makes sense if it is quoted alone. Name the hustle, Canada, and the province where the rule is provincial. Use **H3s for steps**.
5. **Illustrative example** (beginner guides) or the existing labelled break-even sketch (cost posts). Mark it “Illustrative example.” Worked Canadian numbers are assumptions, not a survey.
6. **Comparison table** where two real options differ (per visit vs seasonal, lean kit vs equipped kit).
7. **Common mistakes**.
8. **FAQs** through the `Faq` component (4–6 real questions). The component heading is already a question.
9. **Sources**, **author box**, and **related guides** are rendered by the article layout from frontmatter. Fill `sources: [{title, url, publisher}]`. Link the same sources beside the claims.

```yaml
title: "How much does it cost to start snow removal in Canada?"
description: "CAD ranges for a shovel route versus a blower, plus insurance, salt, and a labelled break-even sketch."
pubDate: 2026-09-29
updatedDate: 2026-09-30
updateNote: "Restructured for clarity and added sources"
category: local-services # one of the 9 slugs in src/lib/categories.ts
tags: [local-services, seasonal]
sources:
  - title: "When to register for and start charging the GST/HST"
    url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html"
    publisher: "Canada Revenue Agency"
```

### AI guardrails

- Do not invent statistics, quotes, anecdotes, or testimonials.
- Do not write “reviewed by Andrew” or a personal story. Andrew does not review each post.
- List a primary source for every claim about a tax rule, a fee, a legal limit, or a platform requirement (CRA, the provincial government, or the platform’s official Canadian page).
- If a figure is uncertain, say so and point at the page that publishes the current number. Prefer “confirm the live rate” over a stale screenshot.
- Label illustrative arithmetic as illustrative. Do not present it as average earnings.
- Affiliate relationships never change the recommendation. The layout handles disclosure: a short note at the top and the full block at the bottom of every post.

---

## How to use (workflow)

1. **Pick a High-priority pillar** (or seasonal demand).
2. **Pick a template** that matches search intent (T01–T20).
3. **Validate keyword**: Google autocomplete + related searches + “People also ask”. Prefer clear intent over vanity volume. Canada modifiers (`Canada`, `CAD`, `GST/HST`, province) when they fit.
4. **Map 1–3 affiliates** to concrete steps (never decorate the intro).
5. **Pass depth checklist** before drafting.
6. **Log** in the content tracker: Pillar ID + Template code + working title + status.

### Depth checklist (every post)

- [ ] **Answer in the title and the first two sentences**, with Canada named
- [ ] Clear **reader job** (what they can do after reading)
- [ ] **5+ actionable steps** (or equivalent structured sections)
- [ ] **3+ tips** that are non-obvious
- [ ] **Canada note** (CAD, shipping, banks, GST/HST high-level, or “N/A — global remote” stated)
- [ ] **1–3 affiliate slots** tied to steps + disclosure
- [ ] **Search proof** (seed keyword + why someone would click)

Skip or rewrite anything that fails. Shallow listicles do not count toward the 2,000.

---

## 8 clusters

| Cluster | Pillar count |
|---------|--------------|
| Gig apps & flexible labour | 12 |
| Local offline services | 15 |
| Online freelance skills | 14 |
| Digital products | 12 |
| Content & audience | 12 |
| Buy–sell & ecommerce | 14 |
| Marketing for hire | 11 |
| Tech & automation | 10 |
| **Total** | **100** |

Online **and** offline Canadian side hustles. Rough balance ~12–14 each; Local, Online freelance, and Buy–sell can run slightly larger.

---

## 100 pillars

Canonical CSV: [`content-planning/pillars-100.csv`](../content-planning/pillars-100.csv). Priority mix: **43 High / 50 Medium / 7 Low**.

| ID | Pillar | Cluster | Keyword seed | Canada hook | Primary affiliates | Priority |
|----|--------|---------|--------------|-------------|-------------------|----------|
| 1 | Food delivery driving | Gig apps & flexible labour | food delivery side hustle Canada | Skip / Uber Eats / DoorDash CAD payouts & vehicle costs | Insulated bags, phone mounts (Amazon) | High |
| 2 | Rideshare driving | Gig apps & flexible labour | Uber driver side hustle Canada | Provincial insurance rules & winter driving | Phone mounts, dash cams (Amazon) | High |
| 3 | Grocery shopping apps | Gig apps & flexible labour | Instacart shopper Canada | Peak hours & tip culture in Canadian cities | Insulated bags, sturdy totes (Amazon) | High |
| 4 | Package courier / Spark-class delivery | Gig apps & flexible labour | Spark Driver Canada | Same-day warehouse pickup realities | Cargo boxes, dollies (Amazon) | High |
| 5 | TaskRabbit-class odd jobs apps | Gig apps & flexible labour | TaskRabbit side hustle Canada | Assembly & handyman gigs in CA metros | Basic tool kits (Amazon) | High |
| 6 | Bike / e-bike courier | Gig apps & flexible labour | bike courier side hustle Canada | Dense urban cores; winter plan B | Cargo bags, lights (Amazon) | Medium |
| 7 | Alcohol delivery apps | Gig apps & flexible labour | alcohol delivery driver Canada | Age checks & provincial liquor rules | Insulated bags (Amazon) | Medium |
| 8 | Flash staffing / temp labour apps | Gig apps & flexible labour | gig staffing app Canada | Warehouse, events, retail surge shifts | Safety shoes, gloves (Amazon) | Medium |
| 9 | App-based pet sitting (Rover-class) | Gig apps & flexible labour | Rover pet sitting Canada | App profiles, reviews & liability basics | Leashes, waste bags (Amazon) | Medium |
| 10 | Same-day large-item delivery | Gig apps & flexible labour | furniture delivery gig Canada | Van/truck access & stair jobs | Moving blankets, straps (Amazon) | Medium |
| 11 | Airport / luggage runner gigs | Gig apps & flexible labour | airport luggage delivery Canada | Flight delays & YYZ/YVR corridors | Luggage carts, phone mounts | Low |
| 12 | Mystery shopping & field research | Gig apps & flexible labour | mystery shopping Canada | Flexible pocket money; vet legit platforms | — | Low |
| 13 | Dog walking / pet sitting | Local offline services | dog walking side hustle Canada | Neighbourhood routes; winter gear; liability | Leashes, waste bags (Amazon) | High |
| 14 | House cleaning | Local offline services | house cleaning side hustle Canada | Supply costs in CAD; recurring clients | Cleaning supplies (Amazon) | High |
| 15 | Lawn care / landscaping | Local offline services | lawn care side hustle Canada | Seasonal demand; municipal bylaws | Equipment (Amazon/Home Depot) | High |
| 16 | Snow removal | Local offline services | snow removal side hustle Canada | Contract season & early-morning routes | Shovels, salt, blowers | High |
| 17 | Handyman / odd jobs | Local offline services | handyman side hustle Canada | Small repairs without overstepping trades rules | Tool kits (Amazon) | High |
| 18 | Car detailing | Local offline services | car detailing side hustle Canada | Mobile detailing; winter salt cleanup | Detailing kits (Amazon) | High |
| 19 | Event staffing | Local offline services | event staff side hustle Canada | Weddings, festivals, corporate events | Black attire, comfortable shoes | Medium |
| 20 | Home baking / cottage food | Local offline services | sell baked goods from home Canada | Provincial cottage-food / home-premises rules | Baking supplies (Amazon) | Medium |
| 21 | Pressure washing | Local offline services | pressure washing side hustle Canada | Driveways & decks; water-use etiquette | Pressure washer (Amazon/Home Depot) | High |
| 22 | Moving help | Local offline services | moving helper side hustle Canada | Apartment moves; Kijiji/FB demand | Moving blankets, dollies | High |
| 23 | Babysitting / childcare | Local offline services | babysitting side hustle Canada | CPR, references, provincial age rules | First-aid kits | Medium |
| 24 | Personal training (in-person) | Local offline services | personal trainer side hustle Canada | Parks, condo gyms; liability insurance | Bands, mats (Amazon) | Medium |
| 25 | Event photography | Local offline services | event photography side hustle Canada | Weddings, grads, corporate; CAD packages | Camera gear (Best Buy/Amazon) | Medium |
| 26 | Junk removal | Local offline services | junk removal side hustle Canada | Municipal dump fees; eco disposal | Trailer straps, gloves | High |
| 27 | Window cleaning | Local offline services | window cleaning side hustle Canada | Residential & storefront routes | Squeegees, poles (Amazon) | Medium |
| 28 | Freelance writing | Online freelance skills | freelance writing | Canadian SMEs, CAD rates | FreshBooks, Grammarly | High |
| 29 | Virtual assistant | Online freelance skills | virtual assistant | Solopreneurs & ecommerce sellers | Notion, scheduling tools | High |
| 30 | Social media management | Online freelance skills | social media manager freelance | Main Street + DTC brands | Canva, schedulers | High |
| 31 | Canva / graphic design freelancing | Online freelance skills | Canva freelancing | Coaches, realtors, creators | Canva (when open) | High |
| 32 | Video editing for creators | Online freelance skills | freelance video editing | Shorts/Reels/YouTube educators | Stock assets, editing apps | Medium |
| 33 | No-code web design | Online freelance skills | no code website freelancer | Local services going online | Hostinger, domains | High |
| 34 | Freelance bookkeeping | Online freelance skills | freelance bookkeeping | GST/HST & freelancer admin | FreshBooks | High |
| 35 | Online tutoring | Online freelance skills | online tutoring | Provincial curriculum / bilingual | Zoom, scheduling | High |
| 36 | Bilingual / translation freelancing | Online freelance skills | freelance translation Canada | EN↔FR demand | Marketplace profiles | Medium |
| 37 | Podcast editing | Online freelance skills | podcast editing freelance | Canadian podcast growth | Descript, hosting | Medium |
| 38 | Voiceover freelancing | Online freelance skills | voice over side hustle | Canadian accent demand | VO marketplaces | Medium |
| 39 | Product photography for ecommerce | Online freelance skills | product photography side hustle | Shopify sellers needing CAD-ready assets | Lighting/gear | Medium |
| 40 | Spreadsheet / Google Sheets consulting | Online freelance skills | Google Sheets freelance | Ops-heavy SMBs | Google Workspace tools | Medium |
| 41 | Online language teaching / ESL | Online freelance skills | teach English online Canada | French immersion / ESL / newcomers | Zoom, italki-class platforms | High |
| 42 | Notion & spreadsheet templates | Digital products | sell Notion templates | CAD budget / CA planners | Gumroad, Notion | High |
| 43 | Printables & PDF planners | Digital products | sell printables online | Canada school year dates | Etsy, Gumroad | High |
| 44 | Online courses / mini-courses | Digital products | create an online course | CA-specific skills packaging | Teachable, Gumroad | Medium |
| 45 | Stock photo / video licensing | Digital products | sell stock photos | Canadian cities & seasons | Stock marketplaces | Medium |
| 46 | Ebook & playbook publishing | Digital products | self publish ebook | Core MMO product path | Gumroad | High |
| 47 | Brand kits & digital design packs | Digital products | sell Canva templates | Realtor/coach CA aesthetic | Etsy, Gumroad | Medium |
| 48 | AI prompt packs & workflows | Digital products | sell ChatGPT prompts | Ethical productivity framing | Gumroad | Medium |
| 49 | Lightroom presets / LUT packs | Digital products | sell Lightroom presets | Creator & realtor photo niches | Gumroad, Etsy | Medium |
| 50 | Icon & illustration packs | Digital products | sell digital illustrations | Canadian small-biz branding needs | Etsy, Gumroad | Low |
| 51 | Spreadsheet tools & calculators (sold) | Digital products | sell Excel templates | HST/mileage/budget calculators for CA | Gumroad | Medium |
| 52 | Email swipe / copy packs | Digital products | sell email swipe files | Shopify & coach niches | Gumroad | Medium |
| 53 | Digital membership / resource libraries | Digital products | start a digital membership | Recurring CAD pricing psychology | Gumroad, Memberful-class | Low |
| 54 | YouTube / Shorts channel | Content & audience | YouTube side hustle | Canada-focused niches | Affiliate offers in niche | High |
| 55 | Newsletter / Substack | Content & audience | newsletter side hustle | CA finance/hustle angles | Beehiiv, Kit | High |
| 56 | TikTok / Reels teaching | Content & audience | make money on TikTok | CAD pricing, local trust | Affiliate products | High |
| 57 | SEO blogging / niche sites | Content & audience | blog side hustle | MMO’s own model | Amazon, Shopify, Hostinger | High |
| 58 | UGC content creation | Content & audience | UGC creator | Canadian DTC brands | Amazon products for demos | High |
| 59 | Podcast hosting (as creator) | Content & audience | start a podcast make money | CA guests & topics | Hosting, Riverside | Low |
| 60 | Twitch / live streaming | Content & audience | Twitch side hustle Canada | CAD payouts & niche communities | Streaming gear (Amazon) | Medium |
| 61 | LinkedIn content creator | Content & audience | LinkedIn side hustle | B2B CA professionals & coaches | Scheduling tools | Medium |
| 62 | Pinterest affiliate content | Content & audience | Pinterest affiliate marketing | Evergreen traffic for CA niches | Amazon, niche affiliates | Medium |
| 63 | Instagram faceless pages | Content & audience | faceless Instagram page make money | Theme pages with CA angles | Canva, CapCut-class | Medium |
| 64 | Community / Discord hosting | Content & audience | paid Discord community | Niche CA communities & cohorts | Payment tools | Low |
| 65 | Short-form clips agency (for creators) | Content & audience | clipping side hustle | Repurpose long-form for CA creators | Editing apps | Medium |
| 66 | Shopify store / ecommerce | Buy–sell & ecommerce | start a Shopify store | CAD, shipping, duties | Shopify | High |
| 67 | Print-on-demand | Buy–sell & ecommerce | print on demand Canada | City/profession niches | Shopify, Printful | High |
| 68 | Etsy shop (digital or handmade) | Buy–sell & ecommerce | sell on Etsy Canada | Ship-from-CA or digital-only | Etsy | High |
| 69 | Amazon selling / FBA | Buy–sell & ecommerce | Amazon FBA Canada | Amazon.ca specifics | Amazon Seller tools | Medium |
| 70 | Online reselling / flipping | Buy–sell & ecommerce | reselling side hustle | Kijiji, Marketplace, FB | Shipping supplies | High |
| 71 | Dropshipping (honest framing) | Buy–sell & ecommerce | dropshipping Canada | Customs & CAD realities | Shopify | Medium |
| 72 | Furniture / thrift flipping | Buy–sell & ecommerce | furniture flipping Canada | Thrift, curb finds, FB Marketplace | Sandpaper, paint, tools | High |
| 73 | Clothing resale (Depop / Poshmark) | Buy–sell & ecommerce | Poshmark side hustle Canada | Closet clear-outs & thrift sourcing | Shipping supplies | High |
| 74 | Facebook Marketplace flipping | Buy–sell & ecommerce | Facebook Marketplace flipping | Local pickup economics in CA cities | Storage bins, cleaning supplies | High |
| 75 | Wholesale / liquidation reselling | Buy–sell & ecommerce | liquidation reselling Canada | Pallet risks & storage costs | Shipping supplies | Medium |
| 76 | Collectibles & trading cards flipping | Buy–sell & ecommerce | trading card flipping Canada | eBay.ca & local card shops | Sleeves, grading supplies | Medium |
| 77 | Garage / estate sale sourcing | Buy–sell & ecommerce | garage sale flipping Canada | Weekend sourcing calendar | Cash float, totes | Medium |
| 78 | Consignment & boutique sourcing | Buy–sell & ecommerce | consignment selling Canada | Local boutiques + online listings | Steamer, photography setup | Low |
| 79 | Refurbished electronics reselling | Buy–sell & ecommerce | refurbish electronics Canada | Honest condition grading; warranty ethics | Repair tools (Amazon) | Medium |
| 80 | Local SEO freelancing | Marketing for hire | local SEO freelance | Google Business Profile for Main Street | SEO tools (Semrush etc.) | High |
| 81 | Email marketing freelancing | Marketing for hire | email marketing freelance | Shopify brands | Klaviyo/ESP affiliates | Medium |
| 82 | Affiliate marketing (as the hustle) | Marketing for hire | affiliate marketing for beginners | CA programs catalogue | Shopify, Amazon, KOHO, FreshBooks | High |
| 83 | Ethical lead generation | Marketing for hire | lead generation side hustle | Trades & local services | Hostinger, landing tools | Medium |
| 84 | Paid ads management | Marketing for hire | Facebook ads freelancing | Local + ecommerce | Ads platforms | Medium |
| 85 | Google Business Profile optimization | Marketing for hire | Google Business Profile freelancing | Reviews & posts for CA locals | SEO/local tools | High |
| 86 | Reputation / review management | Marketing for hire | online reputation management freelance | Restaurants & clinics | Scheduling, monitoring tools | Medium |
| 87 | Content marketing freelancing | Marketing for hire | content marketing freelance | B2B & SaaS-lite CA clients | Grammarly, SEO tools | Medium |
| 88 | Influencer campaign management | Marketing for hire | influencer marketing freelance | Canadian micro-influencers | Canva, schedulers | Medium |
| 89 | Landing page copywriting | Marketing for hire | landing page copywriter | Local service & DTC funnels | Hostinger, landing tools | Medium |
| 90 | CRM setup for small business | Marketing for hire | CRM setup freelance | Trades & clinics needing follow-up systems | CRM tool affiliates | Medium |
| 91 | Zapier / Make automation freelancing | Tech & automation | Zapier freelance | SMB admin pain | Zapier/Make | High |
| 92 | AI consulting for small business | Tech & automation | AI consultant side hustle | Local CA shops | AI tool affiliates | High |
| 93 | No-code micro-SaaS | Tech & automation | build a micro SaaS | HST/mileage calculators | Stripe, Hostinger | Medium |
| 94 | Custom GPT / chatbot setup for SMBs | Tech & automation | ChatGPT chatbot for business | FAQ bots for clinics & retailers | AI tool affiliates | Medium |
| 95 | Website maintenance / care plans | Tech & automation | WordPress maintenance freelance | Retainer care for local sites | Hostinger | High |
| 96 | Shopify theme / store customization | Tech & automation | Shopify freelancer Canada | Theme tweaks without full agency rates | Shopify | Medium |
| 97 | Airtable / Notion systems consulting | Tech & automation | Notion consultant freelance | Ops systems for CA solopreneurs | Notion | Medium |
| 98 | Process documentation / SOP systems | Tech & automation | SOP freelancing | Franchise & multi-location SMBs | Notion, Loom-class | Medium |
| 99 | IT helpdesk for local SMBs | Tech & automation | IT support side hustle Canada | On-call for Main Street shops | Remote tools | Medium |
| 100 | Spreadsheet automation / Apps Script | Tech & automation | Google Apps Script freelance | Automate ops-heavy SMBs | Google Workspace tools | Medium |

**Publish order bias (100 pillars):** Ship **High** priority first across clusters (mix Gig + Local + Freelance + Ecommerce so the site covers online and offline). Medium fills the next wave. Low-priority pillars still fill the 100×20 matrix but ship later — or only when a keyword spike appears. Prefer stronger Canadian search demand over filler niches (bug bounty, domain flipping, chrome extensions, user-testing-as-primary are omitted or Low only).

---

## 20 templates (matrix columns)

| Code | Name | Title pattern | Intent | Affiliate guidance |
|------|------|---------------|--------|-------------------|
| T01 | Beginner how-to | How to start {pillar} in Canada (step-by-step) | Info / transactional | Primary tool in setup step |
| T02 | Cost & budget | How much does it cost to start {pillar}? (CAD breakdown) | Commercial | Cheapest stack + upgrade path |
| T03 | Tools stack | Best tools for {pillar} in 2026 | Commercial | 2–4 affiliate tools mid-list |
| T04 | First client / first sale | How to get your first client (or sale) with {pillar} | Transactional | CRM / invoicing / payments |
| T05 | Niche variant | {pillar} for {audience} in Canada | Informational | Audience-specific tool |
| T06 | Comparison | {A} vs {B} for {pillar} | Commercial | Both options if affiliate-eligible |
| T07 | Mistakes & tips | {n} mistakes beginners make with {pillar} (and fixes) | Informational | Tool that prevents a mistake |
| T08 | Canada admin | GST/HST, invoices & records for {pillar} (plain-English) | Informational | Bookkeeping / banking (disclaimer) |
| T09 | Pricing guide | How to price {pillar} services (CAD examples) | Commercial | Invoicing tool |
| T10 | Scale / retainers | How to turn {pillar} into retainers or recurring income | Transactional | Email + project tools |
| T11 | Portfolio / proof | How to build a portfolio for {pillar} with no experience | Informational | Design / hosting tools |
| T12 | Platform playbook | How to succeed on {platform} with {pillar} | Transactional | Platform + off-platform stack |
| T13 | 30-day plan | {pillar}: a 30-day side hustle plan | Transactional | Tools introduced by week |
| T14 | Validation | How to validate {pillar} before you quit hours / spend money | Informational | Landing page / email tools |
| T15 | Templates & swipes | Free {pillar} templates (scripts, checklists, SOPs) | Lead / transactional | Related paid tool + email CTA |
| T16 | Case study format | How I (or a reader) approached {pillar} — lessons learned | Informational | Tools actually used |
| T17 | Outsourcing / hiring | When to outsource parts of {pillar} (and how) | Informational | Hiring / PM tools |
| T18 | Seasonal / timely | {pillar} ideas for {season_or_year} in Canada | Informational | Seasonal gear / tools |
| T19 | Productized offer | How to productize {pillar} into a fixed-scope package | Transactional | Payments + scheduling + site |
| T20 | Affiliate toolkit post | The only {pillar} toolkit I’d pay for (disclosed) | Commercial | **Primary monetization format** |

### Fill-in tokens

| Token | Examples |
|-------|----------|
| `{pillar}` | Virtual assistant, Shopify store, Food delivery driving |
| `{audience}` | teachers, newcomers to Canada, busy professionals, nurses |
| `{A}` / `{B}` | Upwork vs direct clients; Shopify vs Etsy; Skip vs Uber Eats |
| `{platform}` | Fiverr, Upwork, Etsy, TikTok, YouTube, TaskRabbit, Kijiji |
| `{n}` | 7, 9, 11 |
| `{season_or_year}` | back-to-school, RRSP season, 2026, Black Friday, snow season |

**T04 wording rule:** use “first **client**” for service pillars (Gig, Local, Online freelance, Marketing, Tech); use “first **sale**” for Digital products, Buy–sell & ecommerce, and content-monetization pillars.

---

## Affiliate mapping (quick rules)

| Content moment | Typical affiliates |
|----------------|-------------------|
| Start a store / site | Shopify, Hostinger, domains |
| Invoices / freelancing admin | FreshBooks |
| Banking / cashflow for hustlers | KOHO |
| Product research / gear / supplies | Amazon.ca |
| Design / creatives | Canva (when available), stock |
| Sell digital products | Gumroad, Etsy |
| Email / newsletter | Beehiiv, Kit, ConvertKit-class |
| Automations | Zapier / Make |
| Gig gear (bags, mounts, tools) | Amazon.ca |

Always: the layout's full disclosure block at the bottom of the post + site-wide Affiliate Disclosure page (and footer note). No top-of-post affiliate note.

---

## Example expansions (pillar × template)

**Pillar — first High in list (see sample CSV for live IDs)**

Full sample CSV: `content-planning/generator-sample-ideas.csv` (first 3 High pillars × all 20 templates).

Batch 1 outlines: `content-planning/batch-1-outlines-50.csv` + `BATCH-1-OUTLINES.md`.

---

## Content tracker columns (recommended Sheet tab)

| Column | Notes |
|--------|-------|
| Idea ID | e.g. `P02-T01` |
| Pillar ID | 1–100 |
| Template code | T01–T20 |
| Working title | From pattern + keyword tweak |
| Primary keyword | Validated |
| Search proof | Note / SERP snapshot date |
| Affiliates | 1–3 |
| Depth score | 0–6 checklist ticks |
| Cluster / pillar URL | Internal linking target |
| Status | Idea → Outline → Draft → Edit → Live |
| Publish date | |
| URL | |

Formula for Idea ID: `P{pillar:02d}-{template}` (use `P{pillar:03d}` once IDs exceed 99 in trackers if preferred; Batch 1 uses zero-padded 2+ digits).

---

## Internal linking (SEO)

- Each **pillar** gets a hub page or category landing (when ready).
- Each **cluster** has a category hub at `/side-hustles/category/<slug>/` (defined in `src/lib/categories.ts`). Set frontmatter `category` to the cluster slug: `gig-apps`, `local-services`, `online-freelancing`, `digital-products`, `content-creation`, `reselling-ecommerce`, `marketing-for-hire`, `tech-ai`, or `taxes-money` (tax and CRA posts).
- Every post links **up** to its pillar hub and **across** to 2–3 sibling templates (e.g. T01 ↔ T02 ↔ T03).
- Affiliate toolkit posts (T20) link back to the beginner how-to (T01).

---

## What not to do

- Don’t invent 2,000 unique “ideas” by hand.
- Don’t publish Low-priority × Low-intent combos early.
- Don’t force Canada into posts where it’s fake — say “remote / global” and move on.
- Don’t put affiliates only in a footer dump — place them where the reader is choosing a tool.
- Don’t treat platforms (Fiverr, Upwork) as pillars — they are `{platform}` tokens inside templates.
- Don’t duplicate the same hustle across clusters (one clear home each).

---

## Next steps after this doc

1. Import `pillars-100.csv` + `templates-20.csv` as Sheet tabs beside the ideas workbook.
2. Use the first **50 outlines** = top 10 High pillars × T01, T02, T03, T04, T20 (`batch-1-outlines-50.csv`).
3. Draft and ship those before expanding toward the full 2,000.
