// /src/page.tsx

import Image from "next/image";
import {Reggae_One} from 'next/font/google';

import Icon from '@/components/Icon/Icon';
import Contents from '@/components/Contents/Contents';
import Footer from '@/components/Footer/Footer';

const reggae = Reggae_One({weight: '400', subsets:['latin']});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center h-screen w-full flex-1">
        <div className="flex flex-row gap-5 items-center justify-center">
          <div className="relative p-1 rounded-4xl bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
            <Image
              src="/profile.jpg"
              width={300}
              height={300}
              alt="Picture of the author"
              className="rounded-4xl shadow-md bg-white p-1"
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className={`${reggae.className} pb-2 w-full text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text`}>
              genchan_omega
            </p>
            <div className="flex w-full justify-center items-center">
              <Icon 
                href="https://github.com/genchan-omega"
                src="/github.svg"
                alt="Icon of github"
                className="rounded-4xl invert"
              />
              <Icon 
                href="https://x.com/genchan_omega"
                src="/twitter.svg"
                alt="Icon of twitter"
                className="rounded-4xl invert"
              />
              <Icon 
                href="https://atcoder.jp/users/genchan_omega"
                src="/atcoder.png"
                alt="Icon of atcoder"
                className="rounded-4xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row relative justify-center items-center w-full gap-4">
          <Contents 
            title="Timeline"
            href="/timeline"
          />
          <Contents 
            title="Blog"
            href="/blog"
          />
          <Contents 
            title="Project"
            href="/project"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
