// /src/components/Projectcard/Projectcard.tsx

import Image from "next/image";
import Link from "next/link";

interface Props {
  post: {
    id: string;
    title: string;
    date: string;
    description: string;
    img: {
      url: string;
      height: number;
      width: number;
    };
    tag: string;
    content: string;
  }
};

export default function Projectcard({post}: Props) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="border-2 m-4 transition-transform duration-300 hover:scale-105"
    >
      <figure className="relative flex flex-col h-90 w-full">
        <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-md `}>
          {post.tag}
        </div>
        <div className="w-full h-48 overflow-hidden border-b-2 border-dotted">
          <Image
            src={post.img.url}
            width={500}
            height={500}
            // layout="fill"
            // objectFit="cover"
            alt="Picture of the article"
            className="w-full"
          />
        </div>
        <h2 className="text-lg md:text-2xl">
          {post.title}
        </h2>
        <figcaption>
          {post.description}
        </figcaption>
      </figure>
    </Link>
  );
};
