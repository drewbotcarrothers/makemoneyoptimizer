/**
 * Guide series: groups every post about one hustle (beginner guide, startup costs, first client/sale/week,
 * pricing, plus comparisons and seasonal spin-offs) so ArticleLayout can render a consistent
 * "guide series" box on each of them. Membership is automatic for slugs that follow the naming
 * patterns in docs/WRITING-A-POST.md; only off-pattern slugs need an entry in EXTRA_MEMBERS.
 *
 * Adding a new post that follows the slug pattern (`<hustle>-side-hustle-canada`,
 * `<hustle>-startup-costs-canada`, `<hustle>-first-client(s)|first-sale|first-week-canada`,
 * `<hustle>-pricing-canada`) needs no change here, as long as `<hustle>` already has a name in SERIES_NAMES.
 */

export type SeriesRole = 'start' | 'costs' | 'first' | 'pricing' | 'guide' | 'compare' | 'seasonal' | 'tax';

export const ROLE_LABELS: Record<SeriesRole, string> = {
  start: 'Start here',
  costs: 'Startup costs',
  first: 'First steps',
  pricing: 'Pricing & pay',
  guide: 'Deep dive',
  compare: 'Comparison',
  seasonal: 'Seasonal',
  tax: 'Tax guide',
};

const ROLE_ORDER: SeriesRole[] = ['start', 'costs', 'first', 'pricing', 'guide', 'compare', 'seasonal', 'tax'];

/** Display name for each series key. A key without a name here gets no series box. */
export const SERIES_NAMES: Record<string, string> = {
  'affiliate-marketing': 'Affiliate marketing',
  'ai-consulting': 'AI consulting',
  'amazon-fba': 'Amazon FBA',
  babysitting: 'Babysitting',
  'bike-courier': 'Bike & e-bike delivery',
  'car-detailing': 'Car detailing',
  'clothing-resale': 'Clothing resale',
  'dog-walking': 'Dog walking & pet sitting',
  'ebook-publishing': 'Ebook publishing',
  'etsy-shop': 'Etsy shop',
  'event-photography': 'Event photography',
  'event-staffing': 'Event staffing',
  'facebook-marketplace-flipping': 'Facebook Marketplace flipping',
  'food-delivery': 'Food delivery',
  'freelance-bookkeeping': 'Freelance bookkeeping',
  'freelance-translation': 'Freelance translation',
  'freelance-writing': 'Freelance writing',
  'furniture-flipping': 'Furniture flipping',
  'google-business-profile': 'Google Business Profile management',
  'graphic-design': 'Graphic design',
  'grocery-shopping': 'Grocery shopping apps',
  handyman: 'Handyman',
  'home-baking': 'Home baking',
  'house-cleaning': 'House cleaning',
  'junk-removal': 'Junk removal',
  'lawn-care': 'Lawn care',
  'local-seo': 'Local SEO',
  'moving-help': 'Moving help',
  newsletter: 'Newsletter',
  'no-code-web-design': 'No-code web design',
  'notion-templates': 'Notion templates',
  'odd-jobs-apps': 'Odd-job apps',
  'online-tutoring': 'Online tutoring',
  'package-courier': 'Package courier',
  'podcast-editing': 'Podcast editing',
  'pressure-washing': 'Pressure washing',
  'print-on-demand': 'Print-on-demand',
  printables: 'Printables',
  reselling: 'Reselling',
  'rideshare-driving': 'Rideshare driving',
  'seo-blogging': 'SEO blogging',
  'shopify-store': 'Shopify store',
  'snow-removal': 'Snow removal',
  'social-media-manager': 'Social media management',
  'teach-english-online': 'Teaching English online',
  'tiktok-reels': 'TikTok & Reels',
  ugc: 'UGC creation',
  'video-editing': 'Video editing',
  'virtual-assistant': 'Virtual assistant work',
  'website-maintenance': 'Website maintenance',
  'window-cleaning': 'Window cleaning',
  youtube: 'YouTube',
  'zapier-automation': 'Zapier automation',
  'fall-winter': 'Fall & winter side hustles',
  taxes: 'Side hustle taxes in Canada',
};

/** Slug prefixes that differ from the series key. */
const KEY_ALIASES: Record<string, string> = {
  rideshare: 'rideshare-driving',
};

const PATTERNS: [RegExp, SeriesRole][] = [
  [/^(.+)-side-hustle-canada$/, 'start'],
  [/^(.+)-startup-costs-canada$/, 'costs'],
  [/^(.+)-first-clients?-canada$/, 'first'],
  [/^(.+)-first-sale-canada$/, 'first'],
  [/^(.+)-first-week-canada$/, 'first'],
  [/^(.+)-pricing-canada$/, 'pricing'],
];

/** Off-pattern posts, and posts that also belong to another series (comparisons, seasonal spin-offs). */
export const EXTRA_MEMBERS: Record<string, { series: string; role: SeriesRole }[]> = {
  'youtube-first-1000-subscribers-canada': [{ series: 'youtube', role: 'first' }],
  'snow-removal-tools-canada': [{ series: 'snow-removal', role: 'guide' }],
  'snow-removal-gear-toolkit-canada': [{ series: 'snow-removal', role: 'guide' }],
  'snow-removal-contract-checklist-canada': [{ series: 'snow-removal', role: 'guide' }],
  'uber-eats-vs-doordash-vs-skip-canada': [{ series: 'food-delivery', role: 'compare' }],
  'uber-vs-lyft-drivers-canada': [{ series: 'rideshare-driving', role: 'compare' }],
  'instacart-vs-uber-eats-grocery-shopper-canada': [{ series: 'grocery-shopping', role: 'compare' }],
  'rover-vs-independent-dog-walking-canada': [{ series: 'dog-walking', role: 'compare' }],
  'etsy-vs-shopify-canada': [
    { series: 'etsy-shop', role: 'compare' },
    { series: 'shopify-store', role: 'compare' },
  ],
  'depop-vs-poshmark-vs-vinted-vs-facebook-marketplace-canada': [
    { series: 'reselling', role: 'compare' },
    { series: 'clothing-resale', role: 'compare' },
  ],
  'fiverr-vs-upwork-canada': [
    { series: 'freelance-writing', role: 'compare' },
    { series: 'graphic-design', role: 'compare' },
  ],
  'teachable-vs-gumroad-vs-payhip-canada': [
    { series: 'ebook-publishing', role: 'compare' },
    { series: 'notion-templates', role: 'compare' },
  ],
  'winter-car-detailing-salt-removal-canada': [
    { series: 'car-detailing', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'winter-pet-sitting-house-sitting-canada': [
    { series: 'dog-walking', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'fall-leaf-cleanup-side-hustle-canada': [
    { series: 'lawn-care', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'black-friday-boxing-day-reselling-canada': [
    { series: 'reselling', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'holiday-etsy-craft-market-shop-canada': [
    { series: 'etsy-shop', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'best-winter-side-hustles-canada': [{ series: 'fall-winter', role: 'start' }],
  'christmas-light-installation-side-hustle-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'holiday-gift-wrapping-side-hustle-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'halloween-side-hustles-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'seasonal-holiday-jobs-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'holiday-baking-cottage-food-rules-by-province-canada': [
    { series: 'home-baking', role: 'guide' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'snow-removal-side-hustle-canada': [{ series: 'fall-winter', role: 'seasonal' }],
};

/** Slugs that a pattern would match but that belong to a different series (handled in EXTRA_MEMBERS). */
const PATTERN_EXCLUDE = new Set([
  'best-winter-side-hustles-canada',
  'christmas-light-installation-side-hustle-canada',
  'holiday-gift-wrapping-side-hustle-canada',
  'fall-leaf-cleanup-side-hustle-canada',
  // Tax posts sit in the 'taxes' series via their category.
  'gst-hst-registration-side-hustle-canada',
  'home-office-expenses-side-hustle-canada',
  'how-much-tax-set-aside-side-hustle-canada',
  'record-keeping-side-hustle-canada',
]);

export interface SeriesMembership {
  series: string;
  role: SeriesRole;
}

/** Every series a post belongs to (usually one; comparisons and seasonal spin-offs can have two). */
export function seriesFor(slug: string, category?: string): SeriesMembership[] {
  const out: SeriesMembership[] = [];
  if (!PATTERN_EXCLUDE.has(slug)) {
    for (const [re, role] of PATTERNS) {
      const m = slug.match(re);
      if (m) {
        const key = KEY_ALIASES[m[1]] ?? m[1];
        if (SERIES_NAMES[key]) out.push({ series: key, role });
        break;
      }
    }
  }
  for (const extra of EXTRA_MEMBERS[slug] ?? []) {
    if (!out.some((o) => o.series === extra.series)) out.push(extra);
  }
  if (category === 'taxes-money') out.push({ series: 'taxes', role: 'tax' });
  return out;
}

export interface SeriesItem {
  slug: string;
  title: string;
  role: SeriesRole;
}

export interface SeriesGroup {
  key: string;
  name: string;
  items: SeriesItem[];
}

/** Build the series groups for one post from the published article list. Groups with <2 posts are dropped. */
export function seriesGroupsFor<T extends { slug: string; data: { title: string; category: string } }>(
  all: T[],
  slug: string,
  category: string
): SeriesGroup[] {
  const mine = seriesFor(slug, category);
  return mine
    .map(({ series }) => {
      const items: SeriesItem[] = [];
      for (const a of all) {
        const m = seriesFor(a.slug, a.data.category).find((s) => s.series === series);
        if (m) items.push({ slug: a.slug, title: a.data.title, role: m.role });
      }
      items.sort(
        (x, y) => ROLE_ORDER.indexOf(x.role) - ROLE_ORDER.indexOf(y.role) || x.title.localeCompare(y.title)
      );
      return { key: series, name: SERIES_NAMES[series], items };
    })
    .filter((g) => g.items.length >= 2);
}
