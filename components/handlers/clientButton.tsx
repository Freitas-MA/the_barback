"use client";
import React from "react";
import { getUniqueDrinks } from "./scrapCocktail";

interface ClientButtonProps {
  className: string;
  text?: string | "Call List of drinks";
}

const fetchDrinks = async () => {
  const drinkList = await getUniqueDrinks();
  return drinkList;
};

const ClientButton: React.FC<ClientButtonProps> = async ({
  className,
  text,
}) => {
  const cocktails = await fetchDrinks();
  return (
    <>
      <div className={className}>
        {cocktails.map((cocktail) => {
          return (
            <div
              className="flex flex-col justify-center items-center w-[15rem] bg-white rounded-md shadow-md p-4 m-4"
              key={cocktail.idDrink}
            >
              <h1>{cocktail.strDrink}</h1>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="w-40"
              />
            </div>
          );
        })}
      </div>
      {/* <button className={className} onClick={fetchDrinks}>
        {text}
      </button> */}
    </>
  );
};

export default ClientButton;
