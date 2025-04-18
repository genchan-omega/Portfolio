// app/blog/page.tsx

import type { Metadata } from "next";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
import Contents from "@/components/blog/Contents/Contents";

// metaデータ
export const metadata: Metadata = {
  title: "Blog",
  description: "Read the blog I wrote.",
};

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Subtitle name="Blog" />
      <Contents />
      <Footer />
    </div>
  );
}
