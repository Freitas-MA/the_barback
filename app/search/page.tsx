"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default async function Search() {
	const [searchHistory, setSearchHistory] = useState([] || null);

	useEffect(() => {
		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("SearchHistory"))
			?.split("=")[1];
		const history = cookie ? JSON.parse(cookie) : [];
		setSearchHistory(history);
	}, []);

	console.log(searchHistory);

	if (!searchHistory) {
		return (
			<div className="flex flex-col flex-wrap min-h-full w-full justify-center items-center text-center mt-5">
				<h2 className="text-4xl font-bold">Sorry, no cocktail found here.</h2>
				<p>Please, search another one on the search bar.</p>
			</div>
		);
	}
	return (
		<>
			<div className="flex flex-col flex-wrap min-h-full w-full justify-center items-center text-center mt-5">
				<h2 className="text-4xl font-bold">
					Take a look on your last searches!
				</h2>
				<ul className="flex flex-row mt-5 gap-2">
					{searchHistory.reverse().map((search, index) => {
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={index} className="flex flex-row flex-wrap gap-4">
								<Link href={{ pathname: `/search/${search}` }}>
									<button
										className="rounded-md shadow-md p-2 text-l"
										type="button"
									>
										{search}
									</button>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
