// /src/components/blog/Contents/Contents.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Postcard from "@/components/blog/Postcard/Postcard";

export default function Blog() {
    // 記事のデータを取得
    const postsDirectoryPath = "src/components/blog/Posts/tech";
    const files = fs.readdirSync(postsDirectoryPath).filter((filename) => !filename.startsWith("_"));
    const posts = files.map((filename) => {
      const filePath = path.join(postsDirectoryPath, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(".md", ""),
        title: data.title, 
        img: data.img,
        date: data.date,
        description: data.description,
        tag: data.tag,
        content: data.content,
      };
    });

  return (
    <div className="w-full max-w-screen-md mx-auto flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-5">
        {posts.map((post) => (
          <Postcard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
