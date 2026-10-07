# Affiliate applications kit — Make Money Optimizer

Use this when applying to programs.

**Full Canada-eligible catalogue:** see [`docs/AFFILIATE-PROGRAMS.md`](docs/AFFILIATE-PROGRAMS.md) for networks, priorities, and content-cluster mapping. Update the **Status** table as you go.

Site: https://makemoneyoptimizer.com  
Repo: https://github.com/drewbotcarrothers/makemoneyoptimizer  
Disclosure: https://makemoneyoptimizer.com/affiliate-disclosure  

> Tip: Approvals are much stronger once the **custom domain is live** with real articles. If a form asks for the site URL, use the live domain after Hostinger deploy.

---

## Status tracker

Researched and re-verified **2026-10-07** (official program pages opened where the site allowed it; "Partly"
means the official page exists but a detail such as the network came from a search result or third-party
listing; **verify** means confirm before relying on it). Programs marked **Drop** have no usable public
program for a Canadian publisher right now. **Never paste a tracking URL into an article**: when a program
approves you, change only `href` + `approved: true` in `src/lib/affiliate-placeholders.ts`.

Priority: **A** apply now (already linked across many posts or core to the new comparison posts) · **B**
apply once the related comparison/roundup posts are live · **C** optional/niche · **Watch** closed/gated ·
**Drop** none available.

| Program | Key in `affiliate-placeholders.ts` | Apply URL | Network | Priority | Status | Verified (2026-10-07) | Notes |
|---|---|---|---|---|---|---|---|
| Amazon Associates (CA) | `amazon-ca` | https://affiliate-program.amazon.ca/ | In-house | A | **Approved** 2026-10-05 | Yes | Entry link `https://link.amazon/B04lZw4kk` wired |
| FreshBooks | `freshbooks` | https://www.freshbooks.com/affiliate-program (apply: https://freshbooksusa.partnerstack.com/?group=affiliatesstandard) | PartnerStack | A | Not started | Yes | Page says 'earn up to $200 per sale'; accepts affiliates from many countries subject to regional restrictions (auto-decline if restricted); no trademark bidding. ~211 placeholder links already on site. |
| KOHO | `koho` | https://www.koho.ca/affiliate/ (apply via Impact: KOHO-Financial brand signup linked on that page) | Impact | A | Not started | Yes | Canada-only product; page invites influencers, comparison sites and publishers; no minimum cash-out. Fintech copy: no 'income' claims. ~162 placeholder links. |
| Wealthsimple (Tax, Invest, Cash) | `wealthsimple-tax` / `wealthsimple` | Guidelines: https://www.wealthsimple.com/en-ca/legal/affiliate-guidelines (application: search 'Wealthsimple' in Impact marketplace) | Impact (per third-party listings; confirm in dashboard) | A | Not started | Partly (guidelines page verified; network = verify) | Canada-only. Guidelines require clear upfront disclosure on every piece plus Wealthsimple's own disclosure sentence at the start or end, and note CIRO/OSC/Ad Standards oversight. Our bottom-of-post disclosure may need the extra Wealthsimple sentence on posts that link it. |
| Shopify (incl. POS) | `shopify` | https://www.shopify.com/ca/affiliates | Impact | A | Not started | Yes | Page: up to $150 USD per qualified referral, varies by referral location; wants an active website, established audience, original commerce/entrepreneurship content, platform experience. |
| Hostinger | `hostinger` | https://www.hostinger.com/affiliates (dashboard: https://affiliates.hostinger.com) | In-house | B | Not started | Yes | Page: commission 'starts at 40%' and grows with volume; instant sign-up then verification. Site is hosted on Hostinger (genuine fit). |
| Canva | `canva` | https://www.canva.com/help/canva-affiliate-marketing-program/ (Canvassador program) | Impact (via Canvassador) | Watch | Closed (re-check) | Yes (closed) | Help page: Canvassador is now the only path to affiliate benefits and is currently CLOSED for applications. Re-check periodically. |
| TurboTax Canada | `turbotax-canada` | https://turbotax.intuit.ca/affiliates/ (CJ publisher signup linked there) | CJ (Commission Junction) | B | Not started | Yes | Affiliates page links CJ signup (cid 2278967). Seasonal (Jan–Apr). |
| Gumroad | `gumroad` | https://gumroad.com/help/article/333-affiliates-on-gumroad | Creator-level only | C | Not started | Partly | Gumroad affiliates are set per creator/product, not a platform-wide publisher program. Leave as plain link. |
| Etsy | `etsy` | https://www.etsy.com/ca/affiliates | Awin (per Etsy affiliate terms; confirm) | B | Not started | Partly (page verified; network = verify) | Etsy Affiliates (publishers) and Creator Collective (social). Pays on shopper purchases, not seller sign-ups; fit is limited for seller guides. |
| Printful | `printful` | https://www.printful.com/ca/affiliates | In-house | B | Not started | Yes | 10% of referred sales for 12 months; applications reviewed in 2–5 business days. |
| Fiverr | `fiverr` | https://www.fiverr.com/partnerships/affiliates | In-house (also listed on Awin) | A | Not started | Yes (via search of official page; site blocks curl) | Marketplace: 25% of first order + 10% revshare for 12 months (per Fiverr partnerships page). Fits 'hire help' angles; for sellers it's a platform, not a purchase. |
| Wave | `wave` | https://www.waveapps.com/affiliate | Impact | A | Not started | Yes | Page: for individuals/sites with a US- or Canada-based audience; Toronto-founded, Canada-relevant. |
| QuickBooks Canada | `quickbooks` | https://quickbooks.intuit.com/partners/qbbusinessaffiliates/ (Canada Business Affiliate Program via PartnerStack); US-style CJ program also exists | PartnerStack (Canada program) | B | Not started | Partly | Canada program is aimed at Canadian organisations supporting small businesses (associations, business services, insurers, banks); open to legal residents of Canada; up to $250 per paid subscription per Intuit help article. Content-site acceptance = verify. |
| H&R Block Canada | `hr-block` | https://www.hrblock.ca/affiliate/ | verify | B | Not started | Partly | Page exists with affiliate discount codes (new/prior client). How publishers join is not stated; ask H&R Block Canada partnerships. |
| UFile | — | — | none found | Drop | Skip | verify | No public affiliate program found (ufile.ca/affiliate 404). |
| Square Canada (POS, Appointments, Invoices) | `square` | https://squareup.com/ca/en/affiliate | Impact | A | Not started | Yes | Commission on activations/revenue events across Payments, Hardware, Appointments, Invoices, Online etc.; some products not in all markets. |
| SumUp | `sumup` | https://www.sumup.com/en-gb/affiliate-program/ (Impact) | Impact | B | Not started | Partly | SumUp sells in Canada (sumup.com/en-ca), but the affiliate page found is UK; confirm Canada campaign in Impact. |
| EQ Bank | `eq-bank` | https://www.eqbank.ca/affiliates (join Rakuten Advertising, then search EQ Bank) | Rakuten Advertising (per third-party listings) | B | Not started | Partly | Canada-only bank; affiliates page exists. Finance copy rules apply (no rate promises; link live rates). |
| Neo Financial | `neo-financial` | https://www.fintelconnect.com/brands/directory/neo-financial-affiliate-program/ | Fintel Connect / Impact (verify) | C | Not started | verify | Canadian fintech; mainly credit-card offers (compliance-heavy). |
| Jobber | `jobber` | https://www.getjobber.com/partners/ (affiliate: https://jobber.partnerstack.com/?group=baseaffiliate) | PartnerStack | A | Not started | Yes | Home-service software (Edmonton-founded). Also Ambassador and Brand Partner tracks. |
| Housecall Pro | `housecall-pro` | https://www.housecallpro.com/paid-affiliates/ (PartnerStack application) | PartnerStack | B | Not started | Yes | Only available in US and Canada; referrals must be US/Canada-based; lead-quality rules apply. |
| Calendly | `calendly` | — | No program | Drop | No program | Yes (no program) | calendly.com/partners/contact: 'we do not currently have an affiliate, referral, or reseller partner program.' Plain link only. |
| Acuity Scheduling | `acuity` | Squarespace affiliate program (Impact) — confirm Acuity is included | Impact (via Squarespace) — verify | C | Not started | verify | Acuity is a Squarespace product; inclusion in the Squarespace affiliate payout = verify. |
| Kit (ConvertKit) | `kit` | https://kit.com/affiliate | PartnerStack | B | Not started | Yes | 50% commission for 12 months, plus 10–20% recurring after 12 months at Bronze+ tiers (per page). |
| beehiiv | `beehiiv` | https://www.beehiiv.com/partners | In-house (beehiiv partner dashboard) | B | Not started | Yes | Up to 60% commission monthly for a year (per page). |
| Wix | `wix` | https://www.wix.com/about/affiliates | Impact | B | Not started | Yes | Apply via Impact link on page. |
| Squarespace | `squarespace` | https://www.squarespace.com/affiliates | Impact | B | Not started | Yes | Payout per website/commerce subscription from first-time customers. |
| Namecheap | `namecheap` | https://www.namecheap.com/affiliates/ | Impact | C | Not started | Partly (site blocks curl; search-verified) | Needs an active relevant site on its own domain (per Namecheap acceptance criteria). |
| Thinkific | `thinkific` | https://www.thinkific.com/affiliates/ | PartnerStack | B | Not started | Partly (site blocks curl) | Vancouver company; 30% recurring on standard plans (per search of official page); wants an education/creator audience. |
| Teachable | `teachable` | https://www.teachable.com/partners | PartnerStack | B | Not started | Yes | 30% recurring for 12 months, 30-day cookie (per page). |
| Podia | `podia` | https://affiliates.podia.com/ | In-house (Rewardful) | C | Not started | Partly |  |
| Kajabi | `kajabi` | https://help.kajabi.com/en/articles/17175735-become-a-kajabi-partner | In-house | C | Not started | Partly | Partner program requires an active paid Kajabi account. |
| Payhip | `payhip` | https://payhip.com/partner-program | In-house | C | Not started | Partly (site blocks curl) | 50% recurring, PayPal payouts at $50 minimum (per search of official help pages). |
| Zapier | `zapier` | https://zapier.com/legal/ambassador-affiliate-terms | PartnerStack (invite/approval) | C | Not started | verify | Ambassador/affiliate access appears invitation-based. |
| Make | `make` | https://www.make.com/en/affiliate | In-house | B | Not started | Partly (site blocks curl) | Open to Make account holders; 35% for 12 months; payouts via Wise after $100 and 3 paying users (per search of official page). |
| Descript | `descript` | https://www.descript.com/affiliate | PartnerStack | B | Not started | Yes |  |
| Riverside | `riverside` | https://support.riverside.com/hc/en-us/articles/5446133751453-Affiliate-program-Overview | Impact / PartnerStack (verify) | C | Not started | verify |  |
| Epidemic Sound | — | https://www.epidemicsound.com/community-program/ | Community program (CJ also reported) | C | Not started | verify | Referrer track requires a subscription. |
| Envato | — | https://www.envato.com/affiliates/ | Impact | C | Not started | Yes |  |
| Grammarly | `grammarly` | https://www.grammarly.com/affiliates | Impact | B | Not started | Yes |  |
| Semrush | — | https://www.semrush.com/lp/affiliate-program/en/ | Impact | C | Not started | Yes | $100–$300 per sale, 120-day cookie (per page). |
| ElevenLabs | — | https://elevenlabs.io/affiliates | PartnerStack | C | Not started | Yes |  |
| Google Workspace | — | https://workspace.google.com/intl/en_ca/landing/partners/referral/ (referral); separate Affiliate Program for larger audiences | Google in-house | C | Not started | Partly | Referral page shows CAD reward per user in Canada (up to 200 users/yr). Referral links are personal; publisher Affiliate Program = verify. |
| Udemy | — | https://www.udemy.com/affiliate/ | Impact | C | Not started | Partly | Accepts non-US affiliates incl. Canada; ~500 visitors/followers minimum (per Udemy partner support). |
| Coursera | — | https://www.coursera.org/about/affiliates | Impact | C | Not started | Yes | 15–45% on eligible purchases within 30 days (per page). |
| Skillshare | — | https://www.skillshare.com/en/affiliates | Impact | C | Not started | Yes | 20% up to $34 per new customer, 30-day cookie (per page). |
| Chit Chats | `chit-chats` | https://chitchats.com/referral | Personal referral program | C | Not started | Partly | Per-shipment referral credit (account-holder referral, not a publisher network). Check referral terms before publishing a code. |
| Stallion Express | `stallion-express` | https://stallion.ca/referral-program/ | Personal referral program | C | Not started | Partly | Per-shipment referral reward for 3 months (per search of official page). |
| Shippo | — | https://goshippo.com/affiliates | PartnerStack | C | Not started | Yes | Flat reward per new Pro plan user (per page). US-centric. |
| ShipStation | — | https://www.shipstation.com/en-ca/affiliate-program/ | Impact | C | Not started | Yes | Has a Canadian affiliate page. |
| Printify | `printify` | https://printify.com/affiliate/ | PartnerStack | B | Not started | Yes |  |
| Ownr | `ownr` | https://www.ownr.co/affiliates | PartnerStack | B | Not started | Partly | Canadian (RBC Ventures). Commission and discount levels per third-party listings = verify. |
| Vistaprint Canada | `vistaprint` | — | FlexOffers (third-party listing only) | C | Not started | verify | No official Canadian affiliate page found. |
| APOLLO Insurance | `apollo` | https://apollocover.com/business-insurance | Partner API (tenant insurance only) | C | Not started | verify | Public affiliate API currently covers tenant insurance only; no public small-business referral program found. |
| Zensurance | `zensurance` | https://www.zensurance.com/partnerships (verify) | none found | C | Not started | verify | No public affiliate page found; ask partnerships team. |
| Home Depot Canada | — | — | Reported closed (2022) | Drop | Skip | verify | No active official program found. |
| Canadian Tire | — | Search 'Canadian Tire' in Impact marketplace | Impact (per third-party listings) | B | Not started | verify | Official affiliate page blocked our fetch. |
| Princess Auto | — | — | none found | Drop | Skip | verify | No affiliate program found. |
| Rakuten.ca (cash back) | — | Member referral inside Rakuten.ca account | Personal referral | C | Not started | verify | Shopper cash-back site; referral bonuses are personal-account referrals, not a publisher program. Check terms before publishing a code. |
| Swagbucks | — | Search 'Swagbucks' in Impact marketplace | Impact (per third-party listings) | C | Not started | verify | Program reportedly supports Canada. |
| Survey Junkie | — | — | verify | C | Not started | verify | Third-party sources say it accepts US/Canada/Australia traffic; no official affiliate page found. |
| Freecash | — | https://freecash.com/academy/en/discover/partner/affiliates | Personal referral (in-house) | C | Not started | Yes | 'Affiliate program' is a per-friend referral reward with its own affiliate policy; read it before publishing a link. |
| Mistplay | — | In-app referral code | Personal referral | C | Not started | verify | No publisher program found. |
| Qtrade (via Fintel) | — | https://www.fintelconnect.com/ | Fintel Connect | C | Optional later | verify | Investing audience |
| Ratehub | — | https://www.ratehub.ca/affiliate-program | In-house | C | Optional later | verify | Widgets / finance |

### Suggested order to apply (fastest payback first)

1. **FreshBooks** (PartnerStack) — ~211 links already on the site.
2. **KOHO** (Impact) — ~162 links.
3. **Wealthsimple** (Impact; covers Tax, Invest, Cash) — ~38 Wealthsimple Tax links + the new money/tax comparisons. Read the guidelines first.
4. **Shopify** (Impact), **Square** (Impact), **Wave** (Impact) — one Impact account covers all three plus Wix/Squarespace/Grammarly/Udemy.
5. **Jobber** + **Housecall Pro** (PartnerStack) — local-services is our biggest category.
6. **Hostinger** (in-house), **TurboTax Canada** (CJ, before tax season), **Fiverr** (in-house).
7. **Kit**, **beehiiv**, **Teachable/Thinkific**, **Printify**, **Ownr**, **Descript** as their comparison posts gain traffic.
8. Re-check **Canva** (Canvassador closed) each quarter.

Tip: create one **PartnerStack** account and one **Impact** account first; most of the A/B list lives there.

---

## Site facts to paste into forms (Andrew: fill in the brackets)

| Field | Answer |
|---|---|
| Website | https://makemoneyoptimizer.com |
| Site name | Make Money Optimizer |
| Owner / contact name | Andrew |
| Country | Canada |
| Audience | Canadians looking for side income: freelancers, gig workers, resellers, tutors, local service operators, new online sellers |
| Published guides | [FILL IN: count from /side-hustles/ — 460+ as of October 2026] |
| Monthly visitors / pageviews | [FILL IN from analytics, last 30 days] |
| Share of traffic from Canada | [FILL IN %] |
| Newsletter subscribers | [FILL IN] |
| Social / YouTube | [FILL IN channel URLs + follower counts] |
| Promotion methods | SEO articles, comparison posts, "starter kit" tool boxes inside guides, email newsletter. No paid search on brand terms, no coupon/cashback, no incentivised clicks |
| Disclosure | https://makemoneyoptimizer.com/affiliate-disclosure/ (plus a disclosure block at the bottom of every article) |

---

## One-liner brand pitch (all forms)

> Make Money Optimizer (makemoneyoptimizer.com) publishes practical, ethical side-hustle guides for Canadians — online and offline. We focus on realistic costs, who a hustle fits, and clear next steps. No guaranteed-income claims. Monetization: educational content with disclosed affiliates, later ads and digital products.

---

## Audience (all forms)

- **Geography:** Canada (primary)
- **Who:** Adults exploring extra income — freelancers, gig workers, resellers, tutors, aspiring online store owners
- **Intent:** How-to research, tool comparison, “is this hustle right for me?”
- **Channels (planned):** Website SEO, email newsletter, social (to be built)

---

## Ready-to-paste answers

### Shopify Affiliates

**Website:** `https://makemoneyoptimizer.com`  
**Content type:** Blog / educational guides on starting and running side hustles and small online businesses in Canada  
**How you’ll promote Shopify:**  
Honest guides on starting an online store, product research, and Canadian seller basics. Shopify will appear only where ecommerce is the right fit — with costs, trade-offs, and disclosure. We do not use fake earnings or aggressive “quit your job” funnels.

**Audience size:** Early-stage media brand; growing via SEO and email. (Update with real traffic once you have GA4.)

**Experience with Shopify / commerce:**  
[FILL IN: e.g. “I have used Shopify / built stores / sold online / researched CA ecommerce for content.” Be truthful.]

---

### Amazon Associates (Canada)

**Website:** `https://makemoneyoptimizer.com`  
**Topics:** Side hustles, tools & gear, books, home-office and reselling supplies for Canadians  
**How you’ll link:** Contextual product recommendations inside guides (e.g. shipping supplies, cameras for tutoring setups, notebooks) — not sitewide link spam.  
**Traffic:** Organic search + direct; Canada-focused.  
**Associates Store ID / branding:** Use a clear ID like `makemoneyopt-20` if available (Amazon may assign or suggest).

After approval: enable **Canada** store, add the standard Associates disclosure (already drafted on `/affiliate-disclosure`).

---

### KOHO

**Website:** `https://makemoneyoptimizer.com`  
**Why you’re a fit:** Our readers are freelancers and side hustlers who need simple spending, saving, and cash-flow tools. We’ll mention KOHO only in relevant money/admin sections with clear disclosure — never as a miracle income product.  
**Promotion:** Articles + future email; Canadian audience.

---

### How to use the blurbs below

Each blurb is written to be pasted into the "How will you promote us?" / "Tell us about your site" box.
Replace anything in `[brackets]` with real figures from the **Site facts** table. Keep it truthful: do not
claim you use a product unless you do (`[If true: …]` lines are optional).

### FreshBooks (PartnerStack)

**Apply:** https://www.freshbooks.com/affiliate-program → "Join Affiliate Program" (PartnerStack group `affiliatesstandard`).  
**Why we're a fit:** Make Money Optimizer publishes [N] Canadian side-hustle guides, and invoicing comes up in
almost every service hustle we cover: freelance writing, bookkeeping, tutoring, cleaning, handyman work. FreshBooks
is already mentioned in [~211] places where readers reach the "send your first invoice" step, plus a dedicated
comparison, *FreshBooks vs Wave vs QuickBooks for Canadian freelancers*, that covers GST/HST on invoices and
CAD pricing. We promote through organic search content only; no brand bidding.  
**Traffic:** [monthly visitors], [% Canada].

### Wealthsimple — Tax, Invest, Cash (Impact)

**Read first:** https://www.wealthsimple.com/en-ca/legal/affiliate-guidelines (disclosure on every piece; their
disclosure sentence at the beginning or end; CIRO/securities rules).  
**Apply:** search "Wealthsimple" in the Impact marketplace (verify the exact listing).  
**Why we're a fit:** Our taxes-money section explains T2125, GST/HST registration, and deductions for Canadians
with side income, and links Wealthsimple Tax at the filing step in [~38] guides. New comparisons (*Wealthsimple Tax
vs TurboTax vs H&R Block for side hustlers*, *KOHO vs Wealthsimple vs EQ Bank for side-hustle income*) compare
features and published prices only. No return promises, no investment advice, clear disclosure on every page.  
**Before going live:** add Wealthsimple's required disclosure sentence to posts that link it (ask in the PR).

### Wave (Impact)

**Apply:** https://www.waveapps.com/affiliate → "Sign Up" (Impact). Requires a US- or Canada-based audience.  
**Why we're a fit:** Canadian audience of new freelancers and sole proprietors, the exact users who start on a free
invoicing/accounting tool. Wave appears in our accounting and invoicing comparisons with its Canadian pricing and
GST/HST features, at the point readers choose a tool.

### QuickBooks Canada (PartnerStack, Canada Business Affiliate Program)

**Apply:** https://quickbooks.intuit.com/partners/qbbusinessaffiliates/ (Canada program via PartnerStack; aimed at
organisations that support Canadian small businesses — say so explicitly).  
**Why we're a fit:** We are a Canadian small-business education site: step-by-step guides to registering, charging
GST/HST, bookkeeping, and filing T2125 for side businesses. QuickBooks is covered in our accounting comparison with
its Canadian plans and pricing.

### H&R Block Canada (verify how to join)

**Page:** https://www.hrblock.ca/affiliate/ (shows affiliate discount codes; the publisher sign-up route is not
listed). Email H&R Block Canada partnerships and ask about a content-publisher affiliate program.  
**Blurb:** Same as Wealthsimple Tax: Canadian side-hustle tax guides, comparison of tax software for
self-employment income, seasonal (January–April) traffic.

### TurboTax Canada (CJ)

**Apply:** https://turbotax.intuit.ca/affiliates/ → CJ publisher sign-up. Apply in November–December so links are
live before tax season.  
**Blurb:** [~14] guides already point readers to TurboTax at the filing step, plus a new comparison of tax software
for self-employed Canadians (T2125, GST/HST). Seasonal spike January–April.

### Square Canada (Impact)

**Apply:** https://squareup.com/ca/en/affiliate → "Apply now" (Impact).  
**Why we're a fit:** We cover craft fairs, farmers' markets, mobile services, tutoring and cleaning, all of which
need a card reader, invoices, or online booking. Square appears in our card-reader comparison (*Square vs SumUp vs
Shopify POS*) and our booking-tools comparisons with Canadian processing rates from Square's own pages.

### SumUp (Impact — confirm Canada campaign)

**Apply:** https://www.sumup.com/en-gb/affiliate-program/ (Impact). SumUp sells in Canada (sumup.com/en-ca); ask
whether the Impact campaign pays on Canadian sign-ups.  
**Blurb:** Same as Square (card readers for markets and mobile services).

### Shopify (Impact) — existing answers below still apply

Add: "We now publish *Square vs SumUp vs Shopify POS* for in-person sellers and an Etsy vs Shopify fee comparison."

### Jobber (PartnerStack)

**Apply:** https://jobber.partnerstack.com/?group=baseaffiliate (from https://www.getjobber.com/partners/).  
**Why we're a fit:** Local services is our largest category ([127+] guides: snow removal, lawn care, cleaning,
handyman, pressure washing, window cleaning). Readers who move from casual gigs to recurring clients need quoting,
scheduling, invoicing and payments; our comparison *Jobber vs Housecall Pro vs Square Appointments* targets exactly
that decision for Canadian operators.

### Housecall Pro (PartnerStack)

**Apply:** https://www.housecallpro.com/paid-affiliates/ (PartnerStack). Only US/Canada referrals count.  
**Blurb:** Same as Jobber; our audience is Canada-based home-service operators.

### Hostinger (in-house)

**Apply:** https://www.hostinger.com/affiliates → "Become an affiliate" (dashboard affiliates.hostinger.com).  
**Why we're a fit:** This site is hosted on Hostinger [true — keep]. We publish guides to starting a blog,
newsletter, or web-design side hustle in Canada and a hosting comparison for side-hustle sites, with prices from
Hostinger's own Canadian page.

### Wix and Squarespace (Impact)

**Apply:** https://www.wix.com/about/affiliates and https://www.squarespace.com/affiliates (both Impact).  
**Blurb:** Website-builder comparisons for Canadian sellers and freelancers (*Shopify vs Squarespace vs Wix*,
hosting comparison), plus no-code web-design side-hustle guides.

### Kit (PartnerStack) and beehiiv (in-house)

**Apply:** https://kit.com/affiliate and https://www.beehiiv.com/partners.  
**Blurb:** Newsletter and creator guides for Canadians, including *Substack vs beehiiv vs Kit* with CAD/USD
pricing and CASL notes; email is the funnel for our digital-product guides.

### Fiverr (in-house)

**Apply:** https://www.fiverr.com/partnerships/affiliates.  
**Blurb:** Freelancing guides for Canadians (Fiverr vs Upwork, first-client guides). We'd promote Fiverr for small
businesses hiring help (logos, editing, bookkeeping set-up) in our admin and ecommerce guides.

### Canva (Canvassador — closed)

https://www.canva.com/help/canva-affiliate-marketing-program/ says Canvassador is the only path and is closed.
When it reopens: [~47] guides mention Canva for flyers, social posts, printables and thumbnails.

### EQ Bank (Rakuten Advertising)

**Apply:** join Rakuten Advertising as a publisher, then search EQ Bank (https://www.eqbank.ca/affiliates exists;
confirm the listing).  
**Blurb:** Canadian side-hustle money guides (separating business income, saving for tax instalments and GST/HST
remittances) and *KOHO vs Wealthsimple vs EQ Bank for side-hustle income*. We link live rate pages instead of
quoting rates.

### Thinkific / Teachable (PartnerStack), Printify (PartnerStack), Ownr (PartnerStack), Descript (PartnerStack), Grammarly (Impact)

Use the one-liner pitch below plus the matching comparison post:  
Thinkific/Teachable → *Thinkific vs Kajabi vs Podia* and *Teachable vs Gumroad vs Payhip*; Printify → *Printful vs
Printify*; Ownr → registering a sole proprietorship/business guides; Descript → *Descript vs Riverside*; Grammarly →
freelance writing cluster.

---

## After you’re approved

1. Add tracking links to a private sheet (program, cookie days, payout, articles used).  
2. Update `/affiliate-disclosure` with exact partner names if you want extra clarity.  
3. Flip `approved: true` + tracking `href` in `src/lib/affiliate-placeholders.ts`; every `<AffiliateLink>`, `<ComparisonTable>` and `<StarterKit>` row using that key updates automatically. Never paste raw tracking URLs into posts.  
4. Use UTM parameters: `utm_source=makemoneyoptimizer&utm_medium=affiliate&utm_campaign=article-slug`.

---

## Application order (suggested)

See **Suggested order to apply** under the status tracker (updated 2026-10-07).

---

## Decision log

| Date | Event |
|------|--------|
| 2026-09-13 | Disclosure page expanded; application kit created |
| 2026-10-05 | Amazon.ca Associates entry link wired (`https://link.amazon/B04lZw4kk`); article disclosure bottom-only |
| 2026-10-07 | Status tracker expanded to ~60 programs (apply URL, network, priority, verified flag); per-program blurbs; new placeholder keys added for comparison posts and starter kits |
