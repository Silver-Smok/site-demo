<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import ButtonOne from './ButtonOne.svelte';

	let {
		tabCTA = {},
		borderImage = 'sm:rounded-tl-[30px] md:rounded-tl-[60px]',
		layout = 'xl:flex-row',
		buttonAttributs = {},
		title = 'Notre application offre une fiche produit qui permet de centraliser toutes les informations importantes sur vos produits. Elle permet notamment de :',
		tabList = []
	} = $props();

	let ctaSection;

	onMount(() => {

		const triggers = [];

		// Sélecteurs scoped : cible uniquement les éléments dans CE ctaSection
		const ctaContent = ctaSection.querySelector('.cta-content');
		const ctaImage = ctaSection.querySelector('.cta-image');

		// Animation du texte/contenu - liée au scroll
		const contentAnim = gsap.fromTo(
			ctaContent,
			{ opacity: 0, x: -60 },
			{
				opacity: 1,
				x: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: ctaSection,
					start: 'top 75%',
					end: 'top 25%',
					scrub: 2,
				}
			}
		);
		if (contentAnim.scrollTrigger) triggers.push(contentAnim.scrollTrigger);

		// Animation de l'image - liée au scroll
		const imageAnim = gsap.fromTo(
			ctaImage,
			{ opacity: 0, scale: 0.95, x: 160 },
			{
				opacity: 1,
				scale: 1,
				x: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: ctaSection,
					start: 'top 75%',
					end: 'top 25%',
					scrub: 2,
				}
			}
		);
		if (imageAnim.scrollTrigger) triggers.push(imageAnim.scrollTrigger);

		// Cleanup - ne tue que les triggers de ce composant
		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

<section
	bind:this={ctaSection}
	class=" overflow-hidden bg-transparent flex {layout} flex-col justify-evenly sm:items-center py-5"
>
	<div class="cta-content p-8 md:p-12 lg:px-16 lg:py-24">
		<div class="mx-auto max-w-xl text-center sm:text-left">
			<h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-200">
				{tabCTA.title}
			</h2>
			{#if tabCTA.content}
				<p class=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
					{tabCTA.content}
				</p>
			{:else if tabList}
				<h2 class="mb-5 pt-10 text-lg font-semibold text-gray-900 dark:text-white">
					{title}
				</h2>
				<ul class="space-y-1 text-gray-500 dark:text-gray-400">
					{#each tabList as list}
						<li class="flex items-start">
							<svg class="w-3.5 h-3.5 me-2 mt-0.5 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							{list.content}
						</li>
					{/each}
				</ul>
			{/if}

			<div class="mt-4 md:mt-8">
				<ButtonOne {buttonAttributs} />
			</div>
		</div>
	</div>

	<img
		alt={tabCTA.alt}
		src={tabCTA.src}
		loading="lazy"
		decoding="async"
		class="z-[100] cta-image h-full 2xl:max-w-3xl max-w-xl object-cover sm:h-[calc(100%_-_2rem)] sm:self-center md:h-[calc(100%_-_4rem)] {borderImage} "
	/>
</section>
