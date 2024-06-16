import { cookies } from "next/headers";
import type { FormattedDrink } from "#/types";
import { fetchCocktailRecipe } from "@/actions/fetchCocktail";
import CardCocktail from "@/components/card/card";

export default async function page() {
	const favoriteCookie = cookies().get("Favorite");
	const myCookies = await JSON.parse(favoriteCookie?.value ?? "[]");
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";
	try {
		let cocktailList: FormattedDrink[] = [];
		if (myCookies) {
			const cocktailPromises = myCookies.map((id: string) =>
				fetchCocktailRecipe(id),
			);
			const cocktails = await Promise.all(cocktailPromises);
			cocktailList = cocktails.map((cocktail) => cocktail.data);
		}
		return (
			<>
				<div className='flex flex-row flex-wrap w-full justify-center items-center mt-5'>
					{cocktailList.length > 0 ? (
						<section className='flex flex-col items-center justify-center'>
							<h1 className="text-3xl tracking-widest font-bold">Your favorites:</h1>
							<div className={className}>
								{cocktailList.map((cocktail) => (
									<CardCocktail key={cocktail.idDrink} cocktail={cocktail} />
								))}
							</div>
						</section>
					) : (
						<p className="flex flex-col text-center">
							<span className="text-3xl">
								Hey!
								<br />
								There&apos;s no cocktail here yet.
							</span>
							<br />
							Time to start creating your list of favourites, it&apos;ll be here when
							you get back!
						</p>
					)}
				</div>
			</>
		);
	} catch (error) {
		console.error("Error fetching cocktail recipes:", error);
		return (
			<>
				<div className={className}>
					<p>An error occurred while fetching cocktail recipes.</p>
				</div>
			</>
		);
	}
}
