"use client";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { checkForCookiesAsArray } from "@/actions/checkForCookiesArray";
import { v4 as uuidv4 } from "uuid";
import { usePathname, useRouter } from "next/navigation";

interface CookieButtonProps {
	name: string;
	value: string;
	favorit: boolean;
}

export default function CookieButton({ value, favorit }: CookieButtonProps) {
	const [isFavorite, setIsFavorite] = useState<boolean>(favorit);

	const pathName = usePathname();
	const router = useRouter();
	const handleClickPush = () => {
		const checkPage = pathName === "/favorites";
		if (checkPage) {
			router.refresh();
		}
	};

	async function cookieToggle() {
		try {
			const currentFavorites = await checkForCookiesAsArray("Favorite");
			let newFavoriteCookies = [];

			if (isFavorite) {
				newFavoriteCookies = currentFavorites.filter(
					(cookie: string) => cookie !== value,
				);
			} else {
				newFavoriteCookies = [...currentFavorites, value];
			}

			if (
				JSON.stringify(newFavoriteCookies) !== JSON.stringify(currentFavorites)
			) {
				document.cookie = `Favorite=${JSON.stringify(newFavoriteCookies)}`;
				setIsFavorite(!isFavorite);
			}
		} catch (error) {
			console.error("Error toggling favorite cookie:", error);
		} finally {
			handleClickPush();
		}
	}

	const className =
		"absolute right-6 top-6 w-auto h-auto p-1 rounded-md bg bg-neutral-100 hover:scale-125 z-30";

	const id = uuidv4();

	if (isFavorite) {
		return (
			<button
				key={id}
				type="button"
				className={`${className} text-amber-400`}
				onClick={cookieToggle}
			>
				<FaStar />
			</button>
		);
	}

	return (
		<button key={id} type="button" className={className} onClick={cookieToggle}>
			<FaRegStar />
		</button>
	);
}
