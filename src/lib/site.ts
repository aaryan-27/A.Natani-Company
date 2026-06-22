/**
 * Central configuration for A.NATANI & COMPANY.
 * Single source of truth for contact details, navigation, services and SEO.
 */

export const site = {
  name: "A.NATANI & COMPANY",
  shortName: "A.Natani & Company",
  legalName: "A.Natani & Company, Chartered Accountants",
  tagline: "Simplifying Taxation, Compliance & Business Growth",
  description:
    "A.Natani & Company is a Jaipur-based Chartered Accountant firm offering expert income tax, GST, audit, company registration, accounting and business advisory services for individuals, startups, MSMEs and businesses.",
  url: "https://www.anatanicompany.com",
  city: "Jaipur",
  state: "Rajasthan",
  // Use NEXT_PUBLIC_SITE_URL in production deployments.
  phone: "+91 98290 50994",
  phoneRaw: "919829050994",
  email: "info@anatanicompany.com",
  address: {
    line1: "Samod Tower, 207, Sansar Chandra Rd",
    line2: "opp. City Center Complex, Sindhi Camp",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302001",
    country: "India",
    full: "Samod Tower, 207, Sansar Chandra Rd, opp. City Center Complex, Azad Basti, Dudu bagh, Sindhi Camp, Jaipur, Rajasthan 302001, India",
    geo: { lat: 26.9221, lng: 75.7986 },
  },
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  maps: {
    profile:
      "https://www.google.com/maps/search/?api=1&query=A.Natani%20%26%20Company&query_place_id=ChIJHVQklWSzbTkRiKAq3b7mWtQ",
    embed:
      "https://www.google.com/maps?q=A.Natani%20%26%20Company%2C%20Sansar%20Chandra%20Rd%2C%20Jaipur&output=embed",
  },
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
} as const;

export const whatsappDefaultMessage =
  "Hello, I would like to know more about your CA services.";

/** Build a wa.me link with an optional custom prefilled message. */
export function whatsappLink(message: string = whatsappDefaultMessage) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phone.replace(/\s/g, "")}`;
export const mailLink = `mailto:${site.email}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Income Tax", href: "/services/income-tax" },
      { label: "GST Services", href: "/services/gst" },
      { label: "Company Registration", href: "/services/company-registration" },
      { label: "Audit Services", href: "/services/audit" },
      { label: "Accounting & Bookkeeping", href: "/services/accounting" },
      { label: "Business Advisory", href: "/services/advisory" },
    ],
  },
  { label: "Startup Compliance", href: "/startup-compliance" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

/** Services that have dedicated booking forms. */
export const serviceOptions = [
  "Income Tax / ITR Filing",
  "GST Registration & Filing",
  "Company / LLP Registration",
  "Audit Services",
  "Accounting & Bookkeeping",
  "Business Advisory",
  "Startup Compliance",
  "Other",
] as const;
