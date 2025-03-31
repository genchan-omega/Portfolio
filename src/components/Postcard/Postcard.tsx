// /src/components/Postcard/Postcard.tsx

import Image from "next/image";
import Link from "next/link";

interface Props {
  post: {
    slug: string;
    title: string;
    img: string;
    date: string;
    description: string;
    content: string;
  };
  dir: string;
}

export default function Postcard({post, dir}: Props) {
  return (
    <Link
      href={`/blog/${dir}/${post.slug}`}
      className="border-2 m-4 transition-transform duration-300 hover:scale-105"
    >
      <figure className="flex flex-col h-90 w-full">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.img}
            layout="fill"
            objectFit="cover"
            alt="Picture of the article"
            className="w-full"
          />
        </div>
        <h2 className="text-lg md:text-2xl border-b-2 border-dotted z-1">
          {post.title}
        </h2>
        <figcaption>
          {post.description}
        </figcaption>
      </figure>
    </Link>
  );
};
