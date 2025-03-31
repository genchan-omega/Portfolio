// /src/components/Icon/Icon.tsx

import Image from "next/image";
import Link from "next/link";

import src_github from "@/public/profile/github.svg"
import src_twitter from "@/public/profile/twitter.svg"
import src_atcoder from "@/public/profile/atcoder.png"

interface Props {
  href: string;
  alt: string;
  className: string;
  sort: string;
}

export default function Icon(props: Props) {
  let src;
  if(props.sort==="github")
    src = src_github;
  if(props.sort==="twitter")
    src = src_twitter;
  if(props.sort==="atcoder")
    src = src_atcoder;

  return (
    <div className="w-1/3 flex justify-center items-center">
      <Link href={props.href} className="flex w-[80px] md:w-[150px] justify-center items-center">
        <Image
          src={src}
          alt={props.alt}
          className={`${props.className} w-full transform hover:scale-110 transition duration-300`}
        />
      </Link>
    </div>
  );
};
