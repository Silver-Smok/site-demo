<script>
	let { content = '' } = $props();
</script>

{#if content}
	<article class="flex w-full py-6 sm:py-8 lg:py-10 flex-col">
		<div class="w-full px-4 sm:px-5">
			<p class="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-slate-300 text-center lg:text-left">
				{content}
			</p>
		</div>
	</article>
{/if}
