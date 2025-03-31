// /src/components/Contents/Contents.tsx

// import Image from "next/image";
import Link from "next/link";
import {Reggae_One} from 'next/font/google';

import Icon from '@/components/Icon/Icon';

const reggae = Reggae_One({weight: '400', subsets:['latin']});

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Link 
          href="/aboutme"
          className={`${reggae.className} pb-2 w-full text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:scale-110 transition duration-300`}>
          genchan_omega
        </Link>
        <div className="flex w-full justify-center items-center">
          <Icon 
            href="https://github.com/genchan-omega"
            alt="Icon of github"
            className="rounded-4xl invert"
            sort="github"
          />
          <Icon 
            href="https://x.com/genchan_omega"
            alt="Icon of twitter"
            className="rounded-4xl invert"
            sort="twitter"
          />
          <Icon 
            href="https://atcoder.jp/users/genchan_omega"
            alt="Icon of atcoder"
            className="rounded-4xl"
            sort="atcoder"
          />
        </div>
      </div>
    </div>
  );
}
