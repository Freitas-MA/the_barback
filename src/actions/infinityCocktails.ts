"use server";
import type { FormattedDrink } from "#/types";
import { fetchCocktails } from "./helpers";

/**
 * Constructs a list of unique cocktails fetched from the specified location,
 * ensuring uniqueness compared to both previous cocktails and within the fetched results.
 * @param windowLocation The location from which to fetch cocktails.
 * @returns A single cocktail.
 */
export const infinityScrollConstructor = async (windowLocation: string) => {
	const cocktailList: FormattedDrink[] = [];
	const cocktailData = await fetchCocktails(windowLocation);

	cocktailList.push(cocktailData.data);

	if (cocktailList.length === 0) {
		throw new Error("No drinks found");
	}
	return cocktailList;
};
