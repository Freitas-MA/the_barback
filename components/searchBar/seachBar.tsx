"use client";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter();

	const handleSearch = (event: { preventDefault: () => void }) => {
		event.preventDefault();

		// Navegue para a página de pesquisa com o termo de pesquisa na URL
		router.push(
			`/search/${encodeURIComponent(searchTerm.toLocaleLowerCase())}`,
		);
	};

	// handleClearSearch function to clear que input field without reloading the page or navegating to another page
	const handleClearSearch = () => {
		setSearchTerm("");
		// Focus the search input after clearing
		document ? document.getElementById("searchInput")?.focus() : null;
	};

	return (
		<div className="flex items-center justify-start px-2">
			<input
				className="bg bg-white-400 border border-gray-200 z-10 w-full rounded-sm shadow-lg m-1 px-2 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
				type="text"
				name="searchCocktail"
				id="searchInput"
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
				placeholder="Search for a cocktail..."
				onKeyDown={(e) => {
					// Attach the `onKeyDown` event listener
					if (e.key === "Enter") {
						// Check for Enter key
						handleSearch(e); // Call the `handleSearch` function
					}
        }}
      />
      <div className="flex flex-row gap-0 -translate-x-6 z-20">
        <button
          type="submit"
          className={`flex justify-center h-6 items-center px-1 ${searchTerm ? "opacity-100" : "opacity-0 -z-10"}`}
          onClick={handleClearSearch}
        >
          {" "}
          X{" "}
        </button>

        <button
          className={"flex justify-center h-7 items-center border border-gray-200 bg bg-green-400 pl-2 pr-1 shadow-lg rounded-md z-20"}
          type="submit" // Keep the `type="submit"` for form submission behavior (optional)
					onClick={handleSearch}
				>
					<IoMdSearch />{" "}
				</button>
			</div>
		</div>
	);
}
