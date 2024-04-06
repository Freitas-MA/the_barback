"use client";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
	searchQueryAtom,
	searchResultsAtom,
	localUrlAtom,
} from "@/components/atoms";
import CardCocktail from "../common/card";
import type { FormattedDrink } from "@/types";

export default async function SearchResults() {
	const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
	const [localUrl, setLocalUrl] = useAtom(localUrlAtom);
	const [cocktails, setCocktails] = useState<FormattedDrink[]>([]);
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCocktails(searchResults);
		console.log("Search page", cocktails);
	}, []);

	return (
		<>
			{/* // Content component when data is available */}
			<div className={className}>
				{cocktails ? (
					<section className={className}>
						{cocktails.map((cocktail) => (
							<CardCocktail {...cocktail} />
						))}
					</section>
				) : null}
			</div>
		</>
	);
}