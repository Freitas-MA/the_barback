"use client";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	pathHref?: string;
	children?: ReactNode;
	disabled?: boolean;
	revalidate?: boolean;
}

export default function ClientButtonNavegation({
	title,
	pathHref,
	children,
	disabled,
}: SidebarProps) {
	const pathName = usePathname();

	console.log(pathName, pathHref);
	const checkPage = pathHref === '/' ? pathName === pathHref : pathName.includes(pathHref as string);

	const router = useRouter();

	const handleClickPush = () => {
		router.push(pathHref as string);
		if(checkPage) {
			router.refresh();
		}
	};
	return (
		<Button
			variant={checkPage ? "outline" : "ghost"}
			disabled={disabled as boolean}
			className="flex flex-row justify-center md:justify-normal w-full hover:bg-slate-200"
			onClick={handleClickPush}
		>
			{children}
			<p className="hidden md:block">{title}</p>
		</Button>
	);
}
