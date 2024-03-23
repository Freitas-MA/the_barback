// Import necessary components and libraries
import dynamic from "next/dynamic";

export default async function HomeSection() {
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
			<ClientButton className="flex flex-row flex-wrap border border-blue-500 w-full justify-center items-center mt-5" />
		</section>
	);
}
