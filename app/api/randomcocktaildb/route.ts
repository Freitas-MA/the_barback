import { type NextRequest, NextResponse } from "next/server";
import { parse } from 'url';

interface Drink {
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
    recipe: { [ingredient: string]: string };
}

async function formatDrink(drink: Drink): Promise<FormattedDrink> {
    const recipe: { [ingredient: string]: string } = {};

    // Extract non-null ingredients and measures from the drink object
    for (let i = 1; i <= 15; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        const ingredient = drink[ingredientKey];
        const measure = drink[measureKey];

        // If both ingredient and measure are not null, add them to the recipe
        if (ingredient && measure) {
            recipe[ingredient] = measure;
        }
    }

    // Return the formatted drink object
    return {
        idDrink: drink.idDrink,
        strDrink: drink.strDrink,
        strCategory: drink.strCategory,
        strAlcoholic: drink.strAlcoholic,
        instructions: drink.strInstructions,
        recipe: recipe
    };
}

async function formatData(data: { drinks: Drink[] }): Promise<FormattedDrink[]> {
    const formattedDrinks: FormattedDrink[] = [];

    // Format each drink in the array
    for (const drink of data.drinks) {
        const formattedDrink = await formatDrink(drink);
        formattedDrinks.push(formattedDrink);
    }

    return formattedDrinks;
}

export async function GET(req: NextRequest, res: NextResponse) {
    console.log('Cocktail pesquisado')
    const { query } = parse(req.nextUrl.href, true);
    const { cocktail } = req.query;

    if (!cocktail) {
        return NextResponse.error(new Error('Cocktail not provided'), { status: 400 });
    }

console.log('Cocktail pesquisado')
    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`, { cache: "no-cache" }
    );

    if (!response.ok) {
        return NextResponse.error(new Error('Failed to fetch data from the API'), { status: response.status });
    }

    const data = await response.json();

    if (!data.drinks) {
        return NextResponse.error(new Error('No drinks found for the provided cocktail'), { status: 404 });
    }

    const formattedData = await formatData(data);
    return NextResponse.json(formattedData, { status: 200 });
}
