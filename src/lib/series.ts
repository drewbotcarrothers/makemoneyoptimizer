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

// T13 30-day launch plans (Oct 2026), mapped by hand. Kept as a separate block to limit merge conflicts.
Object.assign(EXTRA_MEMBERS, {
  'dog-walking-30-day-plan-canada': [{ series: 'dog-walking', role: 'plan' }],
  'house-cleaning-30-day-plan-canada': [{ series: 'house-cleaning', role: 'plan' }],
  'snow-removal-30-day-plan-canada': [{ series: 'snow-removal', role: 'plan' }],
  'lawn-care-30-day-plan-canada': [{ series: 'lawn-care', role: 'plan' }],
  'freelance-writing-30-day-plan-canada': [{ series: 'freelance-writing', role: 'plan' }],
  'virtual-assistant-30-day-plan-canada': [{ series: 'virtual-assistant', role: 'plan' }],
  'reselling-30-day-plan-canada': [{ series: 'reselling', role: 'plan' }],
  'etsy-shop-30-day-plan-canada': [{ series: 'etsy-shop', role: 'plan' }],
  'online-tutoring-30-day-plan-canada': [{ series: 'online-tutoring', role: 'plan' }],
  'social-media-manager-30-day-plan-canada': [{ series: 'social-media-manager', role: 'plan' }],
});

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
