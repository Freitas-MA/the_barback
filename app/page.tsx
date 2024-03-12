// Import necessary modules
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateAccountForm from "@/components/auth/create-account-form";
import LoginAccountForm from "@/components/auth/login";

// Define the default export function
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
    }
  } catch (error) {
    // Log any errors that occur during the authentication process
    console.log("Home", error);
  } finally {
    // If the user is logged in, redirect them to the "/user-app" page
    if (loggedIn) {
      redirect("/user-app", RedirectType.replace);
    }
  }
  
  // Render the UI components
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <Tabs
        defaultValue="login"
        className="w-[400px] border rounded-md pb-4 shadow-2xl"
      >
        <TabsList className="flex justify-around items-center rounded-b-none h-14 bg-slate-300">
          <TabsTrigger
            value="create-account"
            className="transition-all delay-150 hover:scale-110 "
          >
            Create Account
          </TabsTrigger>
          <TabsTrigger value="login" className="transition-all delay-150 hover:scale-110 ">
            login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create-account">
          <CreateAccountForm />
        </TabsContent>
        <TabsContent value="login">
          <LoginAccountForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
