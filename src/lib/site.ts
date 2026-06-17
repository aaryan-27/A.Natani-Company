/**
 * Central configuration for A G R S AND ASSOCIATES.
 * Single source of truth for contact details, navigation, services and SEO.
 */

export const site = {
  name: "A G R S AND ASSOCIATES",
  shortName: "A G R S and Associates",
  legalName: "A G R S and Associates, Chartered Accountants",
  tagline: "Simplifying Taxation, Compliance & Business Growth",
  description:
    "A G R S and Associates is a Jaipur-based Chartered Accountant firm offering expert income tax, GST, audit, company registration, accounting and business advisory services for individuals, startups, MSMEs and businesses.",
  url: "https://www.agrsandassociates.com",
  city: "Jaipur",
  state: "Rajasthan",
  // Use NEXT_PUBLIC_SITE_URL in production deployments.
  phone: "+91 88750 00468",
  phoneRaw: "918875000468",
  email: "info@agrsandassociates.com",
  address: {
    line1: "Third Floor, H 458, Azad Marg",
    line2: "C Scheme",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302001",
    country: "India",
    full: "Third Floor, H 458, Azad Marg, C Scheme, Jaipur, Rajasthan 302001, India",
    geo: { lat: 26.9069, lng: 75.7965 },
  },
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  maps: {
    profile:
      "https://www.google.com/maps/search/?api=1&query=A%20G%20R%20S%20and%20Associates&query_place_id=ChIJlyIsSzC1bTkRY2QiJa7Nou0",
    embed:
      "https://www.google.com/maps?q=A%20G%20R%20S%20and%20Associates%2C%20C%20Scheme%2C%20Jaipur&output=embed",
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
