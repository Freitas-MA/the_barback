import dynamic from "next/dynamic";
import { UserNav } from "../common/user-nav";
import favicon from "@/public/favicon-32x32.png";
export default function UserAppHeader() {
  const SearchBar = dynamic(() => import("@/components/searchBar/seachBar"), {
		ssr: false,
	});
  return (
    <header>
      <nav className="flex justify-between fixed bg-slate-100 top-0 items-center w-screen px-4 py-2 shadow-md z-50">
        <span className="font-extrabold flex flex-row items-center justify-center">
            <img src={favicon.src} alt="" className="rounded-[10px] px-2" />
            <span className="font-extralight">the</span>Barback
        </span>
        <SearchBar />
        <UserNav />
      </nav>
    </header>
  );
}
