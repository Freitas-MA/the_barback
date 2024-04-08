import type { Drink, FormattedDrink } from "@/types";

/**
 * The function `formatData` takes an array of drinks, extracts relevant
 * information, and formats it into a structured object.
 * @param data - The `formatData` function takes an object `data` as a parameter,
 * which should have a property `drinks` containing an array of `Drink` objects.
 * The function then processes this data to format it into a specific structure and
 * returns a Promise containing the formatted drink data.
 * @returns The `formatData` function is returning a Promise that resolves to an
 * object with a `data` property containing a `FormattedDrink` object. The
 * `FormattedDrink` object includes properties such as `idDrink`, `strDrink`,
 * `strCategory`, `strAlcoholic`, `strDrinkThumb`, `recipe`, and `instructions`.
 */
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

/**
 * The function fetchCocktails asynchronously fetches cocktail data from a
 * specified API endpoint using the windowLocation parameter.
 * @param {string} windowLocation - The `windowLocation` parameter is a string
 * representing the URL of the current window location. It is used to construct the
 * URL for fetching cocktail data from the API endpoint `/api/cocktaildb/` relative
 * to the `windowLocation`.
 * @returns The function `fetchCocktails` is returning the data fetched from the
 * specified API endpoint (`/api/cocktaildb/`).
 */
export const fetchCocktails = async (windowLocation: string) => {
	const response = await fetch(`${windowLocation}/api/cocktaildb`, {
		cache: "no-cache",
	});
	const data = await response.json();
	return data;
};

/**
 * The function `cocktailsConstructor` asynchronously fetches cocktail data from a
 * specified location and stores it in an array, repeating the process 10 times
 * with a delay of 250ms between each fetch.
 * @param {string} windowLocation - The `windowLocation` parameter in the
 * `cocktailsConstructor` function is a string that represents the location from
 * which the cocktails data will be fetched. It is used as a parameter for the
 * `fetchCocktails` function to retrieve data related to cocktails from that
 * location.
 * @returns The `cocktailsConstructor` function returns an array of cocktail data
 * fetched from the `fetchCocktails` function. The function fetches cocktail data
 * from the specified `windowLocation` asynchronously for 10 iterations, with a
 * delay of 250 milliseconds between each fetch. The fetched cocktail data is then
 * pushed into the `cocktailList` array, which is returned once all iterations are
 * completed.
 */
export const cocktailsConstructor = async (windowLocation: string) => {
	const cocktailList = [];
	for (let i = 0; i < 10; i++) {
		const cocktailData = await fetchCocktails(windowLocation);
		cocktailList.push(cocktailData.data);

		await new Promise((resolve) => setTimeout(resolve, 250));
	}
	console.log("Function side constructor", cocktailList);
	if (cocktailList.length === 0) {
		throw new Error("No drinks found");
	}
	return cocktailList;
};

/**
 * This TypeScript function searches for a cocktail by name using an external API
 * and returns the data.
 * @param {string} cocktail - The `searchCocktail` function is an asynchronous
 * function that takes a `cocktail` parameter, which is a string representing the
 * name of the cocktail to search for. The function makes a fetch request to
 * thecocktaildb API to search for cocktails based on the provided name. The
 * response is
 * @returns The function `searchCocktail` is returning the data fetched from the
 * API endpoint
 * `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` after
 * converting it to JSON format.
 */
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

/**
 * The function `searchCocktailConstructor` searches for a cocktail and formats the
 * data before returning a list of cocktails.
 * @param {string} cocktail - The `searchCocktailConstructor` function takes a
 * `cocktail` parameter, which is a string representing the name of the cocktail to
 * search for. This function then searches for the cocktail using the
 * `searchCocktail` function, processes the response data, and returns a list of
 * formatted cocktail
 * @returns The `searchCocktailConstructor` function is returning an array of
 * formatted cocktail data objects.
 */
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
