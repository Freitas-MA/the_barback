"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardCocktail from "@/components/common/card";
import type { FormattedDrink } from "@/types";
import { searchCocktailConstructor } from "@/components/handlers/functions";

export default async function SearchResults() {
	const { id } = useParams();
	const idString = Array.isArray(id) ? id[0] : id;
	const [cocktails, setCocktails] = useState<FormattedDrink[]>([]);
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const res = searchCocktailConstructor(idString);
		res.then((data) => {
			setCocktails(data);
		});
	}, []);

	return (
		<>
			{/* // Content component when data is available */}
			<div className={className}>
				{cocktails ? (
					<section className={className}>
						{cocktails.map((cocktail) => (
							<CardCocktail {...cocktail} />
						))}
					</section>
				) : null}
			</div>
		</>
	);
}
