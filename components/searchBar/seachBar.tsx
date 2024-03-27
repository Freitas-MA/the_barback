"use client";
import { useState, useEffect, useMemo } from "react";
import { IoMdSearch } from "react-icons/io";
import { searchQueryAtom, searchResultsAtom } from "../atoms";
import { useAtom } from "jotai";

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
	const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
	const [cocktail, setCocktail] = useState("");

	const fetchCocktail = async (searchQuery: string) => {
		try {
			const cocktailData = await fetch(
				`www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`,
			);
			const fetchedCocktail = await cocktailData.json();
			setCocktail(fetchedCocktail);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSearch = () => {
		setSearchQuery(searchTerm);
	};


	return (
		<div className="flex items-center justify-start  w-full mt-12 px-2">
			<input
				className="bg bg-white-400 border border-gray-200 z-10 w-full rounded-sm shadow-lg m-1 px-2 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
				type="text"
				name="searchCocktail"
				id="searchInput"
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button
				className="flex justify-center items-center gap-2 border border-gray-200 bg bg-green-400 pl-2 pr-1 shadow-lg rounded-md -translate-x-2 z-0"
				type="submit"
				onClick={e => handleSearch()}
			>
				{" "}
				<IoMdSearch />
				Search{" "}
			</button>
		</div>
	);
}
