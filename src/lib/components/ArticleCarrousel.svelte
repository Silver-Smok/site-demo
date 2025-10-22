<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { images } from './+server.js';
	import { IconChevronLeft, IconChevronRight } from '@tabler/icons-svelte';

	let currentIndex = $state(0);
	let isTransitioning = $state(false);
	let carouselSection;

	function nextSlide() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex + 1) % images.length;
		setTimeout(() => isTransitioning = false, 300);
	}

	function prevSlide() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		setTimeout(() => isTransitioning = false, 300);
	}

	function goToSlide(index) {
		if (isTransitioning || index === currentIndex) return;
		isTransitioning = true;
		currentIndex = index;
		setTimeout(() => isTransitioning = false, 300);
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const triggers = [];

		// Animation du carousel (slide from left + scale)
		const carouselAnim = gsap.fromTo(
			'.carousel-container',
			{ opacity: 0, x: -80, scale: 0.9 },
			{
				opacity: 1,
				x: 0,
				scale: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: carouselSection,
					start: 'top 75%',
					end: 'top 25%',
					scrub: 1
				}
			}
		);
		if (carouselAnim.scrollTrigger) triggers.push(carouselAnim.scrollTrigger);

		// Animation du contenu à droite (slide from right)
		const contentAnim = gsap.fromTo(
			'.carousel-content',
			{ opacity: 0, x: 80 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: carouselSection,
					start: 'top 75%',
					end: 'top 25%',
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

<section bind:this={carouselSection} class="py-5">
	<div class="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Carousel -->
			<div class="carousel-container relative z-10 flex items-center justify-center">
				<div class="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-2xl">
					<!-- Images -->
					{#each images as image, i}
						<div
							class="absolute inset-0 transition-all duration-300 ease-in-out {currentIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}"
						>
							<img 
								src={image.imgurl} 
								alt={image.name}
								class="w-full h-full object-contain"
								loading="lazy"
							/>
						</div>
					{/each}

					<!-- Boutons de navigation -->
					<button
						type="button"
						onclick={prevSlide}
						class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 rounded-full p-2 transition-all duration-200 shadow-lg"
						aria-label="Image précédente"
					>
						<IconChevronLeft class="w-6 h-6 text-white" />
					</button>

					<button
						type="button"
						onclick={nextSlide}
						class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 rounded-full p-2 transition-all duration-200 shadow-lg"
						aria-label="Image suivante"
					>
						<IconChevronRight class="w-6 h-6 text-white" />
					</button>

					<!-- Indicateurs -->
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
						{#each images as _, i}
							<button
								type="button"
								onclick={() => goToSlide(i)}
								class="w-3 h-3 rounded-full transition-all duration-200 {currentIndex === i 
									? 'bg-blue-600 dark:bg-blue-500 w-8' 
									: 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}"
								aria-label="Aller à l'image {i + 1}"
							></button>
						{/each}
					</div>

					<!-- Légende -->
					<div class="absolute bottom-12 left-0 right-0 z-20 text-center px-4">
						<p class="text-sm sm:text-base font-medium text-white bg-gray-800/70 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
							{images[currentIndex].name}
						</p>
					</div>
				</div>
			</div>

			<!-- Contenu -->
			<div
				class="carousel-content relative flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-950 rounded-xl lg:rounded-l-none shadow-2xl"
			>
				<span
					class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 rounded-l-xl bg-gradient-to-r from-indigo-700 to-blue-600"
				></span>

				<div class="p-8 sm:p-12 lg:p-16 xl:p-24">
					<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
						Une gestion évidente de vos Gammes Liquides
					</h2>

					<p class="mt-4 text-base sm:text-lg text-blue-50 dark:text-blue-100 leading-relaxed">
						Recherchez et gérez vos gammes liquides de manière simple avec un système de tag.
						Cumulez les tags pour affiner vos recherches et trouver rapidement les produits que vous
						cherchez. La gestion de vos gammes liquides n'a jamais été aussi simple et boostera la
						formation et l'autonomie de vos équipes.
					</p>

					<a
						href="/contact"
						class="mt-8 inline-block rounded-lg border-2 border-white bg-white px-8 sm:px-12 py-3 text-sm sm:text-base font-semibold text-blue-700 hover:bg-blue-50 hover:border-blue-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 shadow-lg"
					>
						Essayez maintenant
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
