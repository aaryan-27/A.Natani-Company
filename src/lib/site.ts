/**
 * Central configuration for YOGENDRA JAIN & COMPANY.
 * Single source of truth for contact details, navigation, services and SEO.
 */

export const site = {
  name: "YOGENDRA JAIN & COMPANY",
  shortName: "Yogendra Jain & Co.",
  legalName: "Yogendra Jain & Company, Chartered Accountants",
  tagline: "Simplifying Taxation, Compliance & Business Growth",
  description:
    "Yogendra Jain & Company is a Jaipur-based Chartered Accountant firm offering expert income tax, GST, audit, company registration, accounting and business advisory services for individuals, startups, MSMEs and businesses.",
  url: "https://www.yogendrajainca.com",
  city: "Jaipur",
  state: "Rajasthan",
  // Use NEXT_PUBLIC_SITE_URL in production deployments.
  phone: "+91 82854 95212",
  phoneRaw: "918285495212",
  email: "info@yogendrajainca.com",
  address: {
    line1:
      "Office No A-302, 3rd Floor, Back side of Abhinandan Samudayik Kendra",
    line2: "Near Kanha Restaurant, Subhash Nagar, Bani Park",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302016",
    country: "India",
    full: "Office No A-302, 3rd Floor, Back side of Abhinandan Samudayik Kendra, near Kanha Restaurant, Subhash Nagar, Bani Park, Jaipur, Rajasthan 302016",
    geo: { lat: 26.9326, lng: 75.7896 },
  },
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  maps: {
    profile:
      "https://www.google.com/maps/search/?api=1&query=YOGENDRA%20JAIN%20%26%20COMPANY&query_place_id=ChIJS7Uu5qC0bTkRiwARZFdYA_s",
    embed:
      "https://www.google.com/maps?q=YOGENDRA%20JAIN%20%26%20COMPANY%2C%20Bani%20Park%2C%20Jaipur&output=embed",
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
