/**
 * Single source for the free Canadian side hustle tax checklist. Rendered as HTML at
 * /free-side-hustle-tax-checklist/ and printed to public/downloads/canadian-side-hustle-tax-checklist.pdf
 * (see README "Regenerating the tax checklist PDF"). Every item cites a canada.ca page by key.
 * Figures were checked against those pages on CHECKED_ON. Re-check every January (CPP, brackets, dates).
 */
export const CHECKED_ON = 'October 4, 2026';
export const PDF_PATH = '/downloads/canadian-side-hustle-tax-checklist.pdf';

export const SOURCES = {
  records: {
    title: 'Business records',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/business-records.html',
  },
  retention: {
    title: 'Where to keep your records, how long to keep them',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records/where-keep-your-records-long-request-permission-destroy-them-early.html',
  },
  vehicleRecords: {
    title: 'Motor vehicle records',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/business-expenses/motor-vehicle-expenses/motor-vehicle-records.html',
  },
  platforms: {
    title: 'Reporting Rules for Digital Platforms',
    url: 'https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms.html',
  },
  t2125: {
    title: 'Form T2125, Statement of Business or Professional Activities',
    url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2125.html',
  },
  expenses: {
    title: 'Business expenses',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/business-expenses.html',
  },
  expenseLines: {
    title: 'Expenses section of Form T2125',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/report-business-income-expenses/completing-form-t2125/expenses-section-form-t2125.html',
  },
  home: {
    title: 'Business-use-of-home expenses',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/report-business-income-expenses/completing-form-t2125/business-use-home-expenses.html',
  },
  gst: {
    title: 'When to register for and start charging the GST/HST',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html',
  },
  rideshare: {
    title: 'GST/HST information for taxi operators and commercial ride-sharing drivers',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-specific-situations/taxi-ride-sharing-drivers.html',
  },
  rates: {
    title: 'Current year tax rates and income brackets (2026)',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html',
  },
  cpp: {
    title: 'Contributions to the Canada Pension Plan',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/contributions.html',
  },
  cppLine: {
    title: 'Line 42100 – CPP contributions payable on self-employment income and other earnings',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-42100-cpp-contributions-payable-on-self-employment-other-earnings.html',
  },
  instalmentsWho: {
    title: 'Required tax instalments for individuals: who has to pay',
    url: 'https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/income-tax-instalments/who-pays-instalments.html',
  },
  instalmentsDue: {
    title: 'Required tax instalments for individuals: payment due dates',
    url: 'https://www.canada.ca/en/revenue-agency/services/payments/payments-cra/individual-payments/income-tax-instalments/due-dates.html',
  },
  filingDates: {
    title: 'Filing due dates for the 2025 tax return',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals/filing-dates-tax-return.html',
  },
  deadlines2026: {
    title: '2026 tax deadlines for Canadian businesses and self-employed individuals',
    url: 'https://www.canada.ca/en/services/taxes/resources-for-small-and-medium-businesses/2026-tax-deadlines-canadian-businesses-self-employed-individuals.html',
  },
} as const;

export type SourceKey = keyof typeof SOURCES;

export interface ChecklistItem {
  /** Plain text; keep it short enough to print on one or two lines. */
  text: string;
  cite: SourceKey[];
}

export interface ChecklistSection {
  id: string;
  title: string;
  items: ChecklistItem[];
  /** Optional on-site guide that explains the section in depth. */
  guide?: { href: string; label: string };
}

export const CHECKLIST: ChecklistSection[] = [
  {
    id: 'records',
    title: '1. Record keeping',
    guide: { href: '/side-hustles/record-keeping-side-hustle-canada/', label: 'Record keeping for side hustles' },
    items: [
      {
        text: 'Record every payment you receive with its date, amount, and source, whether it came by cash, e-transfer, or an app.',
        cite: ['records'],
      },
      {
        text: 'Keep the original documents: sales invoices, receipts, bank deposit slips, fee statements, and contracts.',
        cite: ['records'],
      },
      { text: 'Keep separate records for each business you run.', cite: ['records'] },
      {
        text: 'Keep records and supporting documents for at least six years from the end of the last tax year they relate to.',
        cite: ['retention'],
      },
      {
        text: 'If you drive for the business, keep a logbook of each business trip (date, destination, purpose, kilometres) and record the odometer at the start and end of the year.',
        cite: ['vehicleRecords'],
      },
      {
        text: 'Know that certain selling, rental, and gig platforms must collect information on certain sellers and report it to the CRA every year. Keep your own records anyway.',
        cite: ['platforms'],
      },
    ],
  },
  {
    id: 't2125',
    title: '2. Report the income on Form T2125',
    guide: { href: '/side-hustles/report-side-hustle-income-cra-canada/', label: 'How to report side hustle income to the CRA' },
    items: [
      {
        text: 'Report self-employment (business or professional) income and expenses on Form T2125 with your income tax return.',
        cite: ['t2125'],
      },
      {
        text: 'Enter only the business part of any expense that is partly personal; personal expenses are not deductible.',
        cite: ['expenses'],
      },
    ],
  },
  {
    id: 'deductions',
    title: '3. Deduction categories to track',
    guide: { href: '/side-hustles/side-hustle-expense-deductions-canada/', label: 'What side hustle expenses can you deduct?' },
    items: [
      {
        text: 'Claim reasonable current expenses you incur to earn the income. Capital purchases (equipment, a vehicle) are claimed over time as capital cost allowance (CCA), not all at once.',
        cite: ['expenses'],
      },
      {
        text: 'Sort receipts into the T2125 expense lines, for example: advertising; meals and entertainment (allowable part only); insurance; interest and bank charges; business taxes, licences, and memberships; office expenses; office stationery and supplies; professional fees; rent; repairs and maintenance; travel; utilities; fuel (not motor vehicles); delivery, freight, and express; motor vehicle expenses; CCA; and other expenses.',
        cite: ['expenseLines'],
      },
      {
        text: 'Business-use-of-home: deductible only if the space is your principal place of business, or used only for the business and regularly to meet clients. Claim a reasonable share, such as workspace area divided by total home area.',
        cite: ['home'],
      },
    ],
  },
  {
    id: 'gst-hst',
    title: '4. GST/HST and the $30,000 small supplier threshold',
    guide: { href: '/side-hustles/gst-hst-registration-side-hustle-canada/', label: 'GST/HST registration for side hustles' },
    items: [
      {
        text: 'Add up your worldwide taxable supplies (revenue before expenses, from all your businesses and your associates) each calendar quarter.',
        cite: ['gst'],
      },
      {
        text: 'If you do not exceed $30,000 over four consecutive calendar quarters, you are a small supplier and do not have to register (you may register voluntarily).',
        cite: ['gst'],
      },
      {
        text: 'If you exceed $30,000 in a single calendar quarter, register and start charging GST/HST on the supply that made you exceed it.',
        cite: ['gst'],
      },
      {
        text: 'If you exceed $30,000 over four consecutive quarters (but not in one quarter), you stop being a small supplier at the end of the month after that quarter and must register.',
        cite: ['gst'],
      },
      {
        text: 'Self-employed taxi and commercial ride-sharing drivers must register for GST/HST even if they are small suppliers.',
        cite: ['rideshare'],
      },
      {
        text: 'Annual GST/HST filers who are self-employed with a December 31 year-end: for 2025, payment was due April 30, 2026 and the return by June 15, 2026.',
        cite: ['deadlines2026'],
      },
    ],
  },
  {
    id: 'set-aside',
    title: '5. Set money aside for tax',
    guide: { href: '/side-hustles/how-much-tax-set-aside-side-hustle-canada/', label: 'How much tax to set aside from a side hustle' },
    items: [
      {
        text: 'Expect no tax withheld from self-employment income. The CRA notes the self-employed may have to pay tax by instalments.',
        cite: ['instalmentsWho'],
      },
      {
        text: 'Set aside for federal plus provincial or territorial income tax at your bracket. Federal rates for 2026 start at 14% on the first $58,523 of taxable income; your province applies its own rates on top.',
        cite: ['rates'],
      },
      {
        text: 'Set aside for CPP on your net self-employment income as well (section 6), and, if you are registered, the GST/HST you collect, which is not your income.',
        cite: ['cpp', 'gst'],
      },
    ],
  },
  {
    id: 'cpp',
    title: '6. CPP on self-employment income',
    items: [
      {
        text: 'Outside Quebec, self-employed people pay the full CPP contribution (both the employee and employer share): 11.9% of net business income above the $3,500 basic exemption.',
        cite: ['cpp'],
      },
      {
        text: '2026 maximum base contribution for the self-employed: $8,460.90. Earnings between $74,600 and $85,000 also attract the second additional contribution at 8% (maximum $832).',
        cite: ['cpp'],
      },
      {
        text: 'Calculate the amount on Schedule 8 (or Form RC381) for line 42100. Quebec residents pay QPP through their Revenu Québec return instead.',
        cite: ['cppLine'],
      },
    ],
  },
  {
    id: 'instalments',
    title: '7. Tax instalments',
    items: [
      {
        text: 'You must pay 2026 instalments if your net tax owing is more than $3,000 ($1,800 in Quebec) in 2026 and was also more than that in either 2025 or 2024.',
        cite: ['instalmentsWho'],
      },
      {
        text: 'Instalments are due March 15, June 15, September 15, and December 15.',
        cite: ['instalmentsDue'],
      },
      {
        text: 'Watch for CRA instalment reminders: a February reminder covers March and June, and an August reminder covers September and December.',
        cite: ['instalmentsWho'],
      },
    ],
  },
  {
    id: 'dates',
    title: '8. Key dates',
    guide: { href: '/side-hustles/side-hustle-tax-prep-before-january-canada/', label: 'Side hustle tax prep before January' },
    items: [
      { text: 'December 15, 2026: last 2026 instalment, if you pay instalments.', cite: ['instalmentsDue'] },
      {
        text: 'December 31: your province or territory of residence on this date sets your provincial tax rates and instalment threshold.',
        cite: ['rates', 'instalmentsWho'],
      },
      {
        text: 'April 30: pay any balance owing. For the 2025 return this was April 30, 2026; check the CRA page for the 2026 return dates.',
        cite: ['filingDates'],
      },
      {
        text: 'June 15: filing deadline when you or your spouse or common-law partner carried on a business (other than mainly tax-shelter investments). For the 2025 return this was June 15, 2026. Any balance owing is still due April 30.',
        cite: ['filingDates'],
      },
      {
        text: 'If a due date falls on a weekend or a CRA-recognized public holiday, it moves to the next business day.',
        cite: ['filingDates'],
      },
    ],
  },
];
