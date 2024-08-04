import type { FormattedDrink } from "#/types";
import { fetchCocktailRecipe } from "@/actions/fetchCocktail";
import { cookies } from "next/headers";
import Image from "next/image";
import dynamic from "next/dynamic";

export default async function CocktailDetails({
	params,
}: { params: { id: string } }) {
	const idString = params.id.toString();
	const cocktail: FormattedDrink = (await fetchCocktailRecipe(idString)).data;
	if (!cocktail) {
		return null; // Display a loading indicator while fetching data
	}

	const CookieButton = dynamic(
		() => import("@/components/layout/cookieButton"),
		{
			ssr: false,
		},
	);

	const favoriteCookie = cookies().get("Favorite");
	const myCookies = await JSON.parse(favoriteCookie?.value ?? "[]");

	const myCocktailIsFavorite = myCookies.includes(cocktail.idDrink);

	const {
		idDrink,
		strDrink,
		strCategory,
		strAlcoholic,
		strDrinkThumb,
		recipe,
		instructions,
	} = cocktail;

	const recipeIngredients = Object.entries(recipe).map(
		([ingredient, measure]) => (
			<li key={ingredient} className="mb-2">
				{ingredient}: {measure}
			</li>
		),
	);

	const paragraphs = instructions.split(/(?<=\.)\s+/);

	return (
		<div className="relative cocktail-details w-full">
			<div className="flex flex-col lg:flex-row gap-8 m-4">
				<Image
					src={strDrinkThumb}
					alt={strDrink}
					width={320}
					height={320}
					className="rounded-md shadow-lg object-cover"
				/>
				<div className="flex flex-col gap-4 w-full relative">
					<CookieButton
						favorit={myCocktailIsFavorite}
						name="favorite"
						value={idDrink as string}
						classProp="absolute top-2 md:right-2 right-2 scale-[2] z-10"
					/>
					<h2 className="text-4xl w-[80%] font-bold tracking-wider ">
						{strDrink}
					</h2>
					<p>
						<b>Category:</b> {strCategory}
					</p>
					<p>
						<b>Alcoholic:</b> {strAlcoholic}
					</p>
					<div className="mt-4 gap-4">
						<h3 className="text-2xl font-bold tracking-wider">Ingredients:</h3>
						<ul className="list-disc pl-4 flex flex-col">
							{recipeIngredients}
						</ul>
					</div>
				</div>
			</div>
			<div className="px-8">
				<h3 className="text-2xl font-bold tracking-wider">Instructions:</h3>
				<div className="flex flex-col mt-2">
					{paragraphs.map((paragraph, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<p key={index} className="capitalize-first leading-relaxed">
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
