<script>
	import SvGdividerBottom from './SVGdividerBottom.svelte';
</script>

<div class="dark:bg-gray-900">
	<SvGdividerBottom />
</div>

<footer class="bg-white dark:bg-gray-800">
	<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<a href="/" class="flex items-center">
					<img src="/notif-logo.png" class="h-8 me-3" alt="SilverStock Logo" />
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SilverStock</span>
				</a>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				<!-- Sections commentées conservées pour usage futur -->
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© {new Date().getFullYear()} <a href="/" class="hover:underline">SilverStock™</a>. All Rights Reserved.
			</span>
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<!-- Social media icons commentés conservés pour usage futur -->
			</div>
		</div>
	</div>
</footer>
