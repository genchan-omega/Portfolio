// /src/timeline/page.tsx

"use client";

import Image from "next/image";
// import Link from "next/link";

import { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Subtitle from "@/components/Subtitle/Subtitle";

export default function Timeline() {
  const [items, setItems] = useState<{ top: number; left: number }[]>([]);

  const generateRandomPositions = (count: number) => {
    const baseTop = 200;
    const baseLeft = 280;
    const verticalSpacing = 180;
    const horizontalRange = 50;
    const verticalRange = 30;

    return new Array(count).fill(0).map((_, index) => ({
      top: baseTop + index * verticalSpacing + Math.random() * verticalRange,
      left: baseLeft + (index % 2 === 0 ? -1 : 1) * Math.random() * horizontalRange,
    }));
  };

  useEffect(() => {
    setItems(generateRandomPositions(4));
  }, []);

  return (
    <div>
      <div className="w-full max-w-screen-md mx-auto relative min-h-screen">
        <Header />
        <Subtitle name="Timeline" />
        {items.map((pos, index) => (
          <div
            key={index}
            className="absolute w-64 h-32 bg-blue-500 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-4"
            style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
          >
            <Image
              src="/dummy.png"
              width={200}
              height={300}
              alt={`Item ${index + 1}`}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="text-lg font-bold">Heading {index + 1}</h3>
            <p className="text-sm">Detail about this item.</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}