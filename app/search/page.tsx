import React from "react";
import { cookies } from "next/headers";


export default async function Search() {
	const searchHistory = cookies.get("SearchHistory");
	console.log(searchHistory);
	return (
		<div className="flex flex-col md:flex-row">
			<p>Sorry, repeat you search with another term!</p>
		</div>
	);
}
