import React from "react";
import { cocktailsConstructor } from "../handlers/functions";
import CardCocktail from "../common/card";

export default async function CocktailsHome() {
	const localUrl = process.env.NEXT_PUBLIC_BASE_URL;
	const cocktails = await cocktailsConstructor(localUrl);
	const className =
		"flex flex-row flex-wrap w-full justify-center items-center mt-5";

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
