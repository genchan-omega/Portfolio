// /src/app/contact/page.tsx

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
import Contactform from "@/components/contact/Contactform/Contactform";

import type { Metadata } from "next";

// metaデータ
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me via email.",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Subtitle name="Contact" />
      <Contactform />
      <Footer />
    </div>
  );
}
