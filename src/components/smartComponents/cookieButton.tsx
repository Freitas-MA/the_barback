"use client";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

interface CookieButtonProps {
	name: string;
	value: string;
}
export const CookieButton: React.FC<CookieButtonProps> = ({ value }) => {
	const [favoriteCookies, setFavoriteCookies] = useState<string[]>([]);
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const checkForCookiesAsArray = async (cookieName: string) => {
		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith(cookieName))
			?.split("=")[1];
		const cookieRes = cookie ? JSON.parse(cookie) : [];
		return cookieRes;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <This useEffect is to get on the first render only>
	useEffect(() => {
		const getCookies = async () => {
			if (typeof window !== "undefined") {
				checkForCookiesAsArray("Favorite")
					.then((favorites: string[]) => {
						setFavoriteCookies(favorites);
						if (favorites.includes(value)) {
							setIsFavorite(true);
						}
					})
					.catch((error) => {
						console.error(error);
					});
			}
		};
		getCookies();
	}, []);
	console.log(favoriteCookies);

	const cookieToggle = () => {
		setIsFavorite(!isFavorite);

		setFavoriteCookies((prevFavorites) => {
			let newFavorites: string[] = [];
			if (prevFavorites.includes(value)) {
				newFavorites = prevFavorites.filter((item) => item !== value);
			} else {
				newFavorites = [...prevFavorites, value];
			}

			const date = new Date();
			date.setDate(date.getDate() + 7);
			document.cookie = `Favorite=${JSON.stringify(
				newFavorites,
			)}; expires=${date.toUTCString()}`;

			return newFavorites;
		});
	};

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
