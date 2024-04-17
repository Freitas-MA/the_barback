import dynamic from "next/dynamic";
import favicon from "#/public/favicon-32x32.png";
import Link from "next/link";
export default function UserAppHeader() {
	const SearchBar = dynamic(() => import("@/components/layout/seachbar"), {
		ssr: false,
	});


	return (
		<header>
			<nav className="flex justify-between fixed bg-slate-100 top-0 items-center w-screen h-12 px-4 py-2 shadow-md z-50">
				<Link href={"/"}>
					<span className="font-extrabold flex flex-row items-center justify-center">
						<img src={favicon.src} alt="" className="rounded-[10px] px-2" />
						<span className="font-extralight">the</span>Barback
					</span>
				</Link>
				<SearchBar />
			</nav>
		</header>
	);
}