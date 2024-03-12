interface DrinkData {
  [key: string]: string | null;
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

async function getDrinkData(): Promise<DrinkData> {
  const publicUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${publicUrl}/api/Cocktails`, {
    cache: "no-cache",
  });
  const cocktailData = await response.json();
  // console.log("Page", cocktailData);
  const {
    data: { drinks },
  } = cocktailData;
  const drink = drinks[0];
  // console.log(drink);
  return drink;
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getUniqueDrinks(): Promise<DrinkData[]> {
  let drinks: DrinkData[] = [];
  for (let i = 0; i < 10; i++) {
    await delay(500); // Espera por 0.5 segundos
    let drinkData = await getDrinkData();
    if (!drinks.find((drink) => drink.idDrink === drinkData.idDrink)) {
      // Removendo as propriedades nulas
      for (let prop in drinkData) {
        if (drinkData[prop] === null) {
          delete drinkData[prop];
        }
      }
      drinks.push(drinkData);
    }
  }
  return drinks;
}

// getUniqueDrinks().then((drinks) => console.log(drinks));
