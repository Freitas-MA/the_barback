import React from "react";
import {
  LoadingCardComponent,
  CardComponent,
} from "../LayoutComponents/CardComponent";

export const Card = ({data, page, cocktail}) => {
    const mockArray = Array(10).fill(null);
  return (
    <>
      {data[page]
        ? data[page].map((item, index) => (
            <CardComponent key={index}>
              <img
                width="150px"
                src={cocktail}
                alt={item.name}
              />
              <h1>{item.name}</h1>
              <ul>
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <p>
                      {ingredient.ingredient
                        ? `${ingredient.ingredient} - ${ingredient.amount} - ${ingredient.unit}`
                        : ingredient.special}
                    </p>
                  </li>
                ))}
              </ul>
              <p>{item.preparation}</p>
            </CardComponent>
          ))
        : mockArray.map((_, index) => <LoadingCardComponent key={index} />)}
    </>
  );
};
