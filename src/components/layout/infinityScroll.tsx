"use client";
import { useState, useCallback, useEffect } from "react";
import CardCocktail from "../card/card";
import { infinityScrollConstructor } from "@/actions/infinityCocktails";
import type { FormattedDrink } from "#/types";
import { useInfiniteScroll } from "react-use-infinite-scroll-hook";
import { CardLoader } from "../card/cardLoader";

function InfinityScroll() {
	const className =
		"flex flex-row flex-shrink-0 flex-grow-0 flex-wrap w-full justify-center items-start mt-5";

	const [cocktailsInfinity, setCocktailsInfinity] = useState<FormattedDrink[]>(() => {
		// Try to get the cached data from sessionStorage
		const cachedData = sessionStorage.getItem('cocktailsInfinity');
		return cachedData ? JSON.parse(cachedData) : [];
	});
	const [loading, setLoading] = useState(false);

	const cacheData = useCallback((data: FormattedDrink[]) => {
		sessionStorage.setItem('cocktailsInfinity', JSON.stringify(data));
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const getCocktails = useCallback(async () => {
		const localUrl = process.env.NEXT_PUBLIC_BASE_URL;
		setLoading(true);
		const newCocktails = await infinityScrollConstructor(localUrl);
		setLoading(false);

		setCocktailsInfinity((prevCocktails) => {
			const updatedCocktails = [...prevCocktails, ...newCocktails];
			cacheData(updatedCocktails);
			return updatedCocktails;
		});
	}, [cacheData, cocktailsInfinity]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <This is the start-up cocktail>
	useEffect(() => {
		if (cocktailsInfinity.length === 0) {
			getCocktails();
		}
	}, []);

	const handleScroll = useCallback(async () => {
		console.log("handleScroll");
		await getCocktails();
	}, [getCocktails]);

	const scrollElementRef = useInfiniteScroll<HTMLSpanElement>(getCocktails);

	return (
		<div className="w-full h-auto">
			{cocktailsInfinity.length > 0 ? (
				<section className={className}>
					{cocktailsInfinity.map((cocktail) => (
						<CardCocktail key={cocktail.idDrink} cocktail={cocktail} />
					))}
					{loading ? <CardLoader /> : null}
					<span
						ref={scrollElementRef}
						style={{ visibility: "hidden", width: 0, height: 0 }}
					/>
				</section>
			) : null}
		</div>
	);
}

export default InfinityScroll;
