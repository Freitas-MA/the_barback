import { cookies } from "next/headers"
import type { FormattedDrink } from "#/types";
import { fetchCocktailRecipe } from "@/actions/fetchCocktail";
import CardCocktail from "@/components/card/card";

export default async function page() {
    const myCookies = cookies().get("Favorite")
    const className =
    "flex flex-row flex-wrap w-full justify-center items-center mt-5";

    console.log(myCookies)

    try {
        const cocktailList: FormattedDrink[] = [];
        if (myCookies) {
          console.log("if aceito");
          for (let i = 0; i < myCookies.length; i++) {
            const cocktail: FormattedDrink = (await fetchCocktailRecipe(myCookies[i])).data;
            cocktailList.push(cocktail);
          }
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
