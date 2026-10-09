/**
 * Guide series: groups every post about one hustle (beginner guide, startup costs, first client/sale/week,
 * pricing, mistakes to avoid, plus comparisons and seasonal spin-offs) so ArticleLayout can render a consistent
 * "guide series" box on each of them. Membership is automatic for slugs that follow the naming
 * patterns in docs/WRITING-A-POST.md; only off-pattern slugs need an entry in EXTRA_MEMBERS.
 *
 * Adding a new post that follows the slug pattern (`<hustle>-side-hustle-canada`,
 * `<hustle>-startup-costs-canada`, `<hustle>-first-client(s)|first-sale|first-week-canada`,
 * `<hustle>-pricing-canada`, `<hustle>-mistakes-canada`) needs no change here, as long as `<hustle>` already has a name in SERIES_NAMES.
 */

export type SeriesRole = 'start' | 'costs' | 'first' | 'plan' | 'pricing' | 'mistakes' | 'guide' | 'compare' | 'seasonal' | 'tax';

export const ROLE_LABELS: Record<SeriesRole, string> = {
  start: 'Start here',
  costs: 'Startup costs',
  first: 'First steps',
  plan: '30-day plan',
  pricing: 'Pricing & pay',
  mistakes: 'Mistakes to avoid',
  guide: 'Deep dive',
  compare: 'Comparison',
  seasonal: 'Seasonal',
  tax: 'Tax guide',
};

const ROLE_ORDER: SeriesRole[] = ['start', 'costs', 'first', 'plan', 'pricing', 'mistakes', 'guide', 'compare', 'seasonal', 'tax'];

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
  [/^(.+)-mistakes-canada$/, 'mistakes'],
];

/** Off-pattern posts, and posts that also belong to another series (comparisons, seasonal spin-offs). */
export const EXTRA_MEMBERS: Record<string, { series: string; role: SeriesRole }[]> = {
  'youtube-first-1000-subscribers-canada': [{ series: 'youtube', role: 'first' }],
  'snow-removal-tools-canada': [{ series: 'snow-removal', role: 'guide' }],
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

// Set C comparisons (Oct 2026), mapped by hand. Kept as a separate block to limit merge conflicts.
Object.assign(EXTRA_MEMBERS, {
  'amazon-flex-vs-uber-eats-canada': [
    { series: 'package-courier', role: 'compare' },
    { series: 'food-delivery', role: 'compare' },
  ],
  'canva-vs-adobe-express-canada': [{ series: 'graphic-design', role: 'compare' }],
  'upwork-vs-linkedin-finding-clients-canada': [
    { series: 'freelance-writing', role: 'compare' },
    { series: 'virtual-assistant', role: 'compare' },
  ],
  'taskrabbit-vs-kijiji-facebook-handyman-canada': [
    { series: 'handyman', role: 'compare' },
    { series: 'odd-jobs-apps', role: 'compare' },
  ],
  'shopify-vs-squarespace-vs-wix-canada': [
    { series: 'shopify-store', role: 'compare' },
    { series: 'no-code-web-design', role: 'compare' },
  ],
  'substack-vs-beehiiv-vs-kit-canada': [{ series: 'newsletter', role: 'compare' }],
  'printful-vs-printify-canada': [{ series: 'print-on-demand', role: 'compare' }],
  // wealthsimple-vs-bank-business-account-side-hustle-canada joins 'taxes' via its taxes-money category.
});

// Set 2 platform reviews (Oct 2026), mapped by hand. Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, { 'platform-reviews': 'Platform reviews' });
Object.assign(EXTRA_MEMBERS, {
  'upwork-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'freelance-writing', role: 'guide' },
    { series: 'virtual-assistant', role: 'guide' },
  ],
  'fiverr-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'graphic-design', role: 'guide' },
    { series: 'freelance-writing', role: 'guide' },
  ],
  'taskrabbit-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'odd-jobs-apps', role: 'guide' },
    { series: 'handyman', role: 'guide' },
  ],
  'rover-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'dog-walking', role: 'guide' },
  ],
  'etsy-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'etsy-shop', role: 'guide' },
  ],
  'poshmark-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'clothing-resale', role: 'guide' },
    { series: 'reselling', role: 'guide' },
  ],
  'instacart-shopper-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'grocery-shopping', role: 'guide' },
  ],
  'uber-eats-courier-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'food-delivery', role: 'guide' },
  ],
  'amazon-kdp-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'ebook-publishing', role: 'guide' },
  ],
  'amazon-flex-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'package-courier', role: 'guide' },
  ],
});

// T03 tools and gear posts (Oct 2026), mapped by hand. Kept as a separate block to limit merge conflicts.
Object.assign(EXTRA_MEMBERS, {
  'pressure-washing-tools-canada': [{ series: 'pressure-washing', role: 'guide' }],
  'dog-walking-gear-canada': [{ series: 'dog-walking', role: 'guide' }],
  'house-cleaning-tools-canada': [{ series: 'house-cleaning', role: 'guide' }],
  'lawn-care-tools-canada': [{ series: 'lawn-care', role: 'guide' }],
  'car-detailing-tools-canada': [{ series: 'car-detailing', role: 'guide' }],
  'handyman-tools-canada': [{ series: 'handyman', role: 'guide' }],
  'food-delivery-gear-canada': [{ series: 'food-delivery', role: 'guide' }],
  'reselling-tools-canada': [{ series: 'reselling', role: 'guide' }],
  'youtube-gear-canada': [{ series: 'youtube', role: 'guide' }],
  'freelance-writing-tools-canada': [{ series: 'freelance-writing', role: 'guide' }],
});

// Set 1 money and admin how-tos (Oct 2026, batch oct4b). Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, { 'business-admin': 'Side hustle admin & paperwork' });
Object.assign(EXTRA_MEMBERS, {
  'register-sole-proprietorship-canada': [{ series: 'business-admin', role: 'start' }],
  'how-to-get-cra-business-number-canada': [{ series: 'business-admin', role: 'guide' }],
  'business-bank-account-side-hustle-canada': [{ series: 'business-admin', role: 'guide' }],
  'separate-business-personal-money-canada': [{ series: 'business-admin', role: 'guide' }],
  'how-to-invoice-clients-canada': [{ series: 'business-admin', role: 'guide' }],
  'freelance-contract-canada': [{ series: 'business-admin', role: 'guide' }],
  'side-hustle-insurance-canada': [{ series: 'business-admin', role: 'guide' }],
  'bookkeeping-tools-side-hustle-canada': [{ series: 'business-admin', role: 'guide' }],
  'mileage-log-cra-side-hustle-canada': [{ series: 'business-admin', role: 'guide' }],
  'cra-tax-instalments-side-hustle-canada': [{ series: 'business-admin', role: 'guide' }],
  'record-keeping-side-hustle-canada': [{ series: 'business-admin', role: 'guide' }],
  'wealthsimple-vs-bank-business-account-side-hustle-canada': [{ series: 'business-admin', role: 'compare' }],
});
/** taxes-money posts that are pure admin (no tax content of their own), so they stay out of the 'taxes' series. */
const NOT_TAX_SERIES = new Set([
  'register-sole-proprietorship-canada',
  'business-bank-account-side-hustle-canada',
  'separate-business-personal-money-canada',
  'how-to-invoice-clients-canada',
  'freelance-contract-canada',
  'side-hustle-insurance-canada',
  'bookkeeping-tools-side-hustle-canada',
]);

// Set 4 income and growth posts (Oct 2026, batch oct5). Placed after NOT_TAX_SERIES so the .add calls run after it exists.
Object.assign(SERIES_NAMES, { growth: 'Grow your side hustle' });
Object.assign(EXTRA_MEMBERS, {
  'side-hustle-casual-vs-sole-proprietorship-canada': [{ series: 'growth', role: 'start' }],
  'how-to-raise-side-hustle-rates-canada': [{ series: 'growth', role: 'pricing' }],
  'first-year-side-hustle-price-review-canada': [{ series: 'growth', role: 'pricing' }],
  'track-which-side-hustles-pay-canada': [{ series: 'growth', role: 'guide' }],
  'when-to-quit-a-gig-app-canada': [{ series: 'growth', role: 'guide' }],
  'side-hustle-waitlist-canada': [{ series: 'growth', role: 'guide' }],
  'add-second-service-side-hustle-canada': [{ series: 'growth', role: 'guide' }],
  'hiring-help-side-hustle-canada': [{ series: 'growth', role: 'guide' }],
});
// Growth posts in taxes-money that are mostly about pricing, not tax, stay out of the 'taxes' series.
NOT_TAX_SERIES.add('how-to-raise-side-hustle-rates-canada');
NOT_TAX_SERIES.add('first-year-side-hustle-price-review-canada');

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
  if (category === 'taxes-money' && !NOT_TAX_SERIES.has(slug)) out.push({ series: 'taxes', role: 'tax' });
  return out;
}

// Niche how-tos (Oct 2026, batch oct5 set 3), mapped by hand. Kept as a separate block to limit merge conflicts.
Object.assign(EXTRA_MEMBERS, {
  'get-clients-on-kijiji-canada': [
    { series: 'handyman', role: 'guide' },
    { series: 'house-cleaning', role: 'guide' },
    { series: 'odd-jobs-apps', role: 'guide' },
  ],
  'snow-removal-price-sheet-driveway-size-canada': [{ series: 'snow-removal', role: 'guide' }],
  'house-cleaning-quote-walkthrough-canada': [{ series: 'house-cleaning', role: 'guide' }],
  'lawn-care-estimate-canada': [{ series: 'lawn-care', role: 'guide' }],
  'dog-walking-routes-canada': [{ series: 'dog-walking', role: 'guide' }],
  'facebook-marketplace-listing-tips-canada': [
    { series: 'facebook-marketplace-flipping', role: 'guide' },
    { series: 'reselling', role: 'guide' },
  ],
  'upwork-proposal-template-canada': [
    { series: 'freelance-writing', role: 'guide' },
    { series: 'virtual-assistant', role: 'guide' },
  ],
  'taskrabbit-first-jobs-canada': [
    { series: 'odd-jobs-apps', role: 'guide' },
    { series: 'handyman', role: 'guide' },
  ],
  'rover-profile-tips-canada': [{ series: 'dog-walking', role: 'guide' }],
  'etsy-listing-seo-canada': [{ series: 'etsy-shop', role: 'guide' }],
});

// Side hustles by situation (Oct 2026): hub roundups. Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, { 'by-situation': 'Side hustles by situation' });
Object.assign(EXTRA_MEMBERS, {
  'side-hustles-for-students-canada': [{ series: 'by-situation', role: 'start' }],
  'side-hustles-for-retirees-canada': [{ series: 'by-situation', role: 'start' }],
  'side-hustles-for-stay-at-home-parents-canada': [{ series: 'by-situation', role: 'start' }],
  'side-hustles-for-newcomers-canada': [{ series: 'by-situation', role: 'start' }],
  'side-hustles-without-a-car-canada': [{ series: 'by-situation', role: 'start' }],
  'side-hustles-for-introverts-canada': [{ series: 'by-situation', role: 'start' }],
});

// Set 5 starter-kit posts (Oct 2026, batch oct5). Placed after NOT_TAX_SERIES so the .add calls run after it exists.
Object.assign(SERIES_NAMES, { 'starter-kit': 'Side hustle starter kit' });
Object.assign(EXTRA_MEMBERS, {
  'side-hustle-business-plan-canada': [{ series: 'starter-kit', role: 'start' }],
  'side-hustle-client-acquisition-system-canada': [{ series: 'starter-kit', role: 'first' }],
  'side-hustle-pricing-worksheet-canada': [{ series: 'starter-kit', role: 'pricing' }],
  'first-year-side-hustle-money-mistakes-canada': [{ series: 'starter-kit', role: 'mistakes' }],
  'side-hustle-admin-tools-checklist-canada': [{ series: 'starter-kit', role: 'guide' }],
  'quarterly-side-hustle-money-check-in-canada': [{ series: 'starter-kit', role: 'tax' }],
});
// Starter-kit posts in taxes-money that are planning or tools, not tax, stay out of the 'taxes' series.
NOT_TAX_SERIES.add('side-hustle-business-plan-canada');
NOT_TAX_SERIES.add('side-hustle-pricing-worksheet-canada');
NOT_TAX_SERIES.add('side-hustle-admin-tools-checklist-canada');

// Side hustles by skill (Oct 2026): hub roundups. Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, { 'by-skill': 'Side hustles by skill' });
Object.assign(EXTRA_MEMBERS, {
  'side-hustles-for-teachers-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-nurses-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-accountants-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-tradespeople-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-graphic-designers-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-software-developers-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-writers-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-retired-professionals-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-parents-with-admin-experience-canada': [{ series: 'by-skill', role: 'start' }],
  'side-hustles-for-bilingual-french-english-speakers-canada': [{ series: 'by-skill', role: 'start' }],
});

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

// Side hustles by city (Oct 2026, batch oct5 set 2). Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, { 'by-city': 'Side hustles by city' });
Object.assign(EXTRA_MEMBERS, {
  'best-side-hustles-toronto-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-vancouver-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-calgary-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-montreal-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-ottawa-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-edmonton-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-winnipeg-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-halifax-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-victoria-canada': [{ series: 'by-city', role: 'guide' }],
  'best-side-hustles-hamilton-canada': [{ series: 'by-city', role: 'guide' }],
});

// Set D seasonal posts (Nov 2026–Jan 2027), mapped by hand. Kept as a separate block to limit merge conflicts.
Object.assign(EXTRA_MEMBERS, {
  'holiday-market-vendor-guide-canada': [
    { series: 'etsy-shop', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'christmas-tree-wreath-selling-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'christmas-week-pet-sitting-house-sitting-pricing-canada': [
    { series: 'dog-walking', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'new-year-side-hustles-2027-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'tax-season-bookkeeping-tax-prep-gigs-canada': [
    { series: 'freelance-bookkeeping', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
  'rrsp-season-side-hustle-money-tips-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'valentines-day-side-hustles-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'exam-season-winter-tutoring-canada': [
    { series: 'online-tutoring', role: 'seasonal' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
});

// T01 beginner guides (Oct 2026, batch sn). Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, {
  'mystery-shopping': 'Mystery shopping',
  voiceover: 'Voiceover',
  'lightroom-presets': 'Lightroom presets & LUTs',
  'pinterest-affiliate': 'Pinterest affiliate marketing',
  'online-course': 'Online courses',
  'stock-photography': 'Stock photo & video licensing',
  'flash-staffing-apps': 'Flash staffing apps',
  'personal-training': 'Personal training',
  'faceless-instagram': 'Faceless Instagram pages',
  'email-marketing': 'Email marketing freelancing',
});

// Side hustle rules by province (Oct 2026, batch oct5 set 1). Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, { 'by-province': 'Side hustle rules by province' });
Object.assign(EXTRA_MEMBERS, {
  'side-hustle-rules-by-province-canada': [{ series: 'by-province', role: 'start' }],
  'side-hustle-rules-ontario-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-british-columbia-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-alberta-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-quebec-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-saskatchewan-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-manitoba-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-nova-scotia-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-new-brunswick-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-prince-edward-island-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-newfoundland-labrador-canada': [{ series: 'by-province', role: 'guide' }],
  'side-hustle-rules-yukon-nwt-nunavut-canada': [{ series: 'by-province', role: 'guide' }],
});
// Province guides are rules references, not tax guides: keep them out of the 'taxes' series box.
for (const slug of Object.keys(EXTRA_MEMBERS)) {
  if (slug.startsWith('side-hustle-rules-')) NOT_TAX_SERIES.add(slug);
}

// Wave 1C (Oct 2026): Christmas lights depth, seasonal gigs, national hub.
// Kept as its own block so parallel batches can append without rewriting earlier maps.
Object.assign(SERIES_NAMES, {
  'christmas-light-installation': 'Christmas light installation',
  'bartending-serving': 'Bartending and serving',
  'sports-referee': 'Sports officiating',
});

EXTRA_MEMBERS['christmas-light-installation-side-hustle-canada'].push({
  series: 'christmas-light-installation',
  role: 'start',
});

Object.assign(EXTRA_MEMBERS, {
  'christmas-light-installation-pricing-canada': [{ series: 'fall-winter', role: 'pricing' }],
  'christmas-light-installation-startup-costs-canada': [{ series: 'fall-winter', role: 'costs' }],
  'christmas-light-installation-first-clients-canada': [{ series: 'fall-winter', role: 'first' }],
  'bartending-serving-side-hustle-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'sports-referee-side-hustle-canada': [{ series: 'fall-winter', role: 'seasonal' }],
  'best-side-hustles-canada': [{ series: 'by-city', role: 'start' }],
  'passive-income-reality-canada': [
    { series: 'printables', role: 'guide' },
    { series: 'youtube', role: 'guide' },
  ],
});

// Wave 1A Canada beermoney + AI training (Oct 2026). Kept as a separate block to limit merge conflicts.
Object.assign(SERIES_NAMES, {
  beermoney: 'Beermoney and paid research',
  'ai-training': 'AI training work',
});
Object.assign(EXTRA_MEMBERS, {
  'best-beermoney-apps-canada': [{ series: 'beermoney', role: 'start' }],
  'survey-sites-canada': [{ series: 'beermoney', role: 'compare' }],
  'prolific-review-canada': [
    { series: 'beermoney', role: 'guide' },
    { series: 'platform-reviews', role: 'guide' },
  ],
  'user-testing-sites-canada': [{ series: 'beermoney', role: 'compare' }],
  'cashback-apps-canada': [{ series: 'beermoney', role: 'guide' }],
  'us-only-side-hustle-apps-canada': [{ series: 'beermoney', role: 'guide' }],
  'ai-data-annotation-side-hustle-canada': [{ series: 'ai-training', role: 'start' }],
  'dataannotation-review-canada': [
    { series: 'ai-training', role: 'guide' },
    { series: 'platform-reviews', role: 'guide' },
  ],
  'outlier-ai-review-canada': [
    { series: 'ai-training', role: 'guide' },
    { series: 'platform-reviews', role: 'guide' },
  ],
  'usd-platform-income-tax-canada': [
    { series: 'beermoney', role: 'tax' },
    { series: 'ai-training', role: 'tax' },
  ],
});

// Wave 2 (Oct 2026): local services, rentals, beermoney depth, reality checks.
// Pattern slugs join once the series name exists. Off-pattern slugs are listed here.
Object.assign(SERIES_NAMES, {
  'pet-waste-removal': 'Pet waste removal',
  'bin-cleaning': 'Bin cleaning',
  'vending-machine': 'Vending machines',
  turo: 'Turo hosting',
  rentals: 'Renting out space',
  'reality-checks': 'Side hustle reality checks',
});
Object.assign(EXTRA_MEMBERS, {
  'tech-help-for-seniors-side-hustle-canada': [{ series: 'by-situation', role: 'guide' }],
  'door-to-door-marketing-side-hustle-canada': [
    { series: 'pet-waste-removal', role: 'guide' },
    { series: 'bin-cleaning', role: 'guide' },
    { series: 'window-cleaning', role: 'guide' },
    { series: 'house-cleaning', role: 'guide' },
  ],
  'turo-host-canada': [{ series: 'turo', role: 'start' }],
  'turo-host-costs-canada': [{ series: 'turo', role: 'costs' }],
  'rent-out-parking-space-canada': [{ series: 'rentals', role: 'start' }],
  'rent-out-storage-space-canada': [{ series: 'rentals', role: 'guide' }],
  'rent-out-room-basement-suite-canada': [{ series: 'rentals', role: 'guide' }],
  'basement-suite-rental-income-tax-canada': [{ series: 'rentals', role: 'tax' }],
  'atm-machine-side-hustle-canada': [{ series: 'vending-machine', role: 'guide' }],
  'mistplay-vs-freecash-canada': [{ series: 'beermoney', role: 'compare' }],
  'microsoft-rewards-canada': [
    { series: 'beermoney', role: 'guide' },
    { series: 'platform-reviews', role: 'guide' },
  ],
  'usertesting-review-canada': [
    { series: 'beermoney', role: 'guide' },
    { series: 'platform-reviews', role: 'guide' },
  ],
  'paid-focus-groups-canada': [{ series: 'beermoney', role: 'guide' }],
  'ai-training-assessment-tips-canada': [{ series: 'ai-training', role: 'mistakes' }],
  'ai-training-vs-studies-vs-freelancing-canada': [
    { series: 'ai-training', role: 'compare' },
    { series: 'freelance-writing', role: 'compare' },
  ],
  'tiktok-creator-rewards-canada': [{ series: 'tiktok-reels', role: 'guide' }],
  'mystery-shopping-companies-canada': [{ series: 'mystery-shopping', role: 'guide' }],
  'phone-side-hustles-canada': [
    { series: 'beermoney', role: 'guide' },
    { series: 'by-situation', role: 'guide' },
  ],
  'referral-bonuses-money-apps-canada': [{ series: 'business-admin', role: 'guide' }],
  'overhyped-side-hustles-canada': [{ series: 'reality-checks', role: 'start' }],
  'digital-products-reality-canada': [
    { series: 'reality-checks', role: 'guide' },
    { series: 'printables', role: 'guide' },
  ],
  'dropshipping-side-hustle-canada': [
    { series: 'reality-checks', role: 'guide' },
    { series: 'shopify-store', role: 'guide' },
  ],
  'faceless-youtube-channel-canada': [
    { series: 'youtube', role: 'guide' },
    { series: 'reality-checks', role: 'guide' },
  ],
  'side-hustles-1000-a-month-canada': [
    { series: 'reality-checks', role: 'pricing' },
    { series: 'by-situation', role: 'guide' },
  ],
  'gig-app-real-hourly-rate-canada': [
    { series: 'food-delivery', role: 'pricing' },
    { series: 'rideshare-driving', role: 'pricing' },
    { series: 'growth', role: 'pricing' },
  ],
  'local-client-channels-canada': [
    { series: 'house-cleaning', role: 'guide' },
    { series: 'handyman', role: 'guide' },
    { series: 'window-cleaning', role: 'guide' },
  ],
  'first-google-reviews-side-hustle-canada': [{ series: 'google-business-profile', role: 'guide' }],
  'what-to-do-with-side-hustle-profits-canada': [{ series: 'growth', role: 'guide' }],
});
EXTRA_MEMBERS['passive-income-reality-canada'].push({ series: 'reality-checks', role: 'guide' });

// Wave 3 (Oct 2026): reselling niches, making, local and spring, digital and tech, caution.
// Pattern slugs join once the series name exists:
// amazon-fba-startup-costs-canada (amazon-fba / costs),
// bin-cleaning-pricing-canada (bin-cleaning / pricing),
// 3d-printing-side-hustle-canada and 3d-printing-startup-costs-canada.
// Off-pattern slugs are listed here. A spring series mirrors fall-winter for the seasonal roundup.
Object.assign(SERIES_NAMES, {
  '3d-printing': '3D printing',
  spring: 'Spring side hustles',
});
Object.assign(EXTRA_MEMBERS, {
  'sports-card-flipping-canada': [{ series: 'reselling', role: 'guide' }],
  'book-flipping-canada': [{ series: 'reselling', role: 'guide' }],
  'lawn-mower-flipping-canada': [
    { series: 'reselling', role: 'guide' },
    { series: 'lawn-care', role: 'seasonal' },
    { series: 'spring', role: 'seasonal' },
  ],
  'liquidation-pallets-canada': [
    { series: 'reselling', role: 'guide' },
    { series: 'reality-checks', role: 'guide' },
  ],
  'laser-engraving-side-hustle-canada': [
    { series: '3d-printing', role: 'guide' },
    { series: 'etsy-shop', role: 'guide' },
  ],
  'furniture-assembly-side-hustle-canada': [
    { series: 'handyman', role: 'guide' },
    { series: 'odd-jobs-apps', role: 'guide' },
  ],
  'in-person-tutoring-side-hustle-canada': [{ series: 'online-tutoring', role: 'guide' }],
  'french-tutoring-side-hustle-canada': [
    { series: 'online-tutoring', role: 'guide' },
    { series: 'by-skill', role: 'guide' },
  ],
  'group-fitness-instructor-side-hustle-canada': [{ series: 'personal-training', role: 'guide' }],
  'paid-house-sitting-canada': [{ series: 'dog-walking', role: 'guide' }],
  'party-rental-side-hustle-canada': [{ series: 'event-staffing', role: 'guide' }],
  'pet-waste-spring-cleanup-canada': [
    { series: 'pet-waste-removal', role: 'seasonal' },
    { series: 'spring', role: 'seasonal' },
  ],
  'best-spring-side-hustles-canada': [{ series: 'spring', role: 'start' }],
  'micro-saas-side-hustle-canada': [{ series: 'by-skill', role: 'guide' }],
  'apps-script-automation-side-hustle-canada': [{ series: 'zapier-automation', role: 'guide' }],
  'cold-email-lead-generation-casl-canada': [{ series: 'email-marketing', role: 'guide' }],
  'canva-creator-side-hustle-canada': [
    { series: 'graphic-design', role: 'guide' },
    { series: 'printables', role: 'guide' },
  ],
  'gumroad-side-hustle-canada': [
    { series: 'ebook-publishing', role: 'guide' },
    { series: 'notion-templates', role: 'guide' },
  ],
  'ghostwriting-local-side-hustle-canada': [{ series: 'freelance-writing', role: 'guide' }],
  'audiobook-narration-side-hustle-canada': [{ series: 'voiceover', role: 'guide' }],
  'ai-side-hustles-hype-vs-real-canada': [
    { series: 'ai-training', role: 'compare' },
    { series: 'reality-checks', role: 'guide' },
  ],
  'airbnb-arbitrage-red-flags-canada': [
    { series: 'rentals', role: 'guide' },
    { series: 'reality-checks', role: 'guide' },
  ],
  'course-funnel-red-flags-canada': [
    { series: 'online-course', role: 'guide' },
    { series: 'reality-checks', role: 'guide' },
  ],
  'report-side-hustle-scam-canada': [{ series: 'reality-checks', role: 'guide' }],
  'notary-commissioner-side-hustle-canada': [{ series: 'by-province', role: 'guide' }],
  'dividend-income-reality-canada': [{ series: 'reality-checks', role: 'guide' }],
  'skipthedishes-courier-review-canada': [
    { series: 'platform-reviews', role: 'guide' },
    { series: 'food-delivery', role: 'guide' },
  ],
  'side-hustle-reality-check-2027-canada': [{ series: 'reality-checks', role: 'guide' }],
});

// Product and service comparisons (Oct 2026, batch comparisons). Kept as a separate block to limit merge conflicts.
Object.assign(EXTRA_MEMBERS, {
  'freshbooks-vs-wave-vs-quickbooks-canada': [
    { series: 'business-admin', role: 'compare' },
    { series: 'freelance-bookkeeping', role: 'compare' },
  ],
  'koho-vs-wealthsimple-vs-eq-bank-side-hustle-canada': [{ series: 'business-admin', role: 'compare' }],
  'wealthsimple-tax-vs-turbotax-vs-hr-block-canada': [{ series: 'business-admin', role: 'compare' }],
  'apollo-vs-zensurance-side-hustle-insurance-canada': [{ series: 'business-admin', role: 'compare' }],
  'square-vs-sumup-vs-shopify-pos-card-readers-canada': [
    { series: 'etsy-shop', role: 'compare' },
    { series: 'home-baking', role: 'compare' },
  ],
  'hostinger-vs-namecheap-vs-wordpress-com-canada': [
    { series: 'seo-blogging', role: 'compare' },
    { series: 'no-code-web-design', role: 'compare' },
  ],
  'jobber-vs-housecall-pro-vs-square-appointments-canada': [
    { series: 'house-cleaning', role: 'compare' },
    { series: 'lawn-care', role: 'compare' },
    { series: 'handyman', role: 'compare' },
  ],
  'calendly-vs-square-appointments-vs-acuity-canada': [
    { series: 'online-tutoring', role: 'compare' },
    { series: 'personal-training', role: 'compare' },
  ],
  'thinkific-vs-kajabi-vs-podia-canada': [{ series: 'online-course', role: 'compare' }],
  'stallion-express-vs-chit-chats-vs-canada-post-canada': [
    { series: 'reselling', role: 'compare' },
    { series: 'etsy-shop', role: 'compare' },
  ],
  'zapier-vs-make-canada': [
    { series: 'zapier-automation', role: 'compare' },
    { series: 'virtual-assistant', role: 'compare' },
  ],
  'descript-vs-riverside-canada': [
    { series: 'podcast-editing', role: 'compare' },
    { series: 'youtube', role: 'compare' },
  ],
});
// Money and insurance comparisons are tools/admin, not tax guides; the tax-software comparison stays in 'taxes'.
NOT_TAX_SERIES.add('freshbooks-vs-wave-vs-quickbooks-canada');
NOT_TAX_SERIES.add('koho-vs-wealthsimple-vs-eq-bank-side-hustle-canada');
NOT_TAX_SERIES.add('apollo-vs-zensurance-side-hustle-insurance-canada');

// Amazon.ca gear buying guides (Oct 2026, batch roundups). Kept as a separate block to limit merge conflicts.
Object.assign(EXTRA_MEMBERS, {
  'pressure-washer-buying-guide-canada': [{ series: 'pressure-washing', role: 'guide' }],
  'snow-blower-buying-guide-canada': [{ series: 'snow-removal', role: 'guide' }],
  'label-printer-resellers-canada': [
    { series: 'reselling', role: 'guide' },
    { series: 'etsy-shop', role: 'guide' },
  ],
  'ugc-lighting-microphone-kit-canada': [
    { series: 'ugc', role: 'guide' },
    { series: 'tiktok-reels', role: 'guide' },
  ],
  '3d-printer-laser-engraver-buying-guide-canada': [{ series: '3d-printing', role: 'guide' }],
  'christmas-light-installation-gear-canada': [
    { series: 'christmas-light-installation', role: 'guide' },
    { series: 'fall-winter', role: 'guide' },
  ],
  'stock-photography-camera-gear-canada': [{ series: 'stock-photography', role: 'guide' }],
  'online-tutoring-gear-canada': [{ series: 'online-tutoring', role: 'guide' }],
  'craft-market-booth-gear-canada': [
    { series: 'etsy-shop', role: 'guide' },
    { series: 'fall-winter', role: 'seasonal' },
  ],
});
