import { cookies } from "next/headers"
import type { FormattedDrink } from "#/types";
import { fetchCocktailRecipe } from "@/actions/fetchCocktail";
import CardCocktail from "@/components/card/card";

export default async function page() {
  const favoriteCookie = cookies().get("Favorite");
  const myCookies = await JSON.parse(favoriteCookie?.value ?? "[]");
      const className = "flex flex-row flex-wrap w-full justify-center items-center mt-5";

    console.log(myCookies)

    try {
        let cocktailList: FormattedDrink[] = [];
        if (myCookies) {
          console.log("if aceito");
          const cocktailPromises = myCookies.map((id: string) => fetchCocktailRecipe(id));
          const cocktails = await Promise.all(cocktailPromises);
          cocktailList = cocktails.map(cocktail => cocktail.data);
        }
        console.log(cocktailList);
        return (
          <>
            <div className={className}>
              {cocktailList.length > 0 ? (
                <section className={className}>
                  {cocktailList.map((cocktail) => (
                    <CardCocktail key={cocktail.id} {...cocktail} />
                  ))}
                </section>
              ) : (
                <p>No cocktails found.</p>
              )}
            </div>
          </>
        );
      } catch (error) {
        console.error("Error fetching cocktail recipes:", error);
        return (
          <>
            <div className={className}>
              <p>An error occurred while fetching cocktail recipes.</p>
            </div>
          </>
        );
      }
    }
