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
