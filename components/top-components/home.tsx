// Import necessary components and libraries
import dynamic from "next/dynamic";
import CocktailsHome from "./cocktails.home";
import Link from "next/link";

const HomeSection = () => {
	return (
		<section className="flex flex-col min-h-screen w-full">
			<CocktailsHome />
		</section>
	);
};

export default HomeSection;
