<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	let { content = '' } = $props();
	let paragraphElement = $state();

	onMount(() => {
		if (!paragraphElement) return;
		

		const triggers = [];

		// Animation du paragraphe (fade + slide from bottom)
		const paragraphAnim = gsap.fromTo(
			paragraphElement,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: paragraphElement,
					start: 'top 85%',
					end: 'top 30%',
					scrub: 1
				}
			}
		);
		if (paragraphAnim.scrollTrigger) triggers.push(paragraphAnim.scrollTrigger);

		// Cleanup - ne tue que les triggers de ce composant
		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

{#if content}
	<article bind:this={paragraphElement} class="flex w-full py-6 sm:py-8 lg:py-10 flex-col">
		<div class="w-full px-4 sm:px-5">
			<p class="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-slate-300 text-center lg:text-left">
				{content}
			</p>
		</div>
	</article>
{/if}
