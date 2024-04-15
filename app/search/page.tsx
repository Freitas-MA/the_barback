import React from "react";
import { cookies } from "next/headers";
import SearchResults from "@/app/search/[id]/page";

export default async function Search() {
	return (
		<div className="flex flex-col md:flex-row">
			<SearchResults />
		</div>
	);
}
