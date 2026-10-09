# Affiliate applications kit — Make Money Optimizer

Use this when applying to programs.

**Full Canada-eligible catalogue:** see [`docs/AFFILIATE-PROGRAMS.md`](docs/AFFILIATE-PROGRAMS.md) for networks, priorities, and content-cluster mapping. Update the **Status** table as you go.

Site: https://makemoneyoptimizer.com  
Repo: https://github.com/drewbotcarrothers/makemoneyoptimizer  
Disclosure: https://makemoneyoptimizer.com/affiliate-disclosure  

> Tip: Approvals are much stronger once the **custom domain is live** with real articles. If a form asks for the site URL, use the live domain after Hostinger deploy.

---

## Status tracker

Synced **2026-10-07** from the master list Google Sheet (https://docs.google.com/spreadsheets/d/14HoPPU2JNXL1Z8_5vfh2DnwyJeA90dE0AKPXMb-Sf_A/edit), 85 programs. The Sheet is the source of
truth for networks, apply URLs and commissions; full detail is in [`docs/AFFILIATE-PROGRAMS.md`](docs/AFFILIATE-PROGRAMS.md).
**Status:** every program is **Not applied** except Amazon.ca Associates (**Approved**). Change a row's status here (and in the
Sheet) when you apply or hear back. **Never paste a tracking URL into an article**: when a program approves you, change only
`href` + `approved: true` in `src/lib/affiliate-placeholders.ts`.

Priority: **A** apply now · **B** after the related comparison/roundup posts are live · **C** optional/niche · **Watch** closed or not a publisher program (plain links).

| Program | Key in `affiliate-placeholders.ts` | Apply URL | Network | Priority | Status | Notes |
|---|---|---|---|---|---|---|
| Amazon.ca Associates | `amazon-ca` | https://affiliate-program.amazon.ca/ | In-house (Amazon Associates) | A | **Approved** 2026-10-05 | Only approved program. Store/tracking ID `makemoneyoptimizer-20`. Deep links via `asin` (amazon.ca/dp/<ASIN>?tag=…) or `search` (amazon.ca/s?k=…&tag=…); see "Amazon.ca deep links" below. Biggest lever: add gear roundups for local-services (127 posts). |
| Fiverr Affiliates | `fiverr` | https://www.fiverr.com/partnerships/affiliates | In-house (Fiverr Partnerships) | A | Not applied | Pays on buyers, not on sellers joining — frame as 'outsource' content. |
| FreshBooks | `freshbooks` | https://www.freshbooks.com/affiliate-program | PartnerStack | A | Not applied | Fastest payback: most-linked placeholder on the site. Trial bounty means earnings even before paid conversion. |
| H&R Block Canada | `hr-block` | https://www.hrblock.ca/partner-with-us (→ Affiliate Program on impact.com); codes: https://www.hrblock.ca/affiliate/ | Impact (per hrblock.ca 'Partner with us' page) | A | Not applied | Official partner page confirms an Impact affiliate program (previously unclear). |
| Hostinger | `hostinger` | https://www.hostinger.com/affiliates | In-house | A | Not applied | Genuine fit: MMO is hosted on Hostinger. |
| Jobber | `jobber` | https://www.getjobber.com/affiliates/ | In-house page; network reported as CJ since Mar 2025 (was PartnerStack) — verify | A | Not applied | Best fit for MMO's largest category (127 posts). Repo note says PartnerStack link — re-check which platform the Apply button uses. |
| KOHO | `koho` | https://www.koho.ca/affiliate/ | Impact | A | Not applied | Second most-linked placeholder. Funded-account conversion only (sign-up alone may not pay) — verify. |
| Shopify (incl. Shopify POS) | `shopify` | https://www.shopify.com/ca/affiliates | Shopify Affiliate Program (in-house dashboard; repo notes Impact — confirm) | A | Not applied | Flagship ecommerce offer. Payouts in 80+ currencies. |
| Square Canada | `square` | https://squareup.com/ca/en/affiliate | Impact | A | Not applied | — |
| TurboTax Canada | `turbotax-canada` | https://turbotax.intuit.ca/affiliates/ (links to CJ publisher sign-up) | CJ (Commission Junction) | A | Not applied | Seasonal earner. Pair with tax calculator pages. |
| Wave | `wave` | https://www.waveapps.com/affiliate | Impact | A | Not applied | Strong Canada fit; free product means paid-service conversion only — expect lower EPC than FreshBooks. |
| Wealthsimple (Tax, Cash/Chequing, Invest) | `wealthsimple-tax` / `wealthsimple` | https://www.wealthsimple.com/en-ca/legal/affiliate-guidelines (guidelines) — apply via Impact marketplace | Impact (per third-party listings; confirm on application) | A | Not applied | Guidelines require specific Wealthsimple disclosure wording; add it to the bottom AffiliateDisclosure only once approved (see docs, section 5). |
| Adobe (Express, Creative Cloud, Stock) | — | https://www.adobe.com/ca/affiliates.html | Partnerize | B | Not applied | Best available design-tool program while Canva's is closed. |
| beehiiv | `beehiiv` | https://www.beehiiv.com/partners | In-house (beehiiv partner dashboard) | B | Not applied | — |
| Canadian Tire | — | Create Impact account → search 'Canadian Tire' in marketplace (no direct link published) | Impact | B | Not applied | Official page blocked automated fetch; low % but high trust for Canadian shoppers. |
| Descript | `descript` | https://www.descript.com/affiliate | PartnerStack | B | Not applied | — |
| EQ Bank | `eq-bank` | Join Rakuten Advertising (https://rakutenadvertising.com/en-ca/affiliate/) then search EQ Bank | Rakuten Advertising | B | Not applied | — |
| Etsy | `etsy` | https://www.etsy.com/ca/affiliates | Awin (Affiliates) / Creator Collective (social) | B | Not applied | Pays on buyer purchases, so fit is limited for seller guides; best on printable/digital-product 'examples' posts. |
| Grammarly | `grammarly` | https://www.grammarly.com/affiliates | Impact | B | Not applied | — |
| Helcim | — | https://www.helcim.com/partnerships/ (apply: https://www.helcim.com/partner-application/) | In-house | B | Not applied | Canadian alternative to Square for comparison posts. |
| Housecall Pro | `housecall-pro` | https://www.housecallpro.com/paid-affiliates/ | PartnerStack | B | Not applied | Lead bounty pays even before conversion, but low-quality leads risk termination — use only in 'compare software' context. |
| Kit (ConvertKit) | `kit` | https://kit.com/affiliate | PartnerStack | B | Not applied | — |
| Make (Make.com) | `make` | https://www.make.com/en/affiliate | In-house | B | Not applied | — |
| Mark's | — | Impact marketplace → search 'Mark's' | Impact | B | Not applied | — |
| Ownr | `ownr` | https://www.ownr.co/affiliates (apply: https://market.partnerstack.com/page/ownr) | PartnerStack | B | Not applied | Natural fit for province/city guides and 'do I need to register?' content. |
| Payhip | `payhip` | https://payhip.com/partner-program | In-house | B | Not applied | Good Gumroad substitute in comparison posts since Gumroad has no platform affiliate program. |
| Printful | `printful` | https://www.printful.com/ca/affiliates | In-house | B | Not applied | — |
| Printify | `printify` | https://printify.com/affiliate/ | PartnerStack (in-house page) | B | Not applied | — |
| Publisher Rocket | — | https://publisherrocket.com/affiliate-program/ | In-house | B | Not applied | Also useful for Andrew's own ebook work. |
| QuickBooks Canada | `quickbooks` | https://quickbooks.intuit.com/partners/qbbusinessaffiliates/ | PartnerStack (Canada program); US program on CJ | B | Not applied | Official page blocked automated fetch today; details carried from repo research. |
| Rakuten.ca (Influencer program) | — | https://www.rakuten.ca/influencers | In-house (Rakuten Canada influencer program — distinct from personal Refer-a-Friend) | B | Not applied | A real publisher route (not just a personal referral code). |
| Squarespace | `squarespace` | https://www.squarespace.com/affiliates | Impact | B | Not applied | Check whether Acuity Scheduling ('acuity' key) is commissionable under this program. |
| Teachable | `teachable` | https://www.teachable.com/partners | PartnerStack | B | Not applied | — |
| Thinkific | `thinkific` | https://www.thinkific.com/affiliates/ | PartnerStack | B | Not applied | — |
| Wise | — | https://wise.com/help/articles/2978038/whats-the-wise-partnership-program | Partnerize | B | Not applied | Useful for freelancers paid in USD. |
| Wix | `wix` | https://www.wix.com/about/affiliates | Impact | B | Not applied | — |
| Zensurance | `zensurance` | https://www.fintelconnect.com/brands/directory/zensurance-affiliate-program/ | Fintel Connect | B | Not applied | Excellent fit for the 127 local-services posts (liability insurance is a real need). Exclude QC traffic in copy. |
| Best Buy Canada | — | https://www.bestbuy.ca/en-ca/about/affiliate-program/blt82df225e80ec75e9 | Impact | C | Not applied | Program state: Watch rates. Join only if rates have recovered; otherwise use Amazon.ca for tech. |
| Bonsai | — | https://www.hellobonsai.com/affiliates | In-house | C | Not applied | — |
| Caddle (referral) | — | https://getcaddle.com/terms-of-use/ | Personal ambassador referral | C | Not applied | Personal referral only. |
| Chit Chats (referral) | `chit-chats` | https://chitchats.com/referral | Personal referral program (not a publisher network) | C | Not applied | Credit only — only worth it if Andrew ships. Prefer plain link. |
| Coursera | — | https://www.coursera.org/about/affiliates | Impact | C | Not applied | — |
| Decathlon Canada | — | https://www.decathlon.ca/en/lp/i/affiliate | Impact | C | Not applied | Official page blocked automated fetch; figures from search snippet of the official page. |
| eBay Partner Network | — | https://partnernetwork.ebay.com/ | In-house (EPN) | C | Not applied | Low priority — MMO readers are sellers, not buyers. |
| ElevenLabs | — | https://elevenlabs.io/affiliates | PartnerStack | C | Not applied | — |
| Envato | — | https://www.envato.com/affiliates/ | Impact | C | Not applied | — |
| Epidemic Sound | — | https://www.epidemicsound.com/community-program/ | In-house Community Program (CJ listing also reported) | C | Not applied | — |
| Freecash (referral) | — | https://freecash.com/academy/en/discover/partner/affiliates | Personal referral ('affiliate program' = per-friend referral) + separate business affiliate program | C | Not applied | Do not promote: offer walls can include casino-style game offers. |
| GoDaddy | — | https://www.godaddy.com/en-ca/affiliate-programs | CJ | C | Not applied | Prefer Hostinger/Namecheap. |
| Google Workspace | — | https://workspace.google.com/intl/en_ca/landing/partners/referral/ | Google in-house (Referral Program; separate Affiliate Program for larger audiences) | C | Not applied | — |
| HubSpot | — | https://www.hubspot.com/partners/affiliates | In-house (HubSpot Affiliate) | C | Not applied | — |
| Kajabi | `kajabi` | https://help.kajabi.com/en/articles/17175735-become-a-kajabi-partner | In-house (Kajabi Partner Program) | C | Not applied | Skip unless Andrew uses Kajabi. |
| Later | — | https://later.com/affiliate-program/ | In-house | C | Not applied | — |
| Lenovo Canada | — | https://www.lenovo.com/ca/en/landingpage/promotions/affiliate/affiliate-program/ | Impact | C | Not applied | — |
| LinkedIn Learning | — | Impact marketplace → LinkedIn Learning | Impact | C | Not applied | Official page not found (404); low confidence. |
| Mistplay (referral) | — | In-app referral link (https://support.mistplay.com/hc/en-us/articles/24885443610011) | Personal referral link only (no publisher program found) | C | Not applied | Units, not cash. Personal referral — not a monetization program. |
| Namecheap | `namecheap` | https://www.namecheap.com/affiliates/ | Impact | C | Not applied | — |
| Neo Financial | `neo-financial` | https://www.fintelconnect.com/brands/directory/neo-financial-affiliate-program/ | Impact + Fintel Connect | C | Not applied | Route card content to Canadian Credit Card Finder. |
| Payoneer | — | https://www.payoneer.com/become-a-partner/ | In-house Partner Program | C | Not applied | — |
| Podia | `podia` | https://affiliates.podia.com/ | In-house (Rewardful) | C | Not applied | — |
| Qtrade Direct Investing | — | https://www.qtrade.ca/en/investor/about/why-qtrade/affiliateprogram.html | Fintel Connect | C | Not applied | Better fit for Canadian Optimizer. |
| Questrade | — | https://www.questrade.com/affiliates/overview | In-house | C | Not applied | Better placed on Canadian Optimizer; cross-link from MMO instead. |
| Ratehub.ca Partner Portal | — | https://www.ratehub.ca/affiliate-program | In-house (Ratehub Partner Portal) | C | Not applied | Competes with sister sites (Latest Mortgage Rates, Canadian Credit Card Finder) — prefer internal links. |
| Riverside | `riverside` | https://riverside.com/affiliate-program | In-house page (platform: verify) | C | Not applied | — |
| Semrush | — | https://www.semrush.com/lp/affiliate-program/en/ | Impact | C | Not applied | High payout; audience is beginners so conversion will be low. |
| Shippo | — | https://goshippo.com/affiliates | PartnerStack | C | Not applied | Flag: limited Canada relevance. |
| ShipStation | — | https://www.shipstation.com/en-ca/affiliate-program/ | Impact | C | Not applied | Better for scaled sellers than casual flippers. |
| Shutterstock | — | Impact marketplace → Shutterstock | Impact | C | Not applied | Official page blocked automated fetch. Contributor referral program is separate. |
| Simplii Financial | — | https://www.fintelconnect.com/brands/directory/simplii-financial-affiliate-program/ | Fintel Connect (publisher CPA); separate personal Refer-a-Friend/affiliate referral ($50 to friend) | C | Not applied | — |
| Skillshare | — | https://www.skillshare.com/en/affiliates | Impact | C | Not applied | — |
| Stallion Express (referral) | `stallion-express` | https://stallion.ca/referral-program/ | Personal referral program | C | Not applied | Tiny payout; plain link is fine. |
| Staples Canada | — | Impact marketplace → search 'Staples Canada' | Impact | C | Not applied | Low rates; useful mainly for print & copy services mention. |
| SumUp | `sumup` | https://www.sumup.com/en-gb/affiliate-program/ | Impact | C | Not applied | Flag: Canada payout eligibility unconfirmed. |
| Survey Junkie | — | https://www.surveyjunkie.com/partnerships | In-house affiliate page + CPA networks | C | Not applied | — |
| Swagbucks | — | Impact marketplace → Swagbucks (Prodege) | Impact | C | Not applied | — |
| Systeme.io | — | https://systeme.io/affiliate-program | In-house | C | Not applied | — |
| Tangerine | — | https://www.fintelconnect.com/brands/directory/tangerine-bank-affiliate-program/ | Fintel Connect | C | Not applied | Weak MMO fit; better for sister sites. |
| Udemy | — | https://www.udemy.com/affiliate/ | Impact | C | Not applied | Traffic minimum applies. |
| Vendoo | — | https://www.vendoo.co/referral-program | In-house Refer-a-Friend program | C | Not applied | — |
| Vistaprint Canada | `vistaprint` | Verify (no official page; vistaprint.ca/affiliate-program returns 404) | Third-party networks only (FlexOffers etc.) — verify | C | Not applied | Low confidence; keep plain links until an official route is confirmed. |
| Walmart Canada | — | Verify via Rakuten Advertising marketplace | Rakuten Advertising / FlexOffers (per listings) | C | Not applied | Low value; only if already on Rakuten Advertising for EQ Bank. |
| Canva | `canva` | https://www.canva.com/help/canva-affiliate-marketing-program/ | Canvassador program (then affiliate) | Watch | Not applied | Program state: Closed — re-check quarterly. Keep plain links; re-check each quarter. |
| Gig platform worker referrals (Uber, Lyft, DoorDash, SkipTheDishes, Instacart, Amazon Flex, TaskRabbit, Rover) | — | — | Personal referral codes (no publisher affiliate programs found for these) | Watch | Not applied | Program state: Not a program. Monetize gig-apps content via Amazon.ca gear, KOHO/Wealthsimple, tax software and Zensurance/insurance instead. |
| Notion | — | https://www.notion.com/affiliates | In-house | Watch | Not applied | Program state: Closed — re-check. |
| Zapier | `zapier` | https://zapier.com/l/solution-partner | Solution Partner Program only | Watch | Not applied | Program state: Not eligible (plain link). Keep plain links; push Make in comparisons. |

**Dropped / no publisher program** (not tracked; see docs section 6): Costco Canada, Home Depot Canada, Princess Auto, Home Hardware / RONA / Lowe's Canada, BigCommerce, Calendly, UFile, Gumroad (site-wide), Checkout 51, Moneris, APOLLO Insurance.

### Suggested order to apply (fastest payback first)

1. **FreshBooks** (PartnerStack) — ~211 links already on the site.
2. **KOHO** (Impact) — ~162 links.
3. **Wealthsimple** (Impact; covers Tax, Invest, Cash) — ~38 Wealthsimple Tax links + the money/tax comparisons. Read the guidelines first.
4. **H&R Block**, **Shopify**, **Square**, **Wave** (all Impact) — one Impact account covers them plus Wix/Squarespace/Grammarly/Udemy.
5. **Jobber** (apply at getjobber.com/affiliates; network reportedly CJ — verify) + **Housecall Pro** (PartnerStack) — local services is our biggest category.
6. **Hostinger** (in-house), **TurboTax Canada** (CJ, before tax season), **Fiverr** (in-house).
7. **Zensurance** (Fintel Connect), **Helcim** (in-house), **Adobe** and **Wise** (Partnerize).
8. **Kit**, **beehiiv**, **Teachable/Thinkific**, **Printify**, **Ownr**, **Descript**, **Make** as their comparison posts gain traffic.
9. Re-check **Canva** and **Notion** (both closed) each quarter. Do not promote **Freecash**.

Tip: create one **PartnerStack** account and one **Impact** account first; most of the A/B list lives there. Fintel Connect (Zensurance) and Partnerize (Adobe, Wise) come next.

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
**Associates Store ID:** `makemoneyoptimizer-20` (live; confirmed from the entry short link's redirect).

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
**Once approved (not before):** add Wealthsimple's required disclosure wording to the bottom-of-post `AffiliateDisclosure` only, on posts that link the `wealthsimple`/`wealthsimple-tax` keys. Never at the top of posts or next to links, tables or starter kits. See `docs/AFFILIATE-PROGRAMS.md` section 5.

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

### H&R Block Canada (Impact)

**Apply:** https://www.hrblock.ca/partner-with-us → Affiliate Program on impact.com (affiliate discount codes:
https://www.hrblock.ca/affiliate/). Commission is not published; check it in Impact.  
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

### Jobber (in-house page; network reportedly CJ — verify)

**Apply:** https://www.getjobber.com/affiliates/ (the network reportedly moved from PartnerStack to CJ in March 2025;
use whatever the Apply button opens). Published terms: 20% of subscription fees for 12 months, 90-day cookie.  
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
When it reopens: [~47] guides mention Canva for flyers, social posts, printables and thumbnails. Until then,
the design-tool program to apply to is **Adobe** via Partnerize (https://www.adobe.com/ca/affiliates.html).

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

## Amazon.ca deep links

All Amazon.ca links go through `<AffiliateLink program="amazon-ca" …>` (also used by `StarterKit` and
`ComparisonTable`). The URL is built in `src/lib/affiliate-placeholders.ts`:

| Prop | URL | Use for |
|---|---|---|
| `asin="B00MRMU2HU"` | `https://www.amazon.ca/dp/B00MRMU2HU?tag=makemoneyoptimizer-20` | A named product or model |
| `search="ice melt"` | `https://www.amazon.ca/s?k=ice+melt&tag=makemoneyoptimizer-20` | A generic category |
| neither | `https://link.amazon/B04lZw4kk` (homepage) | Avoid; fallback only |

Rules:

- **Verify every ASIN** by opening `https://www.amazon.ca/dp/<ASIN>` and checking the product title matches the
  product named in the copy. Prefer ASINs already cited in the post's `sources`.
- **Never invent or guess an ASIN** (and don't reuse amazon.com ASINs without checking amazon.ca). If Amazon blocks
  the fetch, use a `search` link instead.
- Keep `search` to one product in shopper words ("two stage snow blower", not "snow blower gas can ear muffs").
- Links keep `rel="sponsored nofollow noopener"` and `target="_blank"`. No visible labels next to links; the
  disclosure is the layout's bottom-of-post block only.
- StarterKit rows naming two products use `links: [{ label, asin }, …]`.

## Decision log

| Date | Event |
|------|--------|
| 2026-09-13 | Disclosure page expanded; application kit created |
| 2026-10-05 | Amazon.ca Associates entry link wired (`https://link.amazon/B04lZw4kk`); article disclosure bottom-only |
| 2026-10-09 | Amazon.ca deep links: `asin` → amazon.ca/dp/<ASIN>?tag=makemoneyoptimizer-20, `search` → amazon.ca/s?k=…&tag=makemoneyoptimizer-20; YouTube guide uses verified ASINs; all other amazon-ca links use specific search keywords |
| 2026-10-07 | Status tracker expanded to ~60 programs (apply URL, network, priority, verified flag); per-program blurbs; new placeholder keys added for comparison posts and starter kits |
| 2026-10-07 | Tracker re-synced from the master list Google Sheet (85 programs); all statuses Not applied except Amazon (Approved); H&R Block (Impact), Jobber (CJ, verify), Zensurance (Fintel) updated; Wealthsimple disclosure goes in the bottom AffiliateDisclosure only after approval; Freecash not promoted |
