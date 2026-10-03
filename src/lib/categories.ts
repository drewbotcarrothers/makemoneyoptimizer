/**
 * Browsable blog categories. Each article has exactly one `category` (see src/content.config.ts).
 * Slugs follow the eight content-plan clusters in content-planning/pillars-100.csv plus Taxes & Money.
 */
export const CATEGORY_SLUGS = [
  'gig-apps',
  'local-services',
  'online-freelancing',
  'digital-products',
  'content-creation',
  'reselling-ecommerce',
  'marketing-for-hire',
  'tech-ai',
  'taxes-money',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface Category {
  slug: CategorySlug;
  name: string;
  emoji: string;
  /** Short description for cards, chips, and meta descriptions. */
  description: string;
  /** SEO intro paragraph shown at the top of the category page. */
  intro: string;
}

export const CATEGORIES: readonly Category[] = [
  {
    slug: 'gig-apps',
    name: 'Gig Apps',
    emoji: '🚗',
    description:
      'Delivery, rideshare, courier, grocery shopping, and odd-job apps you can start on your own schedule in Canada.',
    intro:
      'Gig apps are the fastest way for most Canadians to start earning on a flexible schedule, because the platform brings the customers and you supply the time, vehicle, or tools. These guides cover food delivery, rideshare, grocery shopping, package courier, and odd-job apps, with Canadian costs, insurance questions, and CRA basics to check before your first shift.',
  },
  {
    slug: 'local-services',
    name: 'Local Services',
    emoji: '🏡',
    description:
      'Snow removal, lawn care, dog walking, pet sitting, cleaning, handyman, detailing, moving help, junk removal, and seasonal work.',
    intro:
      'Local services are side hustles you sell to neighbours in person, such as snow removal, lawn care, dog walking, house cleaning, handyman work, and car detailing. They usually need little more than basic equipment and reliable scheduling, and Canadian seasons shape when demand peaks. Each guide walks through startup costs, finding first clients, pricing, and the bylaws, insurance, and tax questions to confirm locally.',
  },
  {
    slug: 'online-freelancing',
    name: 'Online Freelancing',
    emoji: '💻',
    description:
      'Freelance writing, graphic design, bookkeeping, tutoring, teaching English, and virtual assistant work from home.',
    intro:
      'Online freelancing lets you sell a skill you already have, such as writing, design, bookkeeping, tutoring, or admin support, to clients anywhere while working from home in Canada. These guides explain how to package a starter offer, land a first client, and budget for tools in CAD, plus when GST/HST registration and CRA reporting come into play.',
  },
  {
    slug: 'digital-products',
    name: 'Digital Products',
    emoji: '📄',
    description: 'Printables, ebooks, and Notion templates you create once and sell online.',
    intro:
      'Digital products are files you make once and sell many times, such as printables, ebooks, and Notion templates. They trade upfront creation time for low ongoing costs, but sales depend on finding buyers rather than on hours worked. These guides cover what to build first, Canadian startup costs, marketplace and storefront options, and how to approach a first sale honestly.',
  },
  {
    slug: 'content-creation',
    name: 'Content Creation',
    emoji: '🎥',
    description: 'YouTube, TikTok and Reels, newsletters, SEO blogging, and UGC for brands.',
    intro:
      'Content creation side hustles, including YouTube, TikTok and Reels, newsletters, SEO blogging, and UGC for brands, build income from an audience or from content you make for companies. Most take months before they pay, so these guides focus on realistic first milestones, gear budgets in CAD, and Canadian disclosure and tax rules rather than promised earnings.',
  },
  {
    slug: 'reselling-ecommerce',
    name: 'Reselling & Ecommerce',
    emoji: '📦',
    description:
      'Reselling, furniture flipping, Etsy, Shopify, print-on-demand, and holiday craft markets.',
    intro:
      'Reselling and ecommerce side hustles earn the margin between what you pay for, or make, a product and what a buyer pays, whether you flip items on Canadian marketplaces, refinish furniture, or run an Etsy, Shopify, or print-on-demand shop. These guides cover sourcing, fees, shipping within Canada, and how the CRA treats sales income so you can test small before scaling.',
  },
  {
    slug: 'marketing-for-hire',
    name: 'Marketing for Hire',
    emoji: '📣',
    description: 'Social media management, local SEO, and affiliate marketing for Canadian businesses and audiences.',
    intro:
      'Marketing for hire means helping businesses get found and chosen, through social media management, local SEO, or affiliate marketing on your own channels. These guides explain what to offer first, how to find a first client, and the Competition Bureau disclosure and CRA rules to keep in mind.',
  },
  {
    slug: 'tech-ai',
    name: 'Tech & AI',
    emoji: '🤖',
    description: 'No-code web design, website maintenance, Zapier automation, and AI consulting for small businesses.',
    intro:
      'Tech and AI side hustles help small businesses with websites, automation, and practical AI tools, often without needing a computer science degree. These guides cover no-code web design, website maintenance plans, Zapier automation, and AI consulting for Canadian clients, including starter offers, tool costs in CAD, and privacy considerations to discuss with clients.',
  },
  {
    slug: 'taxes-money',
    name: 'Taxes & Money',
    emoji: '🧾',
    description:
      'CRA reporting, GST/HST, deductions, record keeping, home office and vehicle expenses, and how much tax to set aside.',
    intro:
      'Side hustle income in Canada is generally taxable and is reported to the CRA, so the money side matters as much as the hustle itself. These guides explain how to report self-employment and platform income, when GST/HST registration applies, which expenses you may deduct, and how to keep records and set money aside, with links to official CRA sources for your situation.',
  },
];

export const CATEGORY_BASE = '/side-hustles/category';
export const CATEGORIES_INDEX = '/side-hustles/categories/';

const bySlug = new Map(CATEGORIES.map((c) => [c.slug, c]));

export function getCategory(slug: string): Category {
  const c = bySlug.get(slug as CategorySlug);
  if (!c) throw new Error(`Unknown category: ${slug}`);
  return c;
}

export function categoryHref(slug: string): string {
  return `${CATEGORY_BASE}/${slug}/`;
}

/** Count posts per category (all categories present, zero if empty). */
export function categoryCounts<T extends { data: { category: string } }>(articles: T[]) {
  return CATEGORIES.map((c) => ({
    ...c,
    count: articles.filter((a) => a.data.category === c.slug).length,
  }));
}

export interface Crumb {
  name: string;
  href: string;
}

/** schema.org BreadcrumbList for a trail of site-relative crumbs. */
export function breadcrumbJsonLd(crumbs: Crumb[], siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${siteUrl}${c.href}`,
    })),
  };
}
