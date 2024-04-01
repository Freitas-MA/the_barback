"use client";
import { use, useEffect, useState } from "react";
import { cocktailsConstructor } from "./functions";

interface ClientButtonProps {
	className: string;
	text?: string | "Call List of drinks";
}
const ClientButton: React.FC<ClientButtonProps> = ({ className, text }) => {
	const windowLocation = window.location.origin;

	const [loading, setLoading] = useState(true);

	const cocktails = use(cocktailsConstructor(windowLocation));

	const cardStyle =
		"flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-white rounded-md shadow-md p-4 m-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105";

		useEffect(() => {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}, []);

	return (
		<>
			{loading ? (
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
					{/* <button type="button" onClick={handleFetchCocktails}>
						Click-me
					</button> */}
					{cocktails.map((cocktail) => (
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
					))}
				</div>
			)}
		</>
	);
};


export default ClientButton;