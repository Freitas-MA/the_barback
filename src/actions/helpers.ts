import type { Drink, FormattedDrink } from "@/types";

export const formatData = async (data: { drinks: Drink[] }): Promise<{
    data: FormattedDrink;
}> => {
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
};

export const fetchCocktails = async (windowLocation: string) => {
    const response = await fetch(`${windowLocation}/api/cocktaildb`, {
        // Set cache: 'no-store' to prevent browser caching
        cache: "no-store",
        // Add a unique cache busting parameter (e.g., timestamp)
        headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            "X-Timestamp": Date.now().toString(), // Example cache busting header
        },
    });
    const data = await response.json();
    return data;
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
