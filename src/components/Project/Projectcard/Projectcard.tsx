// /src/components/Projectcard/Projectcard.tsx

"use client";

import Image from "next/image";

import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("html");

interface Project {
  date: string;
  title: string;
  description: string;
  img: string;
  tag: string;
  link: {
    [key: string]: string;
  }
  content: string;
}

export default function Projectcard({ project }: { project:  Project }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center w-full">
			{/* カード表示部分 */}
      <button
				className="relative border-2 transition duration-300 hover:scale-105 w-full sm:w-md md:w-full hover:cursor-pointer"
				onClick={() => setIsOpen(true)}
			>
				<div className="absolute top-2 right-2 text-xs px-2 py-1 rounded-md">
					{project.tag}
				</div>
				<figure className="h-40 md:h-90 w-full flex flex-row md:flex-col">
					<div className="relative h-40 w-40 md:h-48 md:w-full overflow-hidden border-r-2 border-dotted md:border-r-0 md:border-b-2">
						<Image
							src={project.img}
							fill
							alt="Picture of the article"
							className="object-cover -z-1"
						/>
					</div>
					<div className="flex flex-col justify-center md:justify-start p-2 flex-1">
						<h2 className="text-lg md:text-2xl">
              {project.title}
            </h2>
						<figcaption className="text-sm md:text-xl">
							{project.description}
						</figcaption>
					</div>
				</figure>
			</button>
      
      {/* モーダル表示部分 */}
			<Modal
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-gray-700 p-6 rounded-lg w-[90%] max-w-xl max-h-[90vh] overflow-y-auto"
        overlayClassName="fixed inset-0 z-50 backdrop-blur-xs"
        htmlOpenClassName="overflow-hidden"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-4xl font-bold hover:text-rose-300 hover:cursor-pointer transition duration-300"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="relative h-60 w-full mt-7 overflow-hidden">
          <Image
            src={project.img}
            fill
            alt="Picture of the article"
            className="object-cover"
          />
        </div>
        <div className="text-right">
          {project.date}
        </div>
        <h2 className="text-center text-3xl pb-3">
          {project.title}
        </h2>
        <div className="text-xl whitespace-pre-line">
          {project.content}
        </div>
        <div className="pt-3">
          <h3 className="text-xl font-bold mb-2">
            [関連リンク]
          </h3>
          <ul className="flex gap-3">
            {Object.entries(project.link).map(([label, url]) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 border-1 border-cyan-100 rounded shadow-md  hover:bg-gray-700 transition-colors duration-500"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
			</Modal>
		</div>
	);
}
