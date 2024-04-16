"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardCocktail from "@/components/card/card";
import type { FormattedDrink } from "#/types";
import { searchCocktailConstructor } from "@/actions/searchCocktail";

export default async function SearchResults() {
	const { id } = useParams();
	const idString = Array.isArray(id) ? id[0] : id;
	const [cocktails, setCocktails] = useState<FormattedDrink[]>([]);
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (idString) {
			const fetchCocktails = async () => {
				try {
					const response = await searchCocktailConstructor(idString);
					setCocktails(response || []);
				} catch (error) {
					console.error("Error fetching cocktails:", error);
				}
			};
			fetchCocktails();
		}
	}, []);

	if (!idString) {
		return (
			<div className="flex flex-col flex-wrap min-h-full w-full justify-center items-center text-center border border-black mt-5">
				<h2 className="text-4xl font-bold">Sorry, no cocktail found here.</h2>
				<p>Please, search another one on the search bar.</p>
			</div>
		);
	}
	return (
		<>
			{/* // Content component when data is available */}
			<div className={className}>
				{cocktails ? (
					<section className={className}>
						{cocktails.map((cocktail) => (
							// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
							<CardCocktail {...cocktail} />
						))}
					</section>
				) : null}
			</div>
		</>
	);
}
