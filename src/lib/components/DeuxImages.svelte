<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ButtonOne from "./ButtonOne.svelte";

	let { buttonAttributs = {}, twoImgContent = {} } = $props();
	let twoImagesSection;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		const triggers = [];

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {

				// Animation du texte (fade + slide from left)
				const textAnim = gsap.fromTo(
					'.two-images-text',
					{ opacity: 0, x: -60 },
					{
						opacity: 1,
						x: 0,
						duration: 1,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: twoImagesSection,
							start: 'top 75%',
							end: 'top 30%',
							scrub: 1
						}
					}
				);
				if (textAnim.scrollTrigger) triggers.push(textAnim.scrollTrigger);

				// Animation de la première image (slide from bottom-left)
				const image1Anim = gsap.fromTo(
					'.image-one',
					{ opacity: 0, x: -50, y: 50},
					{
						opacity: 1,
						x: 0,
						y: 0,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: twoImagesSection,
							start: 'top 75%',
							end: 'top 30%',
							scrub: 1
						}
					}
				);
				if (image1Anim.scrollTrigger) triggers.push(image1Anim.scrollTrigger);

				// Animation de la deuxième image (slide from bottom-right avec délai)
				const image2Anim = gsap.fromTo(
					'.image-two',
					{ opacity: 0, x: 50, y: 50 },
					{
						opacity: 1,
						x: 0,
						y: 0,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: twoImagesSection,
							start: 'top 75%',
							end: 'top 30%',
							scrub: 1
						}
					}
				);
				if (image2Anim.scrollTrigger) triggers.push(image2Anim.scrollTrigger);
			});
		});

		// Cleanup - ne tue que les triggers de ce composant
		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	});
</script>

<section bind:this={twoImagesSection} class="flex xl:flex-row flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
    <article class="two-images-text py-8 lg:py-16 xl:py-24 px-4 sm:px-8 lg:px-12 xl:px-24 w-full xl:w-1/2 max-w-2xl">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-slate-100">{twoImgContent.title}</h2>

        <p class="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {twoImgContent.content}
        </p>

        <div class="py-8">
            <ButtonOne {buttonAttributs} />
        </div>
    </article>

    <article class="w-full xl:w-1/2 flex justify-center items-center relative px-4 py-8 lg:py-4">
        <div class="relative w-full max-w-2xl h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <!-- Première image (arrière-plan, à gauche) -->
            <div class="image-one absolute left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-0">
                <img 
                    src={twoImgContent.src} 
                    alt={twoImgContent.alt} 
                    class="rounded-xl shadow-2xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                />
            </div>
            
            <!-- Deuxième image (avant-plan, chevauchement à droite et légèrement en bas) -->
            <div class="image-two absolute left-32 sm:left-48 lg:left-60 xl:left-72 top-[55%] sm:top-[58%] -translate-y-1/2 z-10">
                <img 
                    src={twoImgContent.srcTwo} 
                    alt={twoImgContent.altTwo} 
                    class="rounded-xl shadow-2xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                />
            </div>
        </div>
    </article>
</section>