import type { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Bajrang Plywood – Plywood, Laminates, Decoratives & Hardware Shop in Lucknow",
  description:
    "Bajrang Plywood is Lucknow's trusted plywood, Laminates and hardware store, offering PVC wall panels, doors, laminates, Decoratives and door locks at the best prices.",
};

export default function Page() {
  return <Home />;
}
