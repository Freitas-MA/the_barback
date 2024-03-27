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

update de bd with new cocktails 

  async function insertCocktails() {
  try {
    for (const cocktail of cocktails) {
      const { data: existingCocktail, error } = await supabase
        .from('cocktails')
        .select('id')
        .eq('id', cocktail.idDrink)
        .single();

      if (error) {
        throw error;
      }

      if (!existingCocktail) {
        const { data: insertedCocktail, error: insertError } = await supabase
          .from('cocktails')
          .insert({
            id: cocktail.idDrink,
            name: cocktail.strDrink,
            category: cocktail.strCategory || '',
            alcoholic: cocktail.strAlcoholic || '',
            glass: cocktail.strGlass || '',
            instructions: cocktail.strInstructions || '',
            thumb_url: cocktail.strDrinkThumb || '',
          });

        if (insertError) {
          console.error(`Erro ao inserir cocktail ${cocktail.idDrink}:`, insertError);
        } else {
          console.log(`Cocktail com ID ${cocktail.idDrink} inserido com sucesso.`);
        }
      } else {
        console.log(`Cocktail com ID ${cocktail.idDrink} já existe no banco de dados.`);
      }
    }
  } catch (error) {
    console.error('Erro ao inserir cocktails:', error.message || error);
  }
}
