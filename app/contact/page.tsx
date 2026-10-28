import type { Metadata } from "next";
import ContactPage from "./contactpage";

export const metadata: Metadata = {
  title: "Contact The Showroom, Kanpur Road Lucknow | Bajrang Plywood",
  description:
    "Visit Bajrang Plywood at 586 Bara Birwa, Kanpur Road, Lucknow. Open daily 10 AM - 8 PM. Call or WhatsApp for plywood and laminate prices.",
};

export default function Page() {
  return <ContactPage />;
}
