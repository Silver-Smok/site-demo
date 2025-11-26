<script>
	const tests = [
		{
			id: 'test',
			title: 'Test 1 - Design Minimaliste',
			description: 'Layout épuré et centré avec iframe Canva simple',
			url: '/assistance/les-tests/test',
			icon: '1',
			color: 'blue'
		},
		{
			id: 'test2',
			title: 'Test 2 - Design Marketing',
			description: 'Layout enrichi avec cartes d\'info, sidebar et CTA',
			url: '/assistance/les-tests/test2',
			icon: '2',
			color: 'purple'
		},
		{
			id: 'test3',
			title: 'Test 3 - E-Learning Configuration',
			description: 'Sommaire interactif pliable avec navigation par slides Canva',
			url: '/assistance/les-tests/test3',
			icon: '3',
			color: 'green'
		},
		{
			id: 'test4',
			title: 'Test 4 - Paramètres',
			description: 'Version compacte avec 9 sections et présentation Canva interactive',
			url: '/assistance/les-tests/test4',
			icon: '4',
			color: 'orange'
		}
	];

	function getColorClasses(color) {
		const colors = {
			blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
			purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
			green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
			orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
		};
		return colors[color] || colors.blue;
	}
</script>

<svelte:head>
	<title>Pages de test - SilverStock</title>
	<meta name="description" content="Index des pages de test pour les layouts de documentation SilverStock" />
</svelte:head>

<main class="dark:bg-gray-900 dark:text-white min-h-screen">
	<!-- Hero Section -->
	<section class="relative bg-gradient-to-br from-[#2594E4] to-[#2528e4] dark:from-[#1e3a8a] dark:to-[#1e1b4b] py-20 px-6 shadow-2xl">
		<div class="max-w-5xl mx-auto text-center">
			<div class="inline-block bg-white/20 dark:bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
				<span class="text-white text-sm font-semibold">Tests & Prototypes</span>
			</div>
			<h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
				Pages de Test
			</h1>
			<p class="text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
				Explorez les différentes mises en page et designs pour la documentation SilverStock
			</p>
		</div>
	</section>

	<!-- Test Cards Section -->
	<section class="py-16 px-6 bg-white dark:bg-gray-900">
		<div class="max-w-6xl mx-auto">
			<div class="grid md:grid-cols-2 gap-8">
				{#each tests as test}
					<a
						href={test.url}
						class="group block bg-gradient-to-br {getColorClasses(test.color)} rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
					>
						<div class="flex items-start gap-6">
							<!-- Icon/Number -->
							<div class="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
								<span class="text-3xl font-bold text-white">{test.icon}</span>
							</div>

							<!-- Content -->
							<div class="flex-1">
								<h3 class="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
									{test.title}
								</h3>
								<p class="text-white/90 text-sm leading-relaxed mb-4">
									{test.description}
								</p>

								<!-- Arrow indicator -->
								<div class="flex items-center gap-2 text-white font-medium">
									<span class="text-sm">Voir la démo</span>
									<svg
										class="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>

			<!-- Info Box -->
			<div class="mt-12 bg-blue-50 dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-900 rounded-xl p-6">
				<div class="flex items-start gap-4">
					<svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
					</svg>
					<div>
						<h4 class="text-lg font-bold text-gray-800 dark:text-white mb-2">À propos de ces tests</h4>
						<p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
							Ces pages sont des prototypes de mise en page pour présenter la documentation et les tutoriels SilverStock. Chaque test explore une approche différente en termes de design, d'interactivité et de structure de navigation.
						</p>
					</div>
				</div>
			</div>

			<!-- Back button -->
			<div class="mt-12 text-center">
				<a
					href="/assistance"
					class="inline-flex items-center gap-2 bg-gradient-to-r from-[#2594E4] to-[#2528e4] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#2528e4] hover:to-[#2594E4] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					<span>Retour à l'assistance</span>
				</a>
			</div>
		</div>
	</section>
</main>
