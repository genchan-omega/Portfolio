// /src/blog/page.tsx

// import Link from "next/link";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Subtitle from '@/components/Subtitle/Subtitle';
import Contents_blog from '@/components/Contents_blog/Contents_blog';

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-screen mx-auto">
      <Header />
      <Subtitle name="Blog"/>
      <div className='flex-1 flex flex-col justify-center items-center gap-5'>
        <Contents_blog
          title="Tech"
          href="/blog/tech"
        />
        <Contents_blog
          title="Movie"
          href="/blog/movie"
        />
        <Contents_blog
          title="Riddle"
          href="/blog/riddle"
        />
      </div>
      <Footer />
    </div>
  );
}
