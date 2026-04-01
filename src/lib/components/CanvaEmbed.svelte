<script>
	let {
		src,
		title = "Présentation Canva",
		linkUrl,
		linkText
	} = $props();

	let iframeRef = $state(null);

	// Réagit aux changements de src pour naviguer sans recharger
	$effect(() => {
		if (iframeRef && src) {
			// Extraire le hash de la nouvelle URL
			const newHash = src.includes('#') ? src.split('#')[1] : '';
			const currentSrc = iframeRef.src;
			const baseUrl = currentSrc.split('#')[0];
			const newUrl = src.split('#')[0];

			// Si c'est la même base URL, on change juste le hash
			if (baseUrl === newUrl && newHash) {
				try {
					// Tenter de changer le hash via contentWindow
					iframeRef.contentWindow.location.hash = newHash;
				} catch (e) {
					// Si cross-origin bloque, on modifie le src complet
					iframeRef.src = src;
				}
			} else {
				// URL différente, on recharge
				iframeRef.src = src;
			}
		}
	});
</script>

<article class="flex flex-col gap-6 items-center w-full max-w-5xl mx-auto">
	<div class="relative w-full h-0 pb-[56.25%] shadow-xl rounded-lg overflow-hidden will-change-transform">
		<iframe
			bind:this={iframeRef}
			loading="lazy"
			class="absolute inset-0 w-full h-full border-0"
			src={src}
			{title}
			allowfullscreen
			allow="fullscreen"
		></iframe>
	</div>
	{#if linkUrl && linkText}
		<a
			href={linkUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="text-[#2594E4] hover:text-[#2528e4] transition-colors underline text-sm font-medium"
		>
			{linkText}
		</a>
	{/if}
</article>
