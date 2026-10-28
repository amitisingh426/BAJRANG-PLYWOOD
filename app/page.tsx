import type { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Plywood & Laminates Dealer in Lucknow | Bajrang Plywood",
  description:
    "Bajrang Plywood, Kanpur Road, Lucknow: authorised Century Ply,Greenply & Greenlam dealer. Plywood, laminates, veneers,hardware. Call today.",
};

export default function Page() {
  return <Home />;
}
