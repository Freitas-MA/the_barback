// Import necessary components and libraries
import dynamic from "next/dynamic";
import CocktailsHome from "./cocktails.home";



const HomeSection = () => {



	return (
		<section className="flex flex-col min-h-screen w-full">
			<CocktailsHome />
		</section>
	);
}

export default HomeSection;