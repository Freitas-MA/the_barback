import React from "react";
import { redirect } from "next/navigation";

export default function NotFound() {
  const redirectHome = () => {
    setTimeout(() => {
      redirect("/");
    }, 2000);
  }
  redirectHome();
	return (
		<div className="flex flex-col w-full h-[85vh] justify-center items-center">
			<h1>Oops!</h1>
			<p>We couldn't find the page you're looking for.</p>
			<p>
				But don't worry, you can still explore our delicious cocktail recipes!
			</p>
		</div>
	);
}
