import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserAppHeader from "@/components/layout/header";
import UserAppSidebar from "@/components/layout/sidebar";
import AppSignature from "@/components/layout/footer";
import CookiesNotice from "@/components/layout/cookies";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
// Analytics and SpeedInsights
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "theBarback",
	description: "Using AI to make your life easy!",
	icons: {
		icon: ["/favicon/favicon.ico"],
		apple: ["/favicon/apple-touch-icon.png"],
		shortcut: ["/favicon/apple-touch-icon.png"],
	},
	manifest: "/manifest.json",
};

const Provider = dynamic(() => import("@/components/provider"), {
	ssr: false,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const acceptedCookiesClass = "hidden";
	const notAcceptedCookiesClass =
		"block flex flex-col items-center justify-center h-screen w-screen border border-black bg-stone-200 bg-opacity-90 z-50 fixed top-0 left-0 px-4 py-8 text-center";

	const isCookieAccepted = cookies().has("cookiesAccepted");

	return (
		<html lang="en">
			<body
				className={`${
					inter.className
				} relative min-h-screen overflow-x-hidden overflow-y-hidden`}
			>
				<Provider>
					<UserAppHeader />
					<div className="w-screen h-[93vh] overflow-hidden flex flex-row minHeightSidebar">
						<UserAppSidebar />
						<div className="flex flex-col w-full h-auto overflow-auto mt-12">
							{children}
						</div>
						<AppSignature />
					</div>
					<CookiesNotice
						className={`${
							isCookieAccepted ? acceptedCookiesClass : notAcceptedCookiesClass
						}`}
					/>
				</Provider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
