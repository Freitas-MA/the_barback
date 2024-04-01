'use client';   
import React from "react";
import { useAtom } from "jotai";
import {
	searchQueryAtom,
	searchResultsAtom,
	localUrlAtom,
} from "@/components/atoms";
import CardCocktail from "../common/card";

export default async function SearchResults() {
	const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
	const [localUrl, setLocalUrl] = useAtom(localUrlAtom);
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	const cocktails = searchResults;
	console.log("Search page", cocktails);
	return (
		<>
			{/* // Content component when data is available */}
			<div className={className}>
				{cocktails
					? 
					<section className={className}>
						{cocktails.map((cocktail) => (
								<CardCocktail {...cocktail} />
							))}
					</section>
					: null}
			</div>
		</>
	);
}
