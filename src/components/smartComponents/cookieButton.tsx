"use client";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { use, useState } from "react";

interface CookieButtonProps {
	name: string;
	value: string;
}
export const CookieButton: React.FC<CookieButtonProps> = ({ value }) => {
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const checkForCookiesAsArray = async (cookieName: string) => {
		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith(cookieName))
			?.split("=")[1];
		const cookieRes = cookie ? JSON.parse(cookie) : [];
		return cookieRes;
	};

	const favoriteCookies = use(checkForCookiesAsArray("Favorite"));

	console.log(favoriteCookies);

	async function cookieToggle() {
		const currentFavorites = await checkForCookiesAsArray("Favorite");
		let newFavoriteCookies = [];
	
		if (isFavorite) {
		  newFavoriteCookies = currentFavorites.filter((cookie: string) => cookie !== value);
		} else {
		  newFavoriteCookies = [...currentFavorites, value];
		}
	
		document.cookie = `Favorite=${JSON.stringify(newFavoriteCookies)}`;
		setIsFavorite(!isFavorite);
	  }

	const className =
		"absolute right-6 top-6 w-auto h-auto p-1 rounded-md bg bg-neutral-300 hover:scale-125 z-30";

	if (isFavorite) {
		return (
			<button type="button" className={className} onClick={cookieToggle}>
				<FaStar />
			</button>
		);
	}

	return (
		<button type="button" className={className} onClick={cookieToggle}>
			<FaRegStar />
		</button>
	);
};
