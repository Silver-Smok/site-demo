<script>
	import { page } from '$app/stores';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import 'overlayscrollbars/overlayscrollbars.css';

	let { navigation } = $props();
	let sidebarOpen = $state(true);
	let expandedSections = $state(new Set());

	// Configuration OverlayScrollbars
	const scrollbarOptions = {
		overflow: {
			x: 'hidden',
			y: 'scroll'
		},
		scrollbars: {
			theme: 'os-theme-custom',
			autoHide: 'never',
			visibility: 'visible'
		}
	};

	function isActiveUrl(url) {
		return $page.url.pathname === url;
	}

	function toggleSection(sectionId) {
		const newSet = new Set(expandedSections);
		if (newSet.has(sectionId)) {
			newSet.delete(sectionId);
		} else {
			newSet.add(sectionId);
		}
		expandedSections = newSet;
	}

	// Auto-expand sections that contain active items
	$effect(() => {
		const newExpanded = new Set();
		navigation.forEach((section, idx) => {
			if (section.children) {
				const hasActive = checkIfHasActive(section.children);
				if (hasActive) {
					newExpanded.add(`section-${idx}`);
				}
			}
		});
		expandedSections = newExpanded;
	});

	function checkIfHasActive(items) {
		return items.some(item => {
			if (item.url && isActiveUrl(item.url)) return true;
			if (item.children) return checkIfHasActive(item.children);
			return false;
		});
	}
</script>

<aside
	class="transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 shadow-lg {sidebarOpen ? 'w-72' : 'w-14'} flex-shrink-0"
>
	<div class="sticky top-16 h-[calc(100vh-4rem)] flex flex-col">
		<!-- Header with toggle -->
		<div class="p-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#2594E4] to-[#2528e4]">
			<div class="flex items-center justify-between">
				{#if sidebarOpen}
					<h2 class="text-sm font-bold text-white tracking-wide">DOCUMENTATION</h2>
				{/if}
				<button
					onclick={() => sidebarOpen = !sidebarOpen}
					class="p-1.5 rounded-md bg-white/20 hover:bg-white/30 transition-all duration-200 {sidebarOpen ? '' : 'mx-auto'}"
					title={sidebarOpen ? 'Réduire' : 'Agrandir'}
				>
					<svg
						class="w-4 h-4 text-white transition-transform duration-300 {sidebarOpen ? '' : 'rotate-180'}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Navigation content -->
		<OverlayScrollbarsComponent
			element="div"
			class="flex-1 px-2 py-3 nav-scroll-container"
			options={scrollbarOptions}
			defer
		>
			{#if sidebarOpen}
				<nav class="space-y-1">
					{#each navigation as section, sectionIdx}
						<div class="mb-3">
							<!-- Section header - collapsible -->
							<button
								onclick={() => toggleSection(`section-${sectionIdx}`)}
								class="w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all group"
							>
								<span class="flex items-center gap-2">
									<div class="w-2 h-2 rounded-full bg-{section.color}-500"></div>
									{section.title}
								</span>
								<svg
									class="w-3 h-3 transition-transform duration-200 {expandedSections.has(`section-${sectionIdx}`) ? 'rotate-90' : ''}"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
								</svg>
							</button>

							<!-- Section children -->
							{#if expandedSections.has(`section-${sectionIdx}`) && section.children}
								<div class="mt-1 ml-1 space-y-0.5 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
									{#each section.children as item}
										{#if item.url}
											<a
												href={item.url}
												class="block px-3 py-1.5 text-sm rounded-md transition-all {isActiveUrl(item.url)
													? 'bg-gradient-to-r from-[#2594E4] to-[#2528e4] text-white font-medium shadow-sm'
													: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:pl-4'}"
											>
												{item.title}
											</a>
										{:else}
											<!-- Subsection -->
											<div class="my-1">
												<div class="px-3 py-1 text-xs font-semibold text-{item.color}-600 dark:text-white uppercase tracking-wide">
													{item.title}
												</div>
												{#if item.children}
													<div class="ml-2 mt-0.5 space-y-0.5">
														{#each item.children as subitem}
															{#if subitem.url}
																<a
																	href={subitem.url}
																	class="block px-2 py-1 text-xs rounded-md transition-all {isActiveUrl(subitem.url)
																		? 'bg-[#2594E4] text-white font-medium'
																		: 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#2594E4] dark:hover:text-[#2594E4]'}"
																>
																	{subitem.title}
																</a>
															{:else}
																<!-- Nested subsection -->
																<div class="my-0.5">
																	<div class="px-2 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-500">
																		{subitem.title}
																	</div>
																	{#if subitem.children}
																		<div class="ml-2 space-y-0.5">
																			{#each subitem.children as nesteditem}
																				<a
																					href={nesteditem.url}
																					class="block px-2 py-1 text-xs rounded-md transition-all {isActiveUrl(nesteditem.url)
																						? 'bg-[#2594E4] text-white font-medium'
																						: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-[#2594E4]'}"
																				>
																					• {nesteditem.title}
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
			{:else}
				<!-- Collapsed view - just icons/dots -->
				<div class="space-y-2 flex flex-col items-center">
					{#each navigation as section}
						<div
							class="w-3 h-3 rounded-full bg-{section.color}-500 cursor-pointer hover:scale-125 transition-transform"
							title={section.title}
						></div>
					{/each}
				</div>
			{/if}
		</OverlayScrollbarsComponent>

		<!-- Footer -->
		{#if sidebarOpen}
			<div class="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
				<div class="text-xs text-gray-500 dark:text-gray-400 text-center">
					<span class="font-semibold text-[#2594E4]">SilverStock</span> Docs
				</div>
			</div>
		{/if}
	</div>
</aside>

<style>
	/* Navigation scroll container */
	.nav-scroll-container {
		height: 100%;
		overflow: auto;
	}

	/* Custom OverlayScrollbars theme - utilise les bons sélecteurs */
	:global(.os-theme-custom.os-scrollbar) {
		--os-size: 8px;
		--os-padding-perpendicular: 2px;
		--os-padding-axis: 2px;
		--os-track-border-radius: 0px;
		--os-track-bg: transparent;
		--os-track-bg-hover: transparent;
		--os-track-bg-active: transparent;
		--os-handle-border-radius: 4px;
		--os-handle-bg: linear-gradient(180deg, #2594E4, #2528e4);
		--os-handle-bg-hover: linear-gradient(180deg, #1e7bc4, #1e20c4);
		--os-handle-bg-active: #1a5fa0;
		--os-handle-min-size: 40px;
		--os-handle-max-size: none;
		--os-handle-perpendicular-size: 100%;
		--os-handle-perpendicular-size-hover: 100%;
		--os-handle-perpendicular-size-active: 100%;
	}

	/* Alternative approach with direct class selectors */
	:global(.os-theme-custom .os-scrollbar-handle) {
		background: linear-gradient(180deg, #2594E4, #2528e4) !important;
		border-radius: 4px !important;
	}

	:global(.os-theme-custom .os-scrollbar-handle:hover) {
		background: linear-gradient(180deg, #1e7bc4, #1e20c4) !important;
	}

	:global(.os-theme-custom .os-scrollbar-track) {
		background: transparent !important;
	}

	/* Dark mode adjustments */
	:global(.dark .os-theme-custom .os-scrollbar-handle) {
		background: linear-gradient(180deg, rgba(37, 148, 228, 0.7), rgba(37, 40, 228, 0.7)) !important;
	}

	:global(.dark .os-theme-custom .os-scrollbar-handle:hover) {
		background: linear-gradient(180deg, #2594E4, #2528e4) !important;
	}
</style>
