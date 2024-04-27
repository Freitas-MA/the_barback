"use client";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
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
	return (
		<Button
			variant={checkPage ? "outline" : "ghost"}
			disabled={disabled as boolean}
			className="max-w-full "
		>
			<Link href={pathHref as string} className="justify-center items-center flex flex-row">
				{children}
				<p className="hidden md:block">{title}</p>
			</Link>
		</Button>
	);
}
