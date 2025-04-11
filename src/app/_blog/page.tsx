// /src/blog/page.tsx

// import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
import Postcard from "@/components/blog/Postcard/Postcard";
import { Field, Select, Description } from "@headlessui/react";

export default function Blog() {
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
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto">
			<Header />
			<Subtitle name="Blog" />
			<div className="flex justify-center items-center">
				<Field className="flex flex-col justify-center items-center">
					<Description>絞り込み</Description>
					<Select
						name="status"
						aria-label="Project status"
						data-hover
						className="w-50 text-2xl text-center border data-[hover]:shadow"
					>
						<option value="all">All</option>
						<option value="tech">Tech</option>
						<option value="riddle">Riddle</option>
						<option value="movie">Movie</option>
					</Select>
					<div className="grid grid-cols-2">
						{posts.map((post) => (
							<Postcard key={post.slug} post={post} dir="tech" />
						))}
					</div>
				</Field>
			</div>
			<Footer />
		</div>
	);
}
