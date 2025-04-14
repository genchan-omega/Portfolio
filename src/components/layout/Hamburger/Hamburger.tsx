// /src/components/Hamburger/Hamburger.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hamburger() {
	// isOpenの初期値がfalse, setIsOpenはisOpenをいじる関数
	const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 初期状態ではスクロールを許可
    document.body.style.overflow = "auto";
    // クリーンアップ関数(2回目以降に呼び出される直前に使用)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

	return (
    <div>
      {/* Button */}
			<button
				className="relative min-h-10 min-w-10 flex flex-col justify-around items-center p-2 rounded-md hover:bg-gray-600 transition duration-300 z-50"
				onClick={toggleMenu}
			>
				<span
					className={`w-6 h-0.5 bg-white transition z-50 ${
						isOpen ? "rotate-45 translate-y-2" : ""
					}`}
				></span>
				<span
					className={`w-6 h-0.5 bg-white transition z-50 ${
						isOpen ? "opacity-0" : ""
					}`}
				></span>
				<span
					className={`w-6 h-0.5 bg-white transition z-50 ${
						isOpen ? "-rotate-45 -translate-y-2" : ""
					}`}
				></span>
			</button>
      {/* 表示リスト */}
			<nav
				className={`absolute top-full right-0 w-48 p-0 m-0 bg-gray-800 rounded-md transition duration-300 z-50 ${
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
      {/* オーバーレイ */}
      <div className={`fixed top-0 left-0 w-full h-full backdrop-blur-xs ${
        isOpen ? "z-10" : "hidden"
      }`} onClick={toggleMenu}
      ></div>
    </div>
	);
}
