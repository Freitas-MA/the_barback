// Import necessary modules
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import HomeSection from "@/components/top-components/home";
import AuthSection from "@/components/auth/authenticationSection";

export default async function Home() {
	// Initialize a variable to track if the user is logged in
	let loggedIn = false;

	try {
		// Create a Supabase client using the server-side authentication helper
		const supabase = createServerComponentClient({ cookies });
		// Get the session data from Supabase
		const {
			data: { session },
		} = await supabase.auth.getSession();

		// If a session exists, set the loggedIn variable to true
		if (session) {
			loggedIn = true;
      console.log("Home", loggedIn);
		}
	} catch (error) {
		// Log any errors that occur during the authentication process
		console.log("Home", error);
	}

  console.log("Home", loggedIn);

	if (!loggedIn) {
    return <AuthSection />;
	}
	return <HomeSection />;
}
