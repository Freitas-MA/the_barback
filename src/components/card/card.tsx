import React from "react";
import type { FormattedDrink } from "#/types";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const CardCocktail = React.memo(function CardCocktail({
	cocktail,
}: { cocktail: FormattedDrink }) {
	const myCocktailIsFavorite = false;
	const cardStyle =
		"flex flex-col justify-between text-center items-center gap-2 w-[7rem] h-[14rem] md:w-[15rem] md:h-[18rem] bg-neutral-100 rounded-md shadow-md p-4 m-4 hover:shadow-lg relative";

	const CookieButton = dynamic(
		() => import("@/components/layout/cookieButton"),
		{ ssr: false },
	);
	//
	return (
		<>
			<div className={cardStyle} key={cocktail.idDrink}>
				<CookieButton
					favorit={myCocktailIsFavorite}
					name="Favorite"
					value={cocktail.idDrink}
					classProp="absolute top-0 md:-top-[0.5rem] right-2 md:-right-[0.5rem] md:scale-150 z-10"
				/>
				<Link href={{ pathname: `/cocktail/${cocktail.idDrink}` }}>
					<div className="relative flex flex-col items-center justify-center">
						<h1 className="max-w-[80%] text-xs line-clamp-2">
							{cocktail.strDrink}
						</h1>
						<img
							src={cocktail.strDrinkThumb}
							alt={cocktail.strDrink}
							className="rounded-md w-max object-cover"
						/>
					</div>
					<div className="flex flex-col md:flex-row flex-nowrap gap-1">
						<button
							className="rounded-md shadow-md p-2 text-[0.50rem] md:text-xs"
							type="button"
						>
							{cocktail.strCategory}
						</button>
						<button
							className="rounded-md shadow-md p-2 text-[0.50rem] md:text-xs"
							type="button"
						>
							{cocktail.strAlcoholic}
						</button>
					</div>
				</Link>
			</div>
		</>
	);
});

export default CardCocktail;
