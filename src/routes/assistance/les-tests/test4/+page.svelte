<script>
	import CanvaEmbed from '$lib/components/CanvaEmbed.svelte';

	// URL de base de la présentation Canva
	const canvaBaseUrl = 'https://www.canva.com/design/DAG5JmOC5j8/VVt-7edKZQPUfTfWsBdNTg/view';

	// Configuration des sections avec leurs numéros de page correspondants
	// Ajustez les numéros de page selon votre présentation Canva
	const sections = [
		{
			id: 'stocks',
			title: 'Stocks, franchises et entités',
			description: 'Gestion des stocks multi-sites et configuration des entités',
			icon: 'document',
			page: 1
		},
		{
			id: 'regles-panier',
			title: 'Règles panier',
			description: 'Configuration des règles de panier et promotions',
			icon: 'cog',
			page: 2
		},
		{
			id: 'mails',
			title: 'Configuration des mails',
			description: 'Paramétrage des emails automatiques',
			icon: 'palette',
			page: 3
		},
		{
			id: 'factures',
			title: 'Configuration des factures',
			description: 'Personnalisation des factures et mentions légales',
			icon: 'document',
			page: 4
		},
		{
			id: 'sms',
			title: 'Configuration des SMS',
			description: 'Paramétrage des SMS automatiques',
			icon: 'palette',
			page: 5
		},
		{
			id: 'paiement',
			title: 'Modes de paiement',
			description: 'Configuration des moyens de paiement acceptés',
			icon: 'cog',
			page: 6
		},
		{
			id: 'fiche-client',
			title: 'Fiche client',
			description: 'Personnalisation des fiches clients',
			icon: 'document',
			page: 7
		},
		{
			id: 'depenses',
			title: 'Dépenses',
			description: 'Gestion et suivi des dépenses',
			icon: 'cog',
			page: 8
		},
		{
			id: 'poches',
			title: 'Gestion des poches',
			description: 'Configuration des poches de rangement',
			icon: 'document',
			page: 9
		}
	];

	let activeSection = $state(sections[0]);
	let sidebarOpen = $state(true);

	// Génère l'URL de l'iframe avec le hash de la page
	function getCanvaEmbedUrl(page) {
		return `${canvaBaseUrl}?embed#page-${page}`;
	}

	// Génère l'URL du lien externe
	function getCanvaLinkUrl(page) {
		return `${canvaBaseUrl}#page-${page}`;
	}

	function selectSection(section) {
		activeSection = section;
	}

	function getIconPath(icon) {
		switch (icon) {
			case 'document':
				return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
			case 'palette':
				return 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01';
			case 'cog':
				return 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z';
			default:
				return '';
		}
	}
</script>

<svelte:head>
	<title>Paramètres - SilverStock</title>
	<meta name="description" content="Tutoriels vidéo pour configurer les paramètres de SilverStock : stocks, factures, mails, SMS et plus" />
</svelte:head>

<main class="dark:bg-gray-900 dark:text-white">
	<!-- Hero Section with Gradient Background -->
	<section class="relative bg-gradient-to-br from-[#2594E4] to-[#2528e4] dark:from-[#1e3a8a] dark:to-[#1e1b4b] py-16 px-6 shadow-2xl">
		<div class="max-w-6xl mx-auto text-center">
			<div class="inline-block bg-white/20 dark:bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
				<span class="text-white text-sm font-semibold">Tutoriels Vidéo</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
				Paramètres
			</h1>
			<p class="text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
				Découvrez comment configurer tous les paramètres de SilverStock grâce à nos tutoriels vidéo
			</p>
		</div>
	</section>

	<!-- Content Section -->
	<section class="py-12 px-6 bg-white dark:bg-gray-900">
		<div class="max-w-6xl mx-auto">
			<!-- Info Cards Grid -->
			<div class="grid md:grid-cols-3 gap-6 mb-12">
				<div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-blue-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-[#2594E4] p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Configuration</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Paramétrez votre application selon vos besoins spécifiques
					</p>
				</div>

				<div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-purple-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-purple-500 p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Vidéos tutoriels</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Apprenez visuellement avec nos guides vidéo détaillés
					</p>
				</div>

				<div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-green-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-green-500 p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Pas à pas</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Suivez chaque étape pour une configuration optimale
					</p>
				</div>
			</div>

			<!-- Presentation Section with Interactive Sommaire -->
			<div class="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
				<div class="flex">
					<!-- Left sidebar with interactive sommaire -->
					<div
						class="transition-all duration-300 ease-in-out bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 border-r border-gray-200 dark:border-gray-600 {sidebarOpen ? 'w-72 lg:w-80 p-4' : 'w-12 p-2'}"
					>
						<!-- Toggle button -->
						<button
							onclick={() => sidebarOpen = !sidebarOpen}
							class="w-full flex items-center justify-center p-1.5 mb-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 hover:border-[#2594E4] transition-all duration-200"
							title={sidebarOpen ? 'Réduire le sommaire' : 'Afficher le sommaire'}
						>
							<svg
								class="w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 {sidebarOpen ? '' : 'rotate-180'}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
							</svg>
						</button>

						{#if sidebarOpen}
						<div>
							<h2 class="text-lg font-bold text-gray-800 dark:text-white mb-3">
								Sommaire
							</h2>

							<!-- Interactive sommaire items - compact -->
							<div class="space-y-1.5 mb-4 max-h-[55vh] overflow-y-auto pr-1">
								{#each sections as section, index}
									<button
										onclick={() => selectSection(section)}
										class="w-full text-left group transition-all duration-200 ease-out"
									>
										<div
											class="flex items-center gap-2 p-2 rounded-lg transition-all duration-200 {activeSection.id === section.id
												? 'bg-[#2594E4] shadow-md shadow-blue-500/20'
												: 'bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 hover:border-[#2594E4]'}"
										>
											<div
												class="rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-200 {activeSection.id === section.id
													? 'bg-white text-[#2594E4]'
													: 'bg-[#2594E4] text-white'}"
											>
												{index + 1}
											</div>
											<p class="font-medium text-xs truncate transition-colors duration-200 {activeSection.id === section.id
												? 'text-white'
												: 'text-gray-700 dark:text-white'}">
												{section.title}
											</p>
										</div>
									</button>
								{/each}
							</div>

							<!-- Progress indicator - compact -->
							<div class="mb-3">
								<div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
									<span>{sections.findIndex(s => s.id === activeSection.id) + 1} / {sections.length}</span>
								</div>
								<div class="h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
									<div
										class="h-full bg-gradient-to-r from-[#2594E4] to-[#2528e4] rounded-full transition-all duration-500 ease-out"
										style="width: {((sections.findIndex(s => s.id === activeSection.id) + 1) / sections.length) * 100}%"
									></div>
								</div>
							</div>

							<!-- Navigation buttons - compact -->
							<div class="flex gap-1.5">
								<button
									onclick={() => {
										const currentIndex = sections.findIndex(s => s.id === activeSection.id);
										if (currentIndex > 0) selectSection(sections[currentIndex - 1]);
									}}
									disabled={sections.findIndex(s => s.id === activeSection.id) === 0}
									class="flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all duration-200
										{sections.findIndex(s => s.id === activeSection.id) === 0
											? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
											: 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 hover:border-[#2594E4] hover:text-[#2594E4]'}"
								>
									←
								</button>
								<button
									onclick={() => {
										const currentIndex = sections.findIndex(s => s.id === activeSection.id);
										if (currentIndex < sections.length - 1) selectSection(sections[currentIndex + 1]);
									}}
									disabled={sections.findIndex(s => s.id === activeSection.id) === sections.length - 1}
									class="flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all duration-200
										{sections.findIndex(s => s.id === activeSection.id) === sections.length - 1
											? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
											: 'bg-[#2594E4] text-white hover:bg-[#2528e4]'}"
								>
									→
								</button>
							</div>
						</div>
						{/if}
					</div>

					<!-- Right side with dynamic video -->
					<div class="flex-1 p-8">
						<div class="mb-4">
							<h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
								{activeSection.title}
							</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								{activeSection.description}
							</p>
						</div>

						<CanvaEmbed
							src={getCanvaEmbedUrl(activeSection.page)}
							title="{activeSection.title} - SilverStock"
							linkUrl={getCanvaLinkUrl(activeSection.page)}
							linkText="Ouvrir en plein écran sur Canva"
						/>
					</div>
				</div>
			</div>

			<!-- Bottom CTA Section -->
			<div class="mt-12 bg-gradient-to-r from-[#2594E4] to-[#2528e4] dark:from-[#1e3a8a] dark:to-[#1e1b4b] rounded-2xl p-8 text-center shadow-2xl">
				<h3 class="text-2xl font-bold text-white mb-3">
					Besoin d'aide supplémentaire ?
				</h3>
				<p class="text-white/90 mb-6 max-w-2xl mx-auto">
					Consultez notre documentation complète ou contactez notre équipe support pour un accompagnement personnalisé
				</p>
				<div class="flex flex-wrap gap-4 justify-center">
					<a
						href="/assistance"
						class="inline-block bg-white text-[#2594E4] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
					>
						Retour à l'assistance
					</a>
					<a
						href="/contact"
						class="inline-block bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
					>
						Contacter le support
					</a>
				</div>
			</div>
		</div>
	</section>
</main>
