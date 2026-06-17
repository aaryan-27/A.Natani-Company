/**
 * Service catalogue. Each entry powers the home page cards, the /services hub
 * and an individual detail page at /services/[slug].
 */

export type Service = {
  slug: string;
  icon: string; // lucide-style key resolved in <ServiceIcon />
  title: string;
  short: string;
  tagline: string;
  intro: string;
  items: string[];
  benefits: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "income-tax",
    icon: "receipt",
    title: "Income Tax Services",
    short: "ITR filing, tax planning, notices & NRI taxation handled end-to-end.",
    tagline: "Income Tax Filing in Jaipur",
    intro:
      "From accurate ITR filing to proactive tax planning, we help individuals, salaried professionals, NRIs and businesses minimise tax legally and stay fully compliant with the latest Income Tax provisions.",
    items: [
      "ITR Filing (all forms)",
      "Tax Planning & Advisory",
      "Response to Tax Notices",
      "NRI Taxation",
      "Capital Gains Computation",
      "TDS Returns & Compliance",
    ],
    benefits: [
      "Maximise eligible deductions and refunds",
      "Avoid penalties with on-time filing",
      "Expert handling of scrutiny & notices",
      "Year-round tax planning, not just at deadline",
    ],
    process: [
      { title: "Share Documents", desc: "Send Form 16, investment proofs & bank details securely." },
      { title: "Review & Planning", desc: "We compute tax, identify deductions and optimise your liability." },
      { title: "Filing", desc: "We file your return and share the acknowledgement." },
      { title: "Ongoing Support", desc: "We track refunds and respond to any notices on your behalf." },
    ],
    faqs: [
      { q: "How much does ITR filing cost?", a: "ITR filing starts from ₹999 for salaried individuals. Pricing depends on income sources (capital gains, business income, foreign income). We share a fixed quote before starting — no surprises." },
      { q: "What is the last date to file my ITR?", a: "For most individuals the due date is 31st July of the assessment year. We recommend filing early to avoid the last-minute rush and to receive refunds sooner." },
      { q: "Can you help with an income tax notice?", a: "Yes. We regularly handle Section 139(9), 143(1), 143(2) and other notices — from drafting the response to representing you before the department." },
    ],
    keywords: ["Income Tax Filing Jaipur", "Tax Consultant Jaipur", "ITR Filing Jaipur", "NRI Taxation Jaipur"],
  },
  {
    slug: "gst",
    icon: "percent",
    title: "GST Services",
    short: "Registration, return filing, refunds and audits by GST specialists.",
    tagline: "GST Consultant in Jaipur",
    intro:
      "Stay GST compliant without the stress. We handle registration, monthly/quarterly return filing, reconciliation, refunds and audits so you can focus on running your business.",
    items: [
      "GST Registration",
      "GST Return Filing (GSTR-1, 3B, 9)",
      "GST Refunds",
      "GST Audit & Reconciliation",
      "GST Consultation & Advisory",
      "E-way Bill & E-invoicing Setup",
    ],
    benefits: [
      "Timely filing to avoid late fees & interest",
      "Input tax credit maximised through reconciliation",
      "Notice handling & departmental representation",
      "Dedicated point of contact for queries",
    ],
    process: [
      { title: "Assessment", desc: "We review your business and turnover to determine GST applicability." },
      { title: "Registration / Onboarding", desc: "We obtain your GSTIN or take over existing compliance." },
      { title: "Monthly Filing", desc: "We reconcile data and file returns on time, every cycle." },
      { title: "Advisory", desc: "Ongoing guidance on rates, ITC, refunds and audits." },
    ],
    faqs: [
      { q: "How long does GST registration take?", a: "Typically 3–7 working days once all documents (PAN, Aadhaar, business proof, bank details) are submitted, subject to department processing and any clarification requests." },
      { q: "Is GST registration mandatory for my business?", a: "Registration is mandatory above the turnover threshold (₹40 lakh for goods, ₹20 lakh for services in most states), for inter-state supply, and for e-commerce sellers. We'll confirm your specific case." },
      { q: "What if I miss a GST return deadline?", a: "Late filing attracts late fees and interest, and can block your e-way bills. We set up reminders and handle filings proactively so you never miss a cycle." },
    ],
    keywords: ["GST Consultant Jaipur", "GST Registration Jaipur", "GST Filing Jaipur", "GST Return Jaipur"],
  },
  {
    slug: "company-registration",
    icon: "building",
    title: "Company Registration",
    short: "Pvt Ltd, LLP, OPC, Partnership & MSME registration done right.",
    tagline: "Company Registration in Jaipur",
    intro:
      "Launch your business on the right legal footing. We help you choose the ideal structure and handle the entire incorporation process — from name approval to your first compliances.",
    items: [
      "Private Limited Company",
      "LLP Registration",
      "One Person Company (OPC)",
      "Partnership Firm",
      "MSME / Udyam Registration",
      "Startup India Registration",
    ],
    benefits: [
      "Right structure for liability, tax & funding",
      "End-to-end paperwork & ROC filings",
      "Faster approvals with error-free applications",
      "Post-incorporation compliance handled",
    ],
    process: [
      { title: "Consultation", desc: "We recommend the best structure for your goals and growth plans." },
      { title: "Documentation", desc: "We prepare DSC, DIN, MOA/AOA and all required forms." },
      { title: "Filing & Approval", desc: "We file with MCA/ROC and obtain your certificate of incorporation." },
      { title: "Go Live", desc: "PAN, TAN, bank account guidance and first compliances set up." },
    ],
    faqs: [
      { q: "Which business structure is best for me?", a: "It depends on liability, number of owners, funding plans and compliance appetite. Private Limited suits startups raising funds; LLP suits professional firms; OPC suits solo founders. We'll advise based on your specific situation in a free consultation." },
      { q: "How long does company registration take?", a: "A Private Limited Company or LLP typically takes 7–12 working days end-to-end, depending on name approval and document readiness." },
      { q: "Do you handle compliances after registration?", a: "Yes. We manage annual ROC filings, accounting, GST and income tax so your new entity stays fully compliant from day one." },
    ],
    keywords: ["Company Registration Jaipur", "LLP Registration Jaipur", "Pvt Ltd Registration Jaipur", "Startup Registration Jaipur"],
  },
  {
    slug: "audit",
    icon: "shield-check",
    title: "Audit Services",
    short: "Statutory, internal, tax & compliance audits with rigour and clarity.",
    tagline: "Audit Services in Jaipur",
    intro:
      "Audits that go beyond compliance to give you real insight. Our structured approach identifies risks, strengthens controls and ensures your statutory obligations are met accurately.",
    items: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audit",
      "Compliance Audit",
      "Stock & Concurrent Audit",
      "Management Reporting",
    ],
    benefits: [
      "Accurate, defensible financial statements",
      "Stronger internal controls & risk management",
      "Timely tax audit to avoid penalties",
      "Actionable findings, not just ticks",
    ],
    process: [
      { title: "Planning", desc: "We understand your business, systems and risk areas." },
      { title: "Fieldwork", desc: "We test transactions, controls and balances thoroughly." },
      { title: "Reporting", desc: "We deliver a clear report with findings and recommendations." },
      { title: "Follow-up", desc: "We support you in closing gaps and improving processes." },
    ],
    faqs: [
      { q: "Is a tax audit applicable to my business?", a: "A tax audit under Section 44AB applies when turnover exceeds prescribed limits (₹1 crore for business, ₹50 lakh for professionals, with higher digital-transaction thresholds). We'll assess your applicability." },
      { q: "What is the difference between statutory and internal audit?", a: "A statutory audit is legally mandated and focuses on the truth and fairness of financial statements. An internal audit is management-driven and focuses on controls, efficiency and risk." },
      { q: "How early should an audit start?", a: "We recommend planning at least a month before deadlines so fieldwork and reporting are unhurried and accurate." },
    ],
    keywords: ["Audit Firm Jaipur", "Statutory Audit Jaipur", "Tax Audit Jaipur", "Internal Audit Jaipur"],
  },
  {
    slug: "accounting",
    icon: "calculator",
    title: "Accounting & Bookkeeping",
    short: "Monthly bookkeeping, payroll, MIS & financial statements.",
    tagline: "Accounting Services in Jaipur",
    intro:
      "Clean books, every month. We maintain accurate, up-to-date accounts and give you the financial reports you need to make confident decisions — without hiring an in-house team.",
    items: [
      "Monthly Bookkeeping",
      "Payroll Processing",
      "MIS Reporting",
      "Financial Statements",
      "Accounts Payable / Receivable",
      "Tally / Zoho / Cloud Accounting",
    ],
    benefits: [
      "Always audit-ready, up-to-date books",
      "Clear monthly MIS for decision-making",
      "Compliant payroll with TDS & PF/ESI",
      "Lower cost than an in-house team",
    ],
    process: [
      { title: "Setup", desc: "We set up your chart of accounts and accounting software." },
      { title: "Monthly Bookkeeping", desc: "We record and reconcile all transactions accurately." },
      { title: "Reporting", desc: "You receive monthly MIS, P&L and balance sheet." },
      { title: "Review", desc: "Periodic reviews to improve margins and cash flow." },
    ],
    faqs: [
      { q: "Do you work with cloud accounting software?", a: "Yes — we work with Tally, Zoho Books, QuickBooks and other platforms, and can migrate you to the one that fits your business best." },
      { q: "Can you handle our payroll too?", a: "Absolutely. We process salaries, payslips, TDS, PF and ESI so your team is paid accurately and on time." },
      { q: "How do we share documents with you?", a: "Securely — via shared drives or your accounting software. We make the handover simple and keep your data confidential." },
    ],
    keywords: ["Accounting Services Jaipur", "Bookkeeping Jaipur", "Payroll Services Jaipur", "Outsourced Accounting Jaipur"],
  },
  {
    slug: "advisory",
    icon: "trending-up",
    title: "Business Advisory",
    short: "Structuring, financial planning, funding readiness & compliance.",
    tagline: "Business Advisory in Jaipur",
    intro:
      "A trusted financial partner for your growth. We help you structure your business, plan finances, prepare for funding and build the compliance foundation to scale with confidence.",
    items: [
      "Business Structuring",
      "Financial Planning",
      "Funding & Investor Readiness",
      "Compliance Consulting",
      "Budgeting & Cash Flow",
      "Virtual CFO Services",
    ],
    benefits: [
      "Strategic structure for tax & growth",
      "Investor-ready financials & projections",
      "Better cash-flow visibility & control",
      "A CA who understands your business",
    ],
    process: [
      { title: "Discovery", desc: "We understand your business, goals and challenges." },
      { title: "Diagnosis", desc: "We analyse finances, structure and compliance gaps." },
      { title: "Roadmap", desc: "We build a clear, prioritised action plan." },
      { title: "Execution", desc: "We support you through implementation and reviews." },
    ],
    faqs: [
      { q: "Do you offer virtual CFO services?", a: "Yes. For growing businesses we act as your part-time CFO — overseeing finance, MIS, compliance and strategy at a fraction of a full-time hire." },
      { q: "Can you help us get investment-ready?", a: "We prepare clean financials, projections, cap tables and due-diligence documentation so you can approach investors with confidence." },
      { q: "Is advisory only for large companies?", a: "Not at all — startups and MSMEs benefit the most from early structuring and planning. We tailor our engagement to your stage and budget." },
    ],
    keywords: ["Business Advisory Jaipur", "Virtual CFO Jaipur", "Financial Planning Jaipur", "Business Compliance Jaipur"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
