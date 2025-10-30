<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import HeadingTitle from './HeadingTitle.svelte';
	import HeadingParagraph from './HeadingParagraph.svelte';
	
	let titleStocks = 'Gestion de Stocks';
	let activeTab = $state(0);
	let tabSection;

	let stockIntro =
		"Toute la chaîne de vie d'un produit au sein de l'entreprise est gérée par l'application, de son arrivée au dépôt à sa remise au client lors de la finalisation de la vente. Grâce à un algorithme de prévision des besoins basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. En effet, tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures dans le même temps !";

	const tabAccordion = [
		{
			title: 'Gestion des stocks',
			content: 'Visualisez l’ensemble de vos stocks ',
			src: '/appStocks1.png',
			alt: 'Stocks des boutiques'
		},
		{
			title: "Gestion d'un stock boutique",
			content: " Visualisez et gérez l'état des stocks de chaque boutique",
			src: '/appStocks2.png',
			alt: 'Stocks des boutiques'
		},
		{
			title: 'Détails réassort',
			content: 'Consultez les détails des réassorts',
			src: '/appStocks3.png',
			alt: 'Stocks des boutiques'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const triggers = [];

		// Attendre que le DOM soit complètement rendu
		setTimeout(() => {
			// Animation des tabs (fade + slide from bottom)
			const tabsAnim = gsap.fromTo(
				'.tab-buttons',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: tabSection,
						start: 'top bottom', // Quand le haut du composant touche le bas du viewport
						end: 'bottom top',   // Quand le bas du composant touche le haut du viewport
						scrub: 1
					}
				}
			);
			if (tabsAnim.scrollTrigger) triggers.push(tabsAnim.scrollTrigger);

			// Animation du contenu des tabs (fade + scale) - légèrement décalée
			const contentAnim = gsap.fromTo(
				'.tab-content-container',
				{ opacity: 0, scale: 0.95 },
				{
					opacity: 1,
					scale: 1,
					duration: 1,
					ease: 'power2.out',
					delay: 0.2,
					scrollTrigger: {
						trigger: tabSection,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1
					}
				}
			);
			if (contentAnim.scrollTrigger) triggers.push(contentAnim.scrollTrigger);
		}, 100);

		// Cleanup - ne tue que les triggers de ce composant
		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

<section id="stocks" class="flex justify-center mt-20 px-4">
	<div class="lg:w-8/12 w-full">
		<HeadingTitle title={titleStocks} />
		<HeadingParagraph content={stockIntro} />
	</div>
</section>

<section bind:this={tabSection} class=" mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
	<!-- Navigation des tabs -->
	<div class="tab-buttons border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
		<ul class="flex flex-nowrap sm:flex-wrap -mb-px text-sm font-medium text-center min-w-max sm:min-w-0" role="tablist">
			{#each tabAccordion as tab, i}
				<li class="flex-shrink-0 sm:flex-shrink">
					<button
						type="button"
						role="tab"
						aria-selected={activeTab === i}
						aria-controls="tabpanel-{i}"
						onclick={() => (activeTab = i)}
						class="inline-flex items-center justify-center px-3 py-3 sm:px-4 sm:py-4 border-b-2 rounded-t-lg transition-all duration-200 whitespace-nowrap text-xs sm:text-sm md:text-base {activeTab === i
							? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500 font-semibold'
							: 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}"
					>
						{tab.title}
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Contenu des tabs -->
	<div class="tab-content-container mt-6 sm:mt-8">
		{#each tabAccordion as tab, i}
			{#if activeTab === i}
				<div 
					id="tabpanel-{i}"
					role="tabpanel"
					aria-labelledby="tab-{i}"
					class="animate-fade-in"
				>
					<div class="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 mb-6">
						<h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
							{tab.title}
						</h3>
						<p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
							{tab.content}
						</p>
					</div>
					<div class="rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 max-h-[600px] flex items-center justify-center">
						<img 
							src={tab.src} 
							alt={tab.alt} 
							class="w-full h-auto max-h-[450px] object-contain"
							loading="lazy"
						/>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.3s ease-out;
	}

	/* Masquer la scrollbar tout en gardant le scroll fonctionnel */
	.border-b {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE et Edge */
	}
	
	.border-b::-webkit-scrollbar {
		display: none; /* Chrome, Safari et Opera */
	}
</style>
