import CardCocktail from "@/components/card/card";
import type { FormattedDrink } from "#/types";
import { searchCocktailConstructor } from "@/actions/searchCocktail";

export default async function SearchResults({
	params,
}: { params: { id: string } }) {
	const idString = params.id;
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	let cocktails: FormattedDrink[] = [];

		try {
			cocktails = await searchCocktailConstructor(idString);
			console.log("server fecth success");
		} catch (error) {
			console.error("Error fetching cocktails:", error);
		}

	if (!idString) {
		return (
			<div className="flex flex-col flex-wrap min-h-full w-full justify-center items-center text-center border border-black mt-5">
				<h2 className="text-4xl font-bold">Sorry, no cocktail found here.</h2>
				<p>Please, search another one on the search bar.</p>
			</div>
		);
	}
	return (
		<>
			{/* // Content component when data is available */}
			<div className={className}>
				{cocktails ? (
					<section className={className}>
						{cocktails.map((cocktail) => (
							// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
							<CardCocktail {...cocktail} />
						))}
					</section>
				) : null}
			</div>
		</>
	);
}

// export default function SearchResults({
// 	params,
// }: { params: { id: string } }) {
// 	const cocktail = params.id;
// 	console.log(cocktail);
// 	return (
// 		<div className="w-full h-screen flex items-center justify-center">
// 			<h1>{cocktail ? `Cocktail: ${cocktail}` : "No cocktail found here."}</h1>
// 		</div>
// 	);
// }
