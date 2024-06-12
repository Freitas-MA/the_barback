"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface CookiesNoticeProps {
	className?: string; // Optional className prop
}

const CookiesNotice: React.FC<CookiesNoticeProps> = async ({ className }) => {
	const router = useRouter();
	const handleAcceptCookies = async (e: React.FormEvent) => {
		e.preventDefault();
		const expirationDate = new Date();
		expirationDate.setFullYear(expirationDate.getFullYear() + 1);
		document.cookie = `cookiesAccepted=true; expires=${expirationDate.toUTCString()}; path=/`;
		router.refresh();
	};
	return (
		<>
			<div className={`${className}`}>
				<p className="cookieHeading text-xl font-bold z-2">C
					ookies.
					
					</p>
				<p className="cookieDescription flex flex-col text-base z-2">
					This website uses cookies for a better user experience. By continuing
					to use this site, you accept the use of cookies.{" "}
					<Link className="text-blue-400" href="/privacy-policy">
						Learn more
					</Link>
				</p>
				<button
					type="submit"
					className="acceptButton w-32 mt-4 px-4 py-2 font-bold shadow-md bg-white hover:bg-slate-200 rounded transition duration-200 ease-in-out z-2"
					onClick={handleAcceptCookies}
				>
					Ok!
				</button>
			</div>
		</>
	);
};

export default CookiesNotice;
