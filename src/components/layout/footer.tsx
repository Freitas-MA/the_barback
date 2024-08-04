import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import { FaCookieBite } from "react-icons/fa";
import Link from "next/link";

export default function AppSignature() {
	return (
		<div className="absolute flex flex-row w-screen h-4 md:h-12 bottom-0 justify-between pl-4 items-center text-center bg-slate-300 bg-opacity-90">
			<p className="text-sm scale-50 md:scale-100">
				<span className="font-thin">Designed by: </span>
				<a href="https://portfolio-sepia-eight-67.vercel.app/" target="__blank">
					MFreitas
				</a>
			</p>
			<div className="flex justify-center items-center pr-4 grayscale scale-50 md:scale-100">
				<SocialIcon
					style={{ scale: "0.5" }}
					url="https://github.com/Freitas-MA"
					target="__blank"
				/>
				<SocialIcon
					style={{ scale: "0.5" }}
					url="https://www.linkedin.com/in/freitas-marcos/"
					target="__blank"
				/>
				<div className="border border-black md:h-8 h-4 mr-2" />
				<Link href="/privacy-policy" className="scale-150 mx-2 ">
					<FaCookieBite />
				</Link>
			</div>
		</div>
	);
}
