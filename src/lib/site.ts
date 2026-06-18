/**
 * Central configuration for DEEPAK ASWANI & ASSOCIATES.
 * Single source of truth for contact details, navigation, services and SEO.
 */

export const site = {
  name: "DEEPAK ASWANI & ASSOCIATES",
  shortName: "Deepak Aswani & Associates",
  legalName: "Deepak Aswani & Associates, Chartered Accountants",
  tagline: "Simplifying Taxation, Compliance & Business Growth",
  description:
    "Deepak Aswani & Associates is a Jaipur-based Chartered Accountant firm offering expert income tax, GST, audit, company registration, accounting and business advisory services for individuals, startups, MSMEs and businesses.",
  url: "https://www.agrsandassociates.com",
  city: "Jaipur",
  state: "Rajasthan",
  // Use NEXT_PUBLIC_SITE_URL in production deployments.
  phone: "+91 77373 76479",
  phoneRaw: "917737376479",
  email: "info@agrsandassociates.com",
  address: {
    line1: "Plot No. 177, Subhash Colony",
    line2: "Shastri Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302016",
    country: "India",
    full: "Plot No. 177, Subhash Colony, Shastri Nagar, Jaipur, Rajasthan 302016, India",
    geo: { lat: 26.929, lng: 75.792 },
  },
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  maps: {
    profile:
      "https://www.google.com/maps/search/?api=1&query=Deepak%20Aswani%20%26%20Associates&query_place_id=ChIJWcS2cd6zbTkRDExYIpJaz_E",
    embed:
      "https://www.google.com/maps?q=Deepak%20Aswani%20%26%20Associates%2C%20Shastri%20Nagar%2C%20Jaipur&output=embed",
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
