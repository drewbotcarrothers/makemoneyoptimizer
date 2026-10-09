/**
 * Affiliate destinations for in-article tool mentions.
 *
 * When a program is approved, set `approved: true` and the live tracking href.
 * Unapproved programs keep ordinary merchant pages. AffiliateLink renders them
 * as normal non-affiliate outbound links (no visible TODO marker, no sponsored
 * rel). Source comments may still say TODO-AFFILIATE for editors — never invent
 * tracking URLs.
 *
 * Amazon.ca Associates deep links (store/tracking ID `makemoneyoptimizer-20`):
 * - `asin`   -> https://www.amazon.ca/dp/<ASIN>?tag=makemoneyoptimizer-20
 *               Use only ASINs you fetched on amazon.ca and matched to the
 *               named product. Never invent or guess an ASIN.
 * - `search` -> https://www.amazon.ca/s?k=<keywords>&tag=makemoneyoptimizer-20
 *               For generic categories ("a lavalier mic", "ice melt").
 * - neither  -> the entry-point short link (homepage). Avoid this.
 */
export const AMAZON_CA_TAG = 'makemoneyoptimizer-20';
const AMAZON_CA_BASE = 'https://www.amazon.ca';
const ASIN_RE = /^[A-Z0-9]{10}$/;

export const AFFILIATE_PROGRAMS = {
  'amazon-ca': {
    name: 'Amazon Associates (Canada)',
    href: 'https://link.amazon/B04lZw4kk',
    approved: true,
  },
  koho: {
    name: 'KOHO',
    /** TODO-AFFILIATE: replace with the approved KOHO affiliate URL. */
    href: 'https://www.koho.ca/',
    approved: false,
  },
  freshbooks: {
    name: 'FreshBooks',
    /** TODO-AFFILIATE: replace with the approved FreshBooks affiliate URL. */
    href: 'https://www.freshbooks.com/',
    approved: false,
  },
  'wealthsimple-tax': {
    name: 'Wealthsimple Tax',
    /** TODO-AFFILIATE: replace with the approved Wealthsimple Tax affiliate URL. */
    href: 'https://www.wealthsimple.com/en-ca/tax',
    approved: false,
  },
  'turbotax-canada': {
    name: 'TurboTax Canada',
    /** TODO-AFFILIATE: replace with the approved TurboTax Canada affiliate URL. */
    href: 'https://turbotax.intuit.ca/',
    approved: false,
  },
  shopify: {
    name: 'Shopify',
    /** TODO-AFFILIATE: replace with the approved Shopify affiliate URL. */
    href: 'https://www.shopify.com/ca',
    approved: false,
  },
  canva: {
    name: 'Canva',
    /** TODO-AFFILIATE: replace with the approved Canva affiliate URL. */
    href: 'https://www.canva.com/',
    approved: false,
  },
  hostinger: {
    name: 'Hostinger',
    /** TODO-AFFILIATE: replace with the approved Hostinger affiliate URL. */
    href: 'https://www.hostinger.com/ca',
    approved: false,
  },
  gumroad: {
    name: 'Gumroad',
    /** TODO-AFFILIATE: replace with the approved Gumroad affiliate URL. */
    href: 'https://gumroad.com/',
    approved: false,
  },
  etsy: {
    name: 'Etsy',
    /** TODO-AFFILIATE: replace with the approved Etsy affiliate URL. */
    href: 'https://www.etsy.com/',
    approved: false,
  },
  printful: {
    name: 'Printful',
    /** TODO-AFFILIATE: replace with the approved Printful affiliate URL. */
    href: 'https://www.printful.com/ca',
    approved: false,
  },
  fiverr: {
    name: 'Fiverr',
    /** TODO-AFFILIATE: replace with the approved Fiverr affiliate URL (see AFFILIATES.md). */
    href: 'https://www.fiverr.com/',
    approved: false,
  },
  wealthsimple: {
    name: 'Wealthsimple',
    /** TODO-AFFILIATE: replace with the approved Wealthsimple affiliate URL (see AFFILIATES.md). */
    href: 'https://www.wealthsimple.com/en-ca',
    approved: false,
  },
  wave: {
    name: 'Wave',
    /** TODO-AFFILIATE: replace with the approved Wave affiliate URL (see AFFILIATES.md). */
    href: 'https://www.waveapps.com/',
    approved: false,
  },
  quickbooks: {
    name: 'QuickBooks Canada',
    /** TODO-AFFILIATE: replace with the approved QuickBooks Canada affiliate URL (see AFFILIATES.md). */
    href: 'https://quickbooks.intuit.com/ca/',
    approved: false,
  },
  'hr-block': {
    name: 'H&R Block Canada',
    /** TODO-AFFILIATE: replace with the approved H&R Block Canada affiliate URL (see AFFILIATES.md). */
    href: 'https://www.hrblock.ca/',
    approved: false,
  },
  'eq-bank': {
    name: 'EQ Bank',
    /** TODO-AFFILIATE: replace with the approved EQ Bank affiliate URL (see AFFILIATES.md). */
    href: 'https://www.eqbank.ca/',
    approved: false,
  },
  'neo-financial': {
    name: 'Neo Financial',
    /** TODO-AFFILIATE: replace with the approved Neo Financial affiliate URL (see AFFILIATES.md). */
    href: 'https://www.neofinancial.com/',
    approved: false,
  },
  square: {
    name: 'Square Canada',
    /** TODO-AFFILIATE: replace with the approved Square Canada affiliate URL (see AFFILIATES.md). */
    href: 'https://squareup.com/ca/en',
    approved: false,
  },
  sumup: {
    name: 'SumUp Canada',
    /** TODO-AFFILIATE: replace with the approved SumUp Canada affiliate URL (see AFFILIATES.md). */
    href: 'https://www.sumup.com/en-ca/',
    approved: false,
  },
  jobber: {
    name: 'Jobber',
    /** TODO-AFFILIATE: replace with the approved Jobber affiliate URL (see AFFILIATES.md). */
    href: 'https://www.getjobber.com/',
    approved: false,
  },
  'housecall-pro': {
    name: 'Housecall Pro',
    /** TODO-AFFILIATE: replace with the approved Housecall Pro affiliate URL (see AFFILIATES.md). */
    href: 'https://www.housecallpro.com/',
    approved: false,
  },
  calendly: {
    name: 'Calendly',
    /** Calendly has no affiliate, referral, or reseller program (calendly.com/partners/contact, checked 2026-10-07). Plain link only. */
    href: 'https://calendly.com/',
    approved: false,
  },
  acuity: {
    name: 'Acuity Scheduling',
    /** TODO-AFFILIATE: replace with the approved Acuity Scheduling affiliate URL (see AFFILIATES.md). */
    href: 'https://acuityscheduling.com/',
    approved: false,
  },
  kit: {
    name: 'Kit',
    /** TODO-AFFILIATE: replace with the approved Kit affiliate URL (see AFFILIATES.md). */
    href: 'https://kit.com/',
    approved: false,
  },
  beehiiv: {
    name: 'beehiiv',
    /** TODO-AFFILIATE: replace with the approved beehiiv affiliate URL (see AFFILIATES.md). */
    href: 'https://www.beehiiv.com/',
    approved: false,
  },
  wix: {
    name: 'Wix',
    /** TODO-AFFILIATE: replace with the approved Wix affiliate URL (see AFFILIATES.md). */
    href: 'https://www.wix.com/',
    approved: false,
  },
  squarespace: {
    name: 'Squarespace',
    /** TODO-AFFILIATE: replace with the approved Squarespace affiliate URL (see AFFILIATES.md). */
    href: 'https://www.squarespace.com/',
    approved: false,
  },
  namecheap: {
    name: 'Namecheap',
    /** TODO-AFFILIATE: replace with the approved Namecheap affiliate URL (see AFFILIATES.md). */
    href: 'https://www.namecheap.com/',
    approved: false,
  },
  thinkific: {
    name: 'Thinkific',
    /** TODO-AFFILIATE: replace with the approved Thinkific affiliate URL (see AFFILIATES.md). */
    href: 'https://www.thinkific.com/',
    approved: false,
  },
  teachable: {
    name: 'Teachable',
    /** TODO-AFFILIATE: replace with the approved Teachable affiliate URL (see AFFILIATES.md). */
    href: 'https://www.teachable.com/',
    approved: false,
  },
  podia: {
    name: 'Podia',
    /** TODO-AFFILIATE: replace with the approved Podia affiliate URL (see AFFILIATES.md). */
    href: 'https://www.podia.com/',
    approved: false,
  },
  kajabi: {
    name: 'Kajabi',
    /** TODO-AFFILIATE: replace with the approved Kajabi affiliate URL (see AFFILIATES.md). */
    href: 'https://kajabi.com/',
    approved: false,
  },
  payhip: {
    name: 'Payhip',
    /** TODO-AFFILIATE: replace with the approved Payhip affiliate URL (see AFFILIATES.md). */
    href: 'https://payhip.com/',
    approved: false,
  },
  zapier: {
    name: 'Zapier',
    /** TODO-AFFILIATE: replace with the approved Zapier affiliate URL (see AFFILIATES.md). */
    href: 'https://zapier.com/',
    approved: false,
  },
  make: {
    name: 'Make',
    /** TODO-AFFILIATE: replace with the approved Make affiliate URL (see AFFILIATES.md). */
    href: 'https://www.make.com/en',
    approved: false,
  },
  descript: {
    name: 'Descript',
    /** TODO-AFFILIATE: replace with the approved Descript affiliate URL (see AFFILIATES.md). */
    href: 'https://www.descript.com/',
    approved: false,
  },
  riverside: {
    name: 'Riverside',
    /** TODO-AFFILIATE: replace with the approved Riverside affiliate URL (see AFFILIATES.md). */
    href: 'https://riverside.com/',
    approved: false,
  },
  'chit-chats': {
    name: 'Chit Chats',
    /** TODO-AFFILIATE: replace with the approved Chit Chats affiliate URL (see AFFILIATES.md). */
    href: 'https://chitchats.com/',
    approved: false,
  },
  'stallion-express': {
    name: 'Stallion Express',
    /** TODO-AFFILIATE: replace with the approved Stallion Express affiliate URL (see AFFILIATES.md). */
    href: 'https://stallion.ca/',
    approved: false,
  },
  printify: {
    name: 'Printify',
    /** TODO-AFFILIATE: replace with the approved Printify affiliate URL (see AFFILIATES.md). */
    href: 'https://printify.com/',
    approved: false,
  },
  ownr: {
    name: 'Ownr',
    /** TODO-AFFILIATE: replace with the approved Ownr affiliate URL (see AFFILIATES.md). */
    href: 'https://www.ownr.co/',
    approved: false,
  },
  vistaprint: {
    name: 'Vistaprint Canada',
    /** TODO-AFFILIATE: replace with the approved Vistaprint Canada affiliate URL (see AFFILIATES.md). */
    href: 'https://www.vistaprint.ca/',
    approved: false,
  },
  apollo: {
    name: 'APOLLO Insurance',
    /** TODO-AFFILIATE: no public small-business referral program found (see AFFILIATES.md); plain link. */
    href: 'https://apollocover.com/business-insurance',
    approved: false,
  },
  zensurance: {
    name: 'Zensurance',
    /** TODO-AFFILIATE: no public affiliate page found; ask partnerships team (see AFFILIATES.md). */
    href: 'https://www.zensurance.com/side-hustle-insurance',
    approved: false,
  },
  grammarly: {
    name: 'Grammarly',
    /** TODO-AFFILIATE: replace with the approved Grammarly affiliate URL (see AFFILIATES.md). */
    href: 'https://www.grammarly.com/',
    approved: false,
  },
} as const;

export type AffiliateProgram = keyof typeof AFFILIATE_PROGRAMS;

export function isAffiliateApproved(program: AffiliateProgram): boolean {
  return AFFILIATE_PROGRAMS[program].approved === true;
}

export interface AffiliateTarget {
  /** Amazon.ca ASIN (10 characters), verified on amazon.ca/dp/<ASIN>. */
  asin?: string;
  /** Amazon.ca search keywords, used when there is no ASIN. */
  search?: string;
}

/** Amazon.ca product page with the Associates tag. */
export function amazonCaProductHref(asin: string): string {
  const clean = asin.trim().toUpperCase();
  if (!ASIN_RE.test(clean)) {
    throw new Error(`Invalid Amazon ASIN "${asin}" (expected 10 letters/digits).`);
  }
  return `${AMAZON_CA_BASE}/dp/${clean}?tag=${AMAZON_CA_TAG}`;
}

/** Amazon.ca search results page with the Associates tag. */
export function amazonCaSearchHref(keywords: string): string {
  const q = encodeURIComponent(keywords.trim().replace(/\s+/g, ' ')).replace(/%20/g, '+');
  return `${AMAZON_CA_BASE}/s?k=${q}&tag=${AMAZON_CA_TAG}`;
}

export function affiliateHref(
  program: AffiliateProgram,
  target: AffiliateTarget | string = {},
): string {
  const { asin, search } = typeof target === 'string' ? { asin: undefined, search: target } : target;
  if (program === 'amazon-ca') {
    if (asin && asin.trim()) return amazonCaProductHref(asin);
    if (search && search.trim()) return amazonCaSearchHref(search);
  }
  return AFFILIATE_PROGRAMS[program].href;
}
