import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { setCookieFavorite } from "@/actions/setCookies";
import { cookies } from "next/headers";

interface CookieButtonProps {
	name: string;
	value: string;
}
export const CookieButton: React.FC<CookieButtonProps> = ({ name, value }) => {
	async function isFavorite() {
		const cookie = await cookies().get("SearchHistory");
		const valores = cookie.value;

		if (valores?.includes("mojito")) {
			return true;
		} else {
			return false;
		}
	}

	isFavorite().then((res) => {
		console.log("É favorito?", res);
	});
	return (
		<button type="button" className="absolute right-2 top-2 z-50">
			<FaRegStar />
		</button>
	);
};
