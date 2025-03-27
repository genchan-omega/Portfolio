// /src/components/Icon/Icon.tsx

import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  src: string;
  alt: string;
  className: string;
}

export default function Icon(props: Props) {
  return (
    <div className="w-1/3 flex justify-center items-center">
      <Link href={props.href} className="flex w-[80px] md:w-[150px] justify-center items-center">
        <Image
          src={props.src}
          layout="responsive"
          width={120}
          height={120}
          alt={props.alt}
          className={`${props.className} w-full transform hover:scale-110 transition duration-300`}
        />
      </Link>
    </div>
  );
};
