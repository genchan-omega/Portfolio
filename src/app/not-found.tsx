// /src/not-found.tsx

// import Link from "next/link";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FadeIn from "@/components/timeline/Fadein/Fadein";

export default function Blog() {
	return (
		<div className="flex flex-col min-h-screen w-full max-w-screen mx-auto">
			<Header />
			<FadeIn>
				<p>404</p>
			</FadeIn>
			<Footer />
		</div>
	);
}
