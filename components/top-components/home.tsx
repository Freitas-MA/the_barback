// Import necessary components and libraries
import dynamic from "next/dynamic";
import CocktailsHome from "./cocktails.home";



const HomeSection = () => {
	const SearchBar = dynamic(() => import("@/components/searchBar/seachBar"), {
		ssr: false,
	});
	const ClientButton = dynamic(
		() => import("@/components/handlers/clientButton"),
		{
			ssr: false,
		},
	);

	return (
		<section className="flex flex-col min-h-screen w-full">
			<SearchBar />
			<CocktailsHome />
		</section>
	);
}

export default HomeSection;