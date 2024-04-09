"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardCocktail from "@/components/common/card";
import type { FormattedDrink } from "@/types";
import { searchCocktailConstructor } from "@/components/handlers/functions";

export default async function SearchResults() {
	const { id } = useParams();
	const [cocktails, setCocktails] = useState<FormattedDrink[]>([]);
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	useEffect(() => {
		const res = searchCocktailConstructor(id);
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
