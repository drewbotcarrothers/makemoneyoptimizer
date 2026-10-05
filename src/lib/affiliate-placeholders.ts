/**
 * Affiliate destinations for in-article tool mentions.
 *
 * When a program is approved, set `approved: true` and the live tracking href.
 * Unapproved programs keep ordinary merchant pages and show a TODO-AFFILIATE marker.
 *
 * Amazon.ca Associates uses a single entry-point link (not per-ASIN URLs).
 * The optional `search` prop on AffiliateLink is kept for copy context but is
 * not appended to the approved Amazon href.
 */
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
} as const;

export type AffiliateProgram = keyof typeof AFFILIATE_PROGRAMS;

export function isAffiliateApproved(program: AffiliateProgram): boolean {
  return AFFILIATE_PROGRAMS[program].approved === true;
}

export function affiliateHref(program: AffiliateProgram, _search?: string): string {
  return AFFILIATE_PROGRAMS[program].href;
}
