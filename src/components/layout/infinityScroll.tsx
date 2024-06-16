"use client";
import { useEffect, useState, useCallback } from "react";
import CardCocktail from "../card/card";
import { infinityScrollConstructor } from "@/actions/infinityCocktails";

import type { FormattedDrink } from "#/types";

function InfinityScroll() {
	const className = "flex flex-row flex-wrap w-full justify-center items-start mt-5";

	const [cocktailsInfinity, setCocktailsInfinity] = useState<FormattedDrink[]>([]);
	const [loading, setLoading] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const getCocktails = useCallback(async () => {
		const localUrl = process.env.NEXT_PUBLIC_BASE_URL;
		setLoading(true);
		const newCocktails = await infinityScrollConstructor(localUrl);
		setLoading(false);

		for (const cocktail of newCocktails) {
			setCocktailsInfinity(prevCocktails => [...prevCocktails, cocktail]);
			await new Promise(resolve => setTimeout(resolve, 100));
		}
	}, [cocktailsInfinity]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getCocktails();
	}, []);
// TODO Fix the infinite scroll
useEffect(() => {
    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        await getCocktails();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [getCocktails]);

	const handleScroll = useCallback(async () => {
		console.log("handleScroll");
		await getCocktails();
	}, [getCocktails]);

	return (
		<div>
			{cocktailsInfinity.length > 0 ? (
				<section className={className}>
					{cocktailsInfinity.map((cocktail) => (
						<CardCocktail key={cocktail.idDrink} cocktail={cocktail} />
					))}
					<button
						type="button"
						onClick={handleScroll}
						className="border border-slate-900 p-1"
						disabled={loading}
					>
						{loading ? "Loading..." : "Load more cocktails"}
					</button>
				</section>
			) : null}
		</div>
	);
}

export default InfinityScroll;
