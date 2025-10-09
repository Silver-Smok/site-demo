<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let boxesContent = [];

	let boxesContainer;

	onMount(() => {
		console.log("Boxes section mounted");
		gsap.registerPlugin(ScrollTrigger);

		const triggers = [];

		const boxesAnim = gsap.fromTo(
			'.box-item',
			{
				opacity: 0,
				y: 60,
				scale: 0.8,
				rotationX: -15
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				rotationX: 0,
				duration: 0.8,
				stagger: 0.15, 
				ease: 'power3.out',
				scrollTrigger: {
					trigger: boxesContainer,
					start: 'top 70%',
					end: 'top 20%',
					toggleActions: 'play none none reverse',
					scrub: 1
				}
			}
		);
		if (boxesAnim.scrollTrigger) triggers.push(boxesAnim.scrollTrigger);

		const titleAnim = gsap.fromTo(
			'.boxes-title',
			{
				opacity: 0,
				y: -30
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: boxesContainer,
					start: 'top 85%',
					end: 'top 30%',
					toggleActions: 'play none none reverse',
					scrub: 1
				}
			}
		);
		if (titleAnim.scrollTrigger) triggers.push(titleAnim.scrollTrigger);

		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

<section bind:this={boxesContainer} class="bg-transparent">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<div class="mx-auto max-w-lg text-center boxes-title">
			<h2 class="text-3xl font-bold sm:text-4xl">Bénéficiez d'une vue d'ensemble</h2>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each boxesContent as box}
				<a
					class="box-item block rounded-xl border dark:border-gray-800 p-8 shadow-xl dark:hover:border-[#23B7E5] dark:hover:shadow-[#23B7E5] hover:shadow-[#3a9ac7]/50"
					href={box.href}
				>
					<svelte:component this={box.component} size={36} color="#23B7E5" />

					<h3 class="text-xl font-bold mb-2">{box.title}</h3>

					<p class="dark:text-gray-300">{box.content}</p>
				</a>
			{/each}
		</div>
	</div>
</section>


