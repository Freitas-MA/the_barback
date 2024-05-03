"use client";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import { checkForCookiesAsArray } from "@/actions/checkForCookiesArray";
import { v4 as uuidv4 } from "uuid";

interface CookieButtonProps {
	name: string;
	value: string;
}
export const CookieButton: React.FC<CookieButtonProps> = ({ value }) => {
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const firstRender = async () => {
		if (favoriteCookies.includes(value)) {
			setIsFavorite(true);
		}
	};

	const favoriteCookies = use(checkForCookiesAsArray("Favorite"));
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		firstRender();
	}, []);

	async function cookieToggle() {
		const currentFavorites = await checkForCookiesAsArray("Favorite");
		let newFavoriteCookies = [];
	  
		if (isFavorite) {
		  newFavoriteCookies = currentFavorites.filter(
			(cookie: string) => cookie !== value,
		  );
		} else {
		  newFavoriteCookies = [...currentFavorites, value];
		}
	  
		if (JSON.stringify(newFavoriteCookies) !== JSON.stringify(currentFavorites)) {
		  document.cookie = `Favorite=${JSON.stringify(newFavoriteCookies)}`;
		  setIsFavorite(!isFavorite);
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
		<button
			key={id}
			type="button"
			className={className}
			onClick={cookieToggle}
		>
			<FaRegStar />
		</button>
	);
};
