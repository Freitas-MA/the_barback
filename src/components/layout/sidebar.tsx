import { cn } from "#/lib/utils";
import { Button } from "@/components/ui/button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
// Import icons React Icons
import { FaHome } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BsIncognito } from "react-icons/bs";
import { FaRobot } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";
import { headers } from "next/headers";
import dynamic from "next/dynamic";
import ClientPageChecker from "@/components/layout/clientPageChecker";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export default async function UserAppSidebar({
	className: classNameProp,
}: SidebarProps) {
	const header = headers().get("pathname");
	const pathName = header;
	console.log("path", pathName);

	let loggedIn = false;
	try {
		const supabase = createServerComponentClient({ cookies });
		const {
			data: { session },
		} = await supabase.auth.getSession();

		if (session) {
			loggedIn = true;
		}
	} catch (error) {
		console.log("Home", error);
	}

	const ClientButtonNavegation = dynamic(
		() => import("@/components/layout/clientPageChecker"),
		{
			ssr: false,
		},
	);

	return (
		<nav className="md:flex md:max-w-[300px] md:min-h-[89vh] md:justify-start md:items-start md:relative md:bg-slate-100 fixed bottom-0 left-0 z-40 shadow-lg flex-row items-center justify-between w-screen bg-slate-300 bg-opacity-90">
			<div className="flex flex-row items-center justify-center space-y-4 md:py-4 md:flex-col md:items-start md:justify-start md:w-full">
				<div className="md:px-3 md:py-2">
					<h2 className="hidden md:block mb-2 px-4 text-lg font-semibold tracking-tight">
						Discover
					</h2>
					<div className="md:flex-col md:space-y-1 md:w-full md:text-center md:items-start md:px-0 flex flex-row items-center justify-between w-screen px-10">
						<ClientButtonNavegation pathHref="/" title="Home" disabled={false}>
							<FaHome className="md:mr-2" />
						</ClientButtonNavegation>
						<ClientButtonNavegation
							pathHref="/search"
							title="Search's"
							disabled={false}
						>
							<IoMdSearch className="md:mr-2" />{" "}
						</ClientButtonNavegation>
						<ClientButtonNavegation
							pathHref="/favorits"
							title="Favorits"
							disabled={true}
						>
							<FaStar className="md:mr-2" />
						</ClientButtonNavegation>
						<ClientButtonNavegation
							pathHref="/private"
							title="Private"
							disabled={true}
						>
							<BsIncognito className="md:mr-2" />
						</ClientButtonNavegation>
					</div>
				</div>
				<div className="hidden md:block px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						<p className="hidden md:block">Discover the world</p>
					</h2>
					<div className="hidden md:flex-col md:space-y-1 md:w-full md:text-center md:items-start md:flex md:px-0 flex-row items-center justify-between w-screen px-10">
						<ClientButtonNavegation
							pathHref="/barback"
							title="The Barback"
							disabled={true}
						>
							<FaRegNewspaper className="md:mr-2" />
						</ClientButtonNavegation>
						<ClientButtonNavegation
							pathHref="/private"
							title="News"
							disabled={true}
						>
							<IoBusiness className="md:mr-2" />
						</ClientButtonNavegation>
						<ClientButtonNavegation
							pathHref="/business"
							title="Business"
							disabled={true}
						>
							<IoBusiness className="md:mr-2" />
						</ClientButtonNavegation>
					</div>
				</div>
			</div>
		</nav>
	);
}
