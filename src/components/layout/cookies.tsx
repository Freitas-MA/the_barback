"use client";
import { useState, useEffect } from "react";

interface CookiesNoticeProps {
	className?: string; // Optional className prop
}

const CookiesNotice: React.FC<CookiesNoticeProps> = ({ className }) => {
	const [acceptedCookies, setAcceptedCookies] = useState<boolean>(false);

	useEffect(() => {
		const cookiesAccepted = document.cookie.includes("cookiesAccepted=true");
		if (!cookiesAccepted) {
			setAcceptedCookies(false);
		}
	}, []);

	const handleAcceptCookies = () => {
		document.cookie = "cookiesAccepted=true";
		setAcceptedCookies(true);
	};

	return (
		<>
			{!acceptedCookies && (
				<div
					className={`${className} cookieCard flex flex-col items-start justify-center gap-4 p-4 relative overflow-hidden`}
				>
					<div className="absolute right-[-25%] top-[-25%] z-1 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-400" />
					<p className="cookieHeading text-xl font-bold text-white z-2">
						Cookies.
					</p>
					<p className="cookieDescription text-base text-white z-2">
						This website uses cookies for a better user experience. By
						continuing to use this site, you accept the use of cookies.{" "}
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a href="#" className="text-white">
							What for?
						</a>
					</p>
					<button
						type="button"
						className="acceptButton px-4 py-2 text-white font-bold bg-purple-600 hover:bg-purple-700 rounded transition duration-200 ease-in-out z-2"
						onClick={handleAcceptCookies}
					>
						Ok!
					</button>
				</div>
			)}
		</>
	);
};

export default CookiesNotice;
