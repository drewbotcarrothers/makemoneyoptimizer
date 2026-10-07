# Canada-eligible affiliate programs — Make Money Optimizer reference

**Master source:** the affiliate master list Google Sheet, https://docs.google.com/spreadsheets/d/14HoPPU2JNXL1Z8_5vfh2DnwyJeA90dE0AKPXMb-Sf_A/edit (85 programs, verified 2026-10-07).
This file is a synced snapshot of that sheet (CSV export, 2026-10-07). When the two disagree, **the Sheet wins**:
update the Sheet first, then re-sync this file. Application status and paste-ready blurbs live in
[`AFFILIATES.md`](../AFFILIATES.md); program keys live in `src/lib/affiliate-placeholders.ts`.

**Brand fit:** side hustles, freelancing, ecommerce, gig work, tutoring, tools & gear — practical, disclosed, no income guarantees.

**How to use**
1. Apply to **Priority A** first, then B as the related comparison and roundup posts gain traffic.
2. Join the **networks** once (Impact, PartnerStack, CJ, Awin, Rakuten Advertising, Fintel Connect, Partnerize); many Canadian brands live there.
3. Commissions below are **as published** by each program (or its network listing) on 2026-10-07. They change; confirm terms, cookie windows and territory in the dashboard before promoting.
4. Never paste a tracking URL into an article. On approval, change only `href` + `approved: true` for the key in `src/lib/affiliate-placeholders.ts`.

**Disclaimer:** Not legal or financial advice. Finance and investing offers carry extra disclosure rules (see Wealthsimple below). No gambling, casino-style, sweepstakes-casino or lending offers. Always disclose material connections; on this site the affiliate disclosure sits at the **bottom of each post only** (`AffiliateDisclosure` in the layout), never next to links, tables or starter-kit boxes.

---

## Priority legend

| Tag | Meaning |
|-----|---------|
| **A** | Apply now — already linked across many posts, or core to the comparison posts |
| **B** | Strong secondary — apply once the related comparison/roundup posts are live |
| **C** | Optional / niche / low payout / better placed on a sister site |
| **Watch** | Closed, gated or not a publisher program right now — plain links only |

Counts in this snapshot: A 12, B 25, C 44, Watch 4.

---

## 1. Networks to join (doors to many Canadian brands)

| Network | Programs from the master list | Sign-up |
|---------|-------------------------------|---------|
| **Impact** | KOHO, Wealthsimple, H&R Block, Wave, Square, SumUp, Wix, Squarespace, Grammarly, Canadian Tire, Mark's, Staples, Best Buy, Udemy, Coursera, Skillshare and more | https://impact.com/ |
| **PartnerStack** | FreshBooks, QuickBooks Canada, Ownr, Housecall Pro, Printify, Kit, Thinkific, Teachable, Descript, ElevenLabs, Shippo | Via each brand's affiliate page |
| **CJ (Commission Junction)** | TurboTax Canada, GoDaddy; Jobber reportedly moved to CJ (verify) | https://www.cj.com/ |
| **Fintel Connect** | Zensurance, Qtrade, Simplii, Tangerine, Neo Financial | https://www.fintelconnect.com/ |
| **Rakuten Advertising** | EQ Bank, Walmart Canada | https://rakutenadvertising.com/ |
| **Partnerize** | Adobe, Wise | https://partnerize.com/ |
| **Awin** | Etsy | https://www.awin.com/ |
| **Amazon Associates** | Amazon.ca (approved) | https://affiliate-program.amazon.ca/ |

---

## 2. Catalogue by content category

Grouped by each program's primary content category in the Sheet (many fit several categories; see the mapping in
section 3). Columns come straight from the Sheet: priority, network, apply URL, commission as published, Canada
eligibility notes and status.

### Cross-category

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Amazon.ca Associates** | `amazon-ca` | A | In-house (Amazon Associates) | https://affiliate-program.amazon.ca/ | Fixed rates by category, 0–10%: e.g. Home Improvement / Patio, Lawn & Garden / Home / Outdoor Rec 6%; Camera, Cell phone accessories, Office 5%; Power & Hand Tools, Books, Sports 4%; Automotive 3.5%; Computers 1%; Grocery & gift cards 0%; all other 2% | Canadian program (associates.amazon.ca); CAD earnings; Amazon.ca storefront only | Approved |

### Local services (largest category)

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Jobber** | `jobber` | A | In-house page; network reported as CJ since Mar 2025 (was PartnerStack) — verify | https://www.getjobber.com/affiliates/ | 20% of subscription fees collected from referred clients for first 12 months (Partner Program Terms); referred clients get 20% off for 6 months | Canadian company; serves Canada & US | Not applied |
| **Square Canada** | `square` | A | Impact | https://squareup.com/ca/en/affiliate | Commission on activations + bonus for revenue-generating events across Payments, Hardware, Appointments, Invoices, Online etc. (amounts in Impact, not published) | Canadian program page (squareup.com/ca/en/affiliate); accepts affiliates worldwide where Impact supports the country; commissions paid in USD | Not applied |
| **Canadian Tire** | — | B | Impact | Create Impact account → search 'Canadian Tire' in marketplace (no direct link published) | Not published (third-party listings ~1% — verify) | Canadian retailer | Not applied |
| **Helcim** | — | B | In-house | https://www.helcim.com/partnerships/ (apply: https://www.helcim.com/partner-application/) | Revenue on referred merchants that start processing — amount set in agreement, not published | Canadian company; Canada Affiliate Partner Program Agreement | Not applied |
| **Housecall Pro** | `housecall-pro` | B | PartnerStack | https://www.housecallpro.com/paid-affiliates/ | $10 per new qualified lead (phone + email) + up to $180 per enrollment (one-time; varies by industry/plan) | Only available in US and Canada; referrals must be US/Canada-based (3+ outside = lose earning ability) | Not applied |
| **Mark's** | — | B | Impact | Impact marketplace → search 'Mark's' | Up to 4% (per third-party listings — verify) | Canadian retailer | Not applied |
| **Zensurance** | `zensurance` | B | Fintel Connect | https://www.fintelconnect.com/brands/directory/zensurance-affiliate-program/ | $50 CAD CPA per completed online insurance-quote application | Canada; EXCLUDES Quebec and the northern territories | Not applied |
| **SumUp** | `sumup` | C | Impact | https://www.sumup.com/en-gb/affiliate-program/ | Cost-per-order commissions on device sales (rates not published) | SumUp sells in Canada (sumup.com/en-ca), but the affiliate page found is UK — confirm a Canada campaign in Impact | Not applied |
| **Vistaprint Canada** | `vistaprint` | C | Third-party networks only (FlexOffers etc.) — verify | Verify (no official page; vistaprint.ca/affiliate-program returns 404) | Verify (third-party listings vary) | Canadian storefront (vistaprint.ca); no official Canadian affiliate page found | Not applied |
| **Walmart Canada** | — | C | Rakuten Advertising / FlexOffers (per listings) | Verify via Rakuten Advertising marketplace | Category-based; 0% on grocery, electronics, video games, many consumables (per network listing) — verify | Walmart.ca program is on third-party networks (official walmart.com program is US-only) | Not applied |

### Reselling & ecommerce

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Shopify (incl. Shopify POS)** | `shopify` | A | Shopify Affiliate Program (in-house dashboard; repo notes Impact — confirm) | https://www.shopify.com/ca/affiliates | Up to US$150 per qualified referral (Basic, Grow or Advanced paid plan); varies by referral location; no caps | Canada page (shopify.com/ca/affiliates); commission varies by referral location | Not applied |
| **Etsy** | `etsy` | B | Awin (Affiliates) / Creator Collective (social) | https://www.etsy.com/ca/affiliates | Percentage of revenue on qualifying sales — rate not published publicly (shown after approval) | Canadian storefront (etsy.com/ca); Etsy CA program on Awin | Not applied |
| **Printful** | `printful` | B | In-house | https://www.printful.com/ca/affiliates | 10% of referred customers' sales for 12 months + $25 for each first-time Printful Growth subscription | Canada-specific page (printful.com/ca); Printful has Canadian fulfillment | Not applied |
| **Printify** | `printify` | B | PartnerStack (in-house page) | https://printify.com/affiliate/ | 5% of every sale your referrals make for 12 months | Global; serves Canadian sellers | Not applied |
| **Publisher Rocket** | — | B | In-house | https://publisherrocket.com/affiliate-program/ | $60 per referred purchase | Global software; sells to Canadians | Not applied |
| **Chit Chats (referral)** | `chit-chats` | C | Personal referral program (not a publisher network) | https://chitchats.com/referral | Per-shipment Chit Chats credit (no cash value); max $500 credit per referral account per month | Canadian company | Not applied |
| **eBay Partner Network** | — | C | In-house (EPN) | https://partnernetwork.ebay.com/ | Category-level % of gross merchandise bought (rate card); excludes some items/deals | EPN supports eBay.ca; commissions based on eBay site where buyer checks out — confirm Canadian residency at sign-up | Not applied |
| **Shippo** | — | C | PartnerStack | https://goshippo.com/affiliates | $60 per new paid Pro plan subscriber | US-centric product — verify Canadian seller support before promoting | Not applied |
| **ShipStation** | — | C | Impact | https://www.shipstation.com/en-ca/affiliate-program/ | $35 per Starter, $75 per Standard, up to $400 per Premium referral | Canadian affiliate page (shipstation.com/en-ca) | Not applied |
| **Stallion Express (referral)** | `stallion-express` | C | Personal referral program | https://stallion.ca/referral-program/ | You earn $0.20 per referral for their first 3 months (per page); referral gets $25 on sign-up | Canadian company | Not applied |
| **Staples Canada** | — | C | Impact | Impact marketplace → search 'Staples Canada' | Not published (third-party listings 0.4%–1.6% — verify) | Canadian retailer | Not applied |
| **Vendoo** | — | C | In-house Refer-a-Friend program | https://www.vendoo.co/referral-program | 20% commission on each referral for 8 months; referral gets 25% off first month | Global app — verify which Canadian marketplaces are supported | Not applied |

### Online freelancing

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Fiverr Affiliates** | `fiverr` | A | In-house (Fiverr Partnerships) | https://www.fiverr.com/partnerships/affiliates | Marketplace: 25% of first order + 10% revenue share for 12 months; Fiverr Pro: 70% + 10%; Logo Maker: $30 + 10% | Global; serves Canadian buyers | Not applied |
| **Grammarly** | `grammarly` | B | Impact | https://www.grammarly.com/affiliates | $0.20 per free sign-up + $20 per Premium purchase (per Grammarly support/terms via search) | Global | Not applied |
| **Wise** | — | B | Partnerize | https://wise.com/help/articles/2978038/whats-the-wise-partnership-program | Not published on the official page found (per-qualifying-referral flat fee; verify in Partnerize) | Available in Canada; Partner program via Partnerize | Not applied |
| **Bonsai** | — | C | In-house | https://www.hellobonsai.com/affiliates | 200% of the referral's first monthly payment; 30% of yearly plans | Global — verify Canadian sales tax (GST/HST) support before recommending | Not applied |
| **Coursera** | — | C | Impact | https://www.coursera.org/about/affiliates | 15%–45% on eligible purchases (first month only for subscriptions) | Global | Not applied |
| **Google Workspace** | — | C | Google in-house (Referral Program; separate Affiliate Program for larger audiences) | https://workspace.google.com/intl/en_ca/landing/partners/referral/ | Referral (Canada): CAD 10/user (Starter), CAD 20 (Standard), CAD 29 (Plus); Affiliate Program offers higher rates (not published) | Canada referral rates in CAD | Not applied |
| **Lenovo Canada** | — | C | Impact | https://www.lenovo.com/ca/en/landingpage/promotions/affiliate/affiliate-program/ | Up to 5% (per official CA page via search) | Canadian program page | Not applied |
| **LinkedIn Learning** | — | C | Impact | Impact marketplace → LinkedIn Learning | Third-party listings: $10 per free trial / 35% on individual courses — verify | Global | Not applied |
| **Payoneer** | — | C | In-house Partner Program | https://www.payoneer.com/become-a-partner/ | Revenue share based on referred clients' activity; tiered (Registered/Silver/Gold/Platinum) — rates not published | Available in Canada | Not applied |
| **Udemy** | — | C | Impact | https://www.udemy.com/affiliate/ | 10% base on valid paid course sales (performance increases) | Accepts non-US affiliates incl. Canada | Not applied |

### Marketing for hire

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **HubSpot** | — | C | In-house (HubSpot Affiliate) | https://www.hubspot.com/partners/affiliates | 30% recurring for up to 1 year (up to $1,000+ per sale) | Global | Not applied |
| **Later** | — | C | In-house | https://later.com/affiliate-program/ | 30% (or higher) commission for every sale | Global (Vancouver-founded) | Not applied |
| **Semrush** | — | C | Impact | https://www.semrush.com/lp/affiliate-program/en/ | $100–$300 per sale (by toolkit; higher at loyalty tiers) + $10 per free trial | Global | Not applied |

### Content creation

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Hostinger** | `hostinger` | A | In-house | https://www.hostinger.com/affiliates | Starts at 40% of eligible sales and grows with volume (FAQ: up to 60% on certain AI/Horizons plans) | Global; Canadian page (hostinger.com/ca) | Not applied |
| **Adobe (Express, Creative Cloud, Stock)** | — | B | Partnerize | https://www.adobe.com/ca/affiliates.html | 85% of first month on monthly CC/Express plans; 8.33% of first year on prepaid annual plans; one-time (per search of official program info — verify) | Canadian affiliate page (adobe.com/ca/affiliates) | Not applied |
| **beehiiv** | `beehiiv` | B | In-house (beehiiv partner dashboard) | https://www.beehiiv.com/partners | Up to 60% for 12 months (Bronze 50% after first conversion, Silver 55%, Gold 60%); referrals get 14-day trial + 20% off 3 months | Global | Not applied |
| **Descript** | `descript` | B | PartnerStack | https://www.descript.com/affiliate | $25 per new subscriber (one-time) | Global | Not applied |
| **Kit (ConvertKit)** | `kit` | B | PartnerStack | https://kit.com/affiliate | 50% for first 12 months; plus 10–20% recurring after 12 months at Bronze/Silver/Gold (10/50/100+ paying referrals per year) | Global; sells in USD | Not applied |
| **Best Buy Canada** | — | C | Impact | https://www.bestbuy.ca/en-ca/about/affiliate-program/blt82df225e80ec75e9 | 'Competitive commission' — category rates shown in Impact (2025 trade-press report: temporarily cut to 0% baseline) — verify current rates | Canadian program; commission only on BestBuy.ca orders shipped to Canadian addresses (not app/in-store/pickup); marketplace items, Apple and Bose excluded | Watch rates |
| **Envato** | — | C | Impact | https://www.envato.com/affiliates/ | CPA by plan — monthly: up to $20/$40/$80 per month for first 3 months (Core/Plus/Ultimate); annual: $120/$250/$500 | Global | Not applied |
| **Epidemic Sound** | — | C | In-house Community Program (CJ listing also reported) | https://www.epidemicsound.com/community-program/ | Referral level: credits/discounts; Ambassador (after 12 paying referrals): free subscription + 50/50 revenue share on new subscribers' first 12 paid months | Global | Not applied |
| **Riverside** | `riverside` | C | In-house page (platform: verify) | https://riverside.com/affiliate-program | Up to 20% per subscription (up to $85+ per sale) | Global | Not applied |
| **Shutterstock** | — | C | Impact | Impact marketplace → Shutterstock | 20% on new-customer purchases (third-party listings — verify) | Global; Canada a supported market (third-party) | Not applied |
| **Skillshare** | — | C | Impact | https://www.skillshare.com/en/affiliates | 20% of revenue, up to $34, per new paying customer | Global | Not applied |
| **Canva** | `canva` | Watch | Canvassador program (then affiliate) | https://www.canva.com/help/canva-affiliate-marketing-program/ | N/A — closed | Global | Closed — re-check quarterly |

### Digital products

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Payhip** | `payhip` | B | In-house | https://payhip.com/partner-program | 50% lifetime recurring of Payhip's transaction fees and paid plans from referred sellers | Global; sells to Canadians | Not applied |
| **Teachable** | `teachable` | B | PartnerStack | https://www.teachable.com/partners | 30% recurring for 12 months on every sale | Global | Not applied |
| **Thinkific** | `thinkific` | B | PartnerStack | https://www.thinkific.com/affiliates/ | 30% recurring for lifetime of referral on standard plans; $150/month for Plus-plan referrals | Canadian company; global | Not applied |
| **Kajabi** | `kajabi` | C | In-house (Kajabi Partner Program) | https://help.kajabi.com/en/articles/17175735-become-a-kajabi-partner | One-time bounty for new partners; recurring 10% at 5 active referrals, 15% at 25, 20% at 50 (30% only for grandfathered partners) | Global | Not applied |
| **Podia** | `podia` | C | In-house (Rewardful) | https://affiliates.podia.com/ | 20%–30% recurring, capped at 12 months (Podia sources conflict — verify) | Global | Not applied |
| **Systeme.io** | — | C | In-house | https://systeme.io/affiliate-program | 60% lifetime recurring | Global; anyone can join | Not applied |
| **Notion** | — | Watch | In-house | https://www.notion.com/affiliates | Up to $50 per activated sign-up + 20% of year-one revenue | Global | Closed — re-check |

### Tech & AI

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Make (Make.com)** | `make` | B | In-house | https://www.make.com/en/affiliate | 35% of referred users' subscription payments for 12 months | Global | Not applied |
| **Squarespace** | `squarespace` | B | Impact | https://www.squarespace.com/affiliates | Payout per website or commerce subscription from first-time customers ($100–$200 per master terms, via search — verify) | Accepts affiliates anywhere Impact supports; paid in USD | Not applied |
| **Wix** | `wix` | B | Impact | https://www.wix.com/about/affiliates | Commission on Premium purchases (official page: 'recurring payouts'); third-party listings report flat $100 per Premium — verify in Impact | 'Publish your affiliate link in any region' | Not applied |
| **ElevenLabs** | — | C | PartnerStack | https://elevenlabs.io/affiliates | 22% of payments for first 12 months (Starter–Scale); 11% on Business plans | Global | Not applied |
| **GoDaddy** | — | C | CJ | https://www.godaddy.com/en-ca/affiliate-programs | Not verified (page blocked automated fetch) — verify in CJ | Canadian affiliate page (godaddy.com/en-ca/affiliate-programs) | Not applied |
| **Namecheap** | `namecheap` | C | Impact | https://www.namecheap.com/affiliates/ | 20% on domains; 35% on hosting & SSL (Namecheap KB) | Global | Not applied |
| **Zapier** | `zapier` | Watch | Solution Partner Program only | https://zapier.com/l/solution-partner | Not published | Global | Not eligible (plain link) |

### Taxes & money

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **FreshBooks** | `freshbooks` | A | PartnerStack | https://www.freshbooks.com/affiliate-program | $10 per qualified free trial + up to $200 per paid plan (by plan type) — PartnerStack listing; official page: 'earn up to $200 per sale' | Accepts affiliates from many countries subject to regional restrictions (auto-decline if restricted); has CAD pricing and GST/HST support | Not applied |
| **H&R Block Canada** | `hr-block` | A | Impact (per hrblock.ca 'Partner with us' page) | https://www.hrblock.ca/partner-with-us (→ Affiliate Program on impact.com); codes: https://www.hrblock.ca/affiliate/ | Not published (verify in Impact) | Canadian company (Calgary HQ); affiliate codes give 20% off (new) / 10% off (prior clients) software | Not applied |
| **KOHO** | `koho` | A | Impact | https://www.koho.ca/affiliate/ | Not published on official page ('earn commission on every new customer'). Third-party Impact listing reports a CPA for a funded account — verify in Impact | Canada-only product; page invites influencers, comparison sites and publishers | Not applied |
| **TurboTax Canada** | `turbotax-canada` | A | CJ (Commission Junction) | https://turbotax.intuit.ca/affiliates/ (links to CJ publisher sign-up) | Not published on official page (third-party directories conflict — verify in CJ) | Canadian program (turbotax.intuit.ca) | Not applied |
| **Wave** | `wave` | A | Impact | https://www.waveapps.com/affiliate | Not published on official page ('payout every time your link leads to a qualified referral'; third-party reports a flat per-paid-signup payout — verify) | Program for individuals/sites with a US- or Canada-based audience; referred business must be in US or Canada | Not applied |
| **Wealthsimple (Tax, Cash/Chequing, Invest)** | `wealthsimple-tax` / `wealthsimple` | A | Impact (per third-party listings; confirm on application) | https://www.wealthsimple.com/en-ca/legal/affiliate-guidelines (guidelines) — apply via Impact marketplace | Not published | Canada-only products | Not applied |
| **EQ Bank** | `eq-bank` | B | Rakuten Advertising | Join Rakuten Advertising (https://rakutenadvertising.com/en-ca/affiliate/) then search EQ Bank | Not published | Canada-only bank | Not applied |
| **Ownr** | `ownr` | B | PartnerStack | https://www.ownr.co/affiliates (apply: https://market.partnerstack.com/page/ownr) | $20 per sole proprietorship referral; $50 per incorporation or Minute Book plan; $50 per Managed Corporation plan; referral gets 15% off first purchase | Canada-only service | Not applied |
| **QuickBooks Canada** | `quickbooks` | B | PartnerStack (Canada program); US program on CJ | https://quickbooks.intuit.com/partners/qbbusinessaffiliates/ | Up to $250 per paid subscription (per Intuit help article, from 2026-10-07 repo check — verify) | Canada Business Affiliate Program for Canadian residents/organisations supporting small businesses | Not applied |
| **Neo Financial** | `neo-financial` | C | Impact + Fintel Connect | https://www.fintelconnect.com/brands/directory/neo-financial-affiliate-program/ | CPA — 'ask us about commission rates' (not published) | Canada-only | Not applied |
| **Qtrade Direct Investing** | — | C | Fintel Connect | https://www.qtrade.ca/en/investor/about/why-qtrade/affiliateprogram.html | $100 CAD CPA per new funded client (Fintel listing); Qtrade page also mentions net-sales commissions; paid quarterly via EFT | Canada; ideal audience DIY investors / $10K+ investable assets | Not applied |
| **Questrade** | — | C | In-house | https://www.questrade.com/affiliates/overview | Not published on page (FAQ asks you to apply; third-party listings report CPA — verify) | Canada-only; CIRO member | Not applied |
| **Ratehub.ca Partner Portal** | — | C | In-house (Ratehub Partner Portal) | https://www.ratehub.ca/affiliate-program | Mortgage tools: open to all, no commission. Credit cards/loans/insurance: commission varies by product, shared after approval | Canadian | Not applied |
| **Simplii Financial** | — | C | Fintel Connect (publisher CPA); separate personal Refer-a-Friend/affiliate referral ($50 to friend) | https://www.fintelconnect.com/brands/directory/simplii-financial-affiliate-program/ | CPA — not published (Fintel). Consumer referral program: $50 when friend opens eligible account (personal, not for paid ads) | Canada-only | Not applied |
| **Tangerine** | — | C | Fintel Connect | https://www.fintelconnect.com/brands/directory/tangerine-bank-affiliate-program/ | CPA varies by product — not published | Canada; Canadian citizens/PRs 18+ | Not applied |

### Gig apps & beermoney

| Program | Key | Priority | Network | Apply URL | Commission (as published) | Canada notes | Status |
|---|---|---|---|---|---|---|---|
| **Rakuten.ca (Influencer program)** | — | B | In-house (Rakuten Canada influencer program — distinct from personal Refer-a-Friend) | https://www.rakuten.ca/influencers | Flat fee per new member who signs up (amount not published) + $50 bonus after 10 qualified referrals | Canada-only (referrer and referee must be in Canada) | Not applied |
| **Caddle (referral)** | — | C | Personal ambassador referral | https://getcaddle.com/terms-of-use/ | Cash Back Credits when referral claims at least one offer; earnings capped at $2,000 | Canada-only | Not applied |
| **Decathlon Canada** | — | C | Impact | https://www.decathlon.ca/en/lp/i/affiliate | Up to 10% per sale (per Decathlon CA page via search) | Canadian program page (decathlon.ca) | Not applied |
| **Freecash (referral)** | — | C | Personal referral ('affiliate program' = per-friend referral) + separate business affiliate program | https://freecash.com/academy/en/discover/partner/affiliates | Page: 'earn $13 per referral' (personal referral) | Available in Canada | **Do not promote** (casino-style offers); Not applied |
| **Mistplay (referral)** | — | C | Personal referral link only (no publisher program found) | In-app referral link (https://support.mistplay.com/hc/en-us/articles/24885443610011) | 150 units when friend signs up + 350 when they reach Checkpoint 5; 15% of first five referrals' future earnings | Canadian company | Not applied |
| **Survey Junkie** | — | C | In-house affiliate page + CPA networks | https://www.surveyjunkie.com/partnerships | CPA per sign-up / first survey (rates via networks ~$1–$1.50 — verify) | Accepts US/CA/AU traffic (per network listings) | Not applied |
| **Swagbucks** | — | C | Impact | Impact marketplace → Swagbucks (Prodege) | Per verified sign-up (third-party listings ~$1.30–$3.50 — verify) | US & Canada (per listings) | Not applied |
| **Gig platform worker referrals (Uber, Lyft, DoorDash, SkipTheDishes, Instacart, Amazon Flex, TaskRabbit, Rover)** | — | Watch | Personal referral codes (no publisher affiliate programs found for these) | — | Varies by city; personal-account bonuses | Varies by city/province | Not a program |

---

## 3. Map to MMO content clusters

Which offers to attach first in each content category (from the Sheet's best-fit column; A then B, Watch excluded).
Amazon.ca fits every category for gear and supplies. Programs marked Watch or Dropped stay as plain links.

| Cluster | Priority A | Priority B | Notes |
|---------|------------|------------|-------|
| Local services (largest category) | Amazon.ca Associates, FreshBooks, Jobber, Square Canada, Wave | Canadian Tire, Helcim, Housecall Pro, Mark's, Ownr, Zensurance | Largest category: Jobber/Square at the "recurring clients" step, Zensurance for liability insurance (not Quebec or the territories), Amazon.ca starter kits. |
| Reselling & ecommerce | Amazon.ca Associates, Fiverr Affiliates, Shopify (incl. Shopify POS), Square Canada | Etsy, Helcim, Printful, Printify, Publisher Rocket, Wise | Shipping consolidators (Chit Chats, Stallion) are personal referrals only: prefer plain links. |
| Online freelancing | Amazon.ca Associates, Fiverr Affiliates, FreshBooks, KOHO, Square Canada, Wave, Wealthsimple (Tax, Cash/Chequing, Invest) | Descript, Grammarly, Ownr, QuickBooks Canada, Squarespace, Wise, Wix, Zensurance | Invoicing (FreshBooks/Wave) at the "first invoice" step; Wise/Payoneer for USD clients. |
| Marketing for hire | Amazon.ca Associates, Fiverr Affiliates, FreshBooks, Hostinger | Adobe (Express, Creative Cloud, Stock), Make (Make.com), Wix | Adobe replaces Canva while Canvassador is closed. |
| Content creation | Amazon.ca Associates, Hostinger, Shopify (incl. Shopify POS) | Adobe (Express, Creative Cloud, Stock), Descript, Grammarly, Kit (ConvertKit), Printful, Squarespace, Thinkific, Wise, beehiiv | Hostinger is a genuine fit (the site is hosted there). Adobe while Canva is closed. |
| Digital products | Amazon.ca Associates, Fiverr Affiliates, Hostinger, Shopify (incl. Shopify POS) | Adobe (Express, Creative Cloud, Stock), Etsy, Kit (ConvertKit), Payhip, Printful, Publisher Rocket, Teachable, Thinkific, beehiiv | Gumroad has no site-wide program; push Payhip. Kajabi needs a paid account. Notion closed. |
| Tech & AI | Amazon.ca Associates, Hostinger | Descript, Make (Make.com), Squarespace, Wix | Zapier is partner-only: plain links, push Make in comparisons. |
| Taxes & money | Amazon.ca Associates, FreshBooks, H&R Block Canada, KOHO, TurboTax Canada, Wave, Wealthsimple (Tax, Cash/Chequing, Invest) | EQ Bank, Ownr, QuickBooks Canada, Rakuten.ca (Influencer program), Zensurance | Wealthsimple needs its own disclosure sentence (see section 5). Investing/credit offers fit sister sites better. |
| Gig apps & beermoney | Amazon.ca Associates, KOHO, Wealthsimple (Tax, Cash/Chequing, Invest) | Canadian Tire, Mark's, Rakuten.ca (Influencer program) | Gig-platform worker referrals are personal codes, not programs. Freecash: do not promote (casino-style offers). Rakuten.ca influencer program is a real publisher route. |

---

## 4. Notable changes in this sync (2026-10-07)

- **Notion:** affiliate program closed ("currently not accepting new affiliates"). Watch; re-check.
- **Kajabi:** Partner Program requires an active **paid** Kajabi account; skip unless Andrew uses Kajabi.
- **Rakuten.ca:** has an **Influencer program** (https://www.rakuten.ca/influencers), a real publisher route distinct from the personal Refer-a-Friend code. Canada-only.
- **Adobe** (Express, Creative Cloud, Stock) via **Partnerize** (https://www.adobe.com/ca/affiliates.html) is the design-tool program to use while **Canva** (Canvassador) is closed.
- **Zapier:** Solution Partner Program only, not open to publishers. Keep `zapier` as a plain link; push Make in comparisons.
- **Freecash:** flagged. Offer walls can include casino-style game offers, which conflicts with the no-gambling rule. **Do not promote**; at most a plain, unlinked mention.
- **H&R Block Canada:** official "Partner with us" page confirms an Impact program (was "verify").
- **Jobber:** apply via https://www.getjobber.com/affiliates/; network reportedly moved from PartnerStack to CJ in March 2025 (verify which platform the Apply button uses).
- **Zensurance:** affiliate program on Fintel Connect ($50 CAD per completed online quote application, as published); excludes Quebec and the northern territories. Raised to B.
- **APOLLO Insurance:** moved to Dropped (no small-business referral program).
- **New in the list:** Helcim, Wise, Adobe, Mark's, Publisher Rocket, Rakuten.ca influencers, Notion (closed), plus several C-priority retail, finance and learning programs.

---

## 5. Wealthsimple disclosure requirement

Wealthsimple's affiliate guidelines (https://www.wealthsimple.com/en-ca/legal/affiliate-guidelines) require clear
disclosure on all content **plus specific Wealthsimple disclosure wording** at the beginning or end of the piece, and
note that Ad Standards, Competition Bureau, CIRO and securities rules apply (for example, Wealthsimple must not be
called a bank).

How we will handle it on this site:
- **Only once Wealthsimple approves us**, add the exact required sentence (copied from the guidelines or the Impact
  dashboard at that time) to the bottom-of-post `AffiliateDisclosure` component, shown on posts that link the
  `wealthsimple` or `wealthsimple-tax` keys.
- Do **not** add it at the top of posts, next to links, in comparison tables or in starter-kit boxes, and do not add
  it before approval (while unapproved, those keys render as plain links and there is no material connection).

---

## 6. Dropped / no publisher program

No program a Canadian content site can join right now. Keep plain links (or none) and re-check occasionally.

| Program | Why dropped | Source | What to do |
|---------|-------------|--------|------------|
| Costco Canada | No public self-serve affiliate program on costco.ca (the US program is US-focused; the Costco.ca Bazaarvoice program is for brands, not publishers) | https://resources.bazaarvoice.com/brand-invite-ca-costco.html | Plain links only |
| Home Depot Canada | Canada program reported shut down Dec 2022; listings conflict and no official live page was found | https://affi.io/m/home-depot | Re-check yearly; use Amazon.ca / Canadian Tire |
| Princess Auto | No affiliate program found | — | Plain links only |
| Home Hardware / RONA / Lowe's Canada | No public affiliate program surfaced in searches (not researched in depth) | — | Plain links only |
| BigCommerce | Affiliate program permanently closed May 17, 2025 | https://www.bigcommerce.com/partners/affiliate-program-closure/ | Drop |
| Calendly | 'We do not currently have an affiliate, referral, or reseller partner program' (partners contact page) | https://calendly.com/partners/contact | Plain link (`calendly` key) |
| UFile | No public affiliate program (ufile.ca/affiliate returns 404) | — | Drop |
| Gumroad (site-wide) | No platform-wide publisher program; affiliates are set per creator/product | https://gumroad.com/help/article/333-affiliates-on-gumroad | Plain link (`gumroad` key); push Payhip in comparisons |
| Checkout 51 | Referral program ended July 31, 2020; no referral links | https://support.checkout51.com/hc/en-us/articles/1260803521549-Does-Checkout-51-have-a-referral-program | Drop |
| Moneris | Partner programs are for ISOs, software platforms, associations and corporate partners; no content-publisher affiliate program | https://www.moneris.com/en/partners/partner-with-moneris | Use Square / Helcim |
| APOLLO Insurance | Affiliate API covers tenant insurance only; small-business products are sold via a broker portal; no public referral commission schedule | https://docs.apollocover.com/docs/affiliate-api/38ec6c33cc08a-create-an-application | Plain link (`apollo` key); use Zensurance (Fintel Connect) |

Also **not programs:** gig-platform worker referral codes (Uber, Lyft, DoorDash, SkipTheDishes, Instacart, Amazon Flex,
TaskRabbit, Rover), Mistplay and Caddle referrals. Monetize gig-apps content with Amazon.ca gear, banking, tax
software and insurance instead.

---

## 7. Suggested apply order

1. **Amazon.ca Associates** — approved 2026-10-05.
2. **FreshBooks** (PartnerStack) and **KOHO** (Impact) — the most-linked placeholders.
3. **Wealthsimple**, **H&R Block**, **Wave**, **Square**, **Shopify** — one Impact account; read Wealthsimple's guidelines first.
4. **Jobber** (verify CJ vs in-house) and **Housecall Pro** (PartnerStack) — local services is the biggest category.
5. **Hostinger** (in-house), **TurboTax Canada** (CJ, before tax season), **Fiverr** (in-house).
6. **Zensurance** (Fintel Connect), **Helcim**, **Adobe** (Partnerize), **Wise** (Partnerize).
7. Remaining B programs as their comparison posts gain traffic; C only when a post clearly needs it.

---

## 8. Quick eligibility checklist (before you apply)

- [ ] Live HTTPS site on makemoneyoptimizer.com
- [ ] `/affiliate-disclosure` live and linked in footer
- [ ] Original articles (not a placeholder site)
- [ ] About page with who you are / Canada focus
- [ ] Privacy policy mentioning affiliate cookies if required

---

## 9. Change log

| Date | Update |
|------|--------|
| 2026-09-13 | Initial Canada-eligible reference for MMO |
| 2026-10-07 | Expanded catalogue (~60 programs) by content category; Canva Canvassador closed; Calendly has no program; Wealthsimple disclosure-sentence requirement noted |
| 2026-10-07 | Synced from the master list Google Sheet (85 programs): catalogue tables, cluster mapping, Dropped section, notable changes (Notion closed, Kajabi paid-account rule, Rakuten.ca influencer program, Adobe via Partnerize, Zapier partner-only, Freecash not promoted), Wealthsimple disclosure handling |

Re-verify program pages and network listings before promoting; commissions and availability change.
