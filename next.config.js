/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		USERS_API_URL: "https://frontend-test-assignment-api.abz.agenc/api/v1/users/",
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60,
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	deviceSizes: [320, 360, 400, 425, 480, 640, 750, 768, 800, 828, 980, 1024, 1050, 1100, 1180, 1200, 1540, 1920, 2048, 3840],
	remotePatterns: [
		{
			protocol: 'https',
			hostname: 'frontend-test-assignment-api.abz.agency',
			port: '',
		},
	]
}

module.exports = nextConfig
