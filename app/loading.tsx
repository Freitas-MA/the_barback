import { CardLoader } from "@/components/card/cardLoader";
import { v4 as uuidv4 } from "uuid";

export default function loading() {
	return (
		<div className="flex flex-row flex-wrap w-full justify-center items-center mt-12 gap-5 opacity-50">
			{Array(10)
				.fill(0)
				.map((_, i) => (
					<CardLoader key={uuidv4()} />
				))}
		</div>
	);
}
