Logica para subir os cocktails sacados do thecocktailDB

  // let drink;
  const supabase = createServerComponentClient({ cookies });
  // const scrapCocktail = async () => {
  //   console.log("Clicou");
  //   const cocktailList = await getUniqueDrinks();
  //   console.log("Cocktail List", cocktailList);
  //   for(let cocktail of cocktailList) {
  //     let idName = {
  //       idDrink: cocktail.idDrink,
  //       strDrink: cocktail.strDrink,
  //     }

  //     if("idDrink" in cocktail) {
  //       delete cocktail.idDrink;
  //     }
  //     if("strDrink" in cocktail) {
  //       delete cocktail.strDrink;
  //     }

  //     const { data, error } = await supabase.from('cocktails').upsert({drinks: cocktail});
  //     console.log("Data", data);
  //     console.log("Error", error);
  //   }
  // };
  const { data, error } = await supabase.from("cocktails").select("drinks");
  const listDrinks = data;
  // await console.log("Teste", data);
  // const consoleData = async () => {
  //   console.log("Data", data);
  //   console.log("Error", error);
  // }

  // Uploading the List of drinks to the Supabase database