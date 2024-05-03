"use client";
import { useEffect, useState } from "react";
import TheBarback from "#/public/TheBarback.gif";
import Image from "next/image";

function SvgAnimatedOpening(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
	const [open, setOpen] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setOpen(false);
		}, 5500);
	}, []);

	// if (!open) return null;

	return (
		<div className="absolute top-0 left-0 w-full h-full z-50 bg bg-transparent">
			<Image
				src={TheBarback.src}
				width={350}
				height={300}
				alt="The Barback"
				className="z-50 bg bg-transparent"
			/>
		</div>
	);
}

export default SvgAnimatedOpening;
