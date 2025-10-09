<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import HeadingTitle from './HeadingTitle.svelte';
	import HeadingParagraph from './HeadingParagraph.svelte';
	import { IconChevronDown } from '@tabler/icons-svelte';

	let titleStats = 'Les Statistiques';
	let statIntro =
		"Synthétisme et efficacité sont les maîtres mots pour une description du tableau de bord. Quelle que soit la taille de votre entreprise, vous trouverez sur le tableau de bord tous les indicateurs importants pour vos analyses et prises de décisions. Grâce au « tout-en-un » proposé par notre application SilverStock, le tableau de bord se consulte en un coup d'œil. Un panel statistique des plus complet s'offre à vous avec une facilité de lecture ainsi qu'une intuitivité et réactivité remarquable. Du chiffre d'affaires au nombre de nouveaux clients, en passant par le panier moyen et le classement des meilleures ventes en direct (et bien d'autres indicateurs), la puissance synthétisée des tendances globales de votre activité se trouve ici.";
	
	let { imagesTabAccordion = [], sectionsTabAccordion = [] } = $props();

	let openIndex = $state(0);
	let selectedImage = $state(0);
	let accordionSection;

	function toggleAccordion(index) {
		if (openIndex === index) {
			openIndex = -1;
		} else {
			openIndex = index;
			selectedImage = index;
		}
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const triggers = [];

		// Animation de l'accordéon (slide from left)
		const accordionAnim = gsap.fromTo(
			'.accordion-container',
			{ opacity: 0, x: -80 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: accordionSection,
					start: 'top 75%',
					end: 'top 30%',
					toggleActions: 'play none none reverse',
					markers: true,
					scrub: 1
				}
			}
		);
		if (accordionAnim.scrollTrigger) triggers.push(accordionAnim.scrollTrigger);

		// Animation de l'image (slide from right)
		const imageAnim = gsap.fromTo(
			'.accordion-image',
			{ opacity: 0, x: 80 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: accordionSection,
					start: 'top 75%',
					end: 'top 30%',
					toggleActions: 'play none none reverse',
					markers: true,
					scrub: 1
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

<section id="statistiques" class="flex justify-center mt-20 px-4">
	<div class="lg:w-8/12 w-full">
		<HeadingTitle title={titleStats} />
		<HeadingParagraph content={statIntro} />
	</div>
</section>

<section bind:this={accordionSection} class="w-full my-10 px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-screen-2xl">
		<div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
			<!-- Accordéon -->
			<div class="accordion-container w-full lg:w-2/5 xl:w-1/3">
				<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
					{#each sectionsTabAccordion as section, index}
						<div class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
							<button
								type="button"
								class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left text-gray-900 dark:text-white transition-all duration-200 {openIndex === index 
									? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
									: 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}"
								onclick={() => toggleAccordion(index)}
								aria-expanded={openIndex === index}
							>
								<span class="flex-1 text-sm sm:text-base">{section.title}</span>
								<IconChevronDown 
									class="w-5 h-5 flex-shrink-0 ml-3 transition-transform duration-300 {openIndex === index ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}"
								/>
							</button>
							{#if openIndex === index}
								<div class="px-5 py-4 bg-gray-50 dark:bg-gray-900/30 animate-accordion-down">
									<p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
										{section.content}
									</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<!-- Image -->
			<div class="accordion-image w-full lg:w-3/5 xl:w-2/3">
				<div class="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
					{#if imagesTabAccordion[selectedImage]}
						<img 
							src={imagesTabAccordion[selectedImage]} 
							alt="Statistiques - {sectionsTabAccordion[selectedImage]?.title || 'aperçu'}"
							class="w-full h-full object-contain transition-opacity duration-300"
							loading="lazy"
						/>
					{:else}
						<div class="flex items-center justify-center h-full">
							<p class="text-gray-400 dark:text-gray-500">Aucune image disponible</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes accordion-down {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 500px;
		}
	}

	.animate-accordion-down {
		animation: accordion-down 0.3s ease-out;
	}
</style>
