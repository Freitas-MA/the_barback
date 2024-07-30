import Link from "next/link";
import { cookies } from "next/headers";
import dynamic from "next/dynamic";

export default async function Search() {

	const FocusItem = dynamic(() => import("@/components/smart/focus"), {
		ssr: false,
	});

	const searchCookie = cookies().getAll("SearchHistory");
	const searchHistory = searchCookie ? searchCookie[0] : null;

	const value = searchHistory ? JSON.parse(searchHistory.value) : null;

	if (!searchHistory) {
		return (
			<div className="flex flex-col flex-wrap min-h-full w-full justify-center items-center text-center mt-5">
				<h2 className="text-4xl font-bold">Sorry, no cocktail found here.</h2>
				<p>Please, search another one on the search bar.</p>
				<FocusItem itemId="searchInput" />
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
					{value.map((search: string, index: number) => {
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
			<FocusItem itemId="searchInput" />
		</>
	);
}
