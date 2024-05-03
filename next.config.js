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
};

module.exports = withPWA(nextConfig);
