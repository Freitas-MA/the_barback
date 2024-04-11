import { CardLoader } from "@/components/common/cardLoader";

export default function loading() {
	return (
		<div className="flex flex-row flex-wrap w-full justify-center items-center mt-12 gap-5 opacity-50">
			{Array(10)
				.fill(0)
				.map((_, i) => (
					/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */
					<CardLoader key={i} />
				))}
		</div>
	);
}
