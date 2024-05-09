import CardCocktail from "@/components/card/card";
import type { FormattedDrink } from "#/types";
import { searchCocktailConstructor } from "@/actions/searchCocktail";
import { v4 as uuidv4 } from 'uuid';


export default async function SearchResults({
	params,
}: { params: { id: string } }) {
	const idString = params.id;
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	let cocktails: FormattedDrink[] = [];
	let getThecocktail = false

		try {
			cocktails = await searchCocktailConstructor(idString);
			getThecocktail = true;
			console.log("server fecth success");
		} catch (error) {
			console.error("Error fetching cocktails:", error);
			getThecocktail = false;
		}

	const id = uuidv4();

	if (!idString) {
		return (
			<div className="flex flex-col flex-wrap min-h-full w-full justify-center items-center text-center px-6 mt-5">
				<h2 className="text-4xl font-bold">Sorry, no cocktail found here.</h2>
				<p>Please, search another one on the search bar.</p>
			</div>
		);
	}

	if(getThecocktail === false){
		return (
			<div className="flex flex-col flex-wrap min-h-full w-full justify-center items-center text-center px-6 mt-5">
				<h2 className="text-4xl font-bold">Sorry, we couldn't find any cocktails under the term: {idString}  </h2>
				<p>Please try another one in the search bar.</p>
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
							<CardCocktail key={id} {...cocktail} />
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
