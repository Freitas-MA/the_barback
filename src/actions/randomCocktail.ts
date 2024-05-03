"use server"
import { fetchCocktails } from "./helpers";

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
