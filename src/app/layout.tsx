import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { OrganizationSchema } from "@/components/Schema";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Chartered Accountant in Jaipur`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Chartered Accountant Jaipur",
    "CA Firm Jaipur",
    "Tax Consultant Jaipur",
    "GST Consultant Jaipur",
    "Income Tax Filing Jaipur",
    "Company Registration Jaipur",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Chartered Accountant in Jaipur`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Chartered Accountant in Jaipur`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <OrganizationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
