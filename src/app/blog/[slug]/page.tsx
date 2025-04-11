// app/blog/[slug]/page.tsx

import { client } from "@/libs/microcms";
// import { notFound } from 'next/navigation'

import Image from "next/image";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export async function generateStaticParams() {
  const data = await client.getList({
    endpoint: "blog",
    queries: {
      fields: "id,title,date,description,img,tag,content",
      limit: 50,
    },
  });
  return data.contents.map((content) => ({
    slug: content.id,
  }))
}

export default async function Post({ params }: {params:{slug: string}}){
  const { slug } = params;

  // slugによって記事を選択し，postに格納する
  const post = await client.getListDetail({
    endpoint: "blog",
    contentId: slug,
  });
  console.log(post);

  return (
    <div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
      <div className="w-full max-w-screen-md mx-auto flex-1">
        <Header />
        <div className="pt-14 w-full overflow-hidden">
          <Image
            src={post.img}
            width={1000}
            height={800}
            alt="Picture of the article"
            className="w-full"
          />
        </div>
        <div className="pb-10">
          <p className="text-right">{post.date}</p>
          <h1 className="text-4xl font-bold text-center">{post.title}</h1>
          {post.content}
        </div>
      </div>
      <Footer />
    </div>
  );
}