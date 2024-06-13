"use server";
import type { FormattedDrink } from "#/types";
import { fetchCocktails } from "./helpers";

/**
 * Constructs a list of unique cocktails fetched from the specified location,
 * ensuring uniqueness compared to both previous cocktails and within the fetched results.
 * @param windowLocation The location from which to fetch cocktails.
 * @param prevCocktails Array of previously fetched cocktails to compare against.
 * @returns A list of unique cocktails.
 */
export const infinityScrollConstructor = async (windowLocation: string, prevCocktails: FormattedDrink[] = []) => {
    const cocktailList: FormattedDrink[] = [];
    const seenCocktailIds = new Set<string>(prevCocktails.map(cocktail => cocktail.idDrink)); // Set to store unique cocktail IDs from prevCocktails

    for (let i = 0; i < 10; i++) {
        const cocktailData = await fetchCocktails(windowLocation);

        // Check if cocktail is unique based on ID and not already in prevCocktails
        const cocktailId = cocktailData.data.idDrink; // Assuming id is a unique identifier
        const isUnique = !seenCocktailIds.has(cocktailId);

        if (isUnique) {
            cocktailList.push(cocktailData.data);
            seenCocktailIds.add(cocktailId); // Add cocktail ID to seen set
            console.log(`Added cocktail data (iteration ${i + 1})`);
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
