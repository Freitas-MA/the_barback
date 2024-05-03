const CardLoader = () => {

    // flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-white rounded-md shadow-md p-4 m-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-pulse

	return (
		<div className="flex flex-col bg-neutral-300 justify-between text-center items-center gap-2 w-[15rem] h-[18rem] animate-pulse rounded-xl p-4 mx-4">
			<div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md" />
			<div className="flex flex-col gap-2">
				<div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
				<div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md" />
				<div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
				<div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md" />
			</div>
		</div>
	);
}

export { CardLoader };