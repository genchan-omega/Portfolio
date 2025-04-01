// /src/abountme/page.tsx

import Image from "next/image";
// import Link from "next/link";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
import Skill from "@/components/aboutme/Skill/Skill";

import profile from "@/public/profile/profile.jpg";

export default function Aboutme() {
	return (
		<div>
			<Header />
			<Subtitle name="About Me" />
			<div className="flex flex-col justify-center items-center w-full mx-auto">
				<h2 className="text-4xl md:text-5xl font-bold underline text-center">
					Basic Info
				</h2>
				<figure className="flex flex-col md:flex-row justify-center items-center p-5 gap-5">
					<div className="p-1 rounded-4xl bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
						<Image
							src={profile}
							alt="Picture of the author"
							className="w-[200px] md:max-w-xs rounded-4xl shadow-md bg-white p-1"
							objectFit="contain"
						/>
					</div>
					<table className="w-full max-w-md border-collapse border border-gray-300 text-left text-lg">
						<tbody>
							<tr className="border-b border-gray-300">
								<th className="p-2 font-semibold">Name</th>
								<td className="p-2">genchan_omega</td>
							</tr>
							<tr className="border-b border-gray-300">
								<th className="p-2 font-semibold">Date of Birth</th>
								<td className="p-2">2003/10/21</td>
							</tr>
							<tr className="border-b border-gray-300">
								<th className="p-2 font-semibold">BirthPlace</th>
								<td className="p-2">東京</td>
							</tr>
							<tr className="border-b border-gray-300">
								<th className="p-2 font-semibold">Univ.</th>
								<td className="p-2">
									東京農工大学 <br />
									知能情報システム工学専攻
								</td>
							</tr>
							<tr className="border-b border-gray-300">
								<th className="p-2 font-semibold">Club</th>
								<td className="p-2">IEEE TUAT SB</td>
							</tr>
							<tr>
								<th className="p-2 font-semibold">Hobby</th>
								<td className="p-2">競技プログラミング，謎解き，アニメ鑑賞</td>
							</tr>
						</tbody>
					</table>
				</figure>
				<h2 className="text-4xl md:text-5xl font-bold underline text-center">
					skills
				</h2>
				<div className="w-200 p-5 max-w-screen mx-auto flex flex-wrap justify-center items-center">
					<Skill src="/skills/C.png" alt="C" />
					<Skill src="/skills/c++.png" alt="C++" />
					<Skill src="/skills/cs.png" alt="C#" />
					<Skill src="/skills/python.png" alt="Python" />
					<Skill src="/skills/html.png" alt="HTML" />
					<Skill src="/skills/css.png" alt="CSS" />
					<Skill src="/skills/typescript.png" alt="TypeScript" />
					<Skill src="/skills/typst.png" alt="Typst" />
					<Skill src="/skills/nextjs.png" alt="NEXT.JS" />
					<Skill src="/skills/tailwind.png" alt="Tailwind" />
				</div>
				<h2 className="text-4xl md:text-5xl font-bold underline text-center">
					Qualifications
				</h2>
				<div className="p-5">
					<p>
						基本情報技術者
						<br />
						応用情報技術者
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
