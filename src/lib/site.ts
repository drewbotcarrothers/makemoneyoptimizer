export const SITE = {
  name: 'Make Money Optimizer',
  shortName: 'MMO',
  domain: 'makemoneyoptimizer.com',
  url: 'https://makemoneyoptimizer.com',
  locale: 'en-CA',
  description:
    'Practical side hustle and extra-income guides for Canadians. Clear, ethical advice for online and offline ways to earn more — no fake earnings, no guarantees.',
  tagline: 'Smarter side income for Canadians',
  email: 'hello@makemoneyoptimizer.com',
  twitter: '@makemoneyopt',
} as const;

export const AUTHOR = {
  name: 'Andrew',
  path: '/about/andrew/',
  jobTitle: 'Personal finance expert',
  bio: 'Andrew is a personal finance expert, DIY investor and life optimizer based in Toronto, Canada. With over 19 years of corporate experience at a leading Canadian company, Andrew combines deep industry knowledge with a passion for technology to help others navigate personal finance, including side hustles, and streamline their daily lives.',
  shortBio:
    'Andrew is a personal finance expert, DIY investor, and life optimizer based in Toronto, Canada. With over 19 years of corporate experience at a leading Canadian company, he writes practical side-hustle guides that combine personal-finance context with a focus on technology and everyday decisions.',
  sisterSites: [
    { name: 'Saving Optimizer', href: 'https://savingoptimizer.com/' },
    { name: 'Canadian Credit Card Finder', href: 'https://canadiancreditcardfinder.com/' },
    { name: 'Latest Mortgage Rates', href: 'https://latestmortgagerates.ca/' },
    { name: 'Canadian Data Insights', href: 'https://canadiandatainsights.com/' },
    { name: 'Canadian Optimizer', href: 'https://canadianoptimizer.com/' },
  ],
  youtube: {
    name: 'Saving Optimizer on YouTube',
    href: 'https://www.youtube.com/@SavingOptimizer',
  },
} as const;

export const authorUrl = `${SITE.url}${AUTHOR.path}`;

export const authorSameAs = [
  ...AUTHOR.sisterSites.map((site) => site.href),
  AUTHOR.youtube.href,
];

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/side-hustles/', label: 'Side Hustles' },
  { href: '/side-hustles/categories/', label: 'Categories' },
  { href: '/guides/', label: 'Guides' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;
