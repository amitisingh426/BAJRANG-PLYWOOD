import type { Metadata } from "next";
import AboutPage from "./aboutpage";

export const metadata: Metadata = {
  title: "About Us | Bajrang Plywood – Plywood, Laminate & Decoratives Store in Lucknow",
  description:
    "Founded in 2013 by Mr. Anmol Agarwal, Bajrang Plywood, a leading plywood, Laminates and hardware dealer in Lucknow trusted by customers for quality boards, doors and panels. — an authorised dealer of 50+ brands and a trusted material supplier for Godrej projects and Adani Group infrastructure developments across Uttar Pradesh.",
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
    title: "About Us | Bajrang Plywood – Plywood, Laminate & Decoratives Store in Lucknow.",
    description:
      "Founded in 2013 by Mr. Anmol Agarwal, Bajrang Plywood, a leading plywood, Laminates and hardware dealer in Lucknow trusted by customers for quality boards, doors and panels. — an authorised dealer of 50+ brands and a trusted material supplier for Godrej projects and Adani Group infrastructure developments across Uttar Pradesh.",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
