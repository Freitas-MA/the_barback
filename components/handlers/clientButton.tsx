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
		"flex flex-col justify-start text-center items-center gap-2 w-[15rem] h-[18rem] bg-white rounded-md shadow-md p-4 m-4";

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchDrinks().then((cocktial) => setCocktails(cocktial));
	}, []);

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
							<div className={cardStyle} key={index}>
								<h1>Loading...</h1>
							</div>
						))}
				</div>
			) : (
				// Content component when data is available
				<div className={className}>
					{cocktails.map((cocktail) => (
						<div className={cardStyle} key={cocktail.idDrink}>
							<h1>{cocktail.strDrink}</h1>
							<img
								src={cocktail.strDrinkThumb}
								alt={cocktail.strDrink}
								className="w-40"
							/>
						</div>
					))}
				</div>
			)}
			<button type="button" className={className} onClick={fetchDrinks}>
				{text}
			</button>
		</>
	);
};

export default ClientButton;
