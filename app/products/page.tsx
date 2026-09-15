import type { Metadata } from "next";
import ProductsPage from "./productpage";

export const metadata: Metadata = {
  title: "Our Products | Plywood, PVC Panels, MDF, Doors & Hardware",
  description:
    "Browse Bajrang Plywood's full product range: plywood boards, PVC & WPC wall panels,MDF/HDHMR boards, laminates, wooden doors and hardware fittings.",
};

export default function Page() {
  return <ProductsPage />;
}
