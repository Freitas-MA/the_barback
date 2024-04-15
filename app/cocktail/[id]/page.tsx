"use client"; // Add this line at the beginning

import type { FormattedDrink } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCocktailRecipe } from "@/components/handlers/functions";

export default function CocktailDetails() {
	const { id } = useParams();
	const idString = Array.isArray(id) ? id[0] : id;
	const [cocktail, setCocktail] = useState<FormattedDrink | null>(null); // Handle potential missing data

	useEffect(() => {
		const fetchCocktail = async () => {
			try {
				const response = await fetchCocktailRecipe(idString);
				setCocktail(response.data);
			} catch (error) {
				console.error("Error fetching cocktail recipe:", error);
				// Handle the error gracefully, e.g., display an error message
			}
		};

		fetchCocktail();
	}, [idString]);

	if (!cocktail) {
		return null; // Display a loading indicator while fetching data
	}

	const {
		idDrink,
		strDrink,
		strCategory,
		strAlcoholic,
		strDrinkThumb,
		recipe,
		instructions,
	} = cocktail;

	const recipeIngredients = Object.entries(recipe).map(
		([ingredient, measure]) => (
			<li key={ingredient} className="mb-2">
				{ingredient}: {measure}
			</li>
		),
	);

	return (
		<div className="cocktail-details mt-5">
			<div className="flex flex-row gap-8 m-4">
				<img
					src={strDrinkThumb}
					alt={strDrink}
					className="w-80 rounded-md shadow-lg"
				/>
				<div className="flex flex-col gap-4">
					<h2 className="text-4xl font-bold">{strDrink}</h2>
					<p>
						<b>Category:</b> {strCategory}
					</p>
					<p>
						<b>Alcoholic:</b> {strAlcoholic}
					</p>
					<div className="mt-4 gap-4">
						<h3 className="text-2xl font-bold">Ingredients:</h3>
						<ul className="list-disc pl-4">{recipeIngredients}</ul>
					</div>
				</div>
			</div>
			<div className="px-8">
				<h3 className="text-2xl font-bold">Instructions:</h3>
				<p>{instructions}</p>
			</div>
		</div>
	);
}
