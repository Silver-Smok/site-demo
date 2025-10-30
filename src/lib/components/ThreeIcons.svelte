<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	export let header = {};
	export let iconsTab = [];
	
	let threeIconsSection;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const triggers = [];

		// Animation du titre
		const titleAnim = gsap.fromTo(
			'.three-icons-title',
			{ opacity: 0, y: -30 },
			{
				opacity: 1,
				y: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: threeIconsSection,
					start: 'top 75%',
					end: 'top 25%',
					scrub: 2
				}
			}
		);
		if (titleAnim.scrollTrigger) triggers.push(titleAnim.scrollTrigger);

		const cardsAnim = gsap.fromTo(
			'.icon-card',
			{
				opacity: 0,
				y: 60,
				scale: 0.85
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: threeIconsSection,
					start: 'top 75%',
					end: 'top 25%',
					scrub: 1
				}
			}
		);
		if (cardsAnim.scrollTrigger) triggers.push(cardsAnim.scrollTrigger);

		// Cleanup - ne tue que les triggers de ce composant
		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

<section bind:this={threeIconsSection} class="py-10 bg-white dark:text-white dark:bg-slate-900">
	<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
		<div class="three-icons-title mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-gray-200 sm:text-4xl">
				{header.title}
			</h2>
			{#if header.content}
				<p class="mt-4 text-gray-500 sm:text-xl">{header.content}</p>
			{/if}
		</div>

		<div class="mt-8 sm:mt-12">
			<div
				class="flex flex-wrap justify-center gap-5"
			>
				{#each iconsTab as box}
					<a href={box.href} class="mx-4">
						<div
							class="icon-card flex flex-col min-h-full max-w-xs w-screen {box.bgbox} justify-center rounded-lg dark:border-gray-500 px-4 py-8 text-center border p-8 shadow-xl hover:border-[#23B7E5] dark:hover:shadow-[#23B7E5] hover:shadow-[#3a9ac7]/50 {box.href ? 'cursor-pointer' : 'cursor-default'}"
						>
							{#if box.title}
								<dt class="order-last text-lg font-medium text-gray-500 dark:text-gray-400 py-5">
									{box?.title}
								</dt>
							{/if}
							{#if box.content}
								<dt class="order-last text-lg font-medium text-gray-500 dark:text-gray-400 py-5">
									<p>{box?.content}</p>
								</dt>
							{/if}
							<dd class="flex justify-center">
								<img src={box.src} alt={box.alt} class={box.width} />
							</dd>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
