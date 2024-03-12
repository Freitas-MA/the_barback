// Import necessary components and libraries
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getUniqueDrinks } from "@/components/handlers/scrapCocktail";
import ClientButton from "./../../components/handlers/clientButton";

export default async function page() {
  let drink;
  const supabase = createServerComponentClient({ cookies });
  const scrapCocktail = async () => {
    console.log("Clicou");
    const cocktailList = await getUniqueDrinks();
    console.log("Cocktail List", cocktailList);
    // for(let cocktail of cocktailList) {
    //   const { data, error } = await supabase.from('cocktails').upsert({drinks: cocktail});
    //   console.log("Data", data);
    //   console.log("Error", error);
    // }
  };
  const { data, error } = await supabase.from("cocktails").select("drinks");
  const listDrinks = data;
  // await console.log("Teste", data);
  // const consoleData = async () => {
  //   console.log("Data", data);
  //   console.log("Error", error);
  // }

  // Uploading the List of drinks to the Supabase database
  return (
    <div className="flex flex-row mt-10">
      <ClientButton className='flex flex-col w-[20px]'/>
    </div>
  );
}
