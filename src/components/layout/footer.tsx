import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

export default function AppSignature() {
	return (
		<div className="flex flex-row mb-8 md:mb-0 h-12 bottom-0 left-5 pl-4 items-center text-center">
			<p className="text-sm">
				<span className="font-thin">Designed by: </span>
				<a href="https://portfolio-sepia-eight-67.vercel.app/" target="__blank">
					MFreitas
				</a>
			</p>
			<div className="grayscale">
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
			</div>
		</div>
	);
}
