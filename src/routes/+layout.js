import { dev } from '$app/environment';

// Only load Vercel analytics in production to improve dev performance
if (!dev) {
	import('@vercel/analytics/sveltekit').then(({ injectAnalytics }) => {
		injectAnalytics({ mode: 'production' });
	});

	import('@vercel/speed-insights/sveltekit').then(({ injectSpeedInsights }) => {
		injectSpeedInsights();
	});
}