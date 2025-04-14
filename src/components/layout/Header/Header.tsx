// /src/components/Header/Header.tsx

import Hamburger from "@/components/layout/Hamburger/Hamburger";

export default function Header() {
	return (
		<header className="text-white p-4 fixed top-0 left-0 w-full flex justify-between items-center z-1">
      {/* Siteのタイトル */}
      <h1 className="text-xl font-bold"></h1>
			<Hamburger />
		</header>
	);
}
