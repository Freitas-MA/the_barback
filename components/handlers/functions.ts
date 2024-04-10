import type { Drink, FormattedDrink } from "@/types";

async function formatData(data: { drinks: Drink[] }): Promise<{
	data: FormattedDrink;
}> {
	const drink = data.drinks[0];
	const recipe: { [ingredient: string]: string } = {};

	for (let i = 1; i <= 15; i++) {
		const ingredientKey = `strIngredient${i}`;
		const measureKey = `strMeasure${i}`;
		// @ts-expect-error
		const ingredient = drink[ingredientKey];
		// @ts-expect-error
		const measure = drink[measureKey];

		if (ingredient && measure) {
			recipe[ingredient] = measure;
		}
	}

 const formattedDrink: FormattedDrink = {
		idDrink: drink.idDrink,
		strDrink: drink.strDrink,
		strCategory: drink.strCategory,
		strAlcoholic: drink.strAlcoholic,
		strDrinkThumb: drink.strDrinkThumb,
		recipe: recipe,
		instructions: drink.strInstructions,
	};

	return { data: formattedDrink };
}

export const fetchCocktails = async (windowLocation: string) => {
	const response = await fetch(`${windowLocation}/api/cocktaildb`, {
		// Set cache: 'no-store' to prevent browser caching
		cache: "no-store",
		// Add a unique cache busting parameter (e.g., timestamp)
		headers: {
			"Cache-Control": "no-cache",
			Pragma: "no-cache",
			"X-Timestamp": Date.now(), // Example cache busting header
		},
	});
	const data = await response.json();
	return data;
};

export const cocktailsConstructor = async (windowLocation: string) => {
	const cocktailList = [];
	const seenCocktails = new Set(); // Set to store unique cocktails

	for (let i = 0; i < 10; i++) {
		const cocktailData = await fetchCocktails(windowLocation);

		// Check for unique data before pushing
		const isUnique = !seenCocktails.has(JSON.stringify(cocktailData.data));
		if (isUnique) {
			cocktailList.push(cocktailData.data);
			seenCocktails.add(JSON.stringify(cocktailData.data)); // Add to seen set
		} else {
			console.log(`Skipping duplicate cocktail data (iteration ${i + 1})`);
		}

		await new Promise((resolve) => setTimeout(resolve, 400)); // Delay
	}

	if (cocktailList.length === 0) {
		throw new Error("No drinks found");
	}
	return cocktailList;
};

export const searchCocktail = async (cocktail: string) => {
	const response = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`,
		{
			cache: "no-cache",
		},
	);
	const data = await response.json();
	return data;
};

export const searchCocktailConstructor = async (cocktail: string) => {
	const cocktailList = [];
	const cocktailResponse = await searchCocktail(cocktail);
	const { drinks } = await cocktailResponse;
	console.log(drinks);
	if (drinks) {
		for (let i = 0; i < drinks.length; i++) {
			const formattedData = await formatData({ drinks: [drinks[i]] });
			cocktailList.push(formattedData.data);
		}
	} else {
		console.log("No drinks found");
		throw new Error("No drinks found");
	}
	console.log("Function side", cocktailList);
	return cocktailList;
};

export const fetchCocktailRecipe = async (id: string) => {
	const response = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
		{
			cache: "no-cache",
		},
	);
	const data = await response.json();
	const formattedData = await formatData(data);
	console.log(formattedData);
	return formattedData;
};
