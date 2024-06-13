"use client";
import { useEffect, useState, useCallback } from "react";
import CardCocktail from "../card/card";
import { infinityScrollConstructor } from "@/actions/infinityCocktails";

// Types
import type { FormattedDrink } from "#/types";

function InfinityScroll() {
	// Styles
	const className =
		"flex flex-row flex-wrap w-full justify-center items-start mt-5";

	// State
	const [cocktailsInfinity, setCocktailsInfinity] = useState<FormattedDrink[]>(
		[],
	);

	const getCocktails = useCallback(async () => {
		const localUrl = process.env.NEXT_PUBLIC_BASE_URL;
		const newCocktails = await infinityScrollConstructor(
			localUrl,
			cocktailsInfinity,
		);
		setCocktailsInfinity((prevCocktails) => [
			...prevCocktails,
			...newCocktails,
		]);
	}, []);

	// Fetch initial cocktails on component mount
	useEffect(() => {
		getCocktails();
	}, [getCocktails]);

	// Handle scroll event
	const handleScroll = useCallback(async () => {
		console.log("handleScroll");
		await getCocktails();
	}, [getCocktails]);

	return (
		<div>
			{cocktailsInfinity.length > 0 ? (
				<section className={className}>
					{cocktailsInfinity.map((cocktail) => (
						<CardCocktail key={cocktail.idDrink} {...cocktail} />
					))}
					<button
						type="button"
						onClick={handleScroll}
						className="border border-slate-900 p-1"
					>
						Load more cocktails
					</button>
				</section>
			) : null}
		</div>
	);
}

export default InfinityScroll;
