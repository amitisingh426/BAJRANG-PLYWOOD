import type { Metadata } from "next";
import ProductsPage from "./productpage";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore plywood, laminates, acrylic & leather panels, veneers, kitchen hardware, locks, handles, decoratives and wardrobe accessories at Bajrang Plywood, Lucknow — serving UP & the Nepal border.",
};

export default function Page() {
  return <ProductsPage />;
}
