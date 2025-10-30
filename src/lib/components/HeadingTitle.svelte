<script>
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	let { title } = $props();
	let headingElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const triggers = [];

		const titleAnim = gsap.fromTo(
			headingElement,
			{ opacity: 0, y: -30 },
			{
				opacity: 1,
				y: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: headingElement,
					start: 'top 85%',
					end: 'top 30%',
					scrub: 1
				}
			}
		);
		if (titleAnim.scrollTrigger) triggers.push(titleAnim.scrollTrigger);

		// Cleanup - ne tue que les triggers de ce composant
		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

<h1 bind:this={headingElement} class="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center">
	<span class="bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-300 bg-clip-text text-transparent">
		{title}
	</span>
</h1>