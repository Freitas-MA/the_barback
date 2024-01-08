"use client";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import { FlexTopContainer, CardComponent } from "../LayoutComponents";
import { getPagedData, getCocktailImageURL } from "@/app/API/API";
import { CardComponent } from "../LayoutComponents";
import { Card } from "../Cards/Card";

const Hero = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const cocktailImg = getCocktailImageURL(`cocktail`);

  useEffect(() => {
    getPagedData().then((data) => setData(data));
  }, []);

console.log(data)
  return (
    <>
      <FlexTopContainer id="hero">
        <Card data={data} page={page} cocktail={getCocktailImageURL(`cocktail`)}/>
        
      </FlexTopContainer>
      <div style={{ background: "red" }}>
        <button onClick={() => setPage(page <= 0 ? 0 : page - 1)}>
          Previous
        </button>
        {data.map((item, index) => (
          <button key={index} onClick={() => setPage(index)}>{index + 1}</button>
        ))}
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
