// /src/components/Header/Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
	// isOpenの初期値がfalse, setIsOpenはisOpenをいじる関数
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="text-white p-4 fixed top-0 left-0 w-full flex justify-between items-center z-10">
			<h1 className="text-xl font-bold"></h1>

			<button
				className="min-h-10 min-w-10 flex flex-col justify-around items-center p-2 rounded-md hover:bg-gray-600 transition duration-300"
				onClick={() => setIsOpen((state) => !state)}
			>
				<span
					className={`w-6 h-0.5 bg-white transition ${
						isOpen ? "rotate-45 translate-y-2" : ""
					}`}
				></span>
				<span
					className={`w-6 h-0.5 bg-white transition ${
						isOpen ? "opacity-0" : ""
					}`}
				></span>
				<span
					className={`w-6 h-0.5 bg-white transition ${
						isOpen ? "-rotate-45 -translate-y-2" : ""
					}`}
				></span>
			</button>
			<nav
				className={`absolute top-full right-0 w-48 p-0 m-0 bg-gray-800 rounded-md transition duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<ul className="flex flex-col space-y-6 justify-center items-center border-2 bg-black p-0 m-0">
					<li className="flex justify-center items-center h-full w-full border-b-2 border-dotted hover:bg-gray-600 transition duration-300 p-0 m-0">
						<Link href="/" className="h-full w-full p-4 text-xl text-center">
							Home
						</Link>
					</li>
					<li className="flex justify-center items-center h-full w-full border-b-2 border-dotted hover:bg-gray-600 transition duration-300 p-0 m-0">
						<Link
							href="/aboutme"
							className="h-full w-full p-4 text-xl text-center"
						>
							About Me
						</Link>
					</li>
					<li className="flex justify-center items-center h-full w-full border-b-2 border-dotted hover:bg-gray-600 transition duration-300 p-0 m-0">
						<Link
							href="/timeline"
							className="h-full w-full p-4 text-xl text-center"
						>
							Timeline
						</Link>
					</li>
					<li className="flex justify-center items-center h-full w-full border-b-2 border-dotted hover:bg-gray-600 transition duration-300 p-0 m-0">
						<Link
							href="/blog"
							className="h-full w-full p-4 text-xl text-center"
						>
							Blog
						</Link>
					</li>
					<li className="flex justify-center items-center h-full w-full hover:bg-gray-600 transition duration-300 p-0 m-0">
						<Link
							href="/project"
							className="h-full w-full p-4 text-xl text-center"
						>
							Project
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
