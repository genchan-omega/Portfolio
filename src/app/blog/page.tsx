// /src/blog/page.tsx

// import Image from "next/image";
// import Link from "next/link";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Subtitle from '@/components/Subtitle/Subtitle';

export default function Blog() {
  return (
    <div>
      <Header />
      <Subtitle 
        name="Blog"
      />
      <Footer />
    </div>
  );
}
