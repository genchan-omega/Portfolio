// /src/timeline/page.tsx

// import Image from "next/image";
// import Link from "next/link";
import {Lobster} from 'next/font/google';

const lobster = Lobster({weight: '400', subsets:['latin']});

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Timeline() {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <h1 className={`${lobster.className} pt-14 font-bold text-5xl`}>
            Timeline
          </h1>
        <p className='pt-10'>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
      </div>
      <Footer />
    </div>
  );
}
