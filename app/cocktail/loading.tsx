export default function Loading() {
	return (
		<div className="cocktail-details mt-5">
			<div className="flex flex-row gap-8 m-4">
				<div className="w-80 h-80 rounded-md shadow-lg bg-gray-300 animate-pulse" />
				<div className="flex flex-col gap-4 rounded-md">
					<h2 className="text-4xl font-bold bg-gray-300 animate-pulse  w-96 min-w-96 rounded-md">
						&nbsp;
					</h2>
					<p className="bg-gray-300 animate-pulse w-96 min-w-96 rounded-md">
						&nbsp;
					</p>
					<p className="bg-gray-300 animate-pulse w-96 min-w-96 rounded-md">
						&nbsp;
					</p>
					<div className="mt-4 gap-4">
						<h3 className="text-2xl font-bold bg-gray-300 animate-pulse w-96 min-w-96 rounded-md">
							&nbsp;
						</h3>
						<ul className="list-disc pl-4 bg-gray-300 animate-pulse w-96 min-w-96 rounded-md">
							&nbsp;
						</ul>
					</div>
				</div>
			</div>
			<div className="px-8">
				<h3 className="text-2xl font-bold bg-gray-300 animate-pulse w-96 min-w-96 rounded-md">
					&nbsp;
				</h3>
				<p className="bg-gray-300 animate-pulse w-96 min-w-96 rounded-md">
					&nbsp;
				</p>
			</div>
		</div>
	);
}
