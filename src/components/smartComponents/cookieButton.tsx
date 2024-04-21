
import { FaRegStar } from "react-icons/fa6";


interface CookieButtonProps {
	name: string;
	value: string;
}
export const CookieButton: React.FC<CookieButtonProps> = ({ name, value }) => {



	return (
		<button
			type="button"
			className="absolute right-2 top-2 z-50"
		>
			<FaRegStar />
		</button>
	);
};
