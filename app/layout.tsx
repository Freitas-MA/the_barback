import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserAppHeader from "@/components/layout-components/user-app-header";
import UserAppSidebar from "@/components/layout-components/user-app-sidebar";
import { Analytics } from "@vercel/analytics/react";
import AppSignature from "@/components/layout-components/app.signature";
import CookiesNotice from "@/components/auth/cookies";
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
const SearchBar = dynamic(() => import("@/components/searchBar/seachBar"), {
	ssr: false,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative min-h-screen`}>
				<Provider>
					<UserAppHeader />
					<div className="flex pt-10 pr-4">
						<UserAppSidebar className="hidden md:block z-10 border-solid border-black" />
						{children}
					</div>
					<CookiesNotice className="flex flex-col fixed bottom-8 left-[50%] translate-x-[-50%] w-[350px] p-4 rounded-md bg-yellow-500 text-white text-center" />
					<AppSignature />
				</Provider>
				<Analytics />
			</body>
		</html>
	);
}
