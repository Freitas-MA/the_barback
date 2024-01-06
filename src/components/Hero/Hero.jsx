"use client";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import { FlexTopContainer, CardComponent } from "../LayoutComponents";
import { getPagedData, getCocktailImageURL } from "@/app/API/API";
import { CardComponent } from "../LayoutComponents";

const Hero = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPagedData().then((data) => setData(data));
  }, []);

  console.log("Esse log, data", data);
  console.log("Item test", data[0]);
  console.log("Page test", data.length);

  return (
    <>
      <FlexTopContainer id="hero">
        {data[page]
          ? data[page].map((item, index) => (
              <CardComponent key={index}>
                <img width='150px' src={getCocktailImageURL(`cocktail`)} alt={item.name} />
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
          : null}
      </FlexTopContainer>
      <div style={{ background: "red"}}>
        <button onClick={() => setPage(page <= 0 ? 0 : page - 1)}>
          Previous
        </button>
        <button
          onClick={() =>
            setPage(page >= data.length - 1 ? data.length - 1 : page + 1)
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Hero;
