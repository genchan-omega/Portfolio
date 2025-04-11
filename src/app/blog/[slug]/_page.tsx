// /src/blog/tech/[slug]/page.tsx

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

import Image from "next/image";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Renderer from "@/components/blog/Renderer/Renderer";

export async function generateStaticParams() {
	const postsDirectoryPath = "src/components/blog/gomi";
	return files.map((filename) => ({
		slug: filename.replace(".md", ""),
	}));
}

export default async function Post({params}: {params: Promise<{ slug: string }>}) {
	const { slug } = await params;

	const { data, content } = matter(fileContents);
	return (
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
			<div className="w-full max-w-screen-md mx-auto flex-1">
				<Header />
				<div className="pt-14 w-full overflow-hidden">
					<Image
						src={data.img}
						width={1000}
						height={800}
						alt="Picture of the article"
						className="w-full"
					/>
				</div>
				<div className="pb-10">
					<p className="text-right">{data.date}</p>
					<h1 className="text-4xl font-bold text-center">{data.title}</h1>
					<Renderer content={content} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
