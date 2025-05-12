// /src/Project/page.tsx

import type { Metadata } from "next";

import fs from "fs";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";
// import Working from "@/components/Working/Working";
import Projectcard from "@/components/Project/Projectcard/Projectcard";

// metaデータ
export const metadata: Metadata = {
  title: "Project",
  description: "Check the productions I have created.",
};

interface Projects {
  id: string;
  title: string;
  date: string;
  description: string;
  img: string;
  tag: string;
  link: {
    [key: string]: string;
  }
  content: string;
}

export default function Project() {
	const filePath = "src/libs/Data/Projects.json";
	const file = fs.readFileSync(filePath, "utf-8");
	const projects: Projects[] = JSON.parse(file);

	return (
		<div className="flex flex-col min-h-screen">
      <Header />
			<div className="w-full max-w-screen-md mx-auto flex-1">
        <Subtitle name="Project" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pb-5">
          {projects.map((project) => (
            <Projectcard key={project.date} project={project} />
          ))}
        </div>
			</div>
			<Footer />
		</div>
	);
}
