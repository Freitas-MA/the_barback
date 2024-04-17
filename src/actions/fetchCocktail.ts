import { formatData } from "./helpers";

export const fetchCocktailRecipe = async (id: string) => {
	const response = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
		{
			cache: "no-cache",
		},
	);
	const data = await response.json();
	const formattedData = await formatData(data);
	return formattedData;
};
