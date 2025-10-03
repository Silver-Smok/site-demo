<script>
	import ButtonOne from "./ButtonOne.svelte";

	let { buttonAttributs = {}, twoImgContent = {} } = $props();
</script>

<section class="flex xl:flex-row flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
    <article class="py-8 lg:py-16 xl:py-24 px-4 sm:px-8 lg:px-12 xl:px-24 w-full xl:w-1/2 max-w-2xl">
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
            <div class="absolute left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-0">
                <img 
                    src={twoImgContent.src} 
                    alt={twoImgContent.alt} 
                    class="rounded-xl shadow-2xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                />
            </div>
            
            <!-- Deuxième image (avant-plan, chevauchement à droite et légèrement en bas) -->
            <div class="absolute left-32 sm:left-48 lg:left-60 xl:left-72 top-[55%] sm:top-[58%] -translate-y-1/2 z-10">
                <img 
                    src={twoImgContent.srcTwo} 
                    alt={twoImgContent.altTwo} 
                    class="rounded-xl shadow-2xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                />
            </div>
        </div>
    </article>
</section>