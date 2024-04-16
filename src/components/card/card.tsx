import React from "react";
import type { FormattedDrink } from "#/types";
import Link from "next/link";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function CardCocktail(cocktail: FormattedDrink) {
	const cardStyle =
		"flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-neutral-100 rounded-md shadow-md p-4 m-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105";

	return (
		<>
			<Link href={{ pathname: `/cocktail/${cocktail.idDrink}` }}>
				<div className={cardStyle} key={cocktail.idDrink}>
					<div className="flex flex-col items-center justify-center">
						<h1>{cocktail.strDrink}</h1>
						<img
							src={cocktail.strDrinkThumb}
							alt={cocktail.strDrink}
							className="w-40 rounded-md"
						/>
					</div>
					<div className="flex flex-row flex-nowrap gap-1">
						<button className="rounded-md shadow-md p-2 text-xs" type="button">
							{cocktail.strCategory}
						</button>
						<button className="rounded-md shadow-md p-2 text-xs" type="button">
							{cocktail.strAlcoholic}
						</button>
					</div>
				</div>
			</Link>
		</>
	);
}
