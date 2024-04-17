import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserAppHeader from "@/components/layout/header";
import UserAppSidebar from "@/components/layout/sidebar";
import { Analytics } from "@vercel/analytics/react";
import AppSignature from "@/components/layout/footer";
import CookiesNotice from "@/components/layout/cookies";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "theBarback",
	description: "Using AI to make your life easy!",
	icons: {
		icon: ["/favicon.ico"],
		apple: ["/apple-touch-icon.png"],
		shortcut: ["/apple-touch-icon.png"],
		// android: ["/android-chrome-192x192.png"],
	},
	manifest: "/site.webmanifest",
};

const Provider = dynamic(() => import("@/components/provider"), {
	ssr: false,
});
const SearchBar = dynamic(() => import("@/components/layout/seachbar"), {
	ssr: false,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} relative min-h-screen overflow-x-hidden`}
			>
				<Provider>
					<UserAppHeader />
					<div className=" w-screen flex pt-12 pr-4">
						<UserAppSidebar className="hidden md:block z-10" />
						{children}
					</div>
					<CookiesNotice className="absolute bottom-[3rem] inset-x-0 min-h-32 p-4 bg-zinc-300 text-black text-center bg-opacity-50 backdrop-blur-sm backdrop-filter z-50" />
					<AppSignature />
				</Provider>
				<Analytics />
			</body>
		</html>
	);
}
