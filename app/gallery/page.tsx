import type { Metadata } from "next";
import GalleryPage from "./gallerypage";

export const metadata: Metadata = {
  title: "Interior Project Gallery | Bajrang Plywood Lucknow",
  description:
    "See real kitchen, wardrobe, living room and office interiors built with Bajrang Plywood materials from our Lucknow showroom.",
};

export default function Page() {
  return <GalleryPage />;
}
