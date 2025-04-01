// /src/blog/tech/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Link from "next/link";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
import Subsubtitle from "@/components/blog/Subsubtitle/Subsubtitle";
import Postcard from "@/components/blog/Postcard/Postcard";
// import Renderer from '@/components/Renderer/Renderer';
// import Working from '@/components/Working/Working';

export default function Tech() {
	// 記事のデータを取得
	const postsDirectoryPath = "src/components/blog/Posts/tech";
	const files = fs
		.readdirSync(postsDirectoryPath)
		.filter((filename) => !filename.startsWith("_"));
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
				content: data.content,
			};
		})
		.reverse();

	return (
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
			<div className="w-full max-w-screen-md mx-auto flex-1">
				<Header />
				<Subtitle name="Blog" />
				<Subsubtitle name="Tech" />
				<div className="grid md:grid-cols-2">
					{posts.map((post) => (
						<Postcard key={post.slug} post={post} dir="tech" />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
