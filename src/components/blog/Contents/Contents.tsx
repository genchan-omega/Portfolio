// /src/components/blog/Contents/Contents.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Postcard from "@/components/blog/Postcard/Postcard";
import Bloglist from "../Bloglist/Bloglist";

export default function Contents() {
    // 記事のデータを取得
    const postsDirectoryPath = "public/posts";
    const directories = fs.readdirSync(postsDirectoryPath).filter((filename) => {
      const fullPath = path.join(postsDirectoryPath, filename);
      return fs.statSync(fullPath).isDirectory() && !filename.startsWith("_");
    });
    

    const posts = directories.map((dirname) => {
      const filePath = path.join(postsDirectoryPath, dirname, "index.md");
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        slug: dirname,
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
      <Bloglist posts={posts} />
    </div>
  );
}
