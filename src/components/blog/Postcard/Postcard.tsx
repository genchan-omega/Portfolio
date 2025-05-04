// /src/components/Postcard/Postcard.tsx

import Image from "next/image";
import Link from "next/link";

interface Props {
  post: {
    slug: string,
    title: string,
    img: string,
    date: string,
    description: string,
    tag: string
  };
};

export default function Postcard({ post }: Props) {
  const tagColorMap: Record<string, string> = {
    Tech: "bg-cyan-300",
    Riddle: "bg-green-300",
    Movie: "bg-pink-300",
    Others: "bg-gray-300",
  };
  const tagColor = tagColorMap[post.tag] || "bg-gray-400";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="relative border-2 transition duration-300 hover:scale-105 w-full"
    >
      <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-md ${tagColor} text-black border-2`}>
        {post.tag}
      </div>
      <figure className="h-40 md:h-90 w-full flex flex-row md:flex-col">
        <div className="relative h-40 w-40 md:h-48 md:w-full overflow-hidden border-r-2 border-dotted md:border-r-0 md:border-b-2">
          <Image
            src={post.img}
            fill
            alt="Picture of the article"
            className="object-cover -z-1"
          />
        </div>
        <div className="flex flex-col justify-center md:justify-start p-2 flex-1">
          <h2 className="text-lg md:text-2xl">{post.title}</h2>
          <figcaption className="text-sm md:text-xl">{post.description}</figcaption>
        </div>
      </figure>
    </Link>
  );
}
