<script>
	import { page } from '$app/stores';

	let { navigation } = $props();
	let sidebarOpen = $state(true);

	function isActiveUrl(url) {
		return $page.url.pathname === url;
	}

	function hasActiveChild(item) {
		if (item.url && isActiveUrl(item.url)) return true;
		if (item.children) {
			return item.children.some(child => hasActiveChild(child));
		}
		return false;
	}
</script>

<aside
	class="transition-all duration-300 ease-in-out bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border-r border-gray-200 dark:border-gray-700 {sidebarOpen ? 'w-80' : 'w-16'} flex-shrink-0"
>
	<div class="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
		<!-- Toggle button -->
		<button
			onclick={() => sidebarOpen = !sidebarOpen}
			class="w-full flex items-center justify-center p-2 mb-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-[#2594E4] transition-all duration-200"
			title={sidebarOpen ? 'Réduire la navigation' : 'Afficher la navigation'}
		>
			<svg
				class="w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-300 {sidebarOpen ? '' : 'rotate-180'}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
			</svg>
		</button>

		{#if sidebarOpen}
			<nav class="space-y-2">
				{#each navigation as section}
					<div class="mb-4">
						<!-- Section title -->
						<div class="px-3 py-2 text-sm font-bold text-gray-800 dark:text-white bg-{section.color}-100 dark:bg-{section.color}-900/30 rounded-lg mb-2">
							{section.title}
						</div>

						<!-- Section children -->
						{#if section.children}
							<div class="space-y-1 ml-2">
								{#each section.children as item}
									{#if item.url}
										<a
											href={item.url}
											class="block px-3 py-2 text-sm rounded-lg transition-colors {isActiveUrl(item.url)
												? 'bg-[#2594E4] text-white font-semibold'
												: 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}"
										>
											{item.title}
										</a>
									{:else}
										<!-- Subsection with children -->
										<div class="mb-2">
											<div class="px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 bg-{item.color}-50 dark:bg-{item.color}-900/20 rounded-lg">
												{item.title}
											</div>
											{#if item.children}
												<div class="ml-3 mt-1 space-y-1">
													{#each item.children as subitem}
														{#if subitem.url}
															<a
																href={subitem.url}
																class="block px-2 py-1.5 text-xs rounded-lg transition-colors {isActiveUrl(subitem.url)
																	? 'bg-[#2594E4] text-white font-semibold'
																	: 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}"
															>
																{subitem.title}
															</a>
														{:else}
															<!-- Subsection with nested children -->
															<div class="mb-1">
																<div class="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
																	{subitem.title}
																</div>
																{#if subitem.children}
																	<div class="ml-2 space-y-0.5">
																		{#each subitem.children as nesteditem}
																			<a
																				href={nesteditem.url}
																				class="block px-2 py-1 text-xs rounded-lg transition-colors {isActiveUrl(nesteditem.url)
																					? 'bg-[#2594E4] text-white font-semibold'
																					: 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}"
																			>
																				{nesteditem.title}
																			</a>
																		{/each}
																	</div>
																{/if}
															</div>
														{/if}
													{/each}
												</div>
											{/if}
										</div>
									{/if}
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</nav>
		{/if}
	</div>
</aside>
