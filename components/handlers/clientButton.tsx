"use client";
import { getUniqueDrinks } from "./scrapCocktail";
import { useState, useEffect } from "react";

interface ClientButtonProps {
	className: string;
	text?: string | "Call List of drinks";
}

const ClientButton: React.FC<ClientButtonProps> = ({ className, text }) => {
	const windowLocation = window.location.origin;

	const [cocktails, setCocktails] = useState([]);

	const fetchDrinks = async () => {
		const drinkList = await getUniqueDrinks(windowLocation);
		return drinkList;
	};
	const cardStyle =
		"flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-white rounded-md shadow-md p-4 m-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105";

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// @ts-expect-error
		fetchDrinks().then((cocktial) => setCocktails(cocktial));
	}, []);
	console.log(cocktails);
	return (
		<>
			{!cocktails.length ? (
				// Loading component using placeholder array
				<div className={className}>
					{" "}
					{/* Assuming a container for loading indicators */}
					{Array(10)
						.fill(null)
						.map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div className={cardStyle} key={index}>
								<h1>Loading...</h1>
							</div>
						))}
				</div>
			) : (
				// Content component when data is available
				<div className={className}>
					<span>Teste</span>
					{cocktails.map((cocktail) => (
						// @ts-expect-error
						<div className={cardStyle} key={cocktail.idDrink}>
							<div className="flex flex-col items-center justify-center">
								{/* @ts-expect-error */}
								<h1>{cocktail.strDrink}</h1>
								<img
									/* @ts-expect-error */
									src={cocktail.strDrinkThumb}
									/* @ts-expect-error */
									alt={cocktail.strDrink}
									className="w-40 rounded-md"
								/>
							</div>
							<div className="flex flex-row flex-nowrap gap-1">
								<button
									className="rounded-md shadow-md p-2 text-xs"
									type="button"
									>
									{/* @ts-expect-error */}
									{cocktail.strCategory}
								</button>
								<button
									className="rounded-md shadow-md p-2 text-xs"
									type="button"
									>
									{/* @ts-expect-error */}
									{cocktail.strAlcoholic}
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default ClientButton;
