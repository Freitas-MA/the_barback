import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
interface Drink {
	strDrink: string;
	idDrink: string;
	strCategory: string;
	strAlcoholic: string;
	strInstructions: string;
	strDrinkThumb: string;
	strIngredient1: string | null;
	strIngredient2: string | null;
	strIngredient3: string | null;
	strIngredient4: string | null;
	strIngredient5: string | null;
	strIngredient6: string | null;
	strIngredient7: string | null;
	strIngredient8: string | null;
	strIngredient9: string | null;
	strIngredient10: string | null;
	strIngredient11: string | null;
	strIngredient12: string | null;
	strIngredient13: string | null;
	strIngredient14: string | null;
	strIngredient15: string | null;
	strMeasure1: string | null;
	strMeasure2: string | null;
	strMeasure3: string | null;
	strMeasure4: string | null;
	strMeasure5: string | null;
	strMeasure6: string | null;
	strMeasure7: string | null;
	strMeasure8: string | null;
	strMeasure9: string | null;
	strMeasure10: string | null;
	strMeasure11: string | null;
	strMeasure12: string | null;
	strMeasure13: string | null;
	strMeasure14: string | null;
	strMeasure15: string | null;
}

interface FormattedDrink {
	idDrink: string;
	strDrink: string;
	strCategory: string;
	strAlcoholic: string;
	instructions: string;
	strDrinkThumb: string;
	recipe: { [ingredient: string]: string };
}

async function formatData(data: { drinks: Drink[] }): Promise<{
	data: FormattedDrink;
}> {
	const drink = data.drinks[0];
	const recipe: { [ingredient: string]: string } = {};

	// Extract non-null ingredients and measures from the drink object
	for (let i = 1; i <= 15; i++) {
		const ingredientKey = `strIngredient${i}`;
		const measureKey = `strMeasure${i}`;
		// @ts-expect-error
		const ingredient = drink[ingredientKey];
		// @ts-expect-error
		const measure = drink[measureKey];

		// If both ingredient and measure are not null, add them to the recipe
		if (ingredient && measure) {
			recipe[ingredient] = measure;
		}
	}

	// Return the formatted drink object
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

export async function GET(req: NextRequest, res: NextResponse) {
	const response = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/random.php?_=${uuidv4()}`, // Add the timestamp as a query parameter
		{
			cache: "no-cache",
			// Add a unique cache busting parameter (e.g., timestamp)
			headers: {
				"Cache-Control": "no-cache",
				Pragma: "no-cache",
				"X-Timestamp": Date.now().toString(), // Example cache busting header
			},
		},
	);
	const data = await response.json();
	const formattedData = await formatData(data);
	return NextResponse.json(formattedData, { status: 200 });
}
