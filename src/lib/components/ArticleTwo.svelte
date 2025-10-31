<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import ButtonOne from './ButtonOne.svelte';

	let { obj = {}, buttonAttributs = {} } = $props();

	let articleSection;

	onMount(() => {

		const triggers = [];

		// Sélecteurs scoped : cible uniquement les éléments dans CE articleSection
		const articleImage = articleSection.querySelector('.article-image');
		const articleContent = articleSection.querySelector('.article-content');

		const imageAnim = gsap.fromTo(
			articleImage,
			{ opacity: 0, x: 160 },
			{
				opacity: 1,
				x: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: articleSection,
					start: 'top 50%',
					end: 'top 25%',
					scrub: 1
				}
			}
		);
		if (imageAnim.scrollTrigger) triggers.push(imageAnim.scrollTrigger);

		const contentAnim = gsap.fromTo(
			articleContent,
			{ opacity: 0, x: -60 },
			{
				opacity: 1,
				x: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: articleSection,
					end: 'top 25%',
					start: 'top 50%',
					scrub: 1
				}
			}
		);
		if (contentAnim.scrollTrigger) triggers.push(contentAnim.scrollTrigger);

		// Cleanup - ne tue que les triggers de ce composant
		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

<section bind:this={articleSection} class="py-5 flex items-center">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
			<div
				class="article-image relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full shadow-[#0565be]/50 shadow-xl"
			>
				<img alt={obj.alt} src={obj.src} loading="lazy" decoding="async" class="absolute inset-0 h-full w-full" />
			</div>

			<div class="article-content lg:py-24">
				<h2 class="text-3xl font-bold sm:text-4xl dark:text-slate-100">{obj.title}</h2>

				<p class="mt-4 text-gray-600 dark:text-gray-400">
					{obj.content}
				</p>
				{#if buttonAttributs.href}
					<div class="py-8">
						<ButtonOne {buttonAttributs} />
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
