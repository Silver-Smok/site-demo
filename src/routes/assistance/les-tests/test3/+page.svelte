<script>
	import CanvaEmbed from '$lib/components/CanvaEmbed.svelte';

	// URL de base de la présentation Canva
	const canvaBaseUrl = 'https://www.canva.com/design/DAG3EV90LS0/sae42-I0dtV2MACWyZuM7Q/view';

	// Configuration des sections avec leurs numéros de page correspondants
	const sections = [
		{
			id: 'accueil',
			title: 'Accueil',
			description: 'Introduction à E-Learning Silver Stock',
			icon: 'document',
			page: 1
		},
		{
			id: 'sommaire',
			title: 'Sommaire',
			description: 'Vue d\'ensemble de la formation',
			icon: 'document',
			page: 2
		},
		{
			id: 'preferences',
			title: 'Mes préférences',
			description: 'Mot de passe, photo de profil, bugs',
			icon: 'cog',
			page: 3
		},
		{
			id: 'notifications',
			title: 'Mes notifications',
			description: 'Accès, filtres, mode ne pas déranger',
			icon: 'palette',
			page: 9
		},
		{
			id: 'factures',
			title: 'Configuration des factures',
			description: 'En-tête, couleur, aperçu',
			icon: 'document',
			page: 16
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
	<title>E-Learning Configuration - SilverStock</title>
	<meta name="description" content="Formation complète sur la configuration de SilverStock : préférences, notifications et factures" />
</svelte:head>

<main class="dark:bg-gray-900 dark:text-white">
	<!-- Hero Section with Gradient Background -->
	<section class="relative bg-gradient-to-br from-[#2594E4] to-[#2528e4] dark:from-[#1e3a8a] dark:to-[#1e1b4b] py-16 px-6 shadow-2xl">
		<div class="max-w-6xl mx-auto text-center">
			<div class="inline-block bg-white/20 dark:bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
				<span class="text-white text-sm font-semibold">Documentation</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
				E-Learning Configuration
			</h1>
			<p class="text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
				Formation complète pour configurer SilverStock : préférences utilisateur, notifications et facturation
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
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Automatisation</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Automatisez votre processus de facturation et gagnez un temps précieux
					</p>
				</div>

				<div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-purple-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-purple-500 p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Personnalisation</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Configurez vos factures selon vos besoins et votre identité visuelle
					</p>
				</div>

				<div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-green-200 dark:border-gray-600">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-green-500 p-2 rounded-lg">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="text-lg font-bold text-gray-800 dark:text-white">Conformité</h3>
					</div>
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Respectez les normes légales françaises de facturation automatiquement
					</p>
				</div>
			</div>

			<!-- Presentation Section with Interactive Sommaire -->
			<div class="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
				<div class="flex">
					<!-- Left sidebar with interactive sommaire -->
					<div
						class="transition-all duration-300 ease-in-out bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 border-r border-gray-200 dark:border-gray-600 {sidebarOpen ? 'w-80 lg:w-96 p-8' : 'w-12 p-2'}"
					>
						<!-- Toggle button -->
						<button
							onclick={() => sidebarOpen = !sidebarOpen}
							class="w-full flex items-center justify-center p-2 mb-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 hover:border-[#2594E4] transition-all duration-200"
							title={sidebarOpen ? 'Réduire le sommaire' : 'Afficher le sommaire'}
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
						<div class="sticky top-8">
							<h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
								Sommaire interactif
							</h2>
							<p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
								Cliquez sur une section pour afficher la présentation correspondante.
							</p>

							<!-- Interactive sommaire items -->
							<div class="space-y-3 mb-6">
								{#each sections as section, index}
									<button
										onclick={() => selectSection(section)}
										class="w-full text-left group transition-all duration-300 ease-out"
									>
										<div
											class="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 {activeSection.id === section.id
												? 'bg-[#2594E4] shadow-lg shadow-blue-500/30 transform scale-[1.02]'
												: 'bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 hover:border-[#2594E4]'}"
										>
											<div
												class="rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300 {activeSection.id === section.id
													? 'bg-white text-[#2594E4]'
													: 'bg-[#2594E4] text-white group-hover:scale-110'}"
											>
												{index + 1}
											</div>
											<div class="flex-1 min-w-0">
												<p class="font-semibold text-sm transition-colors duration-300 {activeSection.id === section.id
													? 'text-white'
													: 'text-gray-800 dark:text-white'}">
													{section.title}
												</p>
												<p class="text-xs mt-0.5 transition-colors duration-300 {activeSection.id === section.id
													? 'text-white/80'
													: 'text-gray-600 dark:text-gray-400'}">
													{section.description}
												</p>
											</div>
											{#if activeSection.id === section.id}
												<div class="flex-shrink-0">
													<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
													</svg>
												</div>
											{/if}
										</div>
									</button>
								{/each}
							</div>

							<!-- Progress indicator -->
							<div class="mb-6">
								<div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
									<span>Progression</span>
									<span>{sections.findIndex(s => s.id === activeSection.id) + 1} / {sections.length}</span>
								</div>
								<div class="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
									<div
										class="h-full bg-gradient-to-r from-[#2594E4] to-[#2528e4] rounded-full transition-all duration-500 ease-out"
										style="width: {((sections.findIndex(s => s.id === activeSection.id) + 1) / sections.length) * 100}%"
									></div>
								</div>
							</div>

							<!-- Navigation buttons -->
							<div class="flex gap-2">
								<button
									onclick={() => {
										const currentIndex = sections.findIndex(s => s.id === activeSection.id);
										if (currentIndex > 0) selectSection(sections[currentIndex - 1]);
									}}
									disabled={sections.findIndex(s => s.id === activeSection.id) === 0}
									class="flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200
										{sections.findIndex(s => s.id === activeSection.id) === 0
											? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
											: 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 hover:border-[#2594E4] hover:text-[#2594E4]'}"
								>
									← Précédent
								</button>
								<button
									onclick={() => {
										const currentIndex = sections.findIndex(s => s.id === activeSection.id);
										if (currentIndex < sections.length - 1) selectSection(sections[currentIndex + 1]);
									}}
									disabled={sections.findIndex(s => s.id === activeSection.id) === sections.length - 1}
									class="flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200
										{sections.findIndex(s => s.id === activeSection.id) === sections.length - 1
											? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
											: 'bg-[#2594E4] text-white hover:bg-[#2528e4] shadow-md hover:shadow-lg'}"
								>
									Suivant →
								</button>
							</div>

							<!-- Info box -->
							<div class="mt-6 bg-blue-50 dark:bg-gray-900/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
								<p class="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
									<svg class="w-4 h-4 text-[#2594E4]" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
									</svg>
									<span class="font-semibold">Section active :</span>
								</p>
								<p class="text-xs text-gray-700 dark:text-gray-300 mt-1">
									{activeSection.title}
								</p>
							</div>
						</div>
						{/if}
					</div>

					<!-- Right side with dynamic presentation -->
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

