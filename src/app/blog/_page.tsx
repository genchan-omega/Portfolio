// /src/blog/page.tsx

// import Image from "next/image";
import Link from "next/link";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Subtitle from '@/components/Subtitle/Subtitle';

export default function Blog() {
  const posts = [
    { slug: "first-post", title: "はじめての記事" },
    { slug: "second-post", title: "2つ目の記事" },
  ];
  
  return (
    <div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
      <div className='w-full max-w-screen-md mx-auto flex-1'>
        <Header />
        <Subtitle 
          name="Blog"
        />
        <div className='flex flex-wrap w-full justify-center items-center'>
          <div>
            <Link 
              href="/"
              className='flex justify-center items-center min-h-10 min-w-8 p-5 m-5 border-2 border-amber-600 text-2xl'
            >
              Hobby
            </Link>
          </div>
          <div>
            <Link 
              href="/"
              className='flex justify-center items-center min-h-10 min-w-8 p-5 m-5 border-2 border-amber-600 text-2xl'
            >
              Hobby
            </Link>
            <ul>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
