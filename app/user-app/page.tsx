// Import necessary components and libraries
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getUniqueDrinks } from "@/components/handlers/scrapCocktail";
import ClientButton from "./../../components/handlers/clientButton";
import SearchBar from "@/components/searchBar/seachBar";

export default async function page() {
  let drink;
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
  return (
    <div className="flex flex-col min-h-screen w-full">
      <SearchBar/>
      <ClientButton className='flex flex-row flex-wrap border border-blue-500 w-full justify-center items-center mt-5'/>
    </div>
  );
}
