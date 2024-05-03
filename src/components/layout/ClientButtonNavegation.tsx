"use client";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	pathHref?: string;
	children?: ReactNode;
	disabled?: boolean;
}

export default async function ClientButtonNavegation({
	title,
	pathHref,
	children,
	disabled,
}: SidebarProps) {
	const pathName = usePathname();
	// biome-ignore lint/suspicious/noDoubleEquals: <explanation>
	const checkPage = pathName == pathHref;

	const router = useRouter();

	const handleClickPush = () => {
		router.push(pathHref as string);
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
