/**
 * Affiliate destinations for in-article tool mentions.
 *
 * Andrew is not approved for these programs yet. Every href below is a normal
 * merchant page or Amazon.ca search — not a tracking link.
 *
 * TODO-AFFILIATE: when a program is approved, replace the href (or add an
 * Associates `tag`) in this file only. Article copy can stay as-is.
 */
export const AFFILIATE_PROGRAMS = {
  'amazon-ca': {
    name: 'Amazon Associates (Canada)',
    /** TODO-AFFILIATE: add `tag` (Associates ID) after approval. */
    searchBase: 'https://www.amazon.ca/s',
  },
  koho: {
    name: 'KOHO',
    /** TODO-AFFILIATE: replace with the approved KOHO affiliate URL. */
    href: 'https://www.koho.ca/',
  },
  freshbooks: {
    name: 'FreshBooks',
    /** TODO-AFFILIATE: replace with the approved FreshBooks affiliate URL. */
    href: 'https://www.freshbooks.com/',
  },
  'wealthsimple-tax': {
    name: 'Wealthsimple Tax',
    /** TODO-AFFILIATE: replace with the approved Wealthsimple Tax affiliate URL. */
    href: 'https://www.wealthsimple.com/en-ca/tax',
  },
  'turbotax-canada': {
    name: 'TurboTax Canada',
    /** TODO-AFFILIATE: replace with the approved TurboTax Canada affiliate URL. */
    href: 'https://turbotax.intuit.ca/',
  },
  shopify: {
    name: 'Shopify',
    /** TODO-AFFILIATE: replace with the approved Shopify affiliate URL. */
    href: 'https://www.shopify.com/ca',
  },
  canva: {
    name: 'Canva',
    /** TODO-AFFILIATE: replace with the approved Canva affiliate URL. */
    href: 'https://www.canva.com/',
  },
  hostinger: {
    name: 'Hostinger',
    /** TODO-AFFILIATE: replace with the approved Hostinger affiliate URL. */
    href: 'https://www.hostinger.com/ca',
  },
  gumroad: {
    name: 'Gumroad',
    /** TODO-AFFILIATE: replace with the approved Gumroad affiliate URL. */
    href: 'https://gumroad.com/',
  },
  etsy: {
    name: 'Etsy',
    /** TODO-AFFILIATE: replace with the approved Etsy affiliate URL. */
    href: 'https://www.etsy.com/',
  },
} as const;

export type AffiliateProgram = keyof typeof AFFILIATE_PROGRAMS;

export function affiliateHref(program: AffiliateProgram, search?: string): string {
  if (program === 'amazon-ca') {
    const url = new URL(AFFILIATE_PROGRAMS['amazon-ca'].searchBase);
    url.searchParams.set('k', (search || 'side hustle supplies').trim());
    return url.toString();
  }
  return AFFILIATE_PROGRAMS[program].href;
}
