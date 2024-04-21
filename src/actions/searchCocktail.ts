
import { searchCocktail, formatData } from "./helpers";

export const searchCocktailConstructor = async (cocktail: string) => {
    const cocktailList = [];
    const cocktailResponse = await searchCocktail(cocktail);
    const { drinks } = await cocktailResponse;

    if (drinks) {
        for (let i = 0; i < drinks.length; i++) {
            const formattedData = await formatData({ drinks: [drinks[i]] });
            cocktailList.push(formattedData.data);
        }
    } else {
        console.log("No drinks found");
        throw new Error("No drinks found");
    }
    return cocktailList;
};
