import type { Metadata } from "next";
import ProductsPage from "./productpage";

export const metadata: Metadata = {
  title: "Plywood, Laminates & Hardware Catalogue | Bajrang Plywood",
  description:
    "Browse plywood, laminates, veneers, louvers, kitchen hardware, locks and doors at Bajrang Plywood, Lucknow. Retail and wholesale. Enquire today.",
};

export default function Page() {
  return <ProductsPage />;
}
