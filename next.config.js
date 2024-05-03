const withPWA = require("next-pwa")({
	dest: "public",
});
/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "oiwdggkucckvowjvkwel.supabase.co",
				port: "",
				pathname: "/**",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/api/cocktaildb",
				headers: [
					{
						key: "Cache-Control",
						value: "no-store",
					},
				],
			},
		];
	},
};

module.exports = withPWA(nextConfig);
