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

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export default async function UserAppSidebar({
	className: classNameProp,
}: SidebarProps) {
	const header = headers();
	const pathName = header.get("pathname");
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

	return (
		<nav className={cn("pb-12 max-w-[300px] minHeightSidebar", classNameProp)}>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						Discover
					</h2>
					<div className="space-y-1">
						<Link href="/">
							<Button variant="secondary" className="w-full justify-start">
								<FaHome className="mr-2" />
								Public Collection
							</Button>
						</Link>
						<Link href="/search">
							<Button
								variant="ghost"
								disabled={false}
								className="w-full justify-start"
							>
								<IoMdSearch className="mr-2" />
								Search Collection
							</Button>
						</Link>
						<Link href={"/favorits"}>
							<Button
								variant="ghost"
								disabled={true}
								className="w-full justify-start"
							>
								<FaStar className="mr-2" />
								Favorits
							</Button>
						</Link>
						<Link href={"/private"} aria-disabled="true">
							<Button
								disabled={true}
								variant="ghost"
								className="w-full justify-start"
							>
								<BsIncognito className="mr-2" />
								Private
							</Button>
						</Link>
					</div>
				</div>
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						Discover the world
					</h2>
					<div className="space-y-1">
						<Button
							variant="ghost"
							disabled={true}
							className="w-full justify-start"
						>
							<FaRobot className="mr-2" />
							<h3>AI Cocktails</h3>
						</Button>
						<Button
							variant="ghost"
							disabled={true}
							className="w-full justify-start"
						>
							<FaRegNewspaper className="mr-2" />
							News
						</Button>
						<Button
							variant="ghost"
							disabled={true}
							className="w-full justify-start"
						>
							<IoBusiness className="mr-2" />
							Business
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
