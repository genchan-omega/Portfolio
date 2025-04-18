// /src/page.tsx

import type { Metadata } from "next";

// metaデータ
export const metadata: Metadata = {
  title: "genchan_omega's Site",
  description: "Access to each contents about me.",
};

import Profile from "@/components/index/Profile/Profile";
import Contents from "@/components/index/Contents/Contents";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
			<div className="flex flex-col gap-5 items-center justify-center h-screen w-full md:w-200 flex-1">
				<Profile />
				<div className="grid grid-cols-1 md:grid-cols-2 md:w-135 gap-4">
					<Contents title="Timeline" href="/timeline" />
					<Contents title="Blog" href="/blog" />
					<Contents title="Project" href="/project" />
          <Contents title="Contact" href="/contact" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
 