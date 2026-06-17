/**
 * Blog content. Articles are authored in lightweight blocks so a CMS
 * (e.g. Supabase) can later replace this static source with the same shape.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: number;
  body: Block[];
};

export const categories = [
  "Income Tax",
  "GST",
  "Startup",
  "Compliance",
  "Accounting",
  "Business Growth",
];

export const posts: Post[] = [
  {
    slug: "itr-filing-guide",
    title: "Latest ITR Filing Guide: How to File Your Income Tax Return Correctly",
    excerpt:
      "A step-by-step guide to filing your ITR accurately — choosing the right form, claiming deductions and avoiding common mistakes.",
    category: "Income Tax",
    date: "2026-05-20",
    readingTime: 6,
    body: [
      { type: "p", text: "Filing your Income Tax Return (ITR) on time is one of the most important financial responsibilities for every earning individual. A correctly filed return not only keeps you compliant but can also unlock refunds and serve as proof of income for loans and visas." },
      { type: "h2", text: "Choose the correct ITR form" },
      { type: "p", text: "The form you use depends on your income sources. Salaried individuals usually file ITR-1, while those with capital gains or business income may need ITR-2 or ITR-3. Using the wrong form can lead to a defective return notice." },
      { type: "h2", text: "Documents you'll need" },
      { type: "ul", items: ["Form 16 from your employer", "Form 26AS and AIS/TIS", "Bank interest certificates", "Investment proofs (80C, 80D, etc.)", "Capital gains statements, if any"] },
      { type: "h2", text: "Claim every deduction you're entitled to" },
      { type: "p", text: "Many taxpayers leave money on the table by missing deductions under Sections 80C, 80D, 80G and HRA. A quick review with a CA often results in a larger refund than self-filing." },
      { type: "h2", text: "File early, avoid the rush" },
      { type: "p", text: "Filing well before the 31st July deadline means faster refunds and time to fix any errors. If you're unsure about any part of the process, our team can file your return accurately for a fixed, transparent fee." },
    ],
  },
  {
    slug: "gst-return-deadlines",
    title: "GST Return Deadlines: A Simple Calendar for Businesses",
    excerpt:
      "Confused about when to file GSTR-1, GSTR-3B and annual returns? Here's a clear breakdown of GST due dates and penalties.",
    category: "GST",
    date: "2026-05-08",
    readingTime: 5,
    body: [
      { type: "p", text: "Missing a GST deadline can mean late fees, interest and blocked e-way bills. Understanding the GST filing calendar helps you stay compliant and protect your input tax credit." },
      { type: "h2", text: "Key GST returns and due dates" },
      { type: "ul", items: ["GSTR-1 (outward supplies): 11th of the next month (monthly) or quarterly under QRMP", "GSTR-3B (summary return & payment): 20th of the next month (or 22nd/24th under QRMP)", "GSTR-9 (annual return): 31st December of the next financial year"] },
      { type: "h2", text: "Penalties for late filing" },
      { type: "p", text: "Late filing attracts a late fee per day (subject to caps) plus 18% annual interest on unpaid tax. Repeated delays can also affect your compliance rating." },
      { type: "h2", text: "How to never miss a deadline" },
      { type: "p", text: "The simplest solution is to outsource your GST compliance. We reconcile your data, maximise input tax credit and file every return on time — so you can focus on running your business." },
    ],
  },
  {
    slug: "benefits-of-llp-registration",
    title: "Benefits of LLP Registration for Small Businesses & Professionals",
    excerpt:
      "Why a Limited Liability Partnership is often the smartest structure for professional firms and small businesses in India.",
    category: "Startup",
    date: "2026-04-25",
    readingTime: 4,
    body: [
      { type: "p", text: "A Limited Liability Partnership (LLP) blends the flexibility of a partnership with the protection of a company. For many professionals and small businesses, it's the ideal middle ground." },
      { type: "h2", text: "Top benefits of an LLP" },
      { type: "ul", items: ["Limited liability — your personal assets stay protected", "Lower compliance burden than a Private Limited Company", "No minimum capital requirement", "Separate legal identity and perpetual succession", "Tax-efficient for many professional firms"] },
      { type: "h2", text: "Is an LLP right for you?" },
      { type: "p", text: "LLPs work well for consultancies, agencies and professional partnerships that don't plan to raise equity funding. If you intend to attract investors, a Private Limited Company may suit better. We'll help you decide in a free consultation." },
    ],
  },
  {
    slug: "tax-saving-strategies",
    title: "Smart Tax Saving Strategies for the Financial Year",
    excerpt:
      "Practical, legal ways to reduce your tax liability — from Section 80C investments to smart salary structuring.",
    category: "Income Tax",
    date: "2026-04-10",
    readingTime: 6,
    body: [
      { type: "p", text: "Effective tax planning is about making the most of the deductions and exemptions the law already allows you. Done early in the year, it can save you a significant amount." },
      { type: "h2", text: "Maximise Section 80C" },
      { type: "p", text: "Investments in ELSS, PPF, life insurance, EPF and principal repayment on home loans qualify for deduction up to ₹1.5 lakh under Section 80C." },
      { type: "h2", text: "Don't forget health & other deductions" },
      { type: "ul", items: ["Section 80D — health insurance premiums", "Section 80CCD(1B) — additional ₹50,000 for NPS", "Section 24 — interest on home loan", "Section 80G — eligible donations"] },
      { type: "h2", text: "Choose the right tax regime" },
      { type: "p", text: "The old and new tax regimes suit different profiles. We compare both for you and recommend the one that minimises your tax — a small decision that can make a big difference." },
    ],
  },
  {
    slug: "bookkeeping-for-startups",
    title: "Why Clean Bookkeeping Is a Startup's Best Friend",
    excerpt:
      "Good books aren't just for tax season — they power better decisions, smoother funding and stress-free compliance.",
    category: "Accounting",
    date: "2026-03-28",
    readingTime: 4,
    body: [
      { type: "p", text: "Many founders treat bookkeeping as an afterthought — until an investor asks for financials or a tax notice arrives. Clean, up-to-date books prevent these headaches entirely." },
      { type: "h2", text: "What good bookkeeping gives you" },
      { type: "ul", items: ["Accurate monthly P&L and cash-flow visibility", "Faster, smoother investor due diligence", "Audit-ready records all year round", "Confident, data-driven decisions"] },
      { type: "h2", text: "Outsource vs in-house" },
      { type: "p", text: "For most early-stage startups, outsourcing bookkeeping to a CA firm is far more cost-effective than hiring in-house — and you get expert oversight built in." },
    ],
  },
  {
    slug: "msme-registration-benefits",
    title: "MSME / Udyam Registration: Benefits Every Small Business Should Know",
    excerpt:
      "From easier credit to government tenders, here's why registering as an MSME is worth the few minutes it takes.",
    category: "Compliance",
    date: "2026-03-15",
    readingTime: 4,
    body: [
      { type: "p", text: "Udyam (MSME) registration is free, quick and unlocks a range of benefits for small businesses — yet many eligible businesses never register." },
      { type: "h2", text: "Key benefits of MSME registration" },
      { type: "ul", items: ["Easier access to collateral-free bank loans", "Protection against delayed payments", "Subsidies and priority in government tenders", "Concessions on certain fees and electricity"] },
      { type: "h2", text: "How to register" },
      { type: "p", text: "Registration is done online using your Aadhaar and PAN. We handle it for you and ensure your details are correctly classified so you receive every benefit you're entitled to." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
