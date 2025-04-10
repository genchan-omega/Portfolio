// /src/page.tsx

// import Image from "next/image";

// import Icon from '@/components/Icon/Icon';
import Profile from "@/components/index/Profile/Profile";
import Contents from "@/components/index/Contents/Contents";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto items-center justify-center">
			<div className="flex flex-col gap-5 items-center justify-center h-screen w-full md:w-200 flex-1">
				<Profile />
				<div className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
					<Contents title="Timeline" href="/timeline" />
					<Contents title="Blog" href="/blog" />
					<Contents title="Project" href="/project" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
