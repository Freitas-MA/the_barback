import React from 'react'
import type { FormattedDrink } from '../handlers/functions'

export default async function CardCocktail(cocktail: FormattedDrink) {
    const cardStyle =
    "flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-white rounded-md shadow-md p-4 m-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105";

  return (
    <>
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
							<button
								className="rounded-md shadow-md p-2 text-xs"
								type="button"
							>
								{cocktail.strCategory}
							</button>
							<button
								className="rounded-md shadow-md p-2 text-xs"
								type="button"
							>
								{cocktail.strAlcoholic}
							</button>
						</div>
					</div>
    </>
)
}
