// /src/components/blog/Contents/Contents.tsx

"use client";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Postcard from "@/components/blog/Postcard/Postcard";

import { useState } from "react";

export default function Blog() {
  const tags = ["All", "Tech", "Riddle", "Movie", "Others"];
  const [filter, setFilter] = useState("All");

  const postsDirectoryPath = "src/components/blog/Posts/tech";
  const files = fs.readdirSync(postsDirectoryPath).filter((filename) => !filename.startsWith("_"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(postsDirectoryPath, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(".md", ""),
        title: data.title,
        img: data.img,
        date: data.date,
        description: data.description,
        tag: data.tag
      };
    })
    .reverse();

  const filteredPosts = (filter === "All")
    ? posts
    : posts.filter((post) => post.tag === filter);

  return (
    <div className="w-full max-w-screen-md mx-auto flex-1">
      <div className="flex flex-col justify-center items-center gap-4">
        <select
          className="w-50 text-2xl text-center border"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-5">
        {filteredPosts.map((post) => (
          <Postcard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
