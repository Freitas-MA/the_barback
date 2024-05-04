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
			{
				protocol: "https",
				hostname: "www.thecocktaildb.com",
				port: "",
				pathname: "/images/**",
			}
		],
	},
	async headers() {
		return [
			{
				source: "/api/cocktaildb",
				headers: [
					{
					  key: 'Cache-Control',
					  value: 'no-store, max-age=0',
					},
				  ],
			},
		];
	},
};

module.exports = withPWA(nextConfig);
