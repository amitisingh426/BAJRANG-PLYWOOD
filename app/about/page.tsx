import type { Metadata } from "next";
import AboutPage from "./aboutpage";

export const metadata: Metadata = {
  title: "About Us | Bajrang Plywood — Trusted Plywood & Interior Material Supplier in Lucknow",
  description:
    "Founded in 2013 by Mr. Anmol Agarwal, Bajrang Plywood is Lucknow's trusted plywood dealer, hardware supplier & decorative interior material distributor — an authorised dealer of 50+ brands and a trusted material supplier for Godrej projects and Adani Group infrastructure developments across Uttar Pradesh.",
  keywords: [
    "plywood dealer in Lucknow",
    "hardware supplier Lucknow",
    "laminates supplier Uttar Pradesh",
    "interior material supplier North India",
    "Godrej project material supplier Lucknow",
    "Adani Group approved plywood supplier",
    "Bajrang Plywood",
    "Century Ply Greenply dealer Lucknow",
  ],
  openGraph: {
    title: "About Bajrang Plywood — Lucknow's Trusted Plywood & Interior Material Supplier",
    description:
      "Serving Lucknow & Uttar Pradesh since 2013. Authorised dealer of 50+ brands and trusted material partner for Godrej projects and Adani Group infrastructure developments.",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
