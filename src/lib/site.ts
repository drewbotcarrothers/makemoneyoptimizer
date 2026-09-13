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

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/side-hustles', label: 'Side Hustles' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
