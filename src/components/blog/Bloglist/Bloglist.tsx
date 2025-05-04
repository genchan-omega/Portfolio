// /src/components/blog/Bloglist/Bloglist.tsx

"use client";

import { useState } from "react";
import { Field, Select } from "@headlessui/react";

import Postcard from "@/components/blog/Postcard/Postcard";

interface Props {
  posts: {
    slug: string;
    title: string;
    img: string;
    date: string;
    description: string;
    tag: string;
    content: string;
  }[];
}

export default function Bloglist({ posts }: Props) {
  const [filter, setFilter] = useState<string>("All");

  const tags = ["All", "Tech", "Riddle", "Movie", "Others"];
  const filteredPosts = (filter === "All")
    ? posts
    : posts.filter((post) => post.tag === filter);

  return (
    <>
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
          <Postcard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
