'use client'
import { useEffect, useState } from "react";
import type { FormattedDrink } from "#/types";
import { fetchCocktailRecipe } from "@/actions/fetchCocktail";
import CardCocktail from "@/components/card/card";
import { checkForCookiesAsArray } from "@/actions/checkForCookiesArray";

export default function FavoritesPage() {
    const [cocktailList, setCocktailList] = useState<FormattedDrink[]>([]);
    const className = "flex flex-row flex-wrap w-full justify-center items-center mt-5";
    
    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const getCookies: string[] = await checkForCookiesAsArray("Favorite");
                if (getCookies) {
                    // Passo 2: Converter para Set para remover duplicatas
                    const uniqueCookies: string[] = Array.from(new Set(getCookies));
                    
    
                    // Passo 4: Usar os cookies únicos para buscar as receitas
                    const cocktailPromises = uniqueCookies.map((id: string) =>
                        fetchCocktailRecipe(id) as Promise<{ data: FormattedDrink }> // Type assertion here
                    );
    
                    const cocktails = await Promise.all(cocktailPromises);
                    const formattedCocktails = cocktails.map((cocktail) => cocktail.data);
                    setCocktailList(formattedCocktails);
                }
            } catch (error) {
                console.error("Error fetching cocktail recipes:", error);
            }
        };
    
        fetchCocktails();
    }, []); // Adicionei o array de dependências vazio aqui

    return (
        <div className="flex flex-row flex-wrap w-full justify-center items-center mt-5">
            {cocktailList.length > 0 ? (
                <section className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl tracking-widest font-bold">
                        Your favorites:
                    </h1>
                    <div className={className}>
                        {cocktailList.map((cocktail) => (
                            <CardCocktail key={cocktail.idDrink} cocktail={cocktail} />
                        ))}
                    </div>
                </section>
            ) : (
                <p className="flex flex-col text-center">
                    <span className="text-3xl">
                        Hey!
                        <br />
                        There&apos;s no cocktail here yet.
                    </span>
                    <br />
                    Time to start creating your list of favourites, it&apos;ll be here when
                    you get back!
                </p>
            )}
        </div>
    );
}
