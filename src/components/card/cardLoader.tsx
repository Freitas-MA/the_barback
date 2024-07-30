const CardLoader = () => {
	// flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-white rounded-md shadow-md p-4 m-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-pulse
	// flex flex-col justify-between text-center items-center gap-2 w-[15rem] h-[18rem] bg-neutral-100 rounded-md shadow-md p-4 m-4 hover:shadow-lg relative

	return (
		<div className="flex flex-col bg-neutral-200 justify-between text-center items-center gap-2 w-[7rem] h-[14rem] md:w-[15rem] md:h-[18rem] animate-pulse rounded-md shadow-md p-4 m-4 hover:shadow-lg relative">
			<div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
			<div className="bg-neutral-400/50 w-full h-20 md:h-36 animate-pulse rounded-md" />
			<div className="flex flex-col gap-2 w-full">
				<div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
				<div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md" />
				<div className="flex flex-row items-center justify-evenly">
					<div className="bg-neutral-400/50 w-1/3 h-4 animate-pulse rounded-md" />
					<div className="bg-neutral-400/50 w-1/3 h-4 animate-pulse rounded-md" />
				</div>
			</div>
		</div>
	);
};

export { CardLoader };
