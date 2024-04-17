import React from "react";
import type { FormattedDrink } from "#/types";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa6";

export default async function CardCocktail(cocktail: FormattedDrink) {
	const cardStyle =
		"flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-neutral-100 rounded-md shadow-md p-4 m-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 relative";

	const handleClick = async () => {
		const response = await fetch("/api/setCookie", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ cocktailId: cocktail.idDrink }),
		});

		if (!response.ok) {
			console.error("Failed to set cookie");
		}
	};

	return (
		<>
			<Link href={{ pathname: `/cocktail/${cocktail.idDrink}` }}>
				<div className={cardStyle} key={cocktail.idDrink}>
					{/* <button type="button" onClick={handleClick()} className="absolute right-2 top-2 z-50">
						<FaRegStar />
					</button> */}
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
