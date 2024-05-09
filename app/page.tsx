// Import necessary modules
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cocktailsConstructor } from "@/actions/randomCocktail";
import CardCocktail from "@/components/card/card"
import { v4 as uuidv4 } from 'uuid';

export default async function Home() {
	// // Initialize a variable to track if the user is logged in
	// let loggedIn = false;

	// try {
	// 	// Create a Supabase client using the server-side authentication helper
	// 	const supabase = createServerComponentClient({ cookies });
	// 	// Get the session data from Supabase
	// 	const {
	// 		data: { session },
	// 	} = await supabase.auth.getSession();

	// 	// If a session exists, set the loggedIn variable to true
	// 	if (session) {
	// 		loggedIn = true;
	// 	}
	// } catch (error) {
	// 	// Log any errors that occur during the authentication process
	// 	console.log("Home", error);
	// }

	// If the user is not logged in, render the AuthSection component
	const localUrl = process.env.NEXT_PUBLIC_BASE_URL;
	const cocktails = await cocktailsConstructor(localUrl);
	const className =
		"flex flex-row flex-wrap w-full justify-center items-start mt-5";


	return (
		<>
			<div className={className}>
				{cocktails ? (
					<section className={className}>
						{cocktails.map((cocktail) => (
							<CardCocktail key={cocktail.idDrink} {...cocktail} />
						))}
					</section>
				) : null}
			</div>
		</>
	);
}