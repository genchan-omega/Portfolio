// /src/Project/page.tsx

// import Image from "next/image";
// import Link from "next/link";

import fs from "fs";
import path from "path";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
// import Working from "@/components/Working/Working";
import Projectcard from "@/components/Project/Projectcard/Projectcard";

interface Post {
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

export default function Project() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const posts: Post[] = JSON.parse(fileContent);

  return (
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
			<div className="w-full max-w-screen-md mx-auto flex-1">
				<Header />
				<Subtitle name="Project" />

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">ブログ一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {posts.map((post) => (
          <Projectcard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );





			</div>
			<Footer />
		</div>
	);
}
