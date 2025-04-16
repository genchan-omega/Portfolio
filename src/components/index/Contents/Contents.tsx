// /src/components/Contents/Contents.tsx

// import Image from "next/image";
import Link from "next/link";
import {Lobster} from 'next/font/google';

const lobster = Lobster({weight: '400', subsets:['latin']});

interface Props {
  title: string;
  href: string;
}

export default function Contents(props: Props) {
  return (
    <div className="w-64 h-20 flex items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110 border-2 border-cyan-100 p-0 overflow-hidden mx-auto">
      <div className="absolute h-full w-full inset-0 bg-cyan-200 opacity-50 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 p-0"></div>
      <Link href={props.href} className="flex w-full h-full justify-center items-center text-white relative p-0">
        <div className="relative w-full h-full rounded-lg flex items-center justify-center p-0">
          <p className={`${lobster.className} text-4xl font-bold relative z-10`}>
            {props.title}
          </p>
        </div>
      </Link>
    </div>
  );
}
