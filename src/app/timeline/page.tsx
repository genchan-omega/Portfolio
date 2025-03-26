// /src/timeline/page.tsx

"use client";

// import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Subtitle from "@/components/Subtitle/Subtitle";

export default function Timeline() {
	const [items, setItems] = useState<{ top: number; left: number }[]>([]);

	const generateRandomPositions = (count: number) => {
		return new Array(count).fill(0).map(() => ({
			top: Math.floor(Math.random() * window.innerHeight * 0.8),
			left: Math.floor(Math.random() * (window.innerWidth - 200)),
		}));
	};

	useEffect(() => {
		setItems(generateRandomPositions(5));
	}, []);

	return (
    <div>
      <div className="w-full max-w-screen-md mx-auto relative min-h-screen">
        <Header />
        <Subtitle name="Timeline" />
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-300">
            <Link
              href="/"
              className=""
            >
              Hello
            </Link>
          </div>
          <div className="bg-red-300">
            <p>
              Good night
            </p>
          </div>
        </div>
        {items.map((pos, index) => (
          <div
            key={index}
            className="absolute w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
            style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
          >
            
          </div>
        ))}
        </div>
      <Footer />
    </div>

	);
}
