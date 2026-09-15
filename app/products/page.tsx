import type { Metadata } from "next";
import ProductsPage from "./productpage";

export const metadata: Metadata = {
  title: "Our Products | Plywood, PVC Panels, MDF, Doors & Hardware",
  description:
    "Browse Bajrang Plywood's full product range: plywood boards, PVC & WPC wall panels,MDF/HDHMR boards, laminates, wooden doors and hardware fittings.",
  keywords: [
    "plywood",
    "hardware supplier Lucknow",
    "laminates supplier Uttar Pradesh",
    "hdhmr board",
    "pvc wall panel",
    "mdf board",
    "Bajrang Plywood",
    "Century Ply Greenply dealer Lucknow",
};

export default function Page() {
  return <ProductsPage />;
}
