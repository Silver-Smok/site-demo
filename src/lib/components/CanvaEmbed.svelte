<script>
	let {
		src,
		title = "Présentation Canva",
		linkUrl,
		linkText
	} = $props();
</script>

<article class="flex flex-col gap-6 items-center w-full max-w-5xl mx-auto">
	<div class="relative w-full h-0 pb-[56.25%] shadow-xl rounded-lg overflow-hidden will-change-transform">
		<iframe
			loading="lazy"
			class="absolute inset-0 w-full h-full border-0"
			{src}
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
