import Link from "next/link";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

interface CookiesNoticeProps {
	className?: string; // Optional className prop
}

const CookiesNotice: React.FC<CookiesNoticeProps> = async ({ className }) => {
	const hasAcceptedCookies = cookies().has("cookiesAccepted");

	console.log("Cookie", hasAcceptedCookies);

	const handleAcceptCookies = async () => {
		"use server";
		cookies().set("cookiesAccepted", "false");

		console.log("Button clicked");
	};
	//
	return (
		<>
			{!hasAcceptedCookies && (
				<div className={`${className}`}>
					<p className="cookieHeading text-xl font-bold z-2">Cookies.</p>
					<p className="cookieDescription flex flex-col text-base z-2">
						This website uses cookies for a better user experience. By
						continuing to use this site, you accept the use of cookies.{" "}
						<Link className="text-blue-400" href="/privacy-policy">
							Learn more
						</Link>
					</p>
					<form action={handleAcceptCookies}>
						<button
							type="submit"
							className="acceptButton w-32 mt-4 px-4 py-2 font-bold shadow-md bg-white hover:bg-slate-200 rounded transition duration-200 ease-in-out z-2"
						>
							Ok!
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default CookiesNotice;
