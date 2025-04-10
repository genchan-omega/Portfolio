// /src/blog/movie/page.tsx

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
import Subsubtitle from "@/components/blog/Subsubtitle/Subsubtitle";
// import Postcard from '@/components/Postcard/Postcard';
import Working from "@/components/Working/Working";

export default function Movie() {
	// 記事のデータを取得
	// const postsDirectoryPath = "src/components/Posts/movie";
	// const files = fs.readdirSync(postsDirectoryPath).filter((filename) => !filename.startsWith("_"));
	// const posts = files.map((filename) => {
	//   const filePath = path.join(postsDirectoryPath, filename);
	//   const fileContent = fs.readFileSync(filePath, "utf8");
	//   const { data } = matter(fileContent);
	//   return {
	//     slug: filename.replace(".md", ""),
	//     title: data.title,
	//     img: data.img,
	//     date: data.date,
	//     description: data.description,
	//     content: data.content,
	//   };
	// });

	return (
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
			<div className="w-full max-w-screen-md mx-auto flex-1">
				<Header />
				<Subtitle name="Blog" />
				<Subsubtitle name="Movie" />
				{/* <div className="grid md:grid-cols-2">
          {posts.map((post) => (
            <Postcard
              key = {post.slug}
              post = {post}
              dir="movie"
            />
          ))}
        </div> */}
				<Working />
			</div>
			<Footer />
		</div>
	);
}
