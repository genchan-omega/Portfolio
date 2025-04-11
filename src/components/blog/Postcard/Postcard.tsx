// /src/components/Postcard/Postcard.tsx

import Image from "next/image";
import Link from "next/link";

// interface Props {
//   post: {
//     slug: string;
//     title: string;
//     img: string;
//     date: string;
//     description: string;
//     content: string;
//   };
//   dir: string;
// }

export default function Postcard({post}) {
  // タグごとの色マッピング
  const tagColorMap: Record<string, string> = {
    tech: "bg-blue-500",
    life: "bg-green-500",
    design: "bg-pink-500",
    news: "bg-yellow-500 text-black", // 文字色も調整
    default: "bg-gray-400",
  };

  // 対応する色クラスを取得（なければ default）
  const tagColor = tagColorMap[post.tag] || tagColorMap.default;

  return (
    <Link
      href={`/blog/${post.tag}/${post.slug}`}
      className="border-2 m-4 transition-transform duration-300 hover:scale-105"
    >
      <figure className="relative flex flex-col h-90 w-full">
      <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-md z-5 ${tagColor}`}>
          {post.tag}
        </div>

        <div className="w-full h-48 overflow-hidden">
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
