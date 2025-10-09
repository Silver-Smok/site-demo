<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Heading, Li, List } from 'flowbite-svelte';
	import ButtonOne from './ButtonOne.svelte';

	export let tabCTA = {};
	export let borderImage = 'sm:rounded-tl-[30px] md:rounded-tl-[60px]';
	export let layout = 'xl:flex-row';
	export let buttonAttributs = {};
	export let title =
		'Notre application offre une fiche produit qui permet de centraliser toutes les informations importantes sur vos produits. Elle permet notamment de :';
	export let tabList = [];
	
	let ctaSection;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

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
					markers: true
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
					markers: true
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
				<Heading
					tag="h2"
					customSize="text-lg font-semibold"
					class="mb-5 pt-10 text-lg font-semibold text-gray-900 dark:text-white">{title}</Heading
				>
				<List tag="ul" class="space-y-1">
					{#each tabList as list}
						<Li>{list.content}</Li>
					{/each}
				</List>
			{/if}

			<div class="mt-4 md:mt-8">
				<ButtonOne {buttonAttributs} />
			</div>
		</div>
	</div>

	<img
		alt={tabCTA.alt}
		src={tabCTA.src}
		class="z-[100] cta-image h-full 2xl:max-w-3xl max-w-xl object-cover sm:h-[calc(100%_-_2rem)] sm:self-center md:h-[calc(100%_-_4rem)] {borderImage} "
	/>
</section>
