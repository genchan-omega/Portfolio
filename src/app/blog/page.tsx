// app/blog/page.tsx

"use client";

import { useState, useEffect } from "react";
import { client } from "@/libs/microcms";
import { Field, Select } from "@headlessui/react";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
import Postcard from "@/components/blog/Postcard/Postcard";

type BlogPost = {
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
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filter, setFilter] = useState<string>("All");

  // マウント時のみ実行
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await client.getList({
        endpoint: "blog",
        queries: {
          fields: "id,title,date,description,img,tag,content",
          limit: 50,
        },
      });
      setPosts(data.contents);
    };
    fetchPosts();
  }, []);

  const tags = ["All", "Tech", "Riddle", "Movie", "Others"];
  const filteredPosts = (filter === "All")
    ? posts
    : posts.filter((post) => post.tag.includes(filter));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full max-w-screen-md mx-auto flex-1">
        <Subtitle name="Blog" />
          <Field className="flex flex-col justify-center items-center gap-4">
            <Select
              name="tag-filter"
              aria-label="絞り込み"
              className="w-50 text-2xl text-center border"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </Select>
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-5">
            {filteredPosts.map((post) => (
              <Postcard key={post.id} post={post} />
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
}
